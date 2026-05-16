import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaStrip() {
  return (
    <section className="container mx-auto px-4 my-24">
      <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 text-white shadow-[var(--shadow-elegant)]"
           style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold text-primary-glow">
              Get hired faster
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.1]">
              Looking for a Job Opportunity?
            </h3>
            <p className="mt-4 text-white/75 max-w-xl leading-relaxed">
              Contact us directly and receive fast job updates on WhatsApp.No false promises.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone className="size-4" /> Call {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Open contact form <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
