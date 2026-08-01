# Prompt para gerar aulas — cursos novos Oaken

Serve para os 6 cursos que ainda não têm conteúdo. Copia o bloco, substitui as **quatro linhas `>>>`** no fim, e cola no DeepSeek.

## Como correr

1. Cola o prompt → ele devolve **só a lista das 11 aulas** do módulo
2. Responde `ok` → começa a escrever
3. Quando parar com `>>> PAREI NA AULA X.Y`, responde `continue`
4. Repete até `>>> MÓDULO X COMPLETO`
5. Cola tudo seguido em `oaken-cursos/<curso>/_import/modNN.txt`
6. Diz-me o curso e o módulo — eu valido e insiro

**Uma aula completa por resposta é o normal.** Não peças as 11 de uma vez: o modelo não recusa, encolhe as aulas para caber. Foi esse o erro que nos custou tempo antes.

---

```
Você é instrutor sénior da área abaixo, com mais de 20 anos de experiência de campo em Angola e experiência em desenho instrucional para formação técnico-profissionalizante.

CONTEXTO
Estou a construir o material de estudo de um curso técnico-profissionalizante angolano, 100% online. Cada aula tem de ser MATERIAL DE ESTUDO REAL e denso: o aluno aprende só com este texto, sem precisar de outra fonte, e sai capaz de exercer a função.

O curso é para o mercado angolano. Usa sempre entidades, legislação, práticas, valores em kwanzas e locais reais de Angola (Luanda, Talatona, Kilamba, Viana, Benguela, Lobito, Huambo, Cabinda, Soyo, Namibe).

O QUE NÃO QUERO
- Parágrafos curtos e genéricos, ou tópicos soltos sem explicação
- Conteúdo que serviria para qualquer país — cada aula tem de ser angolana e concreta
- Repetir o título da aula como se fosse conteúdo
- Aulas que pareçam artigo de blog

═══════════════════════════════════════
FORMATO DE SAÍDA
═══════════════════════════════════════

HTML puro, pronto a colar, com EXACTAMENTE estas classes. Não inventes classes. Não uses markdown (#, ##, ```). Não uses <html>, <head>, <body>, <style> nem <script>.

Cada aula vem assim:

<!-- ===== AULA X.Y: Título da Aula ===== -->
...blocos...
<!-- ===== FIM AULA X.Y ===== -->

BLOCOS DISPONÍVEIS:

Secção de conteúdo (envolve cada tema):
<div class="cb"><h2><i class="fas fa-ICONE"></i> Título da Secção</h2>
<p>Texto corrido. <strong>Negrito</strong> em termos técnicos.</p></div>

Fórmula ou cálculo:
<div class="fbox"><div class="f">Fórmula</div><div class="fd">O que cada símbolo significa e a unidade</div></div>

Norma, lei ou regulamento:
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> Nome da norma</div><blockquote>O que exige, em uma ou duas frases.</blockquote></div>

Aviso de risco ou erro grave:
<div class="wb"><i class="fas fa-triangle-exclamation" style="color:#f59e0b;margin-right:8px;"></i>Texto do aviso.</div>

Nota complementar:
<div class="ib">Informação de apoio.</div>

Conclusão que o aluno tem de reter:
<div class="hi">Frase-chave.</div>

Tabela:
<div class="tw"><table class="dt">
<tr><th>Coluna</th><th>Coluna</th></tr>
<tr><td>Valor</td><td>Valor</td></tr>
</table></div>

Sequência de passos:
<div class="tl">
  <div class="tli"><div class="tld">1</div><div class="tlc"><h4>Título do passo</h4><p>O que fazer.</p></div></div>
  <div class="tli"><div class="tld">2</div><div class="tlc"><h4>Título do passo</h4><p>O que fazer.</p></div></div>
</div>

Diagrama (pelo menos um por aula):
<div class="dg"><div class="dgt">Legenda</div>
<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">...</svg></div>

Listas: <ul><li>…</li></ul> ou <ol><li>…</li></ol>

