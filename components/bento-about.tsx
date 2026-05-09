import { dataAboutPage } from "@/data";
import { Book, Code, GraduationCap, Award } from "lucide-react";

const BentoAbout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {/* Bio Card */}
            <div className="md:col-span-2 bento-card flex flex-col justify-center">
                <h2 className="text-3xl font-heading font-bold mb-4">Mi Trayectoria</h2>
                <p className="text-slate-300 font-body leading-relaxed">
                    Como estudiante de 6to semestre de Ingeniería en Sistemas, me apasiona construir 
                    soluciones tecnológicas que resuelvan problemas complejos. Mi enfoque combina la 
                    rigurosidad del backend con la agilidad de las arquitecturas modernas.
                </p>
            </div>

            {/* Current Status Card */}
            <div className="md:col-span-1 bento-card flex flex-col items-center justify-center text-center border-secondary/30">
                <GraduationCap size={40} className="text-secondary mb-2" />
                <h3 className="text-xl font-bold">6to Semestre</h3>
                <p className="text-sm text-slate-400">Ingeniería en Sistemas</p>
            </div>

            {/* Experience Summary */}
            <div className="md:col-span-1 bento-card flex flex-col items-center justify-center text-center bg-secondary/10">
                <Award size={40} className="text-secondary mb-2" />
                <h3 className="text-xl font-bold">Certificado</h3>
                <p className="text-sm text-slate-400">Spring & Docker</p>
            </div>

            {/* Education Timeline Cards (Dynamic) */}
            {dataAboutPage.map((data, index) => (
                <div 
                    key={index} 
                    className={`bento-card ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'} flex flex-col justify-between hover:border-secondary/50`}
                >
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                                {data.date}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold font-heading">{data.title}</h3>
                        <p className="text-sm text-secondary font-semibold">{data.subtitle}</p>
                    </div>
                    {data.description && (
                        <p className="text-xs text-slate-400 mt-4 line-clamp-3">
                            {data.description}
                        </p>
                    )}
                </div>
            ))}

            {/* Skills Mini-Card */}
            <div className="md:col-span-1 bento-card flex flex-col items-center justify-center text-center group cursor-default">
                <Code size={30} className="text-secondary mb-2 group-hover:scale-110 transition-transform" />
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10">Java</span>
                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10">Next.js</span>
                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10">Docker</span>
                </div>
            </div>
        </div>
    );
}

export default BentoAbout;
