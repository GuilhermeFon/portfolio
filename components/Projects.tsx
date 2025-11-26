"use client";

import React from "react";
import {motion} from "framer-motion";
import {useLanguage} from "../contexts/LanguageContext";
import {PROJECTS, CONTENT} from "../constants";
import {ExternalLink, Github} from "lucide-react";
import Image from "next/image";

const Projects: React.FC = () => {
  const {language} = useLanguage();
  const t = CONTENT[language].projects;

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-zinc-900/30 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 md:text-center max-w-3xl mx-auto"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className="group relative bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl dark:hover:shadow-none transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:text-orange-500 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={16} /> Code
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
