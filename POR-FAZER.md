# Por fazer — Oaken Cursos

Uma sessão, um problema, até ao fim. Quando fechar, marca-se ✅ e passa-se ao seguinte.

---

## Em curso agora

- [ ] **Escrever os módulos 1 e 2 do Administrativo** — 44 aulas
  **10 de 22 do módulo 1 já escritas** (commits `c2042ed` e `86b0ba7`, em `administrativo/_import/mod01.js`). Retomar a partir da aula 1.11. O agente caiu duas vezes por limite de sessão.
  Perderam-se numa conversa não guardada. O curso anuncia 18 módulos e só 16 têm aulas.
  *Atenção:* o curso não tem as classes `.quiz`, `.wb`, `.ib` nem a função `cq()` — são do offshore. Usar só as classes que existem, ou acrescentá-las ao CSS/JS do curso.

- [ ] **Corrigir o mesmo bug do exame de módulo em `electrical/index.html`**
  `gerarExame()` usa um regex que exige `.qo` colado a `.qq` sem espaço — mas o HTML real tem quebra de linha entre os dois, então o exame nunca gera perguntas. Já corrigido em `contabilidade/index.html` (mudança: `<\/div>` → `<\/div>\s*`). Confirmar primeiro se `oil` e `administrativo` usam bancos próprios (`exame-questions.js`) e não têm este problema.

---

## Fila, por ordem de risco

### 1. Auditar as 1.199 questões dos bancos
655 do offshore + 544 do administrativo. Nenhuma verificada.
Método já definido: aritmética → factos confirmáveis em fonte → coerência interna. Três categorias no fim: corrigido (com prova), confirmado, e por decidir com o dono.
*Ficheiros:* `oil/exame-questions.js`, `administrativo/exame-questions.js`

### 2. Ligar o exame do Administrativo
O banco está completo (544 questões, módulos 3–18) mas o exame continua desactivado no curso. Os módulos 1 e 2 ficam sem exame enquanto não tiverem aulas.
Decisão do dono: ligar já, pente fino depois. O curso ainda não é público.

### 3. Rever as referências legais com o dono
Lista do que precisa de confirmação humana contra fonte oficial:
- **INAPI ou INPI?** A fonte do bónus usa as duas siglas em sítios diferentes.
- **Códigos CPA-Rev.1 do curso de Edificações** — o modelo que os gerou escreveu no próprio raciocínio que não tinha a fonte e ponderou inventá-los. Não republicar sem confirmar.
- **Diplomas legais do curso de Edificações, módulo 1** (Lei 3/17, Lei 10/15, Decreto 65/16, Decreto 40/04, Decreto 45/15, Lei 10/19, Lei 5/98, Decreto 33/04, Decreto 37/10) — citados nas aulas 4 e 10, com aviso visível de "referência a confirmar" no próprio site. Não remover o aviso sem verificar cada um no Diário da República.
- Custos e prazos de formalização do bónus (INAPI ~15.000 Kz, conta mínima 50.000 Kz, prazo 2–4 semanas)
- Leis citadas no Administrativo: 41/20, 22/11, 23/21, Decreto Executivo 166/11

*Já resolvido:* Lei Geral do Trabalho — era 2/00, passou por 7/15, ambas revogadas. Em vigor: **Lei n.º 12/23** (27/12/2023). Férias: **22 dias úteis**, não 30.

### 4. Gerar as aulas dos cursos novos
Três cursos ainda com currículo desenhado e zero aulas: HST, Despacho Aduaneiro e Logística, Qualidade ISO 9001.
Contabilidade (16 módulos, 34 aulas) e Edificações (15 módulos, 33 aulas) já têm os 3 primeiros módulos publicados, com o resto do currículo visível como "Em preparação" — é o modelo a repetir nos três que faltam.
*Prompt pronto:* `PROMPT-AULAS-CURSOS-NOVOS.md`. Fluxo: gerar módulo a módulo (11 aulas cada) → converter para o formato HTML do site (`.cb`, `.hi`, `.wb`, `.lawbox`, `.tw/.dt`, `.quiz`+`cq()`) → eu valido e insiro.

