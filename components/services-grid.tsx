import { serviceData } from "@/data";
import { Check } from "lucide-react";

const ServicesGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.map((item, index) => (
                <div 
                    key={index} 
                    className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary transition-all duration-500 overflow-hidden"
                >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
                    
                    <div className="relative z-10">
                        <div className="mb-6 inline-flex p-3 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-500">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-400 font-body leading-relaxed mb-6">
                            {item.description}
                        </p>
                        
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-300">
                                <Check size={16} className="text-secondary" />
                                <span>Soluciones Escalables</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-300">
                                <Check size={16} className="text-secondary" />
                                <span>Código Limpio</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServicesGrid;
