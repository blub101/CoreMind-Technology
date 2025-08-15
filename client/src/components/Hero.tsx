import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Generate new value from new{" "}
              <span className="gradient-text">technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--body-color)] leading-relaxed max-w-2xl">
           CoreMind Technology specializes in web, app, and digital marketing solutions.
We blend strategy, creativity, and tech to deliver results.
Built for growth, tailored to your goals.
Let’s shape your digital future together.  </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-black text-white py-6 px-6 rounded-full font-bold text-lg hover:bg-[var(--black-deep)] hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/services")}
              >
                Get Started Now →
              </Button>
              <Button
                className="bg-black text-white py-6 px-6 rounded-full font-bold text-lg hover:bg-[var(--black-deep)] hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/contact")}
              >
                Discovery Now
              </Button>
            </div>
          </div>

          {/* Right Premium Animation */}
          <div className="flex justify-center lg:justify-center relative">
            {/* Background glow */}
            <motion.div
              className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#FE5A1D] via-pink-500 to-purple-600 blur-3xl opacity-30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Rotating halo with center orb */}
            <motion.div
              className="w-[250px] h-[250px] rounded-full border-4 border-white/10 backdrop-blur-lg bg-white/5 flex items-center justify-center relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Orbiting small sphere */}
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-yellow-400 shadow-lg"
                style={{ top: "10%", left: "50%" }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Main glowing orb */}
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FE5A1D] to-yellow-400 shadow-[0_0_40px_rgba(254,90,29,0.6)]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
