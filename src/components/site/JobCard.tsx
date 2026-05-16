import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/site";

export function JobCard({
  Icon,
  title,
  description,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-border/70 bg-card p-6 flex flex-col gap-4 hover-lift overflow-hidden">
      <div className="absolute -right-12 -top-12 size-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-start justify-between">
        <div className="size-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center shadow-[var(--shadow-glow)]">
          <Icon className="size-5" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary/70">Hiring</span>
      </div>
      <div className="relative">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <a
        href={waLink(`Hello Pathivara A One, I'm interested in the ${title} position. Please share details.`)}
        target="_blank"
        rel="noopener"
        className="relative mt-auto inline-flex items-center justify-between gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-ink group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
      >
        Apply Now <ArrowUpRight className="size-4" />
      </a>
    </div>
  );
}
