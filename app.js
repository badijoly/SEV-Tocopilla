// ==========================================================================
// Speakers en Verde Tocopilla 2026 - Main Application Logic
// Verified Real School GPS Coordinates in Tocopilla + Real Team Photos
// ==========================================================================

// 1. The 10 School Projects with exact verified OpenStreetMap GPS Coordinates & Real Photos
const projects = [
  {
    id: 'pablo-neruda',
    title: 'Tercera Colación Saludable',
    school: 'Escuela Pablo Neruda',
    category: 'circular',
    categoryLabel: 'Alimentación saludable y cero residuos',
    icon: 'apple',
    isWinner: true,
    winnerLabel: 'Pitch Destacado Gran Final 2026 🏆',
    image: 'assets/foto-escuela-pablo-neruda.jpg',
    lat: -22.0895,
    lng: -70.1948,
    address: 'Calle Carrera, Tocopilla',
    shortDesc: 'Campaña educativa que promueve la alimentación saludable aprovechando al máximo la "Tercera Colación" y enseñando recetas que eliminen la basura orgánica familiar.',
    fullDesc: 'El proyecto genera una campaña educativa e informativa integral para crear conciencia sobre la alimentación saludable dentro de la escuela, aprovechando al máximo el beneficio de la "Tercera Colación" (merienda adicional diaria entregada por el Programa de Alimentación Escolar a los estudiantes). La iniciativa enseña recetas deliciosas y nutritivas preparadas con alimentos saludables, fomentando hábitos de consumo consciente y técnicas culinarias que, en el mediano plazo, permitan eliminar por completo la generación de basura orgánica en los hogares y familias del establecimiento.',
    impact: 'Promoción de hábitos nutricionales saludables en la comunidad escolar, máximo aprovechamiento de los alimentos del programa educativo y reducción progresiva del desperdicio de residuos orgánicos en las familias de Tocopilla.',
    tags: ['Tercera Colación', 'Alimentación Saludable', 'Cero Basura Orgánica', 'Recetas Nutritivas', 'ODS 2 & 12']
  },
  {
    id: 'lombrilab',
    title: 'LombriLab',
    school: 'Escuela Estados Unidos de Norteamérica',
    category: 'circular',
    categoryLabel: 'Economía circular y suelos',
    icon: 'recycle',
    isWinner: true,
    winnerLabel: 'Pitch Destacado Gran Final 2026 🏆',
    image: 'assets/foto-escuela-estados-unidos.jpg',
    lat: -22.1082,
    lng: -70.2102,
    address: 'Pasaje Corbeta Covadonga 0460, Caleta Boy',
    shortDesc: 'Transformación de materia orgánica escolar en humus y fertilizante natural mediante lombricultura.',
    fullDesc: 'El proyecto consiste en reciclar la materia orgánica generada en la comunidad escolar a través de la lombricultura, utilizando lombrices para transformar los residuos orgánicos en humus, un fertilizante natural de alta calidad. Buscamos reducir la contaminación, dar una segunda vida a los desechos y fomentar prácticas sustentables en nuestra comunidad escolar, otorgando un valor agregado al producto.',
    impact: 'Reducción de residuos orgánicos en vertederos de Tocopilla, regeneración de suelos en zonas áridas y fomento de huertos escolares comunitarios.',
    tags: ['Lombricultura', 'Humus Natural', 'Residuos Orgánicos', 'ODS 12']
  },
  {
    id: 'domingo-latrille',
    title: 'Horizonte Villanorte',
    school: 'Liceo Polivalente Domingo Latrille',
    category: 'inclusion',
    categoryLabel: 'Costanera activa y sostenibilidad',
    icon: 'compass',
    image: 'assets/foto-liceo-domingo-latrille.jpg',
    lat: -22.0883,
    lng: -70.1943,
    address: 'Calle Carrera 1305, Sector Villanorte, Tocopilla',
    shortDesc: 'Transformación de la costanera en un espacio activo, inclusivo y sostenible con máquinas de ejercicio, juegos inclusivos, arte tocopillano y energía solar.',
    fullDesc: 'Este proyecto no busca solamente embellecer el sector: propone transformar la costanera en un espacio activo, inclusivo y sostenible, donde la infraestructura se combine con actividades que permitan la participación vecinal. La propuesta busca la instalación de máquinas para hacer ejercicio, caminar y correr, además de encuentros deportivos y actividades al aire libre. Asimismo, busca que existan juegos inclusivos, jornadas recreativas, talleres artísticos y educación ambiental acompañado de veredas mejoradas, señalética y zonas de descanso.<br><br>El equipo destaca la integración de artistas dentro de la comunidad dispuestos a colaborar en la creación de murales artísticos que reflejen una identidad tocopillana. Una parte vital de esta propuesta tiene relación con facilitar la instalación de sombreaderos para aquellas jornadas calurosas, aprovechar la energía solar con luminarias LED donde sea técnicamente posible e insertar áreas y puntos verdes de bajo consumo de agua.',
    impact: 'Transformación del borde costero de Villanorte en un espacio activo, accesible, deportivo y energéticamente sostenible con identidad tocopillana.',
    tags: ['Costanera Activa', 'Inclusión Social', 'Energía Solar LED', 'Identidad Tocopillana', 'ODS 11']
  },
  {
    id: 'protesis',
    title: 'Prótesis Robótica 3D',
    school: 'Liceo Politécnico (Equipo 1)',
    category: 'tech',
    categoryLabel: 'Tecnología y robótica 3D',
    icon: 'cpu',
    image: 'assets/foto-liceo-politecnico-equipo-1.jpg',
    lat: -22.0850,
    lng: -70.1953,
    address: 'Pasaje 104 / Calle Washington, Tocopilla',
    shortDesc: 'Desarrollo de prótesis robótica funcional de miembro superior accesible y de bajo costo fabricada mediante impresión 3D.',
    fullDesc: 'Desarrollo progresivo de una prótesis robótica de miembro superior fabricada mediante manufactura aditiva (impresión 3D). Actualmente el equipo cuenta con un prototipo funcional de mano y antebrazo; la siguiente etapa considera la incorporación del brazo y articulación de hombro para aumentar su funcionalidad y rango de movimiento, ofreciendo una alternativa accesible para personas con discapacidad física.',
    impact: 'Democratización de tecnología biomédica de bajo costo para familias vulnerables del norte grande que no pueden costear prótesis comerciales.',
    tags: ['Impresión 3D', 'Robótica Social', 'Biomédica', 'ODS 3 & 10']
  },
  {
    id: 'basurero-inteligente',
    title: 'Basurero Inteligente Gamificado',
    school: 'Liceo Politécnico (Equipo 2)',
    category: 'tech',
    categoryLabel: 'Tecnología y gamificación',
    icon: 'sparkles',
    image: 'assets/foto-liceo-politecnico-equipo-2.jpg',
    lat: -22.0844,
    lng: -70.1947,
    address: 'Pasaje 104 / Calle Washington, Tocopilla',
    shortDesc: 'Contenedor con sensor que clasifica residuos y premia al usuario con puntos canjeables en comercios locales de Tocopilla.',
    fullDesc: 'Iniciativa que desarrolla un basurero inteligente capaz de identificar y clasificar residuos mediante un sistema de reconocimiento tecnológico. A través de un escáner, las personas acercan un residuo (como una botella plástica) para que el dispositivo indique el contenedor correcto. Además, incorpora gamificación: las personas acumulan puntos por reciclar correctamente, canjeables por descuentos o productos en comercios asociados de Tocopilla.',
    impact: 'Aumento significativo en la segregación de residuos en origen y fortalecimiento de la economía circular y el comercio de barrio en Tocopilla.',
    tags: ['Sensores IoT', 'Gamificación', 'Comercio Local', 'ODS 12']
  },
  {
    id: 'ecopuntos',
    title: 'EcoPuntos Escolares',
    school: 'Escuela Bernardo O´Higgins',
    category: 'circular',
    categoryLabel: 'Economía circular y ABP',
    icon: 'box',
    isWinner: true,
    winnerLabel: 'Pitch Destacado Gran Final 2026 🏆',
    image: 'assets/foto-escuela-bernardo-ohiggins.jpg',
    lat: -22.0859,
    lng: -70.1893,
    address: 'Avenida 18 de Septiembre 2850, Villa Ayquina',
    shortDesc: 'Transformación de contenedores en desuso de SQM en modernos puntos limpios inclusivos mediante ABP escolar.',
    fullDesc: 'Proyecto basado en Aprendizaje Basado en Proyectos (ABP) desarrollado por estudiantes de 6° básico en Lenguaje y Ciencias. La iniciativa aborda la falta de puntos de reciclaje en escuelas y espacios públicos de Tocopilla, reutilizando contenedores en desuso de SQM para transformarlos en puntos limpios que fomenten el reciclaje y el cuidado ambiental.',
    impact: 'Instalación de infraestructura de reciclaje colaborativa, educación ambiental y fomento de la corresponsabilidad en Tocopilla.',
    tags: ['Upcycling', 'SQM Contenedores', 'Economía Circular', 'ODS 11 & 12']
  },
  {
    id: 'sweet-calm',
    title: 'Sweet Calm',
    school: 'Escuela Pedro Aguirre Cerda',
    category: 'inclusion',
    categoryLabel: 'Inclusión y NEE',
    icon: 'heart-handshake',
    image: 'assets/foto-escuela-pedro-aguirre-cerda.jpg',
    lat: -22.0860,
    lng: -70.1888,
    address: 'Gómez Carreño, Villa Ayquina, Tocopilla',
    shortDesc: 'Elaboración de té e infusiones naturales relajantes desarrollado por estudiantes con Necesidades Educativas Permanentes.',
    fullDesc: 'Este proyecto busca desarrollar habilidades laborales, cognitivas, sensoriales y de autonomía mediante la elaboración de bolsitas de té e infusiones naturales con propiedades relajantes. Diseñado especialmente para estudiantes con necesidades educativas permanentes (NEE), favorece la atención, la motricidad fina, el seguimiento de instrucciones, el trabajo colaborativo y la regulación emocional.',
    impact: 'Favorece la inclusión sociolaboral efectiva de estudiantes con discapacidad, fortaleciendo su autoestima, autonomía y vinculación comunitaria.',
    tags: ['Inclusión Escolar', 'NEE', 'Regulación Emocional', 'Herbalismo', 'ODS 10']
  },
  {
    id: 'jaboneria',
    title: 'Jabonería con Aceites Reciclados',
    school: 'Colegio Sagrada Familia',
    category: 'circular',
    categoryLabel: 'Economía circular y química verde',
    icon: 'droplets',
    image: 'assets/foto-colegio-sagrada-familia.jpg',
    lat: -22.0947,
    lng: -70.2052,
    address: 'Avenida Arturo Prat, Tocopilla',
    shortDesc: 'Elaboración de jabones artesanales mediante saponificación de aceites de cocina usados recolectados en locales gastronómicos.',
    fullDesc: 'Elaboración de jabones artesanales mediante saponificación utilizando como materia prima aceites de cocina usados asociados a locales de comida de Tocopilla. Transforma un residuo altamente contaminante del agua en productos de higiene de alto valor agregado. Contempla dos líneas: Línea Herbal (ruda, menta, romero y lavanda) y Línea Nutritiva (miel, canela y borra de café para exfoliación).',
    impact: 'Protección directa del borde costero y red de alcantarillado de Tocopilla, evitando la contaminación hídrica y fomentando el emprendimiento escolar.',
    tags: ['Saponificación', 'Aceite Reciclado', 'Línea Herbal & Nutritiva', 'ODS 6 & 14']
  },
  {
    id: 'acuaponia',
    title: 'Jardín Acuapónico',
    school: 'Escuela Arturo Prat Chacón',
    category: 'bio',
    categoryLabel: 'Biotecnología y nutrición',
    icon: 'sprout',
    image: 'assets/foto-escuela-arturo-prat.jpg',
    lat: -22.0891,
    lng: -70.1952,
    address: 'Avenida 18 de Septiembre 2284, Tocopilla',
    shortDesc: 'Acuaponía vertical para la producción sustentable de hortalizas y crianza de peces, promoviendo hábitos saludables y combatiendo la obesidad infantil.',
    fullDesc: 'La acuaponía vertical busca promover hábitos de alimentación saludable en los estudiantes mediante la producción sustentable de hortalizas y la crianza de peces. A través de experiencias prácticas de aprendizaje en su escuela, los alumnos participan activamente en el cultivo y cuidado del sistema, fortaleciendo sus conocimientos sobre nutrición, medio ambiente y seguridad alimentaria.',
    impact: 'Contribuirá a disminuir los índices de sobrepeso y obesidad escolar, asegurando el acceso y consumo de alimentos frescos, saludables y cosechados por los propios estudiantes en Tocopilla.',
    tags: ['Acuaponía', 'Seguridad Alimentaria', 'Nutrición Escolar', 'ODS 2 & 3']
  },
  {
    id: 'bloompods',
    title: 'BloomPods',
    school: 'Escuela Carlos Condell de la Haza',
    category: 'bio',
    categoryLabel: 'Biotecnología y reforestación',
    icon: 'flower-2',
    image: 'assets/foto-escuela-carlos-condell.jpg',
    lat: -22.0943,
    lng: -70.2045,
    address: 'Calle Baquedano S/N, Tocopilla',
    shortDesc: 'Lápices plantables y cápsulas de vida que convierten espacios desérticos vacíos en áreas verdes llenas de biodiversidad.',
    fullDesc: '¿Qué pasaría si un lápiz no terminara en la basura, transformándose en vida? ¿Y si una pequeña cápsula pudiera convertir espacios vacíos en lugares llenos de biodiversidad? Así nace BloomPods: una innovadora propuesta de lápices y cápsulas germinadoras diseñadas para adaptarse al suelo y clima árido de Tocopilla, promoviendo microecosistemas verdes.',
    impact: 'Revegetación participativa en escuelas y espacios públicos de Tocopilla, creando conciencia ecológica y microclimas amigables en el desierto costero.',
    tags: ['Lápices Plantables', 'Biodiversidad', 'Áreas Verdes', 'ODS 15']
  }
];

