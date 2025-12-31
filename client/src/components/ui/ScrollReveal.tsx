
import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    viewport?: UseInViewOptions;
    className?: string;
}

export function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    viewport = { once: true, margin: "-50px" },
    className = "",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const getHiddenVariant = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: 75 };
            case "down":
                return { opacity: 0, y: -75 };
            case "left":
                return { opacity: 0, x: 75 };
            case "right":
                return { opacity: 0, x: -75 };
            default:
                return { opacity: 0, y: 75 };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
            <motion.div
                variants={{
                    hidden: getHiddenVariant(),
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
