// ==========================================================================
// Speakers en Verde Tocopilla 2026 - Main Application Logic
// Storytelling, Interactive Tocopilla Map & Project Modals
// ==========================================================================

// 1. The 10 School Projects Data with Geographic Coordinates in Tocopilla
const projects = [
  {
    id: 'acuaponia',
    title: 'Jardín Acuapónico',
    school: 'Escuela Arturo Prat Chacón',
    category: 'bio',
    categoryLabel: 'Biotecnología & Nutrición',
    icon: 'sprout',
    lat: -22.0945,
    lng: -70.1965,
    shortDesc: 'Acuaponía vertical para la producción sustentable de hortalizas y crianza de peces, promoviendo hábitos saludables y combatiendo la obesidad infantil.',
    fullDesc: 'La acuaponía vertical busca promover hábitos de alimentación saludable en los estudiantes mediante la producción sustentable de hortalizas y la crianza de peces. A través de experiencias prácticas de aprendizaje en su escuela, los alumnos participan activamente en el cultivo y cuidado del sistema, fortaleciendo sus conocimientos sobre nutrición, medioambiente y seguridad alimentaria.',
    impact: 'Contribuirá a disminuir los índices de sobrepeso y obesidad escolar, asegurando el acceso y consumo de alimentos frescos, saludables y cosechados por los propios estudiantes en Tocopilla.',
    tags: ['Acuaponía', 'Seguridad Alimentaria', 'Nutrición Escolar', 'ODS 2 & 3']
  },
  {
    id: 'sweet-calm',
    title: 'Sweet Calm',
    school: 'Escuela Pedro Aguirre Cerda',
    category: 'inclusion',
    categoryLabel: 'Inclusión & NEE',
    icon: 'heart-handshake',
    lat: -22.0905,
    lng: -70.1982,
    shortDesc: 'Elaboración de té e infusiones naturales relajantes desarrollado por estudiantes con Necesidades Educativas Permanentes.',
    fullDesc: 'Este proyecto busca desarrollar habilidades laborales, cognitivas, sensoriales y de autonomía mediante la elaboración de bolsitas de té e infusiones naturales con propiedades relajantes. Diseñado especialmente para estudiantes con necesidades educativas permanentes (NEE), favorece la atención, la motricidad fina, el seguimiento de instrucciones, el trabajo colaborativo y la regulación emocional.',
    impact: 'Favorece la inclusión sociolaboral efectiva de estudiantes con discapacidad, fortaleciendo su autoestima, autonomía y vinculación comunitaria.',
    tags: ['Inclusión Escolar', 'NEE', 'Regulación Emocional', 'Herbalismo', 'ODS 10']
  },
  {
    id: 'lombrilab',
    title: 'LombriLab',
    school: 'Escuela Estados Unidos de Norteamérica',
    category: 'circular',
    categoryLabel: 'Economía Circular & Suelos',
    icon: 'recycle',
    lat: -22.0835,
    lng: -70.1995,
    shortDesc: 'Transformación de materia orgánica escolar en humus y fertilizante natural mediante lombricultura.',
    fullDesc: 'El proyecto consiste en reciclar la materia orgánica generada en la comunidad escolar a través de la lombricultura, utilizando lombrices para transformar los residuos orgánicos en humus, un fertilizante natural de alta calidad. Buscamos reducir la contaminación, dar una segunda vida a los desechos y fomentar prácticas sustentables en nuestra comunidad escolar, otorgando un valor agregado al producto.',
    impact: 'Reducción de residuos orgánicos en vertederos de Tocopilla, regeneración de suelos en zonas áridas y fomento de huertos escolares comunitarios.',
    tags: ['Lombricultura', 'Humus Natural', 'Residuos Orgánicos', 'ODS 12']
  },
  {
    id: 'ecopuntos',
    title: 'EcoPuntos Escolares',
    school: 'Escuela Bernardo O´Higgins (con Esc. Pedro Aguirre Cerda)',
    category: 'circular',
    categoryLabel: 'Economía Circular & ABP',
    icon: 'box',
    lat: -22.0892,
    lng: -70.1970,
    shortDesc: 'Transformación de contenedores en desuso de SQM en modernos puntos limpios inclusivos mediante ABP escolar.',
    fullDesc: 'Proyecto basado en Aprendizaje Basado en Proyectos (ABP) desarrollado por estudiantes de 6° básico en Lenguaje y Ciencias, junto a la Escuela Pedro Aguirre Cerda y los párvulos del establecimiento. La iniciativa aborda la falta de puntos de reciclaje en escuelas y espacios públicos de Tocopilla, reutilizando contenedores en desuso de SQM para transformarlos en puntos limpios que fomenten el reciclaje y el cuidado ambiental.',
    impact: 'Instalación de infraestructura de reciclaje colaborativa, educación ambiental intergeneracional y fomento de la corresponsabilidad en Tocopilla.',
    tags: ['Upcycling', 'SQM Contenedores', 'ABP Intercolegial', 'ODS 11 & 12']
  },
  {
    id: 'protesis',
    title: 'Prótesis Robótica 3D',
    school: 'Liceo Politécnico (Equipo 1)',
    category: 'tech',
    categoryLabel: 'Tecnología & Robótica 3D',
    icon: 'cpu',
    lat: -22.0878,
    lng: -70.1962,
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
    lat: -22.0882,
    lng: -70.1958,
    shortDesc: 'Contenedor con sensor que clasifica residuos y premia al usuario con puntos canjeables en comercios locales de Tocopilla.',
    fullDesc: 'Iniciativa que desarrolla un basurero inteligente capaz de identificar y clasificar residuos mediante un sistema de reconocimiento tecnológico. A través de un escáner, las personas acercan un residuo (como una botella plástica) para que el dispositivo indique el contenedor correcto. Además, incorpora gamificación: las personas acumulan puntos por reciclar correctamente, canjeables por descuentos o productos en comercios asociados de Tocopilla.',
    impact: 'Aumento significativo en la segregación de residuos en origen y fortalecimiento de la economía circular y el comercio de barrio en Tocopilla.',
    tags: ['Sensores IoT', 'Gamificación', 'Comercio Local', 'ODS 12']
  },
  {
    id: 'jaboneria',
    title: 'Jabonería con Aceites Reciclados',
    school: 'Colegio Sagrada Familia',
    category: 'circular',
    categoryLabel: 'Economía Circular & Química Verde',
    icon: 'droplets',
    lat: -22.0920,
    lng: -70.1975,
    shortDesc: 'Elaboración de jabones artesanales mediante saponificación de aceites de cocina usados recolectados en locales gastronómicos.',
    fullDesc: 'Elaboración de jabones artesanales mediante saponificación utilizando como materia prima aceites de cocina usados asociados a locales de comida de Tocopilla. Transforma un residuo altamente contaminante del agua en productos de higiene de alto valor agregado. Contempla dos líneas: Línea Herbal (ruda, menta, romero y lavanda) y Línea Nutritiva (miel, canela y borra de café para exfoliación).',
    impact: 'Protección directa del borde costero y red de alcantarillado de Tocopilla, evitando la contaminación hídrica y fomentando el emprendimiento escolar.',
    tags: ['Saponificación', 'Aceite Reciclado', 'Línea Herbal & Nutritiva', 'ODS 6 & 14']
  },
  {
    id: 'bloompods',
    title: 'BloomPods',
    school: 'Escuela Carlos Condell de la Haza',
    category: 'bio',
    categoryLabel: 'Biotecnología & Reforestación',
    icon: 'flower-2',
    lat: -22.0985,
    lng: -70.1945,
    shortDesc: 'Lápices plantables y cápsulas de vida que convierten espacios desérticos vacíos en áreas verdes llenas de biodiversidad.',
    fullDesc: '¿Qué pasaría si un lápiz no terminara en la basura, transformándose en vida? ¿Y si una pequeña cápsula pudiera convertir espacios vacíos en lugares llenos de biodiversidad? Así nace BloomPods: una innovadora propuesta de lápices y cápsulas germinadoras diseñadas para adaptarse al suelo y clima árido de Tocopilla, promoviendo microecosistemas verdes.',
    impact: 'Revegetación participativa en escuelas y espacios públicos de Tocopilla, creando conciencia ecológica y microclimas amigables en el desierto costero.',
    tags: ['Lápices Plantables', 'Biodiversidad', 'Áreas Verdes', 'ODS 15']
  },
  {
    id: 'pablo-neruda',
    title: 'Propuesta Sustentable Escolar',
    school: 'Escuela Pablo Neruda',
    category: 'circular',
    categoryLabel: 'En Preparación Activa',
    icon: 'lightbulb',
    lat: -22.0790,
    lng: -70.2010,
    shortDesc: 'Proyecto ecoemprendedor enfocado en soluciones sostenibles para el entorno de su comunidad educativa.',
    fullDesc: 'Los estudiantes de la Escuela Pablo Neruda han participado activamente en los talleres de oratoria, resolución de problemas y formulación de proyectos, preparando su pitch final para la jornada en Usqai UCN.',
    impact: 'Aporte de la comunidad escolar a la sustentabilidad y el cuidado ambiental de la comuna de Tocopilla.',
    tags: ['En Preparación', 'Pitch Final', 'Tocopilla']
  },
  {
    id: 'domingo-latrille',
    title: 'Innovación Técnico-Profesional',
    school: 'Liceo Polivalente Domingo Latrille',
    category: 'tech',
    categoryLabel: 'En Preparación Activa',
    icon: 'compass',
    lat: -22.0865,
    lng: -70.1968,
    shortDesc: 'Iniciativa formulada por estudiantes de educación media técnico-profesional para resolver desafíos comunitarios.',
    fullDesc: 'El equipo del emblemático Liceo Polivalente Domingo Latrille presentará en la jornada del 13 de noviembre su solución desarrollada a lo largo del proceso formativo anual de Speakers en Verde.',
    impact: 'Impulso al talento joven y compromiso social desde la educación técnico-profesional de Tocopilla.',
    tags: ['En Preparación', 'Innovación Juvenil', 'Tocopilla']
  }
];