Quiz no fim de cada aula (exactamente um):
<div class="quiz"><h3><i class="fas fa-circle-question"></i> Verificação de Aprendizagem</h3>
<div class="qq">Pergunta situacional ou numérica, nunca de sim/não.</div>
<div class="qo" onclick="cq(this,false)">a) errada</div>
<div class="qo" onclick="cq(this,true)">b) CERTA</div>
<div class="qo" onclick="cq(this,false)">c) errada</div>
<div class="qo" onclick="cq(this,false)">d) errada</div>
</div>

REGRA DE BLOCOS: todos são <div>, nunca <span>. Um <span class="hi"> parte o layout.

CORES NOS SVG (só estas):
#0B1F3A navy (estrutura)  ·  #FF6B00 laranja (destaque)  ·  #00A3A1 teal (secundário)
#64748B cinza (apoio)  ·  #16a34a verde (correcto)  ·  #dc2626 vermelho (perigo)
SVG legível: viewBox definido, texto com font-size >= 12, sem depender de CSS externo.

ÍCONES: Font Awesome 6 (fas fa-*).

═══════════════════════════════════════
ESTRUTURA DE CADA AULA — 8 SECÇÕES
═══════════════════════════════════════

Cada uma no seu próprio <div class="cb">, nesta ordem:

1. OBJECTIVOS DE APRENDIZAGEM — 4 objectivos com verbos de acção específicos à área (calcular, classificar, elaborar, auditar, declarar, inspeccionar). Em <ul>.

2. CENÁRIO REAL EM ANGOLA — 200 a 350 palavras, caso concreto numa organização ou local angolano identificável, com números reais (valores em kwanzas, prazos, quantidades, datas). Termina ligando ao valor prático para o técnico.

3. DESENVOLVIMENTO TÉCNICO — MÍNIMO 1.800 PALAVRAS, em 4 a 7 subsecções numeradas (3.1, 3.2…), cada uma no seu <div class="cb"> com <h2>. Cada subsecção precisa de:
   - Definições precisas e completas
   - Números e valores reais da prática angolana
   - Pelo menos um exemplo trabalhado passo a passo, com o resultado em <div class="hi">
   - Pelo menos uma referência concreta a Angola (entidade, prática, valor, prazo)
   - Mecanismo de "como funciona na prática", não definição de dicionário

4. ELEMENTO VISUAL — pelo menos um <div class="dg"> com SVG, ou uma <table class="dt"> se o conteúdo for tabular.

5. PROCEDIMENTO PRÁTICO — <div class="tl"> com no mínimo 4 passos, incluindo um exemplo completo.

6. ERRO COMUM E CONSEQUÊNCIA REAL — caso realista em Angola com ano, local, valores em kwanzas e consequência concreta (multa, prejuízo, acidente, indeferimento). Termina com <div class="hi"> a começar por "Como evitar:".

7. NORMAS E REFERÊNCIAS APLICÁVEIS — 3 a 5 blocos <div class="lawbox">.

8. QUIZ — um <div class="quiz"> no formato acima.

═══════════════════════════════════════
REGRAS QUE JÁ CUSTARAM ERROS
═══════════════════════════════════════

Estes erros apareceram em material anterior. Não os repitas.

1. VERIFICA A ARITMÉTICA DAS OPÇÕES DO QUIZ ANTES DE MARCAR A CERTA.
Calcula o resultado real passo a passo primeiro. Depois confirma que a opção com cq(this,true) contém exactamente esse resultado, e que nenhuma opção errada está mais próxima do valor real do que a certa. Num material anterior a resposta marcada estava 5,7× acima do valor correcto, e a opção mais próxima da verdade estava marcada como errada.

2. MOSTRA O CÁLCULO.
Em cada exemplo numérico, escreve a substituição dos valores na fórmula, não só o resultado.

3. NÃO INVENTES REFERÊNCIAS LEGAIS. Esta é a regra mais importante.
Só cita um número de lei, decreto, artigo, norma ou código de classificação se tiveres a certeza de que existe e diz aquilo.
Se souberes que a matéria é regulada mas não souberes o diploma exacto, escreve o tema sem o número:
   ESCREVE: "a legislação laboral angolana exige…"
   NÃO ESCREVAS: "o Decreto n.º 31/94, artigo 12.º, exige…" se não tiveres a certeza
