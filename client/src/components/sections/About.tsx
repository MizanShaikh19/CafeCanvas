import { motion } from "framer-motion";
import aboutImage from "@assets/stock_images/barista_pouring_coff_d0b8bd01.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Barista pouring coffee" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-lg -z-10 hidden md:block" />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:pl-10"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
              More than just a cup of coffee.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2024, Brew & Bloom was born from a simple desire: to bring world-class specialty coffee to the heart of Pune. We believe that every cup tells a story, from the farm to your table.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We serve ethically sourced beans, roasted in small batches to preserve their unique flavors. Whether you're here for a quick espresso, a leisurely brunch, or to get some work done, our space is designed to be your home away from home.
            </p>
            
            <div className="flex gap-8">
              <div>
                <h4 className="font-serif text-3xl font-bold text-primary">15+</h4>
                <p className="text-sm text-muted-foreground mt-1">Coffee Varieties</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl font-bold text-primary">100%</h4>
                <p className="text-sm text-muted-foreground mt-1">Organic Milk</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
