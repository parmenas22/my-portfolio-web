type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "max-w-2xl",
}: Props) {
  return (
    <div className={className}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
