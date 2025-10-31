import { Article } from "@/types";

/**
 * Lista de artigos do blog
 *
 * Para adicionar um novo artigo, copie o template abaixo e preencha:
 *
 * {
 *   title: "Título do seu artigo",
 *   excerpt: "Breve descrição (1-2 linhas)",
 *   date: "YYYY-MM-DD", // Ex: "2024-10-31"
 *   readTime: "X min",
 *   tags: ["Tag1", "Tag2"], // Até 3 tags
 *   url: "https://seulink.com/artigo", // Opcional
 *   published: true
 * }
 */
export const articles: Article[] = [
  {
    title: "Como criar interfaces acessíveis com React",
    excerpt: "Aprenda as melhores práticas para tornar suas aplicações React acessíveis para todos os usuários.",
    date: "2024-10-28",
    readTime: "5 min",
    tags: ["React", "Acessibilidade", "A11y"],
    published: true
  },
  {
    title: "Tailwind CSS: Otimizando performance",
    excerpt: "Dicas práticas para melhorar a performance das suas aplicações usando Tailwind CSS.",
    date: "2024-10-25",
    readTime: "7 min",
    tags: ["Tailwind", "Performance", "CSS"],
    published: true
  },
  {
    title: "TypeScript avançado para desenvolvedores React",
    excerpt: "Técnicas avançadas de TypeScript que vão elevar a qualidade do seu código React.",
    date: "2024-10-20",
    readTime: "10 min",
    tags: ["TypeScript", "React", "Best Practices"],
    published: true
  },
  {
    title: "Design Systems: Do conceito à implementação",
    excerpt: "Como criar e manter um design system escalável para sua equipe de desenvolvimento.",
    date: "2024-10-15",
    readTime: "8 min",
    tags: ["Design Systems", "UI/UX", "Front-end"],
    published: true
  }
];
