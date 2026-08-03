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
</div>` },

{ title: "1.4 Planear: objectivos, planos e orçamento do escritório",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Distinguir planeamento estratégico, táctico e operacional e situar o trabalho administrativo em cada nível.</li>
<li>Formular objectivos verificáveis, com valor, prazo e responsável.</li>
<li>Elaborar o <strong>orçamento anual de funcionamento</strong> de um escritório em kwanzas.</li>
<li>Controlar a execução orçamental e calcular desvios em valor e em percentagem.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Gráfica Ondjila</strong>, em Luanda, com 23 trabalhadores, nunca teve orçamento. Comprava-se o que fazia falta quando fazia falta. O gerente sabia quanto facturava, mas não conseguia dizer quanto custava manter o escritório e a administração a funcionar.</p>
<p>Em Janeiro, o técnico administrativo levantou os gastos não produtivos dos doze meses anteriores a partir dos extractos bancários e das facturas arquivadas. O total foi de <strong>41.760.000 Kz</strong>, ou seja <strong>3.480.000 Kz por mês</strong>. Três números saltaram à vista. O primeiro: <strong>7.200.000 Kz</strong> em comunicações — porque havia 19 cartões de telemóvel da empresa activos e só 12 pessoas os usavam para trabalho. O segundo: <strong>5.400.000 Kz</strong> em consumíveis de impressão, num ano em que a gráfica imprimiu para clientes com equipamento próprio — os consumíveis eram do escritório e havia impressão pessoal sem controlo. O terceiro: <strong>2.900.000 Kz</strong> em táxis e combustível para deslocações que ninguém justificava.</p>
<p>O orçamento do ano seguinte foi construído a partir destes números, com cortes fundamentados: 7 cartões cancelados, impressão com código por utilizador, e requisição escrita para deslocações. O gasto do ano fechou em <strong>32.100.000 Kz</strong> — uma poupança de <strong>9.660.000 Kz</strong>, cerca de 23%, sem despedir ninguém e sem que nenhum trabalho deixasse de ser feito.</p>
<p>Planear, aqui, não foi adivinhar o futuro. Foi olhar para o passado com método e escrever o que se pretende que aconteça.</p></div>

<div class="cb"><h2><i class="fas fa-layer-group"></i> 1. Os três níveis de planeamento</h2>
<div class="tw"><table class="dt">
<tr><th>Nível</th><th>Horizonte</th><th>Quem</th><th>Exemplo na Gráfica Ondjila</th><th>Papel do técnico</th></tr>
<tr><td>Estratégico</td><td>3 a 5 anos</td><td>Sócios, direcção</td><td>Entrar no mercado de embalagem alimentar</td><td>Fornece dados históricos</td></tr>
<tr><td>Táctico</td><td>1 ano</td><td>Chefias de departamento</td><td>Orçamento anual, plano de compras, plano de formação</td><td>Elabora e consolida o orçamento</td></tr>
<tr><td>Operacional</td><td>Semana a mês</td><td>Técnicos, encarregados</td><td>Plano de produção da semana, calendário de obrigações</td><td>Executa e controla</td></tr>
</table></div>
<p>O técnico administrativo é o elo entre os níveis: fornece ao nível estratégico os números do passado, elabora materialmente o plano táctico e executa o operacional. Sem ele, o planeamento estratégico assenta em impressões.</p></div>

<div class="cb"><h2><i class="fas fa-crosshairs"></i> 2. Objectivo verificável: quatro elementos obrigatórios</h2>
<p>"Reduzir custos" não é um objectivo, é uma intenção. Um objectivo administrativo precisa de quatro elementos:</p>
<div class="fbox"><div class="f">Objectivo = Verbo de acção + Valor mensurável + Prazo + Responsável</div><div class="fd">Falta um elemento, e ninguém consegue dizer no fim do ano se foi cumprido ou não</div></div>
<div class="tw"><table class="dt">
<tr><th>Intenção vaga</th><th>Objectivo verificável</th></tr>
<tr><td>Reduzir custos de comunicações</td><td>Reduzir o custo mensal de comunicações de 600.000 Kz para 420.000 Kz até 31 de Março — responsável: técnico administrativo</td></tr>
<tr><td>Melhorar a cobrança</td><td>Baixar o prazo médio de recebimento de 68 para 45 dias até 30 de Junho — responsável: técnico administrativo com o comercial</td></tr>
<tr><td>Organizar o arquivo</td><td>Ter o arquivo de 2024 classificado e indexado, com recuperação de qualquer documento em menos de 3 minutos, até 30 de Abril — responsável: técnico administrativo</td></tr>
<tr><td>Cumprir as obrigações</td><td>Zero entregas fora de prazo à AGT e ao INSS no exercício — responsável: técnico administrativo, verificação mensal com o contabilista</td></tr>
</table></div>
<div class="hi">Se não consegue escrever, hoje, qual é o número que vai olhar em Dezembro para saber se cumpriu, então ainda não tem um objectivo.</div></div>

<div class="cb"><h2><i class="fas fa-receipt"></i> 3. O orçamento de funcionamento do escritório, rubrica a rubrica</h2>
<p>O orçamento administrativo cobre os custos de funcionamento, não os custos de produção. As rubricas típicas de uma PME angolana:</p>
<div class="tw"><table class="dt">
<tr><th>Rubrica</th><th>O que inclui</th><th>Base de estimativa</th></tr>
<tr><td>Pessoal administrativo</td><td>Salários, subsídios, encargos com a segurança social</td><td>Folha actual + aumentos previstos</td></tr>
<tr><td>Instalações</td><td>Renda, condomínio, água, energia, limpeza, segurança</td><td>Contratos em vigor + revisão prevista</td></tr>
<tr><td>Comunicações</td><td>Internet, telefones fixos e móveis, plataformas</td><td>Média dos 12 meses anteriores, corrigida</td></tr>
<tr><td>Economato</td><td>Papel, tinteiros, material de escritório, consumíveis de copa</td><td>Consumo histórico por pessoa × n.º de pessoas</td></tr>
<tr><td>Deslocações</td><td>Combustível, táxis, portagens, ajudas de custo</td><td>Histórico + deslocações previstas</td></tr>
<tr><td>Serviços externos</td><td>Contabilista, advogado, informática, formação</td><td>Contratos em vigor</td></tr>
<tr><td>Seguros e licenças</td><td>Frota, multirriscos, acidentes de trabalho, alvarás</td><td>Apólices e taxas em vigor</td></tr>
<tr><td>Manutenção</td><td>Equipamento, viaturas, instalações</td><td>Histórico + plano de manutenção</td></tr>
<tr><td>Imprevistos</td><td>Margem de segurança</td><td>3% a 5% do total das rubricas anteriores</td></tr>
</table></div>
<p><strong>Exemplo trabalhado</strong> — orçamento mensal do escritório da Gráfica Ondjila para o ano seguinte:</p>
<div class="tw"><table class="dt">
<tr><th>Rubrica</th><th>Ano anterior (Kz/mês)</th><th>Orçamentado (Kz/mês)</th><th>Justificação</th></tr>
<tr><td>Pessoal administrativo</td><td>1.450.000</td><td>1.595.000</td><td>Aumento de 10% previsto</td></tr>
<tr><td>Instalações</td><td>620.000</td><td>620.000</td><td>Contrato de renda fixo</td></tr>
<tr><td>Comunicações</td><td>600.000</td><td>390.000</td><td>7 cartões cancelados</td></tr>
<tr><td>Economato</td><td>450.000</td><td>270.000</td><td>Código de impressão por utilizador</td></tr>
<tr><td>Deslocações</td><td>242.000</td><td>150.000</td><td>Requisição escrita obrigatória</td></tr>
<tr><td>Serviços externos</td><td>380.000</td><td>380.000</td><td>Contratos mantidos</td></tr>
<tr><td>Seguros e licenças</td><td>195.000</td><td>210.000</td><td>Revisão de apólice</td></tr>
<tr><td>Manutenção</td><td>90.000</td><td>110.000</td><td>Plano preventivo novo</td></tr>
<tr><td>Imprevistos (4%)</td><td>—</td><td>149.000</td><td>4% sobre 3.725.000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>4.027.000</strong></td><td><strong>3.874.000</strong></td><td>—</td></tr>
</table></div>
<div class="hi">Orçamento anual = 3.874.000 × 12 = <strong>46.488.000 Kz</strong>. Repare que a rubrica de pessoal <em>subiu</em> e o total desceu: um orçamento não é um exercício de cortar tudo, é de decidir onde se gasta.</div></div>

<div class="cb"><h2><i class="fas fa-chart-line"></i> 4. Controlo orçamental: calcular e ler o desvio</h2>
<p>Um orçamento que não é confrontado com o real todos os meses é decoração. O cálculo é simples:</p>
<div class="fbox"><div class="f">Desvio = Real − Orçamentado &nbsp;·&nbsp; Desvio % = (Real − Orçamentado) ÷ Orçamentado × 100</div><div class="fd">Desvio positivo numa rubrica de custo é gasto a mais. Negativo é poupança — ou tarefa por fazer.</div></div>
<p>Em Março, a Gráfica Ondjila gastou 445.000 Kz em comunicações, contra 390.000 Kz orçamentados.</p>
<ul>
<li>Desvio = 445.000 − 390.000 = <strong>+55.000 Kz</strong></li>
<li>Desvio % = 55.000 ÷ 390.000 × 100 = <strong>+14,1%</strong></li>
</ul>
<p>Investigado: dois cartões cancelados em Janeiro só saíram do plano tarifário em Março, e houve chamadas internacionais para um fornecedor português. Acção: confirmar por escrito o cancelamento junto do operador e passar as chamadas internacionais para videochamada.</p>
<div class="hi">Regra de tratamento: desvios até ±5% registam-se e não se investigam; entre 5% e 15% investigam-se e explicam-se por escrito; acima de 15% exigem acção correctiva com responsável e prazo. Sem esta regra, ou se investiga tudo (e não se faz mais nada) ou não se investiga nada.</div></div>

<div class="cb"><h2><i class="fas fa-lightbulb"></i> 5. Planear em contexto de inflação e câmbio</h2>
<p>Num orçamento angolano há duas variáveis que não se podem ignorar e que um manual estrangeiro não trata:</p>
<ul>
<li><strong>Inflação.</strong> Um orçamento em kwanzas feito em Dezembro para o ano seguinte não pode assumir preços constantes. A prática defensável é orçamentar por trimestre com revisão, e não por ano fechado. A taxa de inflação a usar deve ser a projecção oficial do ano, confirmada junto do Banco Nacional de Angola ou do orçamento geral do Estado — não um número inventado.</li>
<li><strong>Câmbio.</strong> Rubricas com componente importada — equipamento informático, consumíveis, licenças de software, peças — variam com a taxa de câmbio. Identifique-as no orçamento com uma marca própria e reveja-as sempre que o câmbio se mover significativamente.</li>
</ul>
<p>Uma técnica simples: no mapa orçamental, acrescente uma coluna "sensível ao câmbio: S/N". Quando o gerente perguntar por que subiu o custo, tem a resposta em vez de uma desculpa.</p></div>

<div class="dg"><div class="dgt">Ciclo anual de planeamento e controlo</div>
<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="80" width="120" height="70" rx="8" fill="#0B1F3A"/>
<text x="75" y="105" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">HISTÓRICO</text>
<text x="75" y="124" font-size="11" fill="#ffffff" text-anchor="middle">12 meses reais</text>
<rect x="160" y="80" width="120" height="70" rx="8" fill="#FF6B00"/>
<text x="220" y="105" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">ORÇAMENTO</text>
<text x="220" y="124" font-size="11" fill="#ffffff" text-anchor="middle">rubrica a rubrica</text>
<rect x="305" y="80" width="120" height="70" rx="8" fill="#00A3A1"/>
<text x="365" y="105" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">EXECUÇÃO</text>
<text x="365" y="124" font-size="11" fill="#ffffff" text-anchor="middle">gasto real do mês</text>
<rect x="450" y="80" width="130" height="70" rx="8" fill="#16a34a"/>
<text x="515" y="105" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">DESVIO</text>
<text x="515" y="124" font-size="11" fill="#ffffff" text-anchor="middle">análise e acção</text>
<path d="M135 115 L157 115" stroke="#64748B" stroke-width="2" marker-end="url(#b1)"/>
<path d="M280 115 L302 115" stroke="#64748B" stroke-width="2" marker-end="url(#b1)"/>
<path d="M425 115 L447 115" stroke="#64748B" stroke-width="2" marker-end="url(#b1)"/>
<path d="M515 80 L515 40 L220 40 L220 77" stroke="#FF6B00" stroke-width="2" fill="none" stroke-dasharray="5,4" marker-end="url(#b2)"/>
<text x="368" y="32" font-size="12" fill="#FF6B00" text-anchor="middle" font-weight="bold">revisão trimestral do orçamento</text>
<text x="300" y="195" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">O técnico administrativo executa as quatro caixas</text>
<defs>
<marker id="b1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#64748B"/></marker>
<marker id="b2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#FF6B00"/></marker>
</defs>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — construir o orçamento do escritório</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Reunir 12 meses de gasto real</h4><p>Extractos bancários, facturas arquivadas e folha de caixa. Classifique cada movimento numa rubrica. É o trabalho mais demorado e o único que não pode ser saltado.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Identificar o gasto anómalo</h4><p>Procure rubricas onde o valor não se explica pela actividade: cartões a mais, consumíveis desproporcionados, deslocações sem justificação. Foi assim que a Gráfica Ondjila encontrou 9.660.000 Kz.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Projectar cada rubrica com justificação escrita</h4><p>Uma linha de justificação por rubrica. Uma rubrica sem justificação é um número inventado e será a primeira a ser contestada.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Marcar as rubricas sensíveis ao câmbio e à inflação</h4><p>Coluna S/N. Estas são revistas trimestralmente; as restantes anualmente.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Submeter à direcção e obter aprovação escrita</h4><p>O orçamento só vincula depois de aprovado. Guarde a aprovação — é o que lhe permite recusar uma compra fora do orçamento.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Fechar o mapa de execução até ao dia 10 de cada mês</h4><p>Orçamentado, real, desvio em valor e em percentagem, e uma linha de comentário nos desvios acima de 5%.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de construção em Benguela orçamentou o ano de 2023 em Novembro de 2022, com preços de material de Novembro. Não marcou nenhuma rubrica como sensível ao câmbio nem à inflação, e não fez revisão trimestral. A rubrica de material de escritório e informática foi orçamentada em <strong>8.400.000 Kz</strong> para o ano.</p>
<p>Em Setembro, o orçamento estava esgotado e ainda faltavam quatro meses. Como não havia verba, a empresa adiou a substituição de dois computadores da facturação. Um avariou em Novembro e a emissão de facturas parou dois dias e meio. Duas obras não puderam ser facturadas dentro do mês, o recebimento escorregou para o mês seguinte e a empresa teve de recorrer a descoberto bancário para pagar salários — com um custo financeiro de cerca de <strong>1.800.000 Kz</strong>.</p>
<p>O erro não foi orçamentar mal. Foi tratar o orçamento como um documento anual imutável em vez de um instrumento de gestão vivo.</p>
<div class="hi">Como evitar: reveja o orçamento <strong>trimestralmente</strong>, pelo menos nas rubricas marcadas como sensíveis. E mantenha uma rubrica de imprevistos entre 3% e 5% — não é gordura, é o que impede que um computador avariado pare a facturação.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Suporte documental do gasto</div><blockquote>Todo o gasto orçamentado e executado tem de ter suporte documental válido para ser aceite como custo fiscal. Uma despesa sem factura em condições é uma despesa que a empresa faz duas vezes: paga o bem e paga o imposto sobre o lucro que não teve.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Encargos com pessoal no orçamento</div><blockquote>A rubrica de pessoal tem de incluir, além do salário base, os subsídios devidos, a contribuição da entidade empregadora para o INSS e as provisões associadas à cessação do contrato nos termos da <strong>Lei n.º 12/23, de 27 de Dezembro de 2023</strong>. Orçamentar só o salário base subestima o custo real.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Seguro obrigatório de acidentes de trabalho</div><blockquote>A empresa é obrigada a ter cobertura de acidentes de trabalho para os seus trabalhadores. Esta rubrica não é opcional no orçamento. Confirme a apólice e o prémio anual junto da seguradora.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Projecções macroeconómicas</div><blockquote>As taxas de inflação e as projecções cambiais usadas no orçamento devem ser as de fonte oficial — Banco Nacional de Angola ou o Orçamento Geral do Estado do ano em causa. Não invente uma taxa nem use a do ano anterior por comodidade.</blockquote></div>
</div>` },

