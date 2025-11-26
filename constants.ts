import {Project, Translations} from "./types";
import {Github, Linkedin, Mail, Twitter} from "lucide-react";

import BurguerCaseImage from "./assets/images/burguer-case.png";
import FinanceDashCaseImage from "./assets/images/finance-dash-case.png";
import GrowSolarCaseImage from "./assets/images/growsolar-case.png";
import GrowSolarInstitucionalCaseImage from "./assets/images/growsolar-institucional-case.png";
import GrowSolarPlataformaCaseImage from "./assets/images/growsolar-plataforma-case.png";
import LkSneakersCaseImage from "./assets/images/lk-sneakers-case.png";
import MaoNaRodaCaseImage from "./assets/images/mao-na-roda-case.png";
import CamponesaCaseImage from "./assets/images/camponesa-case.png";
import SiloCaseImage from "./assets/images/silo-case.png";
import PredictCaseImage from "./assets/images/predict-case.png";
import MappoCaseImage from "./assets/images/mappo-case.png";

export const SOCIAL_LINKS = [
  {name: "GitHub", url: "https://github.com/guilhermefon", icon: Github},
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/guilhermefon",
    icon: Linkedin,
  },
  {name: "Email", url: "mailto:contact@guilhermefonseca.dev", icon: Mail},
];

export const WHATSAPP_NUMBER = "5553981368181";

export const PROJECTS: Project[] = [
  {
    id: "7",
    title: "Mappo",
    description:
      "Plataforma de monitoramento veicular com rastreamento em tempo real, relatórios detalhados e alertas personalizados.",
    tags: [
      "Vite.js",
      "TypeScript",
      "Chakra UI",
      "Mapbox",
      "Responsive Design",
      "Redux Toolkit",
    ],
    image: MappoCaseImage,
    link: "https://mappo.com.br/",
    featured: true,
  },
  {
    id: "12",
    title: "DynaPredict",
    description:
      "Ecossistema para realizar o monitoramento preditivo de máquinas combinado com ferramentas de inteligência de dados.",
    tags: [
      "React",
      "TypeScript",
      "Material UI",
      "Styled Components",
      "Responsive Design",
      "Highcharts",
      "Redux Toolkit",
      "Threejs",
      "ReactThreeFiber",
    ],
    image: PredictCaseImage,
    link: "https://dyp.dynamox.solutions/",
    featured: true,
  },
  {
    id: "10",
    title: "GrowSolar Institucional",
    description:
      "Site institucional de alta conversão, com blog e páginas de cursos focados para o ecossistema de energia solar.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Responsive Design",
      "Strapi CMS",
    ],
    image: GrowSolarInstitucionalCaseImage,
    link: "https://growsolar.com.br/",
    featured: true,
  },
  {
    id: "11",
    title: "GrowSolar Plataforma",
    description:
      "Plataforma de cursos, mentorias e projetos 3D focados para o ecossistema de energia solar",
    tags: [
      "Vite.js",
      "TypeScript",
      "Chakra UI",
      "Responsive Design",
      "Redux Toolkit",
      "AdonisJS",
      "MySQL",
      "REST APIs",
    ],
    image: GrowSolarPlataformaCaseImage,
    link: "https://cursos.growsolar.com.br/",
    featured: true,
  },
  {
    id: "5",
    title: "Grow Solar Lead Gen",
    description:
      "Landing page de alta conversão para geração de leads em energia solar.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: GrowSolarCaseImage,
    link: "https://planoestrategico.growsolar.com.br/",
    featured: false,
  },
  {
    id: "2",
    title: "Finance Dash",
    description:
      "Sistema de controle financeiro e de investimentos para gerenciar suas finanças com eficiência.",
    tags: [
      "Vite.js",
      "ShadcnUI",
      "TypeScript",
      "TailwindCSS",
      "Responsive Design",
      "Zustand",
      "Node.js",
      "Express",
      "PostgresSQL",
      "REST APIs",
    ],
    image: FinanceDashCaseImage,
    link: "https://front-finance-dash.netlify.app/",
    featured: true,
  },
  {
    id: "1",
    title: "LK Sneakers",
    description:
      "Landing page de alta conversão para uma loja de tênis com design moderno e atrativo.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: LkSneakersCaseImage,
    link: "https://page.lksneakers.com/",
    featured: true,
  },
  {
    id: "9",
    title: "Studio Silo",
    description:
      "Meu portfólio Empresarial, onde apresento meus projetos, habilidades e experiências como desenvolvedor full stack, além de terceirização de serviços.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: SiloCaseImage,
    link: "https://studio-silo.com/",
    featured: true,
  },
  {
    id: "3",
    title: "Mão na Roda",
    description:
      "Site de serviços que conecta clientes a profissionais qualificados.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
    ],
    image: MaoNaRodaCaseImage,
    link: "https://front-mao-na-roda.vercel.app/",
    featured: true,
  },
  {
    id: "6",
    title: "A Camponesa",
    description:
      "Landing page para uma confeitaria artesanal com foco em qualidade e tradição.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: CamponesaCaseImage,
    link: "https://a-camponesa.vercel.app/",
    featured: false,
  },
  {
    id: "4",
    title: "Burguer Pro",
    description: "Landing page para um curso de hambúrguer artesanal.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: BurguerCaseImage,
    link: "https://burguer-landing.vercel.app/",
    featured: false,
  },
];

export const CONTENT: Translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Full Stack Developer",
      description:
        "I build accessible, pixel-perfect, and performant web experiences that merge creativity with robust engineering.",
      cta_primary: "View My Work",
      cta_secondary: "Contact Me",
    },
    about: {
      title: "About Me",
      subtitle: "Building the future, one line of code at a time.",
      p1: "I am Guilherme de Lima Fonseca, a passionate Full Stack Developer with deep expertise in the modern JavaScript ecosystem. My journey involves solving complex problems and delivering high-impact digital solutions.",
      p2: "With a focus on performance, SEO, and user experience, I transform ideas into scalable software. Whether it’s a disruptive startup MVP or an enterprise dashboard, I ensure excellence in every commit.",
      skills_title: "Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my recent work and case studies.",
      view_project: "View Project",
    },
    footer: {
      rights: "© 2025 Guilherme de Lima Fonseca. All rights reserved.",
      contact_header: "Let's work together",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack",
      description:
        "Crio experiências web acessíveis, pixel-perfect e de alta performance que unem criatividade e engenharia robusta.",
      cta_primary: "Ver Projetos",
      cta_secondary: "Contato",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Construindo o futuro, uma linha de código por vez.",
      p1: "Eu sou Guilherme de Lima Fonseca, um Desenvolvedor Full Stack apaixonado com profunda experiência no ecossistema JavaScript moderno. Minha jornada envolve resolver problemas complexos e entregar soluções digitais de alto impacto.",
      p2: "Com foco em performance, SEO e experiência do usuário, transformo ideias em software escalável. Seja um MVP disruptivo para startups ou um dashboard corporativo, garanto excelência em cada commit.",
      skills_title: "Stack Tecnológica",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Uma seleção dos meus trabalhos recentes e estudos de caso.",
      view_project: "Ver Projeto",
    },
    footer: {
      rights: "© 2025 Guilherme de Lima Fonseca. Todos os direitos reservados.",
      contact_header: "Vamos trabalhar juntos",
    },
  },
};

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AdonisJS",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Git",
  "Docker",
  "REST APIs",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Docker",
  "GraphQL",
  "AWS",
  "CI/CD",
  "Jest",
  "Cypress",
  "Selenium",
];
