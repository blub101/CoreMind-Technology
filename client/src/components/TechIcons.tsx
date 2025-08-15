import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiAmazon, SiNextdotjs, SiFirebase, SiMysql, SiFlutter, SiJquery, SiDjango } from "react-icons/si";
import { Cloud } from "lucide-react";

export default function TechIcons() {
  const technologies = [
    { icon: SiHtml5, name: "HTML", color: "text-[var(--theme-primary)]" },
    { icon: SiCss3, name: "CSS", color: "text-[var(--theme-secondary)]" },
    { icon: SiJavascript, name: "JavaScript", color: "text-[var(--theme-accent)]" },
    { icon: SiReact, name: "React.js", color: "text-[var(--theme-primary)]" },
    { icon: SiMongodb, name: "MongoDB", color: "text-[var(--theme-secondary)]" },
    { icon: SiAmazon, name: "AWS", color: "text-[var(--theme-accent)]" },
    { icon: Cloud, name: "Cloud", color: "text-[var(--theme-primary)]" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-[var(--theme-secondary)]" },
    { icon: SiFirebase, name: "Firebase", color: "text-[var(--theme-accent)]" },
    { icon: SiMysql, name: "MySQL", color: "text-[var(--theme-primary)]" },
    { icon: SiFlutter, name: "Flutter", color: "text-[var(--theme-secondary)]" },
    { icon: SiJquery, name: "jQuery", color: "text-[var(--theme-accent)]" },
    { icon: SiDjango, name: "Django", color: "text-[var(--theme-primary)]" },
    
  ];

  return (
    <section className="py-6 bg-[var(--black-secondary)]">
  <div className="overflow-hidden w-full">
    <div className="animate-scroll-left hover:[animation-play-state:paused] inline-flex items-center space-x-10">
      {technologies.concat(technologies).map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <div key={index} className={`flex items-center space-x-2 ${tech.color}`}>
            <IconComponent className="text-4xl" />
            <span className="font-semibold text-lg">{tech.name}</span>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}
