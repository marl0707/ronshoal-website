import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-8">
                <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">
                        PHILOSOPHY
                    </h1>
                </TextReveal>

                <FadeIn delay={0.1}>
                    <div className="w-full aspect-[21/9] mb-16 overflow-hidden bg-gray-100 group">
                        <img
                            src="https://picsum.photos/seed/philosophy/1600/900"
                            alt="Philosophy Concept"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                </FadeIn>

                <div className="space-y-16 text-sm md:text-base leading-[2.2] font-medium text-gray-800">
                    <TextReveal delay={0.1}>
                        <h2 className="text-2xl md:text-4xl font-bold mb-8">すべての人々に、<br />後悔のない人生を。</h2>
                        <p>
                            すべての人々が死を迎える最後の瞬間に、「俺の人生、最高に楽しかったな」と心から思えること。<br />
                            それが私たちが掲げる、「すべての人々に後悔のない人生を」という理念の真意です。
                        </p>
                    </TextReveal>

                    <TextReveal delay={0.2}>
                        <p>
                            私自身、「あの時こうしていれば」「もっと他に良い道があったのでは」という後悔を抱えながら一生を終えたくない。<br />
                            「もうこれ以上ないほどにやり切った」と心から思えるところまで人生を燃やし尽くし、一切の後悔なくこの世界を去りたい。<br />
                            そして、その全力で生き抜く背中を、愛する息子をはじめとする未来の子どもたちにしっかりと見せていきたいと強く願っています。
                        </p>
                    </TextReveal>

                    <TextReveal delay={0.3}>
                        <p>
                            このブレない信念こそが、ロンショールのすべての原動力です。<br />
                            「健康」という根本的な課題に向き合う最先端医療プラットフォームの構築も、ビジネスの最前線で直面する課題をAIやシステム開発で打破する伴走支援も。<br />
                            異なる領域に見えるこれらの事業は、「関わるすべての人々に、真に価値のある選択肢を手渡す」という強烈な哲学で結びついています。
                        </p>
                    </TextReveal>
                </div>
            </div>
        </main>
    );
}
