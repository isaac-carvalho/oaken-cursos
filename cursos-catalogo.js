// ============================================================================
// Oaken Cursos — Catálogo curricular dos 8 cursos.
//
// Este ficheiro descreve a ESTRUTURA de cada curso (programa módulo a módulo,
// capa, cor, saídas profissionais). O courses.js continua a ser a fonte da
// grelha do portal; este catálogo é o que alimenta a ficha/capa de cada curso.
//
// estado:
//   'available' -> página construída e navegável. Único estado com `url`.
//   'building'  -> material didáctico já produzido, página por construir.
//   'planned'   -> curso desenhado, conteúdo ainda por produzir.
//
// Números:
//   - Offshore e Eléctrica usam os números REAIS do material já existente
//     (17 módulos / 527 aulas e 18 módulos / 168 aulas).
//   - Os restantes seis seguem o padrão do projecto: 18 módulos × 11 aulas,
//     9 h por módulo = 162 h.
//
// Nota sobre legislação: os títulos referem entidades e matérias que existem
// mesmo em Angola (AGT, Alfândegas, INSS, INEFOP, IANORQ, IRCOP, PGC, IVA,
// IRT, Imposto Industrial). Números de diploma NÃO são citados nos títulos —
// vão no corpo das aulas, depois de verificados um a um.
// ============================================================================

