import { Github, Linkedin, Mail } from "./icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-semibold tracking-tight text-background hover:bg-accent-strong"
            >
              PM
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full-stack engineer building calm, reliable software.</p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/parmenas22", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/parmenasmacharia22", label: "LinkedIn" },
                { icon: Mail, href: "mailto:machariaparmenas22@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Parmenas Mukururi Macharia. Crafted with care.</p>
          {/* <p>v1.0 — placeholder content, easy to edit.</p> */}
        </div>
      </div>
    </footer>
  );
}
