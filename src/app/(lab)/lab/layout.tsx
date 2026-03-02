import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Garage | Kazuki Sejima Personal Lab",
    description: "Experimental ideas, prototypes, and brain dumps.",
    robots: {
        index: false, // 検索エンジンにインデックスさせない（隠しサイト演出）
        follow: false,
    },
};

export default function LabLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-lab-base text-lab-text font-mono selection:bg-lab-accent selection:text-white">
            {children}
        </div>
    );
}
