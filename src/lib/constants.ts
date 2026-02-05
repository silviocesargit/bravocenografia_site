// ============ SITE CONFIG ============
export const SITE_CONFIG = {
  name: "Bravo Cenografia",
  description: "Cenografia com identidade, impacto e execução completa",
  url: "https://bravocenografia.com",
  ogImage: "/images/branding/logo.png",
}

// ============ NAVEGAÇÃO ============
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
]

// ============ CONTATO E REDES ============
export const CONTACT_INFO = {
  phone: "+55 82 99642-0931",
  phoneClean: "5582996420931",
  whatsapp: "https://wa.me/5582996420931?text=Oi%20Bravo!%20Gostaria%20de%20solicitar%20um%20orçamento.",
  email: "contato@bravocenografia.com",
  address: {
    street: "Rua Brasília, 444",
    neighborhood: "Bairro Brasília",
    city: "Arapiraca",
    state: "Alagoas",
    country: "Brasil",
    full: "Rua Brasília, 444 – Bairro Brasília, Arapiraca – AL",
  },
}

export const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/bravocenografia?igsh=MTFpcGVwazUwOHVjaQ==",
  instagram_handle: "@bravocenografia",
  whatsapp: CONTACT_INFO.whatsapp,
}

// ============ TEXTOS PRINCIPAIS ============
export const HERO_TEXT = {
  headline: "Cenografia que transforma ideias em experiências reais",
  subheadline: "Criamos cenografias impactantes, com identidade, técnica e acabamento, do projeto 3D à instalação final.",
  description: "Somos uma empresa nordestina apaixonada por criar ambientes que impressionam, valorizam marcas e tornam cada evento inesquecível.",
  cta_budget: "Solicitar um orçamento",
  cta_portfolio: "Conhecer nossos projetos",
}

export const ABOUT_TEXT = {
  title: "Quem somos",
  description: "A Bravo Cenografia é uma empresa nordestina que vive a criação de perto. A gente ama o que faz — e isso aparece em cada detalhe do projeto.\n\nMais do que montar estruturas, criamos experiências visuais, transformando espaços em cenários que comunicam, envolvem e impactam.\n\nAtendemos todos os tipos de eventos e ambientes. Se existe a possibilidade de cenografar, a gente encara como desafio — seja um palco, um stand, uma ativação, um ponto de venda ou um espaço totalmente fora do padrão.",
  impact: "Cenografia não é só estética. É identidade, técnica e presença.",
}

export const MISSION_VISION_VALUES = {
  mission: {
    title: "🎯 Missão",
    description: "Criar e executar cenografias que transformam ideias em experiências reais, unindo criatividade, técnica e acabamento para entregar projetos marcantes e bem resolvidos.",
  },
  vision: {
    title: "👁️ Visão",
    description: "Ser referência em cenografia no Nordeste e no Brasil, reconhecida pela qualidade, impacto visual e excelência na execução, do conceito ao resultado final.",
  },
  values: [
    "Paixão pelo que fazemos",
    "Identidade acima de tudo",
    "Capricho e acabamento",
    "Compromisso com prazos",
    "Processo claro e profissional",
    "Respeito ao cliente e ao projeto",
    "Evolução constante",
  ],
}

export const SERVICES = [
  {
    id: "cenografia",
    title: "🎨 Cenografia e Experiências",
    items: [
      "Cenografia para eventos corporativos e institucionais",
      "Cenografia de palco (testeiras, painéis, backdrops e elementos 3D)",
      "Ambientes temáticos e imersivos",
      "Photo opportunity e espaços instagramáveis",
      "Pórticos, entradas cenográficas e estruturas especiais",
    ],
  },
  {
    id: "feiras",
    title: "🏗️ Feiras e Ativações",
    items: [
      "Stands promocionais e cenográficos",
      "Ativações de marca",
      "Lançamentos de produtos",
      "Experiências para o público",
    ],
  },
  {
    id: "trade",
    title: "🛍️ Trade Marketing e Pontos de Venda",
    items: [
      "Fachadas cenográficas",
      "Ambientação de PDV",
      "Comunicação visual de impacto",
      "Materiais promocionais e displays",
    ],
  },
  {
    id: "design",
    title: "🧠 Projeto, Design e Execução",
    items: [
      "Briefing e conceituação",
      "Modelagem 3D e plantas técnicas",
      "Design aplicado à cenografia",
      "Fabricação e produção completa",
      "Instalação e desmontagem",
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Briefing",
    description: "Entendemos objetivos, identidade da marca, público, espaço, prazos e orçamento.",
  },
  {
    step: 2,
    title: "Levantamento técnico",
    description: "Análise do local, medidas, estrutura e necessidades específicas.",
  },
  {
    step: 3,
    title: "Conceito criativo",
    description: "Definição da ideia, linguagem visual e proposta cenográfica.",
  },
  {
    step: 4,
    title: "Projeto 3D",
    description: "Desenvolvimento do modelo 3D para visualização completa do resultado.",
  },
  {
    step: 5,
    title: "Ajustes e aprovação",
    description: "Refinamos o projeto até a aprovação final.",
  },
  {
    step: 6,
    title: "Projeto técnico e produção",
    description: "Planejamento estrutural, escolha de materiais e cronograma.",
  },
  {
    step: 7,
    title: "Fabricação",
    description: "Produção com padrão, acabamento e controle de qualidade.",
  },
  {
    step: 8,
    title: "Instalação",
    description: "Montagem no local com equipe especializada.",
  },
  {
    step: 9,
    title: "Entrega final",
    description: "Revisão, ajustes e entrega pronta para o evento acontecer.",
  },
]

export const EVENT_TYPES = {
  title: "Onde a Bravo atua",
  description: "Trabalhamos com todos os tipos de eventos e espaços onde seja possível criar cenografia:",
  list: "Eventos corporativos, feiras, stands, ativações, inaugurações, festas, shows, arenas esportivas, ambientes comerciais, ações promocionais, palcos, PDV e projetos especiais.",
  impact: "Se dá pra transformar o espaço, a Bravo faz acontecer.",
}

export const CTA_FINAL = {
  title: "Vamos criar algo marcante juntos?",
  description: "Conte pra gente sua ideia. A gente transforma em cenografia.",
  cta: "Falar com a Bravo no WhatsApp",
}