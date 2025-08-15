import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import UiUx from "@/assets/images/UiUx.jpg";
import { Code, Smartphone, TrendingUp, Brain, Bot, Shield, Lightbulb, Database, Cloud, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import webdev from "@/assets/images/webdev.jpg";
import androiddev from "@/assets/images/androiddev.jpg";
import chatbotdev from "@/assets/images/UiUx.jpg";
import Digital from "@/assets/images/digital.jpg";
import Aimlimage from "@/assets/images/AIMLdev.jpg";
import chatbotimage from "@/assets/images/chatbotdev.avif";
import cyberimage from "@/assets/images/cybersecuritydev.jpg";
import bussiness from "@/assets/images/bussiness.jpg";


// Hero Section Component
function ServicesHero() {
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
            Services
          </h1>
          <nav className="text-sm text-white/70">
            <span>Services</span> <span className="text-purple-400">→</span> <span>UI/UX Design</span>
          </nav>
        </div>
      </div>
    </section>
  );
}

// Services Introduction Component
function ServicesIntro() {
  return (
    <section className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="gradient-text">UI/UX Design</span> Services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              Empowering Businesses with <span className="gradient-text">Impactful UI/UX Design</span>
            </h3>
            <p className="text-lg text-[var(--body-color)] leading-relaxed">
           We design intuitive and visually compelling user experiences that leave a lasting impression. Our team blends creative design with user-centered strategies to craft interfaces that are not just beautiful — but functional and conversion-driven. </p>
            <p className="text-lg text-[var(--body-color)] leading-relaxed">
            From wireframes and prototypes to full-scale design systems, we create digital experiences that adapt seamlessly across devices, ensuring every user interaction feels smooth, purposeful, and engaging.

 </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={UiUx}
                alt="Web development team working on modern projects" 
                className="rounded-2xl shadow-2xl w-full max-w-lg" 
              />
              <div className="absolute -top-16 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-2xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Services Grid Component
function MainServices() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Create stunning, responsive websites with cutting-edge technologies and modern design principles.",
      features: ["React.js & Next.js", "Responsive Design", "SEO Optimization", "Performance Optimization"],
      color: "from-[var(--theme-primary)] to-[var(--theme-secondary)]",
      image: webdev
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Build powerful mobile applications for iOS and Android platforms with seamless user experiences.",
      features: ["Flutter Development", "Native iOS/Android", "Cross-Platform", "App Store Optimization"],
      color: "from-[var(--theme-secondary)] to-[var(--theme-accent)]",
      image: androiddev
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Boost your online presence with data-driven marketing strategies that increase visibility.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      color: "from-[var(--theme-accent)] to-[var(--theme-primary)]",
      image: Digital
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Implement artificial intelligence and machine learning solutions to automate and optimize processes.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "from-[var(--theme-primary)] to-[var(--theme-accent)]",
      image: Aimlimage
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "Create intelligent chatbots that provide 24/7 customer support and enhance user engagement.",
      features: ["AI-Powered Conversations", "Multi-Platform Integration", "Natural Language Understanding", "Analytics Dashboard"],
      color: "from-[var(--theme-secondary)] to-[var(--theme-primary)]",
      image: chatbotimage
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with comprehensive security measures and threat detection.",
      features: ["Security Audits", "Threat Detection", "Data Encryption", "Compliance Management"],
      color: "from-[var(--theme-accent)] to-[var(--theme-secondary)]",
      image: cyberimage
    }
  ];

  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="gradient-text">Complete</span> Service Portfolio
          </h2>
          <p className="text-xl text-[var(--body-color)] max-w-3xl mx-auto">
            From web development to AI solutions, we provide comprehensive technology services to transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group glass-effect p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <img 
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    className="w-full h-48 object-cover rounded-xl mb-4" 
                  />
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[var(--body-color)] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[var(--theme-primary)] rounded-full"></div>
                      <span className="text-sm text-[var(--body-color)]">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Technology Stack Component
function TechnologyStack() {
  const techCategories = [
    {
      title: "UI/UX Design Tools",
      icon: Brain,
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Zeplin"],
      color: "from-[var(--theme-primary)] to-[var(--theme-secondary)]"
    },
    {
      title: "Prototyping & Wireframing",
      icon: Code,
      technologies: ["Figma Prototyping", "Balsamiq", "Marvel App", "Axure RP", "Adobe Illustrator", "Miro"],
      color: "from-[var(--theme-secondary)] to-[var(--theme-accent)]"
    },
    {
      title: "User Research & Testing",
      icon: Lightbulb,
      technologies: ["Hotjar", "Maze", "UsabilityHub", "Google Analytics", "Optimal Workshop", "Lookback"],
      color: "from-[var(--theme-accent)] to-[var(--theme-primary)]"
    },
    {
      title: "Design Systems & Collaboration",
      icon: Bot,
      technologies: ["Storybook", "Zeroheight", "Notion", "Abstract", "Figma Libraries", "Slack"],
      color: "from-[var(--theme-primary)] to-[var(--theme-accent)]"
    }
  ];

  return (
    <section className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="gradient-text">UI/UX Design</span> Stack
          </h2>
          <p className="text-xl text-[var(--body-color)] max-w-3xl mx-auto">
            We use industry-leading design tools and research platforms to deliver beautiful, user-focused experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="glass-effect p-6 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-[var(--body-color)] text-sm py-1 px-3 bg-[var(--black-secondary)] rounded-full">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Process Flow Component
function ProcessFlow() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "We understand your users, business goals, and market through research and stakeholder interviews.",
      icon: Lightbulb
    },
    {
      number: "02", 
      title: "Wireframing & Prototyping",
      description: "We create wireframes and interactive prototypes to visualize user journeys and core flows.",
      icon: Code
    },
    {
      number: "03",
      title: "Visual Design",
      description: "We design pixel-perfect UI screens, define style guides, and ensure brand consistency.",
      icon: Brain
    },
    {
      number: "04",
      title: "Testing & Delivery",
      description: "We validate designs with usability testing and deliver assets for development handoff.",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our UI/UX <span className="gradient-text">Design Process</span>
          </h2>
          <p className="text-xl text-[var(--body-color)] max-w-3xl mx-auto">
            We follow a user-centered design process to create engaging, effective digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--theme-accent)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-[var(--body-color)] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Component
function ServicesCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[var(--black-deep)] relative">
      <div className="absolute inset-0 opacity-50">
        <img 
          src= {bussiness}
          alt="Technology background"
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-xl text-[var(--body-color)] mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--theme-primary)]/50 transition-all duration-300 transform hover:scale-105"
              // onClick={() => {
              //   navigate("/contact");
              //   window.scrollTo({ top: 0, behavior: "auto" });
              // }}
              onClick={() => window.location.href = "/contact"}
            >
              Get Started Today →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-[var(--black-deep)] text-white">
      <Header />
      <ServicesHero />
      <ServicesIntro />
      <MainServices />
      <TechnologyStack />
      <ProcessFlow />
      <ServicesCTA />
      <Footer />
    </div>
  );
}