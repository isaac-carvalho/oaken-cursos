/* ═══════════════════════════════════════════════════════════════
   OAKEN CURSOS — Técnico Administrativo (Edição Angola)
   Aplicação de página única. Mesma estrutura do oil/index.html.
   Rotas: #home #modulos #aluno #modulo-N #certificado #verificar
   ═══════════════════════════════════════════════════════════════ */

const TOTAL_MODULES = 18;
const QUESTIONS_PER_EXAM = 30;
const EXAM_DURATION_MIN = 50;
const PASS_PCT = 70;

const PROGRESS_KEY = 'oaken_adm_progresso';
const NAME_KEY = 'oaken_adm_student_name';
const ALUNO_KEY = 'oaken_adm_aluno';
const CURRENT_EXAM_KEY = 'oaken_adm_exame_atual';

// Decisão explícita do dono: o desbloqueio sequencial fica DESLIGADO.
// Todos os módulos com aulas estão abertos; o exame regista aprovação
// mas não tranca o módulo seguinte.
const SEQUENTIAL_UNLOCK = false;

// Só há exame onde há banco de questões. Os módulos 1 e 2 não têm aulas
// nem questões — o botão fica desactivado nesses dois.
function temExame(id) {
  return typeof MODULE_QUESTIONS !== 'undefined'
    && Array.isArray(MODULE_QUESTIONS[id])
    && MODULE_QUESTIONS[id].length > 0;
}

const app = document.getElementById('app');

/* ───────── fases do curso (agrupamento dos 18 módulos) ───────── */
const FASES = {
  1: 'Fase 1 — Bases da Administração',
  2: 'Fase 2 — Finanças, Marketing e Vendas',
  3: 'Fase 3 — Operações, Logística e Qualidade',
  4: 'Fase 4 — Pessoas, Segurança, Tecnologia e Negócio'
};
const FASE_MODULOS = {
  1: [1, 2, 3],
  2: [4, 5, 10, 11],
  3: [6, 7, 8, 12, 13, 14, 15],
  4: [9, 16, 17, 18]
};

/* ───────── helpers de dados ───────── */
function modulo(id) { return COURSE_DATA.find(m => m.id === id); }
function moduleTitle(id) { const m = modulo(id); return m ? m.title : 'Módulo ' + id; }
function temConteudo(id) { const m = modulo(id); return !!(m && m.lessons.length); }
function nAulas(id) { const m = modulo(id); return m ? m.lessons.length : 0; }

// Resumo do módulo a partir das próprias aulas (nada inventado).
function resumoModulo(id) {
  const m = modulo(id);
  if (!m || !m.lessons.length) return 'Conteúdo em preparação.';
  const temas = m.lessons.slice(0, 5).map(l => l.title.replace(/^\d+\.\d+\s*/, ''));
  return temas.join(' · ') + ' e mais ' + (m.lessons.length - temas.length) + ' aulas.';
}

const STATS = getCourseStats();

/* ═══════════════════════════════════════════════════════════════
   PROGRESSO — sem exames: conta aulas lidas por módulo
   ═══════════════════════════════════════════════════════════════ */
function loadProgress() {
  let p;
  try { p = JSON.parse(localStorage.getItem(PROGRESS_KEY)); } catch (e) { p = null; }
  if (!p || typeof p !== 'object') p = {};
  for (let m = 1; m <= TOTAL_MODULES; m++) {
    if (!p[m] || typeof p[m] !== 'object') p[m] = {};
    if (!Array.isArray(p[m].lidas)) p[m].lidas = [];
    if (typeof p[m].tentativas !== 'number') p[m].tentativas = 0;
    if (typeof p[m].melhorNota !== 'number') p[m].melhorNota = null;
    if (p[m].exame !== 'aprovado' && p[m].exame !== 'reprovado') p[m].exame = null;
  }
  return p;
}
function exameAprovado(modId) { return loadProgress()[modId].exame === 'aprovado'; }
function melhorNota(modId) { return loadProgress()[modId].melhorNota; }
function totalComExame() {
  let n = 0;
  for (let m = 1; m <= TOTAL_MODULES; m++) if (temExame(m)) n++;
  return n;
}
function examesAprovados() {
  let n = 0;
  for (let m = 1; m <= TOTAL_MODULES; m++) if (temExame(m) && exameAprovado(m)) n++;
  return n;
}
function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
}
function marcarLida(modId, idx) {
  const p = loadProgress();
  if (p[modId].lidas.indexOf(idx) === -1) { p[modId].lidas.push(idx); saveProgress(p); }
}
function lidasDe(modId) {
  const p = loadProgress();
  const total = nAulas(modId);
  return p[modId].lidas.filter(i => i >= 0 && i < total).length;
}
function moduloConcluido(modId) {
  return temConteudo(modId) && lidasDe(modId) >= nAulas(modId);
}
function totalConcluidos() {
  let n = 0;
  for (let m = 1; m <= TOTAL_MODULES; m++) if (moduloConcluido(m)) n++;
  return n;
}

/* ───────── sessão do aluno ───────── */
let AL = { logado: false, nome: '' };
try { const raw = localStorage.getItem(ALUNO_KEY); if (raw) AL = Object.assign(AL, JSON.parse(raw) || {}); } catch (e) {}
if (!AL.nome) { const antigo = localStorage.getItem(NAME_KEY); if (antigo) AL.nome = antigo; }
function saveAluno() { try { localStorage.setItem(ALUNO_KEY, JSON.stringify(AL)); } catch (e) {} }

function doLogin() {
  const el = document.getElementById('li-mail');
  const mail = ((el && el.value) || '').trim();
  const guardado = localStorage.getItem(NAME_KEY);
  AL.logado = true;
  AL.nome = guardado || (mail ? mail.split('@')[0] : '') || 'Aluno';
  localStorage.setItem(NAME_KEY, AL.nome);
  saveAluno();
  renderAluno();
}
function doLogout() { AL.logado = false; saveAluno(); nav('aluno'); renderAluno(); }
function editarNome() {
  const v = prompt('O seu nome completo (é o que aparece no certificado):', AL.nome || '');
  if (v === null) return;
  const nome = v.trim();
  if (!nome) { alert('Por favor, escreva o seu nome.'); return; }
  AL.nome = nome; localStorage.setItem(NAME_KEY, nome); saveAluno();
  renderAluno();
}