// Map instance and markers registry
let tocopillaMap = null;
let mapMarkers = {};

// 2. Initialize Interactive Relief/Topographic Map of Tocopilla
function initTocopillaMap() {
  const mapContainer = document.getElementById('tocopillaMap');
  if (!mapContainer) return;

  // Centro inicial de la ciudad de Tocopilla
  tocopillaMap = L.map('tocopillaMap', {
    scrollWheelZoom: false
  }).setView([-22.0895, -70.198], 14);

  // Free Esri World Topographic Map - High quality terrain & relief, NO API KEY REQUIRED
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri, USGS, DeLorme, HERE, NRCan | Tocopilla',
    maxZoom: 18,
    minZoom: 12
  }).addTo(tocopillaMap);

  // Group to calculate precise bounding box covering all schools
  const markerGroup = L.featureGroup();

  // Color map for marker backgrounds based on category
  const categoryColors = {
    circular: '#16a34a',
    tech: '#0284c7',
    bio: '#ca8a04',
    inclusion: '#db2777'
  };

  // Add individual pins for each project
  projects.forEach(p => {
    const pinColor = categoryColors[p.category] || '#581c87';
    
    // Modern custom HTML pin with category color, icon and drop shadow
    const customIcon = L.divIcon({
      html: `
        <div class="custom-map-pin" style="transform: translate(-50%, -50%);">
          <div style="
            background: #ffffff;
            border: 2.5px solid ${pinColor};
            color: ${pinColor};
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 14px rgba(0,0,0,0.22);
            transition: all 0.2s ease;
          ">
            <i data-lucide="${p.icon}" style="width: 18px; height: 18px;"></i>
          </div>
          <div style="
            width: 0; 
            height: 0; 
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid ${pinColor};
            margin: -1px auto 0 auto;
          "></div>
        </div>
      `,
      className: 'bg-transparent',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22]
    });

    // Popup Content with edge-to-edge CABECERA photo, verified address and button to open full modal
    const popupContent = `
      <div class="text-left w-72 sm:w-80 font-sans bg-white overflow-hidden">
        <!-- CABECERA (Header Image / Banner) -->
        <div class="relative w-full h-36 bg-slate-900 overflow-hidden">
          ${p.image ? `
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div class="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[10px] font-bold">
              <span class="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1 border border-white/20">
                <i data-lucide="camera" class="w-3 h-3 text-sev-green"></i>
                <span>Equipo en Terreno</span>
              </span>
              <span class="badge-${p.category} text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                ${p.categoryLabel}
              </span>
            </div>
          ` : `
            <div class="w-full h-full bg-gradient-to-br from-purple-800 via-purple-950 to-slate-950 flex flex-col items-center justify-center text-white p-3 text-center">
              <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-1">
                <i data-lucide="${p.icon}" class="w-5 h-5 text-sev-green"></i>
              </div>
              <span class="text-xs font-bold text-white">${p.school}</span>
              <span class="text-[9px] text-purple-200 mt-0.5 font-medium">${p.categoryLabel}</span>
            </div>
          `}
        </div>

        <!-- Body with comfortable padding -->
        <div class="p-4 space-y-2.5">
          <h4 class="text-base font-black text-slate-900 font-display leading-tight">${p.title}</h4>
          
          <div class="text-xs font-bold text-sev-greenDark flex items-center gap-1">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5 shrink-0"></i>
            <span class="truncate">${p.school}</span>
          </div>

          <div class="text-[11px] text-slate-400 font-medium flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>
            <span class="truncate">${p.address}</span>
          </div>

          <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-0.5">${p.shortDesc}</p>

          <button onclick="openProjectModal('${p.id}')" 
                  class="w-full mt-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-sev-purple hover:bg-purple-900 text-white transition flex items-center justify-center gap-1.5 shadow-md">
            <span>Ver Ficha Completa</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;

    const marker = L.marker([p.lat, p.lng], { icon: customIcon })
      .bindPopup(popupContent, { maxWidth: 340 });

    markerGroup.addLayer(marker);
    mapMarkers[p.id] = marker;
  });

  markerGroup.addTo(tocopillaMap);

  // Automatically zoom and center to show ALL 10 schools in Tocopilla
  tocopillaMap.fitBounds(markerGroup.getBounds().pad(0.12));

  // Render icons whenever a popup opens on map
  tocopillaMap.on('popupopen', () => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  // Re-run Lucide icons for map pins
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 3. Render School Quick-Fly Pills above Map (Todas a la vista en filas)
function renderSchoolPills() {
  const container = document.getElementById('schoolPillsContainer');
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <button onclick="flyToSchool('${p.id}')" 
            title="Ubicar ${p.school} en el mapa"
            class="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-sev-purple border border-slate-200 hover:border-sev-purple/40 shadow-sm hover:shadow transition flex items-center gap-1.5 active:scale-95">
      <span class="w-2 h-2 rounded-full ${p.image ? 'bg-sev-green' : 'bg-slate-400'} shrink-0"></span>
      <span>${p.school}</span>
      ${p.image ? '<i data-lucide="camera" class="w-3 h-3 text-sev-green shrink-0"></i>' : ''}
    </button>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 4. Fly to school in map and open its popup
function flyToSchool(projectId) {
  const p = projects.find(item => item.id === projectId);
  if (!p || !tocopillaMap) return;

  // Scroll smoothly to map if not in view
  const mapEl = document.getElementById('tocopillaMap');
  if (mapEl) {
    mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  tocopillaMap.flyTo([p.lat, p.lng], 16, { duration: 1.2 });
  
  setTimeout(() => {
    if (mapMarkers[p.id]) {
      mapMarkers[p.id].openPopup();
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }, 1300);
}

// 5. Render Projects Grid Cards (Carrusel Horizontal Infinito Arrastrable)
function renderProjects(items) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  let cardsHtml = items.map(p => `
    <div class="carousel-card-standard shrink-0 p-6 rounded-3xl flex flex-col justify-between space-y-4 bg-white ${p.isWinner ? 'card-winner-podium' : 'border border-slate-200'} group shadow-sm hover:shadow-xl transition-all select-none">
      <div class="space-y-3">
        
        ${p.isWinner ? `
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-[11px] shadow-sm">
            <i data-lucide="trophy" class="w-3.5 h-3.5 fill-slate-950"></i>
            <span>Pitch Destacado Gran Final 2026</span>
          </div>
        ` : ''}

        <!-- Team Photo or Thematic Visual Header -->
        ${p.image ? `
          <div class="relative w-full h-48 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-inner group/photo">
            <img src="${p.image}" alt="${p.title} - ${p.school}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none"></div>
            <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-bold pointer-events-none">
              <span class="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/20">
                <i data-lucide="camera" class="w-3.5 h-3.5 text-sev-green"></i>
                <span>Equipo en Terreno</span>
              </span>
              <span class="bg-sev-purple/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                Tocopilla 2026
              </span>
            </div>
          </div>
        ` : `
          <div class="relative w-full h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-slate-50 to-emerald-50 border border-slate-200/80 flex flex-col items-center justify-center p-4 text-center">
            <div class="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sev-purple mb-2 border border-slate-100">
              <i data-lucide="${p.icon}" class="w-6 h-6"></i>
            </div>
            <span class="text-xs font-bold text-slate-600">Registro Fotográfico del Proceso</span>
            <span class="text-[10px] text-slate-400 font-medium mt-0.5">Presentación en vivo • 13 de Noviembre</span>
          </div>
        `}

        <!-- Header badge -->
        <div class="flex items-center justify-between gap-2 pt-1">
          <span class="badge-${p.category} text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            ${p.categoryLabel}
          </span>
          <button onclick="flyToSchool('${p.id}')" title="Ubicar en el mapa de Tocopilla" 
                  class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-emerald-100 hover:text-sev-greenDark flex items-center justify-center text-slate-600 transition">
            <i data-lucide="map-pin" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Title & School -->
        <div>
          <h3 class="text-xl font-bold font-display text-slate-900 leading-tight">
            ${p.title}
          </h3>
          <div class="text-xs font-bold text-sev-greenDark mt-1 flex items-center gap-1.5 uppercase">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
            <span class="truncate">${p.school}</span>
          </div>
          <div class="text-[11px] text-slate-400 font-medium mt-0.5 truncate">
            ${p.address}
          </div>
        </div>

        <!-- Short Description -->
        <p class="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
          ${p.shortDesc}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${p.tags.map(t => `<span class="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md border border-slate-200">${t}</span>`).join('')}
        </div>

      </div>

      <!-- Action Footer with Fly to Map and Open Modal -->
      <div class="pt-4 border-t border-slate-100 flex items-center gap-2">
        <button onclick="flyToSchool('${p.id}')" 
                class="py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1 shrink-0" 
                title="Ver en el mapa">
          <i data-lucide="map" class="w-3.5 h-3.5 text-sev-purple"></i>
          <span>Mapa</span>
        </button>
        <button onclick="openProjectModal('${p.id}')" 
                class="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-sev-green hover:bg-sev-greenDark text-white transition flex items-center justify-center gap-1.5 group">
          <span>Ver ficha completa</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');

  grid.innerHTML = cardsHtml;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Inicializar o re-inicializar el carrusel horizontal arrastrable
  setupProjects2026Slider();
}

