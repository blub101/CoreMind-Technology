import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logo from "@/assets/images/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location === '/';

  // Helper for scroll to top after navigation
  const handleNavigate = (href: string) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setIsMobileMenuOpen(false);
    window.location.href = href;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-[var(--black-deep)]/90 backdrop-blur-md border-b border-[var(--gray-border)]/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
  <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <img
      src={logo}
      alt="CoreMind Logo"
      className="h-40 md:h-44 w-auto object-contain cursor-pointer"
    />
  </Link>
</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="glass-effect px-8 py-3 rounded-full">
                <div className="flex items-center space-x-6">
                  <span
                    className="text-sm font-medium hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
                    onClick={() => handleNavigate("/")}
                  >
                    Home
                  </span>
                  <span
                    className="text-sm font-medium hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
                    onClick={() => handleNavigate("/about")}
                  >
                    About Us
                  </span>
                  <div className="relative group">
                    <button className="text-sm font-medium hover:text-[var(--theme-primary)] transition-colors flex items-center">
                      Services <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--black-secondary)] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="p-2">
                        <span
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--theme-primary)]/20 rounded-md transition-colors cursor-pointer"
                          onClick={() => handleNavigate("/services")}
                        >
                          Web Development
                        </span>
                        <span
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--theme-primary)]/20 rounded-md transition-colors cursor-pointer"
                          onClick={() => handleNavigate("/Androidapp")}
                        >
                          App Development
                        </span>
                        <span
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--theme-primary)]/20 rounded-md transition-colors cursor-pointer"
                          onClick={() => handleNavigate("/DigitalMarketing")}
                        >
                          Digital Marketing
                        </span>
                        <span
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--theme-primary)]/20 rounded-md transition-colors cursor-pointer"
                          onClick={() => handleNavigate("/UiUxDesign")}
                        >
                          UI/UX Development
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="text-sm font-medium hover:text-[var(--theme-primary)] transition-colors">
                    Careers
                  </button> */}
                  <span
                    className="text-sm font-medium hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
                    onClick={() => handleNavigate("/contact")}
                  >
                    Contact Us
                  </span>
                  <span
                    className="text-sm font-medium hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
                    onClick={() => handleNavigate("/faq")}
                  >
                    FAQ
                  </span>
                </div>
              </div>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden lg:block bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--theme-primary)]/50 transition-all duration-300 transform hover:scale-105"
              onClick={() => handleNavigate("/contact")}>
    
              
                Get Started →
              </Button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white text-xl"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[var(--black-secondary)] z-50 lg:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <X />
          </button>
          <nav className="flex flex-col space-y-6">
            <span
              onClick={() => handleNavigate("/")}
              className="text-lg font-medium hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => handleNavigate("/about")}
              className="text-lg font-medium hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
            >
              About Us
            </span>
            <div className="text-lg font-medium">Services</div>
            <div className="pl-4 space-y-2 text-sm">
              <span
                onClick={() => handleNavigate("/services")}
                className="block hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
              >
                Web Development
              </span>
              <span
                onClick={() => handleNavigate("/Androidapp")}
                className="block hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
              >
                App Development
              </span>
              <span
                onClick={() => handleNavigate("/DigitalMarketing")}
                className="block hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
              >
                Digital Marketing
              </span>
              <span
                onClick={() => handleNavigate("/UiUxDesign")}
                className="block hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
              >
                UI/UX Development
              </span>
            </div>
            <span
              onClick={() => handleNavigate("/contact")}
              className="text-lg font-medium hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
            >
              Contact Us
            </span>
            <span
              onClick={() => handleNavigate("/faq")}
              className="text-lg font-medium hover:text-[var(--theme-primary)] transition-colors text-left cursor-pointer"
            >
              FAQ
            </span>
          </nav>
          <div className="mt-8">
            <Button
              className="w-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--theme-primary)]/50 transition-all duration-300"
              onClick={() => handleNavigate("/contact")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
