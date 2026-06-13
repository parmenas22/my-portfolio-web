import SectionHeading from "./SectionHeading";
import { Briefcase, Globe, Layers, MapPin } from "./icons";

const facts = [
  { icon: MapPin, label: "Based in", value: "Nairobi, Kenya — Remote" },
  { icon: Layers, label: "Focus", value: ".NET · React · Azure · AI" },
  { icon: Briefcase, label: "Current role", value: "Software Engineer @ Griffin Global Technologies" },
  { icon: Globe, label: "Languages", value: "EN · PT · ES" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <SectionHeading
          eyebrow="About"
          title="Engineering with intent, not noise."
          description="I'm a software developer with experience designing and building business applications, integrations, and cloud-based solutions.

            My work has included enterprise web applications, data synchronization systems, AI-powered assistants, and workflow automation tools. I enjoy solving business problems through technology and creating software that improves efficiency and user experience."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
