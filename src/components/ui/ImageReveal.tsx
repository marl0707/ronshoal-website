"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export const ImageReveal = ({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) => {
    const reduce = useReducedMotion();

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={reduce ? { duration: 0 } : {
                    duration: 1.2,
                    delay: delay,
                    ease: [0.33, 1, 0.68, 1], // DataGrid風イージング
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};
