import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Zap, Users, MapPin, Bell } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Counter } from "@/components/site/Counter";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { CtaStrip } from "@/components/site/CtaStrip";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Pathivara A One Group — Best Job Link Agency in Nepal | Kathmandu Recruitment Agency",
      },

      {
        name: "description",
        content:
          "Pathivara A One Group is a trusted and verified job link and recruitment agency in Nepal, based in Tinkune, Kathmandu. We connect Nepalese talent with genuine domestic and international job opportunities, manpower services, career guidance, and fast hiring support.",
      },

      {
        name: "keywords",
        content:
          "best job link agency in Nepal, top recruitment agency Kathmandu, manpower company Nepal, overseas jobs Nepal, job vacancy Kathmandu, trusted manpower Nepal, job hiring Nepal, recruitment agency Nepal, foreign employment Nepal, Pathivara A One Group, Tinkune manpower, Kathmandu job agency, job consultancy Nepal, Nepal job opportunities, hiring agency Nepal, employment services Kathmandu, job placement Nepal, manpower agency Kathmandu, Gulf jobs Nepal, Dubai jobs Nepal, Malaysia jobs Nepal, Europe jobs Nepal, verified jobs Nepal, skilled manpower Nepal, job seekers Nepal, best manpower company in Kathmandu, career opportunities Nepal, HR agency Nepal, hiring company Nepal, employment agency Nepal, partimejobs, part time jobs in kathmandu, merojobs, jobs in kathmandu, mart jobs,",
      },

      // Open Graph
      {
        property: "og:title",
        content: "Pathivara A One Group — Trusted Job Link Agency in Nepal",
      },

      {
        property: "og:description",
        content:
          "Verified jobs, trusted recruitment, overseas opportunities, and fast response. Based in Tinkune, Kathmandu, Nepal.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "/",
      },

      {
        property: "og:site_name",
        content: "Pathivara A One Group",
      },

      {
        property: "og:locale",
        content: "en_US",
      },

      // Twitter SEO
      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "Pathivara A One Group — Best Recruitment Agency in Nepal",
      },

      {
        name: "twitter:description",
        content:
          "Find verified domestic and international job opportunities with Pathivara A One Group, Kathmandu.",
      },

      // Additional SEO
      {
        name: "robots",
        content: "index, follow",
      },

      {
        name: "author",
        content: "Pathivara A One Group",
      },

      {
        name: "geo.region",
        content: "NP-BA",
      },

      {
        name: "geo.placename",
        content: "Kathmandu",
      },

      {
        name: "language",
        content: "English",
      },

      {
        name: "revisit-after",
        content: "7 days",
      },

      // Hashtags style keywords for extra indexing
      {
        name: "hashtags",
        content:
          "#JobAgencyNepal #RecruitmentNepal #KathmanduJobs #NepalManpower #ForeignEmployment #JobVacancyNepal #HiringNepal #NepalJobs #KathmanduRecruitment #PathivaraAOneGroup #kathmandujobs #parttimejobs #parttimejobsinkathmandu #kathmandu #jobs #parttimejobs #nepal #jobssearch",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://yourdomain.com/",
      },

      // Favicon
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),

  component: HomePage,
});

const stats = [
  { Icon: Users, value: 3000, suffix: "+", label: "Candidates Connected" },
  { Icon: Sparkles, value: 60, suffix: "K+", label: "Social Reach" },
  { Icon: ShieldCheck, value: 500, suffix: "+", label: "Trusted Placements" },
  { Icon: Bell, value: 250, suffix: "+", label: "Fast Job Updates" },
  { Icon: MapPin, value: 1, suffix: "", label: "Kathmandu-Based Agency" },
];

function HomePage() {
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="container mx-auto px-4 mt-24">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              End-to-end <span className="gradient-text">job link services</span>
            </>
          }
          description="From job placement to recruitment support, we help candidates and companies connect with confidence."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            See all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Why trust us — stats */}
      <section className="relative mt-28 py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why trust us"
            title={
              <>
                Numbers that <span className="gradient-text">speak for themselves</span>
              </>
            }
            description="A growing community of candidates, employers and well-wishers across Nepal."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map(({ Icon, value, suffix, label }) => (
              <div
                key={label}
                className="rounded-3xl bg-card border border-border/70 p-6 text-center shadow-[var(--shadow-card)] hover-lift"
              >
                <div className="mx-auto size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center">
                  <Icon className="size-5" />
                </div>
                <div className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ink">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 mt-24">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Real words from <span className="gradient-text">real candidates</span>
            </>
          }
          description="Hundreds of Nepalese have found verified work through Pathivara A One Group."
        />
        <div className="mt-12">
          <TestimonialSlider />
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
