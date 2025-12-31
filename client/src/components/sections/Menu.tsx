import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import latteImg from "@assets/stock_images/latte_art_coffee_cup_2edbe9dc.jpg";
import croissantImg from "@assets/stock_images/fresh_croissant_on_p_1c0a52d4.jpg";
import toastImg from "@assets/stock_images/avocado_toast_brunch_9b79e9d7.jpg";

const MENU_ITEMS = {
  coffee: [
    { name: "Signature Latte", price: "₹250", desc: "Double shot espresso with steamed milk & velvet foam", img: latteImg },
    { name: "Cappuccino", price: "₹220", desc: "Espresso, steamed milk & deep layer of foam", img: latteImg }, // Reusing img for mockup
    { name: "Americano", price: "₹180", desc: "Espresso with hot water", img: latteImg },
    { name: "Mocha", price: "₹280", desc: "Espresso, chocolate ganache & steamed milk", img: latteImg },
  ],
  food: [
    { name: "Avocado Toast", price: "₹350", desc: "Sourdough, smashed avocado, poached egg, chili flakes", img: toastImg },
    { name: "Butter Croissant", price: "₹180", desc: "Freshly baked French butter croissant", img: croissantImg },
    { name: "Pesto Chicken Sandwich", price: "₹320", desc: "Grilled chicken, basil pesto, mozzarella on ciabatta", img: toastImg },
    { name: "Berry Granola Bowl", price: "₹290", desc: "Greek yogurt, housemade granola, fresh berries", img: croissantImg },
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-foreground">
            Curated Flavors
          </h2>
        </div>

        <Tabs defaultValue="coffee" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-transparent gap-8">
              <TabsTrigger 
                value="coffee" 
                className="text-lg bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
              >
                Coffee & Drinks
              </TabsTrigger>
              <TabsTrigger 
                value="food" 
                className="text-lg bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
              >
                Food & Bakery
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="coffee">
            <div className="grid md:grid-cols-2 gap-6">
              {MENU_ITEMS.coffee.map((item, index) => (
                <MenuItem key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="food">
            <div className="grid md:grid-cols-2 gap-6">
              {MENU_ITEMS.food.map((item, index) => (
                <MenuItem key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function MenuItem({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border-none shadow-none bg-white/50 hover:bg-white transition-colors duration-300 overflow-hidden">
        <CardContent className="p-4 flex gap-4 items-center">
          <div className="w-20 h-20 rounded-md overflow-hidden shrink-0 bg-muted">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-xl font-serif font-medium text-foreground">{item.name}</h4>
              <span className="text-primary font-bold">{item.price}</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
