import { SiWhatsapp, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { Link, useLocation } from "wouter";
import logo from "@/assets/images/logo.png";

export default function Footer() {
  const [location] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHomePage = location === '/';

  // Helper for scroll to top after navigation
  const handleNavigate = (href: string) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    window.location.href = href;
  };

  return (
    <footer className="relative bg-gradient-to-br from-purple via-purple-600 to-indigo-800 py-16 overflow-hidden rounded-t-3xl shadow-2xl border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mb-12 ">
          {/* Company Info */}
         
          <div className="space-y-3 -mt-14">
             <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img 
              src={logo} 
              alt="CoreMind Logo" 
              className="h-36 w-auto object-contain cursor-pointer transition-transform transform hover:scale-105"
            />
            </Link>
            <p className="text-white/80 leading-relaxed text-sm">
          CoreMind Technology specializes in web, app, and digital marketing solutions. We blend strategy, creativity, and tech to deliver results. Built for growth, tailored to your goals. Let’s shape your digital future together.   </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm">
                <SiWhatsapp className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm">
                <SiInstagram className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm">
                <SiLinkedin className="text-white text-sm" />
              </a>
             
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6 ml-28">
            <h4 className="text-white font-semibold text-lg">Useful Links</h4>
            <div className="h-1 w-12 bg-white/30 rounded-full"></div>
            <div className="space-y-3">
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/")}

              >
                Home
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/about")}
              >
                About Us
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/services")}
              >
                Services
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/contact")}
              >
                Contact Us
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/faq")}
              >
                FAQ
              </span>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-6 ml-20">
            <h4 className="text-white font-semibold text-lg">Our Service</h4>
            <div className="h-1 w-12 bg-white/30 rounded-full"></div>
            <div className="space-y-3">
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/services")}
              >
                Web Development
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/androidapp")}
              >
                App Development
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/digitalmarketing")}
              >
                Digital Marketing
              </span>
              <span
                className="block text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                onClick={() => handleNavigate("/uiuxdesign")}
              >
                UI/UX Design
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm ">
              © Copyright 2025 <span className="text-white font-medium">CoreMind Technology</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span onClick={() => handleNavigate("/privacy-policy")} className="cursor-pointer hover:text-[var(--theme-primary)]">
  Privacy Policy
</span>

              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of services
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
