# Prompt para gerar módulos — Oaken Electrical / Oaken Oil

Copia o bloco abaixo inteiro. Antes de colar, substitui as **duas linhas marcadas com `>>>`** perto do fim (módulo e âmbito).

## Como correr — o módulo inteiro numa conversa

1. Cola o prompt → ele devolve **só a lista dos 11 títulos**
2. Responde `ok` → começa a escrever as aulas
3. Quando parar com `>>> PAREI NA AULA X.Y`, responde `continue`
4. Repete até aparecer `>>> MÓDULO X COMPLETO — 11 de 11 aulas entregues`
5. Copia **tudo** (todas as respostas seguidas) para `_import/modXX.txt`
6. Diz-me o número do módulo — eu junto, valido e insiro no site

**Porque é em pedaços:** 11 aulas × 1.800 palavras ≈ 19.800 palavras. Não cabe numa resposta de nenhum modelo. Se pedires tudo de uma vez sem protocolo, ele não avisa — encolhe as aulas para caber. O `continue` é o que garante que cada aula sai com a profundidade real.

**O que eu verifico quando me mandares o ficheiro:** contagem de aulas (têm de ser 11), as 8 secções em cada uma, classes CSS válidas contra o site, aritmética dos cálculos e das opções do quiz, e `<span class="hi">` fora do sítio.

---

```
Você é instrutor sénior de electricidade e instalações eléctricas, com mais de 20 anos de campo em Angola (residencial em Luanda e Benguela, industrial com quadros de média tensão), e desenhista instrucional de formação técnico-profissionalizante.

CONTEXTO
Estou a reconstruir o material do curso "Oaken Electrical — Técnico de Instalações Eléctricas (Edição Angola)". Cada aula tem de ser MATERIAL DE ESTUDO REAL: o aluno aprende só com este texto, sem precisar de outra fonte, e sai capaz de dimensionar, instalar e inspeccionar em conformidade com as normas angolanas.

Todo o curso é 220V (fase-neutro) / 380V (fase-fase), 50 Hz. Referências reais e obrigatórias: RTIEBT, IEC 60364, Lei Geral da Electricidade (Lei n.º 27/15), Decreto n.º 40/04, Decreto n.º 39-04, ENDE, RNT-EP.

═══════════════════════════════════════
FORMATO DE SAÍDA — LEIA COM ATENÇÃO
═══════════════════════════════════════

Entregue HTML puro, pronto a colar, usando EXACTAMENTE as classes CSS abaixo. Não invente classes. Não use markdown (# ## ```). Não use <html>, <head>, <body>, <style> nem <script>.

Cada aula é um bloco assim:

<!-- ===== AULA X: Título da Aula ===== -->
...blocos de conteúdo...
<!-- ===== FIM AULA X ===== -->

BLOCOS DISPONÍVEIS (use só estes):

1. Card de conteúdo — envolve cada secção temática:
<div class="cb">
  <h2><i class="fas fa-bolt"></i> Título da Secção</h2>
  <p>Parágrafo de texto corrido. Use <strong>negrito</strong> em termos técnicos.</p>
</div>

2. Fórmula:
<div class="fbox"><div class="f">U = R × I</div><div class="fd">Tensão (V) = Resistência (Ω) × Corrente (A)</div></div>

3. Norma / lei (citação regulatória):
<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> RTIEBT — Secção 803.2</div><blockquote>Texto do que a norma exige, em uma ou duas frases.</blockquote></div>

4. Aviso de perigo:
<div class="wb"><i class="fas fa-triangle-exclamation" style="color:#f59e0b;margin-right:8px;"></i>Texto do aviso de segurança.</div>

5. Caixa de informação:
<div class="ib">Nota complementar ou dado de contexto.</div>

6. Destaque (conclusão importante):
<div class="hi">Frase-chave que o aluno tem de reter.</div>

7. Tabela de dados:
<div class="tw"><table class="dt">
<tr><th>Secção (mm²)</th><th>Corrente máx. (A)</th><th>Aplicação</th></tr>
<tr><td>1,5</td><td>16</td><td>Iluminação</td></tr>
</table></div>

8. Sequência de passos (procedimento prático):
<div class="tl">
  <div class="tli"><div class="tld">1</div><div class="tlc"><h4>Título do passo</h4><p>Descrição do que fazer.</p></div></div>
  <div class="tli"><div class="tld">2</div><div class="tlc"><h4>Título do passo</h4><p>Descrição do que fazer.</p></div></div>
</div>

9. Diagrama SVG (obrigatório pelo menos um por aula):
<div class="dg"><div class="dgt">Legenda do diagrama</div>
<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>

10. Lista:
<ul><li>Item</li><li>Item</li></ul>  ou  <ol><li>Passo</li></ol>

11. Quiz no fim de cada aula (exactamente um):
<div class="quiz"><h3><i class="fas fa-circle-question"></i> Verificação de Aprendizagem</h3>
<div class="qq">Pergunta situacional ou numérica, não de sim/não.</div>
<div class="qo" onclick="cq(this,false)">a) opção errada</div>
<div class="qo" onclick="cq(this,true)">b) opção CERTA</div>
<div class="qo" onclick="cq(this,false)">c) opção errada</div>
<div class="qo" onclick="cq(this,false)">d) opção errada</div>
</div>

