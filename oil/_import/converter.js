/*
 * Conversor do material offshore (texto puro, 7 secções nomeadas) para o HTML
 * do site oil/. Derivado de electrical/_import/converter.js, adaptado ao
 * formato desta fonte:
 *
 *   - marcador de aula:  AULA N/11 — Título     (o módulo vem da faixa de linhas)
 *   - secções por cabeçalho em MAIÚSCULAS, com ou sem número à frente:
 *       OBJETIVOS DE APRENDIZAGEM
 *       CENÁRIO REAL OFFSHORE ANGOLANO
 *       DESENVOLVIMENTO TÉCNICO COMPLETO      (subsecções 3.1, 3.2, ...)
 *       PROCEDIMENTO PRÁTICO[...]             (passos "Passo N —")
 *       ERRO COMUM DE INTERPRETAÇÃO [...]
 *       NORMAS E REFERÊNCIAS REGULATÓRIAS APLICÁVEIS
 *       PERGUNTA DE VERIFICAÇÃO DE RACIOCÍNIO (alíneas a) b) c) d))
 *
 * A fonte é um despejo de conversa com um LLM: traz ruído meta em inglês
 * ("The user said ok", "I need to generate...") entre as aulas. É filtrado.
 *
 * A fonte offshore NÃO tem HTML, SVG nem tabelas (esses estão na parte do
 * curso de eléctrica do mesmo ficheiro, a partir da linha ~30000, que é
 * ignorada aqui). Mesmo assim o extractor de HTML bruto fica activo, para o
 * caso de aparecer.
 *
 * Uso:  node converter.js "caminho/para/fonte.txt"
 * Saída: aulas-html/mod01.html ... mod17.html  +  relatorio.json
 */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2] || 'C:/Users/Isaac Carvalho/Downloads/Classificação de recursos e reserva.txt';
const OUTDIR = path.join(__dirname, 'aulas-html');

/* ─────────────────────────────────────────────────────────────
   Mapa: faixas de linhas da fonte -> módulo do curso.
   Determinado por inspecção (ver inventario.md). Faixas fora
   desta lista são prompts, índices, ruído ou outro curso.
   ───────────────────────────────────────────────────────────── */
const FAIXAS = [
  // mod, de,    ate,   nota
  [ 1,      45,    154, 'aula 10 isolada (primeira resposta do LLM)'],
  [ 1,     485,   2354, 'aulas 1-9 e 11'],
  [ 1,    2355,   2655, 'segunda versão das aulas 2 e 8'],
  [ 2,    4837,   5744, ''],
  [ 3,    5745,   6869, ''],
  [ 3,    9302,  10423, 'repetição do módulo 3'],
  [ 4,    6870,   8168, ''],
  [ 5,    8189,   9301, ''],
  [ 5,   10424,  11573, 'repetição do módulo 5'],
  [ 6,   11574,  12133, 'aulas 1-4'],
  [ 6,   12179,  13054, 'aulas 5-11'],
  [ 7,   13055,  14433, ''],
  [ 8,   14434,  15765, ''],
  [ 9,   15766,  17117, ''],
  [10,   17118,  18369, ''],
  [10,   18370,  19741, 'repetição do módulo 10'],
  [11,   19742,  20931, ''],
  [12,   20932,  22322, ''],
  [13,   22323,  23514, ''],
  [14,   23515,  24775, ''],
  [15,   24776,  25918, ''],
  [16,   25919,  27157, ''],
  [17,   27158,  28352, ''],
  // [18, 28353, 29600] — "Integridade de Ativos"; módulo que o curso ainda não tem.
];

/* ─────────────────────────────────────────────────────────────
   Limpeza de ruído
   ───────────────────────────────────────────────────────────── */

