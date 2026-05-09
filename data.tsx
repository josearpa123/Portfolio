import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Instagram, Speech, Cpu, Globe, Database, ShieldCheck, Box } from "lucide-react";

export const socialNetworks = [ 
    {
        id: 1,
        logo: <Linkedin size={20} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jose-david-arias-pantoja-791b011a2/",
    },
    {
        id: 2,
        logo: <Github size={20} strokeWidth={1} />,
        src: "https://github.com/josearpa123",
    },
    {
        id: 3,
        logo: <Instagram size={20} strokeWidth={1} />,
        src: "https://www.instagram.com/joseariasdavid/",
    },
];

export const itemsNavbar = [
    { id: 1, title: "Inicio", icon: <HomeIcon size={20} />, link: "/" },
    { id: 2, title: "Trayectoria", icon: <UserRound size={20} />, link: "/about-me" },
    { id: 3, title: "Habilidades", icon: <Cpu size={20} />, link: "/services" },
    { id: 4, title: "Proyectos", icon: <CodeSquare size={20} />, link: "/portfolio" },
    { id: 5, title: "Contacto", icon: <Speech size={20} />, link: "/testimonials" },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Especialista en Sistemas",
        subtitle: "Enfoque en Arquitectura de Software",
        description: "Desarrollo de soluciones integrales optimizando procesos críticos y garantizando la escalabilidad de infraestructuras digitales.",
        date: "2024",
    },
    {
        id: 2,
        title: "Ingeniería de Sistemas",
        subtitle: "Estudiante de 6to Semestre",
        description: "Formación sólida en algoritmos, estructuras de datos y gestión de proyectos tecnológicos de alto impacto.",
        date: "En curso",
    },
    {
        id: 3,
        title: "Certificación Docker & DevOps",
        subtitle: "Gestión de Contenedores",
        description: "Implementación de pipelines de CI/CD y orquestación de servicios para entornos de producción.",
        date: "2023",
    },
];

export const serviceData = [
    {
        icon: <Cpu size={30} />,
        title: "Desarrollo Backend",
        description: "Construcción de APIs robustas y escalables utilizando Java, Spring Boot y arquitecturas de microservicios.",
    },
    {
        icon: <Database size={30} />,
        title: "Gestión de Datos",
        description: "Diseño y administración de bases de datos relacionales (PostgreSQL, Oracle) con enfoque en rendimiento.",
    },
    {
        icon: <Box size={30} />,
        title: "DevOps & Cloud",
        description: "Automatización de infraestructuras mediante Docker y despliegues optimizados en entornos Linux.",
    },
    {
        icon: <ShieldCheck size={30} />,
        title: "Seguridad & Redes",
        description: "Configuración de redes seguras y protocolos de protección de datos a nivel empresarial (CCNA).",
    },
    {
        icon: <Globe size={30} />,
        title: "Arquitectura Web",
        description: "Desarrollo de interfaces modernas y eficientes con Next.js, priorizando la experiencia de usuario.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Inversiones Inmobiliarias Alianza",
        image: "/image.png",
        urlGithub: "#!",
        urlDemo: "https://inversionesinmobiliariasalianza.com.co/",
        tags: ["Next.js", "Tailwind", "SEO"]
    },
    {
        id: 2,
        title: "Sistema Producción Café",
        image: "/imagecopy.png",
        urlGithub: "https://github.com/josearpa123/Sistema-produccion-cafe",
        urlDemo: "#!",
        tags: ["Java", "MySQL", "Desktop"]
    },
    {
        id: 3,
        title: "Portfolio Pro Max",
        image: "/imageportafolio.png",
        urlGithub: "https://github.com/josearpa123/Portfolio",
        urlDemo: "#!",
        tags: ["TypeScript", "Framer Motion", "UI/UX"]
    },
    {
        id: 4,
        title: "API Rest Enterprise",
        image: "/work-1.jpeg",
        urlGithub: "#!",
        urlDemo: "#!",
        tags: ["Spring Boot", "Docker", "PostgreSQL"]
    },
    {
        id: 5,
        title: "Monitor de Infraestructura",
        image: "/work-2.jpeg",
        urlGithub: "#!",
        urlDemo: "#!",
        tags: ["Python", "Linux", "Scripts"]
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Líder de Proyecto",
        description: "Un profesional con gran capacidad de resolución y una visión técnica impecable en el backend.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Colaborador Senior",
        description: "Su dominio de Docker y la gestión de bases de datos ha sido fundamental para la estabilidad de nuestros sistemas.",
        imageUrl: "/profile2.png",
    },
];