// 6. Project Filter and Search Logic
function setupFiltersAndSearch() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearch');

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    const filtered = projects.filter(item => {
      const matchesCategory = (currentCategory === 'all') || (item.category === currentCategory);
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.title.toLowerCase().includes(query) ||
        item.school.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query) ||
        item.shortDesc.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    renderProjects(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
}

// 7. Modal Logic
function openProjectModal(projectId) {
  const p = projects.find(item => item.id === projectId);
  if (!p) return;

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSchool = document.getElementById('modalSchool');
  const modalBadges = document.getElementById('modalBadges');
  const modalHeaderImg = document.getElementById('modalHeaderImage') || document.getElementById('modalHeaderImg');
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = p.title;
  modalSchool.innerHTML = `
    <div class="flex flex-col">
      <div class="flex items-center gap-1.5 text-sev-greenDark font-bold">
        <i data-lucide="graduation-cap" class="w-4 h-4"></i>
        <span>${p.school}</span>
      </div>
      <div class="text-xs text-slate-500 font-medium pl-5 mt-0.5">${p.address}</div>
    </div>
  `;
  
  modalBadges.innerHTML = `
    <span class="badge-${p.category} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      ${p.categoryLabel}
    </span>
  `;

  // Render Full-Bleed Cabecera at the top of the modal dialog
  if (modalHeaderImg) {
    modalHeaderImg.className = 'relative w-full h-60 sm:h-72 shrink-0 bg-slate-900 overflow-hidden';
    if (p.image) {
      modalHeaderImg.innerHTML = `
        <img src="${p.image}" alt="${p.title} - ${p.school}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs font-bold">
          <span class="bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2 border border-white/20 shadow-md">
            <i data-lucide="camera" class="w-4 h-4 text-sev-green"></i>
            <span>Equipo en Terreno • ${p.school}</span>
          </span>
          <span class="bg-sev-purple/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] uppercase tracking-wider hidden sm:inline-block shadow-md">
            Tocopilla 2026
          </span>
        </div>
      `;
    } else {
      modalHeaderImg.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-purple-800 via-purple-950 to-slate-950 flex flex-col items-center justify-center text-white p-6 text-center relative">
          <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2.5 shadow-lg">
            <i data-lucide="${p.icon}" class="w-7 h-7 text-sev-green"></i>
          </div>
          <span class="text-xl font-black font-display text-white tracking-wide">${p.school}</span>
          <span class="text-xs text-purple-200 font-semibold mt-1">Registro Fotográfico del Proceso • Presentación Final 13 de Noviembre</span>
        </div>
      `;
    }
  }

  modalBody.innerHTML = `
    <p class="text-sm leading-relaxed">${p.fullDesc}</p>
    <div class="flex flex-wrap gap-1.5 pt-2">
      ${p.tags.map(t => `<span class="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">${t}</span>`).join('')}
    </div>
  `;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
    modal.classList.remove('hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
      modal.classList.add('hidden');
    }
  }
}

function openPhotoModal(imgSrc, title, caption, projectId) {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSchool = document.getElementById('modalSchool');
  const modalBadges = document.getElementById('modalBadges');
  const modalHeaderImg = document.getElementById('modalHeaderImage') || document.getElementById('modalHeaderImg');
  const modalBody = document.getElementById('modalBody');

  if (!modal) return;

  const project = projectId ? projects.find(item => item.id === projectId) : null;

  if (modalBadges) {
    if (project) {
      modalBadges.innerHTML = `
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-sev-purple">Equipo Finalista • Gran Final 2026</span>
        <span class="badge-${project.category} text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">${project.categoryLabel}</span>
      `;
    } else if (title === 'Speakers en acción') {
      modalBadges.innerHTML = `<span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-sev-greenDark">Gran Final 2026 • Instantánea en Escenario</span>`;
    } else {
      modalBadges.innerHTML = `<span class="px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-sev-magenta">Fotografía Oficial • Gran Final 2026</span>`;
    }
  }

  if (modalTitle) {
    modalTitle.textContent = title || 'Comunidad Escolar en la Gran Final 2026';
  }

  if (modalSchool) {
    if (project) {
      modalSchool.innerHTML = `
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5 text-sev-greenDark font-bold">
            <i data-lucide="graduation-cap" class="w-4 h-4"></i>
            <span>${project.school}</span>
          </div>
          <div class="text-xs text-slate-500 font-medium pl-5 mt-0.5">${project.address}</div>
        </div>
      `;
    } else {
      modalSchool.innerHTML = `<span class="text-xs font-bold text-slate-500 uppercase">USQAI Universidad Católica del Norte • Gran Final 2026</span>`;
    }
  }
  
  if (modalHeaderImg) {
    modalHeaderImg.className = 'relative w-full bg-slate-950 flex items-center justify-center overflow-hidden min-h-[260px] max-h-[55vh]';
    modalHeaderImg.innerHTML = `<img src="${imgSrc}" alt="${title}" class="w-full h-auto max-h-[55vh] object-contain">`;
  }

  if (modalBody) {
    const projectLinkHtml = project ? `
      <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <button type="button" 
                onclick="closeProjectModal(); setTimeout(() => openProjectModal('${project.id}'), 120);" 
                class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sev-green hover:bg-sev-greenDark text-white font-bold text-xs shadow-md transition group">
          <i data-lucide="folder-open" class="w-4 h-4 text-emerald-100"></i>
          <span>Ver Ficha Completa del Proyecto (${project.title})</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
        <a href="${imgSrc}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-sev-purple hover:underline py-2">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          <span>Abrir foto original en alta resolución</span>
        </a>
      </div>
    ` : `
      <div class="pt-2">
        <a href="${imgSrc}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-sev-purple hover:underline">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          <span>Abrir fotografía en alta resolución original</span>
        </a>
      </div>
    `;

    modalBody.innerHTML = `
      <p class="text-sm leading-relaxed text-slate-700 font-medium">${caption || 'Instantánea que retrata el compromiso, oratoria y talento de las delegaciones escolares tocopillanas durante la Gran Final 2026.'}</p>
      ${projectLinkHtml}
    `;
  }

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
    modal.classList.remove('hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 8. Navigation & Header Behaviors (Dropdown de Secciones)
function setupNavigation() {
  const dropdownBtn = document.getElementById('sectionsDropdownBtn');
  const dropdownMenu = document.getElementById('sectionsDropdownMenu');
  const dropdownChevron = document.getElementById('sectionsDropdownChevron');
  const sectionLinks = document.querySelectorAll('.section-menu-link');
  const header = document.getElementById('mainHeader');

  function toggleDropdown(show) {
    if (!dropdownMenu) return;
    const isHidden = dropdownMenu.classList.contains('hidden');
    const targetState = show !== undefined ? show : isHidden;
    
    if (targetState) {
      dropdownMenu.classList.remove('hidden');
      dropdownBtn?.setAttribute('aria-expanded', 'true');
      dropdownChevron?.classList.add('rotate-180');
    } else {
      dropdownMenu.classList.add('hidden');
      dropdownBtn?.setAttribute('aria-expanded', 'false');
      dropdownChevron?.classList.remove('rotate-180');
    }
  }

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    sectionLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleDropdown(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        toggleDropdown(false);
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-md');
    } else {
      header?.classList.remove('shadow-md');
    }
  });

  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightboxModal');
    const isLightboxOpen = lightbox && (lightbox.hasAttribute('open') || !lightbox.classList.contains('hidden'));

    if (e.key === 'Escape') {
      toggleDropdown(false);
      closeProjectModal();
      closeLightbox();
    } else if (isLightboxOpen && e.key === 'ArrowRight') {
      nextLightbox();
    } else if (isLightboxOpen && e.key === 'ArrowLeft') {
      prevLightbox();
    }
  });
}