/* ═══════════════════════════════════════════════════════════════
   MODELOS DE PÁGINA
   ═══════════════════════════════════════════════════════════════ */
const CAPA = 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1200&q=80';

const HTML_FOOTER = `<footer>
    <div class="container">
        <div class="footer-flex">
            <div class="footer-col">
                <h5>OAKEN ADM</h5>
                <p>Formação técnica em administração de empresas, com o vocabulário, as entidades e as rotinas de escritório de Angola.</p>
                <div class="social-links" style="margin-top:15px;">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h5>Contacto</h5>
                <p><i class="fab fa-whatsapp" style="color:var(--secondary);"></i> <a href="https://wa.me/351913388794">+351 913 388 794</a></p>
                <p><i class="fas fa-map-marker-alt"></i> Talatona, Luanda, Angola</p>
            </div>
            <div class="footer-col">
                <h5>Links Rápidos</h5>
                <p><a onclick="nav('modulos')" style="cursor:pointer">Módulos</a></p>
                <p><a onclick="nav('aluno')" style="cursor:pointer">Área do Aluno</a></p>
                <p><a onclick="nav('certificado')" style="cursor:pointer">Certificado</a></p>
                <p><a href="../index.html">Todos os cursos Oaken</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 Oaken Cursos. Todos os direitos reservados. | Curso Técnico Administrativo — Edição Angola.
        </div>
    </div>
</footer>`;

function htmlHome() {
  const cards = [];
  for (let m = 1; m <= TOTAL_MODULES; m++) {
    cards.push(`<div class="module-card"><span class="mod-num">Módulo ${m}</span><h3>${moduleTitle(m)}</h3><p>${resumoModulo(m)}</p></div>`);
  }
  return `<section class="hero">
    <div class="container hero-flex">
        <div class="hero-content">
            <div class="floating-badge"><i class="fas fa-folder-open"></i> Formação Técnica Profissionalizante</div>
            <h1><span>Técnico Administrativo</span> — Edição Angola</h1>
            <div class="sub-title">Curso Oaken Cursos</div>
            <p>A profissão de escritório de ponta a ponta: <strong>rotinas administrativas, pessoal, compras, armazém, documentação e obrigações da empresa</strong>, com o vocabulário e as entidades de Angola.</p>

            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">${STATS.modulesReady}</span>
                    <span class="stat-label">Módulos Disponíveis</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${STATS.lessons}</span>
                    <span class="stat-label">Aulas Detalhadas</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${STATS.hours}</span>
                    <span class="stat-label">Horas de Formação</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${TOTAL_MODULES}</span>
                    <span class="stat-label">Módulos no Programa</span>
                </div>
            </div>

            <div class="hero-badges">
                <span><i class="fas fa-check-circle"></i> Recursos Humanos</span>
                <span><i class="fas fa-check-circle"></i> Contabilidade</span>
                <span><i class="fas fa-check-circle"></i> Compras e Armazém</span>
                <span><i class="fas fa-check-circle"></i> Qualidade</span>
            </div>

            <a href="https://wa.me/351913388794" class="cta-hero" target="_blank">
                <i class="fab fa-whatsapp"></i> Falar sobre a inscrição
            </a>

            <div class="disclaimer-box">
                <i class="fas fa-exclamation-triangle"></i>
                <strong>⚠️ Curso 100% teórico.</strong> Os módulos 1 e 2 do programa estão em produção e ainda não têm aulas nem exame na plataforma.
            </div>
        </div>
        <div class="hero-image">
            <img src="${CAPA}" alt="Escritório administrativo" style="background:#0B1F3A;padding:10px;border-radius:20px;width:100%;height:auto;object-fit:cover;">
            <p style="font-size:12px;margin-top:10px;opacity:0.5;">*Imagem ilustrativa</p>
        </div>
    </div>
</section>

<section class="quick-stats">
    <div class="container">
        <div class="quick-stats-grid">
            <div class="quick-stat-item"><span class="number">${TOTAL_MODULES}</span><span class="label">Módulos no Programa</span></div>
            <div class="quick-stat-item"><span class="number">${STATS.modulesReady}</span><span class="label">Módulos com Aulas</span></div>
            <div class="quick-stat-item"><span class="number">${STATS.lessons}</span><span class="label">Aulas Detalhadas</span></div>
            <div class="quick-stat-item"><span class="number">${STATS.hours}</span><span class="label">Horas de Formação</span></div>
        </div>
    </div>
</section>

<section class="modules" id="modules">
    <div class="container">
        <h2 class="section-title">O que vai aprender <span>no curso</span></h2>
        <p class="section-sub">${TOTAL_MODULES} módulos no programa, ${STATS.lessons} aulas já disponíveis na plataforma. Uma hora de formação por aula.</p>
        <div class="modules-grid">${cards.join('')}</div>
        <p style="text-align:center;margin-top:26px;"><a onclick="nav('modulos')" style="cursor:pointer;color:var(--secondary);font-weight:700;">Ver o programa aula a aula &rarr;</a></p>
    </div>
</section>

<section class="differentials" id="differentials">
    <div class="container">
        <h2 class="section-title">Porquê este <span>curso</span></h2>
        <p class="section-sub">Feito para quem trabalha, ou quer trabalhar, num escritório em Angola.</p>
        <div class="diff-grid">
            <div class="diff-item"><i class="fas fa-location-dot"></i><h4>Contexto angolano</h4><p>As aulas falam das entidades, das rotinas e do mercado de trabalho de Angola, não de exemplos importados.</p></div>
            <div class="diff-item"><i class="fas fa-book-open"></i><h4>${STATS.lessons} aulas escritas</h4><p>Conteúdo em texto, para ler ao seu ritmo, rever e pesquisar. Sem dependência de vídeo.</p></div>
            <div class="diff-item"><i class="fas fa-diagram-project"></i><h4>Do escritório à gestão</h4><p>Começa nas rotinas administrativas e vai até compras, armazém, qualidade, tecnologia e empreendedorismo.</p></div>
            <div class="diff-item"><i class="fas fa-mobile-screen"></i><h4>Estuda no telemóvel</h4><p>A Área do Aluno funciona no telemóvel e guarda o seu progresso neste dispositivo.</p></div>
        </div>
    </div>
</section>

<section class="pricing" id="pricing">
    <div class="container">
        <div class="pricing-box">
            <h2 style="font-size:28px;">Invista na sua carreira</h2>
            <span class="old-price">Antes 450.000 Kz</span>
            <span class="new-price">350.000 Kz</span>
            <span class="price-detail">Condições de pagamento faseado disponíveis — fale connosco</span>
            <p style="margin:10px 0;font-size:16px;opacity:0.9;"><i class="fas fa-check-circle" style="color:var(--secondary);"></i> ${STATS.lessons} aulas · ${STATS.hours} horas de formação</p>
            <p style="margin:10px 0;font-size:16px;opacity:0.9;"><i class="fas fa-check-circle" style="color:var(--secondary);"></i> Certificado de conclusão</p>
            <a href="https://wa.me/351913388794" class="cta-hero" target="_blank"><i class="fab fa-whatsapp"></i> Garantir a minha vaga</a>
        </div>
    </div>
</section>

<section class="faq" id="home-faq">
    <div class="container">
        <h2 class="section-title">Perguntas <span>Frequentes</span></h2>
        <p class="section-sub">Tire as suas dúvidas sobre o curso Técnico Administrativo.</p>
        <div class="faq-grid">
            <div class="faq-item">
                <h4>Preciso de experiência prévia? <i class="fas fa-chevron-down"></i></h4>
                <div class="answer">Não. O curso começa nos fundamentos da administração e avança gradualmente até temas de gestão.</div>
            </div>
            <div class="faq-item">
                <h4>O curso está completo? <i class="fas fa-chevron-down"></i></h4>
                <div class="answer">Estão disponíveis ${STATS.modulesReady} dos ${TOTAL_MODULES} módulos do programa, com ${STATS.lessons} aulas e exame em cada um. Os módulos 1 e 2 estão em produção.</div>
            </div>
            <div class="faq-item">
                <h4>Como é contada a carga horária? <i class="fas fa-chevron-down"></i></h4>
                <div class="answer">Uma hora de formação por aula. Com ${STATS.lessons} aulas disponíveis, são ${STATS.hours} horas.</div>
            </div>
            <div class="faq-item">
                <h4>Há exames? <i class="fas fa-chevron-down"></i></h4>
                <div class="answer">Sim. Cada módulo com aulas tem um exame de ${QUESTIONS_PER_EXAM} questões sorteadas do banco do módulo, com ${EXAM_DURATION_MIN} minutos de duração e ${PASS_PCT}% de acertos para aprovar. Ao esgotar o tempo a prova é entregue automaticamente e as respostas certas ficam à vista. Pode repetir as vezes que quiser.</div>
            </div>
            <div class="faq-item">
                <h4>O curso é 100% online? <i class="fas fa-chevron-down"></i></h4>
                <div class="answer">Sim. Estuda ao seu ritmo, no computador ou no telemóvel. O progresso fica guardado neste dispositivo.</div>
            </div>
            <div class="faq-item">
                <h4>Onde vejo os outros cursos? <i class="fas fa-chevron-down"></i></h4>
                <div class="answer">No <a href="../index.html" style="color:var(--secondary);font-weight:700;">portal Oaken Cursos</a>, com o catálogo completo.</div>
            </div>
        </div>
    </div>
</section>`;
}

