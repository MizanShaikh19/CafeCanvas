import { motion } from "framer-motion";
import img1 from "@assets/stock_images/latte_art_coffee_cup_2edbe9dc.jpg";
import img2 from "@assets/stock_images/fresh_croissant_on_p_1c0a52d4.jpg";
import img3 from "@assets/stock_images/avocado_toast_brunch_9b79e9d7.jpg";
import img4 from "@assets/stock_images/barista_pouring_coff_d0b8bd01.jpg";
import img5 from "@assets/generated_images/modern_cozy_cafe_interior_with_warm_lighting.png";

const IMAGES = [img1, img5, img2, img4, img3, img1];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-foreground">
            A Glimpse Inside
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${index === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-square md:aspect-auto h-full w-full bg-muted">
                <img 
                  src={src} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
