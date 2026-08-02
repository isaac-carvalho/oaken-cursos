# Por fazer — Oaken Cursos

Uma sessão, um problema, até ao fim. Quando fechar, marca-se ✅ e passa-se ao seguinte.

---

## Em curso agora

- [ ] **Auditar os ~152 quizzes do curso de eléctrica**
  Nunca foram verificados por ninguém. É onde o risco é maior: o curso ensina a dimensionar cabos e escolher protecções. Já se apanhou um erro de 5,7× (0,37 Ω marcado quando o cálculo dá 0,065 Ω, com a opção certa na lista marcada como errada).
  *Ficheiro:* `electrical/index.html`

- [ ] **Escrever os módulos 1 e 2 do Administrativo** — 44 aulas
  Perderam-se numa conversa não guardada. O curso anuncia 18 módulos e só 16 têm aulas.
  *Atenção:* o curso não tem as classes `.quiz`, `.wb`, `.ib` nem a função `cq()` — são do offshore. Usar só as classes que existem, ou acrescentá-las ao CSS/JS do curso.

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
- Custos e prazos de formalização do bónus (INAPI ~15.000 Kz, conta mínima 50.000 Kz, prazo 2–4 semanas)
- Leis citadas no Administrativo: 41/20, 22/11, 23/21, Decreto Executivo 166/11

*Já resolvido:* Lei Geral do Trabalho — era 2/00, passou por 7/15, ambas revogadas. Em vigor: **Lei n.º 12/23** (27/12/2023). Férias: **22 dias úteis**, não 30.

### 4. Gerar as aulas dos cursos novos
Cinco cursos com currículo desenhado (18 módulos cada) e zero aulas:
HST · Edificações · Despacho Aduaneiro e Logística · Contabilidade e Fiscalidade · Qualidade ISO 9001
*Prompt pronto:* `PROMPT-AULAS-CURSOS-NOVOS.md`. Fluxo: gerar no DeepSeek → guardar em `<curso>/_import/modNN.txt` → eu valido e insiro.

### 5. Construir as páginas dos cursos novos
Depois de terem aulas. Hoje aparecem no catálogo como "Em breve", sem link — correcto, mas não vende.

### 6. Ligar o bónus à venda
O conteúdo está escrito (10 capítulos, 1.626–2.376 palavras cada, plano de 90 dias) e a página de vendas existe. Falta decidir preço e como se entrega a quem compra.

---

## Pequenas, para encaixar

- [ ] `IMG.epi` no curso de eléctrica devolve 200 mas a imagem é um rectângulo preto, não equipamento de protecção
- [ ] Reactivar o desbloqueio sequencial dos módulos — está desligado por decisão do dono, até à altura de vender. É trocar uma linha no `loadProgress()` de cada curso.
- [ ] Versionar o `style.css` nas páginas que ainda o carregam sem `?v=` — quem já visitou fica com a versão em cache

---

## Feito

- ✅ Portal com catálogo de 8 cursos, capas e 143 títulos de módulo
- ✅ Curso offshore em página única, 17 módulos, 527 aulas, laboratório integrado na Área do Aluno
- ✅ Curso de eléctrica reparado — nunca tinha funcionado (erro de TDZ: `const A` declarado depois do primeiro uso)
- ✅ Curso Administrativo construído — 16 módulos, 352 aulas, Área do Aluno igual às outras
- ✅ Banco de questões do Administrativo — 544 questões, módulos 3 a 18
- ✅ Conteúdo do bónus "Do Curso ao Negócio" — 10 capítulos + plano de 90 dias
- ✅ Carga horária passa a sair do conteúdo real (1h por aula) em vez de número escrito à mão
- ✅ Lei 2/00 → 12/23 e IRS → IRT corrigidos em todo o material
- ✅ Documento proprietário do oaken-ia removido do repositório público e do histórico
