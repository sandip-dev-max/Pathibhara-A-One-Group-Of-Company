import { Link } from "@tanstack/react-router";
import { Phone, MapPin, MessageCircle, Mail, Facebook, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3a5.5 5.5 0 0 0 5 5v3.1a8.6 8.6 0 0 1-5-1.6v6.6a6 6 0 1 1-6-6c.34 0 .68.03 1 .09v3.2a2.9 2.9 0 1 0 2 2.76V3h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#0a1a16] text-white/85 mt-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
      <div className="absolute -top-40 -left-40 size-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 size-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" width={40} height={40} className="rounded-lg bg-white p-1" />
              <div>
                <div className="font-display font-semibold text-white">Pathivara A One</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-glow">
                  Group of Company
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed">
              A trusted job link agency in Tinkune, Kathmandu - connecting Nepalese talent with
              verified opportunities.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                {
                  href: "https://www.tiktok.com/@pathivaraaonecompany?_r=1&_t=ZS-96PYpLMnAaz",
                  Icon: TikTokIcon,
                  label: "TikTok",
                },
                {
                  href: "https://www.facebook.com/share/18jnzjNWzT/?mibextid=wwXIfr",
                  Icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/pathibharaaonegroupofcompany?igsh=MXYydzhraXZiYjR3eQ==",
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://wa.me/9779862341430",
                  Icon: MessageCircle,
                  label: "WhatsApp",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center size-10 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/jobs", "Job Categories"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/65 hover:text-primary-glow transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="size-4 mt-0.5 text-primary-glow" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 mt-0.5 text-primary-glow" />
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-primary-glow">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="size-4 mt-0.5 text-primary-glow" />
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-primary-glow"
                >
                  WhatsApp: {SITE.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 mt-0.5 text-primary-glow" />
                <span>Sun–Fri · 10:00AM–5:00PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Get Job Updates</h4>
            <p className="mt-4 text-sm text-white/65">
              Tap below to start a WhatsApp conversation and receive verified job updates directly.
            </p>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="size-4" /> Chat with us
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <span>
            © {new Date().getFullYear()} Pathivara A One Group of Company. All rights reserved.
          </span>
          <span>Designed & Developed with ❤️ by (sandy) sandipbhatta.com.np</span>
        </div>
      </div>
    </footer>
  );
}
