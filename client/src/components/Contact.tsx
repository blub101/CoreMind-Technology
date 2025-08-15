import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-20 bg-[var(--black-deep)] relative">
      {/* Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none" style={{ top: '-3rem' }}>
        <div className="text-8xl md:text-9xl font-bold text-[var(--gray-border)] select-none">
          LET'S TALK
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 md:gap-16 lg:gap-24 mb-12">
          {/* Location */}
          <div className="flex items-start space-x-4 sm:space-x-6 md:space-x-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Location</h4>
              <p className="text-[var(--body-color)]">Noida, Uttar Pradesh, India
 <br /> 201301</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-4 sm:space-x-6 md:space-x-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--theme-secondary)] to-[var(--theme-accent)] rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Phone</h4>
              <p className="text-[var(--body-color)]">+91-8512010093</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start space-x-4 sm:space-x-6 md:space-x-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Email</h4>
              <p className="text-[var(--body-color)]">coremindtechnology@gmail.com</p>
            
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-[var(--gray-border)] my-12"></div>
      </div>
    </section>
  );
}
