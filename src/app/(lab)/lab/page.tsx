import Link from "next/link";
import EjectButton from "@/components/logic/EjectButton";

export default function LabPage() {
    return (
        <div className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* 背景ノイズ演出 (仮) */}
                <div className="w-full h-full bg-[radial-gradient(#3b5663_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <h1 className="text-4xl font-mono font-bold text-lab-main mb-4 z-10 glitch-effect">
                The Garage
            </h1>
            <p className="text-xl mb-8 text-lab-text z-10">後悔のない人生のために</p>

            <div className="animate-pulse text-lab-accent font-bold z-10">
                UI生成中... (Stitch Integration Pending)
            </div>

            <div className="mt-12 p-6 border-2 border-dashed border-lab-sub rounded-lg bg-white/50 z-10 max-w-md text-center">
                <h2 className="text-lg font-bold mb-2 text-lab-sub">実験室へようこそ</h2>
                <p className="text-sm text-lab-text">
                    ここは未完成のアイデアが集まる場所です。<br />
                    整理整頓はされていません。足元にご注意ください。
                </p>
            </div>

            <EjectButton />
        </div>
    );
}
