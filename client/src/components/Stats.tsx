import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

function StatItem({ value, suffix, label, color }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const increment = value / (duration / 20);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              current = value;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, 20);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="stats-circle w-40 h-40 mx-auto mb-4">
        <div className="stats-inner">
          <div className="text-3xl font-bold">{count}</div>
          <div className={`text-lg font-semibold ${color}`}>{suffix}</div>
        </div>
      </div>
      <p className="text-[var(--body-color)] font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: 15, suffix: "M", label: "Project Completed", color: "text-[var(--theme-primary)]" },
    { value: 15, suffix: "k", label: "Creative Minds", color: "text-[var(--theme-secondary)]" },
    { value: 50, suffix: "M", label: "Happy Customers", color: "text-[var(--theme-accent)]" },
    { value: 25, suffix: "k", label: "Innovative Projects", color: "text-[var(--theme-primary)]" },
    { value: 25, suffix: "M", label: "Collaborative Team", color: "text-[var(--theme-secondary)]" },
  ];

  return (
    <section className="py-14 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
