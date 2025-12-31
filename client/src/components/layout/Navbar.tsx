import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Menu", to: "menu" },
    { name: "Gallery", to: "gallery" },
    { name: "Location", to: "location" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
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
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center gap-6 animate-in slide-in-from-top-5">
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
          <Button onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
            Book a Table
          </Button>
        </div>
      )}
    </nav>
  );
}
