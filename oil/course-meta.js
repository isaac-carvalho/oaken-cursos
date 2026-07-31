// Fonte única dos números do curso (módulos, aulas, horas, questões).
// Carregar DEPOIS de modulos-data.js em toda página que precise destes números,
// para nunca mais ter "15 módulos" escrito à mão em 5 sítios diferentes.
//
// TOTAL_QUESTIONS é o único valor que continua manual: mantenha-o igual ao
// tamanho real do array QUESTIONS em exame.html sempre que adicionar perguntas.
const TOTAL_QUESTIONS = 100;

function getCourseStats() {
  const hasData = typeof COURSE_DATA !== 'undefined';
  const modules = hasData ? COURSE_DATA.length : 0;
  const lessons = hasData ? COURSE_DATA.reduce((sum, m) => sum + m.lessons.length, 0) : 0;
  const hours = hasData ? COURSE_DATA.reduce((sum, m) => sum + m.hours, 0) : 0;
  return { modules, lessons, hours, questions: TOTAL_QUESTIONS };
}

// Lista compacta { id, title, hours } para uso no certificado (programa estudado).
function getCourseSyllabus() {
  if (typeof COURSE_DATA === 'undefined') return [];
  return COURSE_DATA.map(m => ({ id: m.id, title: m.title, hours: m.hours }));
}
