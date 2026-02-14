import { Metadata } from 'next'

const BASE_URL = 'https://bravocenografia-site.vercel.app' // Atualize com seu domínio real

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Bravo Cenografia | Cenografia e Ambientação para Eventos',
    template: '%s | Bravo Cenografia',
  },
  description: 'Criamos experiências únicas através da cenografia. Especialistas em eventos corporativos, stands, festivais e ativações de marca em Arapiraca - AL.',
  keywords: ['cenografia', 'ambientação eventos', 'stands', 'decoração eventos', 'eventos corporativos', 'Arapiraca', 'Alagoas', 'cenografia profissional'],
  authors: [{ name: 'Bravo Cenografia' }],
  creator: 'Bravo Cenografia',
  publisher: 'Bravo Cenografia',
  icons: {
    icon: '/images/LOGO_BRAVO.png',
    apple: '/images/LOGO_BRAVO.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    title: 'Bravo Cenografia | Cenografia e Ambientação para Eventos',
    description: 'Criamos experiências únicas através da cenografia. Especialistas em eventos corporativos, stands, festivais e ativações de marca.',
    siteName: 'Bravo Cenografia',
    images: [
      {
        url: '/images/LOGO_BRAVO.png',
        width: 1200,
        height: 630,
        alt: 'Bravo Cenografia Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bravo Cenografia | Cenografia e Ambientação para Eventos',
    description: 'Criamos experiências únicas através da cenografia.',
    images: ['/images/LOGO_BRAVO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adicione seus códigos de verificação aqui depois
    // google: 'seu-codigo-aqui',
  },
}

export const pages = {
  home: {
    title: 'Bravo Cenografia | Cenografia e Ambientação para Eventos',
    description: 'Criamos experiências únicas através da cenografia. Especialistas em eventos corporativos, stands, festivais e ativações de marca em Arapiraca - AL.',
    keywords: 'cenografia, ambientação eventos, stands, decoração eventos, Arapiraca',
  },
  portfolio: {
    title: 'Portfólio',
    description: 'Veja nossos projetos de cenografia: eventos corporativos, stands, festivais e ativações de marca. Cases de sucesso da Bravo Cenografia.',
    keywords: 'portfólio cenografia, projetos eventos, cases cenografia, trabalhos realizados',
  },
  servicos: {
    title: 'Serviços',
    description: 'Oferecemos cenografia para eventos corporativos, stands para feiras, decoração de festivais e ativações de marca. Consultoria completa em ambientação.',
    keywords: 'serviços cenografia, cenografia eventos, stands feiras, decoração festivais, consultoria eventos',
  },
  sobre: {
    title: 'Sobre Nós',
    description: 'Conheça a Bravo Cenografia: nossa história, missão, visão e valores. Equipe especializada em criar experiências memoráveis através da cenografia.',
    keywords: 'sobre bravo cenografia, equipe cenografia, empresa eventos, Arapiraca Alagoas',
  },
  contato: {
    title: 'Contato',
    description: 'Entre em contato com a Bravo Cenografia. Estamos em Arapiraca - AL. Faça seu orçamento para cenografia de eventos, stands e decoração.',
    keywords: 'contato bravo cenografia, orçamento cenografia, cenografia Arapiraca, eventos Alagoas',
  },
}
