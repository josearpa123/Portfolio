import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Instagram, Speech, Cpu, Globe, Database, ShieldCheck, Box, Terminal, Layers, Zap } from "lucide-react";

export const socialNetworks = [ 
    { id: 1, logo: <Linkedin size={20} strokeWidth={1} />, src: "https://www.linkedin.com/in/jose-david-arias-pantoja-791b011a2/" },
    { id: 2, logo: <Github size={20} strokeWidth={1} />, src: "https://github.com/josearpa123" },
    { id: 3, logo: <Instagram size={20} strokeWidth={1} />, src: "https://www.instagram.com/joseariasdavid/" },
];

export const itemsNavbar = [
    { id: 1, title: "Inicio", icon: <HomeIcon size={20} />, link: "/" },
    { id: 2, title: "Trayectoria", icon: <UserRound size={20} />, link: "/about-me" },
    { id: 3, title: "Stack", icon: <Layers size={20} />, link: "/services" },
    { id: 4, title: "Proyectos", icon: <CodeSquare size={20} />, link: "/portfolio" },
    { id: 5, title: "Contacto", icon: <Speech size={20} />, link: "/testimonials" },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Especialista en Sistemas",
        subtitle: "Enfoque en Arquitectura de Software",
        description: "Diseño de sistemas distribuidos y optimización de recursos.",
        date: "2024",
    },
    {
        id: 2,
        title: "Ingeniería de Sistemas",
        subtitle: "9no Semestre",
        description: "Enfoque en ingeniería de software, bases de datos y DevOps.",
        date: "En curso",
    },
];

/* NEW: Technical Changelog Data (Proof of Shipping) */
export const dataChangelog = [
    {
        date: "Mayo 2026",
        title: "Portfolio v2 Launch",
        description: "Migración total a estética Linear, optimización de Core Web Vitals y nueva interfaz de chat interactiva.",
        tag: "Feature"
    },
    {
        date: "Abril 2026",
        title: "Backend API Optimization",
        description: "Mejora del 40% en tiempos de respuesta usando Redis y optimización de queries SQL.",
        tag: "Performance"
    },
    {
        date: "Marzo 2026",
        title: "Docker Orchestration",
        description: "Implementación de cluster local para microservicios con monitoreo en tiempo real.",
        tag: "DevOps"
    }
];

export const serviceData = [
    {
        icon: <CodeSquare size={30} />,
        title: "Frontend & UI/UX",
        description: "Interfaces modernas y reactivas.",
        techs: ["React", "Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
        icon: <Terminal size={30} />,
        title: "Backend Development",
        description: "APIs escalables y seguras.",
        techs: ["Laravel", "Node.js", "Express", "Spring Boot", "Python (Flask/FastAPI)"]
    },
    {
        icon: <Database size={30} />,
        title: "Data Engineering",
        description: "Gestión avanzada de datos.",
        techs: ["PostgreSQL", "Oracle", "MySQL", "Redis", "ETL Pipelines"]
    },
    {
        icon: <Box size={30} />,
        title: "DevOps & Cloud",
        description: "Automatización y despliegue.",
        techs: ["Docker", "Docker Compose", "CI/CD", "AWS/Azure", "Linux Servers"]
    },
    {
        icon: <Cpu size={30} />,
        title: "AI & Data Science",
        description: "Modelado predictivo y ML.",
        techs: ["Machine Learning", "CatBoost", "Pandas/NumPy", "SUMO Simulation"]
    },
    {
        icon: <Layers size={30} />,
        title: "Software Architecture",
        description: "Diseño y documentación.",
        techs: ["UML", "Microservicios", "Clean Architecture", "Enterprise Architect"]
    }
];

/* ENHANCED: Projects with Case Study structure */
export const dataPortfolio = [
    {
        id: 1,
        title: "Jabones Rocío",
        image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=2000", // 3D cartoon character with soap/bubbles feel
        urlGithub: "https://github.com/josearpa123/Jabones-Rocio",
        urlDemo: "https://jabonesrocio.com.co",
        tags: ["React", "Laravel", "PROD"],
        problem: "Necesidad de digitalizar ventas y automatizar pedidos para una empresa real.",
        solution: "Sistema en producción utilizado actualmente para la gestión comercial y pedidos vía WhatsApp.",
        technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "Vite"]
    },
    {
        id: 2,
        title: "InTAS ML Pipeline",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2000", // 3D Robot/AI character
        urlGithub: "https://github.com/josearpa123/INTAS_GRADIENT_BOOSTING",
        urlDemo: "#!",
        tags: ["Python", "ML", "Research"],
        problem: "Predicción de desviaciones en rutas de movilidad urbana compleja.",
        solution: "Pipeline de Gradient Boosting con simulaciones SUMO y calibración probabilística.",
        technologies: ["Python", "CatBoost", "SUMO", "Docker", "Pandas"]
    },
    {
        id: 3,
        title: "ETL & DB Replication",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000", // 3D Tech/Server abstract illustration
        urlGithub: "https://github.com/josearpa123/PROYECTO-DOCKERIZADO-CON-ETL-ORACLE-Y-POSTGRESQL",
        urlDemo: "#!",
        tags: ["PostgreSQL", "Oracle", "Docker"],
        problem: "Integración de datos heterogéneos y alta disponibilidad.",
        solution: "Sistema de replicación primaria-réplica y procesos ETL dockerizados entre diferentes motores.",
        technologies: ["PostgreSQL", "Oracle", "Python", "Docker", "Flask"]
    },
    {
        id: 4,
        title: "PayHub (Próximamente 🔒)",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000", // 3D Wallet/Payment character
        urlGithub: "#!",
        urlDemo: "#!",
        tags: ["Fintech", "Geo", "Scale"],
        problem: "Gestión ineficiente de rutas de cobro y falta de monitoreo real.",
        solution: "Sistema multi-tenant con tracking geoespacial y reprogramación inteligente de cobros.",
        technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API"]
    },
    {
        id: 5,
        title: "S.O.S. Natural",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000", // 3D Plant/Earth mascot
        urlGithub: "https://github.com/josearpa123/Sos_natural",
        urlDemo: "#!",
        tags: ["Next.js", "E-commerce", "Dev"],
        problem: "Fragmentación de la operación comercial y falta de automatización.",
        solution: "Plataforma e-commerce integral para centralizar y escalar la operación comercial.",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js"]
    },
    {
        id: 6,
        title: "Sistema Producción Café",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2000", // 3D Coffee/Cup character style
        urlGithub: "https://github.com/josearpa123/SISTEMA-PRODUCCION-CAFE",
        urlDemo: "#!",
        tags: ["UML", "Architecture", "Design"],
        problem: "Complejidad en el diseño de procesos industriales cafeteros.",
        solution: "Modelado exhaustivo de arquitectura de software bajo estándares UML empresariales.",
        technologies: ["Enterprise Architect", "UML", "Software Design", "Documentation"]
    }
];
