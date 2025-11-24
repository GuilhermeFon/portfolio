import { Project, Translations } from './types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/guilhermedev', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/guilhermedev', icon: Linkedin },
  { name: 'Email', url: 'mailto:contact@guilhermefonseca.dev', icon: Mail },
];

export const WHATSAPP_NUMBER = "5511999999999"; // Example number

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard Pro',
    description: 'A comprehensive analytics dashboard for online retailers with real-time data visualization, inventory management, and sales forecasting using AI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'],
    image: 'https://picsum.photos/800/600?random=1',
    link: '#',
    featured: true
  },
  {
    id: '2',
    title: 'FinTech Wallet App',
    description: 'Secure mobile-first web application for managing digital assets, peer-to-peer transfers, and crypto portfolio tracking with high-security standards.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Framer Motion'],
    image: 'https://picsum.photos/800/600?random=2',
    link: '#',
    featured: true
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'SaaS platform leveraging LLMs to help marketers generate blog posts, social media captions, and ad copy in seconds.',
    tags: ['OpenAI API', 'Next.js', 'Stripe', 'Supabase'],
    image: 'https://picsum.photos/800/600?random=3',
    link: '#',
    featured: false
  },
  {
    id: '4',
    title: 'HealthTrack Telemed',
    description: 'Telemedicine platform connecting patients with specialists via secure video calls and managing electronic health records.',
    tags: ['WebRTC', 'React', 'Socket.io', 'Express'],
    image: 'https://picsum.photos/800/600?random=4',
    link: '#',
    featured: false
  }
];

export const CONTENT: Translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      role: 'Full Stack Developer',
      description: 'I build accessible, pixel-perfect, and performant web experiences that merge creativity with robust engineering.',
      cta_primary: 'View My Work',
      cta_secondary: 'Contact Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Building the future, one line of code at a time.',
      p1: 'I am Guilherme de Lima Fonseca, a passionate Full Stack Developer with deep expertise in the modern JavaScript ecosystem. My journey involves solving complex problems and delivering high-impact digital solutions.',
      p2: 'With a focus on performance, SEO, and user experience, I transform ideas into scalable software. Whether it’s a disruptive startup MVP or an enterprise dashboard, I ensure excellence in every commit.',
      skills_title: 'Tech Stack',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my recent work and case studies.',
      view_project: 'View Project',
    },
    footer: {
      rights: '© 2024 Guilherme de Lima Fonseca. All rights reserved.',
      contact_header: "Let's work together",
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: "Olá, eu sou",
      role: 'Desenvolvedor Full Stack',
      description: 'Crio experiências web acessíveis, pixel-perfect e de alta performance que unem criatividade e engenharia robusta.',
      cta_primary: 'Ver Projetos',
      cta_secondary: 'Contato',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Construindo o futuro, uma linha de código por vez.',
      p1: 'Eu sou Guilherme de Lima Fonseca, um Desenvolvedor Full Stack apaixonado com profunda experiência no ecossistema JavaScript moderno. Minha jornada envolve resolver problemas complexos e entregar soluções digitais de alto impacto.',
      p2: 'Com foco em performance, SEO e experiência do usuário, transformo ideias em software escalável. Seja um MVP disruptivo para startups ou um dashboard corporativo, garanto excelência em cada commit.',
      skills_title: 'Stack Tecnológica',
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Uma seleção dos meus trabalhos recentes e estudos de caso.',
      view_project: 'Ver Projeto',
    },
    footer: {
      rights: '© 2024 Guilherme de Lima Fonseca. Todos os direitos reservados.',
      contact_header: "Vamos trabalhar juntos",
    }
  }
};

export const SKILLS = [
  "React 19", "Next.js 15", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL", "GraphQL", "AWS", "Docker", "Framer Motion"
];