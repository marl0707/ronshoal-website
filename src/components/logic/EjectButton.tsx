"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EjectButton() {
    const router = useRouter();
    const [isEjecting, setIsEjecting] = useState(false);

    const handleEject = () => {
        setIsEjecting(true);
        // 脱出演出のための遅延（必要なら）
        setTimeout(() => {
            router.push("/");
        }, 800);
    };

    return (
        <button
            onClick={handleEject}
            disabled={isEjecting}
            className={`
        fixed bottom-8 right-8 z-50
        group flex items-center justify-center
        bg-red-600 hover:bg-red-700 text-white
        font-bold py-3 px-6 rounded-sm shadow-lg
        border-b-4 border-red-900 active:border-b-0 active:translate-y-1
        transition-all duration-200
        ${isEjecting ? "animate-ping" : ""}
      `}
        >
            <span className="mr-2 text-xl">⚠️</span>
            {isEjecting ? "EJECTING..." : "EJECT"}
        </button>
    );
}
