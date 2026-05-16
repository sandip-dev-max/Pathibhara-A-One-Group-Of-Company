import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaStrip } from "@/components/site/CtaStrip";
import office from "@/assets/gallery-office.jpg";
import staff from "@/assets/gallery-staff.jpg";
import job1 from "@/assets/gallery-job1.jpg";
import job2 from "@/assets/gallery-job2.jpg";
import job3 from "@/assets/gallery-job3.jpg";
import job4 from "@/assets/gallery-job4.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pathivara A One Group" },
      { name: "description", content: "Glimpses of our office, team and verified placements across Kathmandu." },
      { property: "og:title", content: "Gallery — Pathivara A One Group" },
      { property: "og:description", content: "Office, staff and recruitment moments from our work in Nepal." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: staff },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: office, label: "Our Office", caption: "Tinkune, Kathmandu", span: "row-span-2" },
  { src: staff, label: "The Team", caption: "Pathivara A One staff" },
  { src: job1, label: "Barista Placement", caption: "Fresh hire onboarded" },
  { src: job2, label: "Warehouse Hiring", caption: "Verified employer", span: "row-span-2" },
  { src: job3, label: "Receptionist Role", caption: "Hotel front-desk" },
  { src: job4, label: "Delivery Riders", caption: "Now hiring weekly" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-36">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Gallery"
            title={<>Moments from our <span className="gradient-text">recruitment journey</span></>}
            description="A peek at our office, team and the real placements we celebrate every week."
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:auto-rows-[180px]">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-card)] ${it.span ?? ""}`}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-sm font-semibold">{it.label}</div>
                  <div className="text-xs text-white/75">{it.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