function htmlModulos() {
  let blocos = '';
  for (let m = 1; m <= TOTAL_MODULES; m++) {
    const n = nAulas(m);
    blocos += `<div class="module-full" data-mod="${m}" onclick="toggleModule(${m})">
            <div class="module-full-head">
                <div>
                    <span class="mod-tag">Módulo ${m}${n ? ' · ' + n + ' aulas · ' + n + 'h' : ' · em preparação'}</span>
                    <h3>${moduleTitle(m)}</h3>
                    <p>${resumoModulo(m)}</p>
                </div>
                <span class="module-toggle">&#9662;</span>
            </div>
            <div class="module-body" id="mbody-${m}"></div>
        </div>`;
  }
  return `<section class="page-hero">
    <div class="container">
        <h1>Os <span>${TOTAL_MODULES} Módulos</span> do Curso</h1>
        <p>Programa completo do curso <strong>Técnico Administrativo — Edição Angola</strong>. ${STATS.lessons} aulas disponíveis, uma hora de formação por aula.</p>
    </div>
</section>

<section class="modules-page">
    <div class="container">${blocos}</div>
</section>`;
}

/* ═══════════════════════════════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════════════════════════════ */
const ROTAS = ['home', 'modulos', 'aluno', 'certificado', 'verificar'];
let vistaActual = '';

function nav(rota) { location.hash = rota; }
function jump(id) {
  setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 80);
}
function marcarNav(rota) {
  document.querySelectorAll('#mainNav a[data-r]').forEach(a => {
    a.classList.toggle('active', a.dataset.r === rota);
  });
}

function router() {
  const h = (location.hash || '#home').slice(1);
  if (h.startsWith('modulo-')) {
    const n = parseInt(h.split('-')[1], 10);
    return renderModulo(n);
  }
  if (ROTAS.indexOf(h) !== -1) {
    switch (h) {
      case 'modulos':     return renderModulos();
      case 'aluno':       return renderAluno();
      case 'certificado': return renderCertificado();
      case 'verificar':   return renderVerificar();
      default:            return renderHome();
    }
  }
  if (vistaActual !== 'home') renderHome();
  jump(h);
}
window.addEventListener('hashchange', router);