Uma referência inventada mas plausível é PIOR do que uma genérica, porque um técnico age com base nela e ninguém desconfia. O mesmo vale para códigos de classificação (CPA, CAE, SH/pautas), valores de taxas e prazos legais: se não tiveres a certeza do número, descreve a obrigação sem o inventar.
Quando não tiveres a certeza, escreve no fim da aula uma linha:
   >>> A CONFIRMAR: [lista das referências que devem ser verificadas na fonte oficial]

═══════════════════════════════════════
TAREFA
═══════════════════════════════════════

>>> CURSO: [NOME DO CURSO]
>>> PERFIL DO INSTRUTOR: [ex.: técnico de segurança e higiene no trabalho / despachante oficial / contabilista certificado / auditor da qualidade]
>>> MÓDULO: [NÚMERO E TÍTULO DO MÓDULO]
>>> ÂMBITO: [o que este módulo tem de cobrir, em 2 a 4 linhas]

PASSO 1 — Entrega apenas a lista dos 11 títulos de aula, numerados X.1 a X.11, cobrindo todo o âmbito. Pára e espera pelo meu "ok".

PASSO 2 — Depois do "ok", desenvolve as aulas na ordem.

REGRA DE CONTINUAÇÃO:
O módulo completo não cabe numa resposta. NÃO encolhas as aulas para caber — é o erro mais grave aqui. Em vez disso:
- Escreve cada aula com profundidade total. Uma aula completa por resposta é o ideal.
- PÁRA no fim de uma aula COMPLETA, nunca a meio.
- Termina a resposta com esta linha exacta, sem mais nada depois:
  >>> PAREI NA AULA X.Y — escreva "continue" para a seguinte
- Ao receber "continue", retoma na aula seguinte sem repetir nada.

Na última aula, termina com:
  >>> MÓDULO X COMPLETO — 11 de 11 aulas entregues

CHECKLIST ANTES DE CADA RESPOSTA (mentalmente, não escrevas):
[ ] As 8 secções estão todas?
[ ] O Desenvolvimento Técnico passa das 1.800 palavras?
[ ] A opção do quiz marcada bate com o cálculo real?
[ ] Todos os blocos são <div>, nenhum <span class="hi">?
[ ] Não inventei nenhum número de lei, decreto ou código?
[ ] Zero markdown, zero ```?
```

---

## Os 6 cursos e os âmbitos

Os **18 títulos de módulo de cada curso** estão em `cursos-catalogo.js`, no campo `programa`. Copia o título do módulo para a linha `>>> MÓDULO:` e escreve o âmbito a partir dele.

| Curso | Perfil do instrutor a usar |
|---|---|
| Técnico em Edificações | engenheiro civil / director de obra |
| Técnico Administrativo | gestor administrativo e financeiro |
| Segurança e Higiene no Trabalho | técnico superior de segurança no trabalho |
| Despacho Aduaneiro e Logística | despachante oficial e gestor logístico |
| Contabilidade e Fiscalidade Angolana | contabilista certificado |
| Gestão da Qualidade e Auditoria | auditor de sistemas de gestão da qualidade |

---

## Sobre as referências legais — leitura obrigatória

O prompt manda o modelo **não inventar** números de diploma e listar o que ficou por confirmar. Isso reduz o problema, **não o elimina**: é o mesmo tipo de modelo que já inventou códigos CPA no material de Edificações, e que escreveu no próprio raciocínio que não tinha a fonte e ponderou inventá-los.

Portanto, antes de publicar qualquer curso com peso regulatório (HST, Contabilidade, Aduaneiro, Edificações), **as referências legais têm de ser conferidas por uma pessoa** contra a fonte oficial — Diário da República, portal da AGT, sítio das Alfândegas. Nenhum modelo, incluindo eu, substitui essa verificação.

O sinal `>>> A CONFIRMAR:` no fim de cada aula existe para tornar essa lista curta e explícita, em vez de te obrigar a desconfiar de tudo.
