import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/images/cta-bg-2.png";
import { useNavigate } from "react-router-dom";

export default function ConsultingOffer() {
  const navigate = useNavigate();

  return (
    <section
      className="py-20 relative overflow-hidden h-screen bg-[var(--black-deep)] flex items-center justify-center"
    >
      {/* Background Image - rounded and bordered */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-full h-auto rounded-none md:rounded-[3rem] border-0 md:border-2 border-[var(--gray-border)] overflow-hidden shadow-2xl">
          <img
            src={ctaBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Black overlay with opacity 0.7 */}
          <div className="absolute inset-0 bg-black" style={{ opacity: 0.7 }}></div>
          <div className="absolute inset-0 bg-[var(--black-deep)]/80 rounded-none md:rounded-[3rem]"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-8 w-16 h-16 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-secondary)] rounded-2xl animate-float"></div>
      <div className="absolute bottom-14 right-8 w-20 h-20 bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-2xl animate-bounce-slow"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-[var(--theme-primary)] mr-4"></div>
            <span className="text-[var(--theme-primary)] font-semibold text-lg">
             Let’s Build Something Smart Together
            </span>
            <div className="w-12 h-0.5 bg-[var(--theme-primary)] ml-4"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Connect with India’s leading affordable AI & IT solution provider.
          </h2>

          <Button
            className="bg-black text-white py-6 px-6 rounded-full font-bold text-lg hover:bg-[var(--black-deep)] hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105"
            // onClick={() => 
            //   {
            //     navigate("/contact");
            //      window.scrollTo({ top: 0, behavior: "auto" });
            //   }}
            onClick={() => window.location.href="/contact"}
          >
            Get Started Now →
          </Button>
        </div>
      </div>
    </section>
  );
}
