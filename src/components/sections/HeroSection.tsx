import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "../ui/button";
import logoDark from "figma:asset/a4476ec81f4ad002acef43832563a5d86d1bce0e.png";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <img src={logoDark} alt="Bené Aragão" className="h-40 mx-auto mb-10" />
          <h1 className="text-gray-900 mb-6">
            Desenvolvedor Front-end & Fotógrafo
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Compartilho conhecimento sobre desenvolvimento web, acessibilidade e design. 
            Quando não estou codificando, capturo momentos através das lentes da minha câmera.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild>
              <a href="#artigos">Ver Artigos</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#fotografia">Minha Fotografia</a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/benearag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/benearag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/benearag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:contato@benearag.com"
              className="text-gray-600 transition-colors hover:text-gray-900"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
