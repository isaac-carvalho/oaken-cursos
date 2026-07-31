// Catálogo da plataforma Oaken Cursos.
// Cada curso novo entra aqui: uma entrada + a pasta do curso (ex: /oil/).
const COURSES = [
  {
    id: 'oil',
    slug: 'oil',
    title: 'Oaken Oil',
    tagline: 'Técnico de Segurança e Operações Offshore',
    description: 'Formação técnico-profissionalizante completa para quem quer trabalhar em plataformas offshore: segurança, sobrevivência no mar, procedimentos de emergência e operações da indústria petrolífera.',
    backdrop: 'oil/img/hero-plataforma-offshore.jpg',
    poster: 'oil/img/cta-trabalhadores-offshore.jpg',
    url: 'oil/index.html',
    badge: 'Offshore',
    stats: { modules: 17, lessons: 340, hours: 153, questions: 655 },
    featured: true,
  },
  {
    id: 'electrical',
    slug: 'electrical',
    title: 'Oaken Electrical',
    tagline: 'Técnico de Instalações Eléctricas (Edição Angola)',
    description: 'Formação técnico-profissionalizante em instalações eléctricas residenciais, comerciais e industriais, com normas RTIEBT e IEC 60364, dimensionamento a 220/380V 50Hz e prática com software EWS e CADe SIMU.',
    backdrop: 'https://images.unsplash.com/photo-1621905251189-08b45249df7a?w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    url: 'electrical/index.html',
    badge: 'Elétrica',
    stats: { modules: 18, lessons: 141, hours: 162, questions: 141 },
  },
];
