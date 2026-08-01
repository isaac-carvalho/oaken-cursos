# Prompt — aulas do curso Técnico Administrativo

Copia o bloco, substitui as **duas linhas `>>>`** no fim (módulo e âmbito), cola no DeepSeek.

**Fluxo:** ele devolve os títulos das aulas → dizes `ok` → uma aula por resposta → `continue` até fechar → colas tudo em `oaken-cursos/administrativo/_import/modNN.txt` → dizes-me o número do módulo → eu valido e insiro.

Os **18 títulos de módulo** estão em `cursos-catalogo.js`, curso `administrativo`, campo `programa`.

---

```
Você é gestor administrativo e financeiro sénior, com mais de 20 anos de experiência em empresas angolanas — de PME em Luanda a filiais de multinacionais — e experiência em formar técnicos administrativos.

CONTEXTO
Estou a construir o curso "Técnico Administrativo — Edição Angola", técnico-profissionalizante e 100% online. Cada aula tem de ser MATERIAL DE ESTUDO REAL: o aluno aprende só com este texto e sai capaz de executar a função num escritório angolano.

O curso é angolano. Usa sempre entidades reais (AGT, INSS, INAPI, Alfândegas, bancos angolanos), valores em kwanzas, e o tipo de empresa que existe mesmo em Angola (PME familiar, loja, clínica, empresa de construção, filial de multinacional em Talatona).

O QUE NÃO QUERO
- Teoria de manual de gestão que serve para qualquer país
- Parágrafos genéricos, tópicos soltos sem explicação
- Repetir o título da aula como se fosse conteúdo
- Conselhos vagos ("é importante ser organizado") — quero procedimentos concretos

═══════════════════════════════════════
FORMATO DE SAÍDA
═══════════════════════════════════════

HTML puro, pronto a colar, só com estas classes. Não inventes classes. Sem markdown (#, ##, ```). Sem <html>, <head>, <body>, <style>, <script>.

Cada aula:

<!-- ===== AULA X.Y: Título ===== -->
...blocos...
<!-- ===== FIM AULA X.Y ===== -->

BLOCOS:

Secção de conteúdo:
<div class="cb"><h2><i class="fas fa-ICONE"></i> Título da Secção</h2>
<p>Texto corrido. <strong>Negrito</strong> em termos técnicos.</p></div>

Fórmula ou cálculo (rácios, margens, IVA, IRT, encargos):
<div class="fbox"><div class="f">Fórmula</div><div class="fd">O que cada termo significa</div></div>

Obrigação legal ou norma:
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Nome da obrigação</div><blockquote>O que exige.</blockquote></div>

Aviso (erro caro, prazo que não se falha):
<div class="wb"><i class="fas fa-triangle-exclamation" style="color:#f59e0b;margin-right:8px;"></i>Texto.</div>

Nota de apoio:
<div class="ib">Informação complementar.</div>

Conclusão a reter:
<div class="hi">Frase-chave.</div>

Tabela (prazos, taxas, comparações, modelos de documento):
<div class="tw"><table class="dt">
<tr><th>Coluna</th><th>Coluna</th></tr>
<tr><td>Valor</td><td>Valor</td></tr>
</table></div>

Sequência de passos (o procedimento no escritório):
<div class="tl">
  <div class="tli"><div class="tld">1</div><div class="tlc"><h4>Passo</h4><p>O que fazer.</p></div></div>
  <div class="tli"><div class="tld">2</div><div class="tlc"><h4>Passo</h4><p>O que fazer.</p></div></div>
</div>

Diagrama (fluxo de processo, organigrama, circuito de documento):
<div class="dg"><div class="dgt">Legenda</div>
<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">...</svg></div>

Listas: <ul><li>…</li></ul> ou <ol><li>…</li></ol>

Quiz no fim (exactamente um):
<div class="quiz"><h3><i class="fas fa-circle-question"></i> Verificação de Aprendizagem</h3>
<div class="qq">Pergunta situacional, nunca de sim/não.</div>
<div class="qo" onclick="cq(this,false)">a) errada</div>
<div class="qo" onclick="cq(this,true)">b) CERTA</div>
<div class="qo" onclick="cq(this,false)">c) errada</div>
<div class="qo" onclick="cq(this,false)">d) errada</div>
</div>

TODOS os blocos são <div>, nunca <span>. Um <span class="hi"> parte o layout.

CORES NOS SVG (só estas):
#0B1F3A navy · #FF6B00 laranja · #00A3A1 teal · #64748B cinza · #16a34a verde · #dc2626 vermelho
SVG legível: viewBox definido, texto font-size >= 12.

ÍCONES: Font Awesome 6 (fas fa-*). Para esta área: fa-file-invoice, fa-calculator, fa-users, fa-building, fa-clipboard-check, fa-chart-line, fa-handshake, fa-folder-open, fa-receipt, fa-scale-balanced.

═══════════════════════════════════════
ESTRUTURA DE CADA AULA — 8 SECÇÕES
═══════════════════════════════════════

Cada uma no seu <div class="cb">, nesta ordem:

1. OBJECTIVOS DE APRENDIZAGEM — 4 objectivos com verbos de acção próprios da função: elaborar, processar, conciliar, declarar, arquivar, controlar, negociar, auditar. Em <ul>.

2. CENÁRIO REAL NUM ESCRITÓRIO ANGOLANO — 200 a 350 palavras, caso concreto numa empresa angolana identificável pelo tipo e local (PME de 12 pessoas em Viana, clínica no Kilamba, empresa de construção em Benguela). Com números reais: valores em kwanzas, prazos, número de documentos, número de trabalhadores. Termina ligando ao valor prático para o técnico.

