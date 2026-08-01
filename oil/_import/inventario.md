# Inventário da fonte — curso offshore

Fonte: `C:\Users\Isaac Carvalho\Downloads\Classificação de recursos e reserva.txt`
(3,56 MB · 56 619 linhas · UTF-8)

Levantamento feito por leitura directa por blocos, não por `grep` cego.
Ver `converter.js` (constante `FAIXAS`) para o mapa de linhas usado na conversão.

---

## 1. O que o ficheiro é, na verdade

O nome não descreve o conteúdo. É um **despejo bruto de uma conversa com um LLM**,
onde se geraram, em série, aulas para **dois cursos diferentes**, mais material de
um terceiro que não interessa aqui. Vem tudo colado, sem separadores fiáveis, e
com o raciocínio interno do modelo pelo meio (`"ok"`, `"The user said ok"`,
`"I need to generate Module 5"`).

| Zona (linhas)   | O que é                                                        | Serve? |
|-----------------|----------------------------------------------------------------|--------|
| 1 – 44          | Prompt inicial do Módulo 1 offshore                              | não    |
| 45 – 154        | Aula 1.10 offshore (primeira resposta do modelo)                 | **sim**|
| 155 – 484       | 11 prompts do Módulo 1, um por aula                              | não    |
| 485 – 2 354     | Aulas 1.1–1.9 e 1.11 offshore                                    | **sim**|
| 2 355 – 2 655   | Segunda versão das aulas 1.2 e 1.8                               | **sim**|
| 2 656 – 3 801   | Curso **Técnico em Edificações** (outro curso)                   | não    |
| 3 802 – 4 836   | "Prompts DeepSeek — Módulos 2 a 17"                              | não    |
| 4 837 – 29 465  | Aulas offshore dos Módulos 2 a 18                                | **sim**|
| 29 466 – 30 910 | Prompts do curso de **eléctrica**                                | não    |
| 30 911 – 56 619 | Curso de **eléctrica**: 155 aulas + 121 blocos HTML já formatados | não    |

---

## 2. Correcções a três leituras anteriores deste ficheiro

Estas afirmações circulavam e estão **erradas**:

- ❌ *"399 marcadores `AULA X.Y` cobrindo os módulos 1 a 15, 17 e 18"*
  → Existem **155** marcadores no formato `AULA N.N` e **todos pertencem ao curso
  de eléctrica** (a partir da linha 30 911). O curso offshore usa outro formato:
  `AULA N/11 — Título`, com o módulo implícito na posição do bloco.

- ❌ *"o módulo 16 não aparece"*
  → Aparece. Módulo 16 (Roustabout) está completo nas linhas 25 919 – 27 157,
  com as 11 aulas.

- ❌ *"121 blocos `<div class=`, 105 SVG, 81 tabelas, 12 quizzes `cq(this,true)`
  fazem parte do material"*
  → Fazem, **mas do curso de eléctrica**. Na zona offshore (linhas 485 – 29 465)
  há **zero** HTML, **zero** SVG e **zero** tabelas. As 12 perguntas de escolha
  múltipla também são de eléctrica. O material offshore é texto puro.

- ❌ *"estrutura de aula em 8 secções numeradas"*
  → O offshore usa **7 secções**, com cabeçalho em MAIÚSCULAS e o número à frente
  opcional (`OBJETIVOS…` ou `1. OBJETIVOS…`). Não há secção "ELEMENTO VISUAL" —
  essa é do curso de eléctrica.

---

## 3. Estrutura real de uma aula offshore

```
AULA 3/11 — Compressores Alternativos e Compressores de Parafuso

OBJETIVOS DE APRENDIZAGEM                       → 3-4 verbos de acção
CENÁRIO REAL OFFSHORE ANGOLANO                  → caso concreto, bloco/operadora/números
DESENVOLVIMENTO TÉCNICO COMPLETO                → subsecções 3.1, 3.2, 3.3, …
PROCEDIMENTO PRÁTICO[: descritor]               → "Passo 1 — …", "Passo 2 — …"
ERRO COMUM DE INTERPRETAÇÃO E SUA CONSEQUÊNCIA REAL  → + "Como evitar:"
NORMAS E REFERÊNCIAS REGULATÓRIAS APLICÁVEIS    → uma norma por linha, "Norma: texto"
PERGUNTA DE VERIFICAÇÃO DE RACIOCÍNIO           → enunciado + alíneas a) b) c) d)
```

Contagem de cabeçalhos na zona offshore: 221 de cada secção (a fonte tem 221
aulas, das quais 187 aproveitadas — as restantes são repetições e o Módulo 18).

O cabeçalho de `PROCEDIMENTO` varia de aula para aula
(`PROCEDIMENTO PRÁTICO`, `PROCEDIMENTO PRÁTICO DE ANÁLISE: COMO LER UM PSA
ANGOLANO`, …) e chega aos 108 caracteres. O conversor aceita até 140 e usa o
texto depois dos `:` como subtítulo.

