/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DO SITE
 *  Todos os textos, preços e contatos ficam aqui.
 *
 *  ⚠ EDITAR  = dado provisório. Troque antes de publicar.
 *  Nos títulos, *palavra* vira o destaque em itálico verde.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Studio Tonn',
  url: 'https://studiotonn.com.br', // ⚠ EDITAR: domínio final
  owner: 'Antonio',
  ownerFullName: 'Antonio Sergio', // aparece só para Google e IAs. Vazio = usa `owner`.
  role: 'Design Engineer',
  years: 6,
  whatsapp: '5524992090397', // 55 + DDD + número, só dígitos
  phoneDisplay: '(24) 99209-0397',
  email: 'antoniosergio.dsn@gmail.com',
  social: [
    { label: '@studio.tonn', network: 'Instagram', href: 'https://www.instagram.com/studio.tonn/' },
  ],
  /* Atendimento presencial nestas cidades (SEO local) e online no resto do país. */
  region: {
    name: 'Sul Fluminense', // nome da região como aparece nos textos
    state: 'RJ',
    cities: ['Volta Redonda', 'Barra Mansa', 'Barra do Piraí', 'Vassouras'],
  },
  serviceArea: 'todo o Brasil',
  country: 'Brasil',
  responseTime: 'até 24h',
  cnpj: '', // opcional: '00.000.000/0001-00'
};

