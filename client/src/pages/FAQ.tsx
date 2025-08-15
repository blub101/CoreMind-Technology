import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Hero Section Component
function FAQHero() {
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
            FAQ
          </h1>
          <nav className="text-sm text-white/70">
            <span>Home</span> <span className="text-purple-400">→</span> <span>FAQ</span>
          </nav>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-[var(--theme-primary)]/10 transition-colors"
      >
        <h3 className="text-lg font-semibold pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--theme-primary)] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--theme-primary)] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-[var(--body-color)] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
   
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "What technologies do you use for web development?",
          answer: "We use modern technologies including React.js, Next.js, Node.js, Python, TypeScript, and various databases like MongoDB and PostgreSQL. Our tech stack is always evolving to include the latest and most efficient technologies."
        },
        {
          question: "Can you integrate AI into existing websites or applications?",
          answer: "Absolutely! We specialize in integrating AI capabilities into existing systems. Whether you need chatbots, recommendation engines, or predictive analytics, we can enhance your current platform without disrupting your operations."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance optimization, and 24/7 technical support to ensure your systems run smoothly."
        },
        {
          question: "Is my data secure with your AI solutions?",
          answer: "Data security is our top priority. We implement industry-standard encryption, follow GDPR and HIPAA compliance requirements, and use secure cloud infrastructure. All AI models are designed with privacy-by-design principles."
        }
      ]
    },
    {
      title: "Pricing & Process",
      faqs: [
        {
          question: "How do you price your projects?",
          answer: "Our pricing is based on project scope, complexity, and timeline. We offer transparent pricing with no hidden costs. After understanding your requirements, we provide a detailed quote that includes all deliverables and timelines."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your needs and discuss how our solutions can benefit your business. This helps us create accurate proposals and ensures we're the right fit for your project."
        },
        {
          question: "What is your development process?",
          answer: "We follow an agile development methodology with four main phases: Discovery & Planning, Design & Prototyping, Development & Testing, and Deployment & Support. We provide regular updates and involve you in the process every step of the way."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we offer comprehensive training sessions for your team to ensure they can effectively use and maintain the solutions we develop. This includes user manuals, video tutorials, and hands-on training sessions."
        }
      ]
    },
  ];

  return (
    <section className="py-20 bg-[var(--black-deep)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Got <span className="gradient-text">Questions</span>? We Have Answers
          </h2>
          <p className="text-xl text-[var(--body-color)] max-w-3xl mx-auto">
            Explore our comprehensive FAQ to learn more about our services, processes, and how we can help transform your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">{category.title}</span>
              </h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all categories
                  return (
                    <FAQItem
                      key={globalIndex}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openItems.includes(globalIndex)}
                      onToggle={() => toggleItem(globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Quick Help Section Component
function QuickHelpSection() {
  const navigate = useNavigate();

  const helpOptions = [
    {
      icon: MessageCircle,
      title: "Chat Support",
      description: "Get instant answers from our support team",
      action: "Start Chat",
      available: "Available 24/7",
      color: "from-[var(--theme-primary)] to-[var(--theme-secondary)]"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM",
      color: "from-[var(--theme-secondary)] to-[var(--theme-accent)]"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions via email",
      action: "Send Email",
      available: "Response within 24hrs",
      color: "from-[var(--theme-accent)] to-[var(--theme-primary)]"
    }
  ];

  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Still Need <span className="gradient-text">Help</span>?
          </h2>
          <p className="text-xl text-[var(--body-color)] max-w-3xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you with any questions or concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {helpOptions.map((option, index) => {
            const IconComponent = option.icon;
            // Action handlers for each button
            const handleAction = () => {
              if (option.title === "Chat Support") {
                window.open("https://wa.me/918512010093", "_blank");
              } else if (option.title === "Phone Support") {
                window.open("tel:8512010093");
              } else if (option.title === "Email Support") {
                window.open("mailto:coremindtechnology@gmail.com");
              }
            };
            return (
              <div key={index} className="glass-effect p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-20 h-20 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-[var(--body-color)] mb-4 leading-relaxed">
                  {option.description}
                </p>
                <p className="text-sm text-[var(--theme-primary)] mb-6 font-semibold">
                  {option.available}
                </p>
                <Button
                  className="w-full bg-transparent border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] py-3 px-6 rounded-xl font-semibold hover:bg-[var(--theme-primary)] hover:text-white transition-all duration-300"
                  onClick={handleAction}
                >
                  {option.action}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-full mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get <span className="gradient-text">Started</span>?
            </h3>
            <p className="text-[var(--body-color)] mb-6 leading-relaxed">
              Have a specific project in mind? Let's discuss how our AI-powered solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--theme-primary)]/50 transition-all duration-300 transform hover:scale-105"
                // onClick={() => {
                //   navigate("/contact");
                //   window.scrollTo({ top: 0, behavior: "auto" });
                // }}
                onClick={() => { window.location.href= "/contact"; }}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Search FAQ Component
// function SearchFAQ() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Search functionality would be implemented here
//     console.log("Searching for:", searchTerm);
//   };

//   return (
//     <section className="py-12 bg-[var(--black-deep)]">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-2xl mx-auto text-center">
//           <h3 className="text-2xl font-bold mb-6">
//             Search <span className="gradient-text">FAQ</span>
//           </h3>
//           <form onSubmit={handleSearch} className="relative">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search for answers..."
//               className="w-full px-6 py-4 bg-[var(--black-secondary)] border border-[var(--gray-border)] rounded-full text-white placeholder:text-[var(--body-color)] focus:border-[var(--theme-primary)] transition-colors pr-12"
//             />
//             <button
//               type="submit"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
//             >
//               <HelpCircle className="w-5 h-5 text-white" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[var(--black-deep)] text-white">
      <Header />
      <FAQHero />
      {/* <SearchFAQ /> */}
      <FAQSection />
      <QuickHelpSection />
      <Footer />
    </div>
  );
}