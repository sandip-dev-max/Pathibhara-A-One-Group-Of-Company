import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/jobs", label: "Jobs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-card)]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <img src={logo} alt="Pathivara logo" width={36} height={36} className="rounded-lg" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-semibold text-[15px] text-ink">Pathivara Group</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-primary">Job Link Agency</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-primary rounded-lg transition-colors"
                activeProps={{ className: "text-primary bg-primary/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="size-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink hover:bg-primary/10"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-top-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary"
                activeProps={{ className: "bg-primary/10 text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
