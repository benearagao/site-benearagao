import { Camera, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

export function PhotographySection() {
  const featuredImage = {
    url: "https://images.unsplash.com/photo-1544954617-f5c6b0d16164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjE4NjA2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Montanhas ao Amanhecer",
    description: "Capturada nas montanhas da Serra da Estrela durante uma viagem de inverno. A névoa criou um efeito mágico sobre o vale.",
    location: "Serra da Estrela, Portugal",
    date: "27 Out 2024",
    camera: "Canon EOS R5",
    settings: "f/8 • 1/250s • ISO 100"
  };

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1519414442781-fbd745c5b497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldHxlbnwxfHx8fDE3NjE4MjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pôr do Sol nas Montanhas"
    },
    {
      url: "https://images.unsplash.com/photo-1708352012139-cc209d6f479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MTg0NzczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Urbano Noturno"
    },
    {
      url: "https://images.unsplash.com/photo-1609560140261-4efaa689b6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE4NzcyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Retrato na Natureza"
    }
  ];

  return (
    <section id="fotografia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Camera className="w-8 h-8 text-gray-700" />
              <h2 className="text-gray-900">Fotografia</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Minha paixão pela fotografia me permite capturar momentos únicos e 
              compartilhar minha visão do mundo através das lentes.
            </p>
          </div>

          {/* Featured Image of the Week */}
          <Card className="mb-12 overflow-hidden">
            <div className="flex items-center gap-2 px-6 pt-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Badge variant="default">Imagem da Semana</Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <ImageWithFallback
                  src={featuredImage.url}
                  alt={featuredImage.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-gray-900 mb-3">{featuredImage.title}</h3>
                <p className="text-gray-600 mb-6">{featuredImage.description}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="min-w-24">📍 Local:</span>
                    <span>{featuredImage.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="min-w-24">📅 Data:</span>
                    <span>{featuredImage.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="min-w-24">📷 Câmera:</span>
                    <span>{featuredImage.camera}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="min-w-24">⚙️ Settings:</span>
                    <span>{featuredImage.settings}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Gallery */}
          <div>
            <h3 className="text-gray-900 mb-6 text-center">Galeria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p>{image.title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
