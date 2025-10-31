import { Article, Video } from "@/types";

/**
 * Formata data de "YYYY-MM-DD" para "DD Mês AAAA"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

/**
 * Ordena artigos por data (mais recente primeiro)
 */
export function sortByDate<T extends { date: string; published: boolean }>(items: T[]): T[] {
  return items
    .filter(item => item.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Retorna apenas os primeiros N itens
 */
export function limitItems<T>(items: T[], limit: number): T[] {
  return items.slice(0, limit);
}

/**
 * Filtra artigos por tags
 */
export function filterByTags(articles: Article[], tags: string[]): Article[] {
  if (tags.length === 0) return articles;

  return articles.filter(article =>
    tags.some(tag => article.tags.includes(tag))
  );
}

/**
 * Retorna todas as tags únicas dos artigos
 */
export function getAllTags(articles: Article[]): string[] {
  const tagsSet = new Set<string>();
  articles.forEach(article => {
    article.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

/**
 * Abre vídeo do YouTube em nova aba
 */
export function openYouTubeVideo(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}
