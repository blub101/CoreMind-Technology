export default function Marquee() {
  const tags = [
    "Healthcare",
    "AI Algorithms",
    "Computer Vision",
    "Deep Learning",
    "Customer Support",
    "Health Care",
    "Healthcare",
    "AI Algorithms",
    "Computer Vision",
    "Deep Learning",
    "Customer Support",
    "Health Care"
  ];

  const colors = [
    "text-[var(--theme-primary)]",
    "text-[var(--theme-secondary)]",
    "text-[var(--theme-accent)]"
  ];

  return (
    <section className="py-12 bg-[var(--black-deep)] overflow-hidden">
      <div className="scrolling-container">
        <div className="animate-scroll-left inline-flex items-center space-x-8 text-2xl font-semibold">
          {tags.map((tag, index) => (
            <span key={index} className={colors[index % colors.length]}>
              • {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
