import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
            <Instagram className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Follow us on Instagram
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            @brewandbloom_pune
          </p>
          <Button size="lg" className="rounded-full px-8" onClick={() => window.open("https://instagram.com", "_blank")}>
            Follow Us
          </Button>
        </div>
        
        {/* Placeholder for grid if needed, or just the CTA is clean for "Minimal" */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Decorative squares to imply a feed without fetching API */}
           <div className="aspect-square bg-muted rounded-md" />
           <div className="aspect-square bg-muted rounded-md" />
           <div className="aspect-square bg-muted rounded-md" />
           <div className="aspect-square bg-muted rounded-md" />
        </div>
        <p className="text-xs text-muted-foreground mt-4 uppercase tracking-widest">Share your moments with #BrewAndBloom</p>
      </div>
    </section>
  );
}
