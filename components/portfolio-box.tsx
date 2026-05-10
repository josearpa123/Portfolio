"use client"

import Image from "next/image";
import Link from "next/link";
import { Github, ArrowUpRight, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        tags?: string[]
        problem?: string
        solution?: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { title, image, urlDemo, urlGithub, tags, problem, solution } = data
    const [showInfo, setShowInfo] = useState(false);

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
        }
    }

    return (
        <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col gap-8"
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-secondary/50 group-hover:shadow-[0_0_80px_-20px_rgba(34,197,94,0.3)]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                />
                
                {/* Overlay with Problem/Solution on Hover */}
                <div className="absolute inset-0 bg-[#000212]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-10">
                    <p className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">The Challenge</p>
                    <p className="text-white/80 text-lg font-medium leading-relaxed mb-8">
                        {problem || "Designing a high-performance scalable solution."}
                    </p>
                    <div className="flex gap-4">
                        {urlGithub !== "#!" && (
                            <Link href={urlGithub} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold text-xs hover:bg-secondary hover:text-white transition-all">
                                <Github size={16} /> CODE
                            </Link>
                        )}
                        {urlDemo !== "#!" && (
                            <Link href={urlDemo} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-xs hover:bg-white hover:text-black transition-all">
                                <ArrowUpRight size={16} /> {title === "Jabones Rocío" ? "PROD SITE" : "LIVE DEMO"}
                            </Link>
                        )}
                    </div>
                </div>

                {/* Info Modal Overlay */}
                <AnimatePresence>
                    {showInfo && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
                        >
                            <div className="bg-[#0f1120] border border-white/10 rounded-3xl p-8 max-w-sm relative shadow-2xl">
                                <button 
                                    onClick={() => setShowInfo(false)}
                                    className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-2xl font-heading font-black uppercase text-secondary">{title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {tags?.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-[9px] font-bold text-white/60 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        {solution}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-3">
                            {tags?.map((tag, i) => (
                                <span key={i} className="text-[9px] font-bold tracking-[0.2em] uppercase text-secondary/60">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tighter group-hover:text-secondary transition-colors uppercase">
                            {title}
                        </h3>
                    </div>
                    <div className="pb-2">
                        <button 
                            onClick={() => setShowInfo(!showInfo)}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 rotate-45 group-hover:rotate-0 cursor-pointer"
                        >
                            {showInfo ? <Info size={20} className="text-white" /> : <ArrowUpRight size={20} className="group-hover:text-white transition-colors" />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioBox
