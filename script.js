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

let activeId = 'deming';
let activeFilter = 'Todos';
const $ = (selector) => document.querySelector(selector);

function filteredPeople() {
  const query = $('#search').value.trim().toLowerCase();
  return people.filter(person => {
    const matchesFilter = activeFilter === 'Todos' || person.stream === activeFilter;
    const terms = [person.name, person.tag, person.philosophy, person.tool, person.use, ...person.contributions].join(' ').toLowerCase();
    return matchesFilter && terms.includes(query);
  });
}

function renderList() {
  const visible = filteredPeople();
  $('#resultCount').textContent = `${visible.length} de ${people.length} autores`;
  if (!visible.some(person => person.id === activeId) && visible.length) activeId = visible[0].id;
  $('#peopleList').innerHTML = visible.length ? visible.map((person, index) => `
    <button class="person-button" type="button" data-id="${person.id}" aria-selected="${person.id === activeId}">
      <span class="person-index">${String(index + 1).padStart(2, '0')}</span>
      <span><span class="person-name">${person.name}</span><br><span class="person-era">${person.years}</span></span>
      <span class="person-arrow" aria-hidden="true">→</span>
    </button>`).join('') : '<p class="empty">No se encontraron coincidencias. Prueba otro termino.</p>';
  $('#peopleList').querySelectorAll('button').forEach(button => button.addEventListener('click', () => { activeId = button.dataset.id; renderList(); renderProfile(); }));
  renderProfile();
}

function renderProfile() {
  const person = people.find(item => item.id === activeId) || people[0];
  const refs = person.refs.map(ref => `<a href="#ref-${ref}">[${ref}]</a>`).join(' ');
  $('#profile').innerHTML = `
    <div class="profile-top"><div><h3>${person.name}</h3><p class="profile-meta">${person.years} · ${person.country}</p></div><span class="approach">${person.tag}</span></div>
    <p class="philosophy">${person.philosophy}</p>
    <div class="profile-grid">
      <section><h4>Principales aportaciones</h4><ul>${person.contributions.map(item => `<li>${item}</li>`).join('')}</ul></section>
      <section><h4>En Ingenieria Industrial</h4><p>${person.use}.<br><br><strong>Concepto clave:</strong> ${person.tool}.</p></section>
      <section class="recognition"><h4>Premios y reconocimientos</h4><p>${person.recognition}</p></section>
      <p class="profile-sources">Referencias recomendadas: ${refs}</p>
    </div>`;
}

function renderTimeline() {
  const marks = [
    ['1924', 'Shewhart propone la carta de control.'], ['1950', 'Deming y Juran impulsan la calidad en Japon.'], ['1951', 'Feigenbaum publica Total Quality Control.'], ['1962', 'Ishikawa consolida los circulos de calidad.'], ['1966', 'Akao inicia el QFD.'], ['1969', 'Shingo desarrolla SMED.'], ['1984', 'Goldratt publica La Meta.']
  ];
  $('#timeline').innerHTML = marks.map(mark => `<article class="time-point"><span class="time-year">${mark[0]}</span><p>${mark[1]}</p></article>`).join('');
}

function renderComparison() {
  $('#comparisonTable').innerHTML = people.map(person => `<tr><td>${person.name}</td><td>${person.philosophy}</td><td>${person.tool}</td><td>${person.use}</td></tr>`).join('');
}

$('#search').addEventListener('input', renderList);
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', selected); });
  renderList();
}));
$('#printPage').addEventListener('click', () => window.print());
renderList();
renderTimeline();
renderComparison();