PALETA OBRIGATÓRIA NOS SVG (não use outras cores):
#0B1F3A (navy, estruturas e traços)
#FF6B00 (laranja, elemento em destaque)
#00A3A1 (teal, elemento secundário)
#64748B (cinza, texto de apoio)
#16a34a (verde, conforme/correcto)
#dc2626 (vermelho, perigo/incorrecto)

Os SVG devem ser funcionais e legíveis: viewBox definido, texto com font-size >= 12, sem depender de CSS externo.

ÍCONES: use Font Awesome 6 (classe fas fa-*). Exemplos válidos: fa-bolt, fa-plug, fa-gauge, fa-shield-halved, fa-screwdriver-wrench, fa-fire, fa-gavel, fa-triangle-exclamation, fa-lightbulb, fa-industry.

═══════════════════════════════════════
ESTRUTURA OBRIGATÓRIA DE CADA AULA
═══════════════════════════════════════

Dentro do bloco da aula, siga esta ordem, cada secção num <div class="cb"> próprio:

1. OBJECTIVOS DE APRENDIZAGEM — 4 objectivos com verbos de acção (dimensionar, calcular, identificar, comparar, inspeccionar), específicos ao tema. Use <ul>.

2. CENÁRIO REAL EM ANGOLA — 200 a 350 palavras, caso concreto numa instalação angolana identificável (residência em Talatona, loja no Kilamba, fábrica em Viana, prédio em Benguela), com números reais: potências em kW, secções em mm², correntes em A, custos em Kwanzas, datas. Termine ligando o cenário à importância prática para o técnico.

3. DESENVOLVIMENTO TÉCNICO — MÍNIMO 1.800 PALAVRAS, em 4 a 7 subsecções, cada uma com o seu <div class="cb"> e <h2>. Cada subsecção precisa de:
   - Definições técnicas precisas (grandezas, fórmulas em <div class="fbox">, unidades SI)
   - Números reais (correntes, quedas de tensão, secções normalizadas, factores de correcção, IP/IK, distâncias)
   - Pelo menos um cálculo completo passo a passo, com o resultado em <div class="hi">
   - Pelo menos uma referência concreta a Angola (norma, prática da ENDE, clima tropical e efeito nos materiais, tarifário)
   - Mecanismo de "como funciona na prática", não definição de dicionário

4. ELEMENTO VISUAL — pelo menos um <div class="dg"> com SVG, ou uma <table class="dt"> quando o conteúdo for tabular.

5. PROCEDIMENTO PRÁTICO — um <div class="tl"> com no mínimo 4 passos, incluindo um exemplo numérico completo.

6. ERRO COMUM E CONSEQUÊNCIA REAL — caso realista em Angola com ano, local, valores em Kwanzas e consequência concreta (incêndio, choque, avaria, multa). Termine com um <div class="hi"> a começar por "Como evitar:".

7. NORMAS APLICÁVEIS — 3 a 5 blocos <div class="lawbox">, cada um com a norma e uma frase do que exige.

8. QUIZ — um <div class="quiz"> conforme o formato acima.

═══════════════════════════════════════
REGRAS RÍGIDAS
═══════════════════════════════════════

