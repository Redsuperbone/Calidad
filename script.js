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

people.push(
  {id:'taylor', name:'Frederick W. Taylor', years:'1856-1915', country:'Estados Unidos', stream:'Estrategia', tag:'Organizacion cientifica', philosophy:'El trabajo debe estudiarse con metodo para definir la mejor forma conocida de ejecutarlo, estandarizarla y mejorarla con datos.', contributions:['Administracion cientifica y estudio de tiempos.','Estandarizacion de metodos y herramientas.','Separacion analitica de planeacion y ejecucion.'], recognition:'Su legado permanece en la Taylor Medal de ASME y en la ingenieria de metodos. Sus ideas son un antecedente de la estandarizacion en calidad.', refs:[13,14], tool:'Estudio de tiempos / trabajo estandarizado', use:'Diseño de metodos, capacidad y productividad', year:1911},
  {id:'ford', name:'Henry Ford', years:'1863-1947', country:'Estados Unidos', stream:'Lean', tag:'Produccion en flujo', philosophy:'La calidad y el costo mejoran cuando las piezas son intercambiables, el trabajo se estandariza y el producto se mueve de forma continua.', contributions:['Linea de ensamble movil y produccion en flujo.','Intercambiabilidad y estandarizacion a escala.','Reduccion radical del tiempo de ensamble.'], recognition:'Recibio la Edison Medal (1928). Su planta de Highland Park es un hito de la produccion en flujo y antecedente de Lean.', refs:[10,13], tool:'Flujo continuo / estandarizacion', use:'Balanceo de linea y produccion repetitiva', year:1913},
  {id:'dodge', name:'Harold F. Dodge', years:'1893-1976', country:'Estados Unidos', stream:'Estadistica', tag:'Muestreo de aceptacion', philosophy:'Las decisiones de aceptacion pueden basarse en una muestra representativa y en riesgos estadisticos conocidos, no en inspeccionar el 100%.', contributions:['Planes de muestreo de aceptacion Dodge-Romig.','Curvas OC y riesgos del productor y consumidor.','Desarrollo de la inspeccion estadistica en Bell Labs.'], recognition:'ASQ lo reconoce como uno de los principales arquitectos del control estadistico de calidad y fue su primer presidente.', refs:[13], tool:'Muestreo de aceptacion / curvas OC', use:'Recepcion de lotes y control de proveedores', year:1930},
  {id:'romig', name:'Harry G. Romig', years:'1898-1993', country:'Estados Unidos', stream:'Estadistica', tag:'Muestreo industrial', philosophy:'La inspeccion debe proporcionar evidencia estadistica util para decidir, con costos y riesgos controlados.', contributions:['Cocreador de las tablas Dodge-Romig.','Aportes a inspeccion por muestreo en Bell Labs.','Formacion tecnica en control de calidad.'], recognition:'Recibio la Medalla Shewhart de ASQ (1953) y fue nombrado miembro honorario de ASQ en 1982.', refs:[13], tool:'Tablas Dodge-Romig', use:'Inspeccion por lotes y aseguramiento de proveedores', year:1940},
  {id:'sakichi', name:'Sakichi Toyoda', years:'1867-1930', country:'Japon', stream:'Lean', tag:'Jidoka', philosophy:'Una maquina debe detenerse cuando detecta una anomalia; asi se evita que un defecto avance y se libera a las personas para mejorar el proceso.', contributions:['Principio jidoka o automatizacion con toque humano.','Telares con paro automatico por rotura de hilo.','Base cultural y tecnica del futuro Sistema Toyota.'], recognition:'Conocido como el rey de los inventores japoneses; su legado esta incorporado en los principios fundacionales de Toyota.', refs:[10,13], tool:'Jidoka / paro ante anomalias', use:'Calidad en la fuente y automatizacion', year:1896},
  {id:'kiichiro', name:'Kiichiro Toyoda', years:'1894-1952', country:'Japon', stream:'Lean', tag:'Just in Time', philosophy:'La produccion debe responder a la demanda real y sincronizar materiales, informacion y operaciones para evitar inventarios innecesarios.', contributions:['Fundador de Toyota Motor Corporation.','Planteamiento inicial del Just in Time.','Impulso a la integracion entre produccion y abastecimiento.'], recognition:'Es reconocido como el fundador de Toyota Motor y precursor directo del sistema que despues consolidaria Taiichi Ohno.', refs:[10,13], tool:'Just in Time', use:'Sincronizacion de abastecimiento y produccion', year:1937},
  {id:'kano', name:'Noriaki Kano', years:'1940-2022', country:'Japon', stream:'Estrategia', tag:'Satisfaccion del cliente', philosophy:'No todos los atributos impactan igual al cliente: algunos son basicos, otros de desempeno y otros generan entusiasmo.', contributions:['Modelo Kano de atributos de calidad.','Clasificacion de necesidades del cliente.','Enlace entre diseno de producto, satisfaccion y valor.'], recognition:'Recibio la Grant Medal de ASQ en 2006. El modelo Kano es una referencia mundial para innovacion y voz del cliente.', refs:[13,14], tool:'Modelo Kano', use:'Priorizacion de requisitos y desarrollo de productos', year:1984},
  {id:'shainin', name:'Dorian Shainin', years:'1914-2000', country:'Estados Unidos', stream:'Estadistica', tag:'Reduccion de variacion', philosophy:'Para resolver un problema complejo se debe localizar primero la variable dominante, el Red X, mediante evidencia experimental y comparacion.', contributions:['Sistema Shainin y estrategia Red X.','Herramientas para diagnostico de variacion.','Aportes a diseno de experimentos aplicado.'], recognition:'Recibio la Grant Medal de ASQ en 1981. La ASQ concede la Shainin Medal por metodos innovadores de mejora.', refs:[13], tool:'Red X / sistema Shainin', use:'Solucion de problemas cronicos de manufactura', year:1960},
  {id:'garvin', name:'David A. Garvin', years:'1952-2017', country:'Estados Unidos', stream:'Total', tag:'Calidad estrategica', philosophy:'La calidad puede observarse desde varias dimensiones y debe convertirse en una fuente de ventaja competitiva, no solo de conformidad.', contributions:['Ocho dimensiones de la calidad.','Enfoques trascendente, basado en producto, usuario, manufactura y valor.','Vinculo entre calidad y estrategia competitiva.'], recognition:'Su marco de ocho dimensiones es una referencia academica y gerencial para evaluar productos y servicios de forma integral.', refs:[13,14], tool:'Ocho dimensiones de calidad', use:'Diseno de indicadores y estrategia de producto', year:1987},
  {id:'smith', name:'Bill Smith', years:'1929-1993', country:'Estados Unidos', stream:'Estadistica', tag:'Six Sigma', philosophy:'La calidad se mejora al medir defectos con rigor, atacar las causas de variacion y prevenir errores antes de que lleguen al cliente.', contributions:['Cocreador de Six Sigma en Motorola.','Enfoque de defectos por millon de oportunidades.','Impulso de proyectos estructurados de mejora.'], recognition:'Su trabajo en Motorola origino Six Sigma; el programa contribuyo al reconocimiento de Motorola con el Malcolm Baldrige National Quality Award.', refs:[13], tool:'Six Sigma / DPMO', use:'Proyectos de reduccion de defectos y variacion', year:1986},
  {id:'harry', name:'Mikel Harry', years:'1951-2017', country:'Estados Unidos', stream:'Estadistica', tag:'Six Sigma', philosophy:'La mejora debe conectarse con resultados financieros y seguir una disciplina de proyecto basada en datos, roles y metas medibles.', contributions:['Desarrollo y difusion de Six Sigma.','Estructuracion del enfoque DMAIC.','Formacion de Black Belts y gobernanza de proyectos.'], recognition:'Cofundo la Six Sigma Academy y es reconocido como uno de los principales divulgadores del enfoque a escala global.', refs:[13], tool:'DMAIC / Black Belts', use:'Mejora de procesos con impacto financiero', year:1990},
  {id:'womack', name:'James P. Womack', years:'1947-', country:'Estados Unidos', stream:'Lean', tag:'Pensamiento Lean', philosophy:'El valor debe definirse desde el cliente y fluir por toda la cadena, eliminando desperdicio de manera sistematica.', contributions:['Popularizo el termino Lean con la investigacion IMVP del MIT.','Cinco principios de Lean Thinking junto con Daniel Jones.','Fundador del Lean Enterprise Institute.'], recognition:'Es ampliamente considerado una figura fundacional del movimiento Lean moderno y fundo el Lean Enterprise Institute en 1997.', refs:[10,14], tool:'Flujo de valor / cinco principios Lean', use:'Mapeo de flujo de valor y transformacion Lean', year:1990},
  {id:'jones', name:'Daniel T. Jones', years:'1940-2023', country:'Reino Unido', stream:'Lean', tag:'Empresa Lean', philosophy:'Lean es una forma de aprender a crear mas valor con menos recursos mediante flujos de valor de extremo a extremo.', contributions:['Cocreador de Lean Thinking.','Direccion del IMVP con Womack.','Fundador de Lean Enterprise Academy.'], recognition:'Su trabajo con Womack ayudo a llevar Lean desde Toyota a servicios, salud, gobierno y cadenas de suministro.', refs:[10,14], tool:'Empresa Lean / flujo de valor', use:'Transformacion de operaciones y cadena de suministro', year:1996},
  {id:'roos', name:'Daniel Roos', years:'1941-', country:'Estados Unidos', stream:'Lean', tag:'Produccion Lean', philosophy:'La investigacion comparativa permite entender por que algunos sistemas logran mas calidad y productividad con menores recursos.', contributions:['Codirigio el International Motor Vehicle Program del MIT.','Cocautor de The Machine That Changed the World.','Comparacion global de sistemas de produccion automotriz.'], recognition:'Su investigacion ayudo a documentar y difundir la superioridad operativa de la produccion Lean fuera de Japon.', refs:[10,14], tool:'Benchmarking de sistemas productivos', use:'Diagnostico comparativo de desempeno operacional', year:1990},
  {id:'krafcik', name:'John Krafcik', years:'1961-', country:'Estados Unidos', stream:'Lean', tag:'Nombre Lean', philosophy:'Un sistema de produccion superior necesita menos esfuerzo, espacio, inventario, tiempo y defectos para generar valor.', contributions:['Acuño el termino Lean Production en 1988.','Comparo produccion artesanal, en masa y Lean.','Difundio metricas de desempeno de manufactura.'], recognition:'Su concepto Lean Production dio un lenguaje comun al movimiento internacional de manufactura esbelta.', refs:[10,14], tool:'Lean Production', use:'Evaluacion de desperdicio y productividad en planta', year:1988},
  {id:'liker', name:'Jeffrey K. Liker', years:'1953-', country:'Estados Unidos', stream:'Lean', tag:'Toyota Way', philosophy:'La excelencia sostenible surge de combinar herramientas Lean con una cultura de personas, aprendizaje y solucion cientifica de problemas.', contributions:['Modelo de las 4P del Toyota Way.','Difusion de principios de gestion Toyota.','Conexion entre cultura organizacional y operaciones.'], recognition:'The Toyota Way recibio reconocimiento internacional y ayudo a acercar los principios Toyota a profesionales de todo el mundo.', refs:[10,13], tool:'4P / Toyota Way', use:'Cultura Lean, liderazgo y desarrollo de personas', year:2004},
  {id:'masing', name:'Walter A. Masing', years:'1915-2004', country:'Alemania', stream:'Total', tag:'Calidad europea', philosophy:'La calidad necesita lenguaje comun, normalizacion y sistemas de gestion que articulen personas, tecnologia y cliente.', contributions:['Impulso a la gestion de calidad en Europa.','Aportes a normalizacion y terminologia de calidad.','Cofundador de la International Academy for Quality.'], recognition:'Fue una figura clave de la calidad europea y cofundador de IAQ junto con Feigenbaum e Ishikawa.', refs:[5,14], tool:'Sistemas de gestion de calidad', use:'Normalizacion, auditoria y gestion organizacional', year:1960},
  {id:'oakland', name:'John S. Oakland', years:'1943-', country:'Reino Unido', stream:'Total', tag:'TQM operativo', philosophy:'La calidad total debe convertirse en una forma de administrar procesos, equipos y objetivos, usando medicion y mejora continua.', contributions:['Modelo de administracion de calidad total.','Integracion de calidad, excelencia y desempeno.','Difusion de herramientas de TQM en organizaciones.'], recognition:'Sus textos y modelos son referentes de formacion profesional en gestion de la calidad y excelencia operacional.', refs:[13,14], tool:'TQM / gestion por procesos', use:'Sistemas integrados de calidad y desempeno', year:1989}
);

