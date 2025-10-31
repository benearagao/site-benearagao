export interface Article {
  title: string;
  excerpt: string;
  date: string; // Formato: "YYYY-MM-DD" para ordenação
  readTime: string;
  tags: string[];
  url?: string; // Link para artigo completo (opcional)
  published: boolean; // Controle de publicação
}
