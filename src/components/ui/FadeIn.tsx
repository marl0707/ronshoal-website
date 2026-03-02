"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const FadeIn = ({
    children,
    delay = 0,
    className,
    direction = "up",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}) => {
    let initialX = 0;
    let initialY = 0;

    switch (direction) {
        case "up":
            initialY = 20;
            break;
        case "down":
            initialY = -20;
            break;
        case "left":
            initialX = 20;
            break;
        case "right":
            initialX = -20;
            break;
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: initialX, y: initialY }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
