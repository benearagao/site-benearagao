import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { socialLinks } from "@/data";

export function ContactSection() {

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Vamos Conversar?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades, colaborações ou apenas para 
              trocar ideias sobre desenvolvimento e fotografia. Entre em contato!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <link.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 group-hover:text-gray-700 transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-gray-600">{link.description}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none">
            <CardContent className="py-12 text-center">
              <h3 className="text-white mb-4">Gostou do meu trabalho?</h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Estou disponível para projetos freelance, consultoria em acessibilidade 
                web e trabalhos fotográficos.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:contato@benearag.com">Enviar Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