// 9. Controlador Universal de Carruseles Horizontales Infinitos Arrastrables (Drag & Drop)
function setupInfiniteDragCarousel(trackId, prevBtnId, nextBtnId) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const prevBtn = prevBtnId ? document.getElementById(prevBtnId) : null;
  const nextBtn = nextBtnId ? document.getElementById(nextBtnId) : null;

  // Si ya tiene un slider inicializado y se llama de nuevo con las mismas tarjetas, no duplicar listeners
  if (track._sliderInitialized) return;

  const originalCards = Array.from(track.children);
  if (originalCards.length === 0) return;

  // Duplicar tarjetas para permitir un ciclo continuo infinito sin topes
  // Si hay 3 o menos tarjetas, duplicamos 2 veces para tener suficiente longitud de scroll
  const repeatCount = originalCards.length < 4 ? 2 : 1;
  for (let r = 0; r < repeatCount; r++) {
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  // Refrescar iconos Lucide en los clones
  if (window.lucide) {
    window.lucide.createIcons();
  }

  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let hasDragged = false;
  let singleLoopWidth = 0;

  const totalLoops = repeatCount + 1;
  function updateLoopMetrics() {
    singleLoopWidth = track.scrollWidth / totalLoops;
  }

  // Inicializar métricas con un pequeño desplazamiento inicial para permitir arrastre a la izquierda inmediatamente
  setTimeout(() => {
    updateLoopMetrics();
    if (track.scrollLeft < 10) {
      track.scrollLeft = 20;
    }
  }, 150);

  window.addEventListener('resize', updateLoopMetrics);

  // Bucle infinito continuo mediante el evento scroll
  track.addEventListener('scroll', () => {
    if (singleLoopWidth <= 0) updateLoopMetrics();
    if (singleLoopWidth > 0) {
      if (track.scrollLeft >= singleLoopWidth * 1.5) {
        track.scrollLeft -= singleLoopWidth;
      } else if (track.scrollLeft <= 5) {
        track.scrollLeft += singleLoopWidth;
      }
    }
  });

  // Interacción de Arrastre con Mouse (Drag & Drop)
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    hasDragged = false;
    track.classList.add('cursor-grabbing');
    track.classList.remove('cursor-grab', 'scroll-smooth');
    startX = e.pageX - track.offsetLeft;
    scrollLeftStart = track.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('cursor-grabbing');
    track.classList.add('cursor-grab', 'scroll-smooth');
  });

  track.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      track.classList.remove('cursor-grabbing');
      track.classList.add('cursor-grab', 'scroll-smooth');
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 6) {
      hasDragged = true;
    }
    track.scrollLeft = scrollLeftStart - walk;
  });

  // Prevenir apertura de enlaces o modales si el usuario estuvo arrastrando
  track.addEventListener('click', (e) => {
    if (hasDragged) {
      const interactive = e.target.closest('a, button');
      if (interactive) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, true);

  // Navegación con Botones de Flechas
  const getStep = () => {
    const firstCard = track.children[0];
    return firstCard ? firstCard.offsetWidth + 24 : 360;
  };

  prevBtn?.addEventListener('click', () => {
    track.classList.add('scroll-smooth');
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    track.classList.add('scroll-smooth');
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  track._sliderInitialized = true;
}

// 10. Función especializada para los Proyectos 2026 (bajo el mapa)
function setupProjects2026Slider() {
  const track = document.getElementById('projectsGrid');
  if (!track) return;
  track._sliderInitialized = false;
  setupInfiniteDragCarousel('projectsGrid', 'projects2026Prev', 'projects2026Next');
}

// 11. Modern Web Platform Features (Progress Indicator, Dialog Fallbacks & View Transitions)
function initModernWebFeatures() {
  // A. Scroll Progress Bar JS Fallback (for browsers lacking native animation-timeline: scroll())
  if (!CSS.supports('animation-timeline', 'scroll()')) {
    const progress = document.querySelector('#scrollProgress');
    if (progress) {
      window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const pct = scrollable > 0 ? (scrolled / scrollable) : 0;
        progress.style.transform = `scaleX(${pct})`;
      }, { passive: true });
    }
  }

  // B. Scroll Reveal Fallback via IntersectionObserver
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)') &&
      matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }

  // C. Native <dialog> Light Dismiss Fallback (click outside to close)
  const modal = document.getElementById('projectModal');
  if (modal && !('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, d) => {
      const r = d.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    modal.addEventListener('click', (e) => {
      if (outside(e, modal)) {
        closeProjectModal();
      }
    });
  }
}

