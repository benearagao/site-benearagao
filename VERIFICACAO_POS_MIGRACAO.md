# ✅ Verificação Pós-Migração

## 📋 Checklist de Verificação (Após Propagação DNS)

Execute estas verificações **após 1-2 horas** da mudança de DNS.

---

## 🌐 **1. Verificar DNS Propagou**

### Comando (Terminal/CMD):
```bash
nslookup benearagao.com.br
```

**Esperado:**
```
Address: 216.198.79.1
```

Se ainda mostrar `69.6.213.189`, aguarde mais tempo.

### Online:
- Acesse: https://dnschecker.org
- Digite: `benearagao.com.br`
- Maioria dos servidores deve mostrar: `216.198.79.1` ✅

---

## 🔒 **2. Verificar HTTPS (SSL)**

### Teste 1 - Domínio raiz:
- Acesse: https://benearagao.com.br
- Verifique: Cadeado verde 🔒 no navegador
- Verifique: Certificado válido (clique no cadeado → Certificado)

### Teste 2 - Subdomínio www:
- Acesse: https://www.benearagao.com.br
- Verifique: Cadeado verde 🔒 no navegador

### Teste 3 - Redirect HTTP → HTTPS:
- Acesse: http://benearagao.com.br (sem S)
- Deve redirecionar para: https://benearagao.com.br ✅

---

## 🎨 **3. Verificar Site Funcionando**

### Visual:
- [ ] Layout aparece corretamente
- [ ] Imagens carregam
- [ ] Fontes renderizam corretamente
- [ ] Navegação funciona (todos os links)

### Seções:
- [ ] Seção "Sobre" funciona
- [ ] Seção "Artigos" mostra os artigos
- [ ] Filtro por tags funciona
- [ ] Seção "Vídeos" mostra os vídeos
- [ ] Seção "Fotografia" carrega
- [ ] Seção "Contato" funciona

### Responsividade:
- [ ] Desktop (tela grande)
- [ ] Tablet (tela média)
- [ ] Mobile (celular)

---

## 📧 **4. Verificar Email Funcionando**

### Teste 1 - Receber email:
1. De outro email (Gmail pessoal, etc), envie para: `contato@benearagao.com.br`
2. Aguarde 1-2 minutos
3. Verifique se recebeu no Google Workspace

### Teste 2 - Enviar email:
1. Responda o email de teste
2. Verifique se o destinatário recebeu
3. Verifique se não caiu em spam

### Teste 3 - Verificar SPF/DKIM:
1. No email recebido, clique em "Mostrar original"
2. Procure por:
   ```
   spf=pass
   dkim=pass
   ```
3. Se passar, email está seguro ✅

---

## ⚡ **5. Verificar Performance**

### Google PageSpeed:
1. Acesse: https://pagespeed.web.dev/
2. Digite: `https://benearagao.com.br`
3. Aguarde análise

**Esperado:**
- **Performance**: 90-100 (verde)
- **Accessibility**: 90-100 (verde)
- **Best Practices**: 90-100 (verde)
- **SEO**: 90-100 (verde)

### Tempo de Carregamento:
- **Esperado**: 0.5-1.5 segundos
- **Anterior (Hostgator)**: ~2-4 segundos

---

## 🔍 **6. Verificar no Vercel Dashboard**

1. Acesse: https://vercel.com/dashboard
2. Vá no projeto: `site-benearagao`
3. Clique em **"Domains"**

**Esperado:**
```
✅ benearagao.com.br - Valid Configuration
✅ www.benearagao.com.br - Valid Configuration
✅ site-benearagao.vercel.app - Valid Configuration
```

Se aparecer "Invalid Configuration", clique em "Refresh" e aguarde mais.

---

## 🎯 **7. Testes de Deploy Automático**

### Teste o fluxo completo de atualização:

```bash
# 1. Editar um arquivo (exemplo: adicionar um artigo)
# Edite: src/data/articles.ts

# 2. Commit e push
git add .
git commit -m "Teste: Adicionando artigo de teste"
git push

# 3. Aguarde 1-2 minutos

# 4. Acesse: https://benearagao.com.br
# Verifique se a mudança apareceu
```

**Se funcionou:** Deploy automático está ativo! 🎉

---

## 📊 **8. Verificar Analytics (Opcional)**

Se você ativou Vercel Analytics:

1. No Vercel Dashboard → projeto → **Analytics**
2. Aguarde alguns acessos
3. Verifique métricas:
   - Visualizações de página
   - Tempo de carregamento real
   - Dispositivos dos visitantes

---

## 🚨 **Troubleshooting - Problemas Comuns**

### Problema: "Site não carrega"
**Solução:**
1. Aguarde mais tempo (propagação DNS)
2. Limpe cache do navegador (Ctrl+Shift+Del)
3. Teste em modo anônimo
4. Teste em outro dispositivo/rede

### Problema: "Email parou de funcionar"
**Solução:**
1. Verifique registros MX no cPanel
2. Devem ter apenas os 5 do Google Workspace
3. Aguarde propagação DNS
4. Teste enviar de/para outros emails

### Problema: "Erro SSL / Certificado inválido"
**Solução:**
1. Aguarde 10-15 minutos (Vercel gera SSL automático)
2. No Vercel, vá em Domains → Clique em "Refresh"
3. Se persistir, remova o domínio e adicione novamente

### Problema: "Site mostra versão antiga (Hostgator)"
**Solução:**
1. Verifique DNS propagou (comando nslookup)
2. Se mostra IP antigo (69.6.213.189), aguarde mais
3. Limpe cache do navegador
4. Teste em modo anônimo

### Problema: "Deploy automático não funciona"
**Solução:**
1. Verifique GitHub conectado no Vercel
2. Settings → Git → Verificar repository
3. Verifique branch está em "main" ou "master"
4. Faça um push de teste e aguarde 1-2 min

---

## ✅ **Checklist Final**

Quando tudo estiver funcionando, marque:

- [ ] DNS propagou (mostra IP do Vercel)
- [ ] Site carrega em benearagao.com.br
- [ ] Site carrega em www.benearagao.com.br
- [ ] HTTPS ativo (cadeado verde)
- [ ] Email recebe mensagens
- [ ] Email envia mensagens
- [ ] Performance 90+ no PageSpeed
- [ ] Deploy automático funciona
- [ ] Todos os domínios "Valid" no Vercel
- [ ] Site responsivo (mobile, tablet, desktop)

---

## 🎉 **Sucesso Total!**

Se todas as verificações passaram, sua migração foi um sucesso!

**Benefícios ativos:**
- ✅ Performance 4x mais rápida
- ✅ Deploy automático com git push
- ✅ SSL grátis e automático
- ✅ CDN global
- ✅ Preview de mudanças
- ✅ Rollback instantâneo
- ✅ Email funcionando normalmente
- ✅ Custo: R$ 0 no Vercel

---

## 📞 **Suporte**

Se algo não funcionar:

1. **Vercel**: https://vercel.com/support
2. **Google Workspace**: https://support.google.com/a
3. **DNS Checker**: https://dnschecker.org
4. **PageSpeed**: https://pagespeed.web.dev

---

**Data da migração:** 03/11/2025
**Próxima verificação recomendada:** Após 2 horas
