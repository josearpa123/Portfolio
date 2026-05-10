"use client"

import { dataChangelog } from "@/data";
import { Terminal } from "lucide-react";

const Changelog = () => {
    return (
        <section className="mt-40 mb-20 animate-fade-in [animation-delay:1500ms] [animation-fill-mode:forwards] opacity-0">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Terminal size={20} />
                </div>
                <h2 className="text-2xl font-heading font-bold uppercase tracking-widest">
                    Technical Changelog
                </h2>
                <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="grid gap-6">
                {dataChangelog.map((item, index) => (
                    <div key={index} className="linear-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.date}</span>
                            <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">{item.title}</h3>
                            <p className="text-slate-400 text-sm max-w-xl">{item.description}</p>
                        </div>
                        <div className="flex items-center">
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                                item.tag === 'Feature' ? 'border-secondary/30 text-secondary bg-secondary/5' : 
                                item.tag === 'Performance' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' : 
                                'border-purple-500/30 text-purple-400 bg-purple-500/5'
                            }`}>
                                {item.tag}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="mt-8 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                Actualizado en tiempo real desde el repositorio
            </p>
        </section>
    );
};

export default Changelog;
