import { Music } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function SpotifySection() {
  // Substitua 'YOUR_PLAYLIST_ID' pelo ID da sua playlist do Spotify
  // Para obter o ID, vá até sua playlist no Spotify, clique em "..." e "Compartilhar" > "Copiar link da playlist"
  // O ID está na URL: https://open.spotify.com/playlist/ID_DA_PLAYLIST
  const spotifyPlaylistId = "37i9dQZF1DXcBWIGoYBM5M"; // Exemplo de playlist

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Music className="w-8 h-8 text-gray-700" />
              <h2 className="text-gray-900">Minha Playlist</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Músicas que me inspiram enquanto codifico e capturo momentos. 
              Confira minha seleção no Spotify!
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[16/9] md:aspect-[16/7]">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist"
                />
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-gray-500 mt-6">
            🎵 Atualizada regularmente com novas descobertas musicais
          </p>
        </div>
      </div>
    </section>
  );
}
