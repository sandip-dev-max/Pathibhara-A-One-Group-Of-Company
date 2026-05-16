import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaStrip } from "@/components/site/CtaStrip";
import { services, steps } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pathivara A One Group" },
      { name: "description", content: "Job placement, recruitment support, staff hiring, career guidance and verified job updates across Nepal." },
      { property: "og:title", content: "Services — Pathivara A One Group" },
      { property: "og:description", content: "End-to-end job link services for candidates and employers in Nepal." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-36">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Services"
            title={<>Premium services for <span className="gradient-text">candidates & employers</span></>}
            description="Everything you need to find the right role - or the right people - without the noise."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* How it works timeline */}
      <section className="container mx-auto px-4 mt-24">
        <SectionHeading
          eyebrow="How it works"
          title={<>A clear path <span className="gradient-text">from hello to hired</span></>}
          description="Five simple steps designed to be fast, transparent and stress-free."
        />
        <ol className="mt-14 relative grid md:grid-cols-5 gap-6">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl bg-card border border-border/70 p-6 shadow-[var(--shadow-card)] hover-lift">
              <div className="size-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground grid place-items-center font-display text-lg font-semibold mx-auto -mt-12 shadow-[var(--shadow-glow)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="mt-5 font-display font-semibold text-ink text-center">{s.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-center">{s.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaStrip />
    </>
  );
}
