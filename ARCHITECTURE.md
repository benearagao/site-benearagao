# Arquitetura do Projeto

## 📁 Estrutura de Diretórios

```
src/
├── components/          # Componentes React
│   ├── layout/         # Componentes de layout (Header, Footer)
│   ├── sections/       # Seções da página (Hero, About, Articles, etc)
│   ├── ui/             # Componentes UI reutilizáveis (shadcn/ui)
│   └── figma/          # Componentes gerados do Figma
├── data/               # Dados estáticos tipados
│   ├── articles.ts     # Lista de artigos
│   ├── videos.ts       # Lista de vídeos
│   ├── socialLinks.ts  # Links sociais
│   └── index.ts        # Barrel export
├── hooks/              # Custom React hooks
│   └── useScrollTo.ts  # Hook para navegação suave
├── lib/                # Utilitários e helpers
│   ├── constants.ts    # Constantes da aplicação
│   └── utils.ts        # Funções utilitárias (shadcn)
├── types/              # Definições TypeScript
│   ├── article.ts      # Interface Article
│   ├── video.ts        # Interface Video
│   ├── social.ts       # Interface SocialLink
│   └── index.ts        # Barrel export
├── assets/             # Recursos estáticos (imagens, fontes)
├── styles/             # Arquivos de estilos globais
├── App.tsx             # Componente raiz
├── main.tsx            # Entry point
└── index.css           # Estilos globais + Tailwind
```

## 🏗️ Princípios Arquiteturais

### 1. Separação de Responsabilidades (SoC)
- **Dados** separados dos componentes (`/data`)
- **Tipos** isolados em arquivos dedicados (`/types`)
- **Lógica** extraída para hooks customizados (`/hooks`)
- **UI** focada apenas em renderização (`/components`)

### 2. DRY (Don't Repeat Yourself)
- Barrel exports para simplificar importações
- Constantes centralizadas (`NAV_ITEMS`, `CONTACT_EMAIL`)
- Componentes reutilizáveis (shadcn/ui)

### 3. Type Safety
- Todas as entidades têm interfaces TypeScript
- `strict: true` no tsconfig.json
- Props tipadas em todos os componentes

### 4. Escalabilidade
- Estrutura preparada para crescimento
- Fácil adicionar novas seções/features
- Dados podem ser migrados para API sem refatoração

## 🎯 Padrões de Código

### Barrel Exports
Facilitam importações e mantêm o código limpo:

```typescript
// ❌ Antes
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// ✅ Depois
import { Header, Footer } from "./components/layout";
```

### Custom Hooks
Encapsulam lógica reutilizável:

```typescript
// Hook: src/hooks/useScrollTo.ts
export function useScrollTo() {
  const scrollToSection = useCallback((id: string) => {
    // lógica de scroll
  }, []);
  return { scrollToSection };
}

// Uso no componente
const { scrollToSection } = useScrollTo();
scrollToSection('sobre');
```

### Dados Tipados
Todos os dados seguem interfaces:

```typescript
// Type: src/types/article.ts
export interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

// Data: src/data/articles.ts
import { Article } from "@/types";

export const articles: Article[] = [
  { title: "...", excerpt: "...", /* ... */ }
];
```

## 🔄 Fluxo de Dados

```
Data Layer (src/data)
      ↓
Type Safety (src/types)
      ↓
Components (src/components)
      ↓
User Interface
```

## 🚀 Benefícios da Arquitetura Atual

### ✅ Manutenibilidade
- Fácil encontrar e modificar código
- Mudanças isoladas (ex: alterar dados não afeta UI)

### ✅ Testabilidade
- Hooks podem ser testados isoladamente
- Dados mockáveis facilmente
- Componentes puros (apenas UI)

### ✅ Escalabilidade
- Adicionar nova seção: criar componente + adicionar dados
- Migrar para CMS: apenas trocar `src/data` por API calls
- Adicionar rotas: integrar React Router sem refatoração

### ✅ Developer Experience
- Autocomplete em todos os dados (TypeScript)
- Imports limpos com barrel exports
- Path alias `@/` para imports absolutos

## 📦 Dependências

### Core
- **React 18.3**: Framework UI
- **TypeScript**: Type safety
- **Vite**: Build tool rápido com HMR

### UI/Styling
- **Tailwind CSS v4**: Utility-first CSS
- **Radix UI**: Componentes primitivos acessíveis
- **Lucide React**: Ícones

### Utils
- **clsx**: Conditional classNames
- **tailwind-merge**: Merge Tailwind classes
- **class-variance-authority**: Variants de componentes

## 🔧 Path Alias

O projeto usa `@/` como alias para `src/`:

```typescript
// ❌ Antes
import { articles } from "../../../../data/articles";

// ✅ Depois
import { articles } from "@/data";
```

Configurado em:
- `vite.config.ts` → `resolve.alias`
- `tsconfig.json` → `compilerOptions.paths`

## 🎨 Próximos Passos (Recomendações)

### Curto Prazo
- [ ] Adicionar testes (Vitest + React Testing Library)
- [ ] Implementar lazy loading de imagens
- [ ] Adicionar meta tags SEO

### Médio Prazo
- [ ] Integrar com CMS headless (Sanity/Contentful)
- [ ] Adicionar analytics (Google Analytics/Plausible)
- [ ] Implementar blog com MDX

### Longo Prazo
- [ ] Migrar para Next.js (SSG/ISR)
- [ ] Adicionar i18n (internacionalização)
- [ ] Implementar PWA

## 📚 Recursos de Aprendizado

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Última atualização:** 2024
**Versão da arquitetura:** 2.0
