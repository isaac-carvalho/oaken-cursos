// Catálogo da plataforma Oaken Cursos.
// Cada curso novo entra aqui: uma entrada + (quando existir) a pasta do curso (ex: /oil/).
//
// status:
//   'available'   -> página construída, com link. Pode ser comprado/frequentado hoje.
//   'building'    -> material didáctico já gerado, página ainda por construir. Sem link.
//   'planned'     -> curso anunciado, ainda sem conteúdo. Sem link.
// Regra de honestidade: só entradas 'available' têm url. As outras NUNCA têm CTA de inscrição.

const AREAS = [
  {
    key: 'industria',
    accent: '#FF6B00',
    name: 'Indústria e Energia',
    note: 'Operação, manutenção e segurança em ambiente industrial.',
  },
  {
    key: 'construcao',
    accent: '#E8B33A',
    name: 'Construção',
    note: 'Execução e fiscalização de obra, adaptadas à realidade angolana.',
  },
  {
    key: 'gestao',
    accent: '#4E8FD1',
    name: 'Gestão e Administração',
    note: 'Profissões de escritório: contas, normas e obrigações legais.',
  },
  {
    key: 'logistica',
    accent: '#00A3A1',
    name: 'Comércio e Logística',
    note: 'Importação, desalfandegamento e cadeia de abastecimento.',
  },
];

const COURSES = [
  {
    id: 'oil',
    area: 'industria',
    brand: 'Oaken Oil',
    title: 'Técnico de Segurança e Operações Offshore',
    description: 'Segurança, sobrevivência no mar, procedimentos de emergência e operações da indústria petrolífera, para quem quer trabalhar em plataformas.',
    icon: 'fa-solid fa-oil-well',
    status: 'available',
    url: 'oil/index.html',
    backdrop: 'oil/img/hero-plataforma-offshore.jpg',
    poster: 'oil/img/cta-trabalhadores-offshore.jpg',
    stats: { modules: 17, lessons: 340, hours: 153, questions: 655 },
    featured: true,
  },
  {
    id: 'electrical',
    area: 'industria',
    brand: 'Oaken Electrical',
    title: 'Técnico de Instalações Eléctricas (Edição Angola)',
    description: 'Instalações residenciais, comerciais e industriais com RTIEBT e IEC 60364, dimensionamento a 220/380V 50Hz e prática com EWS e CADe SIMU.',
    icon: 'fa-solid fa-bolt',
    status: 'available',
    url: 'electrical/index.html',
    backdrop: 'https://images.unsplash.com/photo-1621905251189-08b45249df7a?w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    stats: { modules: 18, lessons: 141, hours: 162, questions: 141 },
  },
  {
    id: 'hst',
    area: 'industria',
    title: 'Técnico de Segurança e Higiene no Trabalho (HST)',
    description: 'Legislação angolana de HST, avaliação de riscos, selecção e gestão de EPI, investigação de acidentes e documentação obrigatória.',
    icon: 'fa-solid fa-helmet-safety',
    status: 'planned',
    url: null,
    stats: null,
    pitch: 'Ter técnico de HST é obrigação legal da empresa — a procura vem da lei, não da moda.',
  },
  {
    id: 'edificacoes',
    area: 'construcao',
    title: 'Técnico em Edificações',
    description: 'Construção civil adaptada a Angola: leitura de projecto, materiais, processos construtivos, medições e acompanhamento de obra.',
    icon: 'fa-solid fa-trowel-bricks',
    status: 'building',
    url: null,
    stats: null,
    pitch: 'Material didáctico já produzido. A página do curso está a ser construída.',
  },
  {
    id: 'administrativo',
    area: 'gestao',
    title: 'Técnico Administrativo',
    description: 'Administração de empresas com fiscalidade angolana: rotinas administrativas, documentação, arquivo e obrigações junto da AGT.',
    icon: 'fa-solid fa-folder-open',
    status: 'building',
    url: null,
    stats: null,
    pitch: 'Material didáctico já produzido. A página do curso está a ser construída.',
  },
  {
    id: 'contabilidade',
    area: 'gestao',
    title: 'Contabilidade e Fiscalidade Angolana',
    description: 'IVA, IRT, obrigações declarativas e relação com a AGT, com os mapas e prazos que a empresa tem mesmo de cumprir.',
    icon: 'fa-solid fa-calculator',
    status: 'planned',
    url: null,
    stats: null,
    pitch: 'A regulação fiscal muda com frequência — cada alteração gera necessidade de reciclagem.',
  },
  {
    id: 'qualidade',
    area: 'gestao',
    title: 'Gestão da Qualidade (ISO 9001) e Auditoria',
    description: 'Sistemas de gestão da qualidade, auditoria interna, tratamento de não-conformidades e melhoria contínua.',
    icon: 'fa-solid fa-clipboard-check',
    status: 'planned',
    url: null,
    stats: null,
    pitch: 'Certificação ISO 9001 exige auditores internos formados dentro da própria organização.',
  },
  {
    id: 'aduaneiro',
    area: 'logistica',
    title: 'Despacho Aduaneiro e Logística',
    description: 'Incoterms, pautas aduaneiras, documentação de importação, procedimentos junto da AGT e das Alfândegas e gestão da cadeia de abastecimento.',
    icon: 'fa-solid fa-ship',
    status: 'planned',
    url: null,
    stats: null,
    pitch: 'Angola importa quase tudo o que consome — cada contentor passa por quem sabe despachar.',
  },
];
