// Dados do Laboratório Virtual Oaken Oil (extraidos de laboratorio.html).
// Carregado por index.html; usado pelas vistas #laboratorio e #laboratorio-N.
const modulosData = [{
    id: 1, nome: 'Fundamentos da Indústria', desc: 'Introdução ao setor de petróleo e gás.',
    objetivo: 'Capacitar o aluno a compreender a cadeia de valor do petróleo, desde a exploração até a distribuição. Desenvolver visão sistêmica da indústria, identificando os principais atores, processos e desafios. Empresas como Shell, Petrobras e Equinor exigem esse entendimento básico. Profissões: Engenheiro de Petróleo, Geólogo, Operador de Produção.',
    simuladores: [
        { nome: 'OPM Flow', desc: 'Simulador de reservatórios open-source.', paraQue: 'Modelagem de fluxo em meios porosos.', quemUsa: 'Engenheiros de reservatório.', porque: 'Gratuito e amplamente validado.', vantagens: 'Código aberto, comunidade ativa.', limitacoes: 'Curva de aprendizado íngreme.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://opm-project.org/', nivel: 'Intermediário' },
        { nome: 'MRST', desc: 'Toolbox MATLAB para reservatórios.', paraQue: 'Simulação e visualização de reservatórios.', quemUsa: 'Pesquisadores e engenheiros.', porque: 'Flexível e integrado ao MATLAB.', vantagens: 'Rápido prototipagem.', limitacoes: 'Requer MATLAB.', SO: 'Windows/Linux/Mac', licenca: 'GPL', site: 'https://www.sintef.no/project/mrst/', nivel: 'Avançado' }
    ],
    habilidades: ['Interpretar fluxograma de processo', 'Analisar curvas PVT', 'Visualizar reservatórios', 'Entender ciclo do petróleo'],
    exercicio: 'Exercício 1: Baixe o OPM Flow e simule um reservatório simples com 3 poços. Objetivo: calcular a produção total em 5 anos. Tempo estimado: 2h. Nível: Intermediário.',
    estudoCaso: 'Estudo de caso: Campo fictício "Mar Azul" – análise de viabilidade econômica usando dados de produção simulados. Cenário: reservatório com 100 milhões de barris, 4 poços. Decisão: investir em injeção de água?',
    checklist: ['Instalei o OPM Flow', 'Abri um projeto exemplo', 'Executei a simulação', 'Analisei os resultados', 'Respondi ao questionário'],
    competencias: ['Reservatórios', 'Processos', 'Análise'],
    carreiras: ['Reservoir Engineer', 'Process Engineer', 'Production Operator'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '30min', estudo: '1h', exercicio: '2h', questionario: '20min', total: '3h50min' },
    recursos: { manual: 'https://opm-project.org/docs/', video: 'https://www.youtube.com/results?search_query=OPM+Flow+tutorial', github: 'https://github.com/OPM/opm-common' },
    preRequisitos: 'Conhecimentos básicos de engenharia de petróleo.', proximo: 2
}, {
    id: 2, nome: 'Plataformas Offshore', desc: 'Estruturas e operações em alto-mar.',
    objetivo: 'Compreender os tipos de plataformas (fixas, flutuantes, FPSO), suas partes, sistemas de ancoragem e processos de produção. Empresas como SLB e Halliburton valorizam esse conhecimento. Profissões: Operador de Plataforma, Engenheiro de Produção.',
    simuladores: [
        { nome: 'FreeCAD', desc: 'CAD paramétrico 3D.', paraQue: 'Modelagem de estruturas offshore.', quemUsa: 'Engenheiros mecânicos e estruturais.', porque: 'Gratuito e com plugins para análise.', vantagens: 'Comunidade ativa, extensível.', limitacoes: 'Curva de aprendizado.', SO: 'Windows/Linux', licenca: 'LGPL', site: 'https://www.freecad.org/', nivel: 'Iniciante' },
        { nome: 'ParaView', desc: 'Visualização científica.', paraQue: 'Análise de dados de simulação.', quemUsa: 'Engenheiros de simulação.', porque: 'Poderoso e gratuito.', vantagens: 'Processamento paralelo.', limitacoes: 'Requer dados estruturados.', SO: 'Windows/Linux', licenca: 'BSD', site: 'https://www.paraview.org/', nivel: 'Intermediário' }
    ],
    habilidades: ['Identificar tipos de plataformas', 'Modelar estruturas simples', 'Visualizar dados de simulação', 'Compreender sistemas de ancoragem'],
    exercicio: 'Exercício: Modele uma plataforma jacket simplificada no FreeCAD e exporte para o ParaView para visualização de cargas. Tempo: 3h.',
    estudoCaso: 'Caso: Plataforma "Atlântico" – análise de estabilidade sob condições de tempestade. Utilizar simulação de ondas para verificar deslocamento.',
    checklist: ['Instalei FreeCAD', 'Modelei a estrutura', 'Exportei para ParaView', 'Visualizei os dados'],
    competencias: ['Estruturas', 'Modelagem', 'Análise'],
    carreiras: ['Structural Engineer', 'Platform Operator', 'Design Engineer'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '20min', estudo: '1.5h', exercicio: '3h', questionario: '20min', total: '5h10min' },
    recursos: { manual: 'https://wiki.freecad.org/', video: 'https://www.youtube.com/results?search_query=FreeCAD+offshore', github: 'https://github.com/FreeCAD/FreeCAD' },
    preRequisitos: 'Noções de desenho técnico.', proximo: 3
}, {
    id: 3, nome: 'Segurança Offshore', desc: 'Normas e procedimentos de segurança.',
    objetivo: 'Capacitar o aluno a aplicar os princípios de segurança em plataformas, incluindo análise de riscos, gestão de emergências e uso de EPIs. Segue padrões OPITO e IWCF. Profissões: HSE Officer, Supervisor de Segurança.',
    simuladores: [
        { nome: 'OpenFOAM', desc: 'CFD para simulação de dispersão de gases.', paraQue: 'Modelar vazamentos e explosões.', quemUsa: 'Engenheiros de segurança.', porque: 'Abrangente e gratuito.', vantagens: 'Alta precisão.', limitacoes: 'Complexo.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://openfoam.org/', nivel: 'Avançado' },
        { nome: 'DROPS VR', desc: 'Treinamento em RV para prevenção de objetos caídos.', paraQue: 'Praticar segurança contra quedas de ferramentas e equipamentos.', quemUsa: 'Operadores e supervisores.', porque: 'Imersivo e focado em riscos reais.', vantagens: 'Realista, seguro.', limitacoes: 'Requer headset VR.', SO: 'PC com VR', licenca: 'Paga', site: 'https://www.drops-vr.com/', nivel: 'Intermediário' }
    ],
    habilidades: ['Realizar análise de riscos', 'Simular dispersão de gases', 'Elaborar plano de emergência', 'Prevenção de objetos caídos'],
    exercicio: 'Exercício: Utilizando OpenFOAM, simule um vazamento de gás em uma plataforma e determine a zona de risco. Tempo: 4h.',
    estudoCaso: 'Caso: Incidente fictício "Plataforma Coral" – vazamento de gás. Elaborar plano de evacuação baseado na simulação.',
    checklist: ['Instalei OpenFOAM', 'Configurei o caso', 'Executei a simulação', 'Elaborei plano'],
    competencias: ['Segurança', 'HSE', 'Simulação'],
    carreiras: ['HSE Officer', 'Safety Engineer', 'Emergency Response Coordinator'],
    dificuldade: 'Avançado',
    tempo: { instalacao: '40min', estudo: '2h', exercicio: '4h', questionario: '30min', total: '7h10min' },
    recursos: { manual: 'https://openfoam.org/documentation/', video: 'https://www.youtube.com/results?search_query=OpenFOAM+gas+dispersion', github: 'https://github.com/OpenFOAM/OpenFOAM-dev' },
    preRequisitos: 'Conhecimentos de CFD básico.', proximo: 4
}, {
    id: 4, nome: 'Primeiros Socorros', desc: 'Atendimento emergencial em plataformas.',
    objetivo: 'Capacitar o aluno a prestar primeiros socorros em ambiente offshore, incluindo RCP, controle de hemorragias e estabilização de fraturas. Profissões: Enfermeiro do Trabalho, Técnico de Segurança.',
    simuladores: [
        { nome: 'Virtual Offshore Safety Awareness (VOSA)', desc: 'Ferramenta virtual interativa para treinar resposta a emergências offshore.', paraQue: 'Praticar primeiros socorros e evacuação em plataforma.', quemUsa: 'Todos os profissionais offshore.', porque: 'Gratuito, focado em offshore.', vantagens: 'Acesso online, cenários realistas.', limitacoes: 'Menor fidelidade gráfica.', SO: 'Navegador web', licenca: 'Gratuita', site: 'https://www.opito.com/training-courses/virtual-offshore-safety-awareness', nivel: 'Iniciante' },
        { nome: 'Treinamento em Tele-Simulação com RA', desc: 'Treinamento remoto para emergências médicas usando realidade aumentada.', paraQue: 'Simular atendimento pré-hospitalar em locais remotos.', quemUsa: 'Equipes médicas e de segurança.', porque: 'Aborda a logística offshore.', vantagens: 'Imersivo, com especialistas remotos.', limitacoes: 'Requer equipamento AR.', SO: 'Windows/Android', licenca: 'Paga', site: 'https://www.medsims.com/', nivel: 'Intermediário' }
    ],
    habilidades: ['Realizar RCP', 'Controlar hemorragias', 'Imobilizar fraturas', 'Atuar em evacuação'],
    exercicio: 'Exercício prático com manequim: RCP e uso de DEA. Tempo: 1h.',
    estudoCaso: 'Caso: Acidente com operador – simulação de atendimento e evacuação.',
    checklist: ['Realizei RCP', 'Controlei hemorragia', 'Participei de evacuação'],
    competencias: ['Primeiros Socorros', 'HSE'],
    carreiras: ['Occupational Nurse', 'Safety Technician', 'Emergency Responder'],
    dificuldade: 'Fácil',
    tempo: { instalacao: '0', estudo: '30min', exercicio: '1h', questionario: '15min', total: '1h45min' },
    recursos: { video: 'https://www.youtube.com/results?search_query=offshore+first+aid' },
    preRequisitos: 'Nenhum.', proximo: 5
}, {
    id: 5, nome: 'Sistemas Mecânicos', desc: 'Equipamentos e manutenção mecânica.',
    objetivo: 'Compreender bombas, compressores, turbinas e sistemas de lubrificação. Realizar manutenção preventiva e corretiva. Profissões: Mecânico, Técnico de Manutenção.',
    simuladores: [
        { nome: 'FreeCAD', desc: 'CAD para modelagem de peças.', paraQue: 'Projetar e analisar componentes.', quemUsa: 'Engenheiros mecânicos.', porque: 'Gratuito e com módulo de FEM.', vantagens: 'Extensível.', limitacoes: 'Poucos recursos de análise.', SO: 'Windows/Linux', licenca: 'LGPL', site: 'https://www.freecad.org/', nivel: 'Intermediário' },
        { nome: 'GNU Octave', desc: 'Ambiente de computação numérica.', paraQue: 'Análise de vibrações e dados de sensores.', quemUsa: 'Engenheiros de manutenção.', porque: 'Alternativa gratuita ao MATLAB.', vantagens: 'Poderoso, com pacotes para processamento de sinais.', limitacoes: 'Curva de aprendizado.', SO: 'Windows/Linux/Mac', licenca: 'GPL', site: 'https://www.gnu.org/software/octave/', nivel: 'Intermediário' }
    ],
    habilidades: ['Identificar falhas em bombas', 'Realizar alinhamento', 'Interpretar manuais técnicos', 'Analisar vibrações'],
    exercicio: 'Exercício: Modelar uma bomba centrífuga no FreeCAD e simular desgaste em um componente. Tempo: 3h.',
    estudoCaso: 'Caso: Falha em bomba de água do mar – diagnosticar e propor solução.',
    checklist: ['Modelei a bomba', 'Simulei o desgaste', 'Analisei vibrações com Octave'],
    competencias: ['Mecânica', 'Manutenção'],
    carreiras: ['Mechanical Technician', 'Maintenance Engineer', 'Reliability Engineer'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '20min', estudo: '1h', exercicio: '3h', questionario: '20min', total: '4h40min' },
    recursos: { manual: 'https://wiki.freecad.org/', video: 'https://www.youtube.com/results?search_query=FreeCAD+pump', github: 'https://github.com/FreeCAD/FreeCAD' },
    preRequisitos: 'Desenho técnico.', proximo: 6
}, {
    id: 6, nome: 'Sistemas Elétricos', desc: 'Instalações e automação elétrica.',
    objetivo: 'Entender diagramas elétricos, motores, geradores e sistemas de distribuição. Profissões: Eletricista, Técnico de Automação.',
    simuladores: [
        { nome: 'OpenPLC', desc: 'Controlador lógico programável.', paraQue: 'Programar lógicas de controle.', quemUsa: 'Engenheiros de automação.', porque: 'Gratuito e compatível com IEC 61131-3.', vantagens: 'Código aberto.', limitacoes: 'Menos recursos que PLCs comerciais.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://openplcproject.com/', nivel: 'Intermediário' },
        { nome: 'Grafana + InfluxDB', desc: 'Monitoramento e dashboards de dados de processo.', paraQue: 'Visualizar e analisar sinais de sensores e atuadores.', quemUsa: 'Operadores e engenheiros de automação.', porque: 'Gratuito e altamente customizável.', vantagens: 'Dashboards em tempo real, integrações.', limitacoes: 'Requer configuração.', SO: 'Online/Windows/Linux', licenca: 'Apache', site: 'https://grafana.com/', nivel: 'Intermediário' }
    ],
    habilidades: ['Ler diagramas elétricos', 'Programar PLC', 'Diagnosticar falhas', 'Criar dashboards de monitoramento'],
    exercicio: 'Exercício: Programar um PLC para controlar uma bomba (start/stop) com temporizadores. Tempo: 2h.',
    estudoCaso: 'Caso: Falha no sistema de partida de motor – diagnosticar usando simulação.',
    checklist: ['Programei o PLC', 'Simulei a lógica', 'Criei dashboard no Grafana'],
    competencias: ['Elétrica', 'Automação'],
    carreiras: ['Electrical Technician', 'Control Room Operator', 'Automation Engineer'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '15min', estudo: '1h', exercicio: '2h', questionario: '20min', total: '3h35min' },
    recursos: { manual: 'https://openplcproject.com/docs/', video: 'https://www.youtube.com/results?search_query=OpenPLC+tutorial' },
    preRequisitos: 'Noções de elétrica.', proximo: 7
}, {
    id: 7, nome: 'Operações Submarinas', desc: 'Atividades subsea e ROV.',
    objetivo: 'Conhecer equipamentos submarinos, sistemas de produção subsea, operações com ROV e intervenções. Profissões: Subsea Engineer, ROV Pilot.',
    simuladores: [
        { nome: 'Blender', desc: 'Modelagem 3D e animação.', paraQue: 'Visualizar equipamentos subsea.', quemUsa: 'Engenheiros de visualização.', porque: 'Gratuito e poderoso.', vantagens: 'Renderização realista.', limitacoes: 'Curva de aprendizado.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://www.blender.org/', nivel: 'Intermediário' },
        { nome: 'Vortex Studio', desc: 'Plataforma de simulação física para robótica e veículos subaquáticos.', paraQue: 'Simular operações de ROV e manobras subsea.', quemUsa: 'Engenheiros de ROV e planejadores.', porque: 'Oferece física realista e integração com sensores.', vantagens: 'Alta fidelidade, cenários customizáveis.', limitacoes: 'Pago, requer licença.', SO: 'Windows', licenca: 'Paga', site: 'https://www.cm-labs.com/vortex-studio/', nivel: 'Avançado' }
    ],
    habilidades: ['Identificar equipamentos subsea', 'Planejar operações ROV', 'Interpretar dados de sonar', 'Simular manobras subaquáticas'],
    exercicio: 'Exercício: Modelar um manifold subsea no Blender e criar animação de instalação. Tempo: 4h.',
    estudoCaso: 'Caso: Manutenção em válvula subsea – planejar operação com ROV.',
    checklist: ['Modelei o manifold', 'Criei animação', 'Simulei operação ROV'],
    competencias: ['Subsea', 'ROV'],
    carreiras: ['Subsea Engineer', 'ROV Pilot', 'Offshore Installation Manager'],
    dificuldade: 'Avançado',
    tempo: { instalacao: '30min', estudo: '1.5h', exercicio: '4h', questionario: '20min', total: '6h20min' },
    recursos: { manual: 'https://docs.blender.org/', video: 'https://www.youtube.com/results?search_query=Blender+subsea' },
    preRequisitos: 'Modelagem 3D básica.', proximo: 8
}, {
    id: 8, nome: 'Manutenção', desc: 'Planejamento e execução de manutenção.',
    objetivo: 'Capacitar o aluno a planejar e executar manutenção preventiva e preditiva em equipamentos offshore. Profissões: Maintenance Planner, Reliability Engineer.',
    simuladores: [
        { nome: 'OpenProject', desc: 'Gerenciamento de projetos.', paraQue: 'Planejar manutenções.', quemUsa: 'Planejadores.', porque: 'Gratuito e colaborativo.', vantagens: 'Fácil uso.', limitacoes: 'Limitado a planejamento.', SO: 'Online', licenca: 'GPL', site: 'https://www.openproject.org/', nivel: 'Iniciante' },
        { nome: 'OpenMAINT', desc: 'Gestão de ativos e manutenção.', paraQue: 'Gerenciar ordens de serviço e histórico de equipamentos.', quemUsa: 'Gestores de manutenção.', porque: 'Baseado em CMDB, gratuito.', vantagens: 'Integração com GIS e outros sistemas.', limitacoes: 'Requer customização.', SO: 'Online', licenca: 'GPL', site: 'https://www.openmaint.org/', nivel: 'Intermediário' }
    ],
    habilidades: ['Elaborar plano de manutenção', 'Usar ferramentas de planejamento', 'Gerenciar ativos'],
    exercicio: 'Exercício: Criar um cronograma de manutenção para uma plataforma usando OpenProject. Tempo: 2h.',
    estudoCaso: 'Caso: Otimizar parada programada de plataforma – usar planejamento para reduzir tempo.',
    checklist: ['Criei o projeto', 'Defini tarefas', 'Registrei ativos no OpenMAINT'],
    competencias: ['Manutenção', 'Planejamento'],
    carreiras: ['Maintenance Planner', 'Reliability Engineer', 'Asset Manager'],
    dificuldade: 'Fácil',
    tempo: { instalacao: '0', estudo: '1h', exercicio: '2h', questionario: '15min', total: '3h15min' },
    recursos: { manual: 'https://www.openproject.org/docs/', video: 'https://www.youtube.com/results?search_query=OpenProject+tutorial' },
    preRequisitos: 'Noções de gestão.', proximo: 9
}, {
    id: 9, nome: 'Soft Skills', desc: 'Comunicação e trabalho em equipe.',
    objetivo: 'Desenvolver habilidades de comunicação, liderança e resolução de conflitos, essenciais para o ambiente offshore. Profissões: Supervisor, Líder de Equipe.',
    simuladores: [
        { nome: 'Virti', desc: 'Plataforma de treinamento com IA para role-play de soft skills.', paraQue: 'Praticar liderança, comunicação e resolução de crises.', quemUsa: 'Líderes e supervisores.', porque: 'Cenários realistas com feedback da IA.', vantagens: 'Acessível online, métricas de desempenho.', limitacoes: 'Pode não ter cenários específicos offshore.', SO: 'Navegador web', licenca: 'Paga (empresarial)', site: 'https://virti.com/', nivel: 'Intermediário' },
        { nome: 'Bodyswaps', desc: 'Plataforma de RV para desenvolver empatia e comunicação.', paraQue: 'Melhorar habilidades interativas através de troca de perspectiva.', quemUsa: 'Todos os níveis.', porque: 'Imersiva, permite visualizar situações de diferentes ângulos.', vantagens: 'Módulos prontos para ambiente corporativo.', limitacoes: 'Requer headset RV para experiência completa.', SO: 'Android/iOS/PC', licenca: 'Paga', site: 'https://www.bodyswaps.co/', nivel: 'Intermediário' }
    ],
    habilidades: ['Comunicação eficaz', 'Liderança', 'Trabalho em equipe', 'Resolução de conflitos'],
    exercicio: 'Exercício: Simulação de reunião de equipe para resolver um problema operacional.',
    estudoCaso: 'Caso: Conflito entre turnos – mediar e propor solução.',
    checklist: ['Participei da simulação', 'Apliquei feedback', 'Refleti sobre a experiência'],
    competencias: ['Liderança', 'Comunicação'],
    carreiras: ['Supervisor', 'Team Leader', 'HR Coordinator'],
    dificuldade: 'Fácil',
    tempo: { instalacao: '0', estudo: '30min', exercicio: '1h', questionario: '10min', total: '1h40min' },
    recursos: { video: 'https://www.youtube.com/results?search_query=soft+skills+offshore' },
    preRequisitos: 'Nenhum.', proximo: 10
}, {
    id: 10, nome: 'Legislação', desc: 'Regulamentação e normas do setor.',
    objetivo: 'Conhecer as leis e regulamentos aplicáveis à indústria offshore, incluindo ANP, IBAMA, e normas internacionais. Profissões: HSE Officer, Advogado Corporativo.',
    simuladores: [
        { nome: 'ABS Group – Offshore Oil and Gas Regulations', desc: 'Curso online sobre regulamentações e padrões do setor.', paraQue: 'Compreender agências reguladoras e gestão de conformidade.', quemUsa: 'Gerentes de compliance e HSE.', porque: 'Conteúdo direto e objetivo.', vantagens: 'Inclui checklists e estudos de caso.', limitacoes: 'Não é um simulador prático.', SO: 'Navegador web', licenca: 'Paga', site: 'https://www.abs-group.com/', nivel: 'Intermediário' },
        { nome: 'Maersk Training – OIM Legislation Course', desc: 'Curso de 3 dias sobre requisitos legislativos para Oficiais de Instalação.', paraQue: 'Garantir conformidade e segurança operacional.', quemUsa: 'OIMs e supervisores.', porque: 'Focado em responsabilidades legais do OIM.', vantagens: 'Estudos de caso e exemplos práticos.', limitacoes: 'Curso pago e com duração de 3 dias.', SO: 'Presencial/online', licenca: 'Paga', site: 'https://www.maersktraining.com/', nivel: 'Avançado' }
    ],
    habilidades: ['Interpretar leis', 'Aplicar normas', 'Elaborar relatórios', 'Garantir conformidade'],
    exercicio: 'Exercício: Analisar um caso de não conformidade e propor ações corretivas.',
    estudoCaso: 'Caso: Derramamento de óleo – simular resposta legal e plano de remediação.',
    checklist: ['Analisei o caso', 'Emiti relatório', 'Propus medidas corretivas'],
    competencias: ['Legislação', 'HSE'],
    carreiras: ['HSE Officer', 'Compliance Analyst', 'Legal Counsel'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '0', estudo: '1h', exercicio: '1.5h', questionario: '20min', total: '2h50min' },
    recursos: { manual: 'https://www.anp.gov.br/' },
    preRequisitos: 'Noções de direito ambiental.', proximo: 11
}, {
    id: 11, nome: 'Processamento de Hidrocarbonetos', desc: 'Separação e tratamento de óleo e gás.',
    objetivo: 'Capacitar o aluno a entender os processos de separação, tratamento e bombeio de petróleo e gás. Profissões: Process Operator, Process Engineer.',
    simuladores: [
        { nome: 'DWSIM', desc: 'Simulador de processos químicos.', paraQue: 'Modelar plantas de processamento.', quemUsa: 'Engenheiros de processo.', porque: 'Gratuito e com biblioteca extensa.', vantagens: 'Interface amigável.', limitacoes: 'Requisição de licença para recursos avançados.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://dwsim.inforside.com.br/', nivel: 'Intermediário' },
        { nome: 'COCO Simulator', desc: 'Simulador de processos CAPE-OPEN.', paraQue: 'Simular plantas químicas e de petróleo.', quemUsa: 'Engenheiros de processo.', porque: 'Gratuito, compatível com padrões abertos.', vantagens: 'Modular, integração com outras ferramentas.', limitacoes: 'Interface menos intuitiva.', SO: 'Windows', licenca: 'GPL', site: 'https://www.cocosimulator.org/', nivel: 'Intermediário' }
    ],
    habilidades: ['Modelar processos de separação', 'Dimensionar equipamentos', 'Analisar balanços de massa e energia'],
    exercicio: 'Exercício: Modelar uma planta de separação óleo-água-gás no DWSIM. Otimizar temperatura de separador. Tempo: 3h.',
    estudoCaso: 'Caso: Planta "Campos" – otimizar produção reduzindo perdas.',
    checklist: ['Modelei a planta', 'Executei a simulação', 'Otimizei parâmetros'],
    competencias: ['Processos', 'Simulação'],
    carreiras: ['Process Engineer', 'Production Operator', 'Chemical Engineer'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '30min', estudo: '1.5h', exercicio: '3h', questionario: '20min', total: '5h20min' },
    recursos: { manual: 'https://dwsim.inforside.com.br/documentation/', video: 'https://www.youtube.com/results?search_query=DWSIM+tutorial' },
    preRequisitos: 'Termodinâmica básica.', proximo: 12
}, {
    id: 12, nome: 'Automação Industrial', desc: 'Controle e supervisão de processos.',
    objetivo: 'Capacitar o aluno a projetar e operar sistemas de automação, incluindo CLPs, SCADAs e instrumentação. Profissões: Automation Engineer, Control Room Operator.',
    simuladores: [
        { nome: 'ScadaBR', desc: 'SCADA open-source.', paraQue: 'Supervisionar processos.', quemUsa: 'Operadores de sala de controle.', porque: 'Gratuito e funcional.', vantagens: 'Fácil implantação.', limitacoes: 'Menos recursos que softwares comerciais.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://scadabr.org.br/', nivel: 'Iniciante' },
        { nome: 'Node-RED', desc: 'Flow-based programming para IoT.', paraQue: 'Integrar dispositivos e dashboards.', quemUsa: 'Engenheiros de automação.', porque: 'Visual e gratuito.', vantagens: 'Extensível com nós.', limitacoes: 'Não é SCADA completo.', SO: 'Online', licenca: 'Apache', site: 'https://nodered.org/', nivel: 'Iniciante' }
    ],
    habilidades: ['Programar CLP', 'Configurar SCADA', 'Desenvolver dashboards', 'Integrar dispositivos IoT'],
    exercicio: 'Exercício: Criar uma tela SCADA no ScadaBR para monitorar tanques e bombas. Integrar com Node-RED para alertas. Tempo: 4h.',
    estudoCaso: 'Caso: Automação de um processo de separação – implementar supervisão e controle.',
    checklist: ['Instalei ScadaBR', 'Criei tela', 'Integrei Node-RED'],
    competencias: ['Automação', 'SCADA'],
    carreiras: ['Automation Engineer', 'Control Room Operator', 'Instrumentation Technician'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '30min', estudo: '1.5h', exercicio: '4h', questionario: '20min', total: '6h20min' },
    recursos: { manual: 'https://www.scadabr.org.br/documentacao/', video: 'https://www.youtube.com/results?search_query=ScadaBR+tutorial' },
    preRequisitos: 'Noções de automação.', proximo: 13
}, {
    id: 13, nome: 'Geologia e Engenharia de Poços', desc: 'Exploração e perfuração de poços.',
    objetivo: 'Compreender os princípios de geologia de reservatórios, métodos de perfuração, completação e avaliação de poços. Profissões: Drilling Engineer, Geologist.',
    simuladores: [
        { nome: 'ResInsight', desc: 'Visualização de reservatórios.', paraQue: 'Analisar modelos de reservatório.', quemUsa: 'Geólogos e engenheiros de reservatório.', porque: 'Gratuito e integrado com OPM.', vantagens: 'Interface intuitiva.', limitacoes: 'Limitado a visualização.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://www.resinsight.org/', nivel: 'Intermediário' },
        { nome: 'GNU Octave', desc: 'Computação numérica para análise de dados de poço.', paraQue: 'Processar e interpretar perfis de poço.', quemUsa: 'Petrofísicos e geocientistas.', porque: 'Gratuito, com pacotes de processamento de sinais.', vantagens: 'Flexível, scriptável.', limitacoes: 'Curva de aprendizado.', SO: 'Windows/Linux/Mac', licenca: 'GPL', site: 'https://www.gnu.org/software/octave/', nivel: 'Avançado' }
    ],
    habilidades: ['Interpretar dados sísmicos', 'Analisar perfis de poço', 'Visualizar reservatórios', 'Modelar propriedades petrofísicas'],
    exercicio: 'Exercício: Carregar um modelo de reservatório no ResInsight e identificar zonas de boa permeabilidade. Tempo: 2h.',
    estudoCaso: 'Caso: Poço exploratório "Pérola" – avaliar potencial de produção com base em dados sísmicos.',
    checklist: ['Carreguei o modelo', 'Analisei as propriedades', 'Gerei relatório'],
    competencias: ['Geologia', 'Perfuração'],
    carreiras: ['Drilling Engineer', 'Geologist', 'Petrophysicist', 'Reservoir Engineer'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '20min', estudo: '1h', exercicio: '2h', questionario: '15min', total: '3h35min' },
    recursos: { manual: 'https://www.resinsight.org/docs/', video: 'https://www.youtube.com/results?search_query=ResInsight+tutorial' },
    preRequisitos: 'Noções de geologia.', proximo: 14
}, {
    id: 14, nome: 'Logística Offshore', desc: 'Suprimentos e transporte marítimo.',
    objetivo: 'Capacitar o aluno a planejar e gerenciar a logística de materiais e pessoal para plataformas. Profissões: Logistics Coordinator, Supply Chain Manager.',
    simuladores: [
        { nome: 'QGIS', desc: 'Sistema de Informação Geográfica.', paraQue: 'Mapeamento de rotas e áreas.', quemUsa: 'Planejadores logísticos.', porque: 'Gratuito e poderoso.', vantagens: 'Análise espacial.', limitacoes: 'Curva de aprendizado.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://qgis.org/', nivel: 'Iniciante' },
        { nome: 'OpenMAINT', desc: 'Gestão de ativos e manutenção.', paraQue: 'Gerenciar equipamentos e materiais logísticos.', quemUsa: 'Logísticos e gerentes de ativos.', porque: 'Integra gestão de ativos com georreferenciamento.', vantagens: 'Rastreabilidade e histórico.', limitacoes: 'Requisição de customização.', SO: 'Online', licenca: 'GPL', site: 'https://www.openmaint.org/', nivel: 'Intermediário' }
    ],
    habilidades: ['Planejar rotas', 'Gerenciar inventário', 'Utilizar GIS', 'Coordenar suprimentos'],
    exercicio: 'Exercício: Usar QGIS para mapear a localização de plataformas e planejar uma rota de suprimentos. Tempo: 2h.',
    estudoCaso: 'Caso: Otimizar a rota de um navio de abastecimento para reduzir consumo de combustível.',
    checklist: ['Criei o mapa', 'Planejei a rota', 'Registrei ativos logísticos'],
    competencias: ['Logística', 'GIS'],
    carreiras: ['Logistics Coordinator', 'Supply Chain Analyst', 'Warehouse Manager'],
    dificuldade: 'Fácil',
    tempo: { instalacao: '20min', estudo: '1h', exercicio: '2h', questionario: '15min', total: '3h35min' },
    recursos: { manual: 'https://docs.qgis.org/', video: 'https://www.youtube.com/results?search_query=QGIS+tutorial' },
    preRequisitos: 'Noções de logística.', proximo: 15
}, {
    id: 15, nome: 'Energias Renováveis', desc: 'Fontes alternativas no offshore.',
    objetivo: 'Conhecer as tecnologias de energia renovável aplicadas ao offshore, como eólica, ondas e solar. Profissões: Renewable Energy Engineer, Project Manager.',
    simuladores: [
        { nome: 'NREL SAM', desc: 'Modelagem de sistemas de energia renovável.', paraQue: 'Avaliar viabilidade técnica e econômica.', quemUsa: 'Engenheiros de energia.', porque: 'Gratuito e abrangente.', vantagens: 'Base de dados confiável.', limitacoes: 'Focado em projetos terrestres.', SO: 'Windows', licenca: 'GPL', site: 'https://sam.nrel.gov/', nivel: 'Intermediário' },
        { nome: 'OpenFOAM', desc: 'CFD para simulação de escoamento em turbinas eólicas.', paraQue: 'Analisar aerodinâmica de pás eólicas offshore.', quemUsa: 'Engenheiros de energia eólica.', porque: 'Precisão e flexibilidade.', vantagens: 'Código aberto, comunidade ativa.', limitacoes: 'Requer conhecimento em CFD.', SO: 'Windows/Linux', licenca: 'GPL', site: 'https://openfoam.org/', nivel: 'Avançado' }
    ],
    habilidades: ['Dimensionar parques eólicos', 'Analisar viabilidade', 'Interpretar dados de vento', 'Simular escoamento em turbinas'],
    exercicio: 'Exercício: Usar NREL SAM para dimensionar um parque eólico offshore de 100 MW. Tempo: 3h.',
    estudoCaso: 'Caso: Projeto "Vento Norte" – avaliar retorno financeiro de um parque eólico offshore.',
    checklist: ['Instalei o SAM', 'Configurei o projeto', 'Executei a simulação'],
    competencias: ['Energia', 'Renováveis'],
    carreiras: ['Renewable Energy Engineer', 'Project Manager', 'Wind Farm Analyst'],
    dificuldade: 'Intermediário',
    tempo: { instalacao: '30min', estudo: '1.5h', exercicio: '3h', questionario: '20min', total: '5h20min' },
    recursos: { manual: 'https://sam.nrel.gov/documentation.html', video: 'https://www.youtube.com/results?search_query=NREL+SAM+tutorial' },
    preRequisitos: 'Conceitos de energia.', proximo: 16
}, {
    id: 16, nome: 'Roustabout', desc: 'Operações gerais e apoio em plataforma.',
    objetivo: 'Preparar o aluno para funções de apoio em plataformas, incluindo manuseio de materiais, operações de içamento e limpeza. Profissões: Roustabout, Deckhand.',
    simuladores: [
        { nome: 'RigSim VR (Adaptive Immersion)', desc: 'Treinamento em RV para funções de Roustabout e Floor Hand.', paraQue: 'Praticar trabalhos em altura, manuseio de carga e resposta a emergências.', quemUsa: 'Roustabouts e operadores.', porque: 'Desenvolvido com base em incidentes reais (Deepwater Horizon).', vantagens: 'Cenários realistas e seguros.', limitacoes: 'Requer headset VR.', SO: 'PC com VR', licenca: 'Paga', site: 'https://www.adaptiveimmersion.com/', nivel: 'Iniciante' },
        { nome: 'JCI Online Training – Roustabout Training', desc: 'Curso online para reconhecer riscos offshore e trabalhar em equipe.', paraQue: 'Capacitar teoricamente para funções de Roustabout.', quemUsa: 'Novos ingressantes.', porque: 'Acessível e focado em fundamentos.', vantagens: 'Conteúdo teórico de qualidade.', limitacoes: 'Não é um simulador prático.', SO: 'Navegador web', licenca: 'Paga', site: 'https://www.jciltd.com/', nivel: 'Iniciante' }
    ],
    habilidades: ['Manusear cargas', 'Operar guindastes', 'Realizar manutenção básica', 'Trabalhar em altura'],
    exercicio: 'Exercício: Simular operação de içamento com carga suspensa.',
    estudoCaso: 'Caso: Movimentação de tubos no deck – planejar operação segura.',
    checklist: ['Participei da simulação', 'Apliquei procedimentos de segurança'],
    competencias: ['Operações', 'Segurança'],
    carreiras: ['Roustabout', 'Deckhand', 'Roughneck'],
    dificuldade: 'Iniciante',
    tempo: { instalacao: '0', estudo: '30min', exercicio: '1h', questionario: '10min', total: '1h40min' },
    recursos: { video: 'https://www.youtube.com/results?search_query=roustabout+offshore' },
    preRequisitos: 'Nenhum.', proximo: 17
}, {
    id: 17, nome: 'Pintura Industrial', desc: 'Proteção anticorrosiva e acabamento.',
    objetivo: 'Capacitar o aluno a aplicar técnicas de pintura industrial para proteção de estruturas offshore contra corrosão. Profissões: Coating Inspector, Corrosion Engineer.',
    simuladores: [
        { nome: 'Seabery Spray-Painting Simulator', desc: 'Simulador de pintura industrial com realidade aumentada.', paraQue: 'Treinar técnicas de pintura com pistola, sem desperdício.', quemUsa: 'Pintores industriais e inspetores.', porque: 'Desenvolvido pela criadora do simulador de solda mais realista.', vantagens: 'Treinamento seguro, sem custos com materiais.', limitacoes: 'Requer hardware específico (pistola real e sistema AR).', SO: 'Windows (com hardware AR)', licenca: 'Paga', site: 'https://www.seabery.com/', nivel: 'Intermediário' },
        { nome: 'MOOC – Industrial Coating Inspection (NACE/SSPC)', desc: 'Curso online sobre inspeção de revestimentos e técnicas de pintura.', paraQue: 'Capacitar em normas de preparação de superfície e aplicação.', quemUsa: 'Inspetores de corrosão.', porque: 'Conteúdo teórico de alta qualidade.', vantagens: 'Baseado em padrões internacionais.', limitacoes: 'Não é um simulador prático.', SO: 'Navegador web', licenca: 'Paga', site: 'https://www.nace.org/', nivel: 'Iniciante' }
    ],
    habilidades: ['Preparar superfícies', 'Aplicar tintas', 'Inspecionar camadas', 'Diagnosticar falhas de revestimento'],
    exercicio: 'Exercício: Simular preparação de superfície e aplicação de tinta em uma amostra.',
    estudoCaso: 'Caso: Inspeção de revestimento em plataforma – identificar falhas e recomendar reparos.',
    checklist: ['Realizei a preparação', 'Apliquei a tinta', 'Inspecionei a camada'],
    competencias: ['Corrosão', 'Inspeção'],
    carreiras: ['Coating Inspector', 'Corrosion Engineer', 'Maintenance Technician'],
    dificuldade: 'Iniciante',
    tempo: { instalacao: '0', estudo: '30min', exercicio: '1.5h', questionario: '15min', total: '2h15min' },
    recursos: { video: 'https://www.youtube.com/results?search_query=industrial+coating+offshore' },
    preRequisitos: 'Nenhum.', proximo: 1
}];

