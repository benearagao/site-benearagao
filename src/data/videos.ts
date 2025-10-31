import { Video } from "@/types";

/**
 * Lista de vídeos do canal
 *
 * Para adicionar um novo vídeo do YouTube:
 *
 * 1. Pegue a URL do seu vídeo: https://www.youtube.com/watch?v=VIDEO_ID
 * 2. Thumbnail automática: https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
 * 3. Preencha o template:
 *
 * {
 *   title: "Título do vídeo",
 *   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
 *   duration: "X:XX",
 *   category: "Categoria",
 *   videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
 *   date: "YYYY-MM-DD",
 *   published: true
 * }
 */
export const videos: Video[] = [
  {
    title: "Hooks React: useEffect explicado em 5 minutos",
    thumbnail: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODI5NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "5:23",
    category: "React",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pelo ID real do seu vídeo
    date: "2024-10-28",
    published: true
  },
  {
    title: "Acessibilidade: Navegação por teclado",
    thumbnail: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODI5NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "4:15",
    category: "A11y",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024-10-25",
    published: true
  },
  {
    title: "CSS Grid vs Flexbox: Quando usar cada um?",
    thumbnail: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODI5NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "6:45",
    category: "CSS",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024-10-20",
    published: true
  },
  {
    title: "ARIA Labels: Dica rápida de acessibilidade",
    thumbnail: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODI5NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:30",
    category: "A11y",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024-10-18",
    published: true
  },
  {
    title: "Performance Web: Lazy Loading de imagens",
    thumbnail: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODI5NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "5:50",
    category: "Performance",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024-10-15",
    published: true
  },
  {
    title: "TypeScript: Tipos genéricos simplificados",
    thumbnail: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODI5NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "7:20",
    category: "TypeScript",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024-10-10",
    published: true
  }
];
