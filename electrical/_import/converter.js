/*
 * Converte as aulas em texto simples (formato de 8 secções numeradas) para o
 * HTML do site, usando as classes que já existem no electrical/index.html.
 *
 * Uso:  node converter.js fonte-completa.txt
 * Saída: aulas-html/mod01.html ... mod18.html  +  relatorio.json
 */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2] || 'fonte-completa.txt';
const OUTDIR = path.join(__dirname, 'aulas-html');

const esc = s => s.replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Negrito: **texto** -> <strong>. Aplica-se só a texto corrido, nunca dentro de HTML bruto.
const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

// Uma linha é fórmula se parece "X = ..." ou vem rotulada como Fórmula:
function ehFormula(l) {
  if (/^F[oó]rmula[^:]*:/i.test(l)) return true;
  return /^[A-Za-zΩµ√][A-Za-z0-9_ΩµΔ√()\[\]{}·×÷^_,.\s-]{0,40}\s*=\s*.+/.test(l) && l.length < 120 && !/[.;]\s*$/.test(l);
}

function blocoFormula(l) {
  const m = l.match(/^F[oó]rmula[^:]*:\s*(.+)$/i);
  const f = m ? m[1] : l;
  return `<div class="fbox"><div class="f">${esc(f.trim())}</div></div>`;
}

