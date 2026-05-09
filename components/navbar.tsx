"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full mt-auto h-max bottom-8">
            <nav>
                <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    {itemsNavbar.map((item) => (
                        <Link 
                            key={item.id}
                            href={item.link}
                            className={`group relative p-3 transition-all duration-300 rounded-xl hover:bg-white/10 ${router === item.link ? 'text-secondary bg-white/5' : 'text-slate-400 hover:text-white'}`}
                        >
                            {item.icon}
                            {/* Tooltip */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/90 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                                {item.title}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 border-r border-b border-white/10" />
                            </div>
                            {/* Active Dot */}
                            {router === item.link && (
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full shadow-[0_0_8px_var(--secondary)]" />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

