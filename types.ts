import { StaticImageData } from "next/image";

export type Language = 'en' | 'pt';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  link: string;
  featured: boolean;
}

export interface TranslationStructure {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    skills_title: string;
  };
  projects: {
    title: string;
    subtitle: string;
    view_project: string;
  };
  footer: {
    rights: string;
    contact_header: string;
  };
}

export type Translations = Record<Language, TranslationStructure>;