// 12. Galería Oficial de la Gran Final 2026 en USQAI UCN (Selección oficial de 16 fotos)
const final2026Photos = [
  { 
    id: 1, 
    file: 'assets/galeria-final-web/galeria-final-01.jpg', 
    tag: 'Bienvenida', 
    title: 'Bienvenida para las delegaciones participantes', 
    desc: 'Llegada y recepción oficial para las delegaciones escolares participantes en USQAI UCN.',
    projectId: null
  },
  { 
    id: 2, 
    file: 'assets/galeria-final-web/galeria-final-02.jpg', 
    tag: 'Talleres', 
    title: 'Todos los estudiantes preparándose escénicamente', 
    desc: 'Dinámicas de oratoria, expresión corporal y preparación escénica previa para enfrentar el desafío.',
    projectId: null
  },
  { 
    id: 3, 
    file: 'assets/galeria-final-web/galeria-final-03.jpg', 
    tag: 'Talleres', 
    title: 'Pausa activa justo antes de sus presentaciones', 
    desc: 'Los participantes haciendo una pausa activa y ejercicios de relajación antes de subir al escenario.',
    projectId: null
  },
  { 
    id: 4, 
    file: 'assets/galeria-final-web/galeria-final-04.jpg', 
    tag: 'Audiencia', 
    title: 'Toda la audiencia atentos a los pitch', 
    desc: 'El auditorio en pleno, jurados, docentes y delegaciones escolares concentrados en las exposiciones.',
    projectId: null
  },
  { 
    id: 5, 
    file: 'assets/galeria-final-web/galeria-final-05.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Basurero Inteligente Gamificado', 
    desc: 'Exposición del proyecto de basurero con reconocimiento de residuos del Liceo Politécnico Diego Portales.',
    projectId: 'basurero-inteligente'
  },
  { 
    id: 6, 
    file: 'assets/galeria-final-web/galeria-final-06.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: BloomPods', 
    desc: 'Defensa del proyecto BloomPods: lápices plantables y cápsulas germinadoras de la Escuela Carlos Condell de la Haza.',
    projectId: 'bloompods'
  },
  { 
    id: 7, 
    file: 'assets/galeria-final-web/galeria-final-07.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Horizonte Villanorte', 
    desc: 'Presentación de la propuesta costera sustentable con energía solar del Liceo Domingo Latrille.',
    projectId: 'domingo-latrille'
  },
  { 
    id: 8, 
    file: 'assets/galeria-final-web/galeria-final-08.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Tercera Colación Saludable', 
    desc: 'Defensa del proyecto Tercera Colación Saludable de la Escuela Pablo Neruda (Pitch Destacado Tocopilla 2026).',
    projectId: 'pablo-neruda'
  },
  { 
    id: 9, 
    file: 'assets/galeria-final-web/galeria-final-09.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: LombriLab', 
    desc: 'Defensa del proyecto LombriLab de la Escuela República de los Estados Unidos (Pitch Destacado Tocopilla 2026).',
    projectId: 'lombrilab'
  },
  { 
    id: 10, 
    file: 'assets/galeria-final-web/galeria-final-10.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Jardín Acuapónico', 
    desc: 'Presentación del sistema sustentable de cultivo recirculante de la Escuela Arturo Prat Chacón.',
    projectId: 'acuaponia'
  },
  { 
    id: 11, 
    file: 'assets/galeria-final-web/galeria-final-11.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: EcoPuntos Escolares', 
    desc: 'Defensa del proyecto EcoPuntos Escolares de la Escuela Bernardo O´Higgins (Pitch Destacado Tocopilla 2026).',
    projectId: 'ecopuntos'
  },
  { 
    id: 12, 
    file: 'assets/galeria-final-web/galeria-final-12.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Prótesis Robótica 3D', 
    desc: 'Demostración de la prótesis de bajo costo en manufactura 3D del Liceo Politécnico Diego Portales.',
    projectId: 'protesis'
  },
  { 
    id: 13, 
    file: 'assets/galeria-final-web/galeria-final-13.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Jabonería con Aceites Reciclados', 
    desc: 'Presentación del modelo de economía circular y jabones ecológicos del Colegio Sagrada Familia.',
    projectId: 'jaboneria'
  },
  { 
    id: 14, 
    file: 'assets/galeria-final-web/galeria-final-14.jpg', 
    tag: 'Pitches', 
    title: 'Equipo expositor: Sweet Calm', 
    desc: 'Defensa de las herramientas multisensoriales inclusivas de la Escuela Pedro Aguirre Cerda.',
    projectId: 'sweet-calm'
  },
  { 
    id: 15, 
    file: 'assets/galeria-final-web/galeria-final-15.jpg', 
    tag: 'Cierre', 
    title: 'Todos los participantes al cierre de las presentaciones', 
    desc: 'La totalidad de los participantes congregados en el escenario al término de la ronda de pitches.',
    projectId: null
  },
  { 
    id: 16, 
    file: 'assets/galeria-final-web/galeria-final-16.jpg', 
    tag: 'Cierre', 
    title: 'Una despedida de la jornada llena de color y energía', 
    desc: 'Cierre festivo cargado de emoción, color y entusiasmo de toda la comitiva de Tocopilla.',
    projectId: null
  }
];

