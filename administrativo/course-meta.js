// Fonte unica dos numeros do curso Tecnico Administrativo.
// Carregar DEPOIS de modulos-data.js.
// Regra do projecto: aulas de 50 minutos (m.hours = round(m.lessons.length × 50/60)).

function getCourseStats() {
  const hasData = typeof COURSE_DATA !== 'undefined';
  const modules = hasData ? COURSE_DATA.length : 0;
  const lessons = hasData ? COURSE_DATA.reduce((s, m) => s + m.lessons.length, 0) : 0;
  const hours = hasData ? COURSE_DATA.reduce((s, m) => s + m.hours, 0) : 0;
  // Modulos que ja tem conteudo carregado (os modulos 1 e 2 ainda nao tem).
  const modulesReady = hasData ? COURSE_DATA.filter(m => m.lessons.length > 0).length : 0;
  return { modules, modulesReady, lessons, hours };
}

// Lista compacta { id, title, hours } para o anexo do certificado.
function getCourseSyllabus() {
  if (typeof COURSE_DATA === 'undefined') return [];
  return COURSE_DATA.map(m => ({ id: m.id, title: m.title, hours: m.hours }));
}
