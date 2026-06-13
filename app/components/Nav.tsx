"use client";

import { useState } from "react";
import { Close, Menu } from "./icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="items-center gap-2 text-sm font-medium text-foreground md:flex">
        <a
          href="#top"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-semibold tracking-tight text-background hover:bg-accent-strong"
        >
          PM
        </a>
          <p>Parmenas Macharia</p>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {/* <span className="text-xs text-subtle">
            Available · <span className="text-accent-strong">Q3 2026</span>
          </span> */}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-foreground md:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
