const companies = [
  "Microsoft",
  "Stripe",
  "Shopify",
  "Vercel",
  "AWS",
  "Datadog",
  "OpenAI",
  "Linear",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-line bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-subtle">
          Trusted by teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {companies.map((c) => (
            <span
              key={c}
              className="text-lg font-semibold tracking-tight text-stone-400 transition-colors hover:text-stone-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
