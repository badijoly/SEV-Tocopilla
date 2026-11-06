// ==========================================================================
// Speakers en Verde Tocopilla 2026 - Main Application Logic
// Matches the visual identity and colors of official event posters
// ==========================================================================

// 1. Projects Data
const projects = [
  {
    id: 'acuaponia',
    title: 'Jardín Acuapónico',
    school: 'Escuela Arturo Prat Chacón',
    category: 'bio',
    categoryLabel: 'Biotecnología & Alimentación',
    icon: 'sprout',
    shortDesc: 'Acuaponía vertical para la producción sustentable de hortalizas y crianza de peces, promoviendo hábitos saludables.',
    fullDesc: 'La acuaponía vertical busca promover hábitos de alimentación saludable en los estudiantes mediante la producción sustentable de hortalizas y la crianza de peces. A través de experiencias prácticas de aprendizaje, los alumnos participarán activamente en el cultivo y cuidado del sistema, fortaleciendo sus conocimientos sobre nutrición, ciclos ecológicos y seguridad alimentaria.',
    impact: 'Contribuirá a disminuir los índices de sobrepeso y obesidad escolar, asegurando el acceso y consumo de alimentos frescos, limpios y cosechados en el propio colegio.',
    tags: ['Acuaponía', 'Seguridad Alimentaria', 'Nutrición', 'ODS 2 & 3']
  },
  {
    id: 'sweet-calm',
    title: 'Sweet Calm',
    school: 'Escuela Pedro Aguirre Cerda',
    category: 'inclusion',
    categoryLabel: 'Inclusión & NEE',
    icon: 'heart-handshake',
    shortDesc: 'Elaboración de té e infusiones naturales relajantes por estudiantes con Necesidades Educativas Permanentes.',
    fullDesc: 'Este proyecto busca desarrollar habilidades laborales, cognitivas, sensoriales y de autonomía mediante la elaboración de bolsitas de té e infusiones naturales con propiedades relajantes. Diseñado especialmente para estudiantes con necesidades educativas permanentes (NEE), favoreciendo la atención, motricidad fina, seguimiento de instrucciones y regulación emocional.',
    impact: 'Fomenta la inclusión sociolaboral efectiva, la regulación emocional y la inserción de estudiantes en cadenas de valor comunitarias y con identidad local.',
    tags: ['Inclusión NEE', 'Salud Emocional', 'Herbalismo', 'ODS 10']
  },
  {
    id: 'lombrilab',
    title: 'LombriLab',
    school: 'Escuela Estados Unidos de Norteamérica',
    category: 'circular',
    categoryLabel: 'Economía Circular & Suelos',
    icon: 'recycle',
    shortDesc: 'Transformación de residuos orgánicos escolares en humus de alta calidad mediante lombricultura.',
    fullDesc: 'LombriLab consiste en reciclar la materia orgánica generada en el casino y patios escolares a través de la lombricultura, utilizando lombrices para transformar los desechos en humus, un potente fertilizante natural. Buscamos reducir la contaminación, dar una segunda vida a los desechos y fomentar prácticas sustentables en nuestra comunidad escolar.',
    impact: 'Reducción drástica de desechos orgánicos en vertederos locales, regeneración de suelos áridos de Tocopilla y educación ambiental práctica.',
    tags: ['Lombricultura', 'Humus Natural', 'Residuos Cero', 'ODS 12']
  },
  {
    id: 'ecopuntos',
    title: 'EcoPuntos Escolares',
    school: 'Escuela Bernardo O´Higgins (con Esc. Pedro Aguirre Cerda)',
    category: 'circular',
    categoryLabel: 'Economía Circular & ABP',
    icon: 'box',
    shortDesc: 'Transformación de contenedores en desuso de SQM en puntos limpios inclusivos mediante ABP.',
    fullDesc: 'Proyecto basado en Aprendizaje Basado en Proyectos (ABP), desarrollado por estudiantes de 6° básico en Lenguaje y Ciencias, junto a la Escuela Pedro Aguirre Cerda y los párvulos de la escuela. Aborda la falta de puntos de reciclaje en Tocopilla reutilizando contenedores industriales en desuso de SQM para transformarlos en puntos limpios comunitarios.',
    impact: 'Instalación de infraestructura de reciclaje en la comuna, articulación intercolegios y fomento de la corresponsabilidad ciudadana en la gestión de residuos.',
    tags: ['Upcycling', 'SQM Contenedores', 'ABP Escolar', 'ODS 11 & 12']
  },
  {
    id: 'protesis',
    title: 'Prótesis Robótica 3D',
    school: 'Liceo Politécnico (Equipo 1)',
    category: 'tech',
    categoryLabel: 'Tecnología & Robótica 3D',
    icon: 'cpu',
    shortDesc: 'Prótesis funcional de miembro superior accesible y de bajo costo fabricada mediante impresión 3D.',
    fullDesc: 'Desarrollo progresivo de una prótesis robótica de miembro superior fabricada mediante impresión 3D. Actualmente el equipo cuenta con un prototipo funcional de mano y antebrazo; la siguiente fase considera la incorporación del brazo y articulación de hombro para aumentar su funcionalidad y rango de movimiento, generando una alternativa accesible y de bajo costo.',
    impact: 'Solución ortopédica accesible para personas con discapacidad física en la región, democratizando la tecnología biomédica.',
    tags: ['Impresión 3D', 'Robótica', 'Biomédica', 'ODS 3 & 10']
  },
  {
    id: 'basurero-inteligente',
    title: 'Basurero Inteligente Gamificado',
    school: 'Liceo Politécnico (Equipo 2)',
    category: 'tech',
    categoryLabel: 'Tecnología & Gamificación',
    icon: 'sparkles',
    shortDesc: 'Contenedor inteligente con escáner tecnológico que clasifica residuos y premia al usuario con puntos en comercios.',
    fullDesc: 'Dispositivo inteligente capaz de identificar y clasificar residuos mediante un sistema de reconocimiento tecnológico. A través de un escáner, las personas acercan un residuo (como una botella plástica) para que el dispositivo indique el contenedor exacto. Incorpora gamificación mediante acumulación de puntos canjeables por descuentos en comercios locales asociados de Tocopilla.',
    impact: 'Aumento radical en las tasas de segregación de residuos en origen y dinamización del comercio local mediante una red colaborativa.',
    tags: ['Sensores IoT', 'Gamificación', 'Comercio Local', 'ODS 12']
  },
  {
    id: 'jaboneria',
    title: 'Jabonería con Aceites Reciclados',
    school: 'Colegio Sagrada Familia',
    category: 'circular',
    categoryLabel: 'Economía Circular & Química Verde',
    icon: 'droplets',
    shortDesc: 'Elaboración de jabones artesanales mediante saponificación de aceites de cocina usados recolectados en locales gastronómicos.',
    fullDesc: 'Transformación de un residuo altamente contaminante (aceite de cocina usado recolectado en locales de comida) en productos de higiene de valor agregado. Cuenta con dos líneas: Línea Herbal (ruda, menta, romero y lavanda) y Línea Nutritiva (miel, canela y borra de café para exfoliación).',
    impact: 'Protección del agua y del borde costero de Tocopilla al evitar el descarte de aceites contaminantes, fomentando el espíritu emprendedor y la conciencia ecológica.',
    tags: ['Saponificación', 'Aceite Reciclado', 'Línea Herbal & Nutritiva', 'ODS 6 & 14']
  },
  {
    id: 'bloompods',
    title: 'BloomPods',
    school: 'Escuela Carlos Condell de la Haza',
    category: 'bio',
    categoryLabel: 'Biotecnología & Reforestación',
    icon: 'flower-2',
    shortDesc: 'Cápsulas de vida y lápices plantables que convierten espacios desérticos vacíos en áreas verdes biodiversas.',
    fullDesc: '¿Qué pasaría si un lápiz no terminara en la basura, transformándose en vida? ¿Y si una pequeña cápsula pudiera convertir espacios vacíos en lugares llenos de biodiversidad? Así nace BloomPods: lápices plantables y cápsulas germinadoras diseñadas para florecer en el clima árido del norte.',
    impact: 'Revegetación escolar y comunitaria en el desierto costero de Tocopilla, promoviendo biodiversidad y educación en ciclos biológicos.',
    tags: ['Lápices Plantables', 'Biodiversidad', 'Áreas Verdes', 'ODS 15']
  },
  {
    id: 'pablo-neruda',
    title: 'Propuesta Ecológica Escolar',
    school: 'Escuela Pablo Neruda',
    category: 'circular',
    categoryLabel: 'En Preparación Activa',
    icon: 'lightbulb',
    shortDesc: 'Iniciativa medioambiental escolar desarrollada durante el proceso de mentoría para la final.',
    fullDesc: 'Los estudiantes de la Escuela Pablo Neruda han participado activamente en los talleres de oratoria, resolución de problemas y formulación de proyectos, preparando su pitch final para la jornada en Usqai UCN.',
    impact: 'Aporte de la comunidad escolar a la sustentabilidad de la comuna de Tocopilla.',
    tags: ['En Preparación', 'Pitch Final', 'Tocopilla']
  },
  {
    id: 'domingo-latrille',
    title: 'Propuesta Técnico-Profesional',
    school: 'Liceo Polivalente Domingo Latrille',
    category: 'tech',
    categoryLabel: 'En Preparación Activa',
    icon: 'compass',
    shortDesc: 'Proyecto ecoemprendedor formulado por estudiantes del liceo para la final comunal.',
    fullDesc: 'El equipo del Liceo Polivalente Domingo Latrille presentará en la jornada del 13 de noviembre su solución desarrollada a lo largo del proceso formativo anual de Speakers en Verde.',
    impact: 'Impulso al talento joven y compromiso social desde la educación técnico-profesional.',
    tags: ['En Preparación', 'Innovación Juvenil', 'Tocopilla']
  }
];

