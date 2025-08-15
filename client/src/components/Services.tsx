import { useState } from "react";
import { Lightbulb, Brain, Bot, Shield, ChevronDown, ArrowRight } from "lucide-react";
import softwareimage from "@/assets/images/softwareimga.avif";
import smartimage from "@/assets/images/samrtapplication.jpg";
import cloudimage from "@/assets/images/cloud.jpg";
import realtimeimage from "@/assets/images/realtime-data.avif";
import { real } from "drizzle-orm/mysql-core";

export default function Services() {
  const [selectedService, setSelectedService] = useState("consulting");

  const services = [
    {
      id: "consulting",
      icon: Lightbulb,
      title: "Custom Software Development",
      description: "Build scalable web and mobile applications tailored to your business needs.",
      color: "text-[var(--theme-primary)]",
      hoverColor: "hover:bg-[var(--theme-primary)]/10",
      image: softwareimage
    },
    {
      id: "ml",
      icon: Brain,
      title: "Smart Application Development",
      description: "Design and build high-performance mobile & web apps tailored to your business goals.",
      color: "text-[var(--theme-secondary)]",
      hoverColor: "hover:bg-[var(--theme-secondary)]/10",
      image: smartimage
    },
    {
      id: "rpa",
      icon: Bot,
      title: "Real-Time Data Insights",
      description: "Turn raw data into powerful insights that guide every move you make.",
      color: "text-[var(--theme-accent)]",
      hoverColor: "hover:bg-[var(--theme-accent)]/10",
      image: realtimeimage
    },
    {
      id: "security",
      icon: Shield,
      title: "Cloud Architecture & Deployment",
      description: "Build fast, scale seamlessly, and stay secure with custom cloud infrastructure.",
      color: "text-[var(--theme-primary)]",
      hoverColor: "hover:bg-[var(--theme-primary)]/10",
      image: cloudimage
    }
  ];

  const currentService = services.find(s => s.id === selectedService) || services[0];

  return (
    <section id="services" className="py-20 bg-[var(--bg-gray)] rounded-none md:rounded-[3rem] ">
      <div className="container mx-auto px-0 lg:px-0 max-w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white before:content-['•'] font-semibold text-2xl mr-4"> Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Our Services</span> Aim To Provide Intelligent Solutions
          </h2>
        </div>

        <div className="w-full">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isActive = selectedService === service.id;
            return (
              <div
                key={service.id}
                className={`relative group transition-all duration-300 cursor-pointer w-full
                  ${isActive ? "bg-black" : "bg-transparent"}
                  border-b border-[var(--gray-border)] min-h-[220px] flex items-center px-4 md:px-16`}
                style={{ minHeight: "20px" }}
                onMouseEnter={() => setSelectedService(service.id)}
                onFocus={() => setSelectedService(service.id)}
                tabIndex={0}
              >
                {/* Number */}
                <div className="text-white/70 text-xl font-mono w-12 flex-shrink-0 select-none">
                  0{idx + 1}
                </div>
                {/* Content */}
                <div className="flex-1 py-10">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${isActive ? "text-white" : "text-white/60"}`}>
                    {service.title}
                  </div>
                  <div className={`text-[var(--body-color)] text-base md:text-lg ${isActive ? "opacity-100" : "opacity-70"}`}>
                    {service.description}
                  </div>
                </div>
                {/* Arrow */}
                <div className="flex items-center">
                  <ArrowRight className={`transition-transform duration-300 ${isActive ? "translate-x-2 text-white" : "text-white/40"}`} size={28} />
                </div>
                {/* Image on hover/active */}
                {isActive && (
                  <div className="hidden md:block absolute top-1/2 right-32 -translate-y-1/2 z-10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-[350px] h-[350px] object-cover rounded-2xl shadow-2xl rotate-6 transition-all duration-500"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <ChevronDown className="w-8 h-8 text-[var(--theme-primary)] animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
}
