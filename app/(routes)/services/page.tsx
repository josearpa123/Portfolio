"use client"

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaJava, FaPython, FaWordpress, FaGithub, FaGit } from "react-icons/fa";
import { SiPostgresql, SiOracle, SiMysql, SiAndroidstudio, SiLinux } from "react-icons/si";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center min-h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-4">
                <div className="max-w-[450px]">
                    <h1 className="text-xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary">Skills</span></h1>
                    <p className="text-base md:text-xl text-gray-300 mb-3">Tengo experiencia en el uso de las siguientes tecnologías:</p>

                    <div className="flex justify-center flex-wrap gap-x-4 gap-y-4 text-5xl text-secondary mb-3">
                        <FaHtml5 title="HTML5" className="text-[#e34c26]" />
                        <FaCss3Alt title="CSS3" className="text-[#264de4]" />
                        <FaJs title="JavaScript" className="text-[#f0db4f]" />
                        <FaReact title="React" className="text-[#61dafb]" />
                        <FaJava title="Java" className="text-[#5382a1]" />
                        <FaPython title="Python" className="text-[#306998]" />
                        <FaWordpress title="WordPress" className="text-[#21759b]" />
                        <SiAndroidstudio title="Android Studio" className="text-[#3DDC84]" />
                        <SiPostgresql title="PostgreSQL" className="text-[#336791]" />
                        <SiOracle title="Oracle" className="text-[#f80000]" />
                        <SiMysql title="MySQL" className="text-[#00758f]" />
                        <FaDocker title="Docker" className="text-[#2496ed]" />
                        <FaGit title="Git" className="text-[#f34f29]" />
                        <FaGithub title="GitHub" className="text-white" />
                        <SiLinux title="Linux" className="text-white" />
                    </div>
                </div>

                <div className="w-full">
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;