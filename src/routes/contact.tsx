import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pathivara A One Group" },
      {
        name: "description",
        content:
          "Contact Pathivara A One Group of Company in Tinkune, Kathmandu. Call, WhatsApp or send a message.",
      },
      { property: "og:title", content: "Contact Pathivara A One Group" },
      {
        property: "og:description",
        content: "Call, WhatsApp or send a message to apply for verified jobs.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", job: "", address: "", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `*New Job Inquiry — Pathivara A One*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Interested Job: ${form.job}`,
      `Address: ${form.address}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener");
  }

  const set =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="pt-36 pb-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's connect on <span className="gradient-text">your next opportunity</span>
            </>
          }
          description="Reach us directly - we usually reply on WhatsApp within hours."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-8">
          {/* Left — contact info */}
          <div className="space-y-4">
            <div
              className="rounded-3xl p-7 text-white shadow-[var(--shadow-elegant)] relative overflow-hidden"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/30 blur-3xl" />
              <h3 className="relative font-display text-2xl font-semibold">
                Looking for a Job Opportunity?
              </h3>
              <p className="relative mt-3 text-white/75 text-sm leading-relaxed">
                Contact us directly and receive fast job updates on WhatsApp.
              </p>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Phone className="size-4" /> Call now
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border/70 p-6 shadow-[var(--shadow-card)]">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Office</div>
                    <div className="text-sm text-muted-foreground">{SITE.address}</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Phone</div>
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">WhatsApp</div>
                    <a
                      href={SITE.whatsappLink}
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {SITE.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Sun – Fri · 10:00 AM – 5:00 PM
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border/70 shadow-[var(--shadow-card)] aspect-[4/3]">
              <iframe
                title="Tinkune, Kathmandu"
                src="https://www.google.com/maps?q=Muni+Bhairab+Marg,+Kathmandu+44600&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-card border border-border/70 p-7 md:p-10 shadow-[var(--shadow-elegant)]"
          >
            <h3 className="font-display text-2xl font-semibold text-ink">Send us your details</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              On submit, your details open WhatsApp ready to send - no signup required.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  className={inputCls}
                  placeholder="Sujan Tamang"
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  type="tel"
                  className={inputCls}
                  placeholder="98XXXXXXXX"
                />
              </Field>
              <Field label="Interested Job" required>
                <input
                  required
                  value={form.job}
                  onChange={set("job")}
                  className={inputCls}
                  placeholder="e.g. Barista, Warehouse"
                />
              </Field>
              <Field label="Address" required>
                <input
                  required
                  value={form.address}
                  onChange={set("address")}
                  className={inputCls}
                  placeholder="Kathmandu, Tinkune"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={4}
                    className={inputCls}
                    placeholder="Tell us a bit about yourself or what you're looking for."
                  />
                </Field>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform"
            >
              <Send className="size-4" /> Send via WhatsApp
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted by Pathivara A One Group on WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-ink/80 mb-1.5">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
