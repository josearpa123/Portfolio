import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.1.png" priority width="600" height="600" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Programador Junior, <br />
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

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Estudiante de Ingeniería en
                    Sistemas (6to semestre) con
                    experiencia en desarrollo de
                    software, bases de datos y redes. 
                    Competente en programación con
                    Java, desarrollo de aplicaciones
                    móviles en Android Studio, y
                    administración de bases de datos
                    como PostgreSQL, Oracle y
                    MySQL. Conocimientos sólidos en
                    diseño orientado a objetos, Docker
                    para la gestión de contenedores y
                    redes Cisco (CCNA-level). Capaz
                    de implementar soluciones backend
                    y participar en la creación de
                    infraestructuras escalables y
                    eficientes. Motivado por aprender
                    nuevas tecnologías y contribuir al
                    desarrollo de
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;