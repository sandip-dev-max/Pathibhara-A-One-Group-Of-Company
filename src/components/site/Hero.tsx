import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, MapPin, Users } from "lucide-react";
import { SITE } from "@/lib/site";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { Icon: Users, label: "3000+ Candidates Connected" },
  { Icon: MapPin, label: "Trusted in Kathmandu" },
  { Icon: Zap, label: "Fast Response" },
  { Icon: ShieldCheck, label: "Verified Opportunities" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 text-white">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(15,139,109,0.45),transparent_70%),linear-gradient(180deg,rgba(4,20,15,0.7)_0%,rgba(4,20,15,0.95)_100%)]" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.07]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[42rem] rounded-full bg-primary/25 blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-glow">
            <span className="size-1.5 rounded-full bg-primary-glow animate-pulse" /> {SITE.tagline}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight">
            Connecting Nepalese Talent <br className="hidden md:block" />
            With <span className="gradient-text">Trusted Opportunities</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Pathivara A One Group of Company is a trusted job link agency helping people find verified
            opportunities across Nepal - with transparency, speed, and care.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              Apply for Jobs <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {badges.map(({ Icon, label }) => (
              <div
                key={label}
                className="glass-dark rounded-2xl px-4 py-4 flex items-center gap-3 text-left hover:border-primary/40 transition-colors"
              >
                <div className="size-9 rounded-xl bg-primary/20 text-primary-glow grid place-items-center shrink-0">
                  <Icon className="size-4" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
