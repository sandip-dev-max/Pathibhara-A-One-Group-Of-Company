import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold text-primary">
          <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-ink leading-[1.1]">{title}</h2>
      {description && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
