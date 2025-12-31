import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div className="order-2 md:order-1">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8 text-foreground">
              Location & Hours
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-medium mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    Shop No. 4, Emerald Plaza,<br />
                    Koregaon Park, Pune, Maharashtra 411001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-medium mb-2">Opening Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 10:00 PM</p>
                  <p className="text-muted-foreground">Sat - Sun: 9:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-medium mb-2">Contact</h4>
                  <p className="text-muted-foreground mb-4">+91 98765 43210</p>
                  <Button variant="outline" className="gap-2" onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="order-1 md:order-2 h-[400px] w-full rounded-lg overflow-hidden shadow-lg border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979896405875!2d73.88775631489288!3d18.52938298740384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c056fa4d8413%3A0xe2b3bd637ed792be!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645523658912!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
