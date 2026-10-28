import type { APIRoute } from 'astro';
import { site, seo, hero, services, process, faq, cases, citiesLabel, brl } from '../content/site';

// Resumo do site em texto simples para assistentes de IA (padrão llms.txt).
// Sai do mesmo conteúdo da página, então fica sempre igual ao site.
const plain = (t: string) => t.replace(/\*/g, '');

export const GET: APIRoute = () => {
  const body = `# ${site.name}

> ${seo.description}

${hero.lead}

- Responsável: ${site.ownerFullName || site.owner}, ${site.role}, ${site.years} anos criando produtos digitais
- Atendimento presencial: ${citiesLabel} (${site.region.name}, ${site.region.state})
- Atendimento online: ${site.serviceArea}
- WhatsApp: ${site.phoneDisplay} (https://wa.me/${site.whatsapp})
- E-mail: ${site.email}
${site.social.map((s) => `- ${s.network}: ${s.href}`).join('\n')}

## Serviços

${services.items.map((s) => `- **${s.name}** (${services.showPrices ? `${services.pricePrefix} ${brl(s.price)}; ` : ''}${s.time}): ${s.desc}${services.showPrices ? ` ${s.priceNote}` : ''} Inclui: ${s.features.join('; ')}.`).join('\n')}

Garantias: ${services.guarantees.map((g) => `${g.title} (${g.text.replace(/\.$/, '')})`).join('; ')}.

## Como funciona

${process.steps.map((s, i) => `${i + 1}. **${s.title}**: ${s.text}`).join('\n')}

## Trabalhos recentes

${cases.items.map((c) => `- **${c.name}** (${c.type}): ${c.result}`).join('\n')}

## Perguntas frequentes

${faq.items.map((f) => `### ${plain(f.q)}\n${f.a}`).join('\n\n')}

## Páginas

- [Página inicial](${site.url}/): visão geral, trabalhos, serviços, dúvidas e contato
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
