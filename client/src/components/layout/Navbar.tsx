import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Menu", to: "menu" },
    { name: "Gallery", to: "gallery" },
    { name: "Location", to: "location" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed w-full z-50 transition-colors duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="hero" smooth={true} className="cursor-pointer flex items-center gap-2">
          <Coffee className={cn("w-6 h-6", scrolled ? "text-primary" : "text-white")} />
          <span className={cn("text-2xl font-serif font-bold tracking-tight", scrolled ? "text-foreground" : "text-white")}>
            Brew & Bloom
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-100}
              className={cn(
                "cursor-pointer text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button
            className={cn(
              "font-serif",
              !scrolled && "bg-white text-black hover:bg-white/90 border-transparent"
            )}
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            Book a Table
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-foreground" : "text-white"}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
              <Button onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
                Book a Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