function initFinal2026Gallery() {
  const container = document.getElementById('finalGalleryGrid');
  const toggleBtn = document.getElementById('toggleAllPhotosBtn');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!container) return;

  let activeTag = 'all';

  function renderGallery() {
    let filtered = final2026Photos;
    if (activeTag !== 'all') {
      filtered = final2026Photos.filter(p => 
        p.tag.toLowerCase().includes(activeTag.toLowerCase()) ||
        (activeTag === 'Preparación' && (p.tag === 'Bienvenida' || p.tag === 'Talleres' || p.tag === 'Audiencia'))
      );
    }

    container.innerHTML = filtered.map((p) => `
      <div class="gallery-photo-card group/item scroll-reveal" 
           onclick="openPhotoModal('${p.file}', '${p.title.replace(/'/g, "\\'")}', '${p.desc.replace(/'/g, "\\'")}', ${p.projectId ? `'${p.projectId}'` : 'null'})" 
           title="Clic para ver en alta resolución">
        <img src="${p.file}" alt="${p.title}" loading="lazy" decoding="async">
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover/item:opacity-100 transition-opacity"></div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider border border-white/20">
            ${p.tag}
          </span>
        </div>
        <div class="absolute bottom-3 left-3 right-3 text-white space-y-1">
          <h4 class="text-xs sm:text-sm font-black font-display line-clamp-1 leading-snug group-hover/item:text-amber-300 transition-colors">
            ${p.title}
          </h4>
          <p class="text-[11px] text-slate-200 line-clamp-1 font-medium">
            ${p.desc}
          </p>
        </div>
        <div class="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-sev-purple/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all transform scale-75 group-hover/item:scale-100">
          <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // El botón inferior ahora dirige al repositorio Dropbox con las 325 fotos completas
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <a href="https://www.dropbox.com/scl/fo/fru5uyqwqkqr95wxqiqg2/AH2w4mHMNRsdrcMI3VdUTHo?rlkey=vm8o22213q3in6lo72cnlf5sp&st=28qc0q31&dl=0" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="inline-flex items-center gap-2">
          <i data-lucide="folder-archive" class="w-4 h-4 text-amber-500"></i>
          <span>Explorar y descargar las 325 fotos originales en Dropbox</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      `;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-sev-purple', 'text-white'));
      btn.classList.add('active', 'bg-sev-purple', 'text-white');
      activeTag = btn.getAttribute('data-tag') || 'all';
      renderGallery();
    });
  });

  renderGallery();
}

