# Portfolio - Guilherme Fonseca

Portfolio profissional desenvolvido com **Next.js 15** e otimizado para geração estática de alta performance.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com SSG (Static Site Generation)
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

Para gerar a versão estática otimizada:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `/out` e podem ser hospedados em qualquer servidor web ou CDN (Vercel, Netlify, GitHub Pages, etc.).

## 📁 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── layout.tsx       # Layout raiz com providers
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais
├── components/          # Componentes React
├── contexts/            # Context API (Theme, Language)
├── constants.ts         # Constantes e conteúdo
├── types.ts            # Tipos TypeScript
├── next.config.ts      # Configuração Next.js
├── tailwind.config.ts  # Configuração Tailwind
└── tsconfig.json       # Configuração TypeScript
```

## ⚡ Performance

- ✅ Static Site Generation (SSG)
- ✅ Otimização automática de imagens
- ✅ Code splitting automático
- ✅ Font optimization com next/font
- ✅ CSS otimizado com Tailwind

## 🌐 Deploy

O projeto está configurado para deploy estático. Recomendado:

- **Vercel** (ideal para Next.js)
- **Netlify**
- **GitHub Pages**
- Qualquer CDN ou servidor web estático

## 📝 Licença

© 2025 Guilherme Fonseca. Todos os direitos reservados.
