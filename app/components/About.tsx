import SectionHeading from "./SectionHeading";
import { Briefcase, Globe, Layers, MapPin } from "./icons";

const facts = [
  { icon: MapPin, label: "Based in", value: "Nairobi, Kenya — Remote" },
  // { icon: Layers, label: "Focus", value: ".NET · React . NodeJS · Azure · AI" },
  { icon: Briefcase, label: "Current role", value: "Software Engineer @ Griffin Global Technologies" },
  // { icon: Globe, label: "Languages", value: "EN" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-12">
        <SectionHeading
          className="max-w-none"
          eyebrow="About Me"
          title=""
          description="I’m a Full-Stack Software Developer with experience building enterprise web applications, backend systems, and cloud-based solutions. I work primarily with .NET, React, Next.js, and modern cloud platforms like Azure and AWS.

Over the past few years, I’ve been involved in building systems such as transport management platforms, time tracking tools, data synchronization services, and AI-powered knowledge assistants. My focus is on designing software that solves real business problems, improves operational efficiency, and scales reliably.

I enjoy working across the full stack—from designing APIs and database structures to building clean, responsive user interfaces. I also have growing experience in integrating AI into applications, particularly using retrieval-augmented generation (RAG) and OpenAI APIs.

Outside of development, I’m interested in system design, cloud architecture, and exploring how software can be used to automate and simplify complex business processes.

Currently, I’m focused on improving my skills in distributed systems, AI engineering, and building scalable SaaS products."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-line bg-card p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
                <f.icon />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wide text-subtle">
                {f.label}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
