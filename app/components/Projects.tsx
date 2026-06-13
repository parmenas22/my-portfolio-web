import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./icons";

const projects = [
  {
    slug: "employee-transport-booking-system",
    name: "Employee Transport Booking System",
    description:
      "Transport management platform for employee bookings, route planning, vehicle assignment, and real-time tracking.",
    tech: [".NET", "Next.js", "SQL Server"],
    result: "Streamlined transport operations",
    url: "",
  },
  {
    slug: "ai-knowledge-assistant",
    name: "AI Knowledge Assistant",
    description:
      "AI-powered assistant that enables users to search documents, retrieve knowledge, and receive contextual answers.",
    tech: ["Node.js", "React", "OpenAI", "Azure"],
    result: "Faster knowledge discovery",
    url: "",
  },
  {
    slug: "time-entry-management-system",
    name: "Time Entry Management System",
    description:
      "Employee time tracking platform with approval workflows, reporting, notifications, and audit capabilities.",
    tech: ["Angular", ".NET", "SQL Server"],
    result: "Reduced manual processing",
    url: "",
  },
  {
    slug: "data-synchronization-platform",
    name: "Data Synchronization Platform",
    description:
      "Automated integration platform that synchronizes data between external systems and internal applications.",
    tech: [".NET", "SQL Server", "Azure Functions"],
    result: "Reliable cross-system synchronization",
    url: "",
  },
   {
    slug: "leafpower-solar-solutions",
    name: "Leafpower Solar Solutions",
    description:
      "E-commerce platform for browsing, managing, and purchasing solar products with product catalog, checkout, and order management.",
    tech: ["React", "Node.js", "PostgreSQL"],
    result: "Improved online sales and product visibility",
    url: "https://leafpowersolutions.com/",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work from recent years."
        description="A few products I've designed, built, and shipped end-to-end."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {p.name}
              </h3>
              <ArrowUpRight className="mt-1 shrink-0 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong" />
            </div>

            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-background px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
              <span className="text-xs uppercase tracking-wide text-subtle">
                Result
              </span>
              <span className="text-sm font-semibold text-accent-strong">
                {p.result}
              </span>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
                >
                  Visit site
                  <ArrowUpRight />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
