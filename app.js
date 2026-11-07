// ==========================================================================
// Speakers en Verde Tocopilla 2026 - Main Application Logic
// Verified Real School GPS Coordinates in Tocopilla + Real Team Photos
// ==========================================================================

// 1. The 10 School Projects with exact verified OpenStreetMap GPS Coordinates & Real Photos
const projects = [
  {
    id: 'pablo-neruda',
    title: 'Propuesta Sustentable Escolar',
    school: 'Escuela Pablo Neruda',
    category: 'circular',
    categoryLabel: 'En Preparación Activa',
    icon: 'lightbulb',
    image: null,
    lat: -22.0895,
    lng: -70.1948,
    address: 'Calle Carrera, Tocopilla',
    shortDesc: 'Proyecto ecoemprendedor enfocado en soluciones sostenibles para el entorno de su comunidad educativa.',
    fullDesc: 'Los estudiantes de la Escuela Pablo Neruda han participado activamente en los talleres de oratoria, resolución de problemas y formulación de proyectos, preparando su pitch final para la jornada en Usqai UCN.',
    impact: 'Aporte de la comunidad escolar a la sustentabilidad y el cuidado ambiental de la comuna de Tocopilla.',
    tags: ['En Preparación', 'Pitch Final', 'Tocopilla']
  },
  {
    id: 'lombrilab',
    title: 'LombriLab',
    school: 'Escuela Estados Unidos de Norteamérica',
    category: 'circular',
    categoryLabel: 'Economía Circular & Suelos',
    icon: 'recycle',
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
    title: 'Innovación Técnico-Profesional',
    school: 'Liceo Polivalente Domingo Latrille',
    category: 'tech',
    categoryLabel: 'En Preparación Activa',
    icon: 'compass',
    image: 'assets/foto-liceo-domingo-latrille.jpg',
    lat: -22.0883,
    lng: -70.1943,
    address: 'Calle Carrera 1305, Tocopilla',
    shortDesc: 'Iniciativa formulada por estudiantes de educación media técnico-profesional para resolver desafíos comunitarios.',
    fullDesc: 'El equipo del emblemático Liceo Polivalente Domingo Latrille presentará en la jornada del 13 de noviembre su solución desarrollada a lo largo del proceso formativo anual de Speakers en Verde.',
    impact: 'Impulso al talento joven y compromiso social desde la educación técnico-profesional de Tocopilla.',
    tags: ['En Preparación', 'Innovación Juvenil', 'Tocopilla']
  },
  {
    id: 'protesis',
    title: 'Prótesis Robótica 3D',
    school: 'Liceo Politécnico (Equipo 1)',
    category: 'tech',
    categoryLabel: 'Tecnología & Robótica 3D',
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
    categoryLabel: 'Tecnología & Gamificación',
    icon: 'sparkles',
    image: null,
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
    school: 'Escuela Bernardo O´Higgins (con Esc. Pedro Aguirre Cerda)',
    category: 'circular',
    categoryLabel: 'Economía Circular & ABP',
    icon: 'box',
    image: 'assets/foto-escuela-bernardo-ohiggins.jpg',
    lat: -22.0859,
    lng: -70.1893,
    address: 'Avenida 18 de Septiembre 2850, Villa Ayquina',
    shortDesc: 'Transformación de contenedores en desuso de SQM en modernos puntos limpios inclusivos mediante ABP escolar.',
    fullDesc: 'Proyecto basado en Aprendizaje Basado en Proyectos (ABP) desarrollado por estudiantes de 6° básico en Lenguaje y Ciencias, junto a la Escuela Pedro Aguirre Cerda y los párvulos del establecimiento. La iniciativa aborda la falta de puntos de reciclaje en escuelas y espacios públicos de Tocopilla, reutilizando contenedores en desuso de SQM para transformarlos en puntos limpios que fomenten el reciclaje y el cuidado ambiental.',
    impact: 'Instalación de infraestructura de reciclaje colaborativa, educación ambiental intergeneracional y fomento de la corresponsabilidad en Tocopilla.',
    tags: ['Upcycling', 'SQM Contenedores', 'ABP Intercolegial', 'ODS 11 & 12']
  },
  {
    id: 'sweet-calm',
    title: 'Sweet Calm',
    school: 'Escuela Pedro Aguirre Cerda',
    category: 'inclusion',
    categoryLabel: 'Inclusión & NEE',
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
    categoryLabel: 'Economía Circular & Química Verde',
    icon: 'droplets',
    image: null,
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
    categoryLabel: 'Biotecnología & Nutrición',
    icon: 'sprout',
    image: 'assets/foto-escuela-arturo-prat.jpg',
    lat: -22.0891,
    lng: -70.1952,
    address: 'Avenida 18 de Septiembre 2284, Tocopilla',
    shortDesc: 'Acuaponía vertical para la producción sustentable de hortalizas y crianza de peces, promoviendo hábitos saludables y combatiendo la obesidad infantil.',
    fullDesc: 'La acuaponía vertical busca promover hábitos de alimentación saludable en los estudiantes mediante la producción sustentable de hortalizas y la crianza de peces. A través de experiencias prácticas de aprendizaje en su escuela, los alumnos participan activamente en el cultivo y cuidado del sistema, fortaleciendo sus conocimientos sobre nutrición, medioambiente y seguridad alimentaria.',
    impact: 'Contribuirá a disminuir los índices de sobrepeso y obesidad escolar, asegurando el acceso y consumo de alimentos frescos, saludables y cosechados por los propios estudiantes en Tocopilla.',
    tags: ['Acuaponía', 'Seguridad Alimentaria', 'Nutrición Escolar', 'ODS 2 & 3']
  },
  {
    id: 'bloompods',
    title: 'BloomPods',
    school: 'Escuela Carlos Condell de la Haza',
    category: 'bio',
    categoryLabel: 'Biotecnología & Reforestación',
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

// 3. Render School Quick-Fly Pills above Map
function renderSchoolPills() {
  const container = document.getElementById('schoolPillsContainer');
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <button onclick="flyToSchool('${p.id}')" 
            class="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-sev-purple border border-slate-200 transition flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full ${p.image ? 'bg-sev-green' : 'bg-slate-400'}"></span>
      <span class="truncate max-w-[140px] sm:max-w-none">${p.school}</span>
      ${p.image ? '<i data-lucide="camera" class="w-2.5 h-2.5 text-sev-green"></i>' : ''}
    </button>
  `).join('');
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

// 5. Render Projects Grid Cards
function renderProjects(items) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = items.map(p => `
    <div class="story-card p-6 flex flex-col justify-between space-y-4 bg-white border border-slate-200 group">
      <div class="space-y-3">
        
        <!-- Team Photo or Thematic Visual Header -->
        ${p.image ? `
          <div class="relative w-full h-52 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-inner group/photo">
            <img src="${p.image}" alt="${p.title} - ${p.school}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
            <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-bold">
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
            <span>${p.school}</span>
          </div>
          <div class="text-[11px] text-slate-400 font-medium mt-0.5">
            ${p.address}
          </div>
        </div>

        <!-- Short Description -->
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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
          <span class="hidden sm:inline">Mapa</span>
        </button>
        <button onclick="openProjectModal('${p.id}')" 
                class="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-sev-green hover:bg-sev-greenDark text-white transition flex items-center justify-center gap-1.5 group">
          <span>Ver Ficha Completa</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
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
  const modalImpact = document.getElementById('modalImpact');

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

  modalImpact.textContent = p.impact;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// 8. Navigation & Header Behaviors
function setupNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const header = document.getElementById('mainHeader');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initTocopillaMap();
  renderSchoolPills();
  renderProjects(projects);
  setupFiltersAndSearch();
  setupNavigation();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
