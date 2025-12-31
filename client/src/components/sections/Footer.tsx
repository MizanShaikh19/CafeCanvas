import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Brew & Bloom</h3>
            <p className="text-white/60">Crafting moments, one cup at a time.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; 2025 Brew & Bloom. All rights reserved.</p>
          <p>
            Website by Mizan Shaikh | Need one? <a href="#" className="text-primary hover:text-white underline decoration-dotted underline-offset-4">Click here</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
