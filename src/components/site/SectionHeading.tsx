import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-4 text-4xl leading-[1.1] md:text-5xl">{title}</h2>
      </Reveal>
      <Reveal delay={140}>
        <div className={cn("gold-rule mt-6", align === "center" && "mx-auto")} />
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
