"use client"

import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { motion } from "framer-motion";

const PortfolioPage = () => {
    return (
        <main className="relative min-h-screen bg-[#000212] pt-32 pb-40 overflow-hidden">
            <TransitionPage />
            
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <ContainerPage>
                <div className="max-w-7xl mx-auto relative z-10">
                    <header className="mb-32 md:mb-48">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="overflow-hidden mb-8"
                        >
                            <span className="inline-block text-[12px] font-bold tracking-[0.5em] uppercase text-secondary/80">
                                Crafted with precision
                            </span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                            className="text-7xl md:text-[12rem] font-heading font-black tracking-tighter leading-[0.85] uppercase"
                        >
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Works.</span>
                        </motion.h1>
                        
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                            className="h-px bg-gradient-to-r from-secondary/50 via-white/10 to-transparent mt-16"
                        />
                    </header>

                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32 md:gap-y-48"
                    >
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </motion.div>
                </div>
            </ContainerPage>
        </main>
    );
}

export default PortfolioPage;
