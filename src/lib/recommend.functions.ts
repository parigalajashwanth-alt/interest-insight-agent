import { createServerFn } from "@tanstack/react-start";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";
import { SAMPLE_REELS } from "./reels";

const InputSchema = z.object({
  currentReelId: z.string(),
  historyReelIds: z.array(z.string()),
});

const ResultSchema = z.object({
  currentReel: z.string(),
  interestDetected: z.string(),
  why: z.string(),
  recommendedTechReel: z.string(),
  category: z.string(),
  whyThisRecommendation: z.string(),
  difficulty: z.string(),
  confidence: z.string(),
  hypeAvoided: z.string(),
});

export type Recommendation = z.infer<typeof ResultSchema>;

const SYSTEM_PROMPT = `You are a recommendation agent for students who scroll short-form Reels.

Your job: read the CURRENT REEL plus the student's recent watch history, infer the UNDERLYING interest (topic, context and apparent motivation), and recommend ONE genuinely useful technology Reel.

Hard rules:
- Never do keyword matching. If the student watched a Java meme, do NOT recommend "another Java meme" or a generic "Java tutorial". Generalise: Java meme + SWE lifestyle + interview joke + laptop comparison => broader interest in software engineering as a craft/career, so recommend something like practical system design, debugging skills, or memory model internals.
- Refuse hype and clickbait. Never output titles like "10 AI tools that will get you a job", "learn X in 5 minutes", "roadmap to 50 LPA". Recommend concrete, skill-building, verifiable content instead.
- The recommendation must be plausible as a 30-90 second Reel: one specific idea, engaging, not a full course.
- If the current reel is pure entertainment (pets, gaming, comedy) with little tech signal, use the history to bridge, and lower the confidence honestly. Never invent evidence.
- CATEGORY must be exactly one of: AI, DSA, Java, HLD, Cybersecurity, Cloud, Hardware, Career, Other.
- DIFFICULTY must be exactly one of: Beginner, Intermediate, Advanced. CONFIDENCE must be exactly one of: High, Medium, Low.
- "why" must cite concrete evidence from the reel content/transcripts, not generic statements.
- "hypeAvoided" states in one short line what shallow or hype recommendation you deliberately rejected and why.`;

function describe(id: string) {
  const r = SAMPLE_REELS.find((x) => x.id === id);
  if (!r) return null;
  return `- "${r.title}" by ${r.creator} [${r.genre}, ${r.durationSec}s]
  caption: ${r.caption}
  content: ${r.transcript}
  tags: ${r.tags.join(", ")}`;
}

export const recommendFromReel = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const current = describe(data.currentReelId);
    if (!current) throw new Error("Unknown reel");
    const history = data.historyReelIds
      .map(describe)
      .filter(Boolean)
      .join("\n");

    const gateway = createLovableAiGatewayProvider(key);

    const prompt = `CURRENT REEL (just watched):
${current}

RECENT WATCH HISTORY (most recent first):
${history || "(no prior history — rely on the current reel only and be honest about confidence)"}

Analyse the underlying interest and produce exactly one recommendation.`;

    try {
      const { output } = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        system: SYSTEM_PROMPT,
        prompt,
        output: Output.object({ schema: ResultSchema }),
      });
      return output;
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error) && error.text) {
        try {
          return ResultSchema.parse(JSON.parse(error.text));
        } catch {
          /* fall through */
        }
      }
      throw error;
    }
  });