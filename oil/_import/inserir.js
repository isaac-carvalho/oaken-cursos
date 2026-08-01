/*
 * Reescreve oil/modulos-data.js juntando as aulas antigas às novas.
 *
 * REGRA (decisão do dono do projecto): quando o módulo já tem MAIS aulas do
 * que o material novo traz, as antigas ficam e as novas são acrescentadas a
 * seguir — acumula-se, não se substitui. Só se substitui um módulo que tenha
 * MENOS aulas do que o material novo. No offshore todos os 17 módulos tinham
 * 20 aulas contra 11 novas, portanto todos acumulam: 20 + 11 = 31.
 *
 * A base das aulas antigas é o backup modulos-data.js.bak, para o script ser
 * idempotente (correr duas vezes não duplica nada).
 *
 * Uso: node inserir.js
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const ALVO = path.join(RAIZ, 'modulos-data.js');
const BAK  = ALVO + '.bak';
const DIR  = path.join(__dirname, 'aulas-html');

// Os títulos do Módulo 1 vêm em MAIÚSCULAS na fonte; a lista de tópicos do
// prompt (linhas 8–19 da fonte) tem-nos em capitalização normal. Usa-se essa.
const TITULOS_M1 = {
  1:  'Geologia do Petróleo',
  2:  'Exploração Sísmica 2D/3D/4D',
  3:  'História do Petróleo em Angola',
  4:  'Bacias Sedimentares Angolanas (Kwanza, Congo, Namibe)',
  5:  'Características do Petróleo Angolano (API, Teor de Enxofre)',
  6:  'Operadoras da Indústria (Majors, Independentes, Sonangol e Parceiros)',
  7:  'Economia do Petróleo (Preço, Mercado, Cadeia de Valor)',
  8:  'Blocos de Exploração em Angola',
  9:  'Contratos de Partilha de Produção (PSA)',
  10: 'Recursos vs. Reservas (Classificação e Diferença)',
  11: 'Ciclo de Vida do Campo e Tendências Futuras da Indústria',
};

if (!fs.existsSync(BAK)) fs.copyFileSync(ALVO, BAK);
const ANTIGO = eval(fs.readFileSync(BAK, 'utf-8') + '; COURSE_DATA');

function lerModulo(mod) {
  const fp = path.join(DIR, `mod${String(mod).padStart(2, '0')}.html`);
  const html = fs.readFileSync(fp, 'utf-8');
  return [...html.matchAll(/<!-- ===== AULA (\d+)\.(\d+): ([\s\S]*?) ===== -->\n([\s\S]*?)\n<!-- ===== FIM AULA \1\.\2 ===== -->/g)]
    .map(m => ({ num: +m[2], titulo: m[3].trim(), content: m[4].trim() }));
}

// Para comparar títulos ignorando número, acentos, maiúsculas e pontuação.
const chave = s => s.replace(/^\d+\.\d+\s*/, '')
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const jsStr = s => JSON.stringify(s);
const resumo = [];

const blocos = ANTIGO.map(m => {
  const novas = lerModulo(m.id);
  if (novas.length !== 11) throw new Error(`Módulo ${m.id}: ${novas.length} aulas novas, esperadas 11`);

  const acumula = m.lessons.length > novas.length;
  const antigas = acumula ? m.lessons : [];
  const chavesAntigas = new Set(antigas.map(l => chave(l.title)));

  const lessons = [
    ...antigas.map(l => ({ title: l.title, content: l.content })),
    ...novas.map((a, i) => {
      let t = m.id === 1 ? (TITULOS_M1[a.num] || a.titulo) : a.titulo;
      // Se o módulo já tinha uma aula com o mesmo tema, marca-se a nova como
      // aprofundamento — senão ficavam dois separadores com o mesmo nome.
      if (chavesAntigas.has(chave(t))) t += ' (Aprofundamento)';
      return { title: `${m.id}.${antigas.length + i + 1} ${t}`, content: a.content };
    }),
  ];

  resumo.push({ id: m.id, antes: m.lessons.length, novas: novas.length, total: lessons.length, acumulou: acumula });

  const corpo = lessons.map(l =>
    `    { title: ${jsStr(l.title)},\n      content: ${jsStr(l.content)} }`).join(',\n');
  return `{\n  id: ${m.id},\n  title: ${jsStr(m.title)},\n  hours: ${m.hours},\n  lessons: [\n${corpo}\n  ]\n}`;
});

const saida = `// Conteúdo das aulas do curso offshore.
// As aulas 1..20 de cada módulo são as originais; as seguintes vieram do
// material aprofundado (7 secções: objectivos, cenário angolano, desenvolvimento
// técnico, procedimento, erro comum, normas, pergunta de verificação),
// convertidas por _import/converter.js.
// 17 módulos × 31 aulas = 527 aulas.
// Regenerar: node _import/converter.js && node _import/validar.js && node _import/inserir.js
const COURSE_DATA = [
${blocos.join(',\n')},
];
`;

fs.writeFileSync(ALVO, saida, 'utf-8');

const novo = eval(fs.readFileSync(ALVO, 'utf-8') + '; COURSE_DATA');
console.log(`modulos-data.js reescrito (aulas antigas preservadas a partir de ${path.basename(BAK)})`);
console.log(`  módulos: ${novo.length}`);
console.log(`  aulas:   ${novo.reduce((s, x) => s + x.lessons.length, 0)}`);
console.log(`  horas:   ${novo.reduce((s, x) => s + x.hours, 0)}`);
resumo.forEach(r => console.log(
  `  M${String(r.id).padStart(2)}: ${r.antes} antigas ${r.acumulou ? '+' : '-> substituídas por'} ${r.novas} novas = ${r.total} aulas`));
