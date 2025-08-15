import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import lineshape from "@/assets/images/line-shape.png";
import maskshape from "@/assets/images/mask-shape.png";
import businessgrowth from "@/assets/images/businessgroth.jpg";
import growth from "@/assets/images/growth.jpg";
import innovation from "@/assets/images/innovation.jpg";
import webdesin from "@/assets/images/webdes.jpg";
import webdes1 from "@/assets/images/webdes1.jpg";
import handshake from "@/assets/images/handshake.jpg";

import { ChevronDown, ChevronUp, Play, CheckCircle, Users, Award, TrendingUp, Zap, Brain, Shield } from "lucide-react";

// Custom hook for counter animation
function useCountUp(end: number, start: number = 0, duration: number = 2000) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const animationRef = useRef<number>();

  const startAnimation = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + (end - start) * easeOutCubic);
      
      setCount(currentCount);
      countRef.current = currentCount;
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return { count, startAnimation };
}

// Intersection Observer hook
function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
  }: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
}

// Counter Component
interface CounterProps {
  end: number;
  suffix: string;
  label: string;
}

function Counter({ end, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });
  const { count, startAnimation } = useCountUp(end, 0, 2500);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      startAnimation();
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated, startAnimation]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="text-center">
      <div className="w-32 h-32 bg-[var(--black-deep)] rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--gray-border)]">
        <span className="text-2xl font-bold text-white">
          {formatNumber(count)}{suffix}
        </span>
      </div>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
    </div>
  );
}

