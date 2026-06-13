import SectionHeading from "./SectionHeading";

const roles = [
  {
    id: 1,
    title: "Software Developer",
    company: "Griffin Global Technologies",
    period: "March 2026 — Present",
    description:
      "Delivering enterprise software solutions across web, cloud, and AI platforms. Developed transport management systems, AI-powered assistants, and business process automation tools while contributing to architecture decisions, integrations, and production support.",
  },
  {
    id: 2,
    title: "Associate Software Developer",
    company: "Griffin Global Technologies",
    period: "October 2024 — March 2026",
    description:
      "Contributed to multiple client projects by building APIs, enhancing user interfaces, integrating third-party systems, and improving application performance. Worked closely with senior developers to deliver reliable software solutions for business operations.",
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "Griffin Global Technologies",
    period: "June 2024 — October 2024",
    description:
      "Assisted in the development and maintenance of enterprise applications, participated in code reviews, tested new functionality, and supported deployment activities while building a strong foundation in full-stack software development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Professional Experience"
          title=""
        />

        <ol className="mt-12 border-l border-line">
          {roles.map((r) => (
            <li key={r.id} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  {r.title}{" "}
                  <span className="font-normal text-accent-strong">
                    · {r.company}
                  </span>
                </h3>
                <span className="text-sm text-subtle">{r.period}</span>
              </div>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                {r.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
