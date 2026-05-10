"use client"

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import { serviceData } from "@/data";
import { CheckCircle2 } from "lucide-react";

const ServicesPage = () => {
    return (
        <main className="relative min-h-screen bg-[#000212] pt-32 pb-40">
            <TransitionPage />
            <div className="glow-bg opacity-30" />
            
            <ContainerPage>
                <div className="max-w-6xl mx-auto">
                    <header className="mb-20 text-center md:text-left">
                        <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
                            Habilidades <span className="text-secondary">&</span> Stack
                        </h1>
                        <p className="text-xl text-slate-400 font-body max-w-2xl leading-relaxed">
                            Soluciones de ingeniería enfocadas en la robustez técnica, 
                            la automatización y el rendimiento del sistema.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceData.map((item, index) => (
                            <div key={index} className="group linear-card p-10 hover:border-secondary/40 transition-all duration-500 bg-white/[0.02] backdrop-blur-xl">
                                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/5 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-heading font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-400 font-body leading-relaxed mb-8 text-lg">
                                    {item.description}
                                </p>
                                <div className="pt-8 border-t border-white/5">
                                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary/60 mb-6">Core Technologies</p>
                                    <div className="flex flex-wrap gap-3">
                                        {item.techs?.map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-[11px] font-bold text-slate-300 border border-white/5 hover:border-secondary/30 hover:bg-secondary/10 transition-all cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </main>
    );
}

export default ServicesPage;
