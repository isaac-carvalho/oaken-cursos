// Extrai as aulas do curso Tecnico Administrativo a partir do log de conversa
// "Pagina Laboratorio Oaken Oil.txt" (linhas ~12685-17965) e gera modulos-data.js.
//
// Formato de origem: cada modulo e um documento HTML completo com blocos
//   <div id="aula-M-N" class="aula"><h3><span class="num">M.N</span> Titulo</h3><p>...</p></div>
//
// Regra do projecto: 1 hora por aula -> hours = lessons.length
// Correr: node _import/extrair.js

const fs = require('fs');
const path = require('path');

const SRC = 'C:/Users/Isaac Carvalho/Downloads/Página Laboratório Oaken Oil.txt';
const OUT = path.join(__dirname, '..', 'modulos-data.js');

// Titulos oficiais (cursos-catalogo.js, campo programa do curso id:'administrativo')
const TITULOS = {
  1: 'Fundamentos da Administração',
  2: 'Comunicação Empresarial e Atendimento',
  3: 'Gestão de Recursos Humanos',
  4: 'Gestão Financeira e Contabilidade',
  5: 'Gestão de Marketing e Vendas',
  6: 'Gestão de Logística e Cadeia de Abastecimento',
  7: 'Gestão de Projectos',
  8: 'Gestão da Qualidade e Processos',
  9: 'Gestão de Pessoas e Liderança',
  10: 'Gestão Financeira Avançada',
  11: 'Gestão de Marketing e Vendas Avançada',
  12: 'Gestão de Operações e Processos',
  13: 'Gestão de Compras e Fornecimento',
  14: 'Gestão de Armazéns e Inventários',
  15: 'Gestão de Transportes e Frotas',
  16: 'Gestão da Segurança e Saúde no Trabalho',
  17: 'Gestão de Tecnologias de Informação',
  18: 'Empreendedorismo e Inovação em Angola'
};

const texto = fs.readFileSync(SRC, 'utf8');
const linhas = texto.split(/\r?\n/);

// A zona do curso administrativo comeca na linha 12685 (1-based) e acaba na 17965.
const zona = linhas.slice(12684, 17965).join('\n');

const RE_AULA = /<div id="aula-(\d+)-(\d+)" class="aula">([\s\S]*?)<\/div>/g;
const RE_H3 = /^\s*<h3><span class="num">([^<]*)<\/span>\s*([\s\S]*?)<\/h3>([\s\S]*)$/;

const modulos = {}; // { n: { k: {title, content} } }
let total = 0;
let m;
while ((m = RE_AULA.exec(zona)) !== null) {
  const mod = parseInt(m[1], 10);
  const num = parseInt(m[2], 10);
  const bruto = m[3];
  const h = RE_H3.exec(bruto);
  if (!h) {
    console.error('AVISO: bloco aula-' + mod + '-' + num + ' sem <h3> reconhecivel; ignorado.');
    continue;
  }
  const numeracao = h[1].trim();
  const titulo = h[2].trim().replace(/\s+/g, ' ');
  let conteudo = h[3].trim();

  if (!conteudo) {
    console.error('AVISO: aula ' + mod + '.' + num + ' sem conteudo.');
    continue;
  }
  if (modulos[mod] && modulos[mod][num]) {
    console.error('AVISO: aula ' + mod + '.' + num + ' duplicada; fica a primeira.');
    continue;
  }
  if (!modulos[mod]) modulos[mod] = {};
  modulos[mod][num] = { title: numeracao + ' ' + titulo, content: conteudo };
  total++;
}

// ---- validacao ----
const encontrados = Object.keys(modulos).map(Number).sort((a, b) => a - b);
console.log('Modulos encontrados: ' + encontrados.join(', '));
console.log('Total de aulas extraidas: ' + total);

const emFalta = [];
for (let n = 1; n <= 18; n++) {
  if (!modulos[n]) { emFalta.push(n + ' (modulo inteiro)'); continue; }
  const chaves = Object.keys(modulos[n]).map(Number).sort((a, b) => a - b);
  const buracos = [];
  for (let k = 1; k <= 22; k++) if (!modulos[n][k]) buracos.push(k);
  console.log('  Modulo ' + n + ': ' + chaves.length + ' aulas' +
    (buracos.length ? '  FALTAM: ' + buracos.join(',') : ''));
  if (buracos.length) emFalta.push(n + ' -> aulas ' + buracos.join(','));
}
if (emFalta.length) console.log('EM FALTA: ' + emFalta.join(' | '));

// ---- geracao ----
function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, '\\n');
}

const partes = [];
for (let n = 1; n <= 18; n++) {
  const aulas = modulos[n];
  const chaves = aulas ? Object.keys(aulas).map(Number).sort((a, b) => a - b) : [];
  const lessons = chaves.map(k =>
    '    { title: "' + esc(aulas[k].title) + '",\n      content: "' + esc(aulas[k].content) + '" }'
  ).join(',\n');
  partes.push(
    '{\n' +
    '  id: ' + n + ',\n' +
    '  title: "' + esc(TITULOS[n]) + '",\n' +
    '  hours: ' + chaves.length + ',\n' +   // 1 hora por aula
    '  lessons: [\n' + lessons + '\n  ]\n' +
    '}'
  );
}

const cabecalho =
  '// Conteudo das aulas do curso Tecnico Administrativo - Edicao Angola.\n' +
  '// Extraido de "Pagina Laboratorio Oaken Oil.txt" por _import/extrair.js.\n' +
  '// Regra do projecto: 1 hora por aula (hours = numero de aulas do modulo).\n' +
  '// Modulos 1 e 2 nao existem no material-fonte: ficam com lessons vazio.\n' +
  '// Regenerar: node _import/extrair.js\n' +
  'const COURSE_DATA = [\n';

fs.writeFileSync(OUT, cabecalho + partes.join(',\n') + '\n];\n', 'utf8');
console.log('Escrito: ' + OUT);
