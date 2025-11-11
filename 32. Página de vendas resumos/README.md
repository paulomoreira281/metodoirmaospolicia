# 🎉 Páginas de Eventos - Irmãos Polícia

Este projeto contém duas páginas de eventos para a comunidade Irmãos Polícia:

1. **I Corrida Irmãos Polícia** - Evento esportivo
2. **Jantar dos Aprovados** - Celebração premium

---

## 📁 Estrutura do Projeto

```
32. Página de vendas resumos/
├── corrida-irmaos-policia.html    # Página da Corrida
├── jantar-aprovados.html          # Página do Jantar
├── styles.css                     # Estilos compartilhados
├── script.js                      # JavaScript interativo
├── logo.png                       # Logo Irmãos Polícia
├── MENSAGENS_WHATSAPP.md         # Templates de mensagens
└── README.md                      # Este arquivo
```

---

## 🚀 Como Usar

### 1. Configuração Inicial

#### Para a Página do Jantar:
⚠️ **IMPORTANTE:** Você precisa configurar o link do Google Forms do jantar!

**Passo a passo:**
1. Crie um Google Forms para o jantar
2. Copie o link do formulário
3. Abra o arquivo `jantar-aprovados.html`
4. Procure por `href="#"` nos botões de CTA
5. Substitua `#` pelo link do Google Forms

**OU**

1. Abra o arquivo `script.js`
2. Procure por `YOUR_DINNER_FORM_LINK`
3. Substitua pelo link real do formulário

### 2. Hospedagem

#### Opção A: Vercel (Recomendado - Grátis)
```bash
# Se ainda não tem Vercel CLI instalado:
npm install -g vercel

# No diretório do projeto:
vercel
```

#### Opção B: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Salve e aguarde deploy

