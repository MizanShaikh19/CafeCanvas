import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/ui/Parallax";
import { FloatingElement } from "@/components/ui/FloatingElement";
import heroImage from "@assets/generated_images/modern_cozy_cafe_interior_with_warm_lighting.png";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fixed position */}
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Parallax offset={50} className="w-full h-[120%] -y-[10%]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </Parallax>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4 text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/80"
        >
          Welcome to Brew & Bloom
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
        >
          Best Coffee <br /> in Pune
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-10 font-light"
        >
          Experience the art of coffee making in a space designed for comfort, creativity, and connection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="menu" smooth={true} offset={-100}>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 h-14 rounded-full">
              View Menu
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElement delay={0} duration={6} className="top-1/4 left-[10%] opacity-20 hidden md:block">
        <div className="w-16 h-16 bg-white rounded-full blur-xl" />
      </FloatingElement>
      <FloatingElement delay={1} duration={7} className="bottom-1/3 right-[15%] opacity-20 hidden md:block">
        <div className="w-24 h-24 bg-primary rounded-full blur-xl" />
      </FloatingElement>
      <FloatingElement delay={2} duration={5} className="top-[15%] right-[20%] opacity-10 hidden md:block">
        <div className="w-12 h-12 bg-white rounded-full blur-lg" />
      </FloatingElement>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
