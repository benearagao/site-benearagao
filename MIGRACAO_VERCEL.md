# 🚀 Guia de Migração: Hostgator → Vercel

## 📊 Status Atual (Verificado em 03/11/2025)

### DNS Atual:
- **Site**: 69.6.213.189 (Hostgator/Apache)
- **Email**: Google Workspace (com problemas de configuração)

### Problemas Detectados:
⚠️ Registro MX duplicado (prioridade 0) pode causar perda de emails
⚠️ SPF não inclui Google Workspace (emails podem cair em spam)

---

## ✅ PASSO 1: Corrigir Email (ANTES DE MIGRAR)

### 1.1 - Acessar cPanel Hostgator
- URL: https://seudominio.com/cpanel
- Login: (suas credenciais)

### 1.2 - Zone Editor (Editor de Zona DNS)
Encontre: `benearagao.com.br`

### 1.3 - REMOVER registro problemático:
```
Tipo: MX
Prioridade: 0
Valor: mail.benearagao.com.br
Status: ❌ DELETAR
```

### 1.4 - ATUALIZAR registro SPF:
```
Tipo: TXT
Nome: @
Valor ANTIGO: v=spf1 a mx include:websitewelcome.com ~all
Valor NOVO:   v=spf1 include:_spf.google.com ~all
Status: ✏️ EDITAR
```

### 1.5 - Verificar registros MX finais (devem ficar apenas estes):
```
1  ASPMX.L.GOOGLE.COM
5  ALT1.ASPMX.L.GOOGLE.COM
5  ALT2.ASPMX.L.GOOGLE.COM
10 ALT3.ASPMX.L.GOOGLE.COM
10 ALT4.ASPMX.L.GOOGLE.COM
```

**✅ Salvar alterações**

---

## ✅ PASSO 2: Adicionar Domínio no Vercel

### 2.1 - Acessar Dashboard Vercel
- URL: https://vercel.com/dashboard
- Login com GitHub

### 2.2 - Selecionar seu projeto
- Procure: `site-benearagao`

### 2.3 - Settings → Domains
1. Clique em **"Add Domain"**
2. Digite: `benearagao.com.br`
3. Clique em **"Add"**

### 2.4 - Adicionar também o www
1. Clique em **"Add Domain"** novamente
2. Digite: `www.benearagao.com.br`
3. Clique em **"Add"**

### 2.5 - Copiar valores DNS fornecidos pelo Vercel
O Vercel mostrará algo como:

```
A Record:
Name: @
Value: 76.76.21.21

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

**📝 ANOTE ESSES VALORES** (podem ser diferentes!)

---

## ✅ PASSO 3: Atualizar DNS no Hostgator

### 3.1 - Voltar para cPanel → Zone Editor

### 3.2 - EDITAR registro A (raiz do domínio)
```
Tipo: A
Nome: @ (ou benearagao.com.br)
Valor ANTIGO: 69.6.213.189
Valor NOVO:   76.76.21.21 (ou o que o Vercel forneceu)
TTL: 3600
```

### 3.3 - EDITAR registro CNAME (www)
```
Tipo: CNAME
Nome: www
Valor ANTIGO: (qualquer coisa)
Valor NOVO:   cname.vercel-dns.com (ou o que o Vercel forneceu)
TTL: 3600
```

### 3.4 - NÃO MEXER nos registros MX
Os 5 registros do Google Workspace devem permanecer intactos!

**✅ Salvar alterações**

---

## ⏱️ PASSO 4: Aguardar Propagação DNS

- **Tempo mínimo**: 5 minutos
- **Tempo médio**: 1-2 horas
- **Tempo máximo**: 24-48 horas

### Como verificar se propagou:
```bash
# No terminal/CMD:
nslookup benearagao.com.br

# Se aparecer 76.76.21.21 = Propagou! ✅
# Se aparecer 69.6.213.189 = Ainda no Hostgator (aguarde)
```

---

## ✅ PASSO 5: Verificações Finais

### 5.1 - Testar Site
- Acesse: https://benearagao.com.br
- Acesse: https://www.benearagao.com.br
- Verifique se o site novo aparece
- Verifique se HTTPS está ativo (cadeado verde)

### 5.2 - Testar Email
- Envie email para: contato@benearagao.com.br
- Responda um email de: contato@benearagao.com.br
- Verifique se chegou normalmente

### 5.3 - Verificar Performance
- Acesse: https://pagespeed.web.dev/
- Digite: benearagao.com.br
- Esperado: 90-100/100 (vs ~60-70 no Hostgator)

---

## 🎯 Checklist Completo

### Antes da Migração:
- [ ] Remover MX duplicado (mail.benearagao.com.br)
- [ ] Atualizar SPF para incluir Google Workspace
- [ ] Verificar que MX tem apenas os 5 do Google
- [ ] Testar recebimento de email

### Durante a Migração:
- [ ] Adicionar benearagao.com.br no Vercel
- [ ] Adicionar www.benearagao.com.br no Vercel
- [ ] Copiar valores DNS do Vercel
- [ ] Atualizar registro A no Hostgator
- [ ] Atualizar registro CNAME no Hostgator
- [ ] Aguardar propagação DNS

### Após a Migração:
- [ ] Site carrega em benearagao.com.br
- [ ] Site carrega em www.benearagao.com.br
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Email recebe normalmente
- [ ] Email envia normalmente
- [ ] Performance melhorou (PageSpeed)

---

## 🆘 Problemas Comuns

### "Site não carrega"
- Aguarde mais tempo (propagação DNS)
- Limpe cache do navegador (Ctrl+Shift+Del)
- Teste em modo anônimo

### "Email parou de funcionar"
- Verifique se não mexeu nos registros MX
- Registros MX devem ter apenas os 5 do Google
- Aguarde propagação DNS

### "Aparece erro SSL"
- Aguarde 10-15 minutos (Vercel gera SSL automático)
- Se persistir, remova e adicione domínio novamente no Vercel

---

## 💡 Benefícios Após Migração

### Performance:
- ✅ Carregamento: 2-4s → 0.5-1s (4x mais rápido)
- ✅ Lighthouse: 60-70 → 95-100 (excelente)
- ✅ CDN global (rápido no mundo todo)

### Desenvolvimento:
- ✅ Deploy automático: `git push` = site atualizado
- ✅ Preview de mudanças antes de publicar
- ✅ Rollback instantâneo se der problema

### Custo:
- ✅ Vercel: R$ 0 (grátis)
- ✅ Email: Já pago no Google Workspace
- ✅ Hostgator: Mantém só para revenda

---

## 📞 Suporte

- Vercel: https://vercel.com/support
- Google Workspace: https://support.google.com/a
- Documentação Vercel: https://vercel.com/docs

---

**Criado em: 03/11/2025**
**Última atualização: 03/11/2025**
