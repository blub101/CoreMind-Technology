import { Button } from "@/components/ui/button";
import { Code, Smartphone, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-[var(--theme-primary)] mr-4"></div>
            <span className="text-[var(--theme-primary)] font-semibold">Features</span>
            <div className="w-12 h-0.5 bg-[var(--theme-primary)] ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Technology</span> – Your Gateway To The Future
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Web Development Feature */}
          <div className="service-card glass-effect p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-[var(--body-color)] mb-6 leading-relaxed">
              Create stunning, responsive websites with cutting-edge technologies and modern design principles that drive engagement and conversions.
            </p>
            <Button
              variant="link"
              className="text-[var(--theme-primary)] font-semibold hover:text-[var(--theme-secondary)] transition-colors p-0"
              onClick={()=> 
                window.location.href = '/services'}
            >
              More Explore →
            </Button>
          </div>

          {/* App Development Feature */}
          <div className="service-card glass-effect p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--theme-secondary)] to-[var(--theme-accent)] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">App Development</h3>
            <p className="text-[var(--body-color)] mb-6 leading-relaxed">
              Build powerful mobile applications for iOS and Android platforms with seamless user experiences and robust functionality.
            </p>
            <Button
              variant="link"
              className="text-[var(--theme-secondary)] font-semibold hover:text-[var(--theme-accent)] transition-colors p-0"
              onClick={() => 
                window.location.href = '/androidapp'}
            >
              More Explore →
            </Button>
          </div>

          {/* Digital Marketing Feature */}
          <div className="service-card glass-effect p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-[var(--body-color)] mb-6 leading-relaxed">
              Boost your online presence with data-driven marketing strategies that increase visibility and drive qualified leads.
            </p>
            <Button
              variant="link"
              className="text-[var(--theme-accent)] font-semibold hover:text-[var(--theme-primary)] transition-colors p-0"
              
              onClick={() => 
                window.location.href = '/digitalmarketing'}
            >
              More Explore →
            </Button>
          </div>
        </div>

      <div className="text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug max-w-6xl mx-auto">
    To empower businesses of all sizes with affordable, efficient,
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-4 mb-2">
    <span className="text-2xl md:text-3xl font-bold stroke-text">
      and future-focused IT solutions.
    </span>
    <span className="text-2xl md:text-3xl font-bold stroke-text">
      We aim to become a trusted partner
    </span>
  </div>
  <div className="flex flex-wrap justify-center items-center gap-4">
    <span className="text-2xl md:text-3xl font-bold">
      in your digital journey —
    </span>
    <span className="text-2xl md:text-3xl font-bold text-white">
      from startup launches
    </span>
    <span className="text-2xl md:text-3xl font-bold stroke-text">
      to enterprise transformations.
    </span>
  </div>
</div>

      </div>
    </section>
  );
}
