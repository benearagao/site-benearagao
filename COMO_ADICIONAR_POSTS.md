# 📝 Como Adicionar Novos Posts

Guia rápido para adicionar artigos e vídeos no seu site.

---

## 📰 ADICIONAR NOVO ARTIGO

### Passo 1: Abra o arquivo de dados
```bash
src/data/articles.ts
```

### Passo 2: Copie o template
```typescript
{
  title: "Título do seu artigo",
  excerpt: "Breve descrição (1-2 linhas)",
  date: "YYYY-MM-DD", // Ex: "2024-10-31"
  readTime: "X min",
  tags: ["Tag1", "Tag2"], // Até 3 tags
  url: "https://seulink.com/artigo", // Opcional
  published: true
}
```

### Passo 3: Preencha os dados
```typescript
{
  title: "Como usar React Hooks em 2024",
  excerpt: "Aprenda a usar hooks de forma eficiente no React 18+.",
  date: "2024-11-01",
  readTime: "8 min",
  tags: ["React", "Hooks", "JavaScript"],
  url: "https://medium.com/@benearag/seu-artigo",
  published: true
}
```

### Passo 4: Adicione no início do array
```typescript
export const articles: Article[] = [
  // 👇 Cole seu novo artigo aqui (sempre no topo para aparecer primeiro)
  {
    title: "Como usar React Hooks em 2024",
    excerpt: "Aprenda a usar hooks de forma eficiente no React 18+.",
    date: "2024-11-01",
    readTime: "8 min",
    tags: ["React", "Hooks", "JavaScript"],
    url: "https://medium.com/@benearag/seu-artigo",
    published: true
  },
  // ... artigos antigos abaixo
];
```

### Passo 5: Commit e push
```bash
git add src/data/articles.ts
git commit -m "Novo artigo: Como usar React Hooks em 2024"
git push
```

✅ Pronto! O artigo aparecerá automaticamente no site após o deploy.

---

## 🎥 ADICIONAR NOVO VÍDEO DO YOUTUBE

### Passo 1: Pegue a URL do vídeo
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 ^^^^^^^^^^^
                                 Este é o VIDEO_ID
```

### Passo 2: Abra o arquivo de dados
```bash
src/data/videos.ts
```

### Passo 3: Copie o template
```typescript
{
  title: "Título do vídeo",
  thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  duration: "X:XX",
  category: "Categoria",
  videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  date: "YYYY-MM-DD",
  published: true
}
```

### Passo 4: Preencha com os dados do seu vídeo
```typescript
{
  title: "React useState explicado em 5 minutos",
  thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  duration: "5:23",
  category: "React",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  date: "2024-11-01",
  published: true
}
```

### Passo 5: Adicione no início do array
```typescript
export const videos: Video[] = [
  // 👇 Cole seu novo vídeo aqui (sempre no topo)
  {
    title: "React useState explicado em 5 minutos",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "5:23",
    category: "React",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "2024-11-01",
    published: true
  },
  // ... vídeos antigos abaixo
];
```

### Passo 6: Commit e push
```bash
git add src/data/videos.ts
git commit -m "Novo vídeo: React useState explicado em 5 minutos"
git push
```

✅ Pronto! O vídeo aparecerá automaticamente no site após o deploy.

---

## 🎯 DICAS IMPORTANTES

### ✅ DOs (Faça)
- **Sempre use data no formato YYYY-MM-DD** (ex: 2024-10-31)
- **Adicione novos posts no topo do array** (para aparecerem primeiro)
- **Use `published: true`** para publicar imediatamente
- **Mantenha tags curtas** (1-2 palavras)
- **Thumbnail do YouTube**: Troque VIDEO_ID pela URL do seu vídeo

### ❌ DON'Ts (Não faça)
- ❌ Não use vírgula após o último item do array
- ❌ Não esqueça das aspas nas strings
- ❌ Não use `published: false` se quiser que apareça
- ❌ Não apague os exemplos (apenas adicione no topo)

---

## 🔧 FUNCIONALIDADES AUTOMÁTICAS

### Artigos
- ✅ **Ordenação automática** por data (mais recente primeiro)
- ✅ **Filtro por tags** (clique nas tags para filtrar)
- ✅ **Botão "Ver todos"** aparece quando tem mais de 4 artigos
- ✅ **Data formatada** automaticamente (2024-10-31 → 31 Out 2024)
- ✅ **Link externo** (se adicionar `url`, abre ao clicar)

### Vídeos
- ✅ **Ordenação automática** por data (mais recente primeiro)
- ✅ **Botão "Ver todos"** aparece quando tem mais de 6 vídeos
- ✅ **Abre no YouTube** ao clicar (nova aba)
- ✅ **Hover com ícone play** animado

---

## 📊 CATEGORIAS SUGERIDAS

### Para Artigos - Tags
- React
- TypeScript
- JavaScript
- CSS
- Tailwind
- Performance
- Acessibilidade (ou A11y)
- Best Practices
- Design Systems
- UI/UX
- Front-end

### Para Vídeos - Categorias
- React
- TypeScript
- JavaScript
- CSS
- A11y
- Performance
- Tutorial
- Dica Rápida

---

## 🚀 WORKFLOW COMPLETO

```bash
# 1. Criar branch (opcional, mas recomendado)
git checkout -b post/novo-artigo-react

# 2. Editar o arquivo (articles.ts ou videos.ts)
# ... adicione seu post ...

# 3. Commit
git add .
git commit -m "Novo post: [Título]"

# 4. Push
git push origin post/novo-artigo-react

# 5. Abrir PR no GitHub (ou push direto para main)
# 6. Merge → Deploy automático!
```

---

## ❓ PROBLEMAS COMUNS

### "Meu post não aparece"
- Verifique se `published: true`
- Verifique se está dentro do array `[]`
- Verifique vírgulas (precisa ter vírgula entre itens)

### "Erro de sintaxe"
- Verifique aspas (`"` ou `'`)
- Verifique vírgulas (não pode ter no último item)
- Use um editor com syntax highlighting (VS Code)

### "Data não formatou"
- Use formato YYYY-MM-DD (ex: 2024-10-31)
- Não use DD/MM/YYYY ou outros formatos

---

## 💡 EXEMPLOS PRONTOS PARA COPIAR

### Artigo completo:
```typescript
{
  title: "Meu novo artigo incrível",
  excerpt: "Neste artigo você vai aprender...",
  date: "2024-11-01",
  readTime: "5 min",
  tags: ["React", "TypeScript"],
  url: "https://medium.com/@benearag/meu-artigo",
  published: true
},
```

### Vídeo completo:
```typescript
{
  title: "Tutorial: Como fazer X em Y",
  thumbnail: "https://img.youtube.com/vi/ABC123/maxresdefault.jpg",
  duration: "10:30",
  category: "Tutorial",
  videoUrl: "https://www.youtube.com/watch?v=ABC123",
  date: "2024-11-01",
  published: true
},
```

---

**Pronto!** Agora você pode adicionar posts facilmente sempre que quiser 🎉

Para dúvidas, veja os exemplos no próprio código ou consulte a documentação em `ARCHITECTURE.md`.
