import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";

const studies = [
  {
    title: "Cutting cloud spend 41% without dropping a request",
    summary:
      "Re-architected a sprawling service topology into right-sized, autoscaling workloads — with zero customer-facing downtime.",
    results: ["−41% infra cost", "+30% p95 latency", "Zero downtime migration"],
  },
  {
    title: "Shipping a regulated AI assistant in 9 weeks",
    summary:
      "Designed and delivered a compliance-sensitive copilot from blank repo to production, ready for audit.",
    results: ["1,200 weekly users", "94% answer accuracy", "SOC 2 ready"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Case Studies"
        title="Deep dives into hard problems."
        description="Two longer stories about trade-offs, constraints, and outcomes."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {studies.map((s) => (
          <article
            key={s.title}
            className="flex flex-col rounded-2xl border border-line bg-card p-8"
          >
            <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
              {s.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {s.summary}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {s.results.map((r) => (
                <div
                  key={r}
                  className="rounded-xl bg-accent-soft px-3 py-3 text-center"
                >
                  <span className="text-xs font-medium text-accent-strong">
                    {r}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Read the case study
              <ArrowRight className="transition-transform group-hover:translate-x-1 text-accent-strong" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