function abrirVista(nome, html, scroll) {
  // O modal do exame vive fora do #app: se ficasse aberto, sobrepunha-se
  // à vista nova. Fecha-se em silêncio a cada mudança de rota.
  if (typeof fecharExameSilencioso === 'function') fecharExameSilencioso();
  vistaActual = nome;
  marcarNav(nome);
  app.innerHTML = html;
  document.getElementById('siteFooter').innerHTML = HTML_FOOTER;
  if (scroll !== false) window.scrollTo(0, 0);
}

function renderHome() {
  abrirVista('home', htmlHome());
  app.querySelectorAll('.faq-item h4').forEach(item => {
    item.addEventListener('click', function () { this.closest('.faq-item').classList.toggle('active'); });
  });
}

/* ───────── #modulos — catálogo com acordeão ───────── */
function renderModulos() {
  abrirVista('modulos', '<div class="pg-mod">' + htmlModulos() + '</div>');
}

function renderModuleBody(modId) {
  const body = document.getElementById('mbody-' + modId);
  if (!body || body.dataset.rendered) return;
  const mod = modulo(modId);
  if (!mod || !mod.lessons.length) {
    body.innerHTML = '<p style="padding:10px 0;color:#64748B;">Conteúdo em preparação.</p>';
    body.dataset.rendered = '1';
    return;
  }
  let html = mod.lessons.map(l => `
    <div class="lesson-block">
      <div class="lesson-title">${l.title}</div>
      <div class="lesson-content">${l.content}</div>
    </div>`).join('');
  html += `
    <div class="exam-cta">
      <a onclick="event.stopPropagation();nav('modulo-${modId}')" style="cursor:pointer">Estudar o Módulo ${modId} na Área do Aluno &rarr;</a>
    </div>`;
  body.innerHTML = html;
  body.dataset.rendered = '1';
}

function toggleModule(modId) {
  const card = document.querySelector('.module-full[data-mod="' + modId + '"]');
  const body = document.getElementById('mbody-' + modId);
  if (!card || !body) return;
  if (body.classList.contains('open')) {
    body.classList.remove('open');
    card.classList.remove('open');
  } else {
    renderModuleBody(modId);
    body.classList.add('open');
    card.classList.add('open');
  }
}

/* ═══════════════════════════════════════════════════════════════
   ÁREA DO ALUNO
   ═══════════════════════════════════════════════════════════════ */
function renderLogin() {
  abrirVista('aluno', `
  <div class="aluno-view">
    <div class="login-wrap"><div class="login-box">
      <div class="login-icon"><i class="fas fa-folder-open"></i></div>
      <h2>Área do Aluno</h2>
      <p>Entre com as suas credenciais para aceder à plataforma de estudos.</p>
      <div class="field"><label>E-mail</label><input type="email" id="li-mail" placeholder="seuemail@exemplo.com"></div>
      <div class="field"><label>Senha</label><input type="password" id="li-pass" placeholder="••••••••"></div>
      <button class="btn-login" onclick="doLogin()"><i class="fas fa-right-to-bracket"></i> Entrar na plataforma</button>
      <div class="login-alt">Ainda não é aluno? <a onclick="nav('home');jump('pricing')">Inscreva-se aqui</a></div>
      <div class="demo-hint"><i class="fas fa-circle-info"></i> Use qualquer e-mail e senha para aceder à demonstração. O seu progresso fica guardado neste dispositivo.</div>
    </div></div>
  </div>`);
  marcarNav('aluno');
  const inp = document.getElementById('li-pass');
  if (inp) inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });
}

function dashShell(corpo) {
  return `
  <div class="aluno-view">
    <div class="dash-header"><div class="container dash-in">
      <div><h1>Olá, ${AL.nome}! 👋</h1><p>Técnico Administrativo — Edição Angola</p></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn-logout" onclick="editarNome()"><i class="fas fa-user-pen"></i> Editar nome</button>
        <button class="btn-logout" onclick="doLogout()"><i class="fas fa-right-from-bracket"></i> Sair</button>
      </div>
    </div></div>
    <div class="dash-body"><div class="container">
      <div class="dash-tabs">
        <button class="dash-tab active" onclick="nav('aluno')"><i class="fas fa-table-cells"></i> Meus módulos</button>
        <button class="dash-tab" onclick="nav('modulos')"><i class="fas fa-list"></i> Programa completo</button>
      </div>
      ${corpo}
    </div></div>
  </div>`;
}

function renderAluno() {
  if (!AL.logado) return renderLogin();

  const concluidos = totalConcluidos();
  const base = STATS.modulesReady || 1;
  const pct = Math.round(concluidos / base * 100);

  let lista = '';
  [1, 2, 3, 4].forEach(function (f) {
    lista += `<div class="phase-head">${FASES[f]}</div><div class="mod-list">`;
    FASE_MODULOS[f].forEach(function (m) {
      const total = nAulas(m);
      const lidas = lidasDe(m);
      let st, ic, bd, clique;
      if (!total) {
        st = 'preparacao';
        ic = '<i class="fas fa-hourglass-half"></i>';
        bd = 'Em preparação';
        clique = '';
      } else if (lidas >= total) {
        st = 'done';
        ic = '<i class="fas fa-check"></i>';
        bd = `Concluído · ${lidas}/${total}`;
        clique = ` onclick="nav('modulo-${m}')"`;
      } else {
        st = 'unlocked';
        ic = m;
        bd = lidas ? `Continuar · ${lidas}/${total}` : 'Começar →';
        clique = ` onclick="nav('modulo-${m}')"`;
      }
      const horas = total ? ` · ${total}h` : '';
      const badgeCls = st === 'preparacao' ? 'locked' : st;
      const nota = melhorNota(m);
      const linhaExame = !temExame(m)
        ? 'exame em preparação'
        : (exameAprovado(m)
            ? `exame aprovado · ${nota}%`
            : (nota !== null ? `exame: melhor nota ${nota}%` : `exame disponível · ${PASS_PCT}% para aprovar`));
      lista += `<div class="mod-card ${st}"${clique}>
        <div class="mod-ic ${st}">${ic}</div>
        <div class="mod-info"><h4>Módulo ${m} — ${moduleTitle(m)}</h4>
        <span>${total ? total + ' aulas' + horas : 'aulas em produção'} · ${linhaExame}</span></div>
        <span class="mod-badge ${badgeCls}">${bd}</span></div>`;
    });
    lista += `</div>`;
  });

  const corpo = `
    <div class="progress-card">
      <div class="pc-head"><h3><i class="fas fa-chart-line" style="color:var(--secondary)"></i> O seu progresso</h3><span class="pct">${pct}%</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
      <div class="prog-stats">
        <div><b>${concluidos}</b> de <b>${STATS.modulesReady}</b> módulos concluídos</div>
        <div><b>${STATS.lessons}</b> aulas no curso</div>
        <div><b>${STATS.hours}h</b> de carga horária</div>
        <div><b>${examesAprovados()}</b> de <b>${totalComExame()}</b> exames aprovados</div>
      </div>
    </div>
    ${lista}
    <div class="cert-cta${concluidos >= STATS.modulesReady ? ' show' : ''}" id="certCta">
      <h2>🎓 Parabéns! Concluiu os ${STATS.modulesReady} módulos disponíveis.</h2>
      <p>Já pode gerar o seu certificado de conclusão do curso Técnico Administrativo.</p>
      <a onclick="nav('certificado')" style="cursor:pointer">Gerar Certificado</a>
    </div>`;

  abrirVista('aluno', dashShell(corpo));
  marcarNav('aluno');
}

