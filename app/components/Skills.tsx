import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Backend & APIs",
    items: [
      "C#/.NET 9",
      "ASP.NET Core",
      "Node.js",
      "GraphQL",
      "REST",
      "gRPC",
      "PostgreSQL",
      "EF Core",
    ],
  },
  {
    title: "Frontend & UX",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "Framer Motion",
      "Vite",
      "Storybook",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Azure",
      "AWS",
      "Cloudflare",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Datadog",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "OpenAI",
      "LangChain",
      "RAG",
      "Pinecone",
      "pgvector",
      "Whisper",
      "Semantic Kernel",
      "Evals",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit I reach for."
          description="A pragmatic stack honed across products, teams, and scale — chosen for reliability over hype."
        />

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
