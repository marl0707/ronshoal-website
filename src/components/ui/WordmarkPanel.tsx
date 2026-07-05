import { ReactNode } from "react";

/**
 * 写真の代わりに、プロダクト名を大きなタイポグラフィで見せる画像枠。
 * 既存の画像カード（aspect-[16/9] + grayscale→hoverで鮮やか）と同じ寸法・
 * 同じ「くすんだ→鮮やか」の演出を、写真ではなく文字＋色変化で踏襲する。
 * 親カードの `group` クラスから group-hover を受ける。
 * 将来スクリーンショットを用意できれば、この枠をそのまま画像に差し替え可能。
 */
export const WordmarkPanel = ({
    label,
    sublabel,
    children,
}: {
    label: string;
    sublabel?: string;
    children?: ReactNode;
}) => {
    return (
        <div aria-hidden="true" className="aspect-[16/9] w-full bg-[#f4f4f5] overflow-hidden mb-8 relative flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-gray-500 transition-colors duration-700 group-hover:text-corp-main">
                {label}
            </span>
            {sublabel && (
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-400 transition-colors duration-700 group-hover:text-gray-500">
                    {sublabel}
                </span>
            )}
            {children}
        </div>
    );
};
