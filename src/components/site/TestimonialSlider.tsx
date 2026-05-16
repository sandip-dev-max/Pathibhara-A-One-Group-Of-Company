import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    name: "Sujan Tamang",
    role: "Warehouse Staff, Balaju",
    text: "Very trusted agency. I found my warehouse job within a week. The team responds fast on WhatsApp.",
    rating: 5,
  },
  {
    name: "Anjali Shrestha",
    role: "Receptionist, Thamel",
    text: "Fast response and genuine opportunities. They guided me through the whole interview process.",
    rating: 5,
  },
  {
    name: "Bikash Magar",
    role: "Delivery Rider, Lalitpur",
    text: "Honest agency with real jobs. No fake promises - exactly what they said, I got.",
    rating: 4.5,
  },
  {
    name: "Serena Karki",
    role: "Receptionist, New Road",
    text: "Professional and supportive team. I love the regular job updates they share.",
    rating: 4,
  },
  {
    name: "Ramesh Bhandari",
    role: "Mini Mart Staff, Koteshwor",
    text: "Connected me with a verified employer. Smooth and quick from start to finish.",
    rating: 4,
  },
  {
    name: "Prakash Gurung",
    role: "Big Mart Staff, Baneshwor",
    text: "Really trusted agency with fast communication. I got my placement within just a few days.",
    rating: 4,
  },

  {
    name: "Nisha Rai",
    role: "Security Guard, Koteshwor",
    text: "Professional team and genuine job opportunities. They helped me confidently through the process.",
    rating: 5,
  },

  {
    name: "Dipesh Thapa",
    role: "Club Bouncer, Thamel",
    text: "Good experience overall. The agency provided verified jobs exactly as explained on WhatsApp.",
    rating: 5,
  },

  {
    name: "Asmita Lama",
    role: "Sales Staff, New Baneshwor",
    text: "Very supportive and responsive team. I regularly receive authentic job updates from them.",
    rating: 5,
  },
];

export function TestimonialSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 5000);
    embla.on("select", () => setTick((t) => t + 1));
    return () => clearInterval(id);
  }, [embla]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {items.map((t) => (
            <div key={t.name} className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="h-full rounded-3xl bg-card border border-border/70 p-7 shadow-[var(--shadow-card)] relative overflow-hidden">
                <Quote className="absolute top-5 right-5 size-10 text-primary/10" />
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="size-11 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-display font-semibold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          aria-label="Previous"
          onClick={() => embla?.scrollPrev()}
          className="inline-flex items-center justify-center size-11 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          aria-label="Next"
          onClick={() => embla?.scrollNext()}
          className="inline-flex items-center justify-center size-11 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
