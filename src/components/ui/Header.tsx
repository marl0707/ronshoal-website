"use client";

import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }} // スプラッシュアニメーション終了後に同期してスライドイン
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-auto"
        >
            <a href="/" className="flex items-center hover:opacity-70 transition-opacity">
                <img src="/ronshoal-logo-final.png" alt="Ronshoal LLC Logo" className="h-6 md:h-8 w-auto object-contain brightness-0 invert" />
            </a>
            <nav className="hidden md:flex gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em]">
            </nav>
            {/* モバイル用ハンバーガーメニュー等を入れる場合はここ */}
        </motion.header>
    );
};