- NÃO resuma, NÃO encurte, NÃO omita nenhuma das 8 secções em nenhuma aula.
- O Desenvolvimento Técnico é a secção mais longa: mínimo 1.800 palavras. Não a encolha para caber mais aulas.
- NÃO repita o título da aula como se fosse conteúdo.
- NÃO escreva generalidades que serviriam para qualquer país — cada aula tem de ser angolana e concreta.
- NÃO use markdown. NÃO use ``` em lado nenhum. Só HTML com as classes indicadas.
- Se não couber tudo numa resposta, PARE no fim de uma aula completa e escreva na última linha: "PAREI NA AULA X — peça continuação". Nunca entregue uma aula pela metade.

═══════════════════════════════════════
SOBRE PRECISÃO TÉCNICA — IMPORTANTE
═══════════════════════════════════════

Só cite um artigo, secção ou número de norma se tiver a certeza de que existe e diz aquilo. Se souber que a norma trata do tema mas não tiver a certeza do número exacto da secção, escreva o nome da norma sem inventar o número (ex.: "RTIEBT — regras de protecção contra contactos indirectos" em vez de "RTIEBT artigo 413.1.2"). Uma citação inventada é pior do que uma citação genérica, porque um técnico pode agir com base nela.

O mesmo vale para valores: prefira faixas realistas e verificáveis a números falsamente precisos.

═══════════════════════════════════════
REGRAS DE CÁLCULO — ERROS JÁ DETECTADOS
═══════════════════════════════════════

Estes erros apareceram em material anterior e foram corrigidos. Não os repita.

1. QUEDA DE TENSÃO CONTA IDA E VOLTA.
A corrente percorre o condutor de ida e o de retorno. O comprimento a usar no cálculo é o DOBRO da distância física do percurso:

   Monofásico:  ΔU = 2 × ρ × L × I / S
   Trifásico:   ΔU = √3 × ρ × L × I / S

Onde L é a distância do quadro até à carga (não o comprimento total de cabo).
Usar só L num circuito monofásico subestima a queda para metade — é assim que se acaba com cabo subdimensionado numa instalação real. Sempre que calcular queda de tensão, escreva explicitamente o factor (2× ou √3×) na fórmula.

2. VERIFIQUE A ARITMÉTICA DAS OPÇÕES DO QUIZ ANTES DE MARCAR A CERTA.
Antes de escrever as quatro alíneas, calcule o resultado real passo a passo. Depois:
   - Confirme que a opção que vai marcar com cq(this,true) contém EXACTAMENTE esse resultado.
   - Confirme que nenhuma das opções erradas está mais próxima do valor real do que a certa.
Num material anterior, a resposta marcada como correcta estava 5,7× acima do valor real, e a opção mais próxima da verdade estava marcada como errada. Um aluno que estude por aí aprende a calcular mal.

3. MOSTRE O CÁLCULO QUE FEZ.
Em cada exemplo numérico, escreva a substituição dos valores na fórmula, não só o resultado. Isso permite conferência e apanha erros de conta.

═══════════════════════════════════════
CUIDADOS DE FORMATAÇÃO JÁ DETECTADOS
═══════════════════════════════════════

- .hi é SEMPRE <div class="hi">, NUNCA <span class="hi">. Tem padding e border-left; num span o layout parte.
- O mesmo vale para .cb, .ib, .wb, .fbox, .lawbox, .dg, .tl, .quiz — todos são <div>, nunca <span>.
- Não ponha <rect> de fundo a cobrir todo o viewBox do SVG. O contentor .dg já tem fundo próprio.
- Não use markdown em lado nenhum: sem #, sem ##, sem ``` a delimitar o HTML. Entregue o HTML directamente.

═══════════════════════════════════════
TAREFA E PROTOCOLO DE ENTREGA
═══════════════════════════════════════

>>> MÓDULO: [NÚMERO E TÍTULO DO MÓDULO]
>>> ÂMBITO: [COLE AQUI O ÂMBITO DO MÓDULO]

Quero o MÓDULO COMPLETO: as 11 aulas, todas com as 8 secções e com o Desenvolvimento Técnico acima de 1.800 palavras cada.

PASSO 1 — Antes de escrever qualquer aula, entregue apenas a lista dos 11 títulos, numerados 1.1 a 1.11 (ajuste o número do módulo), cobrindo todo o âmbito acima. Pare aí e aguarde o meu "ok".

PASSO 2 — Depois do meu "ok", desenvolva as aulas na ordem, sem parar por sua iniciativa.

REGRA DE CONTINUAÇÃO (importante):
O módulo completo não cabe numa resposta. NÃO tente encolher as aulas para caber — é o erro mais grave que pode cometer aqui. Em vez disso:
- Escreva as aulas com profundidade total até estar perto do limite da resposta.
- UMA AULA COMPLETA POR RESPOSTA É O IDEAL. Prefiro receber 11 respostas com uma aula profunda cada, do que 3 respostas com aulas encolhidas. Nunca sacrifique profundidade para entregar mais aulas de uma vez.
- PARE no fim de uma aula COMPLETA (nunca a meio).
- Termine a resposta com exactamente esta linha, sem mais nada depois:
  >>> PAREI NA AULA X.Y — escreva "continue" para as seguintes
- Quando eu escrever "continue", retome na aula seguinte, sem repetir nada do que já entregou e sem resumir o que falta.

Repita até entregar as 11 aulas. Na última, termine com:
  >>> MÓDULO X COMPLETO — 11 de 11 aulas entregues

CHECKLIST ANTES DE CADA RESPOSTA (faça mentalmente, não escreva):
[ ] Cada aula tem as 8 secções, nenhuma omitida?
[ ] O Desenvolvimento Técnico tem mais de 1.800 palavras?
[ ] Todas as quedas de tensão usam 2× (monofásico) ou √3× (trifásico)?
[ ] A opção do quiz marcada com cq(this,true) bate com o cálculo real?
[ ] Todos os blocos são <div>, nenhum <span class="hi">?
[ ] Zero markdown, zero ```?
```

---

## Como usar

1. Copia o bloco acima
2. Substitui as três linhas `>>>` no fim
3. Cola no DeepSeek
4. Pede em lotes: aulas 1–4, depois 5–8, depois 9–11
5. Guarda tudo junto em `oaken-cursos/electrical/_import/modXX.txt`
6. Diz-me o número do módulo — eu verifico (conto as aulas, confirmo as 8 secções, valido o HTML) e insiro no site

## Âmbitos dos 18 módulos

Estão prontos no ficheiro `prompt-deepseek-electrical-modulos-1-18.md`, na secção "ÂMBITO DESTE MÓDULO" de cada bloco. Copia de lá para a linha `>>> ÂMBITO:`.