// 2. Render Projects Grid
function renderProjects(items) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = items.map(p => `
    <div class="card-pop p-6 flex flex-col justify-between space-y-4 border-2 border-slate-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] bg-white">
      <div class="space-y-3">
        
        <!-- Header badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="badge-${p.category} text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
            ${p.categoryLabel}
          </span>
          <div class="w-8 h-8 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800">
            <i data-lucide="${p.icon}" class="w-4 h-4"></i>
          </div>
        </div>

        <!-- Title & School -->
        <div>
          <h3 class="text-xl font-black font-display text-slate-900 leading-tight">
            ${p.title}
          </h3>
          <div class="text-xs font-black text-poster-greenDark mt-1 flex items-center gap-1.5 uppercase">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
            <span>${p.school}</span>
          </div>
        </div>

        <!-- Short Description -->
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          ${p.shortDesc}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${p.tags.map(t => `<span class="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-300">${t}</span>`).join('')}
        </div>

      </div>

      <!-- Action Footer -->
      <div class="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
        <button onclick="openProjectModal('${p.id}')" 
                class="w-full py-2.5 px-4 rounded-xl text-xs font-black bg-slate-900 hover:bg-poster-green text-white hover:text-slate-950 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition flex items-center justify-center gap-2 group">
          <span>Ver Ficha del Proyecto</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 3. Project Filter and Search Logic
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

// 4. Modal Logic
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
  modalSchool.innerHTML = `<i data-lucide="graduation-cap" class="w-4 h-4"></i><span>${p.school}</span>`;
  
  modalBadges.innerHTML = `
    <span class="badge-${p.category} text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
      ${p.categoryLabel}
    </span>
  `;

  modalBody.innerHTML = `
    <p class="text-sm leading-relaxed">${p.fullDesc}</p>
    <div class="flex flex-wrap gap-1.5 pt-2">
      ${p.tags.map(t => `<span class="text-xs font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-300">${t}</span>`).join('')}
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

// 5. Lightbox for Posters & Images
function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const cap = document.getElementById('lightboxCaption');
  
  img.src = src;
  img.alt = caption;
  cap.textContent = caption;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// 6. Navigation and Keyboard Listeners
function setupNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeLightbox();
    }
  });
}

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  setupFiltersAndSearch();
  setupNavigation();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
