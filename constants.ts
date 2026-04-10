import {Project, Translations} from "./types";
import {Github, Linkedin, Mail} from "lucide-react";

import BurgerCaseImage from "./assets/images/burger-case.png";
import FinanceDashCaseImage from "./assets/images/finance-dash-case.png";
import GrowSolarCaseImage from "./assets/images/growsolar-lp-case.png";
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
  {name: "Email", url: "mailto:guilhermelimafonseca@gmail.com", icon: Mail},
];

export const WHATSAPP_NUMBER = "5553981368181";

export const PROJECTS: Project[] = [
  {
    id: "7",
    title: "Mappo",
    description: {
      en: "Full stack real estate platform with interactive lot/property mapping, advanced filters, and secure APIs to support high-volume geospatial data.",
      pt: "Plataforma imobiliaria full stack com mapeamento interativo de lotes e imoveis, filtros avancados e APIs seguras para suportar alto volume de dados geoespaciais.",
    },
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
    description: {
      en: "Industrial predictive maintenance ecosystem with BI dashboards, data intelligence, and 3D asset visualization for real-time decisions.",
      pt: "Ecossistema de manutencao preditiva industrial com dashboards de BI, inteligencia de dados e visualizacao 3D de ativos para decisao em tempo real.",
    },
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
    description: {
      en: "SEO-driven institutional website with integrated blog and course funnels, designed to increase authority, organic traffic, and conversion.",
      pt: "Site institucional orientado a SEO com blog integrado e funis de cursos, projetado para elevar autoridade, trafego organico e conversao.",
    },
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
    description: {
      en: "Education platform for courses, mentorships, and technical projects, delivered with end-to-end architecture and scalable APIs.",
      pt: "Plataforma educacional de cursos, mentorias e projetos tecnicos, entregue com arquitetura ponta a ponta e APIs escalaveis.",
    },
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
    description: {
      en: "High-conversion landing page for solar energy lead generation.",
      pt: "Landing page de alta conversao para geracao de leads em energia solar.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: GrowSolarCaseImage,
    link: "https://planoestrategico.growsolar.com.br/",
    featured: false,
  },
  {
    id: "2",
    title: "Finance Dash",
    description: {
      en: "Financial control dashboard with expense, income, credit card, and investment modules, built as a graduation capstone and evolved as a personal product.",
      pt: "Dashboard de controle financeiro com modulos de despesas, receitas, cartao de credito e investimentos, criado como TCC e evoluido como produto pessoal.",
    },
    tags: [
      "Vite.js",
      "ShadcnUI",
      "TypeScript",
      "TailwindCSS",
      "Responsive Design",
      "Zustand",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
    ],
    image: FinanceDashCaseImage,
    link: "https://finance-dash-web.vercel.app/",
    featured: true,
  },
  {
    id: "1",
    title: "LK Sneakers",
    description: {
      en: "High-conversion landing page for a sneaker brand with modern visuals and mobile-first UX.",
      pt: "Landing page de alta conversao para uma marca de tenis com visual moderno e UX mobile-first.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: LkSneakersCaseImage,
    link: "https://page.lksneakers.com/",
    featured: true,
  },
  {
    id: "9",
    title: "Studio Silo",
    description: {
      en: "Business portfolio presenting projects, services, and technical expertise to support client acquisition.",
      pt: "Portfolio empresarial para apresentar projetos, servicos e expertise tecnica com foco em aquisicao de clientes.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: SiloCaseImage,
    link: "https://studio-silo.com/",
    featured: true,
  },
  {
    id: "3",
    title: "Mao na Roda",
    description: {
      en: "Service platform connecting clients with qualified professionals through a streamlined web experience.",
      pt: "Plataforma de servicos que conecta clientes e profissionais qualificados em uma experiencia web simplificada.",
    },
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
    description: {
      en: "Landing page for an artisanal bakery emphasizing product quality and brand storytelling.",
      pt: "Landing page para confeitaria artesanal com foco em qualidade dos produtos e storytelling de marca.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: CamponesaCaseImage,
    link: "https://a-camponesa.vercel.app/",
    featured: false,
  },
  {
    id: "4",
    title: "Burger Pro",
    description: {
      en: "Landing page for an artisan burger course focused on lead generation and conversion.",
      pt: "Landing page para curso de hamburguer artesanal com foco em geracao de leads e conversao.",
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    image: BurgerCaseImage,
    link: "https://burguer-landing.vercel.app/",
    featured: false,
  },
];

export const CONTENT: Translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Full Stack Developer",
      description:
        "I help companies turn ideas into scalable digital products with real business impact, combining product vision, technical leadership, and high-performance engineering.",
      cta_primary: "View My Work",
      cta_secondary: "Contact Me",
    },
    about: {
      title: "About Me",
      subtitle: "Engineering products that perform, scale, and convert.",
      p1: "I am Guilherme Fonseca, a Full Stack Developer with 5 years of experience delivering web platforms end-to-end for startups, industry, and associations. My core stack includes React/Next.js, Node.js, and Django.",
      p2: "I work from discovery to production: architecture decisions, API design, code review, SEO/performance optimization, and stakeholder alignment. The goal is always the same: deliver software that drives measurable business value.",
      skills_title: "Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my recent work and case studies.",
      view_project: "View Project",
    },
    footer: {
      rights: "© 2025 Guilherme Fonseca. All rights reserved.",
      contact_header: "Let's work together",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiencia",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Ola, eu sou",
      role: "Desenvolvedor Full Stack",
      description:
        "Ajudo empresas a transformar ideias em produtos digitais escalaveis com impacto real no negocio, unindo visao de produto, lideranca tecnica e engenharia de alta performance.",
      cta_primary: "Ver Projetos",
      cta_secondary: "Contato",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Engenharia de produtos que performam, escalam e convertem.",
      p1: "Sou Guilherme Fonseca, Desenvolvedor Full Stack com 5 anos de experiencia criando plataformas web de ponta a ponta para startups, industria e associacoes. Minha stack principal envolve React/Next.js, Node.js e Django.",
      p2: "Atuo da descoberta ate a producao: decisoes de arquitetura, desenho de APIs, code review, otimizacao de SEO/performance e alinhamento com stakeholders. O foco e sempre entregar software com valor mensuravel para o negocio.",
      skills_title: "Stack Tecnologica",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Uma selecao dos meus trabalhos recentes e estudos de caso.",
      view_project: "Ver Projeto",
    },
    footer: {
      rights: "© 2025 Guilherme Fonseca. Todos os direitos reservados.",
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
  "GraphQL",
  "AWS",
  "CI/CD",
  "Jest",
  "Cypress",
  "Selenium",
];
