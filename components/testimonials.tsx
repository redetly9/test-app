const TESTIMONIALS = [
  {
    id: "1",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    content:
      "Nexus transformed our blockchain infrastructure. The 120K TPS capability and AI security gave us the confidence to scale globally.",
    rating: 5,
  },
  {
    id: "2",
    author: "Marcus Johnson",
    role: "Lead Developer, ChainWorks",
    content:
      "Best developer experience we've had. Documentation is clear, SDK is robust, and the Proof of Stake consensus is incredibly efficient.",
    rating: 5,
  },
  {
    id: "3",
    author: "Elena Rodriguez",
    role: "Product Manager, DataSecure",
    content:
      "The AI-based security features are a game-changer. Our compliance team was impressed with the audit capabilities from day one.",
    rating: 5,
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexus",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.content,
  })),
};

export default function Testimonials() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        id="testimonials"
        className="w-full bg-black py-24 px-4 md:py-32"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-[1336px]">
          <h2
            id="testimonials-heading"
            className="mb-4 text-center text-3xl font-semibold text-white md:text-4xl"
          >
            What Our Users Say
          </h2>
          <p className="mx-auto mb-16 max-w-[600px] text-center text-neutral-400">
            Trusted by developers and enterprises worldwide
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ author, role, content, rating }) => (
              <article
                key={author}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="mb-4 flex gap-1 text-amber-400" aria-hidden>
                  {Array.from({ length: rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-6 text-neutral-300" itemProp="reviewBody">
                  &ldquo;{content}&rdquo;
                </p>
                <footer>
                  <p className="font-semibold text-white" itemProp="author">
                    {author}
                  </p>
                  <p className="text-sm text-neutral-500">{role}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
