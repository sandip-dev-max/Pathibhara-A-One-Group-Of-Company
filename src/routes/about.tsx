import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, ShieldCheck, Zap, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaStrip } from "@/components/site/CtaStrip";
import staffImg from "@/assets/gallery-staff.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pathivara A One Group of Company" },
      { name: "description", content: "A trusted job link agency based in Tinkune, Kathmandu — connecting job seekers with verified employers across Nepal." },
      { property: "og:title", content: "About Pathivara A One Group" },
      { property: "og:description", content: "Our mission: help people find reliable opportunities with transparency, speed, and trust." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const why = [
  { Icon: ShieldCheck, title: "Verified Opportunities", description: "Every job is checked before we share it with you." },
  { Icon: Zap, title: "Fast Response", description: "Replies on WhatsApp within minutes during business hours." },
  { Icon: Handshake, title: "Honest Guidance", description: "We tell you what you need to know — not what you want to hear." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="About us"
            title={<>A trusted bridge between <span className="gradient-text">talent and opportunity</span></>}
            description="We are a trusted job link agency based in Tinkune, Kathmandu, dedicated to connecting job seekers with verified employers across Nepal."
          />
          <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div className="relative">
              <img src={staffImg} alt="Pathivara A One Group team" width={1024} height={1024} loading="lazy" className="rounded-[2rem] shadow-[var(--shadow-elegant)] w-full object-cover" />
              <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl p-5 shadow-[var(--shadow-card)] max-w-[220px]">
                <div className="text-3xl font-display font-semibold text-primary">3000+</div>
                <div className="text-xs text-muted-foreground mt-1">Candidates connected across Nepal</div>
              </div>
            </div>
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Our mission is to help people find reliable opportunities with transparency, speed, and trust. From skilled
                roles to entry-level positions, we work hard to make sure every match is a good one.
              </p>
              <p>
                We work with employers across Kathmandu - cafes, retail brands, warehouses, hotels and offices - and connect
                them to the right people on our growing community.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-card border border-border/70 p-5">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center"><Target className="size-5" /></div>
                  <h4 className="mt-3 font-display font-semibold text-ink">Mission</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">Connect every Nepalese job seeker with a verified, dignified opportunity.</p>
                </div>
                <div className="rounded-2xl bg-card border border-border/70 p-5">
                  <div className="size-10 rounded-xl bg-accent/10 text-accent grid place-items-center"><Eye className="size-5" /></div>
                  <h4 className="mt-3 font-display font-semibold text-ink">Vision</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">Become the most trusted job link agency across Nepal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20">
        <SectionHeading
          eyebrow="Why choose us"
          title={<>Built on <span className="gradient-text">trust, speed and care</span></>}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {why.map(({ Icon, title, description }) => (
            <div key={title} className="rounded-3xl bg-card border border-border/70 p-7 shadow-[var(--shadow-card)] hover-lift">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20">
        <div className="rounded-[2rem] bg-card border border-border/70 p-10 shadow-[var(--shadow-card)] text-center">
          <Heart className="mx-auto size-8 text-primary" />
          <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-ink">Our promise</h3>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            We will never charge candidates for fake guarantees. Every conversation is real, every job is real, and every
            placement is built on honest work and long-term trust.
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
