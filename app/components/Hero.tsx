import { ArrowRight, Download } from "./icons";

const stats = [
  { value: "8+", label: "Years building" },
  { value: "40+", label: "Shipped products" },
  // { value: "12", label: "Cloud certs" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 0%, rgba(13,148,136,0.10) 0%, rgba(13,148,136,0) 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-20 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Full Stack Software Developer @ Griffin Global Technologies
          </span>

          <h1 className="mt-6 font-serif text-3xl font-small leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {/* Full-stack engineer building{" "}
            <span className="italic text-accent-strong">calm, reliable</span>{" "}
            software. */}
            Parmenas Macharia — Full-stack Developer
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm a software developer with experience designing and building business applications, integrations, and cloud-based solutions.

            My work has included enterprise web applications, data synchronization systems, AI-powered assistants, and workflow automation tools. I enjoy solving business problems through technology and creating software that improves efficiency and user experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
            >
              View my work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Parmenas_Resume.pdf"
              download="Parmenas_Resume.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
            >
              <Download />
              Download Resume
            </a>
          </div>

          {/* <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl font-medium text-foreground">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-subtle">{s.label}</dd>
              </div>
            ))}
          </dl> */}
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-soft" />
          <div className="overflow-hidden rounded-[1.6rem] border border-line">
            <img
              src="/Parmenas-portrait.jpg"
              alt="Parmenas Macharia"
              className="block h-full w-full"
            />
          </div>
          {/* <div className="absolute -bottom-4 -left-4 rounded-2xl border border-line bg-card px-4 py-3 shadow-sm">
            <p className="text-xs text-subtle">Currently</p>
            <p className="text-sm font-medium text-foreground">
              Shipping AI products
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