{ title: "1.5 Organizar: divisão do trabalho, funções e responsabilidades",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Aplicar os princípios de divisão do trabalho, autoridade, responsabilidade e amplitude de controlo.</li>
<li>Elaborar uma <strong>matriz de responsabilidades</strong> que elimine tarefas sem dono e duplicações.</li>
<li>Distinguir centralização de descentralização e reconhecer quando cada uma serve.</li>
<li>Redigir e manter actualizadas as descrições de funções de um escritório.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Farmácia Boa Saúde</strong> tem três balcões em Luanda — Maianga, Rangel e Cacuaco — e um escritório central com cinco pessoas: uma responsável administrativa, duas técnicas administrativas, um responsável de compras e um estagiário.</p>
<p>Durante 2023, os inventários dos três balcões apresentaram diferenças acumuladas de <strong>11.300.000 Kz</strong>. Não houve roubo: houve confusão de responsabilidades. As encomendas eram feitas ora pelo responsável de compras, ora directamente pelos balcões quando faltava um medicamento, ora pela responsável administrativa quando os outros dois estavam ocupados. A recepção do material era feita por quem estivesse na loja nesse momento. Ninguém conferia a guia contra a encomenda, porque cada um assumia que outro tinha conferido.</p>
<p>Fez-se uma matriz de responsabilidades: para cada tarefa do circuito de compras, escreveu-se quem <em>executa</em>, quem <em>aprova</em>, quem é <em>consultado</em> e quem é <em>informado</em>. Descobriram-se 4 tarefas com três executantes e 2 tarefas com zero — entre elas, precisamente, a conferência da guia contra a encomenda. Foi resolvido com uma regra de uma linha: <em>a recepção só é assinada pelo responsável do balcão, contra a nota de encomenda impressa</em>. Em 2024, a diferença de inventário caiu para <strong>1.400.000 Kz</strong>.</p>
<p>Organizar não é desenhar caixas bonitas. É garantir que cada tarefa tem exactamente um dono.</p></div>

<div class="cb"><h2><i class="fas fa-diagram-project"></i> 1. Os quatro princípios da organização</h2>
<ul>
<li><strong>Divisão do trabalho.</strong> Repartir a actividade em tarefas especializadas aumenta a produtividade e a qualidade. Levado ao extremo, cria escritórios onde ninguém percebe o processo todo e um dia de férias paralisa uma função. O equilíbrio prático numa PME angolana: cada tarefa tem um titular e um substituto formado.</li>
<li><strong>Autoridade e responsabilidade andam juntas.</strong> Quem é responsável por um resultado tem de ter autoridade para o obter. Responsabilizar o técnico pelo cumprimento dos prazos fiscais sem lhe dar autoridade para exigir documentos aos departamentos é armar uma injustiça.</li>
<li><strong>Unidade de comando.</strong> Cada pessoa recebe ordens de uma só chefia. Quando o técnico administrativo recebe instruções contraditórias do gerente e do responsável financeiro, o trabalho paralisa e a culpa fica com ele.</li>
<li><strong>Amplitude de controlo.</strong> O número de pessoas que uma chefia consegue supervisionar em condições. Em trabalho administrativo variado, 5 a 8; em trabalho repetitivo e padronizado, pode ir a 15. Acima disso, a supervisão passa a ser nominal.</li>
</ul>
<div class="hi">O princípio que mais dinheiro poupa é o mais simples: <strong>uma tarefa, um dono</strong>. Tarefa com dois donos é tarefa feita duas vezes ou nenhuma.</div></div>

<div class="cb"><h2><i class="fas fa-table-cells"></i> 2. A matriz de responsabilidades</h2>
<p>É o instrumento central desta aula. Cruza tarefas com pessoas e atribui a cada cruzamento um de quatro papéis:</p>
<ul>
<li><strong>E — Executa:</strong> faz o trabalho. <em>Exactamente um por tarefa.</em></li>
<li><strong>A — Aprova:</strong> autoriza e responde pelo resultado. <em>Exactamente um por tarefa.</em></li>
<li><strong>C — Consultado:</strong> dá parecer antes da decisão. Pode haver vários.</li>
<li><strong>I — Informado:</strong> é avisado depois. Pode haver vários.</li>
</ul>
<p>Matriz do circuito de compras da Farmácia Boa Saúde, depois da correcção:</p>
<div class="tw"><table class="dt">
<tr><th>Tarefa</th><th>Resp. balcão</th><th>Resp. compras</th><th>Téc. administrativo</th><th>Direcção</th></tr>
<tr><td>Identificar necessidade e emitir requisição</td><td>E</td><td>I</td><td>I</td><td>—</td></tr>
<tr><td>Consultar fornecedores e elaborar mapa comparativo</td><td>C</td><td>E</td><td>I</td><td>—</td></tr>
<tr><td>Autorizar compra até 500.000 Kz</td><td>—</td><td>A</td><td>I</td><td>I</td></tr>
<tr><td>Autorizar compra acima de 500.000 Kz</td><td>—</td><td>C</td><td>I</td><td>A</td></tr>
<tr><td>Emitir nota de encomenda</td><td>—</td><td>E</td><td>I</td><td>—</td></tr>
<tr><td>Receber material e conferir contra a encomenda</td><td>E</td><td>I</td><td>I</td><td>—</td></tr>
<tr><td>Registar entrada em stock</td><td>E</td><td>I</td><td>C</td><td>—</td></tr>
<tr><td>Conferir factura contra guia e encomenda</td><td>—</td><td>C</td><td>E</td><td>—</td></tr>
<tr><td>Autorizar pagamento</td><td>—</td><td>C</td><td>E</td><td>A</td></tr>
<tr><td>Arquivar o processo de compra completo</td><td>—</td><td>I</td><td>E</td><td>—</td></tr>
</table></div>
<div class="hi">Leitura de diagnóstico: percorra cada <em>linha</em> e conte os E. Se houver zero, a tarefa não é feita. Se houver dois ou mais, é feita mal. Percorra cada <em>coluna</em> e conte os E: se uma pessoa tem metade dos E da matriz, é um ponto único de falha — o dia em que adoecer, a empresa pára.</div></div>

<div class="cb"><h2><i class="fas fa-arrows-left-right"></i> 3. Centralizar ou descentralizar</h2>
<div class="tw"><table class="dt">
<tr><th>Critério</th><th>Centralizar</th><th>Descentralizar</th></tr>
<tr><td>Valor envolvido</td><td>Alto</td><td>Baixo</td></tr>
<tr><td>Frequência</td><td>Rara</td><td>Diária</td></tr>
<tr><td>Risco de erro</td><td>Grave e irreversível</td><td>Corrigível</td></tr>
<tr><td>Necessidade de rapidez</td><td>Baixa</td><td>Alta</td></tr>
<tr><td>Uniformidade exigida</td><td>Alta (imagem, legalidade)</td><td>Baixa</td></tr>
</table></div>
<p>Aplicado à Farmácia Boa Saúde: a compra de medicamentos centraliza-se (valor alto, necessidade de negociar preço e de garantir origem), mas a compra de material de limpeza de cada balcão descentraliza-se até 80.000 Kz por mês — porque esperar por autorização central para comprar lixívia custa mais em tempo do que a lixívia.</p>
<p>No contexto angolano há um factor adicional: a <strong>dispersão geográfica com deslocação difícil</strong>. Uma empresa com escritório no Talatona e obra no Dande não pode centralizar decisões operacionais correntes, porque cada validação central custa horas de estrada ou uma chamada que não completa. A regra prática é centralizar o que é <em>escrito</em> (contratos, pagamentos, resposta a entidades públicas) e descentralizar o que é <em>físico e imediato</em>, com limite de valor e prestação de contas semanal.</p></div>

<div class="cb"><h2><i class="fas fa-file-lines"></i> 4. A descrição de funções: estrutura mínima</h2>
<p>Cada posto administrativo deve ter uma descrição de funções de uma página com estes elementos:</p>
<ol>
<li><strong>Identificação</strong> — designação do posto, departamento, a quem reporta, quem lhe reporta.</li>
<li><strong>Missão</strong> — uma frase: para que existe este posto. Ex.: "garantir que a documentação da empresa entra, é tratada, é arquivada e é recuperável, e que as obrigações de calendário são cumpridas no prazo".</li>
<li><strong>Responsabilidades principais</strong> — 6 a 10 linhas, cada uma começada por um verbo de acção: registar, conferir, elaborar, arquivar, conciliar, submeter.</li>
<li><strong>Limites de decisão</strong> — com valores concretos em kwanzas. É a secção que evita metade dos conflitos.</li>
<li><strong>Indicadores</strong> — 3 a 5 números pelos quais o posto é avaliado. Ex.: dias de atraso no lançamento de facturas; entregas fora de prazo; tempo médio de recuperação de um documento arquivado.</li>
<li><strong>Substituição</strong> — quem assume em caso de ausência e que acessos precisa.</li>
</ol>
<div class="hi">O ponto 6 é o mais esquecido e o que mais depressa se sente. Um escritório onde a ausência de uma pessoa faz parar o pagamento a fornecedores não tem organização — tem sorte.</div></div>

<div class="cb"><h2><i class="fas fa-calculator"></i> 5. Exemplo trabalhado: dimensionar o escritório</h2>
<p>Quantas pessoas precisa o escritório? Uma estimativa defensável parte do volume de documentos e do tempo médio por documento.</p>
<div class="fbox"><div class="f">N.º de postos = (Volume mensal × Tempo médio por unidade) ÷ Horas úteis mensais por pessoa</div><div class="fd">Horas úteis: descontar férias, feriados, faltas e tempo improdutivo — na prática cerca de 140 h/mês por pessoa</div></div>
<p>Na Farmácia Boa Saúde, o volume administrativo mensal era: 320 facturas de fornecedores (12 min cada), 95 notas de encomenda (18 min), 3 processamentos de salários para 34 pessoas (contabilizados em 20 h no total), e cerca de 60 h/mês de atendimento e expediente diverso.</p>
<ul>
<li>Facturas: 320 × 12 min = 3.840 min = <strong>64 h</strong></li>
<li>Encomendas: 95 × 18 min = 1.710 min = <strong>28,5 h</strong></li>
<li>Salários: <strong>20 h</strong></li>
<li>Expediente e atendimento: <strong>60 h</strong></li>
<li><strong>Total: 172,5 h/mês</strong></li>
</ul>
<p>172,5 ÷ 140 = <strong>1,23 postos</strong> só para estas tarefas. Somando compras, tesouraria e arquivo, chegou-se a 3,1 postos administrativos — contra os 5 que existiam.</p>
<div class="hi">Conclusão da direcção: não despedir, mas reafectar. O estagiário passou a apoiar o balcão do Cacuaco, que estava em subdimensionamento, e uma das técnicas assumiu o controlo de inventário — a tarefa que a matriz mostrou não ter dono.</div></div>

<div class="dg"><div class="dgt">Diagnóstico pela matriz de responsabilidades</div>
<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="30" y="45" width="160" height="150" rx="10" fill="#dc2626" opacity="0.10" stroke="#dc2626" stroke-width="2"/>
<text x="110" y="70" font-size="13" fill="#dc2626" text-anchor="middle" font-weight="bold">ZERO EXECUTANTES</text>
<text x="110" y="97" font-size="12" fill="#0B1F3A" text-anchor="middle">a tarefa não é feita</text>
<text x="110" y="122" font-size="12" fill="#0B1F3A" text-anchor="middle">ninguém se sente</text>
<text x="110" y="142" font-size="12" fill="#0B1F3A" text-anchor="middle">responsável</text>
<text x="110" y="172" font-size="12" fill="#dc2626" text-anchor="middle" font-weight="bold">11.300.000 Kz</text>
<rect x="220" y="45" width="160" height="150" rx="10" fill="#f59e0b" opacity="0.14" stroke="#FF6B00" stroke-width="2"/>
<text x="300" y="70" font-size="13" fill="#FF6B00" text-anchor="middle" font-weight="bold">DOIS OU MAIS</text>
<text x="300" y="97" font-size="12" fill="#0B1F3A" text-anchor="middle">trabalho duplicado</text>
<text x="300" y="122" font-size="12" fill="#0B1F3A" text-anchor="middle">ou cada um</text>
<text x="300" y="142" font-size="12" fill="#0B1F3A" text-anchor="middle">espera pelo outro</text>
<text x="300" y="172" font-size="12" fill="#FF6B00" text-anchor="middle" font-weight="bold">custo oculto</text>
<rect x="410" y="45" width="160" height="150" rx="10" fill="#16a34a" opacity="0.12" stroke="#16a34a" stroke-width="2"/>
<text x="490" y="70" font-size="13" fill="#16a34a" text-anchor="middle" font-weight="bold">UM EXECUTANTE</text>
<text x="490" y="97" font-size="12" fill="#0B1F3A" text-anchor="middle">dono identificado</text>
<text x="490" y="122" font-size="12" fill="#0B1F3A" text-anchor="middle">substituto formado</text>
<text x="490" y="142" font-size="12" fill="#0B1F3A" text-anchor="middle">resultado medido</text>
<text x="490" y="172" font-size="12" fill="#16a34a" text-anchor="middle" font-weight="bold">objectivo</text>
<text x="300" y="225" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">Percorra cada LINHA da matriz e conte os E — é o diagnóstico em cinco minutos</text>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — construir a matriz de responsabilidades</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Escolher um processo, não a empresa toda</h4><p>Comece pelo circuito de compras ou pelo de facturação e cobrança. Uma matriz de 12 linhas terminada vale mais do que uma de 200 por acabar.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Listar as tarefas pela ordem real em que acontecem</h4><p>Vá ao terreno e siga um documento do princípio ao fim. Não use o processo que está no manual: use o que se pratica.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Colocar as pessoas em colunas e preencher E, A, C, I</h4><p>Preencha com quem está no processo, em reunião, e não sozinho à secretária. Metade do valor da matriz nasce da discussão.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Corrigir linhas com zero ou com dois E</h4><p>Atribua um único executante e um único aprovador. Escreva a regra numa frase, como fez a Farmácia Boa Saúde com a assinatura da recepção.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Fixar limites de decisão em kwanzas</h4><p>Sem valores, "aprova" é uma palavra sem consequência. Com valores, é um controlo.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Divulgar, afixar e rever semestralmente</h4><p>A matriz aprovada segue por circular interna e fica afixada. Reveja de seis em seis meses e sempre que entrar ou sair alguém.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de serviços informáticos em Talatona, com 28 trabalhadores, tinha dois responsáveis a dar instruções ao mesmo técnico administrativo: o sócio-gerente e o director comercial. Não havia matriz nem descrição de funções — "somos uma equipa pequena, resolve-se a falar".</p>
<p>Em 2022, o director comercial mandou pagar antecipadamente <strong>4.800.000 Kz</strong> a um fornecedor de licenças, para garantir um desconto. No mesmo dia, o sócio-gerente tinha dado instrução de suspender pagamentos até à entrada de uma cobrança. O técnico executou a instrução mais recente. O pagamento saiu, a cobrança atrasou-se onze dias e a empresa não teve como pagar o INSS no prazo, incorrendo em acréscimos. Seguiu-se um processo disciplinar contra o técnico, que acabou arquivado precisamente porque não havia nada escrito que definisse a quem ele reportava.</p>
<p>A empresa perdeu o dinheiro dos acréscimos, perdeu três semanas em conflito interno, e o técnico saiu ao fim de dois meses.</p>
<div class="hi">Como evitar: aplique a <strong>unidade de comando</strong>. Escreva na descrição de funções a quem o posto reporta e, se houver mais do que uma fonte de instruções, defina a regra de precedência por escrito — por exemplo: "instruções de pagamento só do sócio-gerente; instruções comerciais do director comercial". E ensine o técnico a responder por escrito: "recebi instrução contrária de X; confirmam qual prevalece?".</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Poder de direcção do empregador</div><blockquote>Nos termos da <strong>Lei Geral do Trabalho (Lei n.º 12/23, de 27 de Dezembro de 2023)</strong>, cabe ao empregador organizar e dirigir o trabalho, definindo funções e a estrutura hierárquica. Esse poder exerce-se dentro do objecto do contrato e da categoria do trabalhador.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Regulamento interno</div><blockquote>A empresa pode adoptar regulamento interno com as regras de organização e disciplina. Quando exista, deve ser dado a conhecer aos trabalhadores — um regulamento não divulgado não é oponível a quem o desconhece.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Delegação de poderes</div><blockquote>A delegação de poderes de representação da sociedade deve ser formal e nos termos do pacto social. Um limite de compra fixado internamente organiza o trabalho, mas não substitui a procuração quando o acto vincula a sociedade perante terceiros.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Segregação de funções em pagamentos</div><blockquote>Exigência universal de controlo interno, verificada em auditoria: quem prepara o pagamento não deve ser quem o autoriza. Numa empresa pequena, garanta pelo menos dupla intervenção.</blockquote></div>
</div>` },

{ title: "1.6 Dirigir: liderança, delegação e coordenação no escritório",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Distinguir autoridade formal de influência e reconhecer as fontes de cada uma.</li>
<li>Delegar uma tarefa administrativa com os cinco elementos obrigatórios da delegação.</li>
<li>Dar instruções e <em>feedback</em> de forma que produzam mudança de comportamento.</li>
<li>Coordenar trabalho entre departamentos sem autoridade hierárquica sobre eles.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Rodovias do Kwanza, Lda.</strong>, empresa de construção com 140 trabalhadores e obras no Bengo e no Kwanza-Sul, promoveu a técnica administrativa mais antiga, a Manuela, a responsável do escritório, com três pessoas a reportar-lhe.</p>
<p>Nos primeiros quatro meses correu mal. A Manuela continuou a fazer ela própria o trabalho crítico — a conciliação bancária, o dossiê mensal do contabilista, a resposta a notificações — porque "assim tenho a certeza de que está bem feito". As três pessoas da equipa faziam expediente de baixa exigência e não aprendiam. A Manuela trabalhava até às 20h, e mesmo assim em Maio falhou a preparação atempada dos elementos para uma obrigação declarativa, porque estava só ela e adoeceu três dias.</p>
<p>A direcção pediu-lhe um plano. Ela repartiu as tarefas em três níveis: <em>o que só eu posso fazer</em> (falar com a direcção, responder a entidades oficiais, autorizar dentro do meu limite), <em>o que posso ensinar em duas semanas</em> (conciliação bancária, mapa de contas a pagar) e <em>o que deve sair já da minha mesa</em> (lançamento de facturas, arquivo, atendimento telefónico). Delegou o terceiro grupo no dia seguinte e o segundo ao longo de dois meses, com acompanhamento semanal.</p>
<p>Ao fim de seis meses trabalhava até às 17h30, a equipa cobria-se mutuamente, e o custo de horas extraordinárias do escritório tinha descido de <strong>640.000 Kz</strong> para <strong>85.000 Kz</strong> por mês. Nada disto exigiu contratar.</p></div>

<div class="cb"><h2><i class="fas fa-user-shield"></i> 1. Autoridade formal e influência real</h2>
<p>Duas coisas distintas que se confundem sempre:</p>
<ul>
<li><strong>Autoridade formal</strong> — vem do lugar na estrutura. Permite dar ordens, aprovar, avaliar. É atribuída e pode ser retirada.</li>
<li><strong>Influência</strong> — vem de competência reconhecida, de coerência e de relação. É conquistada e não se pode retirar por despacho.</li>
</ul>
<p>O técnico administrativo trabalha quase sempre <strong>com pouca autoridade formal e muita necessidade de influência</strong>. Precisa que o chefe de obra entregue as folhas de ponto a tempo, que o comercial devolva o contrato assinado, que o armazém confirme a recepção — e não manda em nenhum deles.</p>
<p>As fontes de influência que funcionam neste contexto:</p>
<ul>
<li><strong>Competência demonstrada.</strong> Quem responde certo e depressa é procurado. Quem responde "não sei" três vezes deixa de ser consultado — e passa a ser contornado.</li>
<li><strong>Fiabilidade.</strong> Cumprir o que promete, incluindo os prazos pequenos. É construída em meses e destruída numa semana.</li>
<li><strong>Reciprocidade.</strong> Quem ajuda o chefe de obra a resolver um problema de credencial obtém as folhas de ponto a tempo no mês seguinte.</li>
<li><strong>Informação.</strong> Quem tem o mapa actualizado tem argumento. "As folhas do Bengo chegaram no dia 3, as do Kwanza-Sul no dia 19" não é uma opinião, é um facto que muda a conversa.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-hand-holding"></i> 2. Delegar: os cinco elementos obrigatórios</h2>
<p>Delegação mal feita é a causa mais comum de trabalho refeito. Uma delegação completa tem cinco elementos — falta um, e o resultado vem errado.</p>
<div class="tw"><table class="dt">
<tr><th>Elemento</th><th>Pergunta que responde</th><th>Exemplo</th></tr>
<tr><td>1. Resultado</td><td>O que tem de existir no fim?</td><td>"Mapa de contas a pagar fechado, com todas as facturas até 30 de Abril"</td></tr>
<tr><td>2. Critério de qualidade</td><td>Como se sabe que está bem?</td><td>"O total do mapa bate com o saldo de fornecedores do contabilista"</td></tr>
<tr><td>3. Prazo</td><td>Para quando?</td><td>"Sexta-feira às 12h"</td></tr>
<tr><td>4. Recursos e autoridade</td><td>Com o quê e com que poder?</td><td>"Acesso ao arquivo e ao homebanking em consulta; podes pedir facturas em falta directamente aos departamentos em meu nome"</td></tr>
<tr><td>5. Pontos de controlo</td><td>Quando falamos antes do fim?</td><td>"Quarta-feira às 15h, dez minutos, para ver onde estás"</td></tr>
</table></div>
<div class="hi">O elemento 5 é o que distingue delegar de abandonar. Sem ponto de controlo intermédio, o erro só aparece na sexta-feira às 12h — quando já não há tempo de o corrigir.</div>
<p>E há três coisas que <strong>não se delegam</strong>: a responsabilidade final perante a chefia (continua sua); as matérias em que a lei ou o pacto social exigem uma pessoa determinada; e as conversas difíceis sobre desempenho de alguém.</p></div>

<div class="cb"><h2><i class="fas fa-comment-dots"></i> 3. Instruir e dar retorno</h2>
<p>Uma instrução administrativa tem de resistir ao ruído. Três regras práticas:</p>
<ol>
<li><strong>Uma instrução, um canal, um registo.</strong> Diz-se de viva voz e confirma-se por email ou mensagem escrita. Em Angola, onde muita coordenação acontece por WhatsApp, o registo escrito é ainda mais importante — mas então o combinado deve ser passado para email ou para a plataforma da empresa, porque um telemóvel perdido leva a prova consigo.</li>
<li><strong>Peça a devolução.</strong> "Podes dizer-me com as tuas palavras o que vais fazer?" apanha 90% dos mal-entendidos em 20 segundos. É a técnica mais rentável desta aula.</li>
<li><strong>Separe o comportamento da pessoa.</strong> "O mapa foi entregue na quinta-feira em vez de terça" é utilizável. "És desorganizado" não é: não indica o que mudar e cria defesa.</li>
</ol>
<p>Estrutura de retorno correctivo que funciona num escritório angolano, onde a crítica directa em frente a terceiros é particularmente mal recebida:</p>
<div class="tw"><table class="dt">
<tr><th>Passo</th><th>O que dizer</th><th>Erro a evitar</th></tr>
<tr><td>Situação</td><td>"Na sexta-feira, no mapa de contas a pagar…"</td><td>"Tu estás sempre…"</td></tr>
<tr><td>Facto observado</td><td>"…faltavam sete facturas de Março."</td><td>Adjectivos e suposições de intenção</td></tr>
<tr><td>Consequência</td><td>"O gerente decidiu com um passivo 2.400.000 Kz abaixo do real."</td><td>Dramatizar ou minimizar</td></tr>
<tr><td>Pedido concreto</td><td>"A partir de agora, conferimos o número de facturas recebidas contra o livro de entrada antes de fechar."</td><td>"Tem mais cuidado"</td></tr>
<tr><td>Verificação</td><td>"Vejo contigo na próxima sexta."</td><td>Não voltar ao assunto</td></tr>
</table></div>
<div class="hi">Corrija sempre em privado; reconheça sempre em público. Esta regra vale em qualquer cultura, e no ambiente de trabalho angolano — onde a exposição em frente aos colegas é sentida como humilhação séria — o custo de a violar é particularmente alto.</div></div>

<div class="cb"><h2><i class="fas fa-people-arrows"></i> 4. Coordenar sem mandar</h2>
<p>O técnico administrativo passa metade do tempo a obter coisas de pessoas sobre quem não tem autoridade. Ferramentas que funcionam:</p>
<ul>
<li><strong>Calendário partilhado e visível.</strong> Se toda a gente vê que as folhas de ponto são precisas até ao dia 25, o prazo deixa de ser um pedido pessoal e passa a ser um facto da empresa.</li>
<li><strong>Prazo com antecedência real.</strong> Se precisa dos documentos a 25, peça a 20. Não por desconfiança — por experiência de que uma obra no Kwanza-Sul depende de alguém conseguir enviar.</li>
<li><strong>Lembrete escalonado.</strong> Primeiro lembrete simpático três dias antes; segundo no dia; terceiro com cópia à chefia, e só então. Escalar de imediato queima a relação; nunca escalar torna o prazo opcional.</li>
<li><strong>Mapa de cumprimento.</strong> Uma tabela mensal com quem entregou dentro do prazo. Não acusa ninguém — mostra. É o instrumento de coordenação mais eficaz que existe sem autoridade formal.</li>
</ul>
<div class="fbox"><div class="f">Taxa de cumprimento = Entregas dentro do prazo ÷ Total de entregas devidas × 100</div><div class="fd">Calcule por departamento e por mês; a evolução é mais persuasiva do que o valor absoluto</div></div>
<p>Na Rodovias do Kwanza, no primeiro mês: das 6 frentes de obra, 2 entregaram a folha de ponto no prazo. Taxa = 2 ÷ 6 × 100 = <strong>33%</strong>. A Manuela afixou o mapa e enviou-o à direcção sem comentário. Ao terceiro mês, 5 em 6 — <strong>83%</strong>. Nenhuma ordem foi dada.</p></div>

<div class="dg"><div class="dgt">Os cinco elementos da delegação completa</div>
<svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="70" width="110" height="70" rx="8" fill="#0B1F3A"/>
<text x="70" y="98" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">RESULTADO</text>
<text x="70" y="118" font-size="11" fill="#ffffff" text-anchor="middle">o que existe no fim</text>
<rect x="138" y="70" width="110" height="70" rx="8" fill="#0B1F3A"/>
<text x="193" y="98" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">QUALIDADE</text>
<text x="193" y="118" font-size="11" fill="#ffffff" text-anchor="middle">como se sabe</text>
<rect x="261" y="70" width="110" height="70" rx="8" fill="#FF6B00"/>
<text x="316" y="98" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">PRAZO</text>
<text x="316" y="118" font-size="11" fill="#ffffff" text-anchor="middle">data e hora</text>
<rect x="384" y="70" width="110" height="70" rx="8" fill="#00A3A1"/>
<text x="439" y="98" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">RECURSOS</text>
<text x="439" y="118" font-size="11" fill="#ffffff" text-anchor="middle">acessos e poder</text>
<rect x="507" y="70" width="98" height="70" rx="8" fill="#16a34a"/>
<text x="556" y="98" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">CONTROLO</text>
<text x="556" y="118" font-size="11" fill="#ffffff" text-anchor="middle">ponto intermédio</text>
<text x="310" y="40" font-size="13" fill="#0B1F3A" text-anchor="middle" font-weight="bold">Falta um elemento — o trabalho volta errado</text>
<text x="310" y="175" font-size="12" fill="#dc2626" text-anchor="middle">Sem o 5.º elemento não é delegação: é abandono com prazo</text>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — delegar uma tarefa administrativa</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Classificar as suas tarefas em três grupos</h4><p>Só eu posso fazer / posso ensinar em duas semanas / deve sair já da minha mesa. Faça a lista com tempos, não de cabeça.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Escrever o procedimento antes de delegar</h4><p>Uma página com os passos e os pontos onde normalmente se erra. Delegar sem procedimento escrito garante que a tarefa volta para si.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Fazer uma vez em conjunto</h4><p>A pessoa observa e toma notas; da segunda vez faz e você observa. Só à terceira faz sozinha.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Entregar os cinco elementos por escrito</h4><p>Resultado, critério de qualidade, prazo, recursos e autoridade, pontos de controlo. Um email de dez linhas chega.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Informar quem precisa de saber</h4><p>Comunique aos departamentos que a partir de agora é aquela pessoa que trata do assunto. Sem isto, continuam a vir ter consigo e a delegação desfaz-se.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Cumprir o ponto de controlo — e depois largar</h4><p>Verifique no ponto combinado, não todos os dias. Delegar e vigiar de hora a hora consome mais tempo do que fazer, e ensina à pessoa que não confia nela.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Numa empresa de importação de peças em Luanda, o responsável administrativo delegou o processamento de salários numa colega, com uma frase: "a partir deste mês tratas tu dos salários". Sem procedimento escrito, sem acompanhamento, sem ponto de controlo.</p>
<p>No processamento de Novembro de 2023, a colega calculou mal o subsídio de férias de quatro trabalhadores e não considerou correctamente as faltas de dois deles. O erro não foi detectado porque ninguém conferia. Os trabalhadores reclamaram, a empresa corrigiu, mas dois deles recorreram à inspecção do trabalho por diferenças acumuladas de três meses. O acerto retroactivo, o apoio jurídico e o tempo consumido custaram à empresa cerca de <strong>2.700.000 Kz</strong>, além de um mês de mau ambiente e da saída da colega, que se sentiu — com razão — atirada aos leões.</p>
<p>A responsabilidade era do responsável administrativo, não dela. Quem delega mantém a responsabilidade final pelo resultado.</p>
<div class="hi">Como evitar: nunca delegue processamento salarial, obrigações declarativas ou pagamentos sem <strong>procedimento escrito</strong>, <strong>três ciclos acompanhados</strong> e <strong>conferência por segunda pessoa</strong> nos primeiros seis meses. Em matérias com consequência legal, a delegação faz-se por degraus, nunca por uma frase no corredor.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Poder disciplinar</div><blockquote>O poder disciplinar pertence ao empregador e exerce-se nos termos e com as garantias previstas na <strong>Lei Geral do Trabalho (Lei n.º 12/23, de 27 de Dezembro de 2023)</strong>. Uma chefia intermédia não aplica sanções por iniciativa própria: participa os factos e o procedimento corre nos termos legais.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Dever de ocupação efectiva e de formação</div><blockquote>O empregador deve proporcionar ao trabalhador condições para o exercício da função, incluindo formação adequada quando lhe são cometidas novas tarefas. Delegar sem formar é fonte de litígio e de erro.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Correcção de erros no salário</div><blockquote>Diferenças no processamento salarial devem ser corrigidas e regularizadas junto do trabalhador. O trabalhador pode recorrer à Inspecção-Geral do Trabalho. Confirme o procedimento e os prazos aplicáveis junto do apoio jurídico da empresa.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Prova escrita das instruções</div><blockquote>Instruções relevantes — pagamentos, prazos, alterações de procedimento — devem ficar registadas por escrito. Em caso de litígio, a instrução verbal não provada não existe.</blockquote></div>
</div>` },

