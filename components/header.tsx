"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
            <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
                <Link href='/'>
                    <h1 className="text-xl font-heading font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        Jose<span className="text-secondary">.</span>Arias
                    </h1>
                </Link>
                <div className="flex items-center gap-6">
                    {socialNetworks.map(({ logo, src, id }) => (
                        <Link
                            key={id}
                            href={src}
                            target="_blank"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            {logo}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;