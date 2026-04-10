'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT, SKILLS } from '../constants';
import { Code, Server, Database, Layout } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].about;
  const featureTitles =
    language === "pt"
      ? {
          frontend: "Arquitetura Frontend",
          backend: "Sistemas Backend",
          database: "Modelagem de Dados",
          code: "Codigo Limpo",
        }
      : {
          frontend: "Frontend Architecture",
          backend: "Backend Systems",
          database: "Database Design",
          code: "Clean Code",
        };

  const differentiators =
    language === "pt"
      ? [
          "Experiencia com plataformas SaaS, educacionais, imobiliarias e industriais.",
          "Atuacao com stakeholders em discovery, priorizacao e entrega continua.",
          "Forte dominio em SEO tecnico, Core Web Vitals e arquitetura escalavel.",
        ]
      : [
          "Experience across SaaS, education, real estate, and industrial products.",
          "Hands-on collaboration with stakeholders from discovery to continuous delivery.",
          "Strong focus on technical SEO, Core Web Vitals, and scalable architecture.",
        ];

  const FeatureItem = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/50 hover:shadow-md dark:hover:shadow-none transition-all">
      <div className="p-2 bg-orange-500/10 rounded-lg text-orange-600 dark:text-orange-500">
        <Icon size={20} />
      </div>
      <span className="font-medium text-zinc-800 dark:text-zinc-200">{title}</span>
    </div>
  );

  return (
    <section id="about" className="py-24 bg-zinc-100 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-orange-600 dark:text-orange-500 tracking-wider uppercase mb-2">
              {t.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-6">
              {t.subtitle}
            </h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            <ul className="mt-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-orange-600 dark:text-orange-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem icon={Layout} title={featureTitles.frontend} />
              <FeatureItem icon={Server} title={featureTitles.backend} />
              <FeatureItem icon={Database} title={featureTitles.database} />
              <FeatureItem icon={Code} title={featureTitles.code} />
            </div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5 rounded-2xl -z-10 blur-2xl" />
            <div className="bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-xl dark:shadow-none">
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full" />
                {t.skills_title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md border border-zinc-200 dark:border-zinc-700 hover:text-orange-600 dark:hover:text-white hover:border-orange-200 dark:hover:border-zinc-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;