{ title: "1.7 Controlar: mecanismos de controlo e correcção de desvios",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Distinguir controlo prévio, concomitante e posterior, e escolher o adequado a cada risco.</li>
<li>Aplicar os controlos internos essenciais de um escritório: segregação, conferência, reconciliação e autorização.</li>
<li>Executar uma <strong>conciliação bancária</strong> e identificar as diferenças que exigem investigação.</li>
<li>Elaborar um mapa de controlo mensal com desvios e acções correctivas.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Hotelaria Kalandula, Lda.</strong> explora um hotel de 42 quartos em Benguela. Movimenta numerário no balcão, cartões por TPA, transferências de empresas e adiantamentos de agências.</p>
<p>Durante 2023, o gerente notou que a receita registada não acompanhava a taxa de ocupação. Em Agosto, com 88% de ocupação, a receita foi apenas 6% superior à de Junho, com 71%. Não havia forma de perceber porquê: o numerário do balcão era depositado "quando dava", os recibos eram passados em bloco no fim do turno, e a conciliação bancária não era feita há sete meses.</p>
<p>O técnico administrativo implantou quatro controlos, sem comprar software: fecho de caixa por turno com contagem física e assinatura de duas pessoas; depósito bancário diário do numerário, com o talão anexo à folha de caixa; recibo emitido no momento do pagamento, com numeração sequencial pré-impressa e controlo de saltos; e conciliação bancária semanal.</p>
<p>Na primeira conciliação apareceram <strong>3.900.000 Kz</strong> de depósitos registados na folha de caixa que nunca chegaram à conta. Não foi preciso investigação complicada: os controlos, ao existirem, resolveram o problema por si — a diferença mensal caiu para menos de 40.000 Kz nos dois meses seguintes, antes mesmo de qualquer conversa formal.</p>
<p>É este o efeito do controlo. Não serve principalmente para apanhar quem falha — serve para tornar a falha difícil.</p></div>

<div class="cb"><h2><i class="fas fa-clock-rotate-left"></i> 1. Os três momentos do controlo</h2>
<div class="tw"><table class="dt">
<tr><th>Tipo</th><th>Quando</th><th>Exemplo administrativo</th><th>Custo de implantar</th><th>Eficácia</th></tr>
<tr><td>Prévio</td><td>Antes de acontecer</td><td>Autorização de compra antes da encomenda; validação do NIF do fornecedor antes de aceitar a factura</td><td>Baixo</td><td>Muito alta — impede o erro</td></tr>
<tr><td>Concomitante</td><td>Durante</td><td>Conferência da guia contra a encomenda no acto da recepção; dupla assinatura no fecho de caixa</td><td>Médio</td><td>Alta — apanha no momento</td></tr>
<tr><td>Posterior</td><td>Depois</td><td>Conciliação bancária mensal; inventário; auditoria</td><td>Alto</td><td>Média — detecta, mas o dano já ocorreu</td></tr>
</table></div>
<div class="hi">Uma organização que só tem controlo posterior descobre sempre os problemas tarde. Invista primeiro no controlo prévio: é o mais barato e o único que evita o custo em vez de o documentar.</div></div>

<div class="cb"><h2><i class="fas fa-shield-halved"></i> 2. Os quatro controlos internos básicos</h2>
<ul>
<li><strong>Segregação de funções.</strong> Quem executa não autoriza, e quem executa não concilia. Se o mesmo colaborador recebe o dinheiro, emite o recibo e faz o depósito, não existe controlo — existe confiança, que é outra coisa e não substitui.</li>
<li><strong>Conferência independente.</strong> Um segundo par de olhos confere o que o primeiro fez. O caso clássico é a "conferência a três": nota de encomenda, guia de remessa e factura — os três documentos têm de coincidir em quantidade e preço antes de qualquer pagamento.</li>
<li><strong>Reconciliação.</strong> Confrontar dois registos independentes do mesmo facto: a folha de caixa contra o extracto bancário; o stock físico contra o stock informático; a folha de ponto contra o mapa de processamento.</li>
<li><strong>Autorização documentada.</strong> Cada acto com efeito financeiro tem a assinatura de quem o autorizou, com data. Uma autorização verbal desaparece no momento em que é dada.</li>
</ul>
<p>A estes quatro acrescente dois controlos físicos que em Angola são especialmente relevantes: <strong>numeração sequencial pré-impressa</strong> nos recibos e guias, com controlo de saltos e de anulados; e <strong>guarda física</strong> de documentos de valor (livros de recibos, cheques, carimbos) em armário fechado com registo de quem levanta.</p>
<div class="hi">O carimbo da empresa é um instrumento de valor. Um carimbo que fica em cima de uma secretária ao alcance de qualquer pessoa é um risco real e evitável.</div></div>

<div class="cb"><h2><i class="fas fa-building-columns"></i> 3. A conciliação bancária, passo a passo</h2>
<p>É o controlo com melhor relação entre esforço e valor detectado, e é responsabilidade típica do técnico administrativo.</p>
<div class="fbox"><div class="f">Saldo do extracto − Débitos não registados + Créditos não registados = Saldo contabilístico</div><div class="fd">As diferenças que não se explicam por movimentos em trânsito são erros ou irregularidades</div></div>
<p><strong>Exemplo trabalhado</strong> — Hotelaria Kalandula, semana de 8 a 14 de Abril:</p>
<div class="tw"><table class="dt">
<tr><th>Elemento</th><th>Valor (Kz)</th></tr>
<tr><td>Saldo do extracto bancário a 14/04</td><td>18.450.000</td></tr>
<tr><td>(−) Cheque n.º 1042 emitido a 12/04, ainda não descontado</td><td>2.100.000</td></tr>
<tr><td>(+) Depósito de 14/04 feito às 17h20, ainda não creditado</td><td>860.000</td></tr>
<tr><td>(−) Comissão bancária não registada na folha de caixa</td><td>34.000</td></tr>
<tr><td><strong>Saldo conciliado</strong></td><td><strong>17.176.000</strong></td></tr>
<tr><td>Saldo da folha de caixa/contabilidade a 14/04</td><td>17.596.000</td></tr>
<tr><td><strong>Diferença por explicar</strong></td><td><strong>420.000</strong></td></tr>
</table></div>
<p>Cálculo: 18.450.000 − 2.100.000 + 860.000 − 34.000 = <strong>17.176.000 Kz</strong>. Confrontado com os 17.596.000 Kz da folha de caixa, sobra uma diferença de <strong>420.000 Kz</strong> que nenhum movimento em trânsito explica.</p>
<div class="hi">Uma diferença por explicar nunca se "arruma" com um lançamento de acerto. Investiga-se até à origem: um depósito registado e não feito, um recibo emitido e não cobrado, uma comissão não lançada, ou um erro de digitação. Na Kalandula, os 420.000 Kz eram um depósito registado na sexta-feira e efectivamente feito na segunda — mas só se soube porque se investigou.</div>
<p>Frequência recomendada: mensal como mínimo absoluto; semanal em empresas com numerário; diária quando o volume de caixa é elevado, como num hotel ou numa loja.</p></div>

<div class="cb"><h2><i class="fas fa-chart-simple"></i> 4. O mapa de controlo mensal</h2>
<p>Um mapa de controlo administrativo cabe numa página e responde a uma pergunta: <em>o que é que este mês correu fora do previsto e o que é que se vai fazer?</em></p>
<div class="tw"><table class="dt">
<tr><th>Indicador</th><th>Meta</th><th>Real</th><th>Desvio</th><th>Acção</th></tr>
<tr><td>Facturas lançadas em 48 h</td><td>100%</td><td>91%</td><td>−9 p.p.</td><td>Rever bloco de fundo à 2.ª feira</td></tr>
<tr><td>Diferença de conciliação por explicar</td><td>0 Kz</td><td>420.000 Kz</td><td>+420.000</td><td>Investigado e resolvido — depósito em trânsito</td></tr>
<tr><td>Entregas a entidades fora de prazo</td><td>0</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Desvio do orçamento de funcionamento</td><td>±5%</td><td>+11%</td><td>+6 p.p.</td><td>Rubrica de deslocações: exigir requisição</td></tr>
<tr><td>Contas a receber vencidas há mais de 60 dias</td><td>&lt; 8%</td><td>14%</td><td>+6 p.p.</td><td>Lista ao comercial e contacto a 4 clientes</td></tr>
<tr><td>Documentos não localizados no arquivo</td><td>0</td><td>2</td><td>+2</td><td>Recuperar e corrigir classificação</td></tr>
</table></div>
<p>Repare que cada linha tem uma acção com verbo. Um mapa de controlo sem coluna de acção é um relatório de queixas.</p></div>

<div class="cb"><h2><i class="fas fa-flag"></i> 5. Controlo em contexto angolano: três pontos de atenção</h2>
<ul>
<li><strong>Numerário.</strong> Uma parte relevante da economia continua a circular em dinheiro físico. Onde há numerário, o controlo tem de ser diário e por duas pessoas — não semanal e não por uma só.</li>
<li><strong>Documento do fornecedor.</strong> Antes de aceitar uma factura, confirme que contém os elementos exigidos, incluindo o NIF do fornecedor. Um documento sem os elementos válidos não serve como custo fiscal — é um controlo prévio que evita uma correcção cara mais tarde.</li>
<li><strong>Distância às frentes de trabalho.</strong> Uma obra no Kwanza-Sul ou um armazém em Cabinda não podem ser controlados apenas por telefone. Estabeleça um controlo à distância com base documental — fotografia da guia assinada enviada no próprio dia, mapa semanal de consumos — e visitas de verificação com periodicidade fixa.</li>
</ul></div>

<div class="dg"><div class="dgt">Ciclo de controlo e correcção</div>
<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="55" width="125" height="65" rx="8" fill="#0B1F3A"/>
<text x="82" y="82" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">PADRÃO</text>
<text x="82" y="101" font-size="11" fill="#ffffff" text-anchor="middle">meta definida</text>
<rect x="170" y="55" width="125" height="65" rx="8" fill="#00A3A1"/>
<text x="232" y="82" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">MEDIÇÃO</text>
<text x="232" y="101" font-size="11" fill="#ffffff" text-anchor="middle">valor real</text>
<rect x="320" y="55" width="125" height="65" rx="8" fill="#FF6B00"/>
<text x="382" y="82" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">COMPARAÇÃO</text>
<text x="382" y="101" font-size="11" fill="#ffffff" text-anchor="middle">desvio apurado</text>
<rect x="470" y="55" width="115" height="65" rx="8" fill="#16a34a"/>
<text x="527" y="82" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">CORRECÇÃO</text>
<text x="527" y="101" font-size="11" fill="#ffffff" text-anchor="middle">acção com dono</text>
<path d="M145 88 L167 88" stroke="#64748B" stroke-width="2" marker-end="url(#c1)"/>
<path d="M295 88 L317 88" stroke="#64748B" stroke-width="2" marker-end="url(#c1)"/>
<path d="M445 88 L467 88" stroke="#64748B" stroke-width="2" marker-end="url(#c1)"/>
<path d="M527 120 L527 160 L232 160 L232 123" stroke="#dc2626" stroke-width="2" fill="none" stroke-dasharray="5,4" marker-end="url(#c2)"/>
<text x="380" y="180" font-size="12" fill="#dc2626" text-anchor="middle" font-weight="bold">nova medição verifica se a correcção resultou</text>
<text x="300" y="215" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">Sem a seta vermelha, o controlo é apenas contabilidade do passado</text>
<defs>
<marker id="c1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#64748B"/></marker>
<marker id="c2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
</defs>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — a conciliação bancária semanal</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Obter o extracto do período fechado</h4><p>Do <em>homebanking</em> ou do balcão, sempre com data e saldo final impressos. Guarde o ficheiro com o nome no formato AAAA-MM-DD.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Marcar os movimentos que batem certo</h4><p>Percorra o extracto e a folha de caixa lado a lado, marcando os pares. Trabalhe do extracto para o registo interno, nunca ao contrário.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Listar os movimentos em trânsito</h4><p>Cheques emitidos e não descontados, depósitos feitos depois da hora de corte. São diferenças legítimas e temporárias.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Lançar o que o banco cobrou e o escritório não registou</h4><p>Comissões, manutenção de conta, imposto de selo sobre operações, juros. Aparecem no extracto e nunca na folha de caixa.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Investigar a diferença residual até à origem</h4><p>Não a compense com um acerto. Todas as diferenças por explicar têm nome, data e documento — procure-os.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Assinar, datar e arquivar a folha de conciliação</h4><p>Com o extracto anexo. É este documento que demonstra, meses depois, que o controlo existiu.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de distribuição de bebidas em Luanda tinha um único colaborador responsável por receber os pagamentos dos revendedores, emitir os recibos e depositar o numerário. Trabalhava lá há nove anos e era considerado de total confiança. Não havia conciliação bancária regular nem controlo de sequência de recibos.</p>
<p>Em 2022, uma auditoria de rotina detectou que, ao longo de dois anos, tinham sido emitidos recibos manuais fora da sequência a alguns revendedores, e o correspondente numerário nunca entrou na conta. O valor apurado ultrapassou os <strong>19.000.000 Kz</strong>. Além da perda, a empresa gastou perto de <strong>3.000.000 Kz</strong> em auditoria e apoio jurídico, e passou seis meses com o processo aberto.</p>
<p>A falha não foi de honestidade individual: foi de desenho. Uma pessoa sozinha a receber, documentar e depositar é uma situação que a organização criou e manteve.</p>
<div class="hi">Como evitar: <strong>segregue</strong> quem recebe de quem regista e de quem deposita, mesmo numa equipa pequena — se não há três pessoas, o depósito passa a ser confirmado pelo gerente contra o talão. <strong>Controle a sequência</strong> dos recibos, incluindo os anulados. E <strong>concilie</strong> pelo menos mensalmente, com folha assinada e arquivada. Nenhum destes três controlos custa dinheiro; custa disciplina.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Elementos obrigatórios dos documentos de venda</div><blockquote>As facturas e documentos equivalentes emitidos em Angola devem conter os elementos exigidos pela legislação fiscal, incluindo a identificação e o NIF do emitente e do adquirente. Confirme junto da AGT ou do contabilista os requisitos aplicáveis ao regime da sua empresa, incluindo as regras de emissão por meios electrónicos.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Conservação e apresentação de documentos</div><blockquote>Os documentos de suporte devem ser conservados pelo prazo legal e apresentados em caso de fiscalização. A folha de conciliação assinada e arquivada é elemento de prova do controlo interno exercido.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Apropriação de valores da empresa</div><blockquote>A apropriação de valores da entidade empregadora constitui infracção disciplinar grave nos termos da <strong>Lei n.º 12/23, de 27 de Dezembro de 2023</strong>, sem prejuízo da responsabilidade criminal. O procedimento disciplinar deve respeitar as garantias legais — a acusação precipitada sem prova documental expõe a empresa.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Custos aceites fiscalmente</div><blockquote>Só são aceites como custo os gastos devidamente documentados e relacionados com a actividade. Aceitar um documento sem os elementos exigidos transfere o custo para a empresa em sede de imposto — confirme os requisitos junto do contabilista.</blockquote></div>
</div>` },

{ title: "1.8 Estrutura organizacional: tipos e critérios de escolha",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Identificar os tipos de estrutura organizacional e as vantagens e custos de cada um.</li>
<li>Relacionar a estrutura escolhida com a dimensão, a dispersão geográfica e a actividade da empresa.</li>
<li>Reconhecer os sinais de que uma estrutura deixou de servir a empresa.</li>
<li>Elaborar uma proposta fundamentada de reorganização de um escritório.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Nzinga Serviços, Lda.</strong> começou em 2016 como uma empresa de limpeza e manutenção com 14 trabalhadores em Luanda. Em 2024 tinha 210 trabalhadores, contratos com quatro bancos, dois hospitais e um centro comercial em Talatona, e uma delegação em Benguela com 38 pessoas.</p>
<p>A estrutura, porém, nunca mudou: continuavam todos a reportar directamente ao sócio-gerente. Ele aprovava a compra de detergente, autorizava férias, decidia escalas e falava com os clientes. A amplitude de controlo era de <strong>onze pessoas em reporte directo</strong>, algumas em Benguela.</p>
<p>As consequências eram mensuráveis. O prazo médio de aprovação de uma requisição de material era de <strong>6,4 dias</strong>; em 2019 tinha sido de 1 dia. Em Março, uma equipa ficou dois dias sem produtos num hospital porque a requisição estava à espera de assinatura enquanto o gerente estava em Benguela. O cliente aplicou uma penalização contratual de <strong>1.750.000 Kz</strong>. E a delegação de Benguela funcionava, na prática, como uma empresa à parte sem regras escritas.</p>
<p>A reorganização criou três unidades operacionais com responsável próprio (Bancos, Saúde, Retalho), uma delegação com autonomia definida e um serviço administrativo central. O gerente passou de 11 para 5 reportes directos, e o prazo de aprovação de requisições caiu para <strong>1,2 dias</strong>.</p></div>

<div class="cb"><h2><i class="fas fa-sitemap"></i> 1. Os tipos de estrutura</h2>
<div class="tw"><table class="dt">
<tr><th>Tipo</th><th>Agrupamento</th><th>Serve bem</th><th>Custa</th></tr>
<tr><td>Simples</td><td>Todos reportam ao dono</td><td>Até 15 a 20 pessoas, num local</td><td>Não escala: o dono torna-se o estrangulamento</td></tr>
<tr><td>Funcional</td><td>Por especialidade: financeiro, RH, comercial, produção</td><td>Empresa de dimensão média, actividade homogénea</td><td>Departamentos que não falam entre si</td></tr>
<tr><td>Divisional</td><td>Por produto, cliente ou zona geográfica</td><td>Actividades ou mercados muito diferentes; dispersão geográfica</td><td>Duplicação de funções de apoio</td></tr>
<tr><td>Matricial</td><td>Duplo reporte: funcional e por projecto</td><td>Empresas de projecto — construção, consultoria, engenharia</td><td>Viola a unidade de comando; exige regras escritas de precedência</td></tr>
<tr><td>Por processos</td><td>Por circuito ponta a ponta</td><td>Onde o processo atravessa muitos departamentos</td><td>Difícil de implantar sem cultura de medição</td></tr>
</table></div>
<p>Na prática angolana, a maioria das PME está numa estrutura simples que já não serve e ainda não passou a funcional. A transição é adiada porque exige delegar — e delegar exige confiar em procedimentos escritos, não em pessoas.</p></div>

<div class="cb"><h2><i class="fas fa-ruler-combined"></i> 2. Os critérios de escolha</h2>
<ul>
<li><strong>Dimensão.</strong> Até cerca de 20 pessoas, uma estrutura simples funciona. Acima disso, o dono deixa de conseguir supervisionar e a informação começa a perder-se.</li>
<li><strong>Dispersão geográfica.</strong> Em Angola este critério pesa mais do que noutros países. Uma delegação em Benguela ou uma obra no Kwanza-Sul não se gere com decisões diárias tomadas em Luanda: as distâncias e o tempo de deslocação impõem alguma forma divisional.</li>
<li><strong>Diversidade da actividade.</strong> Se a empresa faz limpeza hospitalar e manutenção de <em>data centers</em>, os requisitos técnicos, os clientes e os riscos são diferentes: agrupar por cliente ou por serviço faz sentido.</li>
<li><strong>Ritmo de mudança.</strong> Actividades estáveis toleram estruturas rígidas; actividades de projecto exigem estruturas que se reconfigurem.</li>
<li><strong>Amplitude de controlo praticável.</strong> Trabalho administrativo variado: 5 a 8 reportes. Trabalho padronizado e no mesmo espaço: até 15.</li>
</ul>
<div class="fbox"><div class="f">Níveis hierárquicos ≈ log(N.º de trabalhadores) ÷ log(Amplitude média)</div><div class="fd">Estimativa grosseira do número de níveis necessários; serve para detectar excesso de hierarquia</div></div>
<p>Na Nzinga, com 210 trabalhadores e amplitude média de 8: log(210) ÷ log(8) ≈ 2,32 ÷ 0,90 = <strong>2,6</strong>, ou seja cerca de <strong>3 níveis</strong> — direcção, responsáveis de unidade, encarregados. A empresa tinha 1 nível e meio, o que explicava o congestionamento; se tivesse 5 níveis, o problema seria o oposto, com decisões a demorar semanas a subir e a descer.</p></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> 3. Sete sinais de que a estrutura deixou de servir</h2>
<ol>
<li>Decisões de rotina esperam pela mesma pessoa — e essa pessoa viaja.</li>
<li>O mesmo trabalho é feito em dois sítios sem que ninguém tenha decidido isso.</li>
<li>Existem tarefas que toda a gente reconhece como necessárias e ninguém executa.</li>
<li>Um cliente ou um fornecedor não sabe com quem falar e liga ao gerente.</li>
<li>A informação chega à direcção sistematicamente tarde ou distorcida.</li>
<li>Há pessoas a receber ordens de duas chefias e a escolher qual seguir.</li>
<li>Quando alguém sai ou adoece, um processo pára por completo.</li>
</ol>
<div class="hi">Três ou mais sinais em simultâneo justificam uma proposta escrita de reorganização. Menos do que isso resolve-se normalmente com uma matriz de responsabilidades — que custa uma reunião, e não uma reestruturação.</div></div>

<div class="cb"><h2><i class="fas fa-calculator"></i> 4. Exemplo trabalhado: quantificar o custo da estrutura errada</h2>
<p>Argumentar reorganização com palavras raramente convence. Com números, convence quase sempre.</p>
<p>Na Nzinga mediram-se três efeitos ao longo de seis meses:</p>
<div class="tw"><table class="dt">
<tr><th>Efeito</th><th>Cálculo</th><th>Custo (Kz)</th></tr>
<tr><td>Penalizações contratuais por falha de material</td><td>3 ocorrências × 1.750.000</td><td>5.250.000</td></tr>
<tr><td>Horas de espera de equipas paradas</td><td>420 h × 2.100 Kz/h</td><td>882.000</td></tr>
<tr><td>Tempo do gerente em aprovações de rotina</td><td>6 h/semana × 26 semanas × 18.000 Kz/h</td><td>2.808.000</td></tr>
<tr><td><strong>Total em seis meses</strong></td><td>—</td><td><strong>8.940.000</strong></td></tr>
</table></div>
<p>Anualizado: cerca de <strong>17.880.000 Kz</strong>. O custo anual de três responsáveis de unidade, com encargos, foi estimado em 14.400.000 Kz.</p>
<div class="hi">A reorganização pagava-se a si própria com uma folga de cerca de 3.480.000 Kz por ano — e isto sem contar com a receita perdida por não conseguir aceitar novos contratos. Foi este quadro, e não o organigrama bonito, que fez a direcção decidir.</div></div>

<div class="dg"><div class="dgt">Da estrutura simples à estrutura divisional</div>
<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg">
<text x="150" y="20" font-size="12" fill="#dc2626" text-anchor="middle" font-weight="bold">ANTES — 11 reportes directos</text>
<rect x="110" y="32" width="80" height="30" rx="5" fill="#0B1F3A"/>
<text x="150" y="52" font-size="11" fill="#ffffff" text-anchor="middle">GERENTE</text>
<g stroke="#dc2626" stroke-width="1.5">
<line x1="150" y1="62" x2="30" y2="100"/><line x1="150" y1="62" x2="54" y2="100"/><line x1="150" y1="62" x2="78" y2="100"/>
<line x1="150" y1="62" x2="102" y2="100"/><line x1="150" y1="62" x2="126" y2="100"/><line x1="150" y1="62" x2="150" y2="100"/>
<line x1="150" y1="62" x2="174" y2="100"/><line x1="150" y1="62" x2="198" y2="100"/><line x1="150" y1="62" x2="222" y2="100"/>
<line x1="150" y1="62" x2="246" y2="100"/><line x1="150" y1="62" x2="270" y2="100"/>
</g>
<text x="150" y="120" font-size="11" fill="#dc2626" text-anchor="middle">11 equipas · aprovação em 6,4 dias</text>
<line x1="305" y1="20" x2="305" y2="230" stroke="#64748B" stroke-width="2" stroke-dasharray="5,5"/>
<text x="465" y="20" font-size="12" fill="#16a34a" text-anchor="middle" font-weight="bold">DEPOIS — 5 reportes directos</text>
<rect x="425" y="32" width="80" height="30" rx="5" fill="#0B1F3A"/>
<text x="465" y="52" font-size="11" fill="#ffffff" text-anchor="middle">GERENTE</text>
<g stroke="#16a34a" stroke-width="1.5">
<line x1="465" y1="62" x2="350" y2="95"/><line x1="465" y1="62" x2="407" y2="95"/><line x1="465" y1="62" x2="465" y2="95"/>
<line x1="465" y1="62" x2="523" y2="95"/><line x1="465" y1="62" x2="580" y2="95"/>
</g>
<rect x="322" y="95" width="56" height="26" rx="4" fill="#FF6B00"/><text x="350" y="112" font-size="10" fill="#fff" text-anchor="middle">Bancos</text>
<rect x="379" y="95" width="56" height="26" rx="4" fill="#FF6B00"/><text x="407" y="112" font-size="10" fill="#fff" text-anchor="middle">Saúde</text>
<rect x="437" y="95" width="56" height="26" rx="4" fill="#FF6B00"/><text x="465" y="112" font-size="10" fill="#fff" text-anchor="middle">Retalho</text>
<rect x="495" y="95" width="56" height="26" rx="4" fill="#00A3A1"/><text x="523" y="112" font-size="10" fill="#fff" text-anchor="middle">Benguela</text>
<rect x="552" y="95" width="56" height="26" rx="4" fill="#00A3A1"/><text x="580" y="112" font-size="10" fill="#fff" text-anchor="middle">Admin.</text>
<text x="465" y="145" font-size="11" fill="#16a34a" text-anchor="middle">aprovação em 1,2 dias</text>
<text x="310" y="200" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">A estrutura não é um desenho: é o tempo que uma decisão demora</text>
<text x="310" y="225" font-size="12" fill="#0B1F3A" text-anchor="middle">Custo medido da estrutura errada: 17.880.000 Kz/ano</text>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — propor uma reorganização</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Desenhar a estrutura real, não a oficial</h4><p>Pergunte a cada pessoa a quem pede autorização e a quem entrega o trabalho. O desenho que sai é quase sempre diferente do organigrama da parede.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Medir tempos de decisão</h4><p>Escolha três decisões de rotina — requisição, contratação, aprovação de pagamento — e meça o tempo entre pedido e resposta durante um mês.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Quantificar o custo do atraso</h4><p>Penalizações, horas paradas, tempo de chefia em aprovações de rotina. Sem esta secção a proposta é uma opinião.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Propor duas alternativas, não uma</h4><p>Uma mínima (limites de decisão e matriz de responsabilidades, sem criar postos) e uma estrutural. Apresente o custo e o efeito esperado de cada uma.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Definir o faseamento</h4><p>Reorganizar tudo de uma vez paralisa a empresa. Comece por uma unidade, meça três meses, depois estenda.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Actualizar organigrama, descrições de funções e matriz</h4><p>Uma reorganização que não chega aos documentos desfaz-se em dois meses.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de comércio de materiais em Viana cresceu de 25 para 90 trabalhadores em três anos e criou quatro departamentos com responsáveis. Fez o organigrama, afixou-o na parede e comunicou por circular. Não alterou, porém, os <strong>limites de decisão</strong>: todas as compras, todos os pagamentos e todas as contratações continuaram a exigir a assinatura do sócio-gerente.</p>
<p>O resultado foi o pior dos dois mundos: passou a haver quatro responsáveis com o custo salarial correspondente — cerca de <strong>19.200.000 Kz por ano</strong> — e nenhum poder real. Os departamentos queixavam-se de não decidir nada, o gerente continuava sobrecarregado, e em nove meses três dos quatro responsáveis saíram. A empresa gastou o dinheiro da estrutura e não comprou nenhuma das suas vantagens.</p>
<div class="hi">Como evitar: uma reorganização faz-se em <strong>três documentos ao mesmo tempo</strong> — organigrama, descrições de funções e limites de decisão com valores em kwanzas. Alterar só o primeiro é mudar o desenho e manter o problema. Se a direcção não estiver disposta a delegar autoridade real, não vale a pena criar os lugares.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Alteração de funções e categoria</div><blockquote>Alterações de funções decorrentes de reorganização devem respeitar a categoria e as condições do contrato, nos termos da <strong>Lei Geral do Trabalho (Lei n.º 12/23, de 27 de Dezembro de 2023)</strong>. Uma reorganização não é fundamento automático para alterar unilateralmente condições essenciais.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Informação aos trabalhadores</div><blockquote>As alterações relevantes na organização do trabalho devem ser comunicadas aos trabalhadores. Onde exista representação dos trabalhadores, verifique os deveres de informação e consulta aplicáveis.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Poderes de representação da sociedade</div><blockquote>Criar um responsável de unidade não lhe confere poderes para obrigar a sociedade. Para que possa assinar contratos ou ordens de pagamento perante terceiros, é necessária delegação formal nos termos do pacto social — confirme com o apoio jurídico da empresa.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Actualização dos registos</div><blockquote>Alterações à gerência ou aos poderes de representação inscritos devem ser levadas ao registo comercial. Uma alteração interna não produz efeitos perante terceiros enquanto não for registada.</blockquote></div>
</div>` },

