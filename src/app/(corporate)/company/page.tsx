import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";
import { Building2, Calendar, User, Briefcase } from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-8">
                <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">
                        COMPANY PROFILE
                    </h1>
                </TextReveal>

                <FadeIn delay={0.1}>
                    <div className="w-full aspect-[21/9] mb-16 overflow-hidden bg-gray-100 group">
                        <img
                            src="https://picsum.photos/seed/company/1600/900"
                            alt="Company Office Concept"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="border-t border-black pt-12">
                        <dl className="space-y-4 text-sm md:text-base">
                            <div className="flex flex-col md:flex-row md:gap-16 border-b border-gray-100 pb-8 hover:bg-gray-50 transition-colors p-4 rounded-xl">
                                <dt className="w-48 font-bold mb-4 md:mb-0 flex items-center gap-3 text-black">
                                    <Building2 className="w-5 h-5 text-gray-400" /> 社名
                                </dt>
                                <dd className="flex-1 text-gray-800 font-medium">ロンショール合同会社 (Ronshoal LLC)</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-16 border-b border-gray-100 pb-8 hover:bg-gray-50 transition-colors p-4 rounded-xl">
                                <dt className="w-48 font-bold mb-4 md:mb-0 flex items-center gap-3 text-black">
                                    <Calendar className="w-5 h-5 text-gray-400" /> 設立
                                </dt>
                                <dd className="flex-1 text-gray-800 font-medium">2021年</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-16 border-b border-gray-100 pb-8 hover:bg-gray-50 transition-colors p-4 rounded-xl">
                                <dt className="w-48 font-bold mb-4 md:mb-0 flex items-center gap-3 text-black">
                                    <User className="w-5 h-5 text-gray-400" /> 代表社員
                                </dt>
                                <dd className="flex-1 text-gray-800 font-medium">瀬島和樹 (Kazuki Sejima)</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-16 border-b border-gray-100 pb-8 hover:bg-gray-50 transition-colors p-4 rounded-xl">
                                <dt className="w-48 font-bold mb-4 md:mb-0 flex items-center gap-3 text-black">
                                    <Briefcase className="w-5 h-5 text-gray-400" /> 事業内容
                                </dt>
                                <dd className="flex-1 text-gray-800 leading-[2.2] font-medium">
                                    ・AI及び各種システム構築・プロデュース業務<br />
                                    ・メディカル・ヘルスケア関連事業の企画・運営<br />
                                    ・ライフスタイルブランドの展開<br />
                                    ・各種コンサルティング業務
                                </dd>
                            </div>
                        </dl>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
