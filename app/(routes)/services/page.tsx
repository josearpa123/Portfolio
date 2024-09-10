
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

// Importar íconos de react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaJava, FaPython, FaWordpress, FaGithub, FaGit } from "react-icons/fa";
import { SiPostgresql, SiOracle, SiMysql, SiAndroidstudio, SiLinux } from "react-icons/si"; // Íconos específicos de algunas tecnologías

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary">Skills</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Tengo experiencia en el uso de las siguientes tecnologías:</p>
                    
                    {/* Íconos de tecnologías */}
                    <div className="flex justify-center flex-wrap space-x-2 text-5xl text-secondary">
                        <FaHtml5 title="HTML5" className="text-[#e34c26]" />     {/* Naranja HTML */}
                        <FaCss3Alt title="CSS3" className="text-[#264de4]" />    {/* Azul CSS */}
                        <FaJs title="JavaScript" className="text-[#f0db4f]" />   {/* Amarillo JS */}
                        <FaReact title="React" className="text-[#61dafb]" />    {/* Azul React */}
                        <FaJava title="Java" className="text-[#5382a1]" />       {/* Azul claro Java (ajustado) */}
                        <FaPython title="Python" className="text-[#306998]" />   {/* Azul Python */}
                        <FaWordpress title="WordPress" className="text-[#21759b]" /> {/* Azul WordPress */}
                        <SiAndroidstudio title="Android Studio" className="text-[#3DDC84]" />  {/* Verde Android Studio */}
                        <SiPostgresql title="PostgreSQL" className="text-[#336791]" />  {/* Azul PostgreSQL */}
                        <SiOracle title="Oracle" className="text-[#f80000]" />   {/* Rojo Oracle */}
                        <SiMysql title="MySQL" className="text-[#00758f]" />     {/* Azul MySQL */}
                        <FaDocker title="Docker" className="text-[#2496ed]" />   {/* Azul Docker */}
                        <FaGit title="Git" className="text-[#f34f29]" />         {/* Rojo Git */}
                        <FaGithub title="GitHub" className="text-white" />       {/* Blanco GitHub (ajustado) */}
                        <SiLinux title="Linux" className="text-white" />         {/* Blanco Linux (ajustado) */}
                    </div>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;