3. DESENVOLVIMENTO TÉCNICO — MÍNIMO 1.500 PALAVRAS, em 4 a 6 subsecções numeradas (3.1, 3.2…), cada uma no seu <div class="cb"> com <h2>. Cada subsecção precisa de:
   - Definições precisas do conceito e do documento envolvido
   - O procedimento real, passo a passo, como se faz mesmo
   - Pelo menos um exemplo trabalhado com valores em kwanzas, com o resultado em <div class="hi">
   - Pelo menos uma referência concreta a Angola (entidade, prazo, obrigação, prática de mercado)
   - Modelos de texto ou estrutura de documento quando fizer sentido (email, ofício, mapa, folha de cálculo)

4. ELEMENTO VISUAL — pelo menos um <div class="dg"> com SVG (fluxo do documento, organigrama, circuito de aprovação) ou uma <table class="dt"> quando for tabular.

5. PROCEDIMENTO PRÁTICO — <div class="tl"> com no mínimo 4 passos: o que o técnico faz, por que ordem, com que documento, para quem envia.

6. ERRO COMUM E CONSEQUÊNCIA REAL — caso realista numa empresa angolana, com ano, valores em kwanzas e consequência concreta (multa da AGT, juro de mora, pagamento em duplicado, perda de cliente, processo laboral). Termina com <div class="hi"> a começar por "Como evitar:".

7. OBRIGAÇÕES E REFERÊNCIAS APLICÁVEIS — 3 a 5 blocos <div class="lawbox">.

8. QUIZ — um <div class="quiz">.

═══════════════════════════════════════
REGRAS QUE JÁ CUSTARAM ERROS NESTE PROJECTO
═══════════════════════════════════════

1. VERIFICA A ARITMÉTICA DO QUIZ ANTES DE MARCAR A CERTA.
Calcula o resultado real passo a passo. Confirma que a opção com cq(this,true) contém exactamente esse resultado, e que nenhuma opção errada está mais próxima da verdade do que a certa. Em material anterior, a resposta marcada estava 5,7× acima do valor correcto e a opção verdadeira estava marcada como errada.

2. MOSTRA O CÁLCULO.
Em cada exemplo com valores, escreve a substituição na fórmula, não só o resultado. Um cálculo de IRT ou de encargos tem de se poder conferir linha a linha.

3. NÃO INVENTES REFERÊNCIAS LEGAIS NEM VALORES OFICIAIS. É a regra mais importante.
Só cita um número de lei, decreto, artigo, taxa, escalão ou prazo legal se tiveres a certeza de que existe e é esse.
   ESCREVE: "a declaração é entregue no prazo legal, confirmável no portal da AGT"
   NÃO ESCREVAS: "até ao dia 10 do mês seguinte, nos termos do artigo 46.º" se não tiveres a certeza
Uma referência inventada mas plausível é PIOR que uma genérica: o aluno age com base nela e ninguém desconfia. O mesmo vale para escalões de IRT, taxas de IVA, valores de contribuição para o INSS e prazos de entrega.
No fim de cada aula que toque nisto, escreve:
   >>> A CONFIRMAR: [lista do que tem de ser verificado na fonte oficial]

═══════════════════════════════════════
TAREFA
═══════════════════════════════════════

>>> MÓDULO: [NÚMERO E TÍTULO — copiar de cursos-catalogo.js]
>>> ÂMBITO: [o que o módulo tem de cobrir, 2 a 4 linhas]

PASSO 1 — Entrega apenas a lista dos títulos das aulas deste módulo, numeradas X.1 em diante, cobrindo todo o âmbito. Entre 11 e 22 aulas, conforme o âmbito justificar. Pára e espera pelo meu "ok".

PASSO 2 — Depois do "ok", desenvolve na ordem.

REGRA DE CONTINUAÇÃO:
O módulo não cabe numa resposta. NÃO encolhas as aulas para caber — é o erro mais grave aqui.
- Uma aula completa por resposta é o ideal.
- PÁRA no fim de uma aula COMPLETA, nunca a meio.
- Termina com esta linha exacta, sem mais nada:
  >>> PAREI NA AULA X.Y — escreva "continue" para a seguinte
- Ao receber "continue", retoma na seguinte sem repetir nada.

Na última:
  >>> MÓDULO X COMPLETO — N de N aulas entregues

CHECKLIST ANTES DE CADA RESPOSTA (mentalmente):
[ ] As 8 secções estão todas?
[ ] O Desenvolvimento passa das 1.500 palavras?
[ ] A opção marcada no quiz bate com o cálculo?
[ ] Todos os blocos são <div>?
[ ] Não inventei nenhuma taxa, prazo, escalão ou número de diploma?
[ ] Zero markdown, zero ```?
```

---

## Nota sobre o que já existe

O curso administrativo **já tem 396 aulas geradas** (18 módulos × 22), que estão a ser extraídas e inseridas no site. Este prompt serve para:

- Módulos que se descubram em falta ou incompletos
- Aulas que venham truncadas da geração anterior
- Reforçar módulos onde o conteúdo existente seja fraco

Antes de gerares um módulo inteiro, pergunta-me se ele já existe — pode estar só por inserir, e é trabalho poupado.

## Sobre as referências legais

O prompt manda não inventar e listar o que ficou por confirmar. Isso **reduz** o problema, não o elimina — é o mesmo tipo de modelo que já inventou códigos de classificação noutro curso deste projecto.

Num curso administrativo isto é sério: escalões de IRT, taxas de IVA, contribuições para o INSS e prazos de entrega são a matéria em si. Antes de vender, essas referências têm de ser conferidas por uma pessoa contra o portal da AGT e o Diário da República. O marcador `>>> A CONFIRMAR:` existe para essa lista ser curta e explícita.
