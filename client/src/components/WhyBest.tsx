import { Check, Rocket } from "lucide-react";
import innovation from "@/assets/images/innovation.jpg";

export default function WhyBest() {
  const benefits = [
    "Best For IT Consulting",
    "Innovative Approaches", 
    "Save Money & Time",
    "100% Satisfaction"
  ];

  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why We Are <span className="gradient-text">The Best</span>
          </h2>
          <p className="text-xl text-[var(--body-color)]">Top-Tier Development, Startup-Friendly Costs!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-[var(--theme-primary)]/20 to-[var(--theme-secondary)]/20 rounded-3xl animate-float"></div>
              <div className="absolute inset-12 bg-gradient-to-br from-[var(--theme-secondary)]/30 to-[var(--theme-accent)]/30 rounded-3xl animate-bounce-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={innovation}
                    alt="Innovation"
                    className="w-[32rem] h-[24rem] rounded-2xl mb-4 mx-auto object-cover shadow-lg"
                  />
                
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              Affordable Innovation for <span className="gradient-text">Every Business!</span>
            </h3>
            <p className="text-lg text-[var(--body-color)] leading-relaxed">
              From sleek websites to powerful mobile apps, we provide top-tier development services at unbeatable prices. Quality, efficiency, and affordability—all in one place!
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
