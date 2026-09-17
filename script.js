const people = [
  {id:'deming', name:'W. Edwards Deming', years:'1900-1993', country:'Estados Unidos', stream:'Estadistica', tag:'Pensamiento sistemico', philosophy:'La calidad nace del sistema de trabajo, no de la inspeccion masiva. La direccion debe reducir la variacion y conducir la mejora con una vision de largo plazo.', contributions:['Ciclo PDSA (Plan-Do-Study-Act), derivado del ciclo de Shewhart.','14 puntos para la gestion y Sistema de Conocimiento Profundo.','Difusion del control estadistico de procesos (SPC) en Japon y Estados Unidos.'], recognition:'Recibio la Segunda Orden del Tesoro Sagrado de Japon (1960), la Medalla Shewhart (1955) y la National Medal of Technology de Estados Unidos (1987). El Premio Deming lleva su nombre.', refs:[1,13], tool:'PDSA / control estadistico', use:'Mejora continua de procesos y liderazgo de calidad', year:1950},
  {id:'juran', name:'Joseph M. Juran', years:'1904-2008', country:'Rumania / Estados Unidos', stream:'Total', tag:'Gestion de la calidad', philosophy:'La calidad es adecuacion al uso. Se gestiona mediante planificacion, control y mejora; sus costos deben ser entendidos por la alta direccion.', contributions:['Trilogia de Juran: planificacion, control y mejora de la calidad.','Principio de Pareto aplicado a los pocos vitales y muchos triviales.','Concepto de costos de mala calidad y enfoque de cliente interno.'], recognition:'Recibio la Orden del Tesoro Sagrado de Japon (1981) y la National Medal of Technology de Estados Unidos (1992). La ASQ otorga la Juran Medal.', refs:[2,13], tool:'Trilogia de Juran / Pareto', use:'Planeacion estrategica y proyectos de mejora', year:1954},
  {id:'crosby', name:'Philip B. Crosby', years:'1926-2001', country:'Estados Unidos', stream:'Total', tag:'Prevencion', philosophy:'La calidad es conformidad con los requisitos y el estandar de desempeno es cero defectos. Prevenir cuesta menos que corregir.', contributions:['Cuatro absolutos de la calidad.','Programa Cero Defectos y los 14 pasos de mejoramiento.','Medicion de la calidad mediante el precio del incumplimiento.'], recognition:'Su mayor reconocimiento es su influencia en la gestion preventiva; la American Society for Quality (ASQ) denomina Crosby Medal a su premio para obras publicadas sobre calidad.', refs:[3,13], tool:'Cero defectos / costo de incumplimiento', use:'Prevencion de defectos y aseguramiento de calidad', year:1979},
  {id:'ishikawa', name:'Kaoru Ishikawa', years:'1915-1989', country:'Japon', stream:'Total', tag:'Participacion total', philosophy:'La calidad debe involucrar a todas las personas y extenderse a toda la empresa. Educar y hacer visibles las causas permite mejorar.', contributions:['Diagrama causa-efecto o espina de pescado.','Circulos de calidad y control de calidad en toda la empresa (CWQC).','Siete herramientas basicas de la calidad para resolver problemas.'], recognition:'Fue galardonado con el Premio Deming. La ASQ mantiene la Ishikawa Medal, dedicada a contribuciones en los aspectos humanos de la calidad.', refs:[4,13], tool:'Diagrama causa-efecto / 7 herramientas', use:'Analisis de causa raiz y equipos de mejora', year:1962},
  {id:'feigenbaum', name:'Armand V. Feigenbaum', years:'1922-2014', country:'Estados Unidos', stream:'Total', tag:'Calidad total', philosophy:'La calidad no es tarea de un departamento: es un sistema empresarial que integra diseño, compras, produccion y servicio para satisfacer al cliente.', contributions:['Formulo el Control Total de la Calidad (TQC).','Propuso los costos de calidad: prevencion, evaluacion y fallas.','Desarrollo el concepto de planta oculta: desperdicio causado por la mala calidad.'], recognition:'Recibio la National Medal of Technology de Estados Unidos, fue miembro de la National Academy of Engineering y miembro honorario de ASQ e IAQ.', refs:[5,13], tool:'TQC / costos de calidad', use:'Sistemas integrales y costos de no calidad', year:1951},
  {id:'taguchi', name:'Genichi Taguchi', years:'1924-2012', country:'Japon', stream:'Estadistica', tag:'Diseño robusto', philosophy:'La calidad se diseña desde el producto y el proceso. Toda desviacion respecto al valor objetivo genera una perdida para la sociedad.', contributions:['Funcion de perdida de Taguchi.','Diseño robusto y control de parametros.','Arreglos ortogonales y diseño de experimentos para reducir variacion.'], recognition:'Recibio el Premio Deming en dos ocasiones (1951 y 1954). Su metodo obtuvo amplia difusion industrial y academica a nivel internacional.', refs:[6,13], tool:'Funcion de perdida / DOE', use:'Diseño de producto, tolerancias y experimentacion', year:1951},
  {id:'shewhart', name:'Walter A. Shewhart', years:'1891-1967', country:'Estados Unidos', stream:'Estadistica', tag:'Control de variacion', philosophy:'La calidad economica se logra distinguiendo causas comunes y causas especiales de variacion, antes de que el proceso produzca resultados fuera de control.', contributions:['Creacion de las graficas o cartas de control.','Base metodologica del control estadistico de procesos.','Ciclo de especificacion-produccion-inspeccion, antecedente de PDSA.'], recognition:'La ASQ lo reconoce como padre del control moderno de calidad y su primer miembro honorario. La Medalla Shewhart premia liderazgo tecnico en calidad.', refs:[7,13], tool:'Carta de control / causas de variacion', use:'Estabilidad de procesos y SPC en planta', year:1924},
  {id:'shingo', name:'Shigeo Shingo', years:'1909-1990', country:'Japon', stream:'Lean', tag:'Cero errores', philosophy:'Los errores humanos son inevitables; los defectos no tienen por que serlo si el proceso se disena para prevenirlos o detectarlos en el momento.', contributions:['Poka-yoke: dispositivos a prueba de errores.','SMED: cambio rapido de herramienta.','Inspeccion en la fuente y mejora del Sistema de Produccion Toyota.'], recognition:'Su legado se reconoce mediante el Shingo Prize, establecido para distinguir excelencia operativa y cultura de mejora.', refs:[8,13], tool:'Poka-yoke / SMED', use:'Reduccion de setups, defectos y tiempos de flujo', year:1969},
  {id:'imai', name:'Masaaki Imai', years:'1930-2023', country:'Japon', stream:'Lean', tag:'Mejora diaria', philosophy:'Kaizen significa mejorar cada dia, en cada lugar y con todas las personas. Los grandes resultados se construyen con pequeñas mejoras sostenidas.', contributions:['Difusion mundial del enfoque Kaizen.','Relacion entre estandarizacion, gemba y eliminacion de desperdicio.','Impulso de la participacion del personal en mejoras de bajo costo.'], recognition:'Fundo el Kaizen Institute en 1985 y es reconocido internacionalmente como principal divulgador de Kaizen fuera de Japon.', refs:[9,13], tool:'Kaizen / gemba / estandar', use:'Mejora continua participativa y productividad', year:1986},
  {id:'ohno', name:'Taiichi Ohno', years:'1912-1990', country:'Japon', stream:'Lean', tag:'Flujo y valor', philosophy:'La produccion debe fluir al ritmo de la demanda del cliente; se eliminan actividades que consumen recursos sin agregar valor.', contributions:['Arquitecto del Sistema de Produccion Toyota (TPS).','Just in Time, kanban y produccion tirada.','Identificacion de los siete desperdicios (muda).'], recognition:'Es reconocido como una figura fundacional de la manufactura esbelta. Su sistema se convirtio en referente global de operaciones.', refs:[10,13], tool:'Kanban / JIT / muda', use:'Flujo de materiales, inventarios y lead time', year:1953},
  {id:'akao', name:'Yoji Akao', years:'1928-2016', country:'Japon', stream:'Estrategia', tag:'Voz del cliente', philosophy:'Las necesidades del cliente deben traducirse sistematicamente en caracteristicas tecnicas, metas de diseño y controles de produccion.', contributions:['Cocreador del Despliegue de la Funcion de Calidad (QFD).','Casa de la calidad para relacionar voz del cliente y requisitos tecnicos.','Alineacion transversal entre mercado, diseño y manufactura.'], recognition:'Su contribucion se reconoce a traves de la amplia adopcion mundial del QFD y de instituciones especializadas en su enseñanza y aplicacion.', refs:[11,13], tool:'QFD / casa de la calidad', use:'Desarrollo de productos orientado al cliente', year:1966},
  {id:'goldratt', name:'Eliyahu M. Goldratt', years:'1947-2011', country:'Israel', stream:'Estrategia', tag:'Restricciones', philosophy:'Todo sistema tiene al menos una restriccion que limita su desempeno. Mejorar localmente no sirve si no mejora el flujo global.', contributions:['Teoria de Restricciones (TOC).','Cinco pasos de enfoque para gestionar cuellos de botella.','Tambor-amortiguador-cuerda y contabilidad del throughput.'], recognition:'La Meta convirtio la Teoria de Restricciones en un referente mundial para operaciones, proyectos y cadena de suministro.', refs:[12,13], tool:'TOC / cuello de botella', use:'Capacidad, programacion y flujo de produccion', year:1984},
  {id:'pareto', name:'Vilfredo Pareto', years:'1848-1923', country:'Italia', stream:'Estrategia', tag:'Priorizacion', philosophy:'Una parte minoritaria de causas suele explicar una parte mayoritaria de los efectos; por ello se debe concentrar el esfuerzo en los pocos vitales.', contributions:['Principio 80/20, aplicado despues por Juran a calidad.','Diagrama de Pareto para jerarquizar problemas.','Base para decidir con recursos limitados y datos de frecuencia.'], recognition:'Su mayor reconocimiento en calidad es el Principio de Pareto, una herramienta universal de priorizacion y analisis gerencial.', refs:[2,13], tool:'Diagrama de Pareto', use:'Priorizacion de defectos, costos y acciones correctivas', year:1896}
];