// 13. Visor Lightbox Limpio para la sección "Speakers en acción"
const speakersEnAccionPhotos = [
  'assets/galeria-final-web/accion-01.jpg',
  'assets/galeria-final-web/accion-02.jpg',
  'assets/galeria-final-web/accion-03.jpg',
  'assets/galeria-final-web/accion-04.jpg',
  'assets/galeria-final-web/accion-05.jpg',
  'assets/galeria-final-web/accion-06.jpg',
  'assets/galeria-final-web/accion-07.jpg',
  'assets/galeria-final-web/accion-08.jpg',
  'assets/galeria-final-web/accion-09.jpg',
  'assets/galeria-final-web/accion-10.jpg',
  'assets/galeria-final-web/accion-11.jpg',
  'assets/galeria-final-web/accion-12.jpg',
  'assets/galeria-final-web/accion-13.jpg',
  'assets/galeria-final-web/accion-14.jpg',
  'assets/galeria-final-web/accion-15.jpg'
];

let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const dialog = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const originalLink = document.getElementById('lightboxOriginalLink');
  if (!dialog || !img) return;

  const currentSrc = speakersEnAccionPhotos[currentLightboxIndex];
  img.src = currentSrc;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${speakersEnAccionPhotos.length}`;
  if (originalLink) originalLink.href = currentSrc;

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
    dialog.classList.remove('hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateLightboxImage() {
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const originalLink = document.getElementById('lightboxOriginalLink');
  if (!img) return;

  img.style.opacity = '0.35';
  img.style.transform = 'scale(0.98)';
  setTimeout(() => {
    const currentSrc = speakersEnAccionPhotos[currentLightboxIndex];
    img.src = currentSrc;
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
    if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${speakersEnAccionPhotos.length}`;
    if (originalLink) originalLink.href = currentSrc;
  }, 90);
}

