import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guilherme Fonseca | Full Stack Developer',
  description:
    'Desenvolvedor Full Stack com 5 anos de experiencia em React, Next.js, Node.js e Django, criando produtos digitais escalaveis com foco em performance, SEO e resultado de negocio.',
  metadataBase: new URL('https://www.guilhermefonseca.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Guilherme Fonseca | Full Stack Developer',
    description:
      'Desenvolvedor Full Stack com 5 anos de experiencia em React, Next.js, Node.js e Django, com foco em performance, SEO e produtos orientados a resultado.',
    url: 'https://www.guilhermefonseca.dev',
    siteName: 'Guilherme Fonseca Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Guilherme Fonseca - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Fonseca | Full Stack Developer',
    description:
      'Portfolio profissional com projetos, experiencia e especialidade em produtos web performaticos e escalaveis.',
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
