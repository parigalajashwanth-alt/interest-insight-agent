import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Loader2, Play, Sparkles, ShieldCheck, History, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SAMPLE_REELS, type Reel } from "@/lib/reels";
import { recommendFromReel, type Recommendation } from "@/lib/recommend.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScrollSmart — AI Reel Interest & Tech Recommendation Agent" },
      {
        name: "description",
        content:
          "An AI agent that reads the Reels a student watches, infers the underlying interest, and recommends genuinely useful tech Reels — no keyword matching, no hype.",
      },
      { property: "og:title", content: "ScrollSmart — AI Reel Recommendation Agent" },
      {
        property: "og:description",
        content:
          "Infers real interests from short-form watch history and recommends substantive tech Reels instead of clickbait.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORY_HINT: Record<string, string> = {
  AI: "AI",
  DSA: "DSA",
  Java: "Java",
  HLD: "HLD",
  Cybersecurity: "Cybersecurity",
  Cloud: "Cloud",
  Hardware: "Hardware",
  Career: "Career",
};

function ReelCard({
  reel,
  watched,
  active,
  onWatch,
}: {
  reel: Reel;
  watched: boolean;
  active: boolean;
  onWatch: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onWatch}
      className={`group relative w-full rounded-2xl border bg-card/70 p-4 text-left transition-all hover:border-primary/60 hover:bg-card ${
        active ? "border-primary glow-panel" : "border-border"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {reel.genre} · {reel.durationSec}s
          </p>
          <h3 className="mt-1 text-base font-semibold leading-snug">{reel.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{reel.creator}</p>
        </div>
        <span
          className={`mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
            active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
          }`}
        >
          <Play className="size-4" />
        </span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{reel.caption}</p>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {reel.tags.slice(0, 3).map((t) => (
          <Badge key={t} variant="secondary" className="font-mono text-[10px] font-normal">
            {t}
          </Badge>
        ))}
        {watched && (
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-primary">
            in history
          </span>
        )}
      </div>
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border/70 py-3 first:border-t-0 first:pt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

function Index() {
  const [history, setHistory] = useState<string[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const call = useServerFn(recommendFromReel);

  const mutation = useMutation<Recommendation, Error, { id: string; history: string[] }>({
    mutationFn: ({ id, history: h }) =>
      call({ data: { currentReelId: id, historyReelIds: h } }),
  });

  const watch = (id: string) => {
    const nextHistory = [current, ...history].filter(
      (x): x is string => Boolean(x) && x !== id,
    );
    setHistory(nextHistory.slice(0, 6));
    setCurrent(id);
    mutation.mutate({ id, history: nextHistory.slice(0, 6) });
  };

  const reset = () => {
    setHistory([]);
    setCurrent(null);
    mutation.reset();
  };

  const rec = mutation.data;

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 pb-20 pt-10">
      <header className="hero-gradient rounded-3xl border border-border p-7 md:p-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          <Sparkles className="size-3.5" /> interest inference agent
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
          Keep scrolling. <span className="accent-gradient-text">Scroll into something useful.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Watch a few Reels below. The agent reads what you actually engaged with, infers the
          interest underneath it — not the keywords on top — and recommends one substantive tech
          Reel. Hype like “10 AI tools that will get you a job” is explicitly rejected.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">The feed</h2>
            <Button variant="ghost" size="sm" onClick={reset} className="gap-1.5">
              <RotateCcw className="size-3.5" /> Reset session
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {SAMPLE_REELS.map((reel) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                active={current === reel.id}
                watched={history.includes(reel.id)}
                onWatch={() => watch(reel.id)}
              />
            ))}
          </div>
          <div className="mt-5 flex items-start gap-2 rounded-xl border border-border/70 bg-card/40 p-4">
            <History className="mt-0.5 size-4 shrink-0 text-accent" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              {history.length === 0
                ? "No watch history yet — the first Reel you play sets the signal. Play three or four to see the agent generalise instead of keyword-match."
                : `Watch history: ${history
                    .map((id) => SAMPLE_REELS.find((r) => r.id === id)?.title)
                    .filter(Boolean)
                    .join(" · ")}`}
            </p>
          </div>
        </section>

        <section className="lg:sticky lg:top-8 lg:self-start">
          <h2 className="mb-4 text-lg font-semibold">Agent output</h2>
          <div className="rounded-2xl border border-border bg-card/70 p-6">
            {mutation.isPending && (
              <div className="flex items-center gap-3 py-10 text-sm text-muted-foreground">
                <Loader2 className="size-4 animate-spin text-primary" />
                Reading the Reel, weighing your history…
              </div>
            )}

            {!mutation.isPending && mutation.isError && (
              <div className="py-6">
                <p className="text-sm font-medium text-destructive">Recommendation failed</p>
                <p className="mt-2 text-sm text-muted-foreground">{mutation.error.message}</p>
                <Button
                  className="mt-4"
                  size="sm"
                  onClick={() => current && mutation.mutate({ id: current, history })}
                >
                  Try again
                </Button>
              </div>
            )}

            {!mutation.isPending && !mutation.isError && !rec && (
              <p className="py-10 text-sm text-muted-foreground">
                Play a Reel from the feed and the analysis lands here.
              </p>
            )}

            {!mutation.isPending && rec && (
              <div>
                <Field label="Current reel">{rec.currentReel}</Field>
                <Field label="Interest detected">
                  <span className="font-medium text-primary">{rec.interestDetected}</span>
                </Field>
                <Field label="Why">{rec.why}</Field>
                <Field label="Recommended tech reel">
                  <span className="font-medium">{rec.recommendedTechReel}</span>
                </Field>
                <Field label="Category">
                  <Badge className="font-mono text-[11px]">
                    {CATEGORY_HINT[rec.category] ?? rec.category}
                  </Badge>
                </Field>
                <Field label="Why this recommendation">{rec.whyThisRecommendation}</Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Difficulty">{rec.difficulty}</Field>
                  <Field label="Confidence">{rec.confidence}</Field>
                </div>
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-accent/30 bg-accent/10 p-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Hype filter: </span>
                    {rec.hypeAvoided}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
