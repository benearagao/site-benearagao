import { Play } from "lucide-react";
import { useState, useMemo } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { videos } from "@/data";
import { sortByDate, limitItems, openYouTubeVideo } from "@/lib/dataHelpers";

const INITIAL_DISPLAY_COUNT = 6;

export function VideosSection() {
  const [showAll, setShowAll] = useState(false);

  // Ordenar por data (mais recente primeiro)
  const sortedVideos = useMemo(() => sortByDate(videos), []);

  // Aplicar limite se não estiver mostrando todos
  const displayedVideos = useMemo(
    () => (showAll ? sortedVideos : limitItems(sortedVideos, INITIAL_DISPLAY_COUNT)),
    [sortedVideos, showAll]
  );

  const hasMore = sortedVideos.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Vídeos & Dicas Rápidas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tutoriais práticos e dicas rápidas sobre desenvolvimento front-end, 
              acessibilidade e boas práticas de código.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedVideos.map((video, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => openYouTubeVideo(video.videoUrl)}
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="pt-4">
                  <Badge variant="secondary" className="mb-2">
                    {video.category}
                  </Badge>
                  <h3 className="text-gray-900">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botão Ver Mais / Ver Menos */}
          {hasMore && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="min-w-40"
              >
                {showAll ? "Ver menos vídeos" : `Ver todos (${sortedVideos.length})`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