---

## 4. Módulos encontrados

Todos os 17 módulos do curso existem na fonte, **completos com 11 aulas cada**.

| Mód | Título do curso                                        | Linhas na fonte              | Aulas | Formato |
|-----|--------------------------------------------------------|------------------------------|-------|---------|
|  1  | Fundamentos da Indústria do Petróleo e Gás             | 45–154, 485–2 354, 2 355–2 655 | 11  | texto |
|  2  | Plataformas, Embarcações e Estruturas Offshore         | 4 837–5 744                  | 11    | texto |
|  3  | Segurança Offshore (BOSIET / HUET / HSE)               | 5 745–6 869 · repete 9 302–10 423 | 11 | texto |
|  4  | Primeiros Socorros, Resgate e Emergências Médicas      | 6 870–8 168                  | 11    | texto |
|  5  | Sistemas Mecânicos (Motores, Bombas, Compressores)     | 8 189–9 301 · repete 10 424–11 573 | 11 | texto |
|  6  | Sistemas Elétricos, Instrumentação e Controlo          | 11 574–12 133 + 12 179–13 054 | 11   | texto |
|  7  | Operações Submarinas e Completação de Poços            | 13 055–14 433                | 11    | texto |
|  8  | Manutenção, Confiabilidade e Análise de Falhas         | 14 434–15 765                | 11    | texto |
|  9  | Soft Skills, Comunicação e Fatores Humanos             | 15 766–17 117                | 11    | texto |
| 10  | Legislação, Gestão Ambiental e Empregabilidade         | 17 118–18 369 · repete 18 370–19 741 | 11 | texto |
| 11  | Processamento de Hidrocarbonetos                       | 19 742–20 931                | 11    | texto |
| 12  | Automação Industrial e Indústria 4.0 no Offshore       | 20 932–22 322                | 11    | texto |
| 13  | Geologia de Reservatórios e Engenharia de Poços        | 22 323–23 514                | 11    | texto |
| 14  | Logística e Cadeia de Suprimentos Offshore             | 23 515–24 775                | 11    | texto |
| 15  | Energias Renováveis e Transição Energética             | 24 776–25 918                | 11    | texto |
| 16  | Roustabout: Operações de Convés                        | 25 919–27 157                | 11    | texto |
| 17  | Pintura Industrial e Proteção Anticorrosiva            | 27 158–28 352                | 11    | texto |

**Nada falta para chegar a 11 aulas por módulo nos 17 módulos.**

### Blocos ignorados de propósito

- **Índices sem corpo** (8 169–8 188 e 12 134–12 178): listas dos 11 títulos, sem
  conteúdo. O conversor descarta qualquer bloco com menos de 25 linhas ou menos de
  2 000 caracteres úteis.
- **Repetições** dos módulos 3, 5 e 10 e das aulas 1.2 e 1.8: quando a mesma aula
  aparece duas vezes, o conversor fica com a versão de maior densidade. Os módulos
  3 e 5 são praticamente idênticos nas duas passagens (difere a grafia
  "percepções"/"perceções" e o ruído meta); no módulo 10 a segunda passagem é
  ~27 % mais densa e é a que fica.
- **Módulo 18 — "Gestão de Integridade de Ativos"** (28 353–29 465, 11 aulas
  completas): existe na fonte mas **o curso só tem 17 módulos**. Fica de fora.
  É material pronto, caso se queira criar o módulo 18 mais tarde.

---

## 5. Ruído a filtrar

O modelo deixou o seu raciocínio no meio do texto, quase sempre entre o fim de uma
aula e o início da seguinte. Padrões apanhados pelo filtro (`RE_RUIDO` em
`converter.js`):

- linhas soltas `ok`, `okay`, `continue`;
- frases em inglês sobre a própria tarefa (`The user said…`, `I need to generate
  Module 5…`, `Let me craft the full lesson.`), identificadas por serem longas,
  sem acentuação portuguesa e com vocabulário de meta-tarefa;
- fechos de conversa em português (`Com estas duas aulas, o Módulo 1 fica
  completo…`, `Se precisar de mais algum ajuste…`);
- cabeçalhos markdown (`## …`), que na zona offshore só aparecem em prompts.

92 linhas de ruído detectadas na zona offshore; nenhuma sobreviveu à conversão
(`validar.js` confirma 0 ocorrências no HTML final).

---

## 6. Resultado da conversão

```
187 aulas (17 módulos × 11)   ·  0 secções em falta  ·  0 erros de validação
densidade: 4–31 kB de texto-fonte por aula
```

Para comparação, as 340 aulas antigas tinham ~2 kB de HTML cada. As novas têm
entre 4 e 31 kB de texto por aula: menos aulas, muito mais fundo — que era o
objectivo.
