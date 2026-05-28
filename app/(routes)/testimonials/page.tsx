"use client"

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import ContactChat from "@/components/contact-chat";

const ContactPage = () => {
    return (
        <main className="relative min-h-screen bg-[#000212] pt-32 pb-40">
            <TransitionPage />
            <div className="glow-bg opacity-30" />
            
            <ContainerPage>
                <div className="max-w-6xl mx-auto">
                    <header className="mb-20 text-center">
                        <div className="overflow-hidden mb-6">
                            <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-secondary animate-slide-up">
                                Let&apos;s Connect
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter leading-none animate-title mb-8">
                            HABLEMOS<span className="text-white/20">.</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body max-w-2xl mx-auto leading-relaxed">
                            ¿Tienes una idea innovadora o un proyecto en mente? 
                            Hablemos y hagámoslo realidad.
                        </p>
                    </header>

                    <div className="animate-fade-in [animation-delay:1000ms] [animation-fill-mode:forwards] opacity-0">
                        <ContactChat />
                    </div>
                </div>
            </ContainerPage>
        </main>
    );
}

export default ContactPage;