### 5. Construir as páginas dos cursos novos
Feito para Contabilidade e Edificações (site completo, login, dashboard, exame por módulo, roteiro dos módulos futuros marcado como "Em preparação" — nunca "pronto"). Falta o mesmo para HST, Despacho Aduaneiro e Qualidade.

### 6. Ligar o bónus à venda
O conteúdo está escrito (10 capítulos, 1.626–2.376 palavras cada, plano de 90 dias) e a página de vendas existe. Falta decidir preço e como se entrega a quem compra.

---

## Pequenas, para encaixar

- [ ] `IMG.epi` no curso de eléctrica devolve 200 mas a imagem é um rectângulo preto, não equipamento de protecção
- [ ] Reactivar o desbloqueio sequencial dos módulos — está desligado por decisão do dono, até à altura de vender. É trocar uma linha no `loadProgress()` de cada curso.
- [ ] Versionar o `style.css` nas páginas que ainda o carregam sem `?v=` — quem já visitou fica com a versão em cache

---

## Feito

- ✅ **Curso Contabilidade e Fiscalidade Angolana** — publicado com 3 dos 16 módulos (34 aulas), login, dashboard, exame por módulo gerado a partir dos quizzes de aula. Restantes 13 módulos (143 aulas) no roteiro, marcados "Em preparação".
- ✅ **Curso Técnico em Edificações** — publicado com 3 dos 18 módulos (33 aulas: Sector e Enquadramento Legal, Matemática e Física Aplicadas, Desenho Técnico). Restantes 15 módulos (165 aulas) no roteiro, marcados "Em preparação". Diplomas legais não verificados (aulas 4 e 10 do M1) levam aviso visível no site.
- ✅ **Site Oaken Studio em 4 idiomas** (PT/EN/FR/ES), publicado em `oaken-pitches/studio/` — motor de i18n com detecção do idioma do navegador, persistência em localStorage, formulário que monta a mensagem de WhatsApp no idioma escolhido. O ficheiro original vinha truncado a meio (sem fecho de `</script>`, sem função do formulário, só PT parcial) — reconstruído.
- ✅ **Auditados os 168 quizzes da eléctrica** (commits `7fa05eb` e `2ad22be`) — 5 corrigidos na auditoria, mais 3 resolvidos por decisão do dono, 61 confirmados por cálculo refeito ou fonte citada, 102 dependentes de juízo de campo. Os erros tinham todos o mesmo padrão: a resposta certa estava na lista, marcada como errada. O mais grave trocava o Decreto 40/04 (licencia instalações) pelo 39/04 (Estatuto do Técnico). As 3 decisões: DPS passou a montante do DR (IEC 60364-5-53); correntes do desequilíbrio trocadas para 46/38/36 A, que dão mesmo 15%; e retirado o conselho de "dispensar o DR", que aparecia no quiz e em mais dois sítios no texto das aulas.
- ✅ Preço do curso Administrativo — 450.000 Kz por 350.000 Kz
- ✅ Portal com catálogo de 8 cursos, capas e 143 títulos de módulo
- ✅ Curso offshore em página única, 17 módulos, 527 aulas, laboratório integrado na Área do Aluno
- ✅ Curso de eléctrica reparado — nunca tinha funcionado (erro de TDZ: `const A` declarado depois do primeiro uso)
- ✅ Curso Administrativo construído — 16 módulos, 352 aulas, Área do Aluno igual às outras
- ✅ Banco de questões do Administrativo — 544 questões, módulos 3 a 18
- ✅ Conteúdo do bónus "Do Curso ao Negócio" — 10 capítulos + plano de 90 dias
- ✅ Carga horária passa a sair do conteúdo real (1h por aula) em vez de número escrito à mão
- ✅ Lei 2/00 → 12/23 e IRS → IRT corrigidos em todo o material
- ✅ Documento proprietário do oaken-ia removido do repositório público e do histórico