{ title: "1.9 Organigramas: ler, desenhar e manter actualizado",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Ler um organigrama e extrair dele linhas de autoridade, amplitude de controlo e níveis hierárquicos.</li>
<li>Desenhar organigramas verticais, horizontais e circulares com as convenções correctas.</li>
<li>Distinguir relações hierárquicas de relações funcionais e de apoio (linha e <em>staff</em>).</li>
<li>Manter o organigrama actualizado e utilizá-lo como instrumento de trabalho, não como decoração.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>A <strong>Clínica Kilamba Saúde</strong>, com 62 trabalhadores, foi visitada por um cliente institucional que pretendia contratar assistência médica para os seus 300 empregados. Entre os documentos pedidos estava o organigrama da clínica.</p>
<p>O que existia era um desenho feito em 2019, com 5 caixas, feito num programa de apresentações. Metade dos nomes já não trabalhava lá, o laboratório — criado em 2022 — não aparecia, e a direcção de enfermagem estava representada como reportando ao director clínico, quando na prática reportava à administração. O cliente devolveu o documento e pediu "o organigrama actual, assinado".</p>
<p>O técnico administrativo levou onze dias a reconstruí-lo, porque teve de perguntar caso a caso quem reportava a quem — e descobriu, no processo, que <strong>quatro pessoas não sabiam ao certo quem era a sua chefia directa</strong> e que a técnica de facturação recebia instruções da recepção, da direcção clínica e da administração.</p>
<p>O contrato acabou por ser assinado, com um mês de atraso. Mas o valor real do exercício foi outro: o levantamento revelou três reportes duplos e uma função — controlo de material clínico — sem responsável definido, exactamente a mesma patologia que o módulo já descreveu noutros contextos.</p></div>

<div class="cb"><h2><i class="fas fa-diagram-project"></i> 1. O que um organigrama mostra — e o que não mostra</h2>
<p>Um organigrama é a representação gráfica da estrutura formal. Mostra quatro coisas:</p>
<ul>
<li><strong>Órgãos e unidades</strong> que existem — cada caixa é uma unidade ou um posto, não uma pessoa.</li>
<li><strong>Linhas de autoridade</strong> — quem reporta a quem.</li>
<li><strong>Níveis hierárquicos</strong> — a que altura está cada unidade.</li>
<li><strong>Amplitude de controlo</strong> — quantas unidades dependem de cada chefia.</li>
</ul>
<p>E não mostra: a influência real, a qualidade da comunicação, a carga de trabalho, nem os circuitos informais por onde metade das coisas acontece. Quem confunde o organigrama com a realidade da empresa engana-se sempre.</p>
<div class="hi">Regra de desenho fundamental: as caixas representam <strong>funções</strong>, não pessoas. O nome da pessoa aparece por baixo do nome da função, em letra mais pequena. Assim, quando alguém sai, altera-se uma linha e não se refaz o documento.</div></div>

<div class="cb"><h2><i class="fas fa-pen-ruler"></i> 2. Tipos de organigrama e convenções</h2>
<div class="tw"><table class="dt">
<tr><th>Tipo</th><th>Como se lê</th><th>Quando usar</th></tr>
<tr><td>Vertical (clássico)</td><td>Autoridade de cima para baixo</td><td>Uso geral; é o que as entidades e clientes esperam ver</td></tr>
<tr><td>Horizontal</td><td>Autoridade da esquerda para a direita</td><td>Estruturas com muitos níveis, que não cabem em altura</td></tr>
<tr><td>Circular</td><td>Direcção no centro, níveis em anéis</td><td>Comunicação interna; suaviza a leitura hierárquica</td></tr>
<tr><td>Funcional</td><td>Destaca funções e não pessoas</td><td>Documentação de processos e manuais de qualidade</td></tr>
</table></div>
<p>Convenções que não se violam:</p>
<ul>
<li><strong>Linha cheia</strong> = autoridade hierárquica (dá ordens, avalia, aprova férias).</li>
<li><strong>Linha tracejada</strong> = relação funcional ou de apoio (orienta tecnicamente, mas não é a chefia). É a linha certa para representar o contabilista externo ou o apoio jurídico.</li>
<li>Unidades de <strong><em>staff</em></strong> (secretariado da direcção, qualidade, jurídico) desenham-se lateralmente, ligadas à unidade que apoiam.</li>
<li>Unidades do <strong>mesmo nível</strong> desenham-se à mesma altura. Colocar um departamento mais acima porque a chefia é mais antiga é o erro mais comum e cria conflito.</li>
<li>Cada caixa leva a <strong>designação da unidade ou do posto</strong>; o nome da pessoa é secundário.</li>
<li>O documento leva <strong>data de elaboração e versão</strong>. Um organigrama sem data não vale nada, porque ninguém sabe se está em vigor.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-code-branch"></i> 3. Linha e <em>staff</em>: a distinção que evita conflitos</h2>
<p>Numa empresa angolana média, três funções costumam ser mal colocadas:</p>
<div class="tw"><table class="dt">
<tr><th>Função</th><th>Erro frequente</th><th>Representação correcta</th></tr>
<tr><td>Contabilista externo</td><td>Caixa em linha cheia sob a direcção, como se fosse departamento</td><td>Caixa lateral com linha tracejada — é prestador de serviços, não tem autoridade sobre ninguém</td></tr>
<tr><td>Segurança e higiene no trabalho</td><td>Sob a produção, a quem deveria fiscalizar</td><td>Lateral à direcção, com linha tracejada às unidades operacionais</td></tr>
<tr><td>Secretariado da direcção</td><td>Ao mesmo nível dos directores de departamento</td><td>Caixa lateral ligada à direcção; apoia, não dirige</td></tr>
</table></div>
<div class="hi">O teste para saber se uma relação é hierárquica: <em>esta pessoa aprova as férias e avalia o desempenho da outra?</em> Se sim, linha cheia. Se apenas orienta tecnicamente, linha tracejada. Não há terceira hipótese.</div></div>

<div class="cb"><h2><i class="fas fa-magnifying-glass-chart"></i> 4. Ler um organigrama como diagnóstico</h2>
<p>Um organigrama bem lido dá quatro indicadores em cinco minutos:</p>
<ol>
<li><strong>Amplitude por chefia.</strong> Conte as caixas ligadas a cada uma. Mais de 8 em trabalho variado é excessivo; menos de 3 sugere um nível desnecessário.</li>
<li><strong>Número de níveis.</strong> Numa empresa de 60 pessoas, três níveis chegam. Cinco níveis com 60 pessoas significa hierarquia a mais e decisões lentas.</li>
<li><strong>Caixas com duas linhas cheias a entrar.</strong> Violação da unidade de comando. Ou se converte uma em tracejada, ou se define por escrito a regra de precedência.</li>
<li><strong>Funções ausentes.</strong> Procure no desenho: controlo interno, arquivo, gestão de contratos, segurança no trabalho. Se não estão em lado nenhum, não têm dono.</li>
</ol>
<p><strong>Exemplo trabalhado</strong> — Clínica Kilamba Saúde, 62 trabalhadores, organigrama reconstruído:</p>
<div class="tw"><table class="dt">
<tr><th>Chefia</th><th>Reportes directos</th><th>Leitura</th></tr>
<tr><td>Administração</td><td>4</td><td>Adequado</td></tr>
<tr><td>Direcção clínica</td><td>13</td><td>Excessivo — criar coordenação por especialidade</td></tr>
<tr><td>Direcção de enfermagem</td><td>9</td><td>No limite — aceitável por ser trabalho padronizado por turno</td></tr>
<tr><td>Responsável administrativo</td><td>5</td><td>Adequado</td></tr>
<tr><td>Responsável de laboratório</td><td>3</td><td>Adequado</td></tr>
</table></div>
<div class="hi">Diagnóstico: 62 trabalhadores, 3 níveis — correcto. Um ponto crítico na direcção clínica com 13 reportes, e uma função sem dono (controlo de material clínico). Duas correcções pontuais, não uma reestruturação.</div></div>

<div class="dg"><div class="dgt">Organigrama com linha, staff e relação funcional</div>
<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
<rect x="255" y="15" width="110" height="34" rx="5" fill="#0B1F3A"/>
<text x="310" y="30" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="bold">ADMINISTRAÇÃO</text>
<text x="310" y="43" font-size="9" fill="#cbd5e1" text-anchor="middle">Dr. A. Neto</text>
<rect x="440" y="20" width="110" height="26" rx="5" fill="#64748B"/>
<text x="495" y="37" font-size="10" fill="#ffffff" text-anchor="middle">Contabilista externo</text>
<line x1="365" y1="33" x2="438" y2="33" stroke="#64748B" stroke-width="2" stroke-dasharray="5,4"/>
<text x="400" y="15" font-size="9" fill="#64748B" text-anchor="middle">staff</text>
<line x1="310" y1="49" x2="310" y2="70" stroke="#0B1F3A" stroke-width="2"/>
<line x1="105" y1="70" x2="515" y2="70" stroke="#0B1F3A" stroke-width="2"/>
<line x1="105" y1="70" x2="105" y2="90" stroke="#0B1F3A" stroke-width="2"/>
<line x1="242" y1="70" x2="242" y2="90" stroke="#0B1F3A" stroke-width="2"/>
<line x1="378" y1="70" x2="378" y2="90" stroke="#0B1F3A" stroke-width="2"/>
<line x1="515" y1="70" x2="515" y2="90" stroke="#0B1F3A" stroke-width="2"/>
<rect x="50" y="90" width="110" height="34" rx="5" fill="#FF6B00"/>
<text x="105" y="105" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">DIR. CLÍNICA</text>
<text x="105" y="118" font-size="9" fill="#ffffff" text-anchor="middle">13 reportes</text>
<rect x="187" y="90" width="110" height="34" rx="5" fill="#FF6B00"/>
<text x="242" y="105" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">DIR. ENFERMAGEM</text>
<text x="242" y="118" font-size="9" fill="#ffffff" text-anchor="middle">9 reportes</text>
<rect x="323" y="90" width="110" height="34" rx="5" fill="#00A3A1"/>
<text x="378" y="105" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">ADMINISTRATIVO</text>
<text x="378" y="118" font-size="9" fill="#ffffff" text-anchor="middle">5 reportes</text>
<rect x="460" y="90" width="110" height="34" rx="5" fill="#00A3A1"/>
<text x="515" y="105" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">LABORATÓRIO</text>
<text x="515" y="118" font-size="9" fill="#ffffff" text-anchor="middle">3 reportes</text>
<rect x="220" y="165" width="180" height="30" rx="5" fill="#dc2626"/>
<text x="310" y="184" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="bold">13 reportes — ponto crítico</text>
<line x1="105" y1="124" x2="105" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="105" y1="150" x2="218" y2="177" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
<text x="310" y="225" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">Linha cheia = hierarquia · Linha tracejada = apoio ou orientação técnica</text>
<text x="310" y="247" font-size="11" fill="#64748B" text-anchor="middle">Versão 3 · elaborado em 12/03 · aprovado pela Administração</text>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — levantar e desenhar o organigrama</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Listar todos os postos, não as pessoas</h4><p>Do mapa de pessoal ou da folha de salários. Um posto por linha, com a designação da função.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Perguntar a cada pessoa a quem reporta</h4><p>Duas perguntas: "quem aprova as suas férias?" e "quem avalia o seu trabalho?". Se as respostas divergirem, encontrou um reporte duplo.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Confrontar com a versão da chefia</h4><p>Pergunte a cada chefia quem lhe reporta. As diferenças entre as duas listas são o material do diagnóstico.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Desenhar com as convenções</h4><p>Mesmo nível à mesma altura; linha cheia para hierarquia; tracejada para apoio; <em>staff</em> lateral. Uma folha A4 na horizontal chega para 40 caixas.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Datar, numerar a versão e submeter a aprovação</h4><p>"Versão 3 — 12/03 — aprovado pela Administração". Sem estes três elementos o documento não serve para instruir processos nem para entregar a clientes.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Fixar a regra de actualização</h4><p>Revisão sempre que entra, sai ou muda de função alguém com reporte directo, e revisão geral semestral. Guarde as versões anteriores — servem de histórico.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de segurança privada em Luanda concorreu, em 2023, a um concurso para vigilância de instalações de um cliente institucional. O caderno de encargos exigia organigrama actualizado com identificação do responsável de operações e comprovativo dos seus poderes.</p>
<p>A empresa entregou um organigrama sem data, onde o responsável de operações indicado tinha saído dez meses antes. A proposta foi excluída na fase de qualificação, por desconformidade documental. O contrato tinha um valor estimado de <strong>96.000.000 Kz por ano</strong>. Não houve recurso possível: o documento estava efectivamente errado.</p>
<div class="hi">Como evitar: trate o organigrama como <strong>documento controlado</strong> — com data, número de versão, aprovação e responsável pela actualização. Inclua a sua revisão na rotina de saída e entrada de pessoal: quem processa a admissão ou a cessação verifica também se o organigrama precisa de mudar. Guarde sempre uma versão em PDF assinado e datado, pronta a anexar a uma candidatura.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Documentação em concursos e contratação pública</div><blockquote>Os cadernos de encargos exigem frequentemente organigrama, comprovativo de poderes de representação e documentos de idoneidade fiscal e social actualizados. Verifique os requisitos de cada procedimento e mantenha um dossiê permanente com estes documentos válidos.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Representação da sociedade</div><blockquote>Quem representa a sociedade consta do registo comercial. Um organigrama interno não substitui a certidão de registo comercial nem a procuração quando é exigida prova de poderes.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Registo de pessoal</div><blockquote>A empresa deve manter registo actualizado dos trabalhadores ao seu serviço, nos termos da <strong>Lei n.º 12/23, de 27 de Dezembro de 2023</strong> e da regulamentação aplicável. O organigrama apoia-se nesse registo, mas não o substitui.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Segurança e saúde no trabalho</div><blockquote>A empresa deve designar quem responde pela segurança e saúde no trabalho. Esta função deve constar do organigrama, com posicionamento que lhe permita reportar directamente à direcção.</blockquote></div>
</div>` },

{ title: "1.10 Formas jurídicas de empresa em Angola: nome individual, unipessoal e por quotas",
  content: `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2>
<ul>
<li>Distinguir o <strong>empresário em nome individual</strong> da <strong>sociedade unipessoal por quotas</strong> e da <strong>sociedade por quotas</strong>.</li>
<li>Avaliar o impacto de cada forma na responsabilidade patrimonial do empresário.</li>
<li>Identificar os documentos societários que o técnico administrativo trata no dia-a-dia.</li>
<li>Reconhecer os actos que exigem deliberação dos sócios e os que a gerência pratica sozinha.</li>
</ul></div>

<div class="cb"><h2><i class="fas fa-building"></i> Cenário Real num Escritório Angolano</h2>
<p>Dois irmãos abriram, em 2019, uma oficina de reparação automóvel no Cazenga. Um deles inscreveu-se como <strong>empresário em nome individual</strong>, porque era mais rápido e mais barato do que constituir sociedade. O outro entrava com dinheiro e trabalho, sem qualquer formalização.</p>
<p>O negócio cresceu. Em 2023, a oficina facturava cerca de <strong>18.000.000 Kz por mês</strong>, tinha 9 trabalhadores e um contrato de manutenção de frota com uma empresa de distribuição.</p>
<p>Aconteceram então duas coisas. Primeiro, um cliente institucional exigiu, para renovar o contrato, que a contraparte fosse uma sociedade com certidão de registo comercial — o que o empresário em nome individual não podia apresentar nos termos pedidos. Segundo, e mais grave: a oficina foi responsabilizada por danos num veículo de cliente, e a indemnização foi cobrada sobre o património do irmão inscrito — incluindo bens pessoais, porque no regime de empresário em nome individual <strong>não há separação entre o património da empresa e o património da pessoa</strong>.</p>
<p>A transformação em sociedade por quotas fez-se em 2024, com os dois irmãos como sócios. Custou tempo e dinheiro. Feita em 2019 teria custado uma fracção disso e evitado ambos os problemas — e teria dado ao segundo irmão um direito que ele, durante cinco anos, simplesmente não teve.</p></div>

<div class="cb"><h2><i class="fas fa-user"></i> 1. Empresário em nome individual</h2>
<p>É uma pessoa singular que exerce actividade comercial em nome próprio. Não cria uma pessoa jurídica nova: quem exerce a actividade e quem responde por ela são a mesma pessoa.</p>
<ul>
<li><strong>Responsabilidade:</strong> ilimitada. As dívidas da actividade respondem sobre todo o património pessoal do empresário — casa, viatura, contas. É a característica decisiva e a mais mal compreendida.</li>
<li><strong>Constituição:</strong> simples e rápida, sem pacto social nem sócios.</li>
<li><strong>Obrigações:</strong> registo e NIF junto da AGT, licenciamento da actividade, inscrição no INSS enquanto entidade empregadora se tiver trabalhadores, e cumprimento das obrigações fiscais aplicáveis ao seu regime.</li>
<li><strong>Serve para:</strong> actividade de pequena escala, com risco baixo e sem sócios — uma loja, um prestador de serviços, uma actividade profissional.</li>
<li><strong>Não serve para:</strong> actividade com risco material relevante, com necessidade de sócios, ou com clientes institucionais que exijam contraparte societária.</li>
</ul>
<div class="hi">Regra prática para aconselhar (sem substituir apoio jurídico): se a actividade pode gerar um dano superior ao que o empresário está disposto a perder do seu património pessoal, o nome individual é a forma errada.</div></div>

<div class="cb"><h2><i class="fas fa-user-shield"></i> 2. Sociedade unipessoal por quotas</h2>
<p>É uma sociedade por quotas com um único sócio. Cria uma pessoa colectiva distinta do sócio, com património próprio.</p>
<ul>
<li><strong>Responsabilidade:</strong> em princípio limitada ao património da sociedade. Esta limitação depende, porém, de o sócio manter uma <em>separação efectiva</em> entre o seu património e o da sociedade — misturar contas bancárias, pagar despesas pessoais pela empresa ou não ter contabilidade organizada expõe o sócio.</li>
<li><strong>Constituição:</strong> exige acto de constituição com os estatutos, registo comercial e publicação nos termos legais.</li>
<li><strong>Gerência:</strong> normalmente o próprio sócio, mas pode ser terceiro.</li>
<li><strong>Serve para:</strong> quem quer trabalhar sozinho mas com o património pessoal protegido, e quem precisa de apresentar certidão de registo comercial a clientes e bancos.</li>
</ul>
<div class="hi">Aviso prático que o técnico administrativo deve conhecer: a sociedade unipessoal só protege enquanto for tratada como entidade separada. A conta bancária da empresa não é a carteira do sócio. O levantamento sem título — sem ser salário, sem ser distribuição de lucros deliberada, sem ser reembolso documentado — é o erro que destrói a protecção.</div></div>

<div class="cb"><h2><i class="fas fa-users"></i> 3. Sociedade por quotas (Lda.)</h2>
<p>É a forma societária mais comum em Angola para PME. O capital divide-se em quotas, e cada sócio detém uma quota correspondente à sua entrada.</p>
<div class="tw"><table class="dt">
<tr><th>Elemento</th><th>Conteúdo</th><th>Onde consta</th></tr>
<tr><td>Firma</td><td>Denominação seguida de "Limitada" ou "Lda."</td><td>Certificado de admissibilidade e pacto social</td></tr>
<tr><td>Objecto social</td><td>Actividades que a sociedade pode exercer</td><td>Pacto social</td></tr>
<tr><td>Capital social</td><td>Valor total e divisão em quotas por sócio</td><td>Pacto social e registo comercial</td></tr>
<tr><td>Sede</td><td>Endereço da sociedade</td><td>Pacto social e registo comercial</td></tr>
<tr><td>Gerência</td><td>Quem gere e como obriga a sociedade (uma ou duas assinaturas)</td><td>Pacto social e registo comercial</td></tr>
<tr><td>Exercício social</td><td>Período a que respeitam as contas</td><td>Pacto social</td></tr>
</table></div>
<p><strong>Forma de obrigar</strong> é a cláusula que o técnico administrativo mais consulta na prática. Se o pacto diz que a sociedade se obriga com <em>duas assinaturas de gerentes</em>, um contrato assinado por um só gerente pode não vincular a sociedade — e é o técnico quem normalmente prepara os documentos para assinatura.</p>
<div class="hi">Tenha sempre no dossiê da empresa uma <strong>certidão de registo comercial actualizada</strong> e o pacto social. São os dois documentos mais pedidos por bancos, clientes institucionais e entidades públicas, e o primeiro a ser rejeitado quando está desactualizado.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> 4. Comparação para decisão</h2>
<div class="tw"><table class="dt">
<tr><th>Critério</th><th>Nome individual</th><th>Unipessoal por quotas</th><th>Por quotas (Lda.)</th></tr>
<tr><td>Personalidade jurídica distinta</td><td>Não</td><td>Sim</td><td>Sim</td></tr>
<tr><td>Responsabilidade pelo passivo</td><td>Ilimitada, património pessoal</td><td>Limitada, com separação efectiva</td><td>Limitada, com separação efectiva</td></tr>
<tr><td>N.º de titulares</td><td>1</td><td>1</td><td>2 ou mais</td></tr>
<tr><td>Complexidade de constituição</td><td>Baixa</td><td>Média</td><td>Média</td></tr>
<tr><td>Entrada de novos sócios</td><td>Impossível sem mudar de forma</td><td>Por cessão de quota e alteração do pacto</td><td>Por cessão de quota e alteração do pacto</td></tr>
<tr><td>Aceitação por clientes institucionais</td><td>Limitada</td><td>Boa</td><td>Boa</td></tr>
<tr><td>Continuidade após a morte do titular</td><td>Frágil</td><td>Sociedade subsiste</td><td>Sociedade subsiste</td></tr>
</table></div>
<p><strong>Exemplo trabalhado</strong> — a oficina do Cazenga, transformada em Lda. com capital social de 2.000.000 Kz, repartido conforme as entradas acordadas:</p>
<div class="tw"><table class="dt">
<tr><th>Sócio</th><th>Entrada (Kz)</th><th>Quota</th><th>% do capital</th><th>Efeito prático</th></tr>
<tr><td>Irmão A</td><td>1.200.000</td><td>1.200.000</td><td>60%</td><td>Maioria em deliberações simples</td></tr>
<tr><td>Irmão B</td><td>800.000</td><td>800.000</td><td>40%</td><td>Direito a lucros e a informação; bloqueia deliberações que exijam maioria qualificada</td></tr>
<tr><td><strong>Total</strong></td><td><strong>2.000.000</strong></td><td>—</td><td><strong>100%</strong></td><td>—</td></tr>
</table></div>
<p>Distribuição de um lucro deliberado de 9.000.000 Kz, na proporção das quotas: Irmão A = 9.000.000 × 0,60 = <strong>5.400.000 Kz</strong>; Irmão B = 9.000.000 × 0,40 = <strong>3.600.000 Kz</strong>.</p>
<div class="hi">Repare no que a formalização deu ao irmão B: durante cinco anos trabalhou e investiu sem qualquer título jurídico sobre o negócio. Se tivessem discutido, não teria como provar coisa nenhuma. A quota é isso — um direito que existe em papel e não depende da boa vontade do outro.</div></div>

<div class="cb"><h2><i class="fas fa-gavel"></i> 5. O que a gerência decide e o que exige deliberação dos sócios</h2>
<p>Distinção prática para o técnico administrativo, que prepara os documentos de ambos:</p>
<div class="tw"><table class="dt">
<tr><th>Acto</th><th>Quem decide</th><th>Documento a preparar</th></tr>
<tr><td>Compras e contratos correntes</td><td>Gerência</td><td>Contrato, ordem de compra</td></tr>
<tr><td>Contratação e cessação de trabalhadores</td><td>Gerência</td><td>Contrato de trabalho, comunicação</td></tr>
<tr><td>Aprovação de contas do exercício</td><td>Assembleia de sócios</td><td>Convocatória, contas, acta</td></tr>
<tr><td>Distribuição de lucros</td><td>Assembleia de sócios</td><td>Acta com a deliberação</td></tr>
<tr><td>Alteração do pacto social (firma, sede, objecto, capital)</td><td>Assembleia de sócios</td><td>Acta e registo da alteração</td></tr>
<tr><td>Nomeação e destituição de gerentes</td><td>Assembleia de sócios</td><td>Acta e registo</td></tr>
<tr><td>Cessão de quotas</td><td>Sócios, nos termos do pacto</td><td>Contrato de cessão, acta, registo</td></tr>
</table></div>
<div class="hi">A regra que o técnico deve interiorizar: tudo o que altera o pacto social ou o quadro de sócios <strong>tem de ser registado</strong> para produzir efeitos perante terceiros. Uma deliberação em acta que não vai a registo é invisível para o banco, para o cliente e para a AGT.</div></div>

<div class="dg"><div class="dgt">Responsabilidade patrimonial por forma jurídica</div>
<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="25" y="45" width="245" height="160" rx="10" fill="#dc2626" opacity="0.09" stroke="#dc2626" stroke-width="2"/>
<text x="147" y="70" font-size="13" fill="#dc2626" text-anchor="middle" font-weight="bold">NOME INDIVIDUAL</text>
<rect x="55" y="85" width="85" height="45" rx="6" fill="#dc2626"/>
<text x="97" y="103" font-size="10" fill="#fff" text-anchor="middle">PATRIMÓNIO</text>
<text x="97" y="118" font-size="10" fill="#fff" text-anchor="middle">DO NEGÓCIO</text>
<rect x="155" y="85" width="85" height="45" rx="6" fill="#dc2626"/>
<text x="197" y="103" font-size="10" fill="#fff" text-anchor="middle">PATRIMÓNIO</text>
<text x="197" y="118" font-size="10" fill="#fff" text-anchor="middle">PESSOAL</text>
<text x="147" y="152" font-size="12" fill="#dc2626" text-anchor="middle" font-weight="bold">sem separação</text>
<text x="147" y="175" font-size="11" fill="#0B1F3A" text-anchor="middle">a dívida do negócio alcança</text>
<text x="147" y="192" font-size="11" fill="#0B1F3A" text-anchor="middle">a casa e a viatura da família</text>
<rect x="325" y="45" width="250" height="160" rx="10" fill="#16a34a" opacity="0.09" stroke="#16a34a" stroke-width="2"/>
<text x="450" y="70" font-size="13" fill="#16a34a" text-anchor="middle" font-weight="bold">SOCIEDADE POR QUOTAS</text>
<rect x="355" y="85" width="85" height="45" rx="6" fill="#16a34a"/>
<text x="397" y="103" font-size="10" fill="#fff" text-anchor="middle">PATRIMÓNIO</text>
<text x="397" y="118" font-size="10" fill="#fff" text-anchor="middle">DA SOCIEDADE</text>
<rect x="460" y="85" width="85" height="45" rx="6" fill="#64748B"/>
<text x="502" y="103" font-size="10" fill="#fff" text-anchor="middle">PATRIMÓNIO</text>
<text x="502" y="118" font-size="10" fill="#fff" text-anchor="middle">DO SÓCIO</text>
<line x1="450" y1="80" x2="450" y2="140" stroke="#16a34a" stroke-width="4"/>
<text x="450" y="152" font-size="12" fill="#16a34a" text-anchor="middle" font-weight="bold">separação jurídica</text>
<text x="450" y="175" font-size="11" fill="#0B1F3A" text-anchor="middle">mas só se for separação REAL:</text>
<text x="450" y="192" font-size="11" fill="#0B1F3A" text-anchor="middle">contas distintas e contabilidade organizada</text>
<text x="300" y="228" font-size="12" fill="#0B1F3A" text-anchor="middle" font-weight="bold">A forma jurídica é a primeira decisão administrativa de uma empresa</text>
</svg></div>

<div class="cb"><h2><i class="fas fa-clipboard-check"></i> Procedimento Prático — manter o dossiê societário da empresa</h2>
<div class="tl">
<div class="tli"><div class="tld">1</div><div class="tlc"><h4>Reunir os documentos constitutivos</h4><p>Pacto social e todas as alterações, certificado de admissibilidade da firma, certidão de registo comercial, publicação, NIF, licença ou alvará da actividade.</p></div></div>
<div class="tli"><div class="tld">2</div><div class="tlc"><h4>Manter o livro de actas em dia</h4><p>Todas as deliberações dos sócios ficam em acta, numeradas e assinadas. É o documento que prova, anos depois, quem decidiu o quê.</p></div></div>
<div class="tli"><div class="tld">3</div><div class="tlc"><h4>Manter uma certidão de registo comercial recente</h4><p>Peça uma nova sempre que a existente ultrapasse alguns meses ou sempre que haja alteração. Bancos e concursos recusam certidões antigas.</p></div></div>
<div class="tli"><div class="tld">4</div><div class="tlc"><h4>Registar as alterações no prazo</h4><p>Mudança de sede, de gerência, de objecto, de capital ou de sócios. Uma alteração deliberada e não registada não vale perante terceiros.</p></div></div>
<div class="tli"><div class="tld">5</div><div class="tlc"><h4>Verificar a forma de obrigar antes de cada assinatura</h4><p>Antes de submeter qualquer contrato a assinatura, confirme no pacto e na certidão quantas assinaturas são necessárias e de quem.</p></div></div>
<div class="tli"><div class="tld">6</div><div class="tlc"><h4>Guardar cópia digitalizada e organizada</h4><p>Pasta única, ficheiros nomeados com data e tipo. Metade dos atrasos em candidaturas vem de não encontrar um documento que existe.</p></div></div>
</div></div>

<div class="cb"><h2><i class="fas fa-triangle-exclamation"></i> Erro Comum e Consequência Real</h2>
<p>Uma empresa de catering em Talatona, constituída como sociedade unipessoal por quotas, funcionou três anos com uma única conta bancária, usada indistintamente para a actividade e para as despesas pessoais da sócia — propinas, renda de casa, compras. Não havia contabilidade organizada nem qualquer registo que separasse os movimentos.</p>
<p>Quando um fornecedor accionou judicialmente uma dívida de <strong>14.000.000 Kz</strong>, invocou precisamente a confusão de patrimónios para pedir que a sócia respondesse pessoalmente. Independentemente do desfecho, a empresa teve de suportar apoio jurídico e passou dois anos com o assunto pendente, período em que dois clientes institucionais não renovaram contrato por causa do processo.</p>
<p>A protecção da responsabilidade limitada existia no papel. Foi destruída pela prática diária de tratar a conta da empresa como carteira pessoal.</p>
<div class="hi">Como evitar: conta bancária <strong>exclusiva</strong> da sociedade; contabilidade organizada desde o primeiro mês; qualquer valor que o sócio retire tem de ter título documentado — salário processado, distribuição de lucros deliberada em acta, ou reembolso de despesa com factura. Estas três regras são responsabilidade directa do técnico administrativo e custam zero.</div></div>

<div class="cb"><h2><i class="fas fa-scale-balanced"></i> Obrigações e Referências Aplicáveis</h2>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Regime das sociedades comerciais</div><blockquote>A constituição, o funcionamento e a dissolução das sociedades comerciais em Angola regem-se pela Lei das Sociedades Comerciais e legislação complementar. Confirme a versão em vigor e as exigências concretas — capital, número de sócios, forma do acto constitutivo — junto do Guiché Único da Empresa ou de apoio jurídico, antes de aconselhar seja quem for.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Registo comercial</div><blockquote>Os factos sujeitos a registo — constituição, alteração do pacto, nomeação e cessação de gerentes, cessão de quotas, dissolução — só produzem efeitos perante terceiros depois de registados. Mantenha certidão actualizada no dossiê da empresa.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Identificação fiscal</div><blockquote>Toda a entidade que exerça actividade tem de possuir NIF atribuído pela <strong>AGT</strong> e cumprir as obrigações declarativas do seu regime de tributação. Confirme o regime aplicável e os respectivos prazos junto da AGT ou do contabilista.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Entidade empregadora</div><blockquote>A empresa que admita trabalhadores inscreve-se no <strong>INSS</strong> como entidade empregadora e inscreve cada trabalhador, aplicando-se a <strong>Lei Geral do Trabalho — Lei n.º 12/23, de 27 de Dezembro de 2023</strong> às relações laborais constituídas.</blockquote></div>
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Contabilidade organizada</div><blockquote>As entidades sujeitas a contabilidade organizada devem manter escrituração regular e documentos de suporte. A ausência de contabilidade organizada, além das consequências fiscais, enfraquece a separação patrimonial numa sociedade unipessoal.</blockquote></div>
</div>` }

];
