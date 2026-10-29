import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "../../components/icons";
import { getProject, getProjectDetail, projects } from "../../data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Parmenas Macharia`,
    description: project.description,
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-relaxed text-muted"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wide text-subtle">
      {children}
    </h2>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const detail = getProjectDetail(slug);
  const technologies = detail?.metadata.technologies ?? project.tech;
  const liveLink = detail?.metadata.links.live ?? project.url;

  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#projects"
        className="text-sm font-medium text-subtle transition-colors hover:text-foreground"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {project.name}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-card px-2.5 py-1 text-xs font-medium text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {detail ? (
        <div className="mt-8 space-y-8">
          <div>
            <SectionTitle>Overview</SectionTitle>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              {detail.overview}
            </p>
          </div>

          <div>
            <SectionTitle>Problem</SectionTitle>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {detail.problem.intro}
            </p>
            <BulletList items={detail.problem.points} />
          </div>

          <div>
            <SectionTitle>Key Features</SectionTitle>
            <BulletList items={detail.features} />
          </div>

          <div>
            <SectionTitle>My Role</SectionTitle>
            <p className="mt-3 text-base font-medium text-foreground">
              {detail.role.title}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {detail.role.summary}
            </p>
            <BulletList items={detail.role.points} />
          </div>

          <div>
            <SectionTitle>Results</SectionTitle>
            <BulletList items={detail.results.delivered} />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {detail.results.impact}
            </p>
          </div>
        </div>
      ) : (
        <p className="mt-8 text-lg leading-relaxed text-muted">
          {project.description}
        </p>
      )}

      {liveLink && (
        <div className="mt-8 border-t border-line pt-6">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-strong transition-colors hover:text-foreground"
          >
            Visit live app
            <ArrowUpRight />
          </a>
        </div>
      )}
    </section>
  );
}