// Map instance and markers registry
let tocopillaMap = null;
let mapMarkers = {};

// 2. Initialize Interactive Leaflet Map of Tocopilla
function initTocopillaMap() {
  const mapElement = document.getElementById('tocopillaMap');
  if (!mapElement || typeof L === 'undefined') return;

  // Center on Tocopilla coastal urban area
  const tocopillaCenter = [-22.089, -70.198];
  
  tocopillaMap = L.map('tocopillaMap', {
    center: tocopillaCenter,
    zoom: 14,
    scrollWheelZoom: false
  });

  // Modern clean tiles (CartoDB Positron)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(tocopillaMap);

  // Render School Quick-Fly Pills
  renderSchoolPills();

  // Create custom pins for each project
  projects.forEach(p => {
    // Custom DIV icon with branded badge
    const iconHtml = `
      <div class="custom-map-pin w-10 h-10 rounded-2xl bg-white border-2 border-sev-purple shadow-lg flex items-center justify-center text-sev-purple transform hover:scale-110 transition-transform">
        <div class="w-7 h-7 rounded-xl bg-purple-100 flex items-center justify-center">
          <i data-lucide="${p.icon}" class="w-4 h-4 text-sev-purple"></i>
        </div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: 'bg-transparent',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22]
    });

    // Popup Content with mini card & button to open full modal
    const popupContent = `
      <div class="p-4 text-left max-w-xs space-y-2 font-sans bg-white">
        <span class="badge-${p.category} text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
          ${p.categoryLabel}
        </span>
        <h4 class="text-base font-black text-slate-900 font-display leading-tight">${p.title}</h4>
        <div class="text-xs font-bold text-sev-greenDark flex items-center gap-1">
          <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
          <span>${p.school}</span>
        </div>
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${p.shortDesc}</p>
        <button onclick="openProjectModal('${p.id}')" 
                class="w-full mt-2 py-2 px-3 rounded-xl text-xs font-bold bg-sev-purple hover:bg-purple-900 text-white transition flex items-center justify-center gap-1.5 shadow">
          <span>Ver Ficha Completa</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;

    const marker = L.marker([p.lat, p.lng], { icon: customIcon })
      .addTo(tocopillaMap)
      .bindPopup(popupContent);

    mapMarkers[p.id] = marker;
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
      <span class="w-1.5 h-1.5 rounded-full bg-sev-green"></span>
      <span class="truncate max-w-[140px] sm:max-w-none">${p.school}</span>
    </button>
  `).join('');
}

// 4. Fly to school in map and open its popup
function flyToSchool(projectId) {
  const p = projects.find(item => item.id === projectId);
  if (!p || !tocopillaMap) return;

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
    <div class="story-card p-6 flex flex-col justify-between space-y-4 bg-white border border-slate-200">
      <div class="space-y-3">
        
        <!-- Header badge -->
        <div class="flex items-center justify-between gap-2">
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
  const modalBody = document.getElementById('modalBody');
  const modalImpact = document.getElementById('modalImpact');

  modalTitle.textContent = p.title;
  modalSchool.innerHTML = `<i data-lucide="graduation-cap" class="w-4 h-4 text-sev-greenDark"></i><span>${p.school}</span>`;
  
  modalBadges.innerHTML = `
    <span class="badge-${p.category} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      ${p.categoryLabel}
    </span>
  `;

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
  renderProjects(projects);
  setupFiltersAndSearch();
  setupNavigation();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
