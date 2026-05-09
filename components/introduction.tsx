import { TypeAnimation } from 'react-type-animation';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Introduction = () => {
    return (
        <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="glow-bg" />
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
                {/* Badge - Editorial Style */}
                <div className="overflow-hidden mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-secondary animate-slide-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)]" />
                        Status: Available for Engineering
                    </div>
                </div>

                {/* Main Heading - Editorial Bold */}
                <h1 className="text-6xl md:text-[10rem] font-heading font-black tracking-tighter leading-[0.8] mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 animate-title">
                    ENGINEERING <br />
                    THE FUTURE
                </h1>

                {/* Subheading - Floating Modern */}
                <div className="text-lg md:text-2xl text-slate-400 font-body mb-12 flex flex-col md:flex-row gap-4 md:gap-8 items-center opacity-0 animate-fade-in [animation-delay:800ms] [animation-fill-mode:forwards]">
                    <span className="flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-secondary" />
                        Backend Specialist
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-secondary" />
                        Systems Architect
                    </span>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-fade-in [animation-delay:1200ms] [animation-fill-mode:forwards]">
                    <a href="/portfolio" className="btn-primary flex items-center gap-3 group !rounded-full !px-10 !py-4 transition-transform hover:scale-105">
                        Selected Works
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/about-me" className="text-white font-bold tracking-widest uppercase text-xs hover:text-secondary transition-colors py-4">
                        The Story
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Editorial */}
            <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-0 animate-fade-in [animation-delay:2000ms] [animation-fill-mode:forwards]">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
            </div>
        </div>
    );
}

export default Introduction;
