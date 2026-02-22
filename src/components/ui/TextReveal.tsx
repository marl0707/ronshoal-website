"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const TextReveal = ({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.33, 1, 0.68, 1], // DataGrid風のキレのあるイージング (cubic-bezier(0.33, 1, 0.68, 1))
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
