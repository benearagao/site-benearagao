import { Code2, Camera, Accessibility } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function AboutSection() {
  const skills = [
    {
      icon: Code2,
      title: "Desenvolvimento Front-end",
      description: "React, TypeScript, Tailwind CSS e as melhores práticas modernas de desenvolvimento web."
    },
    {
      icon: Accessibility,
      title: "Acessibilidade Web",
      description: "Criando experiências inclusivas e acessíveis para todos os usuários."
    },
    {
      icon: Camera,
      title: "Fotografia",
      description: "Capturando momentos únicos através da fotografia de paisagem e urbana."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-4 text-center">Sobre Mim</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Sou apaixonado por criar experiências digitais acessíveis e visualmente atraentes. 
            Compartilho meu conhecimento através de artigos e vídeos, ajudando outros 
            desenvolvedores a melhorarem suas habilidades.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <skill.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