function nextLightbox(e) {
  if (e) e.stopPropagation();
  currentLightboxIndex = (currentLightboxIndex + 1) % speakersEnAccionPhotos.length;
  updateLightboxImage();
}

function prevLightbox(e) {
  if (e) e.stopPropagation();
  currentLightboxIndex = (currentLightboxIndex - 1 + speakersEnAccionPhotos.length) % speakersEnAccionPhotos.length;
  updateLightboxImage();
}

function closeLightbox() {
  const dialog = document.getElementById('lightboxModal');
  if (dialog) {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
      dialog.classList.add('hidden');
    }
  }
}

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initTocopillaMap();
  renderSchoolPills();
  renderProjects(projects);
  setupFiltersAndSearch();
  setupNavigation();
  initModernWebFeatures();
  initFinal2026Gallery();

  // Inicializar todos los carruseles horizontales infinitos
  setupProjects2026Slider();
  setupInfiniteDragCarousel('sliderImpactoTrack', 'sliderImpactoPrev', 'sliderImpactoNext');
  setupInfiniteDragCarousel('sliderVideosTrack', 'sliderVideosPrev', 'sliderVideosNext');
  setupInfiniteDragCarousel('sliderPitchesTrack', 'sliderPitchesPrev', 'sliderPitchesNext');
  setupInfiniteDragCarousel('sliderTestimoniosTrack', 'sliderTestimoniosPrev', 'sliderTestimoniosNext');
  setupInfiniteDragCarousel('slider2025Track', 'slider2025Prev', 'slider2025Next');

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

