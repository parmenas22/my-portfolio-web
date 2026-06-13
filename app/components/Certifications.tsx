import SectionHeading from "./SectionHeading";

const certs = [
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", year: "2025" },
  { name: "AWS Solutions Architect — Pro", issuer: "Amazon Web Services", year: "2024" },
  { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2024" },
  { name: "Generative AI with LLMs", issuer: "DeepLearning.AI", year: "2024" },
  { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", year: "2023" },
  { name: "Microsoft Certified: DevOps Engineer", issuer: "Microsoft", year: "2022" },
];

export default function Certifications() {
  return (
    <section className="border-t border-line bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Certifications" title="Credentials, kept current." />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between gap-4 rounded-xl border border-line bg-background px-5 py-4"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="mt-0.5 text-xs text-subtle">{c.issuer}</p>
              </div>
              <span className="shrink-0 text-sm font-medium text-accent-strong">
                {c.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
