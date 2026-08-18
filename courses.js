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
    "key": "industria",
    "accent": "#FF6B00",
    "name": "Indústria e Energia",
    "note": "Operação, manutenção e segurança em ambiente industrial."
  },
  {
    "key": "construcao",
    "accent": "#E8B33A",
    "name": "Construção",
    "note": "Execução e fiscalização de obra, adaptadas à realidade angolana."
  },
  {
    "key": "gestao",
    "accent": "#4E8FD1",
    "name": "Gestão e Administração",
    "note": "Profissões de escritório: contas, normas e obrigações legais."
  },
  {
    "key": "logistica",
    "accent": "#00A3A1",
    "name": "Comércio e Logística",
    "note": "Importação, desalfandegamento e cadeia de abastecimento."
  }
];

const COURSES = [
  {
    "id": "oil",
    "area": "industria",
    "brand": "Oaken Oil",
    "title": "Técnico de Segurança e Operações Offshore",
    "description": "Segurança, sobrevivência no mar, procedimentos de emergência e operações da indústria petrolífera, para quem quer trabalhar em plataformas.",
    "icon": "fa-solid fa-oil-well",
    "status": "available",
    "url": "oil/index.html",
    "backdrop": "oil/img/hero-plataforma-offshore.jpg",
    "poster": "oil/img/cta-trabalhadores-offshore.jpg",
    "stats": {
      "modules": 17,
      "lessons": 527,
      "hours": 527,
      "questions": 655
    },
    "featured": true,
    "cover": "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=1200&q=80",
    "accent": "#FF6B00",
    "programa": [
      {
        "n": 1,
        "titulo": "Fundamentos da Indústria do Petróleo e Gás"
      },
      {
        "n": 2,
        "titulo": "Plataformas, Embarcações e Estruturas Offshore"
      },
      {
        "n": 3,
        "titulo": "Segurança Offshore (BOSIET / HUET / HSE)"
      },
      {
        "n": 4,
        "titulo": "Primeiros Socorros, Resgate e Emergências Médicas"
      },
      {
        "n": 5,
        "titulo": "Sistemas Mecânicos (Motores, Bombas, Compressores)"
      },
      {
        "n": 6,
        "titulo": "Sistemas Eléctricos, Instrumentação e Controlo"
      },
      {
        "n": 7,
        "titulo": "Operações Submarinas e Completação de Poços"
      },
      {
        "n": 8,
        "titulo": "Manutenção, Confiabilidade e Análise de Falhas"
      },
      {
        "n": 9,
        "titulo": "Soft Skills, Comunicação e Factores Humanos"
      },
      {
        "n": 10,
        "titulo": "Legislação, Gestão Ambiental e Empregabilidade"
      },
      {
        "n": 11,
        "titulo": "Processamento de Hidrocarbonetos (Separação, Tratamento e Refino)"
      },
      {
        "n": 12,
        "titulo": "Automação Industrial e Indústria 4.0 no Offshore"
      },
      {
        "n": 13,
        "titulo": "Geologia de Reservatórios e Engenharia de Poços Avançada"
      },
      {
        "n": 14,
        "titulo": "Logística e Cadeia de Suprimentos Offshore"
      },
      {
        "n": 15,
        "titulo": "Energias Renováveis e Transição Energética no Offshore"
      },
      {
        "n": 16,
        "titulo": "Roustabout: Operações de Convés e Funções Operacionais Offshore"
      },
      {
        "n": 17,
        "titulo": "Pintura Industrial e Protecção Anticorrosiva Offshore"
      }
    ],
    "saidas": [
      "Roustabout / Operador de Convés",
      "Técnico de Segurança Offshore",
      "Assistente de Operações de Produção",
      "Pintor Industrial Offshore"
    ]
  },
  {
    "id": "electrical",
    "area": "industria",
    "brand": "Oaken Electrical",
    "title": "Técnico de Instalações Eléctricas (Edição Angola)",
    "description": "Instalações residenciais, comerciais e industriais com RTIEBT e IEC 60364, dimensionamento a 220/380V 50Hz e prática com EWS e CADe SIMU.",
    "icon": "fa-solid fa-bolt",
    "status": "available",
    "url": "electrical/index.html",
    "backdrop": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80",
    "poster": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    "stats": {
      "modules": 18,
      "lessons": 168,
      "hours": 168,
      "questions": 141
    },
    "cover": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80",
    "accent": "#00A3A1",
    "programa": [
      {
        "n": 1,
        "titulo": "Fundamentos da Electricidade"
      },
      {
        "n": 2,
        "titulo": "Legislação Eléctrica Angolana"
      },
      {
        "n": 3,
        "titulo": "RTIEBT — Partes 1 e 2"
      },
      {
        "n": 4,
        "titulo": "RTIEBT — Partes 3 e 4: Protecções"
      },
      {
        "n": 5,
        "titulo": "Dimensionamento de Condutores"
      },
      {
        "n": 6,
        "titulo": "Aterramento, Quadros e Projecto Residencial"
      },
      {
        "n": 7,
        "titulo": "Cargas Comerciais e Dimensionamento"
      },
      {
        "n": 8,
        "titulo": "Quadros de Distribuição Comerciais"
      },
      {
        "n": 9,
        "titulo": "SPDA — Protecção Contra Descargas Atmosféricas"
      },
      {
        "n": 10,
        "titulo": "Eficiência Energética e Qualidade de Energia"
      },
      {
        "n": 11,
        "titulo": "Instalações em Locais Especiais"
      },
      {
        "n": 12,
        "titulo": "Projecto Comercial Completo com EWS"
      },
      {
        "n": 13,
        "titulo": "Motores Eléctricos Industriais"
      },
      {
        "n": 14,
        "titulo": "Comandos Eléctricos e Diagramas"
      },
      {
        "n": 15,
        "titulo": "Inversores de Frequência e Soft-Starters"
      },
      {
        "n": 16,
        "titulo": "CLP — Controladores Lógicos Programáveis"
      },
      {
        "n": 17,
        "titulo": "Manutenção Industrial"
      },
      {
        "n": 18,
        "titulo": "Legislação, Licenciamento e Segurança Industrial"
      }
    ],
    "saidas": [
      "Electricista de Instalações",
      "Técnico de Projecto Eléctrico",
      "Técnico de Manutenção Industrial",
      "Instalador de Quadros e Comandos"
    ]
  },
  {
    "id": "hst",
    "area": "industria",
    "title": "Técnico de Segurança e Higiene no Trabalho (HST)",
    "description": "Legislação angolana de HST, avaliação de riscos, selecção e gestão de EPI, investigação de acidentes e documentação obrigatória.",
    "icon": "fa-solid fa-helmet-safety",
    "status": "planned",
    "url": null,
    "stats": null,
    "pitch": "Ter técnico de HST é obrigação legal da empresa — a procura vem da lei, não da moda.",
    "cover": "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?w=1200&q=80",
    "accent": "#D94F2B",
    "programa": [
      {
        "n": 1,
        "titulo": "Enquadramento Legal da Segurança e Saúde no Trabalho em Angola"
      },
      {
        "n": 2,
        "titulo": "Organização dos Serviços de SST e Comissões de Segurança na Empresa"
      },
      {
        "n": 3,
        "titulo": "Perigo, Risco, Acidente de Trabalho e Doença Profissional"
      },
      {
        "n": 4,
        "titulo": "Identificação de Perigos e Avaliação de Riscos: Métodos e Matrizes"
      },
      {
        "n": 5,
        "titulo": "Riscos Físicos: Ruído, Vibrações, Ambiente Térmico e Radiações"
      },
      {
        "n": 6,
        "titulo": "Riscos Químicos: Agentes, Fichas de Dados de Segurança e Controlo da Exposição"
      },
      {
        "n": 7,
        "titulo": "Riscos Biológicos, Higiene e Salubridade das Instalações"
      },
      {
        "n": 8,
        "titulo": "Ergonomia e Movimentação Manual de Cargas"
      },
      {
        "n": 9,
        "titulo": "Riscos Mecânicos e Segurança de Máquinas e Equipamentos"
      },
      {
        "n": 10,
        "titulo": "Risco Eléctrico e Trabalhos em Instalações Energizadas"
      },
      {
        "n": 11,
        "titulo": "Trabalhos de Alto Risco: Altura, Espaços Confinados e Trabalhos a Quente"
      },
      {
        "n": 12,
        "titulo": "Protecção Colectiva e Individual: Selecção, Distribuição e Controlo de EPI"
      },
      {
        "n": 13,
        "titulo": "Segurança Contra Incêndio, Meios de Extinção e Evacuação"
      },
      {
        "n": 14,
        "titulo": "Planos de Emergência e Primeiros Socorros no Local de Trabalho"
      },
      {
        "n": 15,
        "titulo": "Sinalização de Segurança e Comunicação de Riscos aos Trabalhadores"
      },
      {
        "n": 16,
        "titulo": "Investigação de Acidentes, Análise de Causas e Indicadores de Sinistralidade"
      },
      {
        "n": 17,
        "titulo": "Documentação Obrigatória, Inspecção do Trabalho e Auditorias de SST"
      },
      {
        "n": 18,
        "titulo": "Sistemas de Gestão de SST (ISO 45001) e Cultura de Segurança"
      }
    ],
    "saidas": [
      "Técnico de Segurança e Higiene no Trabalho",
      "Coordenador de Segurança em Obra",
      "Auditor Interno de SST",
      "Formador em Segurança no Trabalho"
    ]
  },
  {
    "id": "edificacoes",
    "area": "construcao",
    "title": "Técnico em Edificações",
    "description": "Construção civil adaptada a Angola: leitura de projecto, materiais, processos construtivos, medições e acompanhamento de obra.",
    "icon": "fa-solid fa-trowel-bricks",
    "status": "building",
    "url": null,
    "stats": null,
    "pitch": "Material didáctico já produzido. A página do curso está a ser construída.",
    "cover": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    "accent": "#E8B33A",
    "programa": [
      {
        "n": 1,
        "titulo": "A Construção Civil em Angola: Sector, Intervenientes e Enquadramento Legal"
      },
      {
        "n": 2,
        "titulo": "Matemática e Física Aplicadas à Construção"
      },
      {
        "n": 3,
        "titulo": "Desenho Técnico de Construção Civil"
      },
      {
        "n": 4,
        "titulo": "Leitura e Interpretação de Projectos: Arquitectura, Estrutura e Especialidades"
      },
      {
        "n": 5,
        "titulo": "AutoCAD 2D — Plantas, Cortes e Alçados"
      },
      {
        "n": 6,
        "titulo": "Modelação 3D e Introdução ao BIM (SketchUp e Revit)"
      },
      {
        "n": 7,
        "titulo": "Materiais de Construção: Agregados, Cimentos, Blocos e Madeiras Locais"
      },
      {
        "n": 8,
        "titulo": "Topografia e Implantação da Obra"
      },
      {
        "n": 9,
        "titulo": "Mecânica dos Solos e Fundações em Terrenos Tropicais"
      },
      {
        "n": 10,
        "titulo": "Betão Armado: Dosagem, Cofragem, Armaduras e Betonagem"
      },
      {
        "n": 11,
        "titulo": "Alvenarias e Sistemas Construtivos Correntes em Angola"
      },
      {
        "n": 12,
        "titulo": "Estruturas: Estabilidade e Pré-dimensionamento de Lajes, Vigas e Pilares"
      },
      {
        "n": 13,
        "titulo": "Instalações Eléctricas Prediais"
      },
      {
        "n": 14,
        "titulo": "Instalações Hidráulicas e Sanitárias: Água, Esgotos e Drenagem Pluvial"
      },
      {
        "n": 15,
        "titulo": "Coberturas, Revestimentos, Pinturas e Esquadrias"
      },
      {
        "n": 16,
        "titulo": "Segurança, Higiene e Gestão Ambiental no Estaleiro"
      },
      {
        "n": 17,
        "titulo": "Medições, Orçamentação e Planeamento de Obra"
      },
      {
        "n": 18,
        "titulo": "Fiscalização, Patologias, Reabilitação e Avaliação de Imóveis"
      }
    ],
    "saidas": [
      "Técnico de Edificações",
      "Desenhador Projectista",
      "Medidor-Orçamentista",
      "Fiscal de Obra",
      "Encarregado de Obra"
    ]
  },
  {
    "id": "administrativo",
    "area": "gestao",
    "title": "Técnico Administrativo",
    "description": "Administração de empresas com fiscalidade angolana: rotinas administrativas, documentação, arquivo e obrigações junto da AGT.",
    "icon": "fa-solid fa-folder-open",
    "status": "available",
    "url": "administrativo/index.html",
    "stats": {
      "modules": 16,
      "lessons": 352,
      "hours": 352,
      "questions": 0
    },
    "pitch": "16 dos 18 módulos já com aulas na plataforma. Os módulos 1 e 2 e os exames de módulo estão em produção.",
    "cover": "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1200&q=80",
    "accent": "#4E8FD1",
    "programa": [
      {
        "n": 1,
        "titulo": "Fundamentos da Administração"
      },
      {
        "n": 2,
        "titulo": "Comunicação Empresarial e Atendimento"
      },
      {
        "n": 3,
        "titulo": "Gestão de Recursos Humanos"
      },
      {
        "n": 4,
        "titulo": "Gestão Financeira e Contabilidade"
      },
      {
        "n": 5,
        "titulo": "Gestão de Marketing e Vendas"
      },
      {
        "n": 6,
        "titulo": "Gestão de Logística e Cadeia de Abastecimento"
      },
      {
        "n": 7,
        "titulo": "Gestão de Projectos"
      },
      {
        "n": 8,
        "titulo": "Gestão da Qualidade e Processos"
      },
      {
        "n": 9,
        "titulo": "Gestão de Pessoas e Liderança"
      },
      {
        "n": 10,
        "titulo": "Gestão Financeira Avançada"
      },
      {
        "n": 11,
        "titulo": "Gestão de Marketing e Vendas Avançada"
      },
      {
        "n": 12,
        "titulo": "Gestão de Operações e Processos"
      },
      {
        "n": 13,
        "titulo": "Gestão de Compras e Fornecimento"
      },
      {
        "n": 14,
        "titulo": "Gestão de Armazéns e Inventários"
      },
      {
        "n": 15,
        "titulo": "Gestão de Transportes e Frotas"
      },
      {
        "n": 16,
        "titulo": "Gestão da Segurança e Saúde no Trabalho"
      },
      {
        "n": 17,
        "titulo": "Gestão de Tecnologias de Informação"
      },
      {
        "n": 18,
        "titulo": "Empreendedorismo e Inovação em Angola"
      }
    ],
    "saidas": [
      "Técnico Administrativo",
      "Assistente de Recursos Humanos",
      "Assistente de Compras e Aprovisionamento",
      "Gestor de Escritório",
      "Prestador de Serviços Administrativos"
    ]
  },
  {
    "id": "contabilidade",
    "area": "gestao",
    "title": "Contabilidade e Fiscalidade Angolana",
    "description": "IVA, IRT, obrigações declarativas e relação com a AGT, com os mapas e prazos que a empresa tem mesmo de cumprir.",
    "icon": "fa-solid fa-calculator",
    "status": "available",
    "url": "contabilidade/index.html",
    "stats": {
      "modules": 3,
      "lessons": 32,
      "hours": 32,
      "questions": 0
    },
    "pitch": "3 módulos com aulas na plataforma: Fundamentos da Contabilidade, Fiscalidade Angolana e Aplicação Prática.",
    "cover": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80",
    "accent": "#2E6E9E",
    "programa": [
      {
        "n": 1,
        "titulo": "Fundamentos da Contabilidade"
      },
      {
        "n": 2,
        "titulo": "Fiscalidade Angolana"
      },
      {
        "n": 3,
        "titulo": "Aplicação Prática e Casos Reais"
      }
    ],
    "saidas": [
      "Técnico de Contabilidade",
      "Assistente Fiscal",
      "Técnico de Processamento Salarial",
      "Assistente de Contabilista Certificado",
      "Responsável Administrativo-Financeiro de PME"
    ]
  },
  {
    "id": "qualidade",
    "area": "gestao",
    "title": "Gestão da Qualidade (ISO 9001) e Auditoria",
    "description": "Sistemas de gestão da qualidade, auditoria interna, tratamento de não-conformidades e melhoria contínua.",
    "icon": "fa-solid fa-clipboard-check",
    "status": "planned",
    "url": null,
    "stats": null,
    "pitch": "Certificação ISO 9001 exige auditores internos formados dentro da própria organização.",
    "cover": "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?w=1200&q=80",
    "accent": "#6B5CA5",
    "programa": [
      {
        "n": 1,
        "titulo": "Fundamentos da Qualidade: Evolução, Conceitos e Custos da Não-Qualidade"
      },
      {
        "n": 2,
        "titulo": "A Família ISO 9000 e a Normalização em Angola (IANORQ)"
      },
      {
        "n": 3,
        "titulo": "Estrutura da ISO 9001 e a Estrutura Comum das Normas de Sistemas de Gestão"
      },
      {
        "n": 4,
        "titulo": "Contexto da Organização, Partes Interessadas e Âmbito do Sistema"
      },
      {
        "n": 5,
        "titulo": "Liderança, Política da Qualidade, Papéis e Responsabilidades"
      },
      {
        "n": 6,
        "titulo": "Pensamento Baseado em Risco: Riscos, Oportunidades e Objectivos da Qualidade"
      },
      {
        "n": 7,
        "titulo": "Abordagem por Processos: Mapeamento, Indicadores e Donos de Processo"
      },
      {
        "n": 8,
        "titulo": "Informação Documentada: Procedimentos, Registos e Controlo de Documentos"
      },
      {
        "n": 9,
        "titulo": "Recursos, Competência, Sensibilização e Comunicação Interna"
      },
      {
        "n": 10,
        "titulo": "Requisitos do Cliente, Concepção e Desenvolvimento"
      },
      {
        "n": 11,
        "titulo": "Controlo de Fornecedores e de Processos Externalizados"
      },
      {
        "n": 12,
        "titulo": "Produção e Prestação do Serviço: Rastreabilidade, Preservação e Bens do Cliente"
      },
      {
        "n": 13,
        "titulo": "Monitorização, Medição, Satisfação do Cliente e Análise de Dados"
      },
      {
        "n": 14,
        "titulo": "Não-Conformidades, Correcção, Acções Correctivas e Análise de Causa-Raiz"
      },
      {
        "n": 15,
        "titulo": "Ferramentas da Qualidade: Ishikawa, Pareto, 5 Porquês, 5S e PDCA"
      },
      {
        "n": 16,
        "titulo": "Auditoria Interna segundo a ISO 19011: Programa, Planeamento e Lista de Verificação"
      },
      {
        "n": 17,
        "titulo": "Conduzir a Auditoria: Evidências, Constatações e Relatório de Auditoria"
      },
      {
        "n": 18,
        "titulo": "Revisão pela Gestão, Melhoria Contínua e Preparação para a Certificação"
      }
    ],
    "saidas": [
      "Auditor Interno da Qualidade",
      "Gestor / Responsável da Qualidade",
      "Técnico de Sistemas de Gestão",
      "Consultor de Implementação ISO 9001"
    ]
  },
  {
    "id": "aduaneiro",
    "area": "logistica",
    "title": "Despacho Aduaneiro e Logística",
    "description": "Incoterms, pautas aduaneiras, documentação de importação, procedimentos junto da AGT e das Alfândegas e gestão da cadeia de abastecimento.",
    "icon": "fa-solid fa-ship",
    "status": "planned",
    "url": null,
    "stats": null,
    "pitch": "Angola importa quase tudo o que consome — cada contentor passa por quem sabe despachar.",
    "cover": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    "accent": "#1B9AAA",
    "programa": [
      {
        "n": 1,
        "titulo": "Comércio Internacional e a Economia Angolana: Importação, Exportação e Balança Comercial"
      },
      {
        "n": 2,
        "titulo": "Enquadramento Institucional: AGT, Alfândegas, Portos e Entidades Intervenientes"
      },
      {
        "n": 3,
        "titulo": "A Profissão de Despachante: Licenciamento, Responsabilidade e Ética"
      },
      {
        "n": 4,
        "titulo": "Sistema Harmonizado e Pauta Aduaneira: Classificar e Codificar Mercadorias"
      },
      {
        "n": 5,
        "titulo": "Valor Aduaneiro e Origem das Mercadorias"
      },
      {
        "n": 6,
        "titulo": "Direitos de Importação, IVA na Importação, Emolumentos e Outras Imposições"
      },
      {
        "n": 7,
        "titulo": "Incoterms: Repartição de Custos, Riscos e Responsabilidades"
      },
      {
        "n": 8,
        "titulo": "Documentação de Comércio Externo: Factura, Packing List, Certificados e Licenças"
      },
      {
        "n": 9,
        "titulo": "Documentos de Transporte: Conhecimento de Embarque, Guia Aérea e Carta de Porte"
      },
      {
        "n": 10,
        "titulo": "A Declaração Aduaneira Electrónica e o Processo de Desalfandegamento Passo a Passo"
      },
      {
        "n": 11,
        "titulo": "Regimes Aduaneiros Especiais: Admissão Temporária, Trânsito, Entreposto e Drawback"
      },
      {
        "n": 12,
        "titulo": "Verificação Física, Litígios Aduaneiros e Contencioso"
      },
      {
        "n": 13,
        "titulo": "Transporte Marítimo e Operação nos Portos Angolanos"
      },
      {
        "n": 14,
        "titulo": "Transporte Aéreo, Rodoviário e Multimodal: o Corredor do Lobito"
      },
      {
        "n": 15,
        "titulo": "Gestão de Armazéns, Terminais e Inventário"
      },
      {
        "n": 16,
        "titulo": "Gestão de Stocks, Compras e Relação com Fornecedores"
      },
      {
        "n": 17,
        "titulo": "Custos Logísticos e Formação do Preço de Custo da Mercadoria Importada"
      },
      {
        "n": 18,
        "titulo": "Segurança da Carga, Seguros, Gestão de Riscos e Digitalização da Logística"
      }
    ],
    "saidas": [
      "Assistente de Despachante Aduaneiro",
      "Técnico de Comércio Externo",
      "Técnico de Logística e Transportes",
      "Gestor de Armazém",
      "Técnico de Compras e Importação"
    ]
  }
];
