"use client";

import React from "react";
import {SOCIAL_LINKS, CONTENT} from "../constants";
import {useLanguage} from "../contexts/LanguageContext";
import {ArrowUpRight} from "lucide-react";

const Footer: React.FC = () => {
  const {language} = useLanguage();
  const t = CONTENT[language].footer;

  return (
    <footer
      id="contact"
      className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-24 pb-12 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-6">
              {t.contact_header}
            </h2>
            <a
              href="mailto:guilhermelimafonseca@gmail.com"
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors flex items-center gap-2 group"
            >
              guilhermelimafonseca@gmail.com
              <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-center space-y-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors group"
              >
                <span className="text-lg font-medium">{link.name}</span>
                <link.icon className="w-5 h-5 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-zinc-900 text-sm text-zinc-500 dark:text-zinc-600">
          <p>{t.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Pelotas - RS, Brazil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
