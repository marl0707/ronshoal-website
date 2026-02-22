"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
    onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const [isVisible, setIsVisible] = useState(true);

    // 表示するテキスト
    const text = "すべての人々に、後悔のない人生を。";
    const characters = Array.from(text);

    useEffect(() => {
        // スプラッシュ画面を一定時間後に非表示にする
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2800); // 2.8秒後にスモークアウト開始

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {isVisible && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} // DataGrid風のフワッと消える演出
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
                >
                    <div className="overflow-hidden">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.2, // 少し待ってからテキストアニメーション開始
                                    },
                                },
                            }}
                            className="flex justify-center flex-wrap max-w-sm md:max-w-2xl text-center"
                        >
                            {characters.map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: { duration: 0.6, ease: "easeOut" },
                                        },
                                    }}
                                    className="text-lg md:text-3xl font-medium tracking-widest text-black"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
