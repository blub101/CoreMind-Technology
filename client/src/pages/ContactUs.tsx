import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactimg from "@/assets/images/contact.jpg";
import connectimg from "@/assets/images/connect.jpg";

// Hero Section Component
function ContactHero() {
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
            Contact Us
          </h1>
          <nav className="text-sm text-white/70">
            <span>Home</span> <span className="text-purple-400">→</span> <span>Contact Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
}

// Contact Information Section
function ContactInformation() {
  return (
    <section className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            ● QUICK CONTACT INFO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Location */}
          <div className="bg-[var(--black-secondary)] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-[var(--gray-border)]">
            <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Noida, Uttar Pradesh, India<br />
              201301
            </p>
          </div>

          {/* Email */}
          <div className="bg-[var(--black-secondary)] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-[var(--gray-border)]">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              coremindtechnology@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[var(--black-secondary)] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-[var(--gray-border)]">
            <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Free Call</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              +91-8512010093
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-[var(--black-secondary)] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-[var(--gray-border)]">
            <div className="w-20 h-20 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Opening hour</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mon-Fri 09:00 - 18:00<br />
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Form with Image
function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - AI Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={contactimg}
                alt="AI Robot"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
              Get In Touch!
            </h2>
            
            <form
              action="https://formspree.io/f/xwkgyqzv" // Replace with your Formspree form ID
              method="POST"
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-15 px-6 py-5 border-2 border-[var(--gray-border)] rounded-full text-white placeholder:text-gray-400 focus:border-purple-500 transition-colors bg-[var(--black-deep)] text-lg"
                    placeholder="Your name"
                    required
                  />
                  {/* Vector icon left inside input */}
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400">
                    <svg width="24" height="24" fill="none"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" fill="currentColor"/></svg>
                  </span>
                </div>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 h-15 border-2 border-[var(--gray-border)] rounded-full text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors bg-white text-lg pl-12 bg-[var(--black-deep)]"
                    placeholder="Email Address"
                    required
                  />
                  {/* <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400">
                    <svg width="24" height="24" fill="none"><path d="M4 4h16v16H4V4zm8 8l8-5H4l8 5zm0 2l-8-5v10h16V9l-8 5z" fill="currentColor"/></svg>
                  </span> */}
                   <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400">
    {/* Mail Icon (Envelope) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
      4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 h-15 border-2 border-[var(--gray-border)] rounded-full text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors bg-white text-lg pl-12 bg-[var(--black-deep)]"
                    placeholder="Phone Number"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400">
                    <svg width="24" height="24" fill="none"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 22 2 16.39 2 9.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="currentColor"/></svg>
                  </span>
                </div>
                <div className="relative">
                  {/* Select Subject with options */}
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 h-15 border-2 border-[var(--gray-border)] rounded-full text-gray-500 placeholder:text-gray-500  text-lg pl-10  focus:border-purple-500 transition-colors bg-[var(--black-deep)]"
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                  {/* <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400">
                    <svg width="24" height="24" fill="none"><path d="M12 16l-6-6h12l-6 6z" fill="currentColor"/></svg>
                  </span> */}
                </div>
              </div>

              <div className="relative">
                <Input
                  name="company"
                  type="text"
                  className="w-full px-6 py-5 h-15 border-2 border-[var(--gray-border)] rounded-full text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors  text-lg pl-12 bg-[var(--black-deep)]"
                  placeholder="Company Name"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400">
                  <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
              
              <div className="relative">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 border-2 border-[var(--gray-border)] rounded-3xl text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors bg-[var(--black-deep)] min-h-[140px] resize-none text-lg pl-12"
                  placeholder="Tell us what you have in mind to get in touch..."
                  required
                />
                {/* <span className="absolute left-4 top-6 text-blue-400">
                  <svg width="24" height="24" fill="none"><path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="currentColor"/></svg>
                </span> */}
              </div>
              
              <Button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bottom CTA Section
function BottomCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 rounded-2xl bg-gradient-to-br from-black via-black to-teal-900 overflow-hidden">
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
            <Button
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
            >
              Contact us →
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={connectimg}
              alt="AI Character"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[var(--black-deep)] text-white">
      <Header />
      <ContactHero />
      <ContactInformation />
      <ContactFormSection />
      <BottomCTA />
      <Footer />
    </div>
  );
}