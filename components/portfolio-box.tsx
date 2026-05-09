import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        tags?: string[]
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { title, image, urlDemo, urlGithub, tags } = data

    return (
        <div className="group relative flex flex-col gap-6 animate-fade-in">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-white/5">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Actions Overlay */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    {urlGithub !== "#!" && (
                        <Link href={urlGithub} target="_blank" className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all">
                            <Github size={18} />
                        </Link>
                    )}
                </div>
            </div>
            
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-heading font-bold tracking-tight group-hover:text-secondary transition-colors uppercase">
                        {title}
                    </h3>
                    <Link href={urlDemo !== "#!" ? urlDemo : urlGithub} target="_blank" className="p-2 text-slate-500 hover:text-white transition-colors">
                        <ArrowUpRight size={24} />
                    </Link>
                </div>
                
                <div className="flex flex-wrap gap-3">
                    {tags?.map((tag, i) => (
                        <span key={i} className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioBox
