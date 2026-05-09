"use client"

import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
    return (
        <main className="relative min-h-screen bg-[#000212] pt-32 pb-40">
            <TransitionPage />
            <div className="glow-bg opacity-30" />
            
            <ContainerPage>
                <div className="max-w-7xl mx-auto">
                    <header className="mb-32">
                        <div className="overflow-hidden mb-6">
                            <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-secondary animate-slide-up">
                                Case Studies
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter leading-none animate-title">
                            SELECTED <br />
                            <span className="text-white/20">WORKS.</span>
                        </h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </main>
    );
}

export default PortfolioPage;