const essentialIds = new Set(['deming','juran','crosby','ishikawa','feigenbaum','taguchi','shewhart','shingo','imai','ohno','akao','goldratt','pareto']);
people.splice(0, people.length, ...people.filter(person => essentialIds.has(person.id)));

let activeId = 'deming';
let activeFilter = 'Todos';
const portraits = {};
const directPortraits = {
  crosby:'https://history-biography.com/wp-content/uploads/2018/02/Phil-Crosby.jpg',
  ishikawa:'https://kkbooks.com/wp-content/uploads/2024/07/Dr.-Kaoru-Ishikawa.png',
  feigenbaum:'https://nationalmedals.org/wp-content/uploads/2020/07/Armand-V-Feigenbaum-1.jpg',
  shingo:'https://www.toolshero.com/wp-content/uploads/2018/07/shigeo-shingo-toolshero.jpg',
  ohno:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ohno-Taiichi-1.jpg/1090px-Ohno-Taiichi-1.jpg',
  akao:'https://pic1.zhimg.com/80/v2-85f9c4d9f5b60fca6c52b4f530c5dcda_720w.webp?source=d16d100b',
  goldratt:'https://www.profiteditorial.com/wp-content/uploads/2024/07/Eliyahu_M_Goldratt-scaled.jpg'
};
const wikipediaTitles = {
  deming:'W. Edwards Deming', juran:'Joseph M. Juran', crosby:'Philip B. Crosby', ishikawa:'Kaoru Ishikawa',
  feigenbaum:'Armand V. Feigenbaum', taguchi:'Genichi Taguchi', shewhart:'Walter A. Shewhart', shingo:'Shigeo Shingo',
  imai:'Masaaki Imai', ohno:'Taiichi Ohno', akao:'Yoji Akao', goldratt:'Eliyahu M. Goldratt', pareto:'Vilfredo Pareto'
};
const $ = (selector) => document.querySelector(selector);

