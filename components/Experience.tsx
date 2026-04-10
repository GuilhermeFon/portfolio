"use client";

import React from "react";
import {motion} from "framer-motion";
import {useLanguage} from "../contexts/LanguageContext";
import {BriefcaseBusiness, CalendarRange, MapPin} from "lucide-react";

const EXPERIENCE = {
  pt: {
    title: "Experiencia Profissional",
    subtitle:
      "Atuacao full stack com foco em arquitetura, performance e entrega de produtos digitais de alto impacto.",
    positions: [
      {
        company: "ANC - Associacao Nacional de Criadores",
        role: "Desenvolvedor Full Stack",
        location: "Remoto",
        period: "Dez 2025 - Presente",
        highlights: [
          "Reconstrucao do site institucional de WordPress para Next.js (SSR/SSG), elevando velocidade, SEO e Core Web Vitals.",
          "Desenvolvimento de funcionalidades internas em Python/Django com DRF, autenticacao e painel administrativo customizado.",
          "Integracao Next.js + Django com estrategia de cache e consumo de APIs para melhor experiencia e eficiencia operacional.",
        ],
      },
      {
        company: "HOX",
        role: "Desenvolvedor Full Stack",
        location: "Remoto",
        period: "Mar 2021 - Dez 2025",
        highlights: [
          "Mappo: plataforma imobiliaria com visualizacao interativa de lotes e imoveis, busca avancada e backend seguro em AdonisJS.",
          "Dynamox: dashboards para monitoramento preditivo industrial com React, D3.js e visualizacoes 3D com Three.js/R3F.",
          "GrowSolar: lideranca tecnica ponta a ponta na plataforma de cursos/mentorias e no site com CMS headless e SEO avancado.",
        ],
      },
    ],
  },
  en: {
    title: "Professional Experience",
    subtitle:
      "Full stack delivery focused on architecture, performance, and high-impact digital products.",
    positions: [
      {
        company: "ANC - National Breeders Association",
        role: "Full Stack Developer",
        location: "Remote",
        period: "Dec 2025 - Present",
        highlights: [
          "Rebuilt the institutional website from WordPress to Next.js (SSR/SSG), improving speed, SEO, and Core Web Vitals.",
          "Delivered internal features with Python/Django, DRF APIs, authentication, and a customized admin panel.",
          "Integrated Next.js + Django APIs with caching strategies to improve user experience and operational efficiency.",
        ],
      },
      {
        company: "HOX",
        role: "Full Stack Developer",
        location: "Remote",
        period: "Mar 2021 - Dec 2025",
        highlights: [
          "Mappo: real estate platform with interactive property mapping, advanced filtering, and secure AdonisJS APIs.",
          "Dynamox: BI dashboards for predictive maintenance using React, D3.js, and 3D visualizations with Three.js/R3F.",
          "GrowSolar: led architecture and end-to-end delivery of the education platform and SEO-optimized institutional website.",
        ],
      },
    ],
  },
};

const Experience: React.FC = () => {
  const {language} = useLanguage();
  const t = EXPERIENCE[language];

  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 md:text-center max-w-3xl mx-auto"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">{t.subtitle}</p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {t.positions.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.08}}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                <div>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-2">
                    <BriefcaseBusiness className="w-4 h-4" />
                    {item.role}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                    {item.company}
                  </h3>
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <p className="flex items-center gap-2">
                    <CalendarRange className="w-4 h-4" />
                    {item.period}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
