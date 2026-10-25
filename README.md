# Studio Tonn — landing page

Site estático em [Astro](https://astro.build). Gera HTML puro com CSS e JS embutidos (~22 KB compactado), sem bibliotecas no navegador.

## Comandos

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:4321
npm run build    # gera a pasta dist/ para publicar
npm run og       # regenera public/og.png a partir de scripts/og.svg
```

## Publicação (GitHub → Cloudflare Pages)

O site é gerado automaticamente pela Cloudflare a cada `git push` na branch `main`.

Configuração do projeto em **Workers & Pages → Connect to Git**:

| Campo | Valor |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node | definido em `.node-version` (24) |

Domínio: studiotonn.com.br (em `site.ts`, `astro.config.mjs`, `robots.txt` e `sitemap.xml`).
O arquivo `public/_headers` configura o cache das fontes, ícones e imagens.

> **Windows:** se o build local falhar com `ERR_PACKAGE_IMPORT_NOT_DEFINED`, o caminho da pasta é longo demais (limite de 260 caracteres). Deixe o projeto num caminho curto.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Todos os textos, serviços, contatos, área de atendimento, FAQ | `src/content/site.ts` |
| Cores, fontes, espaços, raios, animações | `src/styles/tokens.css` |
| Domínio (também em `site.ts`) | `astro.config.mjs`, `public/robots.txt`, `public/sitemap.xml` |
| Sua foto | coloque em `public/` e informe em `about.photo` |

No `site.ts`, tudo marcado com **⚠ EDITAR** é provisório. Nos títulos, `*palavra*` vira o destaque em itálico verde.

## Antes de publicar

- [ ] Criar o Perfil da Empresa no Google como "empresa de área de atendimento" (sem endereço) com as mesmas cidades
- [ ] Cases do carrossel do topo: troque os 4 de exemplo pelos reais (`cases` em `site.ts`)
- [ ] Foto do Antonio

## Estrutura

```
src/
  content/site.ts        textos e dados
  styles/tokens.css      design tokens
  styles/global.css      base, fontes, utilitários
  layouts/Base.astro     <head>, SEO, dados estruturados (LocalBusiness: Sul Fluminense + Brasil, e FAQ)
  components/            uma seção por arquivo
    ui/                  Button, Icon, Logo, SectionHead
  scripts/reveal.ts      animações de entrada ao rolar
public/icons/            ícones 3D (1x e @2x) de Como funciona e das garantias
public/fonts/            Fustat e Geist Mono (variáveis) hospedadas localmente
```

Tipografia: Fustat (títulos e textos, pesos 200–800) e Geist Mono (rótulos e numeração). Um arquivo por família cobre todos os pesos.
