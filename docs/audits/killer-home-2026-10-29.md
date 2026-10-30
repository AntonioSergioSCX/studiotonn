# Killer: página inicial (studiotonn.com.br)

**Tier** T2 rota (página de venda) · **Nota** 78/100 · **Veredito** vai para o ar com itens abertos
**Superfície** A aquisição (quem ainda não é cliente)

## Decisões pendentes (do Antonio, não minhas)

1. **Palavra verde no título de cada seção.** É a identidade visual, mas a skill pede que a ênfase venha da frase, não da cor (catálogo 48). Recomendação: manter só no H1 do hero e no CTA final e tirar das outras cinco seções.
2. **Passos em escada (catálogo 30).** Ficaram por pedido explícito. A skill aceita: são 4 itens numa página de venda, não uma lista de trabalho.
3. **Luz verde se mexendo no card Site.** Também foi pedido explícito. Com as faixas do hero agora paradas, é o único movimento contínuo da página além do carrossel.

## Portão

| Detector | Antes | Depois |
|---|---|---|
| impeccable (cara de IA) | 0 | 0 |
| token (fallback da skill) | 0 | 0 |
| ruído (noise-scan) | 2 (ícones desenhados à mão) | 0 |
| texto (copy-lint) | 5 (negação no fim, separador ·) | 0 |
| estouro lateral em 390px | 0 | 0 |
| erros no console | 0 | 0 |

Os detectores leem `.tsx`/`.jsx`. Para rodá-los, os `.astro` foram copiados como `.tsx`, já que a sintaxe é a mesma.

## Slop corrigido

| # | Catálogo | Onde | Correção |
|---|---|---|---|
| 1 | ícone desenhado à mão (LEI) | `ui/Icon.astro`, `CaseCarousel.astro`, `Marquee.astro` | Phosphor (`@phosphor-icons/core`), embutido no build |
| 2 | 57 mono em tudo | rótulos, tipo do case, prazos, preços, contagem dos passos | fonte do texto com `tabular-nums`; a fonte Geist Mono saiu do site (um download a menos) |
| 3 | 13 todos os rótulos gritando | rótulo acima de cada título (caixa alta) | texto normal, verde, sem caixa alta |
| 4 | 56 seção numerada | `001/002…` nos títulos, `01/02/03` nos planos | removido; o número ficou só nos passos, onde a ordem importa |
| 5 | 47 etiqueta em tudo | pílula em volta de cada rótulo de seção | sem pílula |
| 6 | 32 fundo de pontinhos | hero, card Site, CTA final | removido; ficaram as luzes grandes |
| 7 | zoom no hover (proibição) | setas do carrossel, imagem dos resultados, ícone do botão, ícones das garantias | cor e sombra, deslocamento ou leve giro |
| 8 | 41 tudo se mexendo ao mesmo tempo | faixas verdes do hero animando junto com o carrossel e a troca de frase | faixas paradas; o carrossel é o foco de movimento |
| 9 | 53 caixa em volta de tudo + 6 espaçamento igual | garantias em 4 caixas, a 16px dos planos (mesmo espaço que entre os planos) | sem caixa, em grupo próprio a 40–64px |
| 10 | voz | "Feito para vender, não só para ficar bonito." / separadores `·` | "Feito para vender." / "Site de arquitetura", vírgulas |

Exceção escrita no código: vidro dos arcos do hero (`backdrop-filter`). Ele passa por cima dos feixes e das faixas, então o desfoque existe.

## Interrogatório (bloco fixo F1–F6)

- **F1 reaproveitamento:** um único `Icon` atende todos os ícones. `SectionHead` continua sendo o único cabeçalho, mas `Process` tem um próprio (`Process.astro:16`), e vale unificar.
- **F2 consistência:** o rótulo de seção agora é igual em todas as seções (texto verde). Antes eram pílula mono no `SectionHead` e pílula com ponto no `Process`.
- **F3 responsivo e desempenho:** sem estouro em 390px; uma fonte a menos; menos camadas animadas no hero.
- **F4 fluxo para o cliente:** o hero mostra a prova (cases) logo depois do CTA, e é a ordem certa para quem chega do Instagram.
- **F5 o que esconder:** a faixa de "prova" abaixo do hero repete o que o Sobre diz (anos, 1 pessoa, preço fechado). É candidata a sair.
- **F6 o que falta para nível Vale do Silício:** prova com número real nos cases (ex.: "+40% de agendamentos"), em vez de "Mais agendamentos".

Não rodado: as 12 perguntas do T2 e o teste com o servidor fora do ar (não se aplica a um site estático). Isso entra como desconto na nota.