function initials(name) {
  return name.replaceAll('.', '').split(' ').filter(word => word.length > 2).slice(0, 2).map(word => word[0]).join('');
}

function portrait(person) {
  const image = directPortraits[person.id] || portraits[person.id];
  if (image) return `<img src="${image}" alt="Retrato de ${person.name}" loading="lazy" referrerpolicy="no-referrer">`;
  return `<span class="portrait-fallback" aria-label="Retrato no disponible">${initials(person.name)}</span>`;
}

async function loadPortraits() {
  const titles = people.map(person => wikipediaTitles[person.id]).filter(Boolean).join('|');
  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=480&titles=${encodeURIComponent(titles)}`);
    const data = await response.json();
    Object.values(data.query.pages).forEach(page => {
      const entry = Object.entries(wikipediaTitles).find(([, title]) => title === page.title);
      if (entry && page.thumbnail?.source) portraits[entry[0]] = page.thumbnail.source;
    });
    renderList();
  } catch (error) {}
}

function filteredPeople() {
  const searchInput = $('#search');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  return people.filter(person => {
    const matchesFilter = activeFilter === 'Todos' || person.stream === activeFilter;
    const terms = [person.name, person.tag, person.philosophy, person.tool, person.use, ...person.contributions].join(' ').toLowerCase();
    return matchesFilter && terms.includes(query);
  });
}

function renderList() {
  const listEl = $('#peopleList');
  const countEl = $('#resultCount');
  if (!listEl) return;
  
  const visible = filteredPeople();
  if (countEl) countEl.textContent = `${visible.length} de ${people.length} autores`;
  if (!visible.some(person => person.id === activeId) && visible.length) activeId = visible[0].id;
  
  listEl.innerHTML = visible.length ? visible.map((person, index) => `
    <button class="person-button" type="button" data-id="${person.id}" aria-selected="${person.id === activeId}">
      <span class="person-index">${portraits[person.id] ? portrait(person) : String(index + 1).padStart(2, '0')}</span>
      <span><span class="person-name">${person.name}</span><br><span class="person-era">${person.years}</span></span>
      <span class="person-arrow" aria-hidden="true">→</span>
    </button>`).join('') : '<p class="empty">No se encontraron coincidencias.</p>';
    
  listEl.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { activeId = button.dataset.id; renderList(); renderProfile(); }));
  renderProfile();
}

function renderProfile() {
  const profileEl = $('#profile');
  if (!profileEl) return;
  
  const person = people.find(item => item.id === activeId) || people[0];
  const refs = person.refs.map(ref => `<a href="#ref-${ref}">[${ref}]</a>`).join(' ');
  const bios = {
    deming: "William Edwards Deming (1900-1993) fue un estadístico, profesor universitario y consultor estadounidense cuyo trabajo transformó profundamente la gestión industrial a nivel global.",
    juran: "Joseph Moses Juran (1904-2008), nacido en Rumania y radicado en Estados Unidos, es ampliamente considerado uno de los padres fundadores de la gestión moderna de calidad.",
    crosby: "Philip Bayard Crosby (1926-2001) fue un empresario y autor estadounidense que revolucionó el enfoque de la gestión de la calidad mediante su incansable defensa de la prevención.",
    ishikawa: "Kaoru Ishikawa (1915-1989) fue una de las figuras más influyentes del milagro industrial japonés, reconocido por democratizar la calidad y llevarla a cada rincón de las organizaciones.",
    feigenbaum: "Armand Vallin Feigenbaum (1922-2014) fue un destacado ingeniero industrial y empresario estadounidense, reconocido por haber conceptualizado y formulado el Control Total de la Calidad.",
    taguchi: "Genichi Taguchi (1924-2012) fue un ingeniero y estadístico japonés que revolucionó los métodos de diseño industrial a través de su enfoque centrado en la robustez.",
    shewhart: "Walter Andrew Shewhart (1891-1967) es venerado universalmente como el padre del control estadístico de procesos (SPC).",
    shingo: "Shigeo Shingo (1909-1990) fue uno de los ingenieros industriales y consultores más destacados de Japón, célebre a nivel global por sus contribuciones al Sistema Toyota.",
    imai: "Masaaki Imai (1930-2023) fue un influyente teórico de la gestión empresarial y consultor japonés, mundialmente conocido por ser el principal divulgador del Kaizen.",
    ohno: "Taiichi Ohno (1912-1990) fue un visionario ingeniero industrial japonés y el principal artífice del Sistema de Producción Toyota (TPS).",
    akao: "Yoji Akao (1928-2016) fue un reconocido profesor e ingeniero industrial japonés, célebre por ser el cocreador del Despliegue de la Función de Calidad (QFD).",
    goldratt: "Eliyahu Moshe Goldratt (1947-2011) fue un físico, educador y consultor israelí que transformó la gestión empresarial moderna al desarrollar la Teoría de Restricciones (TOC).",
    pareto: "Vilfredo Pareto (1848-1923) fue un destacado economista, sociólogo e ingeniero italiano cuyas investigaciones sobre la distribución de la riqueza sentaron los cimientos del Principio 80/20."
  };
  const bioText = bios[person.id] || `Nacido en ${person.country} (${person.years}).`;
  
  profileEl.innerHTML = `
    <div class="profile-top"><div><h3>${person.name}</h3><p class="profile-meta">${person.years} · ${person.country}</p></div><figure class="portrait">${portrait(person)}<figcaption>Retrato</figcaption></figure><span class="approach">${person.tag}</span></div>
    <p class="philosophy">${person.philosophy}</p>
    <div class="profile-grid">
      <section class="profile-bio-full"><h4>Biografía y contexto histórico</h4><p>${bioText}</p></section>
      <section><h4>En Ingeniería Industrial</h4><p>${person.use}.<br><br><strong>Concepto clave:</strong> ${person.tool}.</p></section>
      <section><h4>Principales aportaciones</h4><ul>${person.contributions.map(item => `<li>${item}</li>`).join('')}</ul></section>
      <section class="recognition"><h4>Premios y reconocimientos</h4><p>${person.recognition}</p></section>
      <p class="profile-sources">Referencias: ${refs}</p>
    </div>`;
}

function renderTimeline() {
  const timelineEl = $('#timeline');
  if (!timelineEl) return;
  const marks = [
    ['1924', 'Shewhart propone la carta de control.'], ['1950', 'Deming y Juran impulsan la calidad en Japon.'], ['1951', 'Feigenbaum publica Total Quality Control.'], ['1962', 'Ishikawa consolida los circulos de calidad.'], ['1966', 'Akao inicia el QFD.'], ['1969', 'Shingo desarrolla SMED.'], ['1984', 'Goldratt publica La Meta.']
  ];
  timelineEl.innerHTML = marks.map(mark => `<article class="time-point"><span class="time-year">${mark[0]}</span><p>${mark[1]}</p></article>`).join('');
}

function renderComparison() {
  const compEl = $('#comparisonTable');
  if (!compEl) return;
  compEl.innerHTML = people.map(person => `<tr><td>${person.name}</td><td>${person.philosophy}</td><td>${person.tool}</td><td>${person.use}</td></tr>`).join('');
}

// Cuestionario Interactivo (Quiz)
const quizData = [
  {
    id: 1,
    question: "¿Quién es considerado el padre del control estadístico de procesos (SPC) y creador de las cartas de control?",
    options: ["W. Edwards Deming", "Walter A. Shewhart", "Joseph M. Juran", "Genichi Taguchi"],
    correct: 1
  },
  {
    id: 2,
    question: "¿Qué autor popularizó la filosofía de mejora continua diaria conocida como Kaizen?",
    options: ["Masaaki Imai", "Taiichi Ohno", "Shigeo Shingo", "Kaoru Ishikawa"],
    correct: 0
  },
  {
    id: 3,
    question: "¿Cuál es el nombre del diagrama causa-efecto desarrollado por Kaoru Ishikawa?",
    options: ["Diagrama de Pareto", "Espina de pescado", "Casa de la calidad", "Gráfica de control"],
    correct: 1
  },
  {
    id: 4,
    question: "¿Qué principio establece que el 80% de los efectos provienen del 20% de las causas?",
    options: ["Principio Jidoka", "Principio de Pareto", "Trilogía de Juran", "Cero defectos"],
    correct: 1
  },
  {
    id: 5,
    question: "¿Qué autor desarrolló el concepto de dispositivos a prueba de errores (Poka-yoke) y el cambio rápido de herramientas (SMED)?",
    options: ["Taiichi Ohno", "Shigeo Shingo", "Philip B. Crosby", "Eliyahu M. Goldratt"],
    correct: 1
  }
];

function initQuiz() {
  const container = $('#quizContainer');
  if (!container) return;

  container.innerHTML = quizData.map((q, qIndex) => `
    <div class="quiz-card" data-qid="${q.id}">
      <h3>${qIndex + 1}. ${q.question}</h3>
      <div class="quiz-options">
        ${q.options.map((opt, oIndex) => `
          <label class="quiz-option">
            <input type="radio" name="q${q.id}" value="${oIndex}">
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function checkQuizAnswers() {
  let score = 0;
  let answeredCount = 0;

  quizData.forEach(q => {
    const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
    const optionsContainer = document.querySelector(`.quiz-card[data-qid="${q.id}"]`);
    
    if (selected) {
      answeredCount++;
      const val = parseInt(selected.value);
      const labels = optionsContainer.querySelectorAll('.quiz-option');
      
      labels.forEach((label, idx) => {
        label.classList.remove('correct-ans', 'wrong-ans');
        if (idx === q.correct) {
          label.classList.add('correct-ans');
        } else if (idx === val && val !== q.correct) {
          label.classList.add('wrong-ans');
        }
      });

      if (val === q.correct) {
        score++;
      }
    }
  });

  const feedback = $('#quizFeedback');
  if (!feedback) return;

  if (answeredCount < quizData.length) {
    feedback.textContent = `Has respondido ${answeredCount} de ${quizData.length} preguntas. Responde todas para una evaluación completa.`;
    feedback.style.color = 'var(--orange)';
  } else {
    feedback.textContent = `¡Cuestionario calificado! Tu puntaje es ${score} de ${quizData.length}.`;
    feedback.style.color = score === quizData.length ? 'var(--green)' : 'var(--orange)';
  }
}

function resetQuizBoard() {
  const container = $('#quizContainer');
  const feedback = $('#quizFeedback');
  if (container) {
    container.querySelectorAll('input').forEach(input => input.checked = false);
    container.querySelectorAll('.quiz-option').forEach(label => label.classList.remove('correct-ans', 'wrong-ans'));
  }
  if (feedback) feedback.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = $('#search');
  if (searchInput) searchInput.addEventListener('input', renderList);
  
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => { 
      const selected = item === button; 
      item.classList.toggle('active', selected); 
      item.setAttribute('aria-pressed', selected); 
    });
    renderList();
  }));
  
  const printBtn = $('#printPage');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
  
  const submitQuizBtn = $('#submitQuiz');
  if (submitQuizBtn) submitQuizBtn.addEventListener('click', checkQuizAnswers);
  
  const resetQuizBtn = $('#resetQuiz');
  if (resetQuizBtn) resetQuizBtn.addEventListener('click', resetQuizBoard);

  renderList();
  renderTimeline();
  renderComparison();
  initQuiz();
  loadPortraits();
});
