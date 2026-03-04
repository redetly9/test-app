const BENEFITS = [
  {
    icon: "⚡",
    title: "Lightning Speed",
    description:
      "120K TPS throughput enables instant transactions for enterprise-scale applications.",
  },
  {
    icon: "🔒",
    title: "AI-Powered Security",
    description:
      "Guaranteed data protection with AI-based threat detection and encryption.",
  },
  {
    icon: "🌐",
    title: "Proof of Stake",
    description:
      "Energy-efficient consensus algorithm enabling unlimited scalability.",
  },
  {
    icon: "📜",
    title: "Smart Contracts",
    description:
      "Deploy and execute secure, auditable smart contracts with ease.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description:
      "Comprehensive dashboards and insights for your blockchain operations.",
  },
  {
    icon: "🤝",
    title: "Developer Friendly",
    description:
      "Robust SDK, documentation, and support for rapid integration.",
  },
] as const;

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="w-full bg-black py-24 px-4 md:py-32"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-[1336px]">
        <h2
          id="benefits-heading"
          className="mb-4 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Why Choose Nexus
        </h2>
        <p className="mx-auto mb-16 max-w-[600px] text-center text-neutral-400">
          Next-generation blockchain infrastructure built for performance and
          security
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-neutral-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