/** "A, B, C e D" */
const listPt = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} e ${items.at(-1)}` : items.join('');

export const citiesLabel = listPt(site.region.cities);

/** 700 → "R$ 700", 2700 → "R$ 2.700" */
export const brl = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

/** Link de WhatsApp com mensagem pronta. */
export const whatsappLink = (
  message = `Oi, ${site.owner}! Vim pelo site do Studio Tonn e quero um orçamento.`,
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const seo = {
  title: `Sites e apps em ${site.region.cities[0]} e ${site.region.name} | Studio Tonn`,
  description: `Sites e apps para clínicas, lojas, academias, escritórios e empresas de produto digital. Preço fechado, site no ar em até 1 semana. Atendimento presencial em ${citiesLabel} (${site.region.state}) e online em ${site.serviceArea}.`,
  ogImage: '/og.png',
};

export const nav = [
  { label: 'Resultados', href: '#resultados' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

/* ── HERO ─────────────────────────────────────────────────── */

export const hero = {
  titleLines: ['Sites que trazem', '*clientes* para'],
  fallbackPhrase: 'o seu negócio',
  lead: 'Eu desenho e construo o site, o aplicativo ou o sistema do seu negócio, do começo ao fim. Você fala direto com quem faz e recebe preço fechado antes de começar.',
  cta: 'Quero meu orçamento',
  proof: [
    { value: `${site.years} anos`, label: 'criando produtos digitais' },
    { value: '1 pessoa', label: 'do desenho ao site no ar' },
    { value: 'Preço fechado', label: 'antes de começar' },
  ],
  /* O fim do título passa uma vez por cada tipo de negócio e para em "o seu negócio." */
  phrases: ['a sua clínica.', 'a sua loja.', 'a sua academia.', 'o seu escritório.', 'o seu produto.'],
};

export const marquee = [
  'Clínicas', 'Lojas', 'Academias', 'Escritórios', 'Restaurantes',
  'Salões', 'Imobiliárias', 'Startups', 'Apps', 'SaaS',
];

/* ── RESULTADOS ───────────────────────────────────────────── */

export const results = {
  eyebrow: 'O que muda no seu negócio',
  title: 'Feito para *vender*, não só para ficar bonito.',
  lead: 'Site bonito que ninguém encontra não paga a conta. Cada detalhe é pensado para uma coisa: transformar quem visita em cliente.',
  // Imagens em public/images: <nome>.webp (480px) e <nome>@2x.webp (960px)
  items: [
    {
      id: 'google',
      image: '/images/resultado-google',
      title: 'Te encontram no Google',
      text: 'Quando alguém da sua cidade procura pelo que você faz, é o seu negócio que aparece.',
    },
    {
      id: 'whatsapp',
      image: '/images/resultado-whatsapp',
      title: 'Chamam no WhatsApp',
      text: 'Botões no lugar certo levam a pessoa direto para a conversa com você. Menos curioso, mais cliente.',
    },
    {
      id: 'trust',
      image: '/images/resultado-confianca',
      title: 'Confiam de primeira',
      text: 'Abre rápido até no 4G e passa profissionalismo. O cliente escolhe você antes de comparar preço.',
    },
  ],
};

/* ── CASES (carrossel do topo) ───────────────────────────── */
// Cada case mostra uma imagem real:
//   `image`   → print do site (public/images/cases/<nome>.webp + <nome>-640.webp), numa janela de navegador
//   `screens` → telas do app (public/images/cases/<nome>-1.webp…), rolando de lado dentro de celulares

export const cases = {
  label: 'Trabalhos recentes',
  items: [
    {
      name: 'CompactArq',
      type: 'Site · Arquitetura',
      result: 'Mais agendamentos',
      image: '/images/cases/compactarq',
      alt: 'Página inicial do site da CompactArq, escritório de arquitetura para pequenos negócios',
      bg: '#e9e1d4',
      color: '#2d2520',
      href: '',
    },
    {
      name: 'Olaria',
      type: 'Site · Cerâmica artesanal',
      result: 'Mais visibilidade',
      image: '/images/cases/olaria',
      alt: 'Página inicial do site da Olaria, marca de cerâmica artesanal brasileira',
      bg: '#efe6da',
      color: '#b8673f',
      href: '',
    },
    {
      name: 'Constância',
      type: 'App · Hábitos',
      result: 'Otimização interna',
      screens: ['/images/cases/constancia-1', '/images/cases/constancia-2', '/images/cases/constancia-3', '/images/cases/constancia-4'],
      alt: 'Telas do app Constância: progresso em quadradinhos, lista de hábitos e cadastro de novo hábito',
      bg: '#e3e7df',
      color: '#0b0b0b',
      href: '',
    },
  ],
};

/* ── COMO FUNCIONA ────────────────────────────────────────── */

export const process = {
  eyebrow: 'Como funciona',
  title: 'Simples do *primeiro oi* ao site no ar.',
  steps: [
    {
      icon: '/icons/passo-conversa.webp?v=2',
      title: 'Conversa de 30 minutos',
      text: 'Presencial ou por vídeo, como for melhor para você. Você me conta do seu negócio. Sem custo e sem compromisso.',
    },
    {
      icon: '/icons/passo-proposta.webp?v=2',
      title: 'Proposta com preço fechado',
      text: 'Em até 2 dias você recebe o que vai ser feito, o prazo e o valor. Sem surpresa no fim.',
    },
    {
      icon: '/icons/passo-construo.webp?v=2',
      title: 'Eu desenho e construo',
      text: 'Você acompanha e aprova cada etapa. O que você vê na tela é exatamente o que vai ao ar.',
    },
    {
      icon: '/icons/passo-no-ar.webp?v=2',
      title: 'No ar e no Google',
      text: 'Publico, cadastro no Google e fico 30 dias ajustando o que precisar, sem custo extra.',
    },
  ],
};

/* ── SERVIÇOS ────────────────────────────────────────────── */
// Preço de entrada ("a partir de"); o valor final sai na proposta, conforme tamanho e complexidade.

export const services = {
  eyebrow: 'Serviços',
  title: 'O que eu *construo* para você.',
  lead: 'Cada projeto tem um tamanho. Os valores abaixo são o ponto de partida: na primeira conversa eu entendo o que você precisa e, em até 2 dias, você recebe uma proposta com preço fechado.',
  pricePrefix: 'a partir de',
  featuredBadge: 'Mais pedido',
  cta: 'Pedir orçamento',
  items: [
    {
      name: 'Site',
      price: 700,
      priceNote: 'Landing page. Mais páginas ou integrações, sob proposta.',
      desc: 'Para o seu negócio aparecer no Google e transformar visita em conversa no WhatsApp.',
      time: 'No ar em até 1 semana',
      features: ['Landing page ou site completo', 'WhatsApp, mapa e agendamento', 'Pronto para aparecer no Google', 'Domínio e hospedagem configurados'],
      featured: true,
    },
    {
      name: 'Sistema',
      price: 2000,
      priceNote: 'MVP enxuto. Cresce conforme o tamanho do sistema.',
      desc: 'Um painel sob medida para organizar agenda, clientes, estoque e financeiro num lugar só.',
      time: 'MVP em ~2 semanas',
      features: ['Acesso pelo navegador, de onde estiver', 'Feito para o jeito que sua empresa trabalha', 'Acessos separados para a equipe', 'Relatórios para decidir com clareza'],
      featured: false,
    },
    {
      name: 'Aplicativo',
      price: 2700,
      priceNote: 'MVP enxuto. Cresce conforme o tamanho do app.',
      desc: 'Um app no celular dos seus clientes para agendar, comprar ou acompanhar pedidos.',
      time: 'MVP em ~1 a 3 semanas',
      features: ['iPhone e Android', 'Pagamentos e notificações', 'Publicação na App Store e Google Play', 'Acompanhamento depois do lançamento'],
      featured: false,
    },
  ],
  guarantees: [
    { icon: '/icons/garantia-preco-fechado.webp?v=2', title: 'Preço fechado', text: 'O valor da proposta é o valor final.' },
    { icon: '/icons/garantia-no-seu-nome.webp?v=2', title: 'Tudo no seu nome', text: 'Domínio, código e acessos são seus.' },
    { icon: '/icons/garantia-30-dias.webp?v=2', title: '30 dias de ajustes', text: 'Depois de no ar, sem custo extra.' },
    { icon: '/icons/garantia-contrato.webp?v=2', title: 'Contrato e nota', text: 'Tudo formalizado, do jeito certo.' },
  ],
};

/* ── QUEM FAZ ─────────────────────────────────────────────── */

export const about = {
  eyebrow: 'Quem faz',
  title: 'Quem desenha é *quem constrói*.',
  paragraphs: [
    `Oi, eu sou o ${site.owner}. Há ${site.years} anos crio produtos digitais, de sites para negócios do bairro a apps usados por milhares de pessoas.`,
    'Como eu desenho e também programo, nada se perde no caminho: o que você aprova é exatamente o que vai ao ar. E você fala sempre comigo, sem atendente, sem intermediário.',
  ],
  photo: '/images/antonio.webp?v=3', // versão @2x ao lado, para telas retina. Vazio = monograma.
  photoAlt: `${site.owner}, ${site.role} do Studio Tonn`,
  facts: [
    { value: `${site.years}`, label: 'anos criando produtos digitais' },
    { value: site.responseTime.replace('até ', ''), label: 'para responder sua mensagem' },
  ],
  testimonial: {
    quote: 'Em um mês o site já estava no ar e o telefone parou de tocar só para perguntar preço. Agora o cliente chega decidido.',
    author: 'Allana Santos',
    business: 'CompactArq, Viçosa – MG',
  },
};

/* ── DÚVIDAS ──────────────────────────────────────────────── */

export const faq = {
  eyebrow: 'Dúvidas',
  title: 'Perguntas que *todo mundo* faz.',
  aside: 'Não achou a sua?',
  asideCta: 'Pergunte no WhatsApp',
  items: [
    {
      q: 'Preciso entender de tecnologia?',
      a: 'Não. Eu cuido de tudo: domínio, hospedagem, Google e a parte técnica. Você só precisa me contar do seu negócio e aprovar as etapas.',
    },
    {
      q: 'Quanto custa?',
      a: 'Sites (landing page) a partir de R$ 700, sistemas a partir de R$ 2.000 e aplicativos a partir de R$ 2.700. O valor final depende do tamanho e da complexidade: na primeira conversa, sem custo, eu entendo o que você precisa e em até 2 dias envio uma proposta com preço fechado. O valor combinado é o valor final.',
    },
    {
      q: 'Quanto tempo leva para ficar pronto?',
      a: 'Um site fica no ar em até 1 semana. Aplicativos e sistemas têm a primeira versão (MVP) entre 1 e 3 semanas. O prazo exato vem na proposta.',
    },
    {
      q: 'O site vai aparecer no Google?',
      a: `Sim. O site já sai preparado para o Google, e eu cadastro o seu negócio no Google Meu Negócio para você aparecer quando alguém da sua região procura pelo que você faz.`,
    },
    {
      q: 'Você atende a minha cidade?',
      a: `Atendo presencialmente em ${citiesLabel}, no ${site.region.name}. Para empresas de outras cidades, o atendimento é online, por vídeo e WhatsApp, com o mesmo cuidado e o mesmo prazo.`,
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Metade para começar e metade na entrega, por Pix ou boleto. Dá para parcelar no cartão. Tudo com contrato e nota fiscal.',
    },
  ],
};

/* ── CTA FINAL ────────────────────────────────────────────── */

export const finalCta = {
  kicker: 'Você leu até aqui. Bora?',
  title: 'Vamos colocar o seu negócio *no mapa*.',
  text: `Me chama no WhatsApp e em ${site.responseTime} você tem uma ideia clara de preço e prazo. Sem compromisso.`,
  cta: 'Chamar no WhatsApp',
  reassurance: 'Primeira conversa sem custo · Preço fechado',
};

export const footer = {
  tagline: 'Sites e apps que trazem clientes.',
  regionText: `Presencial em ${citiesLabel} (${site.region.state}). Online em ${site.serviceArea}.`,
};
