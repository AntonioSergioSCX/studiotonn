/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DO SITE
 *  Todos os textos, preços e contatos ficam aqui.
 *
 *  ⚠ EDITAR  = dado provisório. Troque antes de publicar.
 *  Nos títulos, *palavra* vira o destaque verde. Use só no hero e no CTA final.
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
  /*
   * Outros perfis que provam que o negócio existe (Google e IAs cruzam essas informações).
   * Não aparecem no site. ⚠ EDITAR: cole aqui o link do Perfil da Empresa no Google
   * (Compartilhar → copiar link) e o seu LinkedIn quando tiver.
   */
  profiles: [] as string[],
  /*
   * Região: só para o Google (título, descrição e dados estruturados).
   * O texto visível do site e a prévia de link (Instagram, WhatsApp) não citam cidades.
   */
  region: {
    name: 'Sul Fluminense',
    state: 'RJ',
    cities: ['Volta Redonda', 'Barra Mansa', 'Barra do Piraí', 'Vassouras'],
  },
  serviceArea: 'qualquer cidade',
  country: 'Brasil',
  responseTime: 'até 24h',
  cnpj: '', // opcional: '00.000.000/0001-00'
};

/** 700 → "R$ 700", 2700 → "R$ 2.700" */
export const brl = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

/** Link de WhatsApp com mensagem pronta. */
export const whatsappLink = (
  message = `Oi, ${site.owner}! Vim pelo site do Studio Tonn e quero um orçamento.`,
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

/** "A, B, C e D" */
const listPt = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} e ${items.at(-1)}` : items.join('');

export const citiesLabel = listPt(site.region.cities);

export const seo = {
  // Resultado do Google: com a região
  title: `Criação de Sites e Apps em ${site.region.cities[0]} | Studio Tonn`,
  description: `Sites e apps para clínicas, lojas, academias, escritórios e empresas de produto digital. Preço fechado, site no ar em até 1 semana. Atendimento em ${citiesLabel} (${site.region.state}) e online para qualquer cidade.`,
  // Prévia do link (Instagram, WhatsApp, redes): neutra, sem cidade
  shareTitle: 'Sites, apps e sistemas que trazem clientes | Studio Tonn',
  shareDescription: 'Design e desenvolvimento de sites, aplicativos e sistemas para o seu negócio. Preço fechado, site no ar em até 1 semana e atendimento online.',
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
  /* Título em duas linhas; os ícones entram depois das palavras e abrem espaço empurrando o texto */
  title: { before: 'Sites', middle: 'que trazem clientes', after: 'para o seu negócio' },
  lead: 'Cada projeto começa pelo que torna seu negócio único e transforma esse diferencial em uma experiência digital pensada.',
  cta: 'Quero meu orçamento',
  /* Mural de trabalhos em movimento abaixo do botão (vídeo com versão para celular) */
  stage: { video: '/video/hero-mural', label: 'Trabalhos recentes' },
};

export const marquee = [
  'Clínicas', 'Lojas', 'Academias', 'Escritórios', 'Restaurantes',
  'Salões', 'Imobiliárias', 'Startups', 'Apps', 'SaaS',
];

/* ── RESULTADOS ───────────────────────────────────────────── */

export const results = {
  eyebrow: '',
  title: 'Cliente que não te acha vai para o concorrente',
  lead: 'Quem procura o que você faz decide em segundos: pelo Google, pelo WhatsApp ou pelo link da sua bio. Um site feito para vender resolve as três frentes.',
  // Imagens em public/images: <nome>.webp (1x) e <nome>@2x.webp (2x), fundo #ecebe7 igual ao do card
  items: [
    {
      id: 'google',
      image: '/images/resultado-google',
      title: 'Te encontram no Google',
      text: 'Quando alguém da sua cidade procura pelo que você faz, é o seu negócio que aparece primeiro no Google.',
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
      title: 'Credibilidade para o seu negócio',
      text: 'Seu site passa profissionalismo e credibilidade para o seu cliente, que escolhe você antes de comparar preço.',
    },
  ],
};

/* ── PROJETOS ─────────────────────────────────────────────── */
// Cada projeto mostra só a capa: public/images/cases/<nome>.webp (1240×760) + <nome>-640.webp.
// `href` vazio = capa sem link; preencha com o endereço do site para abrir em nova aba.

export const cases = {
  label: 'Trabalhos recentes',
  title: 'Projetos que já estão no ar',
  lead: 'Alguns dos sites e apps que desenhei e construí.',
  cursor: 'Ver projeto',
  items: [
    {
      name: 'CompactArq',
      type: 'Site de arquitetura',
      result: 'Mais agendamentos',
      image: '/images/cases/compactarq',
      alt: 'Página inicial do site da CompactArq, escritório de arquitetura para pequenos negócios',
      bg: '#e9e1d4',
      color: '#2d2520',
      href: '',
    },
    {
      name: 'Olaria',
      type: 'Site de cerâmica artesanal',
      result: 'Mais visibilidade',
      image: '/images/cases/olaria',
      alt: 'Página inicial do site da Olaria, marca de cerâmica artesanal brasileira',
      bg: '#efe6da',
      color: '#b8673f',
      href: '',
    },
    {
      name: 'Constância',
      type: 'App de hábitos',
      result: 'Otimização interna',
      image: '/images/cases/constancia',
      alt: 'Telas do app Constância: progresso em quadradinhos, lista de hábitos e cadastro de novo hábito',
      bg: '#e3e7df',
      color: '#0b0b0b',
      href: '',
    },
  ],
};

/* ── COMO FUNCIONA ────────────────────────────────────────── */

export const process = {
  /* Passos lado a lado, ligados por uma linha; ícones em src/icons/passo-<n>.svg */
  eyebrow: '',
  title: 'Como funciona',
  lead: 'O processo é simples do primeiro “oi” ao site completo no ar.',
  cta: 'Marcar a conversa de 30 minutos',
  ctaMessage: 'Oi, Antonio! Quero marcar a conversa de 30 minutos sobre o meu projeto.',
  steps: [
    {
      icon: 'passo-1',
      title: 'Primeira conversa',
      text: 'Por vídeo ou WhatsApp, você me conta do seu negócio. Sem custo e sem compromisso.',
    },
    {
      icon: 'passo-2',
      title: 'Proposta com preço fechado',
      text: 'Em até 2 dias você recebe o que vai ser feito, o prazo e o valor. Sem surpresa no fim.',
    },
    {
      icon: 'passo-3',
      title: 'Construção do projeto',
      text: 'Você acompanha e aprova cada etapa. O que você vê na tela é exatamente o que vai ao ar.',
    },
    {
      icon: 'passo-4',
      title: 'Aprovação e publicação',
      text: 'Publico, cadastro no Google e fico 30 dias ajustando o que precisar, sem custo extra.',
    },
  ],
};

/* ── SERVIÇOS ────────────────────────────────────────────── */
// Preços de entrada ("a partir de") guardados em `price`. Para exibir no site, mude `showPrices` para true.

export const services = {
  eyebrow: '',
  title: 'O que eu construo para você',
  lead: 'Cada projeto tem um tamanho. Na primeira conversa eu entendo o que você precisa e, em até 2 dias, você recebe uma proposta com preço fechado.',
  showPrices: false,
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
      features: ['Página única ou site completo', 'WhatsApp, mapa e agendamento', 'Pronto para aparecer no Google', 'Domínio e hospedagem configurados'],
      featured: true,
    },
    {
      name: 'Aplicativo',
      price: 2700,
      priceNote: 'MVP enxuto. Cresce conforme o tamanho do app.',
      desc: 'Um app no celular dos seus clientes para agendar, comprar ou acompanhar pedidos.',
      time: 'MVP em 1 a 3 semanas',
      features: ['iPhone e Android', 'Pagamentos e notificações', 'Publicação na App Store e Google Play', 'Acompanhamento depois do lançamento'],
      featured: false,
    },
    {
      name: 'Sistema',
      price: 2000,
      priceNote: 'MVP enxuto. Cresce conforme o tamanho do sistema.',
      desc: 'Um painel sob medida para organizar agenda, clientes, estoque e financeiro num lugar só.',
      time: 'MVP em 2 semanas',
      features: ['Acesso pelo navegador, de onde estiver', 'Feito para o jeito que sua empresa trabalha', 'Acessos separados para a equipe', 'Relatórios para decidir com clareza'],
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
  eyebrow: '',
  title: 'Quem desenha é quem constrói',
  lead: 'Conheça quem vai construir cada detalhe do seu projeto.',
  paragraphs: [
    `Oi, eu sou o ${site.owner}. Há ${site.years} anos crio produtos digitais, de sites para negócios do bairro a apps e sistemas de startup usados por milhares de pessoas e grandes marcas.`,
    'Como eu desenho e também programo, nada se perde no caminho: o que você aprova é exatamente o que vai ao ar. E você fala sempre comigo, sem atendente, sem intermediário.',
  ],
  /* Foto com os selos (Atendimento personalizado, Clientes +14), exportada do Figma. Nome e cargo ficam em texto. */
  card: '/images/quem-faz',
  name: 'Antônio Sérgio',
  role: 'Product Designer & Design Engineer',
  photo: '/images/antonio.webp?v=3', // versão @2x ao lado, para telas retina. Vazio = monograma.
  photoAlt: `${site.owner}, ${site.role} do Studio Tonn`,
  facts: [
    { value: `+${site.years}`, label: 'Anos de experiência' },
    { value: '24h', label: 'para ter sua primeira prévia' },
  ],
  // Fora do layout novo; guardado para voltar quando houver uma área de depoimentos.
  testimonial: {
    quote: 'Em um mês o site já estava no ar e o telefone parou de tocar só para perguntar preço. Agora o cliente chega decidido.',
    author: 'Allana Santos',
    business: 'CompactArq',
  },
};

/* ── DÚVIDAS ──────────────────────────────────────────────── */

export const faq = {
  eyebrow: 'Dúvidas',
  title: 'Perguntas que todo mundo faz.',
  aside: 'Não achou a sua?',
  asideCta: 'Pergunte no WhatsApp',
  items: [
    {
      q: 'Já tenho Instagram. Preciso mesmo de um site?',
      a: 'O Instagram mostra o seu trabalho para quem já te segue. O site é o que aparece para quem ainda não te conhece e procura no Google, e é o link da bio que leva direto para o orçamento no WhatsApp. Um completa o outro.',
    },
    {
      q: 'Preciso entender de tecnologia?',
      a: 'Não. Eu cuido de tudo: domínio, hospedagem, Google e a parte técnica. Você só precisa me contar do seu negócio e aprovar as etapas.',
    },
    {
      q: 'Quanto custa?',
      a: 'Depende do tamanho do projeto. Na primeira conversa, sem custo, eu entendo o que você precisa e em até 2 dias envio uma proposta com preço fechado. O valor combinado é o valor final.',
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
      q: 'E se eu não gostar do resultado?',
      a: 'Você aprova cada etapa antes de eu seguir para a próxima, então não tem surpresa no fim. E depois que o site vai ao ar, são 30 dias de ajustes sem custo extra.',
    },
    {
      q: 'O site fica no meu nome?',
      a: 'Sim. Domínio, código e todos os acessos ficam no seu nome. Se um dia quiser trocar de profissional, leva tudo com você.',
    },
    {
      q: 'Você atende a minha cidade?',
      a: 'Sim. O atendimento é todo online, por vídeo e WhatsApp, então atendo negócios de qualquer cidade com o mesmo cuidado e o mesmo prazo.',
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
  cta: 'Receber minha proposta',
  reassurance: 'Primeira conversa sem custo e proposta em até 2 dias',
};

export const footer = {
  tagline: 'Sites e apps que trazem clientes.',
  regionText: 'Atendimento online, para negócios de qualquer cidade.',
};
