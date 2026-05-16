import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsappLink}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center size-14 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
