import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    xOffset?: number;
    yOffset?: number;
    className?: string;
}

export function FloatingElement({
    children,
    delay = 0,
    duration = 5,
    xOffset = 10,
    yOffset = 15,
    className = "",
}: FloatingElementProps) {
    return (
        <motion.div
            animate={{
                y: [-yOffset, yOffset, -yOffset],
                x: [-xOffset, xOffset, -xOffset],
                rotate: [-5, 5, -5],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={`absolute pointer-events-none ${className}`}
        >
            {children}
        </motion.div>
    );
}
