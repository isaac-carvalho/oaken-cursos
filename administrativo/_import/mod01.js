// Modulo 1 - Fundamentos da Administracao. 22 aulas.
// Classes usadas: cb, hi, lawbox/lt, fbox/f/fd, tl/tli/tld/tlc, dg/dgt, tw, dt.
// Nao existem no CSS deste curso: wb, ib, quiz, qq, qo, nem a funcao cq().
const MOD01_LESSONS = [

{ title: "1.1 O que é a Administração e para que serve numa empresa angolana",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Distinguir <strong>administração</strong> de <strong>gestão</strong> e de <strong>execução</strong>, identificando onde entra o técnico administrativo em cada uma.</li>
<li>Identificar os recursos que a administração coordena numa empresa angolana: pessoas, dinheiro, materiais, informação e tempo.</li>
<li>Relacionar cada tarefa administrativa do dia com o resultado que ela protege — dinheiro, prazo legal ou reputação.</li>
<li>Elaborar o mapa das rotinas administrativas de uma pequena empresa e justificar a razão de ser de cada uma.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Kimbo Distribuição, Lda.</strong> é uma distribuidora de produtos alimentares com armazém em Viana e um escritório de quatro pessoas. Emprega 19 trabalhadores, factura em média <strong>34.000.000 Kz por mês</strong> e serve 62 lojas de bairro em Luanda com três carrinhas.</p>
<p>Em Março, o sócio-gerente descobriu três problemas na mesma semana. Primeiro: pagou duas vezes a mesma factura de 1.850.000 Kz a um fornecedor de óleo alimentar, porque a factura chegou por email ao gerente e em papel ao motorista, e ninguém tinha um registo único de facturas recebidas. Segundo: uma carrinha ficou parada nove dias por falta de seguro renovado — ninguém tinha a data de renovação escrita em lado nenhum. Terceiro: o contabilista externo pediu os documentos do mês e o escritório demorou seis dias a reuni-los, porque estavam repartidos por três gavetas, dois telemóveis e uma caixa de sapatos.</p>
<p>Nenhum destes três problemas é um problema de vendas. As vendas correram bem. São <strong>falhas de administração</strong>: falta um circuito único para os documentos entrarem, falta um calendário de obrigações com datas, falta um arquivo com uma regra. O prejuízo somado dos três — o pagamento em duplicado, os nove dias de carrinha parada e as horas gastas a procurar papel — passou dos <strong>3.000.000 Kz</strong> num só mês, sem que ninguém tivesse feito nada de errado a vender.</p>
<p>É exactamente aqui que o técnico administrativo cria valor. Não vende, não produz — mas garante que o que se vendeu se cobra, que o que se comprou se paga uma vez só, que o prazo legal não passa e que o documento aparece quando é preciso.</p></div>

<div class="cb"><h2><i class="fas fa-sitemap"></i> 1. O que é administrar</h2>
<p><strong>Administrar</strong> é coordenar recursos escassos para atingir objectivos definidos. Todos os elementos desta definição contam: os recursos são <em>escassos</em> (se sobrasse dinheiro, tempo e gente, não era preciso administrar), e os objectivos são <em>definidos</em> (sem objectivo não há administração, há agitação).</p>
<p>Os recursos que uma empresa administra são cinco:</p>
<ul>
<li><strong>Pessoas</strong> — quem faz o quê, com que contrato, por que salário, com que horário.</li>
<li><strong>Dinheiro</strong> — o que entra, o que sai, quando, e quanto sobra em caixa hoje.</li>
<li><strong>Materiais</strong> — mercadoria, matéria-prima, equipamento, consumíveis de escritório.</li>
<li><strong>Informação</strong> — contratos, facturas, recibos, declarações, contactos, preços.</li>
<li><strong>Tempo</strong> — prazos legais, prazos de cliente, prazos de fornecedor.</li>
</ul>
<p>A distinção prática que mais interessa ao técnico é esta: a <strong>gestão</strong> decide (que preço praticar, quem contratar, que fornecedor escolher); a <strong>administração</strong> organiza e executa o que torna a decisão possível e verificável (o contrato assinado, a factura registada, o pagamento processado, o documento arquivado). Um bom gestor com uma administração fraca perde dinheiro sem perceber onde. Foi o que aconteceu na Kimbo.</p></div>

<div class="cb"><h2><i class="fas fa-list-check"></i> 2. As três camadas de trabalho numa empresa</h2>
<p>Numa empresa angolana de pequena ou média dimensão, o trabalho reparte-se por três camadas, e o técnico administrativo trabalha na do meio, com um pé em cada uma das outras.</p>
<div class="tw"><table class="dt">
<tr><th>Camada</th><th>Quem</th><th>O que faz</th><th>Exemplo na Kimbo</th></tr>
<tr><td>Estratégica</td><td>Sócio-gerente, direcção</td><td>Decide o rumo: mercados, investimento, preços</td><td>Decidir abrir rota em Benguela</td></tr>
<tr><td>Administrativa</td><td>Técnico administrativo, escritório</td><td>Organiza, regista, controla, cumpre prazos</td><td>Registar as facturas, controlar contas a pagar, tratar do seguro das carrinhas</td></tr>
<tr><td>Operacional</td><td>Motoristas, armazém, vendedores</td><td>Executa a actividade que gera receita</td><td>Carregar e entregar nas 62 lojas</td></tr>
</table></div>
<p>Quando a camada administrativa falha, a camada estratégica decide às cegas (não tem números fiáveis) e a operacional pára (falta o seguro, falta a guia, falta o material). Por isso é comum ouvir que o escritório é o "custo" da empresa. É o contrário: é o mecanismo de controlo que impede a empresa de perder o que ganhou.</p></div>

<div class="cb"><h2><i class="fas fa-calculator"></i> 3. Quanto custa não administrar: um cálculo</h2>
<p>É útil o técnico saber pôr um valor no seu próprio trabalho. Uma forma simples é medir o <strong>custo do erro evitado</strong>.</p>
<div class="fbox"><div class="f">Custo do erro = Valor directo + (Horas perdidas × Custo/hora) + Perda de actividade</div><div class="fd">Valor directo: o dinheiro que saiu a mais. Horas perdidas: tempo de pessoas a corrigir. Perda de actividade: receita que não se fez.</div></div>
<p>Aplicando ao pagamento em duplicado da Kimbo:</p>
<ul>
<li>Valor directo: <strong>1.850.000 Kz</strong> pagos a mais.</li>
<li>Horas perdidas: 14 horas entre o escritório e o gerente a reconciliar extractos e a negociar a devolução. Com um custo médio de 3.500 Kz/hora → 14 × 3.500 = <strong>49.000 Kz</strong>.</li>
<li>Perda de actividade: nenhuma neste caso.</li>
</ul>
<p>Custo total = 1.850.000 + 49.000 + 0 = <strong>1.899.000 Kz</strong>.</p>
<div class="hi">Um registo único de facturas recebidas — uma folha com data de entrada, fornecedor, número da factura e valor — teria custado cerca de 20 minutos por semana e evitado 1.899.000 Kz. É este o argumento económico da função administrativa.</div>
<p>E o cálculo da carrinha parada, que é ainda mais duro:</p>
<ul>
<li>Margem média por dia de uma carrinha na Kimbo: <strong>210.000 Kz</strong>.</li>
<li>Dias parada: 9.</li>
<li>Perda de actividade = 9 × 210.000 = <strong>1.890.000 Kz</strong>.</li>
</ul>
<div class="hi">Uma data numa folha de calendário de obrigações valia 1.890.000 Kz. O trabalho administrativo raramente aparece na conta de resultados — mas está lá, do lado de dentro da margem.</div></div>

<div class="cb"><h2><i class="fas fa-flag"></i> 4. O contexto angolano: porque é que administrar aqui tem exigências próprias</h2>
<p>A administração num escritório angolano tem particularidades que não se aprendem num manual internacional:</p>
<ul>
<li><strong>Densidade de obrigações declarativas.</strong> A empresa relaciona-se regularmente com a <strong>AGT</strong> (Administração Geral Tributária) para o IVA, o IRT retido aos trabalhadores e o Imposto Industrial, e com o <strong>INSS</strong> para as contribuições da segurança social. Cada uma tem o seu prazo próprio, e o técnico administrativo é normalmente quem prepara os elementos.</li>
<li><strong>Peso do documento em papel.</strong> Apesar da digitalização, muitas relações continuam a exigir o original assinado e carimbado: guias, recibos, declarações, credenciais. Perder o original tem custo real.</li>
<li><strong>Circulação física.</strong> Entregar um documento em Talatona partindo de Viana pode consumir metade de um dia útil. O planeamento de deslocações faz parte do trabalho administrativo, ao contrário do que acontece onde tudo é submetido por portal.</li>
<li><strong>Informalidade a montante.</strong> Muitos fornecedores pequenos não emitem factura em condições. O técnico tem de saber exigir o documento válido, porque sem ele o custo não é aceite fiscalmente e a empresa paga imposto sobre um lucro que não teve.</li>
</ul>
<p>Este último ponto é dos que mais dinheiro custa às PME angolanas. Comprar 800.000 Kz de material a quem só passa um "talão" sem os elementos fiscais obrigatórios significa, na prática, que esses 800.000 Kz podem não ser aceites como custo. A empresa gastou o dinheiro e ainda vai pagar imposto como se não tivesse gasto.</p></div>

<div class="cb"><h2><i class="fas fa-user-tie"></i> 5. Onde o técnico administrativo entra em cada recurso</h2>
<div class="tw"><table class="dt">
<tr><th>Recurso</th><th>Tarefa típica do técnico</th><th>O que protege</th></tr>
<tr><td>Pessoas</td><td>Organiza processos individuais, regista faltas e férias, prepara elementos do salário</td><td>Evita processo laboral e erro de vencimento</td></tr>
<tr><td>Dinheiro</td><td>Regista facturas, controla contas a pagar e a receber, concilia o banco</td><td>Evita pagamento em duplicado e ruptura de caixa</td></tr>
<tr><td>Materiais</td><td>Requisições, entrada em armazém, controlo de consumíveis</td><td>Evita compra desnecessária e falta de material</td></tr>
<tr><td>Informação</td><td>Regista correspondência, arquiva, mantém contactos e contratos</td><td>Evita perda de prova e demora a responder</td></tr>
<tr><td>Tempo</td><td>Mantém o calendário de obrigações e prazos</td><td>Evita multas e caducidade de licenças</td></tr>
</table></div></div>

<div class="dg"><div class="dgt">A administração como circuito de controlo</div>
<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="95" width="130" height="60" rx="8" fill="#0B1F3A"/>
<text x="85" y="120" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">OBJECTIVO</text>
<text x="85" y="140" font-size="12" fill="#ffffff" text-anchor="middle">definido pela gestão</text>
<rect x="185" y="95" width="130" height="60" rx="8" fill="#FF6B00"/>
<text x="250" y="120" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">RECURSOS</text>
<text x="250" y="140" font-size="12" fill="#ffffff" text-anchor="middle">pessoas · dinheiro · info</text>
<rect x="350" y="95" width="130" height="60" rx="8" fill="#00A3A1"/>
<text x="415" y="120" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">EXECUÇÃO</text>
<text x="415" y="140" font-size="12" fill="#ffffff" text-anchor="middle">actividade operacional</text>
<rect x="500" y="95" width="100" height="60" rx="8" fill="#16a34a"/>
<text x="550" y="120" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">RESULTADO</text>
<text x="550" y="140" font-size="12" fill="#ffffff" text-anchor="middle">medido</text>
<path d="M150 125 L182 125" stroke="#64748B" stroke-width="2" marker-end="url(#a1)"/>
<path d="M315 125 L347 125" stroke="#64748B" stroke-width="2" marker-end="url(#a1)"/>
<path d="M480 125 L497 125" stroke="#64748B" stroke-width="2" marker-end="url(#a1)"/>
<path d="M550 95 L550 45 L250 45 L250 92" stroke="#dc2626" stroke-width="2" fill="none" stroke-dasharray="5,4" marker-end="url(#a2)"/>
<text x="400" y="35" font-size="12" fill="#dc2626" text-anchor="middle" font-weight="bold">CONTROLO — o resultado corrige a afectação de recursos</text>
<text x="310" y="215" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">O técnico administrativo trabalha em RECURSOS e em CONTROLO</text>
<defs>
<marker id="a1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#64748B"/></marker>
<marker id="a2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
</defs>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — levantar as rotinas administrativas de uma empresa</h2>
<p>Quando entra numa empresa que nunca teve escritório organizado, o primeiro trabalho do técnico é este levantamento. Leva dois a três dias e vale mais do que qualquer manual.</p>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Listar tudo o que entra e sai em papel ou digital</h4><p>Durante uma semana, anote cada documento que chega e cada documento que sai: facturas, guias, cartas, emails com anexos, notificações. Colunas: data, tipo, origem/destino, quem tratou.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Listar as obrigações com data fixa</h4><p>Salários, contribuições ao INSS, declarações à AGT, renda, seguros, licenças, contratos com renovação automática. Cada uma com a data e quem é responsável.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Identificar os pontos sem dono</h4><p>Em cada linha das duas listas, escreva o nome de uma pessoa. As linhas onde não consegue escrever um nome são os buracos por onde a empresa perde dinheiro — foi o caso do seguro das carrinhas na Kimbo.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Criar um registo único de entrada</h4><p>Um só livro ou uma só folha onde <em>todo</em> o documento recebido é inscrito, com número sequencial e data. Sem excepção para o gerente. É a medida isolada que mais erros elimina.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Montar o calendário anual de obrigações</h4><p>Doze folhas, uma por mês, com as obrigações de data fixa já inscritas. Afixe-o à vista no escritório e reveja-o na primeira segunda-feira de cada mês.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Apresentar ao gerente e obter validação escrita</h4><p>Um email curto a listar o que passa a ser feito, por quem, com que periodicidade. Sem esta validação, a rotina não sobrevive ao primeiro mês de pressão.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de serviços de limpeza em Talatona, com 40 trabalhadores, funcionou dois anos sem registo de entrada de correspondência. O gerente recebia tudo directamente e distribuía a quem estivesse à mão. Em 2023, uma notificação relativa a uma obrigação declarativa foi entregue no escritório, ficou num monte de papéis em cima de um armário e só apareceu quatro meses depois, quando já corriam juros e acréscimos. A empresa acabou a pagar o valor em atraso mais os acréscimos, e teve de contratar apoio externo para regularizar a situação. Somando tudo, o custo passou dos <strong>4.500.000 Kz</strong> — mais do que o salário anual de um técnico administrativo.</p>
<p>O erro não foi de ninguém em particular, e é isso que o torna perigoso: não havia procedimento, portanto não havia responsável. Um documento que ninguém regista é um documento que ninguém tem obrigação de tratar.</p>
<div class="hi">Como evitar: institua um <strong>livro de entrada</strong> único e numerado, onde todo o documento recebido é inscrito no próprio dia, mesmo o que é entregue em mão ao gerente. O documento só sai do livro para uma pasta com dono e prazo. Uma folha por semana, cinco minutos por dia.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Relação laboral</div><blockquote>As relações de trabalho subordinado em Angola regem-se pela <strong>Lei Geral do Trabalho — Lei n.º 12/23, de 27 de Dezembro de 2023</strong>. Toda a organização administrativa de pessoal (contratos, horários, faltas, férias, cessação) parte deste diploma.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Registo e identificação fiscal</div><blockquote>Toda a empresa que exerce actividade em Angola tem de estar registada e possuir <strong>NIF</strong> atribuído pela AGT. As obrigações declarativas e os respectivos prazos devem ser confirmados junto da AGT ou do portal oficial, porque variam com o regime de tributação da empresa.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Segurança social</div><blockquote>A empresa inscreve-se e inscreve os trabalhadores no <strong>INSS</strong>, retém a parte do trabalhador e entrega a contribuição na periodicidade legal. As taxas e o prazo de entrega em vigor devem ser confirmados junto do INSS.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Conservação de documentos</div><blockquote>Os documentos de suporte da contabilidade e das obrigações fiscais têm de ser conservados durante o prazo legal e apresentados em caso de fiscalização. O prazo aplicável deve ser confirmado junto do contabilista da empresa ou da AGT.</blockquote></div>
</div>` },

{ title: "1.2 O perfil e as funções do Técnico Administrativo",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Descrever as áreas de responsabilidade típicas de um técnico administrativo numa empresa angolana.</li>
<li>Distinguir tarefas que o técnico <strong>executa</strong> das que apenas <strong>prepara</strong> para decisão superior.</li>
<li>Elaborar a sua própria descrição de funções e negociá-la com a chefia.</li>
<li>Auto-avaliar competências técnicas e comportamentais e identificar lacunas a colmatar.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Clínica Sagrada Esperança do Kilamba</strong> — nome fictício, situação real e comum — abriu com dois médicos, uma enfermeira e uma recepcionista. Ao fim de dois anos tinha 11 médicos, 9 enfermeiros, 3 técnicos de laboratório e continuava com a mesma recepcionista a fazer tudo o que não fosse clínico.</p>
<p>Essa pessoa, a Dona Esperança, fazia num dia: atender ao balcão, marcar consultas, receber pagamentos em numerário e por TPA, emitir recibos, comprar consumíveis, receber facturas de fornecedores, entregar documentos ao contabilista, controlar as faltas dos enfermeiros e comprar água para o escritório. Trabalhava das 7h às 19h e a clínica funcionava. Só que: os recibos tinham numeração com saltos, o dinheiro em caixa nunca batia certo ao cêntimo, faltavam três contratos de trabalho por assinar e ninguém sabia dizer quanto a clínica gastou em consumíveis no mês anterior.</p>
<p>Quando a direcção contratou um <strong>técnico administrativo</strong> a sério, a primeira coisa que ele fez não foi trabalhar mais depressa — foi escrever, numa folha, tudo o que era feito no escritório e repartir por quatro colunas: <em>o que eu faço e decido</em>, <em>o que eu faço e a direcção aprova</em>, <em>o que outra pessoa deve fazer</em>, <em>o que ninguém está a fazer</em>. Essa última coluna tinha nove linhas. Uma delas era "conferir o caixa ao fim do dia contra os recibos emitidos". Três meses depois, a diferença acumulada entre o caixa e os recibos tinha passado de cerca de <strong>180.000 Kz por mês</strong> para menos de 5.000 Kz.</p>
<p>A lição não é sobre trabalhar mais. É sobre <strong>definir a função</strong>. Um técnico administrativo sem descrição de funções acaba a ser o pau para toda a obra — e o pau para toda a obra não é responsável por nada em concreto, portanto nada é feito bem.</p></div>

<div class="cb"><h2><i class="fas fa-briefcase"></i> 1. As seis áreas de responsabilidade</h2>
<p>Independentemente da dimensão da empresa, o trabalho do técnico administrativo cai em seis áreas. Numa empresa pequena faz todas; numa grande especializa-se em uma ou duas.</p>
<div class="tw"><table class="dt">
<tr><th>Área</th><th>Tarefas típicas</th><th>Documento que produz</th></tr>
<tr><td>Expediente e documentação</td><td>Receber, registar, distribuir e arquivar correspondência</td><td>Livro de entrada/saída, plano de arquivo</td></tr>
<tr><td>Apoio financeiro</td><td>Registar facturas, controlar contas a pagar e a receber, fundo de maneio</td><td>Mapa de contas a pagar, folha de caixa</td></tr>
<tr><td>Apoio a pessoal</td><td>Processos individuais, mapa de assiduidade, férias, elementos do salário</td><td>Mapa de assiduidade, processo individual</td></tr>
<tr><td>Compras e economato</td><td>Requisições, consultas a fornecedores, recepção de material</td><td>Requisição, mapa comparativo, guia de recepção</td></tr>
<tr><td>Atendimento</td><td>Balcão, telefone, email, encaminhamento de clientes</td><td>Registo de contactos e de reclamações</td></tr>
<tr><td>Apoio ao cumprimento de obrigações</td><td>Reunir elementos para AGT, INSS, seguros e licenças</td><td>Calendário de obrigações, dossiê mensal</td></tr>
</table></div>
<p>Note-se que em todas as áreas o técnico <strong>produz um documento</strong>. Trabalho administrativo que não deixa registo não é trabalho administrativo: é boa vontade. Se não há folha, mapa ou registo, não há prova, não há continuidade e não há forma de outra pessoa retomar o trabalho quando o titular está de férias ou doente.</p></div>

<div class="cb"><h2><i class="fas fa-user-check"></i> 2. Competências técnicas exigíveis</h2>
<p>Estas são verificáveis e treináveis. Quem contrata testa-as, muitas vezes com um exercício prático.</p>
<ul>
<li><strong>Escrita formal em português</strong> — redigir um ofício, um email institucional e uma acta sem erros e sem informalidade. É a competência mais visível ao exterior e a que mais depressa desqualifica quem não a tem.</li>
<li><strong>Folha de cálculo</strong> — construir uma tabela com fórmulas de soma, percentagem, <em>SE</em> e <em>PROCV</em>; usar filtros e tabelas dinâmicas simples. Um mapa de contas a pagar sem fórmulas é um mapa que vai ter erros.</li>
<li><strong>Cálculo comercial e fiscal básico</strong> — percentagens, descontos, IVA, retenções, conversão de moeda. Não substitui o contabilista, mas permite conferir o que ele devolve.</li>
<li><strong>Organização documental</strong> — classificar, codificar e recuperar um documento em menos de dois minutos.</li>
<li><strong>Ferramentas do dia</strong> — email profissional, calendário partilhado, digitalização, PDF, plataformas da empresa.</li>
</ul>
<div class="hi">Teste rápido de competência: peça-lhe para encontrar a factura n.º 214 do fornecedor X do ano passado. Se demora mais de cinco minutos, o problema não é da memória — é do sistema de arquivo, que também é responsabilidade do técnico.</div></div>

<div class="cb"><h2><i class="fas fa-handshake"></i> 3. Competências comportamentais que fazem a diferença</h2>
<ul>
<li><strong>Discrição</strong> — o técnico vê salários, avaliações, dívidas e conflitos. Quem comenta perde a função. Este ponto é tratado em detalhe na aula 1.21.</li>
<li><strong>Método</strong> — fazer sempre da mesma maneira, para que o erro se note. Quem improvisa cada vez nunca sabe onde falhou.</li>
<li><strong>Firmeza cordial</strong> — dizer a um chefe de departamento que a requisição está incompleta, sem criar conflito. Boa parte do trabalho administrativo é recusar documentos mal feitos.</li>
<li><strong>Antecipação</strong> — tratar do prazo duas semanas antes, não na véspera. Em Luanda, onde uma deslocação a uma repartição pode consumir meio dia e não resolver, a antecipação não é uma virtude: é uma necessidade operacional.</li>
<li><strong>Escrita de registo</strong> — deixar a nota escrita do que combinou por telefone. "Falámos e ficou combinado" não é prova; um email de confirmação é.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> 4. O que o técnico decide e o que apenas prepara</h2>
<p>Esta fronteira é a fonte número um de conflito nos escritórios. Deve ser escrita, não presumida.</p>
<div class="tw"><table class="dt">
<tr><th>Matéria</th><th>Técnico</th><th>Chefia</th></tr>
<tr><td>Registo e arquivo de documentos</td><td>Decide e executa</td><td>Não intervém</td></tr>
<tr><td>Compra de consumíveis até um limite fixado</td><td>Decide e executa</td><td>Fixa o limite e revê o mapa mensal</td></tr>
<tr><td>Compra acima do limite</td><td>Consulta o mercado e prepara mapa comparativo</td><td>Escolhe e autoriza</td></tr>
<tr><td>Pagamento a fornecedor</td><td>Prepara e confere</td><td>Autoriza e assina</td></tr>
<tr><td>Contratação, salário, sanção</td><td>Prepara documentos</td><td>Decide</td></tr>
<tr><td>Resposta a reclamação simples</td><td>Responde segundo guião</td><td>Aprova o guião</td></tr>
<tr><td>Resposta a notificação oficial</td><td>Reúne elementos e alerta</td><td>Decide o teor e assina</td></tr>
</table></div>
<div class="hi">Regra prática segura: o técnico administrativo nunca assina sozinho o que <strong>compromete a empresa perante terceiros</strong> — pagamentos, contratos, respostas a entidades públicas. Prepara, confere, apresenta. Quem assina é quem tem poderes para obrigar a sociedade.</div></div>

<div class="cb"><h2><i class="fas fa-chart-line"></i> 5. Um exemplo trabalhado: o limite de compra autónoma</h2>
<p>A direcção da clínica quis fixar um limite abaixo do qual o técnico compra sem autorização prévia. Fixar o limite alto demais expõe a empresa; baixo demais transforma o gerente em despachante de canetas.</p>
<p>Analisaram-se 6 meses de compras de economato: 214 compras, no total de <strong>7.490.000 Kz</strong>.</p>
<div class="fbox"><div class="f">Valor médio por compra = Total ÷ N.º de compras</div><div class="fd">Base para escolher um limite que cubra a maioria das compras rotineiras</div></div>
<p>7.490.000 ÷ 214 = <strong>35.000 Kz</strong> por compra, em média. Verificou-se ainda que 186 das 214 compras (87%) ficavam abaixo de 60.000 Kz.</p>
<p>Fixando o limite em <strong>60.000 Kz</strong>: 87% das compras deixam de precisar de autorização; as 28 restantes (13%), que representam a maior parte do valor, continuam a passar pela direcção.</p>
<div class="hi">Limite fixado: 60.000 Kz por compra e um tecto de 400.000 Kz por mês, com mapa de justificação entregue no dia 5. Resultado: 87% das compras deixaram de esperar por assinatura, e o controlo manteve-se sobre o valor que conta.</div></div>

<div class="dg"><div class="dgt">Fronteira de decisão do técnico administrativo</div>
<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="20" width="270" height="220" rx="10" fill="#00A3A1" opacity="0.10" stroke="#00A3A1" stroke-width="2"/>
<text x="150" y="45" font-size="14" fill="#00A3A1" text-anchor="middle" font-weight="bold">DECIDE E EXECUTA</text>
<text x="150" y="75" font-size="12" fill="#0B1F3A" text-anchor="middle">Registo de correspondência</text>
<text x="150" y="100" font-size="12" fill="#0B1F3A" text-anchor="middle">Arquivo e classificação</text>
<text x="150" y="125" font-size="12" fill="#0B1F3A" text-anchor="middle">Compras até ao limite fixado</text>
<text x="150" y="150" font-size="12" fill="#0B1F3A" text-anchor="middle">Marcação de reuniões</text>
<text x="150" y="175" font-size="12" fill="#0B1F3A" text-anchor="middle">Atendimento de rotina</text>
<text x="150" y="200" font-size="12" fill="#0B1F3A" text-anchor="middle">Mapas de controlo</text>
<rect x="315" y="20" width="270" height="220" rx="10" fill="#FF6B00" opacity="0.10" stroke="#FF6B00" stroke-width="2"/>
<text x="450" y="45" font-size="14" fill="#FF6B00" text-anchor="middle" font-weight="bold">PREPARA — CHEFIA DECIDE</text>
<text x="450" y="75" font-size="12" fill="#0B1F3A" text-anchor="middle">Pagamentos a fornecedores</text>
<text x="450" y="100" font-size="12" fill="#0B1F3A" text-anchor="middle">Contratos e salários</text>
<text x="450" y="125" font-size="12" fill="#0B1F3A" text-anchor="middle">Sanções disciplinares</text>
<text x="450" y="150" font-size="12" fill="#0B1F3A" text-anchor="middle">Compras acima do limite</text>
<text x="450" y="175" font-size="12" fill="#0B1F3A" text-anchor="middle">Resposta a entidade oficial</text>
<text x="450" y="200" font-size="12" fill="#0B1F3A" text-anchor="middle">Investimento</text>
<line x1="300" y1="20" x2="300" y2="240" stroke="#64748B" stroke-width="3" stroke-dasharray="6,5"/>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — escrever a sua descrição de funções</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Registar uma semana de trabalho real</h4><p>Anote cada tarefa e o tempo gasto, durante cinco dias úteis. Não estime de memória — a memória sobrevaloriza o que é agradável e esquece as interrupções.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Agrupar nas seis áreas</h4><p>Distribua as tarefas pelas áreas da tabela da secção 1. As áreas vazias são lacunas; as sobrecarregadas são candidatas a simplificação.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Classificar cada tarefa em decidir / preparar / passar a outro</h4><p>As que ficarem em "passar a outro" precisam de nome e de conversa com a chefia. Não as deixe implícitas.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Redigir a descrição em uma página</h4><p>Cabeçalho com designação da função e a quem reporta; lista de responsabilidades por área; limites de decisão com valores; substituto em caso de ausência.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Apresentar à chefia e obter aprovação escrita</h4><p>Um email com o documento em anexo e a frase: "confirma que é este o âmbito?". A resposta é a sua protecção quando surgir a discussão sobre quem devia ter feito o quê.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Rever de seis em seis meses</h4><p>A empresa cresce e a função muda. Uma descrição de funções desactualizada é tão inútil como nenhuma.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Numa empresa de material de construção em Benguela, o técnico administrativo passou a fazer também os pagamentos por transferência bancária, porque o gerente viajava muito e "era mais prático". Não houve alteração formal de funções nem procuração — apenas o acesso ao <em>homebanking</em> e uma confiança de anos.</p>
<p>Em 2022 houve uma transferência errada de <strong>6.200.000 Kz</strong> para um fornecedor que já tinha sido pago. O dinheiro demorou meses a ser recuperado, e no meio disso instalou-se a suspeita: como o técnico executava e conferia, ninguém conseguia demonstrar que tinha sido erro e não desvio. O técnico, que não tinha feito nada de desonesto, saiu da empresa. Perderam-se os dois lados.</p>
<div class="hi">Como evitar: separe sempre <strong>quem prepara</strong> de <strong>quem autoriza</strong> e de <strong>quem confere</strong>. Se a empresa é pequena demais para três pessoas, garanta pelo menos duas: o técnico prepara e confere, o gerente autoriza e assina. E, se a chefia insistir em delegar a autorização, exija que a delegação seja escrita, com limite de valor e prazo. A formalidade aqui protege sobretudo o técnico.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Categoria e funções no contrato</div><blockquote>Nos termos da <strong>Lei Geral do Trabalho (Lei n.º 12/23, de 27 de Dezembro de 2023)</strong>, o contrato de trabalho identifica a categoria e as funções do trabalhador. Alterações relevantes e duradouras às funções devem ser tratadas formalmente e não por prática tácita.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Poderes de representação</div><blockquote>Só obriga a sociedade quem tem poderes para tal, nos termos do pacto social e da lei comercial. Quem assina sem poderes pode responder pessoalmente. Antes de assinar qualquer documento que vincule a empresa, confirme quem consta como gerente ou administrador no registo comercial.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Dever de sigilo</div><blockquote>O trabalhador está vinculado a deveres de lealdade e de sigilo sobre a informação da empresa a que acede por causa da função. A violação é fundamento de procedimento disciplinar.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Segregação de funções</div><blockquote>Não é uma imposição legal directa, mas é exigência de controlo interno aceite universalmente e verificada em auditoria: quem executa um pagamento não deve ser quem o autoriza nem quem o concilia.</blockquote></div>
</div>` },

{ title: "1.3 O dia de trabalho: rotinas diárias, semanais e mensais",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Organizar o dia administrativo em blocos, separando trabalho de fundo de trabalho reactivo.</li>
<li>Construir uma <strong>lista de rotinas</strong> diárias, semanais e mensais para o seu posto.</li>
<li>Aplicar critérios de prioridade que resistam à pressão do "é para já".</li>
<li>Controlar interrupções sem prejudicar o atendimento interno e externo.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Ferragens Kwanza, Lda.</strong>, no Cazenga, tem loja aberta ao público e um pequeno escritório com duas pessoas. A técnica administrativa, Teresa, chegava às 8h e saía às 18h30 e queixava-se de nunca ter tempo para "o trabalho a sério".</p>
<p>Fez-se um registo do seu dia durante duas semanas. O resultado: <strong>63 interrupções por dia</strong>, em média — vendedores a pedir preços, clientes com dúvidas de factura, o gerente a pedir números, fornecedores a telefonar por pagamentos. O trabalho de fundo (conciliar o banco, fechar contas a pagar, organizar o dossiê do contabilista) era sistematicamente empurrado para o fim do dia, quando já estava cansada. Daí vinham os erros: em Julho, três facturas de fornecedores ficaram por lançar, e o mapa de contas a pagar apresentava <strong>2.400.000 Kz</strong> a menos do que a dívida real. O gerente decidiu uma compra a crédito com base nesse número.</p>
<p>A solução não foi contratar mais gente. Foi <strong>reorganizar o dia</strong>: das 8h às 10h, porta fechada e telefone desviado para a loja, para o trabalho de fundo; das 10h às 16h, atendimento e trabalho reactivo; das 16h às 17h30, fecho do dia e preparação do seguinte. Passados dois meses, as horas extraordinárias tinham desaparecido e o mapa de contas a pagar fechava certo todas as sextas-feiras.</p>
<p>A diferença não foi trabalhar mais. Foi deixar de tentar fazer trabalho que exige concentração no meio de 63 interrupções.</p></div>

<div class="cb"><h2><i class="fas fa-layer-group"></i> 1. Os dois tipos de trabalho administrativo</h2>
<p>Todo o trabalho de escritório se divide em dois tipos que exigem condições opostas:</p>
<ul>
<li><strong>Trabalho reactivo</strong> — responde a um estímulo externo: um cliente ao balcão, um telefonema, um email urgente, um pedido do gerente. Não se planeia, planeia-se a <em>janela</em> em que acontece. Suporta interrupção, porque já é feito de interrupções.</li>
<li><strong>Trabalho de fundo</strong> — conciliação bancária, mapas de controlo, arquivo, preparação de documentação, redacção de relatórios. Exige continuidade: cada interrupção obriga a recomeçar o raciocínio, e é onde nascem os erros que custam dinheiro.</li>
</ul>
<p>O erro estrutural de quase todos os escritórios é tratar os dois da mesma maneira, deixando o trabalho de fundo para "quando houver tempo". Nunca há. O trabalho de fundo só existe se tiver <strong>hora marcada e protegida</strong>.</p>
<div class="hi">Regra: o trabalho de fundo agenda-se como se fosse uma reunião com o gerente — e defende-se com a mesma firmeza.</div></div>

<div class="cb"><h2><i class="fas fa-clock"></i> 2. A estrutura do dia em três blocos</h2>
<div class="tw"><table class="dt">
<tr><th>Bloco</th><th>Horário típico</th><th>Conteúdo</th><th>Regra</th></tr>
<tr><td>Bloco de fundo</td><td>08h00 — 10h00</td><td>Conciliações, mapas, lançamentos, redacção</td><td>Telefone desviado, email fechado</td></tr>
<tr><td>Bloco reactivo</td><td>10h00 — 16h00</td><td>Atendimento, telefone, email, pedidos internos, deslocações</td><td>Responder e registar; nada de trabalho que exija concentração</td></tr>
<tr><td>Bloco de fecho</td><td>16h00 — 17h30</td><td>Fecho de caixa, arquivo do dia, lista do dia seguinte</td><td>Nunca sair sem a lista de amanhã escrita</td></tr>
</table></div>
<p>O horário concreto adapta-se: numa empresa que abre ao público às 8h, o bloco de fundo pode ser de manhã cedo ou ao fim da tarde. O que não se adapta é o princípio: <strong>duas horas por dia sem interrupção</strong>, à hora em que o técnico está mais lúcido.</p>
<p>Em Luanda vale ainda a pena considerar o trânsito no desenho do dia. Se a técnica chega às 7h30 porque saiu de casa às 5h40, as primeiras duas horas — antes de a empresa acordar — são as mais produtivas do dia inteiro e é criminoso gastá-las a atender telefones.</p></div>

<div class="cb"><h2><i class="fas fa-calendar-days"></i> 3. A lista de rotinas: diárias, semanais, mensais</h2>
<p>Uma rotina é uma tarefa que se repete com periodicidade fixa. Escrita, deixa de depender da memória de uma pessoa e passa a poder ser executada por quem a substitui.</p>
<div class="tw"><table class="dt">
<tr><th>Periodicidade</th><th>Rotina</th><th>Quando</th></tr>
<tr><td rowspan="5">Diária</td><td>Abrir e registar a correspondência recebida</td><td>Início do dia</td></tr>
<tr><td>Lançar facturas de fornecedores recebidas</td><td>Bloco de fundo</td></tr>
<tr><td>Conferir o caixa contra os recibos emitidos</td><td>Fecho</td></tr>
<tr><td>Arquivar os documentos tratados</td><td>Fecho</td></tr>
<tr><td>Escrever a lista de tarefas do dia seguinte</td><td>Fecho</td></tr>
<tr><td rowspan="4">Semanal</td><td>Conciliar o extracto bancário com os registos</td><td>Segunda-feira, bloco de fundo</td></tr>
<tr><td>Actualizar o mapa de contas a pagar e a receber</td><td>Segunda-feira</td></tr>
<tr><td>Rever contas a receber vencidas e telefonar aos clientes</td><td>Quarta-feira</td></tr>
<tr><td>Verificar stock de economato e repor</td><td>Sexta-feira</td></tr>
<tr><td rowspan="5">Mensal</td><td>Fechar o mapa de assiduidade e enviar para processamento</td><td>Dias 25 a 28</td></tr>
<tr><td>Reunir o dossiê de documentos para o contabilista</td><td>Primeiros dias do mês</td></tr>
<tr><td>Conferir os elementos das obrigações fiscais e sociais</td><td>Conforme calendário confirmado com o contabilista</td></tr>
<tr><td>Rever o calendário de obrigações do mês seguinte</td><td>Última sexta-feira</td></tr>
<tr><td>Verificar validades: seguros, licenças, contratos, alvarás</td><td>Última sexta-feira</td></tr>
</table></div>
<div class="hi">A rotina mais rentável desta lista é a última: cinco minutos por mês a verificar validades evita o cenário da carrinha parada da aula 1.1 e a caducidade de uma licença que impede a empresa de facturar.</div></div>

<div class="cb"><h2><i class="fas fa-sort"></i> 4. Prioridade: um critério que resiste à pressão</h2>
<p>"É urgente" é a frase mais usada e menos informativa do escritório. Um critério útil ordena por <strong>consequência de não fazer</strong>, não por quem pediu mais alto.</p>
<div class="fbox"><div class="f">Prioridade = Consequência × Irreversibilidade</div><div class="fd">Consequência: dinheiro, prazo legal, cliente. Irreversibilidade: dá-se para fazer amanhã sem custo, ou não?</div></div>
<p>Na prática, quatro níveis:</p>
<div class="tw"><table class="dt">
<tr><th>Nível</th><th>Critério</th><th>Exemplo</th><th>Prazo</th></tr>
<tr><td>1 — Não falha</td><td>Prazo legal ou contratual que expira</td><td>Entrega de declaração, pagamento de salários, renovação de seguro</td><td>Antes da data, com folga</td></tr>
<tr><td>2 — Custa dinheiro</td><td>Atraso gera juro, penalização ou perda</td><td>Pagamento com desconto de pronto, cobrança de crédito vencido</td><td>No dia</td></tr>
<tr><td>3 — Bloqueia outros</td><td>Alguém está parado à espera</td><td>Requisição de material para a obra, credencial para deslocação</td><td>No dia</td></tr>
<tr><td>4 — Melhora</td><td>Sem prazo, mas aumenta a qualidade</td><td>Reorganizar o arquivo, criar um modelo de ofício</td><td>Bloco de fundo</td></tr>
</table></div>
<p>Quando o gerente traz uma tarefa de nível 4 apresentada como urgente, a resposta profissional não é recusar nem largar tudo. É: "posso fazer isso hoje se adiar a conciliação bancária para amanhã — confirma?". Devolve-se a decisão a quem tem autoridade para a tomar, e fica registada.</p></div>

<div class="cb"><h2><i class="fas fa-comments"></i> 5. Controlar interrupções sem fechar a porta à empresa</h2>
<ul>
<li><strong>Concentre os pedidos.</strong> Combine com os departamentos que os pedidos de rotina são feitos por email ou num formulário, e que são tratados em duas janelas do dia — por exemplo às 11h e às 15h. Reduz drasticamente as batidas à porta.</li>
<li><strong>Desvie o telefone no bloco de fundo.</strong> Numa loja, o telefone passa para o balcão; numa empresa maior, para a recepção. Não é ignorar: é encaminhar.</li>
<li><strong>Feche o email.</strong> O email não é um serviço de urgência. Três verificações por dia — início do bloco reactivo, depois do almoço e no fecho — chegam em quase todas as empresas.</li>
<li><strong>Escreva o que interrompeu.</strong> Um caderno ao lado. Quando alguém interrompe com um assunto que não é de nível 1 a 3, anota-se e trata-se no bloco reactivo. Ninguém fica sem resposta e o raciocínio não se perde.</li>
</ul>
<p>Estas medidas exigem acordo da chefia. Implementadas sem aviso, parecem falta de disponibilidade. Apresentadas com o registo das 63 interrupções por dia e com o mapa de 2.400.000 Kz por lançar, tornam-se óbvias.</p></div>

<div class="dg"><div class="dgt">O dia administrativo em três blocos</div>
<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="60" width="160" height="80" rx="8" fill="#0B1F3A"/>
<text x="100" y="88" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">08h — 10h</text>
<text x="100" y="108" font-size="12" fill="#ffffff" text-anchor="middle">TRABALHO DE FUNDO</text>
<text x="100" y="126" font-size="11" fill="#FF6B00" text-anchor="middle">porta fechada</text>
<rect x="200" y="60" width="230" height="80" rx="8" fill="#00A3A1"/>
<text x="315" y="88" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">10h — 16h</text>
<text x="315" y="108" font-size="12" fill="#ffffff" text-anchor="middle">TRABALHO REACTIVO</text>
<text x="315" y="126" font-size="11" fill="#ffffff" text-anchor="middle">atendimento · telefone · email · pedidos</text>
<rect x="450" y="60" width="150" height="80" rx="8" fill="#FF6B00"/>
<text x="525" y="88" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">16h — 17h30</text>
<text x="525" y="108" font-size="12" fill="#ffffff" text-anchor="middle">FECHO</text>
<text x="525" y="126" font-size="11" fill="#ffffff" text-anchor="middle">caixa · arquivo · lista</text>
<text x="310" y="35" font-size="13" fill="#0B1F3A" text-anchor="middle" font-weight="bold">Cada bloco tem uma regra própria — misturá-los é a origem do erro</text>
<text x="310" y="175" font-size="12" fill="#dc2626" text-anchor="middle">Erro típico: tentar conciliar o banco às 14h, entre dois clientes ao balcão</text>
<text x="310" y="197" font-size="12" fill="#16a34a" text-anchor="middle">Correcção: conciliação às 8h15, com o telefone desviado</text>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — implantar as rotinas no seu posto</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Medir antes de mudar</h4><p>Uma semana de registo: cada tarefa, cada interrupção, hora de início e fim. É o dado que sustenta a conversa com a chefia.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Separar fundo de reactivo</h4><p>Marque cada tarefa da lista com F ou R. Some as horas de cada tipo. Se o trabalho de fundo aparece disperso por dez momentos do dia, encontrou a causa dos erros.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Escrever a lista de rotinas</h4><p>Três colunas: diária, semanal, mensal. Cada linha com a tarefa, o dia/hora e o documento que produz.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Negociar o bloco protegido</h4><p>Apresente ao gerente o registo da semana e proponha duas horas protegidas. Peça o acordo por escrito e informe os departamentos por circular interna.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Afixar o calendário mensal de obrigações</h4><p>À vista de todos no escritório. Uma obrigação visível é uma obrigação que outra pessoa também pode lembrar.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Rever ao fim de um mês</h4><p>O que não se cumpriu? Rotina a mais, hora errada ou falta de acordo da chefia? Corrija uma coisa de cada vez.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Numa empresa de transporte de mercadorias em Viana, a técnica administrativa acumulava o lançamento de facturas de fornecedores com o atendimento telefónico dos motoristas. Como os motoristas telefonavam durante todo o dia, os lançamentos ficavam para o fim, e ao fim de três meses havia um atraso de cinco semanas.</p>
<p>Em 2023, o gerente consultou o mapa de contas a pagar antes de decidir a compra de um camião usado por <strong>28.000.000 Kz</strong>. O mapa mostrava um passivo de fornecedores de 9.000.000 Kz. O passivo real, com as facturas por lançar, era de <strong>17.400.000 Kz</strong>. A compra avançou. Em Fevereiro, a empresa entrou em ruptura de tesouraria, atrasou salários duas semanas e teve de negociar prazos com quatro fornecedores, perdendo o desconto de pronto pagamento de um deles — cerca de <strong>1.100.000 Kz</strong> ao ano.</p>
<p>O gerente decidiu mal, mas decidiu com o número que lhe deram. A responsabilidade do número é administrativa.</p>
<div class="hi">Como evitar: fixe uma <strong>regra de latência</strong> — nenhuma factura de fornecedor fica mais de 48 horas por lançar, e o mapa de contas a pagar tem no cabeçalho a data e a hora da última actualização. Quem lê o mapa vê imediatamente se está a decidir com informação fresca ou com informação de há cinco semanas.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Período normal de trabalho</div><blockquote>Os limites do período normal de trabalho, o descanso e as condições do trabalho extraordinário constam da <strong>Lei Geral do Trabalho (Lei n.º 12/23, de 27 de Dezembro de 2023)</strong>. A organização do dia não pode ser usada para exigir trabalho para além dos limites legais sem o respectivo enquadramento e retribuição.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Registo de assiduidade</div><blockquote>A empresa deve manter registo do tempo de trabalho dos trabalhadores. Este registo é elemento de prova em caso de litígio laboral e base do processamento salarial.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Cumprimento de prazos declarativos</div><blockquote>O incumprimento de prazos declarativos perante a AGT e o INSS gera acréscimos e penalizações. Os prazos concretos aplicáveis à sua empresa devem ser confirmados junto do contabilista e do portal da AGT, e inscritos no calendário anual de obrigações.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Fiabilidade da informação de gestão</div><blockquote>A informação financeira usada para decidir deve ser tempestiva e completa. Um mapa de contas a pagar incompleto não é apenas ineficiente: é informação enganosa para quem decide.</blockquote></div>
</div>` }

];
