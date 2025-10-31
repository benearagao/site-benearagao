import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useScrollTo } from "@/hooks/useScrollTo";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import logoDark from "figma:asset/a4476ec81f4ad002acef43832563a5d86d1bce0e.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-5">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation("home")}
            className="transition-opacity hover:opacity-70"
          >
            <img src={logoDark} alt={SITE_NAME} className="h-12" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-gray-700 transition-colors hover:text-gray-900"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-gray-700 text-left transition-colors hover:text-gray-900"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
