import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  Icon,
  title,
  description,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-3xl bg-card p-7 border border-border/70 shadow-[var(--shadow-card)] hover-lift overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]" />
      <div className="relative">
        <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