const CURSOS_CATALOGO = [
  {
    "id": "oil",
    "titulo": "Técnico de Segurança e Operações Offshore",
    "subtitulo": "Edição Angola",
    "area": "Indústria e Energia",
    "estado": "available",
    "url": "oil/index.html",
    "capa": "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?w=1200&q=80",
    "cor": "#FF6B00",
    "modulos": 17,
    "aulasPorModulo": 31,
    "aulas": 527,
    "horas": 527,
    "descricao": "Para quem quer trabalhar em plataformas e embarcações de apoio: segurança offshore, sobrevivência no mar, sistemas da plataforma e procedimentos de emergência da indústria petrolífera.",
    "saidas": [
      "Roustabout / Operador de Convés",
      "Técnico de Segurança Offshore",
      "Assistente de Operações de Produção",
      "Pintor Industrial Offshore"
    ],
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
    ]
  },
  {
    "id": "electrical",
    "titulo": "Técnico de Instalações Eléctricas",
    "subtitulo": "Edição Angola",
    "area": "Indústria e Energia",
    "estado": "available",
    "url": "electrical/index.html",
    "capa": "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80",
    "cor": "#00A3A1",
    "modulos": 18,
    "aulasPorModulo": null,
    "aulas": 168,
    "horas": 168,
    "descricao": "Instalações residenciais, comerciais e industriais para a rede angolana de 220/380 V 50 Hz, com RTIEBT e IEC 60364 e prática de projecto em EWS e CADe SIMU.",
    "saidas": [
      "Electricista de Instalações",
      "Técnico de Projecto Eléctrico",
      "Técnico de Manutenção Industrial",
      "Instalador de Quadros e Comandos"
    ],
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
    ]
  },
  {
    "id": "edificacoes",
    "titulo": "Técnico em Edificações",
    "subtitulo": "Edição Angola",
    "area": "Construção",
    "estado": "building",
    "url": null,
    "capa": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    "cor": "#E8B33A",
    "modulos": 18,
    "aulasPorModulo": 11,
    "aulas": 198,
    "horas": 198,
    "descricao": "Para quem quer acompanhar obra do projecto à entrega: ler e interpretar projectos, escolher materiais, medir, orçamentar, planear e fiscalizar a execução em contexto angolano.",
    "saidas": [
      "Técnico de Edificações",
      "Desenhador Projectista",
      "Medidor-Orçamentista",
      "Fiscal de Obra",
      "Encarregado de Obra"
    ],
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
    ]
  },
  {
    "id": "administrativo",
    "titulo": "Técnico Administrativo",
    "subtitulo": "Edição Angola",
    "area": "Gestão e Administração",
    "estado": "available",
    "url": "administrativo/index.html",
    "capa": "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1200&q=80",
    "cor": "#4E8FD1",
    "modulos": 16,
    "aulasPorModulo": 22,
    "aulas": 352,
    "horas": 352,
    "descricao": "A profissão de escritório de ponta a ponta: rotinas administrativas, pessoal, compras, armazém, documentação e obrigações da empresa, com o vocabulário e as entidades de Angola.",
    "saidas": [
      "Técnico Administrativo",
      "Assistente de Recursos Humanos",
      "Assistente de Compras e Aprovisionamento",
      "Gestor de Escritório",
      "Prestador de Serviços Administrativos"
    ],
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
    ]
  },
  {
    "id": "hst",
    "titulo": "Técnico de Segurança e Higiene no Trabalho",
    "subtitulo": "Edição Angola",
    "area": "Indústria e Energia",
    "estado": "planned",
    "url": null,
    "capa": "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?w=1200&q=80",
    "cor": "#D94F2B",
    "modulos": 18,
    "aulasPorModulo": 11,
    "aulas": 198,
    "horas": 198,
    "descricao": "Para quem vai responder pela segurança de uma empresa ou de um estaleiro: avaliar riscos, gerir EPI, montar planos de emergência, investigar acidentes e manter a documentação que a lei exige.",
    "saidas": [
      "Técnico de Segurança e Higiene no Trabalho",
      "Coordenador de Segurança em Obra",
      "Auditor Interno de SST",
      "Formador em Segurança no Trabalho"
    ],
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
    ]
  },
  {
    "id": "aduaneiro",
    "titulo": "Despacho Aduaneiro e Logística",
    "subtitulo": "Edição Angola",
    "area": "Comércio e Logística",
    "estado": "planned",
    "url": null,
    "capa": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    "cor": "#1B9AAA",
    "modulos": 18,
    "aulasPorModulo": 11,
    "aulas": 198,
    "horas": 198,
    "descricao": "Angola importa quase tudo o que consome. Este curso ensina a classificar mercadoria, calcular direitos e IVA, montar o processo documental e tirar a carga do porto sem a deixar parada.",
    "saidas": [
      "Assistente de Despachante Aduaneiro",
      "Técnico de Comércio Externo",
      "Técnico de Logística e Transportes",
      "Gestor de Armazém",
      "Técnico de Compras e Importação"
    ],
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
    ]
  },
  {
    "id": "contabilidade",
    "titulo": "Contabilidade e Fiscalidade Angolana",
    "subtitulo": "Edição Angola",
    "area": "Gestão e Administração",
    "estado": "planned",
    "url": null,
    "capa": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80",
    "cor": "#2E6E9E",
    "modulos": 18,
    "aulasPorModulo": 11,
    "aulas": 198,
    "horas": 198,
    "descricao": "Do lançamento contabilístico à declaração entregue: PGC angolano, IVA, IRT, Imposto Industrial e o calendário de obrigações que a empresa tem mesmo de cumprir junto da AGT.",
    "saidas": [
      "Técnico de Contabilidade",
      "Assistente Fiscal",
      "Técnico de Processamento Salarial",
      "Assistente de Contabilista Certificado",
      "Responsável Administrativo-Financeiro de PME"
    ],
    "programa": [
      {
        "n": 1,
        "titulo": "Introdução à Contabilidade: Património, Fluxos e Equação Fundamental"
      },
      {
        "n": 2,
        "titulo": "O Plano Geral de Contabilidade Angolano: Estrutura e Classes de Contas"
      },
      {
        "n": 3,
        "titulo": "Partidas Dobradas e Registo das Operações Correntes"
      },
      {
        "n": 4,
        "titulo": "Documentos, Facturação e Regime Jurídico das Facturas"
      },
      {
        "n": 5,
        "titulo": "Compras, Vendas, Existências e Custo das Mercadorias Vendidas"
      },
      {
        "n": 6,
        "titulo": "Meios Monetários, Bancos e Reconciliações Bancárias"
      },
      {
        "n": 7,
        "titulo": "Imobilizado, Amortizações e Reavaliações"
      },
      {
        "n": 8,
        "titulo": "Contas a Receber, Contas a Pagar e Provisões"
      },
      {
        "n": 9,
        "titulo": "Operações em Moeda Estrangeira e Diferenças Cambiais"
      },
      {
        "n": 10,
        "titulo": "Processamento Salarial: Remunerações, Descontos e Contabilização"
      },
      {
        "n": 11,
        "titulo": "IVA: Liquidação, Dedução e Declaração Periódica"
      },
      {
        "n": 12,
        "titulo": "IRT e Contribuições para a Segurança Social (INSS)"
      },
      {
        "n": 13,
        "titulo": "Imposto Industrial: Apuramento, Liquidação Provisória e Declaração Anual"
      },
      {
        "n": 14,
        "titulo": "Imposto Predial, Imposto do Selo e Imposto sobre a Aplicação de Capitais"
      },
      {
        "n": 15,
        "titulo": "Retenções na Fonte e Tributação de Serviços de Não Residentes"
      },
      {
        "n": 16,
        "titulo": "Obrigações Declarativas, Calendário Fiscal e Portal do Contribuinte da AGT"
      },
      {
        "n": 17,
        "titulo": "Encerramento de Contas e Demonstrações Financeiras"
      },
      {
        "n": 18,
        "titulo": "Análise Financeira, Fiscalizações da AGT e Ética Profissional"
      }
    ]
  },
  {
    "id": "qualidade",
    "titulo": "Gestão da Qualidade (ISO 9001) e Auditoria",
    "subtitulo": "Edição Angola",
    "area": "Gestão e Administração",
    "estado": "planned",
    "url": null,
    "capa": "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?w=1200&q=80",
    "cor": "#6B5CA5",
    "modulos": 18,
    "aulasPorModulo": 11,
    "aulas": 198,
    "horas": 198,
    "descricao": "Implementar um sistema de gestão da qualidade e auditá-lo por dentro: requisitos da ISO 9001 cláusula a cláusula, tratamento de não-conformidades e condução de auditorias segundo a ISO 19011.",
    "saidas": [
      "Auditor Interno da Qualidade",
      "Gestor / Responsável da Qualidade",
      "Técnico de Sistemas de Gestão",
      "Consultor de Implementação ISO 9001"
    ],
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
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { CURSOS_CATALOGO };