// Hero Section
function AboutHero() {
  return (
    <section className="relative min-h-[65vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <nav className="text-sm text-white/70">
            <span>Home</span> <span className="text-purple-400">→</span> <span>About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
}

// Main About Section with AI Robot
function MainAboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={innovation}
                  alt="AI Robot"
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                {/* Play button overlay */}
                
              </div>
              <div className="space-y-4">
                <img 
                  src={businessgrowth}
                  alt="AI Technology"
                  className="w-full h-[140px] object-cover rounded-2xl"
                />
                <img 
                  src={growth}
                  alt="Tech Innovation"
                  className="w-full h-[290px] object-cover rounded-2xl mt-8"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
              ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            We’re Partner of Your Innovations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At CoreMind Technology, we collaborate closely to bring your innovative ideas to life.
Together, we transform challenges into cutting-edge solutions that drive success.
Your vision, combined with our expertise, creates the future of technology.
Let’s innovate and grow side by side, turning possibilities into reality. </p>
            

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">100% Customers Satisfaction</h3>
                  <p className="text-gray-400 text-sm">We have a deep passion for excellence and innovation, and strive to cultivate an environment where this can be achieved.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Quality Assurance Guarantee</h3>
                  <p className="text-gray-400 text-sm">We believe in data-driven AI solutions and strategies, and always put your customer's requirements first above all.</p>
                </div>
              </div>
            </div>

            <Button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              onClick={() => window.location.href = '/services'}  
            >
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 

// Statistics Section
function StatisticsSection() {
  const stats = [
    { end: 15, suffix: "M", label: "Project Completed" },
    { end: 15, suffix: "k", label: "Positive Rating" },
    { end: 50, suffix: "M", label: "Happy Customers" },
    { end: 25, suffix: "k", label: "Innovative Projects" },
    { end: 25, suffix: "M", label: "Collaborative Team" }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// How Does it Work Section
function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery and Strategy",
      description: "We learn about your business, understand your objectives, analyze your requirements, and develop a customized strategy."
    },
    {
      number: "2", 
      title: "Development & Implementation",
      description: "Our expert developers and designers work collaboratively to bring your vision to life with cutting-edge technology and innovative solutions."
    },
    {
      number: "3",
      title: "Optimization and Support",
      description: "We provide ongoing support, maintenance, and optimization to ensure your solution continues to perform at its best and evolve with your needs."
    }
  ];

  return (
    <section className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
              WORK PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              How Does it Work?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Discover our streamlined approach that combines technology with innovation to drive exceptional results for your business success and sustainable growth.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                 
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                  
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Team Working"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Advanced Technology Section
function AdvancedTechnologySection() {
  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-8xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
              ADVANCED TECHNOLOGY
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-12">
              The Future is Here: Advance Technology
            </h1>
            <div className="mt-12">
              {/* Advance Technology grid and content here */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-auto w-auto bg-[var(--black-deep)] border border-[var(--gray-border)] rounded-xl flex items-center justify-center">
                 <h1><span className="text-gray-400">Smart Automation at Scale</span></h1> 
                 </div>
                <div className="h-24 bg-[var(--black-deep)] border border-[var(--gray-border)] rounded-xl flex items-center justify-center">
                 
                    <span className="font-bold text-white">Immersive Digital Experiences</span>
               
                </div>
                <div className="h-24 bg-[var(--black-deep)] border border-[var(--gray-border)] rounded-xl flex items-center justify-center">
                  <span className="font-bold text-white">Next-Gen AI Solutions</span>
                </div>
                <div className="h-24 bg-[var(--black-deep)] border border-[var(--gray-border)] rounded-xl flex items-center justify-center">
               
                  <span className="text-gray-400 px-1"> AI Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={webdesin}
              alt="AI Character"
              className="w-full h-[700px] object-cover rounded-2xl"
            />
            <div className="space-y-28">
              <img 
                src={webdes1}
                alt="Purple Tech"
                className="w-full h-[290px] object-cover rounded-2xl rotate-45"
              />
              <img 
                src={growth}
                alt="Tech Innovation"
                className="w-full h-[290px] object-cover rounded-2xl mt-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 function Offering(){
  return(
<section className="py-20 bg-blue-950 relative overflow-hidden">
  {/* Left background image */}
  <img
    src={lineshape}
    alt="Line Shape"
    className="absolute left-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
    style={{ zIndex: 1 }}
  />
  {/* Right background image */}
  <img
    src={maskshape}
    alt="Mask Shape"
    className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none select-none"
    style={{ zIndex: 1 }}
  />
  <div className="mt-16 relative z-10">
    <div className="text-center mb-8">
      <span className="inline-block px-6 py-2 bg-purple-900/40 text-purple-300 rounded-full font-semibold tracking-wide text-lg">
        OUR OFFERING
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-2">
        Enhance And Pioneer Using Technology Trends
      </h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-end">
      {/* Website */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#181a3c] to-[#23255a] rounded-2xl border border-purple-900/30 py-8 px-4 shadow-lg hover:scale-105 transition-transform">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4">
          <svg width="40" height="40" fill="none" stroke="#ffff" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        </div>
        <span className="text-white font-bold text-xl mt-2">Website</span>
      </div>
      {/* Android */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#181a3c] to-[#23255a] rounded-2xl border border-purple-900/30 py-8 px-4 shadow-lg hover:scale-105 transition-transform">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3329 3.58547L23.91 0.956883C23.9526 0.885763 23.9809 0.806935 23.9931 0.724898C24.0053 0.642862 24.0012 0.559225 23.9811 0.478762C23.961 0.398299 23.9252 0.322586 23.8758 0.255946C23.8265 0.189306 23.7644 0.133044 23.6933 0.0903717C23.6222 0.0476998 23.5434 0.0194538 23.4613 0.00724644C23.3793 -0.00496089 23.2957 -0.000890475 23.2152 0.0192253C23.1347 0.039341 23.059 0.0751082 22.9924 0.124485C22.9257 0.173861 22.8695 0.23588 22.8268 0.307L21.1626 3.08085C20.1717 2.72843 19.1107 2.52633 18.0004 2.52633C16.8901 2.52633 15.829 2.72843 14.8381 3.08085L13.1739 0.307C13.0878 0.163366 12.948 0.0598509 12.7855 0.0192253C12.623 -0.0214003 12.4511 0.00419186 12.3074 0.0903718C12.1638 0.176552 12.0603 0.31626 12.0196 0.478762C11.979 0.641265 12.0046 0.81325 12.0908 0.956883L13.6678 3.58547C10.6192 5.16123 8.52686 8.33802 8.52686 12.0005C8.52686 12.168 8.59339 12.3286 8.71184 12.4471C8.83028 12.5655 8.99092 12.632 9.15842 12.632H26.8423C27.0098 12.632 27.1705 12.5655 27.2889 12.4471C27.4074 12.3286 27.4739 12.168 27.4739 12.0005C27.4733 8.33865 25.3815 5.16186 22.3329 3.58547ZM9.81399 11.3689C10.1374 7.13551 13.6855 3.7901 18.0004 3.7901C22.3152 3.7901 25.8634 7.13551 26.1868 11.3689H9.81399Z" fill="#384BFF"></path>
                                <path d="M22.4068 7.17725H21.5744C21.464 7.17725 21.3581 7.2211 21.2801 7.29915C21.202 7.3772 21.1582 7.48306 21.1582 7.59345V8.42586C21.1582 8.65575 21.3445 8.84206 21.5744 8.84206H22.4074C22.5178 8.84206 22.6237 8.79821 22.7017 8.72016C22.7798 8.6421 22.8236 8.53624 22.8236 8.42586V7.59345C22.8234 7.48301 22.7795 7.37715 22.7013 7.29911C22.6231 7.22108 22.5172 7.17725 22.4068 7.17725ZM14.4257 7.17725H13.5926C13.4822 7.17725 13.3764 7.2211 13.2983 7.29915C13.2203 7.3772 13.1764 7.48306 13.1764 7.59345V8.42586C13.1764 8.65575 13.3627 8.84206 13.5926 8.84206H14.4257C14.536 8.84206 14.6419 8.79821 14.72 8.72016C14.798 8.6421 14.8419 8.53624 14.8419 8.42586V7.59345C14.8419 7.48306 14.798 7.3772 14.72 7.29915C14.6419 7.2211 14.536 7.17725 14.4257 7.17725ZM26.8416 13.2637H9.15774C8.99024 13.2637 8.8296 13.3302 8.71116 13.4486C8.59272 13.5671 8.52618 13.7277 8.52618 13.8952V26.6346C8.52751 27.4436 8.8497 28.219 9.42205 28.7908C9.9944 29.3625 10.7702 29.6839 11.5792 29.6844H12.3156V33.4776C12.3156 34.8683 13.4486 36.0001 14.8419 36.0001C16.2351 36.0001 17.3681 34.8683 17.3681 33.4776V29.6844H18.6313V33.4776C18.6313 34.8683 19.7643 36.0001 21.1575 36.0001C22.5508 36.0001 23.6838 34.8683 23.6838 33.4776V29.6844H24.4202C25.2293 29.6841 26.0051 29.3628 26.5775 28.791C27.1499 28.2192 27.472 27.4436 27.4732 26.6346V13.8952C27.4732 13.7277 27.4067 13.5671 27.2882 13.4486C27.1698 13.3302 27.0091 13.2637 26.8416 13.2637ZM26.2101 26.6346C26.2092 27.1087 26.0203 27.5632 25.6847 27.8982C25.3491 28.2332 24.8944 28.4213 24.4202 28.4213H23.0522C22.8847 28.4213 22.7241 28.4878 22.6057 28.6063C22.4872 28.7247 22.4207 28.8854 22.4207 29.0529V33.4776C22.4207 33.8126 22.2876 34.1339 22.0507 34.3708C21.8138 34.6077 21.4925 34.7408 21.1575 34.7408C20.8225 34.7408 20.5012 34.6077 20.2644 34.3708C20.0275 34.1339 19.8944 33.8126 19.8944 33.4776V29.0529C19.8944 28.8854 19.8279 28.7247 19.7094 28.6063C19.591 28.4878 19.4303 28.4213 19.2628 28.4213H16.7366C16.5691 28.4213 16.4084 28.4878 16.29 28.6063C16.1715 28.7247 16.105 28.8854 16.105 29.0529V33.4776C16.105 33.8126 15.9719 34.1339 15.735 34.3708C15.4981 34.6077 15.1769 34.7408 14.8419 34.7408C14.5069 34.7408 14.1856 34.6077 13.9487 34.3708C13.7118 34.1339 13.5787 33.8126 13.5787 33.4776V29.0529C13.5787 28.8854 13.5122 28.7247 13.3937 28.6063C13.2753 28.4878 13.1147 28.4213 12.9472 28.4213H11.5798C11.1056 28.4211 10.6509 28.233 10.3153 27.898C9.97962 27.5631 9.79048 27.1087 9.78931 26.6346V14.5268H26.2101V26.6346ZM30.3153 13.2637C29.0963 13.2637 28.1048 14.2565 28.1048 15.4767V24.3136C28.1048 25.5338 29.0963 26.5266 30.3153 26.5266C31.5342 26.5266 32.5258 25.5338 32.5258 24.3136V15.4767C32.5254 14.8903 32.2925 14.328 31.8781 13.9131C31.4637 13.4982 30.9017 13.2647 30.3153 13.2637ZM31.2626 24.3136C31.2626 24.8371 30.8376 25.2635 30.3153 25.2635C29.793 25.2635 29.3679 24.8371 29.3679 24.3136V15.4767C29.3679 14.9531 29.793 14.5268 30.3153 14.5268C30.8376 14.5268 31.2626 14.9531 31.2626 15.4767V24.3136ZM5.68412 13.2637C4.46519 13.2637 3.47363 14.2565 3.47363 15.4767V24.3136C3.47363 25.5338 4.46519 26.5266 5.68412 26.5266C6.90305 26.5266 7.89461 25.5338 7.89461 24.3136V15.4767C7.89427 14.8903 7.66136 14.328 7.24696 13.9131C6.83255 13.4982 6.27051 13.2647 5.68412 13.2637ZM6.63147 24.3136C6.63147 24.8371 6.20643 25.2635 5.68412 25.2635C5.16181 25.2635 4.73677 24.8371 4.73677 24.3136V15.4767C4.73677 14.9531 5.16181 14.5268 5.68412 14.5268C6.20643 14.5268 6.63147 14.9531 6.63147 15.4767V24.3136Z" fill="#384BFF"></path>
                            </svg>
        </div>
        <span className="text-white font-bold text-xl mt-2">Android</span>
      </div>
      {/* IOS */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#181a3c] to-[#23255a] rounded-2xl border border-purple-900/30 py-8 px-4 shadow-lg hover:scale-105 transition-transform">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4">
         <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2517_1783)">
                                    <path d="M25.3682 0.727224L25.3303 0L24.6066 0.0778922C24.5356 0.0854747 17.5397 0.928503 17.06 8.75012L17.0117 9.53318L17.7948 9.48011C17.8747 9.47459 25.7984 8.84249 25.3682 0.727224ZM24.0027 1.60058C23.8711 6.3141 20.2039 7.62517 18.5206 7.97878C19.1617 3.39831 22.4835 2.00245 24.0027 1.60058Z" fill="white"></path>
                                    <path d="M32.1109 25.8609L31.6704 25.7182C29.0048 24.8566 27.2147 22.415 27.2147 19.6426C27.2147 17.1763 28.6092 14.9705 30.8549 13.8855L31.525 13.5622L31.1514 12.9191C30.9914 12.6434 29.4963 10.2011 26.3379 9.39256C23.8329 8.7515 21.0164 9.31881 17.9634 11.0793C16.671 10.2949 12.3779 8.03393 8.9624 10.3004C8.29377 10.6699 1.20696 14.9153 4.89546 26.3703C5.00369 26.6267 7.57551 32.652 10.6188 34.9088C11.4398 35.6933 13.5394 36.6735 15.9389 35.0377C16.3546 34.8661 19.136 33.7956 20.9006 35.0494C21.552 35.4954 22.6894 36.0007 23.8908 36.0007C24.8021 36.0007 25.7499 35.7105 26.5509 34.8833C26.9245 34.56 30.3373 31.514 32.1109 26.6888L32.1626 26.5482L32.1109 25.8609ZM25.63 33.8556L25.5769 33.9059C24.0652 35.4934 21.7733 33.9748 21.6885 33.9183C20.7869 33.2772 19.7426 33.0684 18.763 33.0684C16.9853 33.0684 15.4219 33.757 15.322 33.8018L15.2096 33.8652C13.1286 35.3176 11.7038 34.0396 11.5528 33.8942L11.4715 33.8245C8.71908 31.8173 6.1893 25.8926 6.18586 25.8906C2.73378 15.1593 9.34704 11.6494 9.62828 11.5067L9.7041 11.4619C12.9073 9.31122 17.5119 12.4242 17.5574 12.4552L17.9248 12.7075L18.3053 12.4779C21.1729 10.7443 23.7605 10.1549 25.996 10.7278C27.8172 11.1937 28.9779 12.3318 29.5459 13.0314C27.2388 14.4452 25.8368 16.9123 25.8368 19.6426C25.8368 22.7831 27.722 25.5735 30.5944 26.7873C28.8263 31.1031 25.6637 33.8273 25.63 33.8556Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2517_1783">
                                        <rect width="36" height="36" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
        </div>
        <span className="text-white font-bold text-xl mt-2">IOS</span>
      </div>
      {/* Watch */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#181a3c] to-[#23255a] rounded-2xl border border-purple-900/30 py-8 px-4 shadow-lg hover:scale-105 transition-transform">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.4282 8.14707H9.2927C8.43931 8.14707 7.74512 8.84133 7.74512 9.69465V26.3053C7.74512 27.1586 8.43938 27.8528 9.2927 27.8528H24.4282C25.2815 27.8528 25.9757 27.1586 25.9757 26.3053V22.7742C25.9757 22.4829 25.7397 22.2468 25.4484 22.2468C25.1571 22.2468 24.9211 22.4829 24.9211 22.7742V26.3053C24.9209 26.4359 24.8689 26.5612 24.7765 26.6536C24.6841 26.746 24.5588 26.798 24.4282 26.7982H9.2927C9.03788 26.7982 8.82765 26.6038 8.80234 26.3556C8.80065 26.3391 8.7998 16.5811 8.7998 16.5811H24.9211V20.2426C24.9211 20.5339 25.1571 20.77 25.4484 20.77C25.7397 20.77 25.9757 20.5339 25.9757 20.2426V9.69465C25.9757 8.84133 25.2814 8.14707 24.4282 8.14707ZM8.7998 15.5264V12.9302H10.3292C10.4173 12.9302 10.5039 12.9082 10.5813 12.8661C10.6586 12.824 10.7242 12.7632 10.772 12.6893L11.3296 11.8272L12.772 14.2068C12.9768 14.5698 13.5557 14.5286 13.7075 14.1415L14.5524 12.1734L14.9696 12.7982C15.0177 12.8704 15.083 12.9295 15.1595 12.9704C15.236 13.0113 15.3214 13.0327 15.4081 13.0327H19.7785L20.9774 14.2259C21.291 14.5381 21.8011 14.538 22.1147 14.226L23.4531 12.8939C23.8595 12.4894 23.9738 11.8885 23.7444 11.3631C23.6104 11.0532 23.3651 10.8048 23.057 10.6668C22.7488 10.5288 22.4001 10.5113 22.0797 10.6177L21.5461 10.7928L21.0126 10.6177C20.6922 10.5112 20.3435 10.5287 20.0353 10.6667C19.7271 10.8046 19.4818 11.0531 19.3478 11.363C19.2629 11.5565 19.2234 11.7669 19.2324 11.978H15.6901L14.8898 10.7794C14.6754 10.4349 14.1147 10.4865 13.9666 10.8642L13.1427 12.7836L11.7951 10.5604C11.6096 10.2316 11.0956 10.2254 10.9014 10.5473L10.0423 11.8754H8.7998V9.69465C8.79995 9.56397 8.85193 9.43869 8.94433 9.34628C9.03674 9.25388 9.16202 9.2019 9.2927 9.20175H24.4282C24.5588 9.2019 24.6841 9.25388 24.7765 9.34628C24.8689 9.43869 24.9209 9.56397 24.9211 9.69465V15.5264H8.7998ZM20.3144 11.7852C20.3442 11.7165 20.3986 11.6615 20.467 11.6309C20.5354 11.6003 20.6127 11.5963 20.6838 11.6199L21.2947 11.8203C21.4594 11.8744 21.6332 11.8743 21.7974 11.8204L22.4086 11.6199C22.4797 11.5963 22.557 11.6002 22.6254 11.6308C22.6937 11.6614 22.7481 11.7165 22.7779 11.7852C22.8044 11.8453 22.8121 11.912 22.7998 11.9766C22.7875 12.0411 22.7559 12.1003 22.7091 12.1464L21.5461 13.3039L20.4495 12.2126C20.3374 12.0955 20.2315 11.9558 20.3144 11.7852ZM18.0123 2.48157H15.7086C15.5687 2.48157 15.4346 2.53713 15.3357 2.63602C15.2368 2.73492 15.1812 2.86905 15.1812 3.00891C15.1812 3.14877 15.2368 3.2829 15.3357 3.3818C15.4346 3.4807 15.5687 3.53625 15.7086 3.53625H18.0122C18.3035 3.53625 18.5396 3.30015 18.5396 3.00891C18.5396 2.71768 18.3035 2.48157 18.0123 2.48157Z" fill="#384BFF"></path>
                                <path d="M13.2418 24.3816C12.551 24.3979 11.9611 23.8925 11.8661 23.2118C11.8468 23.0732 11.7732 22.9481 11.6616 22.8638C11.55 22.7795 11.4094 22.743 11.2709 22.7623C11.1324 22.7817 11.0072 22.8552 10.9229 22.9669C10.8386 23.0785 10.8021 23.219 10.8215 23.3575C10.988 24.5509 12.0117 25.4366 13.2137 25.4365C13.23 25.4365 13.2465 25.4364 13.263 25.436C14.5224 25.4107 15.56 24.4061 15.6253 23.1491C15.66 22.4797 15.4255 21.8439 14.9648 21.3588C14.5107 20.8804 13.8723 20.6061 13.2134 20.6061C12.9715 20.6061 12.7693 20.6207 12.5898 20.6486L12.8349 19.1687H14.7069C14.8468 19.1687 14.9809 19.1132 15.0798 19.0143C15.1787 18.9154 15.2343 18.7813 15.2343 18.6414C15.2343 18.5015 15.1787 18.3674 15.0798 18.2685C14.9809 18.1696 14.8468 18.1141 14.7069 18.1141H12.3877C12.2628 18.1141 12.142 18.1584 12.0467 18.2392C11.9514 18.32 11.8879 18.432 11.8675 18.5552L11.4081 21.3282C11.3245 21.7729 11.8499 22.1033 12.2248 21.8573C12.4887 21.7386 12.7001 21.6608 13.2133 21.6608C13.5898 21.6608 13.9402 21.8114 14.1999 22.0849C14.4594 22.3583 14.5915 22.7168 14.5719 23.0944C14.5354 23.8019 13.9511 24.3673 13.2418 24.3816ZM20.702 19.0588C20.9933 19.0588 21.2293 18.8227 21.2293 18.5315C21.2293 18.2403 20.9933 18.0042 20.702 18.0042H18.0005C17.7092 18.0042 17.4732 18.2403 17.4732 18.5315C17.4732 18.8227 17.7092 19.0588 18.0005 19.0588H20.702ZM23.4596 21.5056C23.4596 20.6791 22.7872 20.0067 21.9607 20.0067H18.972C18.1456 20.0067 17.4732 20.6791 17.4732 21.5056C17.4732 22.332 18.1456 23.0044 18.972 23.0044H21.9607C22.7872 23.0044 23.4596 22.332 23.4596 21.5056ZM18.5279 21.5056C18.528 21.3878 18.5748 21.2749 18.6581 21.1917C18.7413 21.1084 18.8542 21.0616 18.972 21.0614H21.9607C22.2056 21.0614 22.4048 21.2607 22.4048 21.5056C22.4048 21.7505 22.2056 21.9497 21.9607 21.9497H18.972C18.8542 21.9496 18.7413 21.9027 18.6581 21.8195C18.5748 21.7362 18.528 21.6233 18.5279 21.5056Z" fill="#384BFF"></path>
                                <path d="M28.6772 11.9782H28.085V9.28238C28.085 7.59677 26.7928 6.20775 25.1471 6.05271L24.2543 2.08153C23.9787 0.855914 22.9089 0 21.6528 0H12.0677C10.8115 0 9.74171 0.855914 9.46616 2.08153L8.57326 6.05271C6.92753 6.20775 5.63525 7.59677 5.63525 9.28238V26.7176C5.63525 28.5067 7.09079 29.9622 8.87982 29.9622H24.0628L23.2253 33.6871C23.0587 34.428 22.4121 34.9453 21.6528 34.9453H12.0677C11.3083 34.9453 10.6618 34.428 10.4952 33.6871L10.0832 31.8545C10.068 31.7869 10.0396 31.723 9.99971 31.6664C9.95982 31.6098 9.90917 31.5616 9.85065 31.5246C9.79213 31.4875 9.72688 31.4624 9.65865 31.4506C9.59041 31.4388 9.52051 31.4405 9.45294 31.4557C9.3165 31.4864 9.19783 31.57 9.12304 31.6882C9.04825 31.8064 9.02346 31.9494 9.05413 32.0858L9.46616 33.9185C9.74171 35.1441 10.8114 36 12.0677 36H21.6528C22.9089 36 23.9787 35.1441 24.2543 33.9185L25.1471 29.9473C26.7928 29.7922 28.085 28.4032 28.085 26.7176V18.4657H28.6772C29.6075 18.4657 30.3644 17.7088 30.3644 16.7785V13.6654C30.3644 12.7351 29.6075 11.9782 28.6772 11.9782ZM10.4952 2.31286C10.6617 1.57205 11.3083 1.05469 12.0677 1.05469H21.6528C22.4121 1.05469 23.0587 1.57205 23.2253 2.31286L24.0628 6.0378H9.65769L10.4952 2.31286ZM27.0304 26.7176C27.0304 27.9251 26.048 28.9075 24.8405 28.9075H8.87989C7.67242 28.9075 6.69001 27.9251 6.69001 26.7176V9.28238C6.69001 8.0749 7.67242 7.09249 8.87989 7.09249H24.8406C26.048 7.09249 27.0304 8.0749 27.0304 9.28238V26.7176H27.0304ZM29.3097 16.7785C29.3097 17.1272 29.026 17.411 28.6772 17.411H28.085V13.0328H28.6772C29.026 13.0328 29.3097 13.3166 29.3097 13.6654V16.7785Z" fill="#384BFF"></path>
                                <path d="M18.0005 25.4834C18.3177 25.4834 18.5748 25.2263 18.5748 24.9092C18.5748 24.5921 18.3177 24.335 18.0005 24.335C17.6834 24.335 17.4263 24.5921 17.4263 24.9092C17.4263 25.2263 17.6834 25.4834 18.0005 25.4834Z" fill="#384BFF"></path>
                                <path d="M20.4663 25.4834C20.7835 25.4834 21.0406 25.2263 21.0406 24.9092C21.0406 24.5921 20.7835 24.335 20.4663 24.335C20.1492 24.335 19.8921 24.5921 19.8921 24.9092C19.8921 25.2263 20.1492 25.4834 20.4663 25.4834Z" fill="#384BFF"></path>
                            </svg>
        </div>
        <span className="text-white font-bold text-xl mt-2">Watch</span>
      </div>
      {/* TV */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#181a3c] to-[#23255a] rounded-2xl border border-purple-900/30 py-8 px-4 shadow-lg hover:scale-105 transition-transform">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4">
          <svg width="40" height="40" fill="none" stroke="#ffff" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="10" rx="2" />
            <rect x="8" y="18" width="8" height="2" rx="1" />
          </svg>
        </div>
        <span className="text-white font-bold text-xl mt-2">Tv</span>
      </div>
      {/* IOT */}
      <div className="flex flex-col items-center bg-gradient-to-b from-[#181a3c] to-[#23255a] rounded-2xl border border-purple-900/30 py-8 px-4 shadow-lg hover:scale-105 transition-transform">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4">
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" stroke="#ffff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 10.2061C9.68286 10.2061 7.79785 12.0901 7.79785 14.406C7.79785 16.722 9.68279 18.606 11.9999 18.606C14.317 18.606 16.202 16.7219 16.202 14.406C16.202 12.0901 14.317 10.2061 11.9999 10.2061ZM11.9999 17.4061C10.3446 17.4061 8.99788 16.0601 8.99788 14.406C8.99788 12.7519 10.3446 11.406 11.9999 11.406C13.6552 11.406 15.002 12.7519 15.002 14.406C15.002 16.0601 13.6552 17.4061 11.9999 17.4061Z" fill="#384BFF"></path>
                                <path d="M19.1903 18.0102C19.192 17.882 19.2001 17.7544 19.2001 17.626C19.2001 10.7685 16.7292 4.40667 12.4208 0.171803C12.3084 0.0616816 12.1574 0 12 0C11.8427 0 11.6917 0.0616816 11.5793 0.171803C7.2709 4.40667 4.79997 10.7685 4.79997 17.626C4.79997 17.7544 4.80806 17.882 4.80982 18.0102C1.91877 19.5144 0 23.5346 0 28.1996C0 28.3587 0.063212 28.5113 0.17573 28.6238C0.288248 28.7364 0.440854 28.7996 0.599979 28.7996H7.59406C7.59476 28.7996 7.5954 28.7999 7.5961 28.7999H7.92966L6.67592 30.8884C6.62123 30.9795 6.59171 31.0834 6.59038 31.1896C6.58905 31.2958 6.61594 31.4005 6.66832 31.4928C6.72061 31.5852 6.7965 31.6621 6.88822 31.7156C6.97995 31.7691 7.08422 31.7972 7.1904 31.7972H16.7925C16.8986 31.7972 17.0029 31.7691 17.0946 31.7156C17.1863 31.6621 17.2622 31.5852 17.3145 31.4928C17.3669 31.4005 17.3938 31.2958 17.3925 31.1896C17.3911 31.0834 17.3616 30.9795 17.3069 30.8884L16.053 28.7999H16.404C16.4047 28.7999 16.4053 28.7996 16.406 28.7996H23.4001C23.5592 28.7996 23.7118 28.7364 23.8243 28.6238C23.9369 28.5113 24.0001 28.3587 24.0001 28.1996C24.0001 23.5347 22.0814 19.5144 19.1903 18.0102ZM12.0001 1.45473C13.2677 2.78406 14.3501 4.32033 15.2367 6.00572H8.76336C9.65008 4.32026 10.7325 2.78399 12.0001 1.45473ZM1.21177 27.5996C1.35472 23.9749 2.78488 20.794 4.86143 19.374C5.04227 22.2454 5.66728 25.0445 6.69771 27.5996H1.21177ZM8.25036 30.5973L9.32931 28.7999H14.6533L15.7325 30.5973H8.25036ZM16.0117 27.5999H7.98845C6.68682 24.5589 6.00007 21.1194 6.00007 17.626C6.00007 13.8965 6.76697 10.3296 8.17857 7.20568H15.8216C17.2332 10.3296 18.0001 13.8965 18.0001 17.626C18.0001 21.1195 17.3134 24.5589 16.0117 27.5999ZM17.3024 27.5996C18.3329 25.0445 18.9579 22.2454 19.1387 19.374C21.2153 20.794 22.6454 23.9749 22.7884 27.5996H17.3024ZM12.0001 32.4005C11.9213 32.4005 11.8433 32.416 11.7705 32.4462C11.6977 32.4763 11.6315 32.5205 11.5758 32.5762C11.5201 32.632 11.4759 32.6981 11.4458 32.7709C11.4156 32.8437 11.4001 32.9217 11.4001 33.0005V35.3999C11.4001 35.559 11.4633 35.7116 11.5758 35.8242C11.6883 35.9367 11.8409 35.9999 12.0001 35.9999C12.1592 35.9999 12.3118 35.9367 12.4243 35.8242C12.5368 35.7116 12.6001 35.559 12.6001 35.3999V33.0006C12.6001 32.9218 12.5845 32.8437 12.5544 32.7709C12.5243 32.6981 12.4801 32.632 12.4243 32.5763C12.3686 32.5205 12.3025 32.4763 12.2297 32.4462C12.1569 32.416 12.0789 32.4005 12.0001 32.4005ZM8.99687 32.4005C8.91808 32.4005 8.84006 32.416 8.76727 32.4462C8.69448 32.4763 8.62834 32.5205 8.57262 32.5762C8.51691 32.632 8.47272 32.6981 8.44256 32.7709C8.41241 32.8437 8.39689 32.9217 8.39689 33.0005V34.1993C8.39689 34.3584 8.46011 34.5111 8.57262 34.6236C8.68514 34.7361 8.83775 34.7993 8.99687 34.7993C9.156 34.7993 9.3086 34.7361 9.42112 34.6236C9.53364 34.5111 9.59685 34.3584 9.59685 34.1993V33.0005C9.59683 32.8414 9.53361 32.6888 9.4211 32.5763C9.30859 32.4637 9.15599 32.4005 8.99687 32.4005ZM15.0033 32.4005C14.9246 32.4005 14.8465 32.416 14.7737 32.4462C14.7009 32.4763 14.6348 32.5205 14.5791 32.5762C14.5234 32.632 14.4792 32.6981 14.449 32.7709C14.4189 32.8437 14.4034 32.9217 14.4034 33.0005V34.1993C14.4034 34.3584 14.4666 34.5111 14.5791 34.6236C14.6916 34.7361 14.8442 34.7993 15.0033 34.7993C15.1625 34.7993 15.3151 34.7361 15.4276 34.6236C15.5401 34.5111 15.6033 34.3584 15.6033 34.1993V33.0005C15.6033 32.8414 15.5401 32.6888 15.4276 32.5763C15.3151 32.4637 15.1625 32.4005 15.0033 32.4005Z" fill="#384BFF"></path>
                            </svg>
        </div>
        <span className="text-white font-bold text-xl mt-2">IOT</span>
      </div>
    </div>
  </div>
</section>
  );
 }

// News & Blog Section
// function NewsSection() {
//   const articles = [
//     {
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
//       date: "15 Jan 2024",
//       author: "AI Admin",
//       title: "How to Use ChatGPT to Boost Your Writing"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
//       date: "12 Jan 2024", 
//       author: "AI Admin",
//       title: "5 Ways AI Can Transforme Businesses"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
//       date: "10 Jan 2024",
//       author: "AI Admin", 
//       title: "Understanding Artificial Intelligence And Applications"
//     }
//   ];

//   return (
//     <section className="py-20 bg-[var(--black-secondary)]">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between mb-12">
//           <div>
//             <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
//               NEWS
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Our Latest News & Blog
//             </h2>
//           </div>
//           <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300">
//             View All Post →
//           </Button>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <div key={index} className="bg-[var(--black-deep)] border border-[var(--gray-border)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//               <img 
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
//                   <span>{article.date}</span>
//                   <span>By {article.author}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-white leading-tight">
//                   {article.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Bottom CTA Section
function BottomCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br rounded-2xl from-black via-black to-teal-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-2xl font-medium mb-8">
              GET STARTED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Make Something Great Together
            </h2>
            <Button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
            onClick={() => window.location.href = '/contact'}>
              Contact us →
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={handshake}
              alt="AI Character"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[var(--black-deep)] text-white">
      <Header />
      <AboutHero />
      <MainAboutSection />
      <StatisticsSection />
      <HowItWorksSection />
      <AdvancedTechnologySection />
      {/* <FAQSection /> */}
      {/* <NewsSection /> */}
      <Offering />
      <BottomCTA />
      <Footer />
    </div>
  );
}