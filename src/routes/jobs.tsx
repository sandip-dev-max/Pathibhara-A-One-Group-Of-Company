import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { JobCard } from "@/components/site/JobCard";
import { CtaStrip } from "@/components/site/CtaStrip";
import { jobCategories } from "@/components/site/data";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Job Categories — Pathivara A One Group" },
      { name: "description", content: "Apply for warehouse staff, barista, receptionist, mini mart, factory worker, delivery rider, office and retail jobs in Nepal." },
      { property: "og:title", content: "Open job categories in Nepal" },
      { property: "og:description", content: "Browse verified job categories and apply on WhatsApp instantly." },
      { property: "og:url", content: "/jobs" },
    ],
    links: [{ rel: "canonical", href: "/jobs" }],
  }),
  component: JobsPage,
});

function JobsPage() {
  return (
    <>
      <section className="pt-36">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Job categories"
            title={<>Apply to <span className="gradient-text">verified opportunities</span></>}
            description="Pick a category and tap Apply Now — your WhatsApp opens with a pre-filled message to our team."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {jobCategories.map((j) => <JobCard key={j.title} {...j} />)}
          </div>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