const simuladoresGerais = [
    { nome: 'OpenLab Drilling', categoria: 'perfuração', plataforma: 'Windows', desc: 'Simulador de perfuração offshore.' },
    { nome: 'OpenFOAM', categoria: 'mecânica', plataforma: 'Windows/Linux', desc: 'CFD para dinâmica de fluidos.' },
    { nome: 'OPM Flow', categoria: 'produção', plataforma: 'Windows/Linux', desc: 'Simulador de reservatórios.' },
    { nome: 'MRST', categoria: 'geologia', plataforma: 'Windows/Linux', desc: 'Modelagem de reservatórios.' },
    { nome: 'ResInsight', categoria: 'geologia', plataforma: 'Windows', desc: 'Visualização de reservatórios.' },
    { nome: 'DWSIM', categoria: 'produção', plataforma: 'Windows/Linux', desc: 'Simulador de processos químicos.' },
    { nome: 'COCO Simulator', categoria: 'produção', plataforma: 'Windows', desc: 'Simulador de processos CAPE-OPEN.' },
    { nome: 'EMSO', categoria: 'automação', plataforma: 'Windows/Linux', desc: 'Modelagem de sistemas dinâmicos.' },
    { nome: 'OpenPLC', categoria: 'automação', plataforma: 'Windows/Linux', desc: 'Controlador lógico programável open-source.' },
    { nome: 'ScadaBR', categoria: 'automação', plataforma: 'Windows/Linux', desc: 'SCADA open-source.' },
    { nome: 'Node-RED', categoria: 'automação', plataforma: 'Online', desc: 'Flow-based programming para IoT.' },
    { nome: 'Grafana', categoria: 'automação', plataforma: 'Online', desc: 'Monitoramento e dashboards.' },
    { nome: 'InfluxDB', categoria: 'automação', plataforma: 'Online', desc: 'Banco de dados time-series.' },
    { nome: 'FreeCAD', categoria: 'mecânica', plataforma: 'Windows/Linux', desc: 'CAD paramétrico 3D.' },
    { nome: 'Blender', categoria: 'mecânica', plataforma: 'Windows/Linux', desc: 'Modelagem e animação 3D.' },
    { nome: 'ParaView', categoria: 'geologia', plataforma: 'Windows/Linux', desc: 'Visualização de dados científicos.' },
    { nome: 'QGIS', categoria: 'logística', plataforma: 'Windows/Linux', desc: 'SIG para logística e mapeamento.' },
    { nome: 'GNU Octave', categoria: 'geologia', plataforma: 'Windows/Linux', desc: 'Computação numérica (MATLAB-like).' },
    { nome: 'NREL SAM', categoria: 'energia', plataforma: 'Windows', desc: 'Modelagem de energia renovável.' },
    { nome: 'OpenProject', categoria: 'logística', plataforma: 'Online', desc: 'Gerenciamento de projetos.' },
    { nome: 'OpenMAINT', categoria: 'logística', plataforma: 'Online', desc: 'Gestão de ativos e manutenção.' }
];

