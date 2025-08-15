import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cloudservies from "@/assets/images/cloudservices.jpg";


export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-0.5 bg-[var(--theme-primary)] mr-4"></div>
              <span className="text-[var(--theme-primary)] font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Empower Your Business With <span className="gradient-text">Real-Time Intelligence</span>
            </h2>
            <p className="text-lg text-[var(--body-color)] leading-relaxed">
            Empower your business with real-time intelligence that drives smarter decisions.
Unlock insights instantly to boost efficiency and stay ahead of the competition.

Turn data into actionable strategies that accelerate growth.
Make every decision count with timely, accurate information at your fingertips.   </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Affordable & Scalable AI Solutions</h4>
                  <p className="text-[var(--body-color)]">High-performance AI tools designed to fit every budget and business size.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--theme-secondary)] to-[var(--theme-accent)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Simplified Operations Through Smart Automation</h4>
                  <p className="text-[var(--body-color)]">Streamline workflows and reduce complexity with intelligent automation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Empowering Smarter, Faster Decision-Making</h4>
                  <p className="text-[var(--body-color)]">Turn real-time data into actionable insights to fuel business growth.</p>
                </div>
              </div>
            </div>
            
            <Button
              className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--theme-primary)]/50 transition-all duration-300 transform hover:scale-105"
             

              onClick={() => window.location.href="/about"}
            >
              Discover More →
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={cloudservies}
                alt="AI technology abstract concept with neural networks and data visualization" 
                className="rounded-2xl shadow-2xl w-full max-w-xl md:max-w-2xl"

              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-2xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-2xl animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