/* ───────── #modulo-N ───────── */
let currentModuleId = null;
let currentLessonIdx = 0;

function renderModulo(m) {
  if (!AL.logado) return renderLogin();
  const mod = modulo(m);
  if (!mod || !mod.lessons.length) {
    alert('As aulas deste módulo ainda estão em produção.');
    return nav('aluno');
  }
  currentModuleId = m;
  currentLessonIdx = 0;

  const anterior = m > 1 && temConteudo(m - 1) ? m - 1 : null;
  const seguinte = m < TOTAL_MODULES && temConteudo(m + 1) ? m + 1 : null;

  abrirVista('modulo-' + m, `
  <div class="aluno-view">
    <section class="mod-hero" id="modHero">
        <div class="container-sm mh-in">
            <div class="mh-txt">
                <div class="mod-phase"><i class="fas fa-layer-group"></i> <span>Módulo ${m} de ${TOTAL_MODULES}</span></div>
                <h1>Módulo ${m} — <span>${mod.title}</span></h1>
                <p>Estude todas as aulas deste módulo. O seu progresso de leitura fica guardado neste dispositivo.</p>
                <div class="mod-meta">
                    <span class="meta-tag"><i class="fas fa-book-open"></i> ${mod.lessons.length} Aulas</span>
                    <span class="meta-tag"><i class="fas fa-clock"></i> ${mod.hours} Horas</span>
                    ${temExame(m)
                      ? `<span class="meta-tag"><i class="fas fa-percent"></i> ${PASS_PCT}% para aprovar</span>`
                      : `<span class="meta-tag"><i class="fas fa-hourglass-half"></i> Exame em preparação</span>`}
                </div>
            </div>
        </div>
    </section>
    <section class="mod-progress" id="modProgressBar">
        <div class="container-sm mp-in">
            <span class="mp-lbl">Progresso do módulo:</span><div class="dots" id="dots"></div>
        </div>
    </section>
    <section class="main-section">
      <div class="container">
        <div id="moduloView">
            <div class="tabs" id="tabs"></div>
            <div class="mod-layout">
                <div id="lessonArea"></div>
                <div class="sidebar">
                    <div class="sc"><h4><i class="fas fa-list" style="color:var(--secondary)"></i> Aulas</h4><div id="slinks"></div></div>
                    <div class="sc"><h4><i class="fas fa-trophy" style="color:var(--secondary)"></i> Avaliação</h4>
                        ${temExame(m)
                          ? `<p style="font-size:12px;color:var(--gray);margin-bottom:10px">${QUESTIONS_PER_EXAM} questões sorteadas · ${EXAM_DURATION_MIN} minutos · ${PASS_PCT}% para aprovar.</p>
                             <div class="sbtn orange" onclick="startExam(${m})"><i class="fas fa-trophy"></i> Fazer exame</div>`
                          : `<p style="font-size:12px;color:var(--gray);margin-bottom:10px">O banco de questões deste módulo ainda está a ser produzido.</p>
                             <div class="sbtn disabled" aria-disabled="true">Exame em preparação</div>`}
                    </div>
                    <div class="sc"><h4><i class="fas fa-route" style="color:var(--secondary)"></i> Navegação</h4>
                        <div id="navButtons">
                          ${anterior ? `<div class="sbtn grey" onclick="nav('modulo-${anterior}')"><i class="fas fa-arrow-left"></i> Módulo ${anterior}</div>` : ''}
                          <div class="sbtn grey" onclick="nav('aluno')"><i class="fas fa-table-cells"></i> Todos os módulos</div>
                          ${seguinte ? `<div class="sbtn orange" onclick="nav('modulo-${seguinte}')">Módulo ${seguinte} <i class="fas fa-arrow-right"></i></div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>`);

  const tabs = document.getElementById('tabs'), dots = document.getElementById('dots'), sl = document.getElementById('slinks');
  mod.lessons.forEach((lesson, i) => {
    const limpo = lesson.title.replace(/^\d+\.\d+\s*/, '');
    const t = document.createElement('button'); t.className = 'tb'; t.id = 'tb' + i;
    t.textContent = (i + 1) + '. ' + limpo.split(' ').slice(0, 3).join(' ') + '…';
    t.onclick = () => goToLesson(i); tabs.appendChild(t);
    const d = document.createElement('div'); d.className = 'dot'; d.id = 'dt' + i; d.textContent = i + 1;
    d.onclick = () => goToLesson(i); dots.appendChild(d);
    const s = document.createElement('div'); s.className = 'sl'; s.id = 'sl' + i;
    s.innerHTML = `<span class="sn">${i + 1}</span>${lesson.title}`; s.onclick = () => goToLesson(i); sl.appendChild(s);
  });

  goToLesson(0, true);
}

function goToLesson(i, primeira) {
  const mod = modulo(currentModuleId);
  if (!mod) return;
  const lesson = mod.lessons[i];
  if (!lesson) return;
  currentLessonIdx = i;
  marcarLida(currentModuleId, i);

  const ultima = i >= mod.lessons.length - 1;
  const seguinte = currentModuleId < TOTAL_MODULES && temConteudo(currentModuleId + 1) ? currentModuleId + 1 : null;

  document.getElementById('lessonArea').innerHTML = `
    <div class="lesson">
      <div class="ltitle">${lesson.title}</div>
      <div class="lsub"><span><i class="fas fa-book"></i> Módulo ${currentModuleId} · ${mod.title}</span></div>
      <div class="lesson-content">${lesson.content}</div>
      <div class="lnav">
        <button class="nb np" onclick="goToLesson(${i - 1})" ${i === 0 ? 'disabled' : ''}><i class="fas fa-arrow-left"></i> Anterior</button>
        ${!ultima
          ? `<button class="nb nn" onclick="goToLesson(${i + 1})">Próxima aula <i class="fas fa-arrow-right"></i></button>`
          : (temExame(currentModuleId)
              ? `<button class="nb nn" onclick="startExam(${currentModuleId})"><i class="fas fa-trophy"></i> Fazer exame do módulo</button>`
              : (seguinte
                  ? `<button class="nb nn" onclick="nav('modulo-${seguinte}')">Módulo ${seguinte} <i class="fas fa-arrow-right"></i></button>`
                  : `<button class="nb nn" onclick="nav('aluno')"><i class="fas fa-table-cells"></i> Voltar aos módulos</button>`))}
      </div>
    </div>`;

  mod.lessons.forEach((_, j) => {
    document.getElementById('tb' + j).classList.toggle('active', j === i);
    document.getElementById('dt' + j).className = 'dot ' + (j < i ? 'done' : (j === i ? 'active' : 'todo'));
    document.getElementById('sl' + j).classList.toggle('act', j === i);
  });

  if (primeira) window.scrollTo(0, 0);
  else window.scrollTo({ top: document.getElementById('modProgressBar').offsetTop, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════════════
   CERTIFICADO
   ═══════════════════════════════════════════════════════════════ */
let CURRENT = { nome: '', nota: '', acertos: '', total: '', codigo: '', data: '' };

function renderCertificado() {
  const feitos = totalConcluidos();
  if (feitos < STATS.modulesReady) {
    abrirVista('certificado', `
      <div class="cert-locked">
        <i class="fas fa-lock"></i>
        <h2>Certificado ainda bloqueado</h2>
        <p>O certificado só fica disponível depois de concluir a leitura dos <strong>${STATS.modulesReady} módulos</strong> com conteúdo disponível.
        Já concluiu <strong>${feitos}</strong>.</p>
        <button onclick="nav('aluno')"><i class="fas fa-table-cells"></i> Ir para a Área do Aluno</button>
      </div>`);
    return;
  }
  abrirVista('certificado', '<div class="cert-view">' + HTML_CERT + '</div>');
  initCert();
}

function formatDate() {
  const d = new Date();
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
function formatDateShort() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}
function randomCode() { return 'OAKEN-ADM-' + Math.random().toString(36).substr(2, 9).toUpperCase(); }

function verifyBaseUrl() { return location.href.split('#')[0].split('?')[0]; }
function buildVerifyUrl() {
  const p = new URLSearchParams({
    codigo: CURRENT.codigo,
    nome: CURRENT.nome || 'Aluno Oaken',
    nota: CURRENT.nota || '0',
    acertos: CURRENT.acertos || '0',
    total: CURRENT.total || String(STATS.modulesReady),
    data: CURRENT.data,
    horas: STATS.hours,
    modulos: STATS.modulesReady
  });
  return verifyBaseUrl() + '?' + p.toString() + '#verificar';
}

function renderAppendix() {
  const syllabus = getCourseSyllabus().filter(m => m.hours > 0);
  document.getElementById('certHours').textContent = STATS.hours;
  document.getElementById('certModules').textContent = STATS.modulesReady;
  document.getElementById('certLessons').textContent = STATS.lessons;
  document.getElementById('apxHours').textContent = STATS.hours;
  document.getElementById('apxModules').textContent = STATS.modulesReady;
  document.getElementById('apxLessons').textContent = STATS.lessons;
  document.getElementById('apxModuleGrid').innerHTML = syllabus.map(m => `
    <div class="cert-appendix-row">
      <span class="apx-id">${m.id}.</span>
      <span class="apx-title">${m.title}</span>
      <span class="apx-hours">${m.hours}h</span>
    </div>`).join('');
}

function renderQR() {
  const box = document.getElementById('qrBox');
  if (!box) return;
  const url = buildVerifyUrl();
  if (window.QRCode) {
    box.innerHTML = '';
    const canvas = document.createElement('canvas');
    box.appendChild(canvas);
    QRCode.toCanvas(canvas, url, { width: 150, margin: 0, color: { dark: '#0B1F3A', light: '#FFFFFF' } }, function (err) {
      if (err) box.innerHTML = '<div style="font-size:9px;color:#94A3B8;padding:4px;">' + CURRENT.codigo + '</div>';
    });
  } else {
    box.innerHTML = '<div style="font-size:9px;color:#94A3B8;padding:4px;word-break:break-all;">' + CURRENT.codigo + '</div>';
  }
}

function updateCert() {
  const input = document.getElementById('studentName');
  if (!input) return;
  const name = input.value.trim();
  CURRENT.nome = name;
  document.getElementById('certName').textContent = name ? name : '— aguardando —';
  document.getElementById('apxName').textContent = name ? name : '— aguardando —';
  localStorage.setItem(NAME_KEY, name);
  renderQR();
}

function initCert() {
  const feitos = totalConcluidos();
  document.getElementById('certDate').textContent = formatDate();
  CURRENT.data = formatDateShort();

  let code = localStorage.getItem('oaken_adm_cert_code');
  if (!code) { code = randomCode(); localStorage.setItem('oaken_adm_cert_code', code); }
  const fullCode = code + '-' + new Date().getFullYear();
  document.getElementById('certCode').textContent = fullCode;
  document.getElementById('apxCode').textContent = fullCode;
  CURRENT.codigo = fullCode;

  renderAppendix();

  const pct = Math.round(feitos / (STATS.modulesReady || 1) * 100);
  document.getElementById('certScore').textContent = pct + '%';
  document.getElementById('certRatio').textContent = feitos;
  document.getElementById('certTotalQ').textContent = STATS.modulesReady;
  CURRENT.nota = String(pct);
  CURRENT.acertos = String(feitos);
  CURRENT.total = String(STATS.modulesReady);

  const savedName = localStorage.getItem(NAME_KEY);
  if (savedName) document.getElementById('studentName').value = savedName;
  updateCert();
  document.getElementById('studentName').addEventListener('input', updateCert);
}

/* ═══════════════════════════════════════════════════════════════
   VERIFICAÇÃO DO CERTIFICADO
   ═══════════════════════════════════════════════════════════════ */
function renderVerificar() {
  abrirVista('verificar', '<div class="verify-view">' + HTML_VERIFY + '</div>');
  const p = new URLSearchParams(window.location.search);
  if (!p.get('codigo')) {
    const st = app.querySelector('.verify-status');
    st.textContent = 'Verificação de Certificado';
    st.style.color = '#64748B';
    app.querySelector('.verify-badge circle').setAttribute('fill', '#CBD5E1');
    app.querySelector('.verify-title').textContent = 'Nenhum certificado para verificar';
    app.querySelector('.verify-name').previousElementSibling.textContent =
      'Para verificar um certificado, digitalize o código QR impresso no próprio certificado.';
  }
  document.getElementById('vNome').textContent = p.get('nome') || '—';
  document.getElementById('vNota').textContent = (p.get('nota') || '—') + '%';
  document.getElementById('vAcertos').textContent = (p.get('acertos') || '—') + ' / ' + (p.get('total') || '—');
  document.getElementById('vData').textContent = p.get('data') || '—';
  document.getElementById('vCodigo').textContent = p.get('codigo') || '—';
  document.getElementById('vHoras').textContent = p.get('horas') ? p.get('horas') + ' horas' : '—';
  document.getElementById('vModulos').textContent = p.get('modulos') || '—';
}

/* ═══════════════════════════════════════════════════════════════
   EXAME DE MÓDULO
   30 questões sorteadas do banco do módulo, 50 minutos, 70% para
   aprovar. Ao esgotar o tempo a prova é entregue automaticamente e
   as respostas certas ficam reveladas.
   ═══════════════════════════════════════════════════════════════ */
let currentQuestions = [];
let examTimerInterval = null;
let examTimedOut = false;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// Sorteia as questões e baralha também as opções de cada uma, para que
// o índice da resposta certa não seja decorável entre tentativas.
function buildExamQuestions(moduleId) {
  const pool = (typeof MODULE_QUESTIONS !== 'undefined' && MODULE_QUESTIONS[moduleId]) || [];
  const picked = shuffle(pool).slice(0, Math.min(QUESTIONS_PER_EXAM, pool.length));
  return picked.map(function (q) {
    const order = shuffle(q.options.map(function (_, i) { return i; }));
    return {
      id: q.id,
      text: q.text,
      options: order.map(function (i) { return q.options[i]; }),
      answer: order.indexOf(q.answer)
    };
  });
}

function examStateKey(moduleId) { return CURRENT_EXAM_KEY + '_' + moduleId; }
function getSavedExamState(moduleId) {
  try { return JSON.parse(localStorage.getItem(examStateKey(moduleId))); } catch (e) { return null; }
}
function saveExamState(moduleId, state) {
  try { localStorage.setItem(examStateKey(moduleId), JSON.stringify(state)); } catch (e) {}
}
function clearExamState(moduleId) {
  try { localStorage.removeItem(examStateKey(moduleId)); } catch (e) {}
}

function startExam(moduleId) {
  if (!temExame(moduleId)) {
    alert('O exame deste módulo ainda está em preparação.');
    return;
  }
  currentModuleId = moduleId;

  const saved = getSavedExamState(moduleId);
  if (saved && saved.questions && saved.questions.length) {
    currentQuestions = saved.questions;
  } else {
    currentQuestions = buildExamQuestions(moduleId);
    saveExamState(moduleId, {
      questions: currentQuestions,
      deadline: Date.now() + EXAM_DURATION_MIN * 60 * 1000,
      answers: {}
    });
  }

  document.getElementById('examView').classList.add('show');
  document.getElementById('examModNum').textContent = moduleId;
  document.getElementById('examModTitle').textContent = moduleTitle(moduleId);
  document.getElementById('totalCount').textContent = currentQuestions.length;
  document.getElementById('resultArea').innerHTML = '';

  renderExamQuestions();
  restoreSavedAnswers();
  startExamTimer();
}

function backToModules() {
  stopExamTimer();
  document.getElementById('examView').classList.remove('show');
  nav('aluno');
  renderAluno();
}

function fecharExameSilencioso() {
  stopExamTimer();
  const v = document.getElementById('examView');
  if (v) v.classList.remove('show');
}

function renderExamQuestions() {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';
  currentQuestions.forEach(function (q, idx) {
    const div = document.createElement('div');
    div.className = 'question-card';
    div.id = 'q' + q.id;
    const optionsHTML = q.options.map(function (opt, oi) {
      return '<label class="option" onclick="selOpt(this)"><input type="radio" name="q' + q.id +
             '" value="' + oi + '" onchange="onAnswerChange(' + q.id + ')"> ' + opt + '</label>';
    }).join('');
    div.innerHTML = '<div class="question-text">' + (idx + 1) + '. ' + q.text + '</div>' +
                    '<div class="options">' + optionsHTML + '</div>' +
                    '<div class="feedback-answer" id="fb' + q.id + '"></div>';
    container.appendChild(div);
  });
  updateExamProgress();
}

function restoreSavedAnswers() {
  const state = getSavedExamState(currentModuleId);
  if (!state || !state.answers) return;
  Object.keys(state.answers).forEach(function (qid) {
    const el = document.querySelector('input[name="q' + qid + '"][value="' + state.answers[qid] + '"]');
    if (el) { el.checked = true; el.closest('.option').classList.add('sel'); }
  });
  updateExamProgress();
}

function selOpt(el) {
  el.closest('.options').querySelectorAll('.option').forEach(function (o) { o.classList.remove('sel'); });
  el.classList.add('sel');
}

function onAnswerChange(qid) {
  const state = getSavedExamState(currentModuleId) || {
    questions: currentQuestions,
    deadline: Date.now() + EXAM_DURATION_MIN * 60 * 1000,
    answers: {}
  };
  if (!state.answers) state.answers = {};
  const selected = document.querySelector('input[name="q' + qid + '"]:checked');
  if (selected) state.answers[qid] = Number(selected.value);
  saveExamState(currentModuleId, state);
  updateExamProgress();
}

function updateExamProgress() {
  let answered = 0;
  currentQuestions.forEach(function (q) {
    if (document.querySelector('input[name="q' + q.id + '"]:checked')) answered++;
  });
  document.getElementById('answeredCount').textContent = answered;
  document.getElementById('progressFill').style.width =
    (currentQuestions.length ? answered / currentQuestions.length * 100 : 0) + '%';
}

function lockExam() {
  document.querySelectorAll('#questionsContainer input[type="radio"]').forEach(function (el) { el.disabled = true; });
  document.querySelectorAll('#questionsContainer .option').forEach(function (el) {
    el.onclick = null; el.style.cursor = 'default';
  });
}

function submitExam(forced) {
  let unanswered = 0;
  currentQuestions.forEach(function (q) {
    if (!document.querySelector('input[name="q' + q.id + '"]:checked')) unanswered++;
  });
  if (!forced && unanswered > 0) {
    alert(unanswered + ' questão(ões) sem resposta. Complete o exame antes de corrigir.');
    return;
  }

  stopExamTimer();
  lockExam();

  let correct = 0;
  currentQuestions.forEach(function (q) {
    const selEl = document.querySelector('input[name="q' + q.id + '"]:checked');
    const selected = selEl ? Number(selEl.value) : -1;
    const card = document.getElementById('q' + q.id);
    const fb = document.getElementById('fb' + q.id);
    if (selected === q.answer) {
      correct++;
      card.classList.add('correct');
      fb.textContent = '✅ Correto!';
      fb.className = 'feedback-answer correct';
    } else {
      card.classList.add('wrong');
      fb.textContent = '❌ Resposta correta: ' + q.options[q.answer];
      fb.className = 'feedback-answer wrong';
    }
  });

  const pct = Math.round((correct / currentQuestions.length) * 1000) / 10;
  const approved = !examTimedOut && pct >= PASS_PCT;

  const progress = loadProgress();
  progress[currentModuleId].tentativas++;
  if (progress[currentModuleId].melhorNota === null || pct > progress[currentModuleId].melhorNota) {
    progress[currentModuleId].melhorNota = pct;
  }
  progress[currentModuleId].exame = approved ? 'aprovado' : 'reprovado';
  saveProgress(progress);
  clearExamState(currentModuleId);

  document.getElementById('resultArea').innerHTML =
    (examTimedOut
      ? '<p style="text-align:center;color:#DC2626;font-weight:700;margin-bottom:16px;">⏱️ Tempo esgotado (' +
        EXAM_DURATION_MIN + ' min). O exame foi corrigido e marcado como reprovado automaticamente.</p>'
      : '') +
    '<div class="result-box ' + (approved ? 'approved' : 'failed') + '">' +
      '<div class="result-label">' + (approved ? '🎉 APROVADO' : '😞 REPROVADO') + '</div>' +
      '<div class="result-score">' + pct.toFixed(1) + '%</div>' +
      '<p>' + (approved
        ? 'Parabéns! Atingiu a nota mínima de ' + PASS_PCT + '%.'
        : 'Não atingiu os ' + PASS_PCT + '%. Reveja o módulo e tente novamente — as questões erradas estão marcadas acima.') +
      '</p>' +
      '<p><strong>Acertos: ' + correct + '/' + currentQuestions.length + '</strong></p>' +
      '<div class="btn-group"><button class="btn" onclick="backToModules()">← Voltar aos módulos</button></div>' +
    '</div>';
  document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function finalizarProva() {
  let unanswered = 0;
  currentQuestions.forEach(function (q) {
    if (!document.querySelector('input[name="q' + q.id + '"]:checked')) unanswered++;
  });
  const msg = unanswered > 0
    ? 'Tem ' + unanswered + ' questão(ões) sem resposta — elas vão contar como erradas. Quer mesmo finalizar a prova agora?'
    : 'Finalizar e corrigir a prova agora?';
  if (!confirm(msg)) return;
  examTimedOut = false;
  submitExam(true);
}

function formatCountdown(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return m + ':' + s;
}

function stopExamTimer() {
  if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
}

function startExamTimer() {
  examTimedOut = false;
  const state = getSavedExamState(currentModuleId);
  const deadline = (state && state.deadline) ? state.deadline : Date.now() + EXAM_DURATION_MIN * 60 * 1000;

  function tick() {
    const remaining = deadline - Date.now();
    const timerEl = document.getElementById('examTimer');
    if (remaining <= 0) {
      if (timerEl) timerEl.textContent = '00:00';
      stopExamTimer();
      examTimedOut = true;
      submitExam(true);
      return;
    }
    if (timerEl) timerEl.textContent = formatCountdown(remaining);
  }
  tick();
  examTimerInterval = setInterval(tick, 1000);
}

/* ───────── arranque ───────── */
router();
