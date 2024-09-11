import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="relative z-20 w-full bg-darkBg/60 py-12 md:py-20">
            <div className="relative z-20 grid items-center h-full max-w-6xl mx-auto px-6 md:grid-cols-2">
                <Image src="/home-4.1.png" priority width="600" height="600" alt="Avatar" className="object-cover w-full h-auto max-w-xs md:max-w-lg" />
                <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Programador Junior, <br />
                        <TypeAnimation
                            sequence={[
                                'Sobre mí',
                                1000,
                                'Sobre mí',
                                1000,
                                'Sobre mí',
                                1000,
                                'Sobre mí',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mb-4 text-xl md:text-xl text-gray-300 text-center md:text-left">
                        Estudiante de Ingeniería en Sistemas (6to semestre) con experiencia en desarrollo de software, bases de datos y redes. Competente en programación con Java, desarrollo de aplicaciones móviles en Android Studio, y administración de bases de datos como PostgreSQL, Oracle y MySQL. Conocimientos sólidos en diseño orientado a objetos, Docker para la gestión de contenedores y redes Cisco (CCNA-level). Capaz de implementar soluciones backend y participar en la creación de infraestructuras escalables y eficientes. Motivado por aprender nuevas tecnologías y contribuir al desarrollo de proyectos nuevos.
                    </p>

                    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start md:gap-6">
                        <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 border-secondary text-md rounded-xl text-center hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 border-secondary text-md rounded-xl text-center text-secondary hover:shadow-xl hover:shadow-secondary">
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;