// Converte um pedaço de texto corrido em parágrafos + fórmulas + listas.
function corpo(txt) {
  const linhas = txt.split(/\n/).map(l => l.trim());
  const out = [];
  let lista = [];
  const fecharLista = () => {
    if (lista.length) { out.push(`<ul>${lista.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`); lista = []; }
  };
  for (const l of linhas) {
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

// Extrai HTML bruto (tabelas/SVG) que o gerador já entregou pronto.
function extrairHtmlBruto(txt) {
  const achados = [];
  const re = /(<table[\s\S]*?<\/table>|<svg[\s\S]*?<\/svg>)/gi;
  let m;
  while ((m = re.exec(txt)) !== null) achados.push(m[1]);
  const semHtml = txt.replace(re, '').replace(/^```.*$/gm, '').replace(/^html\s*$/gim, '')
                     .replace(/\(C[oó]digo para colar no site\)/gi, '');
  return { achados, resto: semHtml };
}

// ---- as 8 secções ----

function sec1(t) { // objectivos
  const itens = t.split(/\n/).map(l => l.trim()).filter(Boolean);
  return `<div class="cb"><h2><i class="fas fa-bullseye"></i> Objectivos de Aprendizagem</h2><ul>${
    itens.map(i => `<li>${inline(i.replace(/^[-•*]\s*/, ''))}</li>`).join('')}</ul></div>`;
}

function sec2(t) { // cenário real
  return `<div class="cb"><h2><i class="fas fa-map-pin"></i> Cenário Real em Angola</h2>${corpo(t)}</div>`;
}

function sec3(t) { // desenvolvimento técnico — parte-se pelas subsecções 3.1, 3.2...
  const partes = t.split(/\n(?=\d+\.\d+\.?\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ])/);
  return partes.map(p => {
    const linhas = p.split(/\n/);
    let titulo = 'Desenvolvimento Técnico';
    let resto = p;
    const mt = linhas[0].match(/^(\d+\.\d+)\.?\s+(.+)$/);
    if (mt) { titulo = `${mt[1]} ${mt[2]}`; resto = linhas.slice(1).join('\n'); }
    const { achados, resto: semHtml } = extrairHtmlBruto(resto);
    const visual = achados.map(h => h.startsWith('<svg')
      ? `<div class="dg">${h}</div>`
      : `<div class="tw">${h.replace(/<table[^>]*>/i, '<table class="dt">')}</div>`).join('\n');
    return `<div class="cb"><h2><i class="fas fa-bolt"></i> ${esc(titulo)}</h2>${corpo(semHtml)}${visual}</div>`;
  }).join('\n');
}

function sec4(t) { // elemento visual
  const { achados, resto } = extrairHtmlBruto(t);
  if (!achados.length) return { html: '', semVisual: true };
  const legenda = resto.split(/\n/).map(l => l.trim()).find(l => l && l.length < 140) || '';
  const html = achados.map(h => h.startsWith('<svg')
    ? `<div class="dg">${legenda ? `<div class="dgt">${esc(legenda)}</div>` : ''}${h}</div>`
    : `<div class="tw">${h.replace(/<table[^>]*>/i, '<table class="dt">')}</div>`).join('\n');
  return { html, semVisual: false };
}

function sec5(t) { // procedimento prático -> timeline
  const passos = [];
  const re = /^Passo\s+(\d+)\s*[:—-]?\s*(.*)$/gim;
  const idx = [];
  let m;
  while ((m = re.exec(t)) !== null) idx.push({ pos: m.index, titulo: m[2].trim() || `Passo ${m[1]}`, fim: re.lastIndex });
  if (idx.length) {
    idx.forEach((p, i) => {
      const corpoTxt = t.slice(p.fim, i + 1 < idx.length ? idx[i + 1].pos : t.length).trim();
      passos.push([p.titulo, corpoTxt]);
    });
  }
  if (!passos.length) return `<div class="cb"><h2><i class="fas fa-toolbox"></i> Procedimento Prático</h2>${corpo(t)}</div>`;
  const tl = passos.map(([tit, txt], i) =>
    `<div class="tli"><div class="tld">${i + 1}</div><div class="tlc"><h4>${inline(tit)}</h4>${corpo(txt)}</div></div>`
  ).join('');
  return `<div class="cb"><h2><i class="fas fa-toolbox"></i> Procedimento Prático</h2><div class="tl">${tl}</div></div>`;
}

function sec6(t) { // erro comum — "Como evitar:" vira destaque
  const i = t.search(/Como evitar\s*:/i);
  const antes = i >= 0 ? t.slice(0, i) : t;
  const evitar = i >= 0 ? t.slice(i) : '';
  return `<div class="cb"><h2><i class="fas fa-fire"></i> Erro Comum e Consequência Real</h2>${corpo(antes)}${
    evitar ? `<div class="hi">${inline(evitar.replace(/\n+/g, ' ').trim())}</div>` : ''}</div>`;
}

function sec7(t) { // normas -> lawbox por norma
  const linhas = t.split(/\n/).map(l => l.trim()).filter(Boolean);
  const caixas = linhas.map(l => {
    const m = l.match(/^(.{3,90}?)\s*[:—–-]\s*(.+)$/);
    const titulo = m ? m[1] : l;
    const texto = m ? m[2] : '';
    return `<div class="lawbox"><div class="lt"><i class="fas fa-gavel"></i> ${inline(titulo)}</div>${
      texto ? `<blockquote>${inline(texto)}</blockquote>` : ''}</div>`;
  }).join('');
  return `<div class="cb"><h2><i class="fas fa-gavel"></i> Normas Aplicáveis</h2>${caixas}</div>`;
}

function sec8(t) {
  // Pergunta ABERTA com alíneas — não é escolha múltipla, por isso não usa .quiz
  // (o .quiz do site precisa de 4 opções e uma resposta certa; inventá-las seria errado).
  const linhas = t.split(/\n/).map(l => l.trim()).filter(Boolean);
  const enunciado = [];
  const alineas = [];
  linhas.forEach(l => (/^[a-e]\)/i.test(l) ? alineas : enunciado).push(l));
  return `<div class="cb"><h2><i class="fas fa-circle-question"></i> Pergunta de Verificação</h2>${
    corpo(enunciado.join('\n'))}${
    alineas.length ? `<ol type="a">${alineas.map(a => `<li>${inline(a.replace(/^[a-e]\)\s*/i, ''))}</li>`).join('')}</ol>` : ''}</div>`;
}

// ---- pipeline ----

const texto = fs.readFileSync(SRC, 'utf-8');
const marcas = [...texto.matchAll(/^AULA (\d+)\.(\d+)\s*[—–-]\s*(.+)$/gm)];
const relatorio = { total: 0, porModulo: {}, avisos: [] };
const modulos = {};

marcas.forEach((m, k) => {
  const mod = +m[1], num = +m[2], titulo = m[3].trim();
  const ini = m.index + m[0].length;
  const fim = k + 1 < marcas.length ? marcas[k + 1].index : texto.length;
  const bloco = texto.slice(ini, fim);

  // partir nas 8 secções
  const cortes = [...bloco.matchAll(/^([1-8])\.\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ][^\n]*$/gm)];
  const secs = {};
  cortes.forEach((c, i) => {
    const de = c.index + c[0].length;
    const ate = i + 1 < cortes.length ? cortes[i + 1].index : bloco.length;
    secs[+c[1]] = bloco.slice(de, ate).trim();
  });

  const faltam = [1,2,3,5,6,7,8].filter(n => !secs[n]);
  if (faltam.length) relatorio.avisos.push(`Aula ${mod}.${num} — secções em falta: ${faltam.join(', ')}`);

  const v4 = secs[4] ? sec4(secs[4]) : { html: '', semVisual: true };
  if (v4.semVisual) relatorio.avisos.push(`Aula ${mod}.${num} — sem elemento visual (SVG/tabela)`);

  const html = [
    `<!-- ===== AULA ${mod}.${num}: ${titulo} ===== -->`,
    secs[1] ? sec1(secs[1]) : '',
    secs[2] ? sec2(secs[2]) : '',
    secs[3] ? sec3(secs[3]) : '',
    v4.html,
    secs[5] ? sec5(secs[5]) : '',
    secs[6] ? sec6(secs[6]) : '',
    secs[7] ? sec7(secs[7]) : '',
    secs[8] ? sec8(secs[8]) : '',
    `<!-- ===== FIM AULA ${mod}.${num} ===== -->`
  ].filter(Boolean).join('\n');

  (modulos[mod] = modulos[mod] || []).push({ num, titulo, html });
  relatorio.total++;
  relatorio.porModulo[mod] = (relatorio.porModulo[mod] || 0) + 1;
});

fs.mkdirSync(OUTDIR, { recursive: true });
Object.keys(modulos).sort((a, b) => a - b).forEach(mod => {
  const aulas = modulos[mod].sort((a, b) => a.num - b.num);
  const nome = `mod${String(mod).padStart(2, '0')}.html`;
  fs.writeFileSync(path.join(OUTDIR, nome), aulas.map(a => a.html).join('\n\n'), 'utf-8');
});
fs.writeFileSync(path.join(OUTDIR, 'relatorio.json'), JSON.stringify(relatorio, null, 2), 'utf-8');

console.log(`Convertidas ${relatorio.total} aulas -> ${OUTDIR}`);
Object.keys(relatorio.porModulo).sort((a,b)=>a-b).forEach(m =>
  console.log(`  Modulo ${String(m).padStart(2)}: ${relatorio.porModulo[m]} aulas`));
console.log(`\nAvisos: ${relatorio.avisos.length}`);
relatorio.avisos.slice(0, 25).forEach(a => console.log('  - ' + a));
if (relatorio.avisos.length > 25) console.log(`  ... e mais ${relatorio.avisos.length - 25} (ver relatorio.json)`);