// Linha de raciocínio do LLM (inglês) ou de conversa, não conteúdo de aula.
const RE_RUIDO = [
  /^(ok|okay|continue|certo)\.?$/i,
  /^(the user|ok, the user|okay, the user|alright|so, i|now, i|now i|i need to|i will|i should|i have|i am|i'll|i'd|let me|let's|we need to|we have|looking back|based on the user|according to the|given the|this response is ai-generated|the next module|the lessons are|the user's|user said|user then|user initially|goal:|constraint:|interpretation:|i must|i can|i could|first, i|the assistant|my response|the response|the conversation|the prompt|the format|the structure|since i)/i,
  /^(com est[ae]s? (duas )?aulas?|com isto o módulo|módulo \d+ (fica|está) completo|se precisar de|é só indicar|posso avançar|quer que|vamos ao módulo)/i,
  /^(solicitação de texto original|prompts? deepseek)/i,
  /^#{1,6}\s/,           // cabeçalhos markdown = material de prompt
  /^\[INSIRA AQUI/i,
  /^---+$/,
];

function ehRuido(l) {
  const t = l.trim();
  if (!t) return false;
  // heurística extra: frase longa em inglês sem acentos portugueses
  if (t.split(/\s+/).length > 6 && !/[áéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]/.test(t) &&
      /\b(the|user|lesson|module|prompt|response|generate|should|would|because)\b/i.test(t) &&
      !/\b(bloco|angola|poço|técnico)\b/i.test(t)) return true;
  return RE_RUIDO.some(re => re.test(t));
}

const limpar = txt => txt.split(/\n/).filter(l => !ehRuido(l)).join('\n');

/* ─────────────────────────────────────────────────────────────
   Helpers de HTML (iguais aos do curso de eléctrica)
   ───────────────────────────────────────────────────────────── */
const esc = s => s.replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

function ehFormula(l) {
  if (/^F[oó]rmula[^:]*:/i.test(l)) return true;
  return /^[A-Za-zΩµ√φρ][A-Za-z0-9_ΩµΔ√φρ()\[\]{}·×÷^_,.\s-]{0,40}\s*=\s*.+/.test(l)
      && l.length < 120 && !/[.;]\s*$/.test(l);
}
const blocoFormula = l => {
  const m = l.match(/^F[oó]rmula[^:]*:\s*(.+)$/i);
  return `<div class="fbox"><div class="f">${esc((m ? m[1] : l).trim())}</div></div>`;
};

function corpo(txt) {
  const out = [];
  let lista = [];
  const fecharLista = () => {
    if (lista.length) { out.push(`<ul>${lista.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`); lista = []; }
  };
  for (const l of txt.split(/\n/).map(x => x.trim())) {
    if (!l) { fecharLista(); continue; }
    const mLi = l.match(/^[-•*]\s+(.+)$/);
    if (mLi) { lista.push(mLi[1]); continue; }
    fecharLista();
    if (ehFormula(l)) { out.push(blocoFormula(l)); continue; }
    out.push(`<p>${inline(l)}</p>`);
  }
  fecharLista();
  return out.join('\n');
}

function extrairHtmlBruto(txt) {
  const achados = [];
  const re = /(<table[\s\S]*?<\/table>|<svg[\s\S]*?<\/svg>)/gi;
  let m;
  while ((m = re.exec(txt)) !== null) achados.push(m[1]);
  return { achados, resto: txt.replace(re, '').replace(/^```.*$/gm, '') };
}

const visualHtml = achados => achados.map(h => h.startsWith('<svg')
  ? `<div class="dg">${h}</div>`
  : `<div class="tw">${h.replace(/<table[^>]*>/i, '<table class="dt">')}</div>`).join('\n');

/* ─────────────────────────────────────────────────────────────
   As 7 secções
   ───────────────────────────────────────────────────────────── */

function secObjectivos(t) {
  const itens = t.split(/\n/).map(l => l.trim()).filter(Boolean)
    .filter(l => !/^ao (final|fim) desta aula/i.test(l));
  if (!itens.length) return '';
  return `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2><ul>${
    itens.map(i => `<li>${inline(i.replace(/^[-•*\d.)]+\s*/, ''))}</li>`).join('')}</ul></div>`;
}

function secCenario(t) {
  return `<div class="cb"><h2><i class="fas fa-map-pin"></i> Cenário Real Offshore Angolano</h2>${corpo(t)}</div>`;
}

function secDesenvolvimento(t) {
  const partes = t.split(/\n(?=\d+\.\d+\.?\s+\S)/);
  return partes.map(p => {
    const linhas = p.split(/\n/);
    let titulo = 'Desenvolvimento Técnico';
    let resto = p;
    const mt = linhas[0].match(/^(\d+\.\d+)\.?\s+(.+)$/);
    if (mt) { titulo = `${mt[1]} ${mt[2]}`; resto = linhas.slice(1).join('\n'); }
    const { achados, resto: semHtml } = extrairHtmlBruto(resto);
    if (!semHtml.trim() && !achados.length) return '';
    return `<div class="cb"><h2><i class="fas fa-oil-well"></i> ${esc(titulo)}</h2>${corpo(semHtml)}${visualHtml(achados)}</div>`;
  }).filter(Boolean).join('\n');
}

function secProcedimento(t, tituloSec) {
  // O cabeçalho da fonte costuma ser "PROCEDIMENTO PRÁTICO DE ANÁLISE: COMO ...".
  // O h2 fica sempre curto; o descritor depois dos ":" vira subtítulo.
  const rot = (tituloSec || '').replace(/^\d+\.\s*/, '').replace(/\s+/g, ' ').trim();
  const desc = rot.includes(':') ? rot.slice(rot.indexOf(':') + 1).trim() : '';
  const sub = desc ? `<p><strong>${inline(desc.charAt(0) + desc.slice(1).toLowerCase())}</strong></p>` : '';
  const re = /^(?:Passo|Etapa)\s+(\d+)\s*[:—–-]?\s*(.*)$/gim;
  const idx = [];
  let m;
  while ((m = re.exec(t)) !== null) idx.push({ pos: m.index, titulo: m[2].trim() || `Passo ${m[1]}`, fim: re.lastIndex });
  const H2 = `<h2><i class="fas fa-toolbox"></i> Procedimento Prático</h2>${sub}`;
  if (!idx.length) return `<div class="cb">${H2}${corpo(t)}</div>`;
  const intro = t.slice(0, idx[0].pos).trim();
  const passos = idx.map((p, i) => [p.titulo, t.slice(p.fim, i + 1 < idx.length ? idx[i + 1].pos : t.length).trim()]);
  const tl = passos.map(([tit, txt], i) =>
    `<div class="tli"><div class="tld">${i + 1}</div><div class="tlc"><h4>${inline(tit)}</h4>${corpo(txt)}</div></div>`).join('');
  return `<div class="cb">${H2}${intro ? corpo(intro) : ''}<div class="tl">${tl}</div></div>`;
}

function secErro(t) {
  // "Como evitar" aparece como «"Como evitar": ...» ou «Como evitar: ...»
  const i = t.search(/"?Como\s+evitar"?\s*:/i);
  const antes = i >= 0 ? t.slice(0, i) : t;
  const evitar = i >= 0 ? t.slice(i) : '';
  return `<div class="cb"><h2><i class="fas fa-fire"></i> Erro Comum e Consequência Real</h2>${corpo(antes)}${
    evitar ? `<div class="hi">${inline(evitar.replace(/\n+/g, ' ').trim())}</div>` : ''}</div>`;
}

function secNormas(t) {
  const caixas = t.split(/\n/).map(l => l.trim()).filter(Boolean).map(l => {
    const m = l.replace(/^[-•*]\s*/, '').match(/^(.{3,110}?)\s*[:—–]\s*(.+)$/);
    const titulo = m ? m[1] : l.replace(/^[-•*]\s*/, '');
    const texto = m ? m[2] : '';
    return `<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> ${inline(titulo)}</div>${
      texto ? `<blockquote>${inline(texto)}</blockquote>` : ''}</div>`;
  }).join('');
  return `<div class="cb"><h2><i class="fas fa-gavel"></i> Normas e Referências Regulatórias</h2>${caixas}</div>`;
}

function secPergunta(t) {
  // Pergunta ABERTA com alíneas. NÃO vira .quiz: o .quiz do site precisa de 4
  // opções e uma resposta certa; inventá-las seria pior do que não ter.
  const linhas = t.split(/\n/).map(l => l.trim()).filter(Boolean);
  const enunciado = [];
  const alineas = [];
  linhas.forEach(l => (/^\(?[a-e]\)/i.test(l) ? alineas : enunciado).push(l));
  return `<div class="cb"><h2><i class="fas fa-circle-question"></i> Pergunta de Verificação</h2>${
    corpo(enunciado.join('\n'))}${
    alineas.length ? `<ol type="a">${alineas.map(a => `<li>${inline(a.replace(/^\(?[a-e]\)\s*/i, ''))}</li>`).join('')}</ol>` : ''}</div>`;
}

/* ─────────────────────────────────────────────────────────────
   Reconhecimento de secções
   ───────────────────────────────────────────────────────────── */
const SECS = [
  { n: 1, re: /^\d*\.?\s*OBJETIVOS?\b/,                                     fn: secObjectivos },
  { n: 2, re: /^\d*\.?\s*CEN[ÁA]RIO\b/,                                     fn: secCenario },
  { n: 3, re: /^\d*\.?\s*DESENVOLVIMENTO\b/,                                fn: secDesenvolvimento },
  { n: 4, re: /^\d*\.?\s*(PROCEDIMENTO|M[ÉE]TODO|FRAMEWORK)\b/,             fn: secProcedimento },
  { n: 5, re: /^\d*\.?\s*ERROS?\s+COMU/,                                    fn: secErro },
  { n: 6, re: /^\d*\.?\s*NORMAS?\b/,                                        fn: secNormas },
  { n: 7, re: /^\d*\.?\s*PERGUNTA\b/,                                       fn: secPergunta },
];
const NOMES = { 1:'Objectivos', 2:'Cenário', 3:'Desenvolvimento', 4:'Procedimento', 5:'Erro comum', 6:'Normas', 7:'Pergunta' };

// Um cabeçalho de secção é uma linha curta em MAIÚSCULAS que casa com um dos regex.
function tipoDeCabecalho(linha) {
  const t = linha.trim();
  // até 140 char: alguns cabeçalhos são longos
  // ("PROCEDIMENTO PRÁTICO DE ANÁLISE: COMO CALCULAR O GOVERNMENT TAKE ...").
  if (!t || t.length > 140) return null;
  if (t !== t.toUpperCase()) return null;          // tem minúsculas -> não é cabeçalho
  if (!/[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(t)) return null;
  for (const s of SECS) if (s.re.test(t)) return s;
  return null;
}

/* ─────────────────────────────────────────────────────────────
   Pipeline
   ───────────────────────────────────────────────────────────── */
const linhasFonte = fs.readFileSync(SRC, 'utf-8').split(/\r?\n/);
const relatorio = { total: 0, porModulo: {}, aulas: [], avisos: [] };
const candidatos = {};   // mod -> num -> [ {titulo, secs, chars, origem} ]

FAIXAS.forEach(([mod, de, ate, nota]) => {
  const bloco = linhasFonte.slice(de - 1, ate);
  const marcas = [];
  bloco.forEach((l, i) => {
    const m = l.match(/^\s*(?:✅\s*)?AULA[: ]+\s*(\d+)\s*\/\s*11\s*[—–-]\s*(.+)$/i);
    if (m) marcas.push({ i, num: +m[1], titulo: m[2].trim() });
  });
  marcas.forEach((mk, k) => {
    const fim = k + 1 < marcas.length ? marcas[k + 1].i : bloco.length;
    const linhas = bloco.slice(mk.i + 1, fim);
    if (linhas.length < 25) return;      // índice/lista, não aula

    // cortar nas secções
    const cortes = [];
    linhas.forEach((l, i) => { const s = tipoDeCabecalho(l); if (s) cortes.push({ i, s, raw: l.trim() }); });
    if (cortes.length < 4) return;       // não é uma aula desenvolvida

    const secs = {};
    const rotulos = {};
    cortes.forEach((c, i) => {
      const ate2 = i + 1 < cortes.length ? cortes[i + 1].i : linhas.length;
      const txt = limpar(linhas.slice(c.i + 1, ate2).join('\n')).trim();
      if (txt && !secs[c.s.n]) { secs[c.s.n] = txt; rotulos[c.s.n] = c.raw; }
    });

    const chars = Object.values(secs).join('').length;
    if (chars < 2000) return;            // fragmento

    (candidatos[mod] = candidatos[mod] || {});
    (candidatos[mod][mk.num] = candidatos[mod][mk.num] || []).push({
      titulo: mk.titulo, secs, rotulos, chars, origem: `L${de + mk.i} ${nota}`.trim()
    });
  });
});

/* Escolher, por (módulo, aula), a variante com mais conteúdo útil. */
const modulos = {};
Object.keys(candidatos).map(Number).sort((a, b) => a - b).forEach(mod => {
  modulos[mod] = [];
  for (let num = 1; num <= 11; num++) {
    const vs = candidatos[mod][num];
    if (!vs || !vs.length) { relatorio.avisos.push(`Módulo ${mod}, aula ${num}: NÃO ENCONTRADA na fonte`); continue; }
    const v = vs.slice().sort((a, b) => b.chars - a.chars)[0];
    if (vs.length > 1) relatorio.avisos.push(`Módulo ${mod}, aula ${num}: ${vs.length} variantes, usada a de ${v.chars} car. (${v.origem})`);

    const faltam = [1,2,3,4,5,6,7].filter(n => !v.secs[n]);
    if (faltam.length) relatorio.avisos.push(`Módulo ${mod}, aula ${num}: secções em falta -> ${faltam.map(n => NOMES[n]).join(', ')}`);

    const html = [
      `<!-- ===== AULA ${mod}.${num}: ${v.titulo} ===== -->`,
      ...SECS.map(s => v.secs[s.n] ? s.fn(v.secs[s.n], v.rotulos[s.n]) : ''),
      `<!-- ===== FIM AULA ${mod}.${num} ===== -->`
    ].filter(Boolean).join('\n');

    modulos[mod].push({ num, titulo: v.titulo, html, chars: v.chars, secs: Object.keys(v.secs).length, faltam });
    relatorio.total++;
    relatorio.porModulo[mod] = (relatorio.porModulo[mod] || 0) + 1;
    relatorio.aulas.push({ mod, num, titulo: v.titulo, chars: v.chars, htmlLen: html.length, secs: Object.keys(v.secs).length, origem: v.origem });
  }
});

fs.mkdirSync(OUTDIR, { recursive: true });
Object.keys(modulos).map(Number).sort((a, b) => a - b).forEach(mod => {
  fs.writeFileSync(path.join(OUTDIR, `mod${String(mod).padStart(2, '0')}.html`),
    modulos[mod].map(a => a.html).join('\n\n'), 'utf-8');
});
fs.writeFileSync(path.join(OUTDIR, 'indice.json'),
  JSON.stringify(Object.fromEntries(Object.entries(modulos).map(([m, as]) =>
    [m, as.map(a => ({ num: a.num, titulo: a.titulo, chars: a.chars, secs: a.secs }))])), null, 2), 'utf-8');
fs.writeFileSync(path.join(OUTDIR, 'relatorio.json'), JSON.stringify(relatorio, null, 2), 'utf-8');

console.log(`Convertidas ${relatorio.total} aulas -> ${OUTDIR}`);
Object.keys(relatorio.porModulo).map(Number).sort((a, b) => a - b).forEach(m => {
  const as = modulos[m];
  const min = Math.min(...as.map(a => a.chars)), max = Math.max(...as.map(a => a.chars));
  console.log(`  Modulo ${String(m).padStart(2)}: ${String(as.length).padStart(2)} aulas | ${Math.round(min/1000)}-${Math.round(max/1000)} kB por aula`);
});
console.log(`\nAvisos: ${relatorio.avisos.length}`);
relatorio.avisos.forEach(a => console.log('  - ' + a));
