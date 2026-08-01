/*
 * Valida a saída de converter.js antes de a inserir em modulos-data.js.
 * Verifica, por módulo: 11 aulas, as 7 secções presentes, <div> balanceados,
 * apenas classes CSS que existam mesmo no oil/index.html, e ausência de
 * ruído meta do LLM que tenha escapado ao filtro.
 *
 * Uso: node validar.js
 * Sai com código 1 se houver erro (não avisos).
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'aulas-html');
const INDEX = path.join(__dirname, '..', 'index.html');

// Classes permitidas: as que o converter emite. Cada uma tem de ter regra CSS.
const CLASSES = ['cb','fbox','f','fd','dg','dgt','tw','dt','tl','tli','tld','tlc','hi','lawbox','lt'];
const SECOES = [
  ['Objectivos de Aprendizagem', /fa-bullseye/],
  ['Cenário Real', /fa-map-pin/],
  ['Desenvolvimento Técnico', /fa-oil-well/],
  ['Procedimento Prático', /fa-toolbox/],
  ['Erro Comum', /fa-fire/],
  ['Normas', /fa-gavel"><\/i> Normas/],
  ['Pergunta de Verificação', /fa-circle-question/],
];

const idx = fs.readFileSync(INDEX, 'utf-8');
const erros = [], avisos = [];

// 1) as classes usadas têm CSS?
const semCss = CLASSES.filter(c => !new RegExp(`\\.${c}\\b[^{]*\\{`).test(idx));
if (semCss.length) erros.push(`Sem regra CSS em oil/index.html: .${semCss.join(', .')}`);

// 2) por módulo
let totalAulas = 0;
for (let m = 1; m <= 17; m++) {
  const fp = path.join(DIR, `mod${String(m).padStart(2, '0')}.html`);
  if (!fs.existsSync(fp)) { erros.push(`Módulo ${m}: ficheiro em falta`); continue; }
  const html = fs.readFileSync(fp, 'utf-8');

  const aulas = [...html.matchAll(/<!-- ===== AULA (\d+)\.(\d+): ([\s\S]*?) ===== -->([\s\S]*?)<!-- ===== FIM AULA \1\.\2 ===== -->/g)];
  if (aulas.length !== 11) erros.push(`Módulo ${m}: ${aulas.length} aulas (esperadas 11)`);
  totalAulas += aulas.length;

  aulas.forEach(a => {
    const [num, corpo] = [`${a[1]}.${a[2]}`, a[4]];
    // secções
    SECOES.forEach(([nome, re]) => { if (!re.test(corpo)) erros.push(`Aula ${num}: secção "${nome}" em falta`); });
    // <div> balanceados
    const abre = (corpo.match(/<div\b/g) || []).length;
    const fecha = (corpo.match(/<\/div>/g) || []).length;
    if (abre !== fecha) erros.push(`Aula ${num}: <div> desequilibrados (${abre} abrem, ${fecha} fecham)`);
    // classes fora da lista
    [...corpo.matchAll(/class="([^"]+)"/g)].forEach(c => {
      c[1].split(/\s+/).forEach(cl => {
        if (cl.startsWith('fa')) return;                    // ícones font-awesome
        if (!CLASSES.includes(cl)) erros.push(`Aula ${num}: classe desconhecida "${cl}"`);
      });
    });
    // backtick / ${ partiriam o template literal do modulos-data.js
    if (/[`]/.test(corpo)) erros.push(`Aula ${num}: contém crase (partiria o template literal)`);
    if (/\$\{/.test(corpo)) erros.push(`Aula ${num}: contém \${ (partiria o template literal)`);
    // ruído meta que tenha escapado
    const ruido = corpo.match(/<p>(The user|I need to|I will|Let me|OK, the user|Okay, the user)[^<]{0,90}/i);
    if (ruido) avisos.push(`Aula ${num}: possível ruído -> "${ruido[0].slice(3, 90)}"`);
    // aula muito curta
    if (corpo.length < 3000) avisos.push(`Aula ${num}: só ${corpo.length} car. de HTML`);
  });
}

console.log(`Total de aulas validadas: ${totalAulas}`);
console.log(`\nAvisos (${avisos.length}):`);
avisos.forEach(a => console.log('  - ' + a));
console.log(`\nErros (${erros.length}):`);
erros.forEach(e => console.log('  ! ' + e));
process.exit(erros.length ? 1 : 0);
