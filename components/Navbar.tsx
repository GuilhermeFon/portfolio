"use client";

import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X, Globe, Moon, Sun} from "lucide-react";
import {useLanguage} from "../contexts/LanguageContext";
import {useTheme} from "../contexts/ThemeContext";
import {CONTENT} from "../constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {language, toggleLanguage} = useLanguage();
  const {theme, toggleTheme} = useTheme();
  const t = CONTENT[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer group"
        >
          <h1 className="text-xl font-bold font-display tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
            Guilherme<span className="text-zinc-500 font-light">.dev</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-500 transition-colors"
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-500 transition-colors"
          >
            {t.projects}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-zinc-600 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-500 transition-colors"
          >
            {t.contact}
          </button>

          <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-700 mx-2" />

          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-600 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors border border-zinc-300 dark:border-zinc-700 rounded-full px-3 py-1 hover:border-orange-500 dark:hover:border-orange-500"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-zinc-900 dark:text-zinc-100 p-2"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            className="text-zinc-900 dark:text-zinc-100 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 text-left"
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 text-left"
              >
                {t.projects}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-500 text-left"
              >
                {t.contact}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-left"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase">
                  Switch to {language === "en" ? "PT" : "EN"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
