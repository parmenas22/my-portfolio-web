import { ArrowRight, Mail } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-foreground px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 80% at 50% 0%, rgba(13,148,136,0.35) 0%, rgba(13,148,136,0) 70%)",
          }}
        />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Contact Me
          </span>
          <h6 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-background sm:text-4xl">
            Interested in discussing software development, business solutions, or collaboration opportunities?
          </h6>
          {/* <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-300">
            Currently taking on a small number of consulting and full-time roles
            for late 2026.
          </p> */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:machariaparmenas22@gmail.com"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
            >
              Get in touch
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:machariaparmenas22@gmail.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-background transition-colors hover:bg-white/10"
            >
              <Mail />
              machariaparmenas22@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