#### Opção C: Netlify
1. Arraste a pasta para [netlify.com/drop](https://app.netlify.com/drop)
2. Pronto!

### 3. Compartilhamento

Depois de hospedar, você terá URLs como:
- `https://seu-site.vercel.app/corrida-irmaos-policia.html`
- `https://seu-site.vercel.app/jantar-aprovados.html`

Use estas URLs nos templates de WhatsApp!

---

## 📱 Templates de WhatsApp

Todos os templates estão no arquivo **`MENSAGENS_WHATSAPP.md`**

O arquivo contém:

✅ Mensagens para grupos
✅ Mensagens individuais personalizadas
✅ Mensagens curtas para Stories
✅ Lembretes (1 semana e 1 dia antes)
✅ Mensagens pós-evento

**Como usar:**
1. Abra `MENSAGENS_WHATSAPP.md`
2. Copie o template desejado
3. Substitua [NOME] e [LINK] conforme necessário
4. Cole no WhatsApp

---

## 🎨 Identidade Visual

### Corrida Irmãos Polícia
- **Cores:** Vermelho vibrante (#EF4D48) + Preto
- **Estilo:** Energia, ação, movimento
- **Público:** Todos os níveis (iniciantes a avançados)

### Jantar dos Aprovados
- **Cores:** Dourado (#FFD700) + Preto
- **Estilo:** Sofisticação, luxo, celebração
- **Público:** Aprovados e candidatos

---

## ✨ Funcionalidades

### Página da Corrida
- ✅ Countdown timer em tempo real
- ✅ Informações completas do evento
- ✅ Showcase da camisa oficial
- ✅ Mapa integrado do Google Maps
- ✅ FAQ interativo
- ✅ Botão "Voltar ao topo"
- ✅ Design 100% responsivo

### Página do Jantar
- ✅ Countdown timer em tempo real
- ✅ Design premium/luxuoso
- ✅ Informações sobre o Coco Bambu
- ✅ Dress code detalhado
- ✅ Timeline da programação
- ✅ FAQ interativo
- ✅ Mapa integrado
- ✅ Design 100% responsivo

---

## 🛠️ Personalização

### Alterar Datas dos Eventos

No arquivo `script.js`, linhas 6 e 24:

```javascript
// Corrida: 29/11/2025 às 08:00
const raceDate = new Date('2025-11-29T08:00:00').getTime();

// Jantar: 27/11/2025 às 19:00
const dinnerDate = new Date('2025-11-27T19:00:00').getTime();
```

### Alterar Cores

No arquivo `styles.css`, linhas 13-25:

```css
:root {
    --primary-red: #EF4D48;
    --gold: #FFD700;
    /* Altere aqui */
}
```

### Adicionar Logo/Imagens

1. Coloque as imagens na pasta do projeto
2. No HTML, substitua:
   ```html
   <img src="./logo.png" alt="Logo">
   ```

---

## 📊 Analytics (Opcional)

Para adicionar Google Analytics:

1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Obtenha seu código de tracking (G-XXXXXXXXXX)
3. Adicione antes do `</head>` em ambos os HTMLs:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com animações
- **JavaScript (Vanilla)** - Interatividade sem dependências
- **Google Maps** - Integração de mapas
- **Google Forms** - Formulários de inscrição

**Sem frameworks!** Projeto leve e rápido ⚡

---

## 📱 Compatibilidade

✅ Desktop (Chrome, Firefox, Safari, Edge)
✅ Tablets (iPad, Android tablets)
✅ Mobile (iOS, Android)

Testado em resoluções:
- 1920x1080 (Desktop)
- 768px (Tablet)
- 480px (Mobile)

---

## 🎯 Checklist de Lançamento

### Antes de Publicar:

**Corrida:**
- [ ] Link do Google Forms configurado
- [ ] Data/horário corretos
- [ ] Logo incluído
- [ ] Mapa configurado corretamente
- [ ] Testado em mobile

**Jantar:**
- [ ] Link do Google Forms configurado
- [ ] Data/horário corretos
- [ ] Endereço Coco Bambu correto
- [ ] Mapa configurado
- [ ] Testado em mobile

**Geral:**
- [ ] Todas as imagens carregando
- [ ] Links das redes sociais funcionando
- [ ] Countdowns funcionando
- [ ] FAQ abrindo/fechando
- [ ] Site hospedado
- [ ] URLs compartilháveis prontas

---

## 📞 Suporte

### Problemas Comuns:

**Countdown não funciona:**
- Verifique se a data está no formato correto em `script.js`
- Abra o Console do navegador (F12) para ver erros

**Página não carrega estilos:**
- Verifique se `styles.css` está na mesma pasta
- Confirme que o caminho no `<link>` está correto

**Google Forms não abre:**
- Confirme que o link está correto
- Teste o link direto no navegador

**Imagens não aparecem:**
- Confirme que as imagens estão na pasta correta
- Verifique os caminhos no HTML

---

## 🎨 Futuras Melhorias (Opcional)

- [ ] Sistema de pagamento integrado
- [ ] Galeria de fotos de eventos anteriores
- [ ] Depoimentos de participantes
- [ ] Integração com Instagram (feed)
- [ ] Chat ao vivo
- [ ] Sistema de cupons de desconto
- [ ] Certificados digitais para participantes

---

## 📄 Licença

© 2025 Irmãos Polícia. Todos os direitos reservados.

---

## 🤝 Créditos

**Desenvolvido para:** Irmãos Polícia
**Website:** [irmaospolicia.com.br](https://irmaospolicia.com.br)
**Instagram:** [@irmaospolicia](https://www.instagram.com/irmaospolicia/)
**YouTube:** [Irmãos Polícia](https://www.youtube.com/c/Irm%C3%A3osPol%C3%ADcia)

---

## 📝 Notas Finais

### Dicas de Marketing:

1. **Divulgação Antecipada:** Comece a divulgar 2-3 semanas antes
2. **Stories Diários:** Poste contagem regressiva todos os dias
3. **Engajamento:** Responda todos os comentários/dúvidas
4. **Urgência:** Use "vagas limitadas" para criar urgência
5. **Depoimentos:** Compartilhe feedbacks de participantes anteriores

### Cronograma Sugerido:

**3 semanas antes:**
- Anúncio inicial nos grupos
- Post no Instagram/Facebook
- E-mail para lista de contatos

**2 semanas antes:**
- Lembrete nos grupos
- Stories com countdown
- Mensagens individuais para leads quentes

**1 semana antes:**
- Lembrete "última semana"
- Criar senso de urgência
- Destacar benefícios

**1 dia antes:**
- Checklist final
- Confirmar presença dos inscritos
- Lembrar horários e local

**Dia do evento:**
- Boas-vindas ao vivo
- Stories durante o evento
- Engajar em tempo real

**Pós-evento:**
- Agradecer participação
- Compartilhar fotos/vídeos
- Pedir feedbacks
- Anunciar próximos eventos

---

**Qualquer dúvida, consulte a documentação ou entre em contato!**

Bons eventos! 🎉🏃‍♂️🍽️