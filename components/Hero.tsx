'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].hero;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 dark:bg-orange-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 dark:bg-red-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#fafafa_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] transition-colors duration-300" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6 shadow-sm">
                {t.greeting} Guilherme de Lima Fonseca
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]"
            >
              <span className="block">Full Stack</span>
              <span className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 dark:from-orange-400 dark:via-red-500 dark:to-orange-400 text-transparent bg-clip-text bg-300% animate-gradient">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl lg:max-w-xl mb-10 leading-relaxed"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/20 dark:shadow-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t.cta_primary} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium rounded-full transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-500 hover:scale-105 active:scale-95"
              >
                 {t.cta_secondary}
              </button>
            </motion.div>
          </div>

          {/* Large Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 z-10 relative"
          >
             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-600 rounded-[2rem] lg:rounded-[3rem] rotate-6 opacity-40 blur-2xl animate-pulse" />
                
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-600 rounded-[2rem] lg:rounded-[3rem] p-1.5 md:p-2 shadow-2xl shadow-orange-500/30">
                  <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 rounded-[1.7rem] lg:rounded-[2.7rem] overflow-hidden relative border-4 border-white dark:border-zinc-900">
                    <img 
                      src="https://picsum.photos/800/800?random=10" 
                      alt="Guilherme de Lima Fonseca"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Optional Floating Badge */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 hidden md:block"
                >
                   <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">TS</div>
                        <div className="w-8 h-8 rounded-full bg-black border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">Nx</div>
                        <div className="w-8 h-8 rounded-full bg-cyan-400 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">R</div>
                      </div>
                      <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                        Top Rated<br/>Developer
                      </div>
                   </div>
                </motion.div>
             </div>
          </motion.div>
          
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 dark:text-zinc-600 hidden lg:block"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;