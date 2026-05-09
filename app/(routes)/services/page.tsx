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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceData.map((item, index) => (
                            <div key={index} className="group linear-card p-8 hover:border-secondary/40 transition-all duration-500">
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-secondary group-hover:scale-110 group-hover:bg-secondary/10 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 font-body leading-relaxed mb-6">
                                    {item.description}
                                </p>
                                <div className="pt-6 border-t border-white/5">
                                    <ul className="space-y-3">
                                        {["Alto Rendimiento", "Arquitectura Limpia"].map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-slate-500">
                                                <CheckCircle2 size={14} className="text-secondary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
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
