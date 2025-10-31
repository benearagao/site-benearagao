import { Calendar, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { articles } from "@/data";
import { sortByDate, limitItems, filterByTags, getAllTags, formatDate } from "@/lib/dataHelpers";

const INITIAL_DISPLAY_COUNT = 4;

export function ArticlesSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Ordenar por data (mais recente primeiro)
  const sortedArticles = useMemo(() => sortByDate(articles), []);

  // Filtrar por tags selecionadas
  const filteredArticles = useMemo(
    () => filterByTags(sortedArticles, selectedTags),
    [sortedArticles, selectedTags]
  );

  // Aplicar limite se não estiver mostrando todos
  const displayedArticles = useMemo(
    () => (showAll ? filteredArticles : limitItems(filteredArticles, INITIAL_DISPLAY_COUNT)),
    [filteredArticles, showAll]
  );

  // Obter todas as tags disponíveis
  const availableTags = useMemo(() => getAllTags(articles), []);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setShowAll(false); // Reset ao filtrar
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setShowAll(false);
  };

  const hasMore = filteredArticles.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="artigos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Artigos & Ideias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compartilho reflexões, tutoriais e insights sobre desenvolvimento front-end,
              acessibilidade e as últimas tendências do mundo web.
            </p>
          </div>

          {/* Filtro de Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <span className="text-gray-600 text-sm">Filtrar por:</span>
              {availableTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer transition-colors"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  Limpar filtros
                </Button>
              )}
            </div>
          </div>

          {/* Grid de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedArticles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => article.url && window.open(article.url, "_blank")}
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-gray-900">{article.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{article.readTime}</span>
                    </div>
                  </div>
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
                {showAll ? "Ver menos artigos" : `Ver todos (${filteredArticles.length})`}
              </Button>
            </div>
          )}

          {/* Mensagem quando não há resultados */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Nenhum artigo encontrado com os filtros selecionados.
              </p>
              <Button variant="link" onClick={clearFilters} className="mt-2">
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