const essentialIds = new Set(['deming','juran','crosby','ishikawa','feigenbaum','taguchi','shewhart','shingo','imai','ohno','akao','goldratt','pareto','taylor','ford','dodge','sakichi','kiichiro','kano','shainin']);
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
  goldratt:'https://www.profiteditorial.com/wp-content/uploads/2024/07/Eliyahu_M_Goldratt-scaled.jpg',
  dodge:'https://asq.org/-/media/Images/About-ASQ/wcqi/Bios/dodge.gif'
};
const wikipediaTitles = {
  deming:'W. Edwards Deming', juran:'Joseph M. Juran', crosby:'Philip B. Crosby', ishikawa:'Kaoru Ishikawa',
  feigenbaum:'Armand V. Feigenbaum', taguchi:'Genichi Taguchi', shewhart:'Walter A. Shewhart', shingo:'Shigeo Shingo',
  imai:'Masaaki Imai', ohno:'Taiichi Ohno', akao:'Yoji Akao', goldratt:'Eliyahu M. Goldratt', pareto:'Vilfredo Pareto',
  taylor:'Frederick Winslow Taylor', ford:'Henry Ford', dodge:'Harold F. Dodge', romig:'Harry G. Romig', sakichi:'Sakichi Toyoda', kiichiro:'Kiichiro Toyoda', kano:'Noriaki Kano', shainin:'Dorian Shainin', garvin:'David A. Garvin', smith:'Bill Smith (engineer)', harry:'Mikel Harry', womack:'James P. Womack', jones:'Daniel T. Jones', roos:'Daniel Roos', krafcik:'John Krafcik', liker:'Jeffrey Liker', masing:'Walter Masing', oakland:'John S. Oakland'
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
  } catch (error) {
    // Las iniciales se mantendrán visibles si la imagen de Wikimedia no está disponible.
  }
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
      <span class="person-index">${(directPortraits[person.id] || portraits[person.id]) ? portrait(person) : String(index + 1).padStart(2, '0')}</span>
      <span><span class="person-name">${person.name}</span><br><span class="person-era">${person.years}</span></span>
      <span class="person-arrow" aria-hidden="true">→</span>
    </button>`).join('') : '<p class="empty">No se encontraron coincidencias. Prueba otro termino.</p>';
    
  listEl.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { activeId = button.dataset.id; renderList(); renderProfile(); }));
  renderProfile();
}

function renderProfile() {
  const profileEl = $('#profile');
  if (!profileEl) return;
  
  const person = people.find(item => item.id === activeId) || people[0];
  const refs = person.refs.map(ref => `<a href="#ref-${ref}">[${ref}]</a>`).join(' ');
  const bios = {
    deming: "William Edwards Deming (1900-1993) fue un estadístico, profesor universitario y consultor estadounidense cuyo trabajo transformó profundamente la gestión industrial a nivel global. Tras doctorarse en física matemática en Yale, Deming colaboró con Walter Shewhart en los Laboratorios Bell, donde interiorizó el poder del control estadístico de procesos. Su verdadero punto de inflexión ocurrió en la década de 1950, cuando viajó a Japón para capacitar a ingenieros y directivos japoneses en métodos estadísticos. Lejos de ver la calidad como un control posterior, Deming inculcó la idea de que la calidad es un compromiso sistémico liderado por la alta dirección. Creador del ciclo PDSA y de los famosos 14 Puntos para la Gestión, su legado sigue vivo como pilar de la mejora continua y el pensamiento administrativo moderno.",
    juran: "Joseph Moses Juran (1904-2008), nacido en Rumania y radicado en Estados Unidos, es ampliamente considerado uno de los padres fundadores de la gestión moderna de calidad. Ingeniero electricista y abogado de formación, Juran introdujo el concepto crucial de que la calidad no solo pertenece a la planta de manufactura, sino a toda la empresa, acuñando la célebre definición de 'adecuación al uso'. Su aportación más emblemática es la Trilogía de Juran —que articula la planificación, el control y la mejora de la calidad— y la aplicación práctica del Principio de Pareto para identificar los 'pocos vitales' frente a los 'muchos triviales'. Su liderazgo transformó la cultura gerencial en todo el mundo occidental y en Japón.",
    crosby: "Philip Bayard Crosby (1926-2001) fue un empresario y autor estadounidense que revolucionó el enfoque de la gestión de la calidad mediante su incansable defensa de la prevención y el concepto de 'cero defectos'. Comenzó su carrera profesional trabajando en líneas de ensamblaje y control de calidad en diversas empresas industriales, lo que le otorgó una perspectiva muy práctica de los costos reales de los errores. Crosby sostenía que la calidad es gratuita si se hace bien desde la primera vez, y que el verdadero costo radica en el incumplimiento y la corrección posterior. Sus Cuatro Absolutos de la Calidad y sus programas de concientización corporativa marcaron una época dorada en la administración industrial norteamericana.",
    ishikawa: "Kaoru Ishikawa (1915-1989) fue una de las figuras más influyentes del milagro industrial japonés, reconocido por democratizar la calidad y llevarla a cada rincón de las organizaciones. Doctor en ingeniería y profesor de la Universidad de Tokio, Ishikawa impulsó el concepto de Control Total de la Calidad (CWQC) y diseñó los círculos de calidad, permitiendo que los operarios de primera línea participaran activamente en la solución de problemas. Es mundialmente célebre por la creación del diagrama causa-efecto —también conocido como diagrama de espina de pescado o diagrama de Ishikawa— y por sistematizar las siete herramientas básicas de la calidad, haciendo accesibles metodologías analíticas complejas para todo el personal.",
    feigenbaum: "Armand Vallin Feigenbaum (1922-2014) fue un destacado ingeniero industrial y empresario estadounidense, reconocido por haber conceptualizado y formulado el Control Total de la Calidad (TQC). Durante su etapa como director de manufactura y control de calidad en General Electric, Feigenbaum comprendió que la calidad de un producto no depende exclusivamente del departamento de producción, sino de la integración coordinada de todas las áreas funcionales de la empresa, desde el diseño y las compras hasta el servicio postventa. Asimismo, fue pionero en el análisis económico de la calidad al clasificar formalmente los costos en prevención, evaluación y fallas, transformando la calidad en una métrica estratégica de negocio.",
    taguchi: "Genichi Taguchi (1924-2012) fue un ingeniero y estadístico japonés que revolucionó los métodos de diseño industrial a través de su enfoque centrado en la robustez y la ingeniería de calidad. Tras formarse en ingeniería mecánica y estadística en la Universidad de Kiryu, Taguchi colaboró estrechamente con los laboratorios de telecomunicaciones y grandes corporaciones industriales, desarrollando potentes herramientas matemáticas como los arreglos ortogonales para el diseño de experimentos. Su contribución más radical fue la Función de Pérdida de Taguchi, que demuestra que cualquier desviación respecto al valor nominal de diseño genera un costo social acumulativo, desplazando el objetivo industrial de 'estar dentro de tolerancias' a 'minimizar la variación'.",
    shewhart: "Walter Andrew Shewhart (1891-1967) es venerado universalmente como el padre del control estadístico de procesos (SPC). Físico, ingeniero y estadístico de los Laboratorios Bell, Shewhart comprendió a principios de la década de 1920 que los procesos industriales exhiben una variabilidad inherente que debe ser analizada rigurosamente para distinguir entre causas comunes y causas especiales. Su invención de las cartas o gráficas de control y la formulación del ciclo de especificación-producción-inspección sentaron las bases matemáticas e intelectuales sobre las cuales se construiría todo el movimiento contemporáneo de la calidad industrial.",
    shingo: "Shigeo Shingo (1909-1990) fue uno de los ingenieros industriales y consultores más destacados de Japón, célebre a nivel global por sus contribuciones capitales al Sistema de Producción Toyota y a la excelencia operativa. A lo largo de su prolífica trayectoria, Shingo desarrolló el concepto de cambio rápido de herramientas (conocido como SMED), reduciendo los tiempos de preparación de maquinaria de horas a minutos, y formalizó los mecanismos Poka-yoke para prevenir y detectar errores humanos de manera infalible en la fuente de origen, transformando radicalmente la productividad de las plantas manufactureras.",
    imai: "Masaaki Imai (1930-2023) fue un influyente teórico de la gestión empresarial y consultor japonés, mundialmente conocido por ser el principal evangelista y divulgador de la filosofía Kaizen (mejora continua) fuera de las fronteras de Japón. Tras fundar el Kaizen Institute en 1985, Imai dedicó su vida a explicar cómo las pequeñas mejoras cotidianas, implementadas de manera sistemática por todos los empleados en el gemba (el lugar donde ocurren las cosas), generan ventajas competitivas sostenibles sin necesidad de grandes inversiones tecnológicas.",
    ohno: "Taiichi Ohno (1912-1990) fue un visionario ingeniero industrial japonés y el principal artífice del célebre Sistema de Producción Toyota (TPS), base conceptual de la manufactura esbelta (Lean Manufacturing). En una época en la que la industria japonesa enfrentaba una profunda escasez de recursos tras la Segunda Guerra Mundial, Ohno desarrolló un sistema de producción guiado por la demanda real del cliente, implementando el concepto de Just in Time, los tableros kanban y la identificación sistemática de los siete grandes desperdicios (muda), convirtiendo a Toyota en un referente global de eficiencia.",
    akao: "Yoji Akao (1928-2016) fue un reconocido profesor e ingeniero industrial japonés, célebre por ser el cocreador del Despliegue de la Función de Calidad (QFD) junto con Shigeru Mizuno. Akao concibió esta metodología para garantizar que las necesidades y expectativas expresadas por los clientes ('la voz del cliente') se tradujeran de manera rigurosa y estructurada en especificaciones técnicas de diseño, manufactura y control a lo largo de toda la organización.",
    goldratt: "Eliyahu Moshe Goldratt (1947-2011) fue un físico, educador y consultor israelí que transformó la gestión empresarial moderna al desarrollar la Teoría de Restricciones (TOC). Con la publicación de su icónica novela de gestión La Meta en 1984, Goldratt popularizó la idea de que todo sistema productivo u operativo está limitado por al menos un cuello de botella o restricción, y que los esfuerzos de mejora local carecen de valor si no contribuyen a optimizar el flujo global de la organización.",
    pareto: "Vilfredo Pareto (1848-1923) fue un destacado economista, sociólogo e ingeniero italiano cuyas investigaciones sobre la distribución de la riqueza sentaron los cimientos matemáticos de lo que más tarde se conocería en la calidad como el Principio 80/20 o Ley de Pareto. Aunque no trabajó directamente en temas de manufactura, su observación de que una minoría de causas concentra la mayoría de los efectos fue adaptada brillantemente por Joseph Juran y otros pioneros para priorizar problemas y optimizar la toma de decisiones gerenciales.",
    taylor: "Frederick Winslow Taylor (1856-1915) fue un ingeniero mecánico estadounidense considerado el padre de la administración científica del trabajo. A través de estudios sistemáticos de tiempos y movimientos, Taylor buscó eliminar la holganza y la ineficiencia en las plantas industriales mediante la estandarización estricta de métodos, herramientas y la separación analítica entre la planeación de las tareas y su ejecución, sentando los cimientos históricos de la ingeniería industrial moderna.",
    ford: "Henry Ford (1863-1947) fue un industrial y empresario estadounidense que revolucionó la historia económica mundial al introducir la producción en masa y la línea de ensamblaje móvil en la industria automotriz. Mediante la estandarización radical de componentes y un flujo de trabajo continuo, Ford redujo drásticamente los costos de fabricación y los tiempos de ciclo, creando un hito operativo que sirvió como antecedente directo de los sistemas de producción moderna.",
    dodge: "Harold Frederick Dodge (1893-1976) fue un distinguido estadístico e ingeniero estadounidense, reconocido como uno de los arquitectos fundamentales del control estadístico de calidad y del muestreo de aceptación industrial. Trabajando en los Laboratorios Bell junto con Harry Romig, Dodge desarrolló planes de muestreo rigurosos y curvas características de operación que permitieron a la industria verificar la calidad de grandes lotes de producción mediante muestras estadísticas confiables.",
    romig: "Harry G. Romig (1898-1993) fue un matemático y estadístico estadounidense que, junto a Harold Dodge, desarrolló las célebres tablas de muestreo Dodge-Romig en los Laboratorios Bell. Su riguroso trabajo estadístico proporcionó a la industria métodos estandarizados para optimizar las inspecciones por lotes con un control preciso de los riesgos del productor y del consumidor, consolidando las bases cuantitativas del control de proveedores.",
    sakichi: "Sakichi Toyoda (1867-1930) fue un prolífico inventor e industrial japonés, conocido como el rey de los inventores de su país y fundador del conglomerado que daría origen a Toyota. Su contribución filosófica y técnica más importante fue el principio de Jidoka (automatización con un toque humano), mediante el cual las máquinas se diseñan para detenerse automáticamente ante cualquier anomalía, evitando la propagación de defectos y empoderando a los operarios.",
    kiichiro: "Kiichiro Toyoda (1894-1952) fue un empresario japonés e hijo de Sakichi Toyoda, reconocido por fundar Toyota Motor Corporation en 1937 y visionar el concepto inicial de producción flexible que posteriormente evolucionaría hacia el Just in Time. A pesar de las inmensas dificultades económicas y tecnológicas de la posguerra, Kiichiro impulsó la integración estratégica entre la manufactura de automóviles y el suministro oportuno de autopartes.",
    kano: "Noriaki Kano (1940-2022) fue un destacado profesor e investigador japonés de la calidad, célebre internacionalmente por desarrollar el Modelo Kano de satisfacción del cliente. Kano demostró que las expectativas de los consumidores no son lineales, clasificando los atributos de calidad en básicos, de desempeño y de entusiasmo, lo que revolucionó las metodologías modernas de desarrollo de productos y diseño estratégico."
  };
  const bioText = bios[person.id] || `Nacido en ${person.country} (${person.years}), destacó en la corriente de ${person.stream} (${person.tag}). Su visión central establece que ${person.philosophy.toLowerCase()}`;
  
  profileEl.innerHTML = `
    <div class="profile-top"><div><h3>${person.name}</h3><p class="profile-meta">${person.years} · ${person.country}</p></div><figure class="portrait">${portrait(person)}<figcaption>Retrato documental</figcaption></figure><span class="approach">${person.tag}</span></div>
    <p class="philosophy">${person.philosophy}</p>
    <div class="profile-grid">
      <section class="profile-bio-full"><h4>Biografía y contexto histórico</h4><p>${bioText}</p></section>
      <section><h4>En Ingeniería Industrial</h4><p>${person.use}.<br><br><strong>Concepto clave:</strong> ${person.tool}.</p></section>
      <section><h4>Principales aportaciones</h4><ul>${person.contributions.map(item => `<li>${item}</li>`).join('')}</ul></section>
      <section class="recognition"><h4>Premios y reconocimientos</h4><p>${person.recognition}</p></section>
      <p class="profile-sources">Referencias recomendadas: ${refs}</p>
    </div>`;
}

function renderTimeline() {
  const timelineEl = $('#timeline');
  if (!timelineEl) return;
  const marks = [
    ['1924', 'Shewhart propone la carta de control.'], ['1950', 'Deming y Juran impulsan la calidad en Japón.'], ['1951', 'Feigenbaum publica Total Quality Control.'], ['1962', 'Ishikawa consolida los círculos de calidad.'], ['1966', 'Akao inicia el QFD.'], ['1969', 'Shingo desarrolla SMED.'], ['1984', 'Goldratt publica La Meta.']
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
  },
  {
    id: 6,
    question: "¿A quién se le atribuye la formulación de los '14 puntos para la gestión' y el ciclo PDSA?",
    options: ["W. Edwards Deming", "Joseph M. Juran", "Armand V. Feigenbaum", "Walter A. Shewhart"],
    correct: 0
  },
  {
    id: 7,
    question: "¿En qué consiste la 'Trilogía de Juran' para la gestión de la calidad?",
    options: ["Planificación, control y mejora de la calidad", "Inspección, prueba y entrega", "Diseño, manufactura y servicio", "Prevención, evaluación y fallas"],
    correct: 0
  },
  {
    id: 8,
    question: "¿Qué autor introdujo el estándar de desempeño de 'Cero Defectos' y los cuatro absolutos de la calidad?",
    options: ["Philip B. Crosby", "Genichi Taguchi", "Armand V. Feigenbaum", "W. Edwards Deming"],
    correct: 0
  },
  {
    id: 9,
    question: "¿Quién conceptualizó por primera vez el Control Total de la Calidad (TQC) y los costos de calidad (prevención, evaluación y fallas)?",
    options: ["Armand V. Feigenbaum", "Kaoru Ishikawa", "Joseph M. Juran", "Shigeo Shingo"],
    correct: 0
  },
  {
    id: 10,
    question: "¿Qué autor japonés desarrolló la 'Función de Pérdida' y el diseño robusto enfocado en minimizar la desviación respecto al valor objetivo?",
    options: ["Genichi Taguchi", "Yoji Akao", "Taiichi Ohno", "Masaaki Imai"],
    correct: 0
  },
  {
    id: 11,
    question: "¿Quién es reconocido como el arquitecto principal del Sistema de Producción Toyota (TPS) y el enfoque Just in Time?",
    options: ["Taiichi Ohno", "Shigeo Shingo", "Masaaki Imai", "Kiichiro Toyoda"],
    correct: 0
  },
  {
    id: 12,
    question: "¿Quiénes fueron los cocreadores del Despliegue de la Función de Calidad (QFD) y la famosa 'Casa de la Calidad'?",
    options: ["Yoji Akao y Shigeru Mizuno", "W. Edwards Deming y Joseph Juran", "Taiichi Ohno y Shigeo Shingo", "Kaoru Ishikawa y Genichi Taguchi"],
    correct: 0
  },
  {
    id: 13,
    question: "¿Qué autor formuló la Teoría de Restricciones (TOC) a través de su novela gerencial 'La Meta'?",
    options: ["Eliyahu M. Goldratt", "Vilfredo Pareto", "Philip B. Crosby", "Masaaki Imai"],
    correct: 0
  },
  {
    id: 14,
    question: "¿Qué herramienta estadística básica impulsada por Kaoru Ishikawa permite organizar los datos en categorías para identificar frecuencias?",
    options: ["Histograma / Pareto", "Gráfica de control", "Diagrama de dispersión", "Estratificación"],
    correct: 0
  },
  {
    id: 15,
    question: "Según Armand Feigenbaum, ¿qué término describe el desperdicio oculto en la capacidad de la planta debido a la mala calidad?",
    options: ["Planta oculta", "Muda", "Cuello de botella", "Punto ciego"],
    correct: 0
  },
  {
    id: 16,
    question: "¿Qué corriente o enfoque principal agrupa las aportaciones de Taiichi Ohno, Shigeo Shingo y Masaaki Imai?",
    options: ["Lean / Producción esbelta", "Estadística matemática", "Control Total", "Estrategia corporativa"],
    correct: 0
  },
  {
    id: 17,
    question: "¿Cuál es el objetivo principal de la técnica SMED desarrollada por Shigeo Shingo?",
    options: ["Reducir el tiempo de cambio de herramientas a menos de 10 minutos", "Eliminar por completo la inspección", "Automatizar las líneas de ensamble", "Calcular los costos de no calidad"],
    correct: 0
  },
  {
    id: 18,
    question: "¿Qué autor propuso inicialmente el ciclo de especificación, producción e inspección que más tarde evolved en el ciclo PDSA?",
    options: ["Walter A. Shewhart", "W. Edwards Deming", "Joseph M. Juran", "Vilfredo Pareto"],
    correct: 0
  },
  {
    id: 19,
    question: "¿Qué concepto define Joseph Juran al señalar que la calidad significa que un producto satisface las necesidades del cliente?",
    options: ["Adecuación al uso", "Cero defectos", "Calidad robusta", "Valor agregado"],
    correct: 0
  },
  {
    id: 20,
    question: "En la Teoría de Restricciones de Eliyahu Goldratt, ¿qué nombre recibe el recurso cuyo rendimiento limita la capacidad de todo el sistema?",
    options: ["Cuello de botella / Restricción", "Muda", "Causa raíz", "Punto óptimo"],
    correct: 0
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