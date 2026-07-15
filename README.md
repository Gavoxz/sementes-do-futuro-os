# Sementes do Futuro — Landing Page Institucional

Landing page institucional para a ONG fictícia **Sementes do Futuro**, construída
como projeto acadêmico com padrão de qualidade de agência.

## Stack

- Next.js 15 (App Router) + TypeScript
- TailwindCSS
- Framer Motion
- Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para build de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/            → layout, página e estilos globais
  components/
    layout/       → Navbar e Footer
    sections/     → cada seção da landing page (Hero, Sobre, Missão, etc.)
    ui/           → primitivos reutilizáveis (Container, FadeIn, SectionHeading,
                    PlaceholderImage, GrowthTimeline)
  data/           → conteúdo estruturado (valores, atividades, equipe, timelines)
  lib/            → constantes do site e variantes de animação
  types/          → tipos compartilhados
public/           → logo, robots.txt, sitemap.xml, manifest
```

## Sobre a logo

O arquivo `public/logo.jpg` já contém a logo enviada. Para substituí-la, basta
trocar o arquivo mantendo o mesmo nome (ou atualizar as referências em
`Navbar.tsx`, `Hero.tsx`, `Footer.tsx`, `CtaFinal.tsx` e `layout.tsx`).

## Notas de design

- **Paleta**: verde-sálvia `#6B8C66` (primária), petróleo `#30858C` (secundária)
  e ameixa `#8C5086` (destaque), sobre branco quente `#FBFAF7` — conforme
  especificado no briefing.
- **Tipografia**: Manrope em todos os pesos (300–700), usada como única família
  para reforçar um tom editorial coeso, com contraste de peso fazendo o papel
  de hierarquia.
- **Elemento de assinatura**: a timeline de "caule com folhas" (componente
  `GrowthTimeline`) substitui marcadores numéricos genéricos, referenciando
  diretamente o caule e as folhas da logo nas seções "Nossa Solução" e "Como
  funcionam os encontros".
- **Imagens e fotos** (equipe, atividades, galeria) usam placeholders elegantes
  até que os arquivos reais sejam enviados — basta trocar `PlaceholderImage`
  por `next/image` apontando para o arquivo real.
- Os números da seção "Impacto" e as descrições da seção "O que observamos"
  são explicitamente identificados como representações do projeto acadêmico,
  não como dados de impacto social real.

## Acessibilidade e performance

- Contraste AA, `alt` em todas as imagens, navegação por teclado com foco
  visível, ARIA labels na navegação e no mapa.
- `prefers-reduced-motion` respeitado globalmente.
- Metadata completa, Open Graph, JSON-LD (schema.org/NGO), `robots.txt` e
  `sitemap.xml` inclusos.
