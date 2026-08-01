// Gera administrativo/index.html.
//
// O CSS e os modelos do certificado/verificacao sao copiados TAL E QUAL de
// oil/index.html, para que a Area do Aluno dos tres cursos seja identica.
// So a marca e o nome do curso sao trocados.
//
// Correr: node _import/gerar-index.js

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..', '..');
const OIL = fs.readFileSync(path.join(RAIZ, 'oil', 'index.html'), 'utf8').replace(/\r\n/g, '\n');
const OUT = path.join(__dirname, '..', 'index.html');

function entre(txt, ini, fim, nome) {
  const a = txt.indexOf(ini);
  if (a === -1) throw new Error('nao encontrei o inicio de ' + nome);
  const b = txt.indexOf(fim, a + ini.length);
  if (b === -1) throw new Error('nao encontrei o fim de ' + nome);
  return txt.slice(a + ini.length, b);
}

// ---- 1. CSS (verbatim) ----
let CSS = entre(OIL, '<style>', '</style>', 'CSS');

// ---- 2. modelos do certificado e da verificacao (verbatim, marca trocada) ----
function remarcar(s) {
  return s
    .replace(/OAKEN OIL/g, 'OAKEN ADMINISTRATIVO')
    .replace(/OAKEN<span>OIL<\/span>/g, 'OAKEN<span>ADM</span>')
    .replace(/OAKEN<strong>OIL<\/strong>/g, 'OAKEN<strong>ADM</strong>')
    .replace(/Verificação Oaken Oil/g, 'Verificação Oaken Cursos')
    .replace(/Direção Técnica<strong>OAKEN ADMINISTRATIVO<\/strong>/g, 'Direção Técnica<strong>OAKEN CURSOS</strong>')
    .replace(/"Técnico de Segurança e Operações Offshore"/g, '"Técnico Administrativo — Edição Angola"')
    .replace(/Técnico de Segurança e Operações Offshore/g, 'Técnico Administrativo — Edição Angola');
}

let CERT = remarcar(entre(OIL, 'const HTML_CERT = `', '`;\nconst HTML_VERIFY', 'HTML_CERT'));
let VERIFY = remarcar(entre(OIL, 'const HTML_VERIFY = `', '`;\n\n</script>', 'HTML_VERIFY'));

// O certificado do offshore fala de exames de modulo; aqui nao ha exames.
CERT = CERT
  .replace(
    /tendo sido aprovado\(a\) em <strong id="certTotalQ">17<\/strong> de <strong id="certRatio">17<\/strong>\s*\n?\s*exames de módulo, com aproveitamento médio de <strong id="certScore">—<\/strong>,\s*\n?\s*superando em cada módulo a nota mínima de aprovação de 70%\./,
    'tendo concluído o estudo de <strong id="certRatio">—</strong> de <strong id="certTotalQ">—</strong> ' +
    'módulos com conteúdo disponível, o que corresponde a <strong id="certScore">—</strong> do programa publicado.'
  )
  .replace(
    /Complete os 17 exames de módulo na/,
    'Conclua a leitura de todos os módulos na'
  )
  .replace(/⚠️ Ainda não há um resultado de aprovação guardado neste navegador\./,
    '⚠️ Ainda não concluiu a leitura de todos os módulos neste navegador.');

if (CERT.indexOf('exames de módulo, com aproveitamento') !== -1) {
  throw new Error('a substituicao do texto do certificado falhou');
}
// Os tres ids sao lidos por initCert(): se algum desaparecer, o certificado rebenta.
['certRatio', 'certTotalQ', 'certScore', 'certHours', 'certModules', 'certLessons', 'certName', 'certCode', 'certDate']
  .forEach(function (id) {
    if (CERT.indexOf('id="' + id + '"') === -1) throw new Error('o certificado perdeu o id ' + id);
  });

VERIFY = VERIFY
  .replace('<span>Aproveitamento médio</span><span id="vNota">—</span>', '<span>Progresso de estudo</span><span id="vNota">—</span>')
  .replace('<span>Módulos aprovados</span>', '<span>Módulos concluídos</span>');

// ---- 3. escrita ----
const HTML = `<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Oaken Cursos - Técnico Administrativo (Edição Angola)</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js"></script>
<style>${CSS}
/* ── Ajuste de cor do curso Administrativo (a estrutura fica igual ao oil) ── */
:root { --secondary: #4E8FD1; --accent: #2F6DA8; }
/* Cartao de modulo sem conteudo ainda: sem hover, sem cursor de clique. */
.aluno-view .mod-card.preparacao { border-left-color:#CBD5E1; cursor:default; opacity:.75; }
.aluno-view .mod-ic.preparacao { background:#E2E8F0; color:#64748B; }
.aluno-view .sbtn.disabled { background:#E2E8F0; color:#94A3B8; cursor:not-allowed; }
.aluno-view .sbtn.disabled:hover { background:#E2E8F0; transform:none; }
</style>
</head>
<body>

<div class="topbar-portal" style="background:#111827;padding:8px 24px;text-align:center;font-size:12px;"><a href="../index.html" style="color:#4E8FD1;text-decoration:none;font-weight:700;letter-spacing:.5px;">&larr; OAKEN CURSOS</a></div>

<header>
    <div class="container header-flex">
        <div class="logo" onclick="nav('home')" style="cursor:pointer">OAKEN<span>ADM</span></div>
        <nav class="nav" id="mainNav">
            <a href="#home" data-r="home">Home</a>
            <a href="#modulos" data-r="modulos">Módulos</a>
            <a href="#aluno" data-r="aluno">Área do Aluno</a>
            <a href="#certificado" data-r="certificado">Certificado</a>
            <a href="https://wa.me/351913388794" target="_blank" class="cta-top"><i class="fab fa-whatsapp"></i> Inscrever-me</a>
        </nav>
    </div>
</header>

<div id="app"></div>

<div id="siteFooter"></div>

<script src="modulos-data.js"></script>
<script src="course-meta.js"></script>
<script>
const HTML_CERT = \`${CERT}\`;
const HTML_VERIFY = \`${VERIFY}\`;
</script>
<script src="app.js"></script>
</body>
</html>
`;

fs.writeFileSync(OUT, HTML, 'utf8');
console.log('Escrito: ' + OUT + '  (' + HTML.length + ' bytes)');
