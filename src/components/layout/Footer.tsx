import { Heart } from "lucide-react";
import logoLight from "figma:asset/b5cb85a71aa9f64b1dd50b1eabcd6443c311cca6.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={logoLight} alt="Bené Aragão" className="h-20" />
          <p className="flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> e muito café ☕
          </p>
          <p className="text-gray-400">
            © {currentYear} Bené Aragão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
