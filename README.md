# 🌐 Site Bené Aragão

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/benearagao/site-benearagao)

Site pessoal profissional com portfólio, blog de artigos e canal de vídeos.

## 🚀 Stack Tecnológica

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Deploy:** Vercel

## ✨ Funcionalidades

### 📰 Blog de Artigos
- Ordenação automática por data
- Filtro interativo por tags
- Paginação ("Ver todos")
- Links externos opcionais
- Formatação automática de datas

### 🎥 Canal de Vídeos
- Integração com YouTube
- Click abre vídeo em nova aba
- Grid responsivo
- Paginação automática

### 🎨 UI/UX
- Design responsivo (mobile-first)
- Animações suaves
- Navegação por scroll
- Header fixo com menu mobile
- Dark mode ready

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/benearagao/site-benearagao.git
cd site-benearagao

# Instale dependências
npm install

# Rode em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📝 Como Adicionar Conteúdo

### Novo Artigo:
Edite `src/data/articles.ts` e adicione:
```typescript
{
  title: "Título do artigo",
  excerpt: "Descrição curta",
  date: "2024-11-01",
  readTime: "5 min",
  tags: ["React", "TypeScript"],
  url: "https://link-opcional.com",
  published: true
}
```

### Novo Vídeo:
Edite `src/data/videos.ts` e adicione:
```typescript
{
  title: "Título do vídeo",
  thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  duration: "5:23",
  category: "React",
  videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  date: "2024-11-01",
  published: true
}
```

Depois:
```bash
git add src/data/
git commit -m "Novo post: [Título]"
git push
```

🚀 **Deploy automático no Vercel!**

## 📚 Documentação

- [`ARCHITECTURE.md`](./ARCHITECTURE.md) - Arquitetura do projeto
- [`COMO_ADICIONAR_POSTS.md`](./COMO_ADICIONAR_POSTS.md) - Guia detalhado de posts
- [`CONTENT_MANAGEMENT_GUIDE.md`](./CONTENT_MANAGEMENT_GUIDE.md) - Sistema de conteúdo
- [`REFACTORING_SUMMARY.md`](./REFACTORING_SUMMARY.md) - Histórico de melhorias

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Seções da página
│   ├── ui/              # Componentes reutilizáveis
│   └── figma/           # Componentes gerados
├── data/                # Dados estáticos
│   ├── articles.ts      # Artigos do blog
│   ├── videos.ts        # Vídeos do canal
│   └── socialLinks.ts   # Links sociais
├── hooks/               # Custom React hooks
│   └── useScrollTo.ts
├── lib/                 # Utilitários
│   ├── dataHelpers.ts   # Funções auxiliares
│   └── constants.ts     # Constantes
├── types/               # TypeScript interfaces
│   ├── article.ts
│   ├── video.ts
│   └── social.ts
└── styles/              # Estilos globais
```

## 🎯 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento (porta 3000)
npm run build    # Build de produção
npm run preview  # Preview do build
```

## 📊 Performance

- ✅ Bundle otimizado (~200 KB)
- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ Imagens otimizadas
- ✅ Cache headers configurados

## 🔐 Segurança

- ✅ Headers de segurança (CSP, XSS Protection)
- ✅ Links externos com rel="noopener noreferrer"
- ✅ Dependências atualizadas
- ✅ Type-safe com TypeScript

## 📄 Licença

© 2024 Bené Aragão. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**

🤖 Arquitetura otimizada com [Claude Code](https://claude.com/claude-code)
