import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Github } from "lucide-react";
import { DiDocker } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

export const socialNetworks = [ 
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jose-david-arias-pantoja-791b011a2/",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/josearpa123",
    },
    {
        id: 5,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/joseariasdavid/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Tecnico en sistemas",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital",
        date: "Dic 2021 ",
    },
    {
        d: 2,
        title: "Ingienieria en sistemas",
        subtitle: "Estudiante de 6th semestre",
        description: "Estudiante de Ingeniería en Sistemas con experiencia en Java, desarrollo Android, y administración de bases de datos (PostgreSQL, Oracle, MySQL). Conocimientos en Docker y redes Cisco (CCNA). Capaz de crear soluciones backend y estructuras escalables. Motivado por aprender y contribuir a proyectos innovadores.",
        date: "En curso",
        additionalTitle: "Certificaciones"
    },
    {
        d: 3,
        title: "Curso de Spring Framework y Spring Boot",
        subtitle: "Codigo Facilito",
        date: "Completada",
    },
    {
        d: 4,
        title: "Fundamentos de HTML -Bootcamp Fronted",
        subtitle: "Codigo Facilito",
        Description: "Generezión 3",
        date: "Completada",
    },
    {
        d: 5,
        title: "Curso de Patrones de Diseño con Java",
        subtitle: "Codigo Facilito",
        date: "Completada",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Gestión de Proyectos",
        description: "Planificación, seguimiento y control de proyectos utilizando metodologías ágiles.",
    },
    {
        icon: <Pencil />,
        title: "Diseño UML",
        description: "Modelado de sistemas mediante diagramas UML, incluyendo diagramas de clases, casos de uso y secuencia para una mejor comprensión del software.",
    },
    {
        icon: <Computer />,
        title: "Desarrollo de Software",
        description: "Desarrollo de aplicaciones web y móviles con lenguajes como Java, Python y frameworks modernos. Experiencia en Android Studio.",
    },
    {
        icon: <SiPostgresql />,
        title: "Administración de Bases de Datos",
        description: "Manejo de bases de datos como PostgreSQL, Oracle y MySQL, asegurando la integridad y el rendimiento óptimo de los datos.",
    },
    {
        icon: <Rocket />,
        title: "Enterprise Architect",
        description: "Uso de Enterprise Architect para modelado de arquitecturas empresariales y diseño de soluciones escalables.",
    },
    {
        icon: <DiDocker  />,
        title: "Docker y Contenedores",
        description: "Implementación de soluciones con Docker, creando contenedores que facilitan la portabilidad y escalabilidad del software.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Inversiones inmobiliarias alianza",
        image: "/image.png",
        urlGithub: "#!",
        urlDemo: "https://inversionesinmobiliariasalianza.com.co/",
    },
    {
        id: 2,
        title: "Sistemas de produccion de café",
        image: "/imagecopy.png",
        urlGithub: "https://github.com/josearpa123/Sistema-produccion-cafe",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Portafolio",
        image: "/imageportafolio.png",
        urlGithub: "https://github.com/josearpa123/Portfolio",
        urlDemo: "https://portfolio-92rhmiq99-jose-david-arias-pantojas-projects.vercel.app/testimonials",
    },
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Jose David Arias",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];