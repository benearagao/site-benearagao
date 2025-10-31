export interface Video {
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  videoUrl: string; // URL completa do YouTube
  date: string; // Formato: "YYYY-MM-DD"
  published: boolean;
}
