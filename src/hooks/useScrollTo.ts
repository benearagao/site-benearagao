import { useCallback } from "react";

/**
 * Hook customizado para navegação suave entre seções da página
 *
 * @example
 * const { scrollToSection } = useScrollTo();
 * scrollToSection('sobre'); // Rola até a seção com id="sobre"
 */
export function useScrollTo() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      console.warn(`Seção com id "${sectionId}" não encontrada`);
    }
  }, []);

  return { scrollToSection };
}
