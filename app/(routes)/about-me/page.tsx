"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { dataAboutPage } from "@/data";
import { GraduationCap, Code, Briefcase } from "lucide-react";

const AboutMePage = () => {
    return (
        <main className="relative min-h-screen bg-[#000212] pt-32 pb-40">
            <TransitionPage />
            <div className="glow-bg opacity-40" />
            
            <ContainerPage>
                <div className="max-w-4xl mx-auto">
                    <header className="mb-20">
                        <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
                            Ingeniería <span className="text-secondary">&</span> Trayectoria
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Mi enfoque se centra en la intersección de la eficiencia del backend y la 
                            robustez de los sistemas. Aquí un resumen de mi camino profesional.
                        </p>
                    </header>

                    <div className="grid gap-12">
                        {dataAboutPage.map((item, index) => (
                            <div key={item.id} className="relative group pl-8 md:pl-0">
                                {/* Timeline line */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
                                
                                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Content Card */}
                                    <div className="flex-1 w-full linear-card p-8 group-hover:border-secondary/30 transition-all">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="p-2 rounded-lg bg-white/5 text-secondary">
                                                {index === 0 ? <Briefcase size={20} /> : index === 1 ? <GraduationCap size={20} /> : <Code size={20} />}
                                            </span>
                                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                        <h4 className="text-secondary font-medium mb-4">{item.subtitle}</h4>
                                        <p className="text-slate-400 leading-relaxed">{item.description}</p>
                                    </div>
                                    
                                    {/* Middle Dot */}
                                    <div className="absolute left-[-4px] md:left-1/2 top-8 md:-translate-x-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)] z-10" />
                                    
                                    {/* Empty space for alternate sides */}
                                    <div className="hidden md:block flex-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </main>
    );
}

export default AboutMePage;
