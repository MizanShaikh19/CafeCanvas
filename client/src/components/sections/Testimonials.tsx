import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Daily Regular",
        content: "The best cold brew in Pune, hands down. The ambience is perfect for working remotely, and the staff knows exactly how I like my coffee.",
        rating: 5,
        initials: "AS"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Food Blogger",
        content: "I'm obsessed with their avocado toast! It's not just food, it's art. The attention to detail in presentation is unmatched.",
        rating: 5,
        initials: "PP"
    },
    {
        id: 3,
        name: "Rohan Deshmukh",
        role: "Coffee Enthusiast",
        content: "Finally a place that takes specialty coffee seriously. Their single-origin pour-overs are exquisite. Highly recommended!",
        rating: 4,
        initials: "RD"
    },
    {
        id: 4,
        name: "Meera Iyer",
        role: "Student",
        content: "My favorite study spot. Quiet corners, great wifi, and the macaroons are to die for. It feels like a little escape from the city.",
        rating: 5,
        initials: "MI"
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-play
    useEffect(() => {
        if (dragging) return;
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
    }, [index, dragging]);

    const nextTestimonial = () => {
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        setDragging(false);
        if (info.offset.x < -50) {
            nextTestimonial();
        } else if (info.offset.x > 50) {
            prevTestimonial();
        }
    };

    return (
        <section className="py-20 md:py-32 bg-primary/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-foreground">
                        Guest Love
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto" ref={containerRef}>
                    <div className="flex justify-center items-center relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragStart={() => setDragging(true)}
                                onDragEnd={onDragEnd}
                                className="absolute w-full max-w-2xl cursor-grab active:cursor-grabbing"
                            >
                                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
                                        <Quote className="w-12 h-12 text-primary/20 mb-6" />
                                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-foreground/90">
                                            "{TESTIMONIALS[index].content}"
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary border-2 border-primary/20">
                                                {TESTIMONIALS[index].initials}
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-foreground">{TESTIMONIALS[index].name}</h4>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wide">{TESTIMONIALS[index].role}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 mt-6 text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < TESTIMONIALS[index].rating ? "fill-current" : "text-muted/30"}`}
                                                />
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-12 hidden md:block">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-12 w-12 border-primary/20 hover:bg-white hover:text-primary transition-colors"
                            onClick={prevTestimonial}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-12 hidden md:block">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-12 w-12 border-primary/20 hover:bg-white hover:text-primary transition-colors"
                            onClick={nextTestimonial}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
