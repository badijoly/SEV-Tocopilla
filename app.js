// ==========================================================================
// Speakers en Verde Tocopilla 2026 - Main Application Logic
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
    fullDesc: 'Este proyecto busca desarrollar habilidades laborales, cognitivas, sensoriales y de autonomía mediante la elaboración de bolsitas de té e infusiones naturales con propiedades relajantes. Diseñado especialmente para estudiantes con necesidades educativas permanentes (NEE), estimulando la concentración, la motricidad fina y el trabajo en equipo.',
    impact: 'Fomenta la inclusión sociolaboral efectiva, la regulación emocional y la inserción de estudiantes en cadenas de valor comunitarias y con identidad local.',
    tags: ['Inclusión', 'Salud Emocional', 'Herbalismo', 'ODS 10']
  },
  {
    id: 'lombrilab',
    title: 'LombriLab',
    school: 'Escuela Estados Unidos de Norteamérica',
    category: 'circular',
    categoryLabel: 'Economía Circular & Suelos',
    icon: 'recycle',
    shortDesc: 'Transformación de residuos orgánicos escolares en humus de alta calidad mediante lombricultura.',
    fullDesc: 'LombriLab consiste en reciclar la materia orgánica generada en el casino y patios escolares a través de la lombricultura, utilizando lombrices para transformar los desechos en humus, un potente fertilizante natural. Buscamos reducir la huella de carbono escolar, dar una segunda vida a los desperdicios y comercializar el abono en la comunidad.',
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
    shortDesc: 'Transformación de contenedores en desuso de SQM en puntos limpios inclusivos mediante Aprendizaje Basado en Proyectos.',
    fullDesc: 'Proyecto interdisciplinario basado en ABP desarrollado por estudiantes de 6° básico en Lenguaje y Ciencias, junto a la Escuela Pedro Aguirre Cerda y los párvulos del establecimiento. La iniciativa aborda la falta de puntos de reciclaje en escuelas y espacios públicos de Tocopilla, reutilizando contenedores industriales en desuso donados por SQM para transformarlos en modernos puntos limpios.',
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
    shortDesc: 'Prótesis de miembro superior funcional, accesible y de bajo costo fabricada mediante impresión 3D.',
    fullDesc: 'Desarrollo progresivo de una prótesis robótica de miembro superior fabricada mediante tecnología de manufactura aditiva (impresión 3D). El equipo cuenta con un prototipo funcional de mano y antebrazo; la siguiente fase incorpora articulación de hombro y brazo para mayor rango de movilidad. La iniciativa democratiza el acceso a tecnología biomédica de bajo costo para personas con discapacidad física.',
    impact: 'Solución ortopédica accesible para familias vulnerables de la región que no pueden costear prótesis comerciales de alto valor.',
    tags: ['Impresión 3D', 'Robótica', 'Biomédica', 'ODS 3 & 10']
  },
  {
    id: 'basurero-inteligente',
    title: 'Basurero Inteligente Gamificado',
    school: 'Liceo Politécnico (Equipo 2)',
    category: 'tech',
    categoryLabel: 'Tecnología & Gamificación',
    icon: 'sparkles',
    shortDesc: 'Contenedor inteligente con escáner tecnológico que clasifica residuos y premia al usuario con puntos canjeables en comercios.',
    fullDesc: 'Dispositivo inteligente capaz de identificar y clasificar residuos mediante un sistema de reconocimiento tecnológico. A través de un sensor/escáner, la persona acerca un residuo (como una botella PET) para que el dispositivo indique el contenedor exacto. Además, incorpora gamificación: los usuarios acumulan puntos por reciclar correctamente, canjeables por descuentos en el comercio local de Tocopilla.',
    impact: 'Aumento radical en las tasas de segregación de residuos en origen y dinamización del comercio local mediante una alianza colaborativa público-privada.',
    tags: ['Sensores IoT', 'Gamificación', 'Comercio Local', 'ODS 12']
  },
  {
    id: 'jaboneria',
    title: 'Jabonería a partir de Aceites Reciclados',
    school: 'Colegio Sagrada Familia',
    category: 'circular',
    categoryLabel: 'Economía Circular & Química Verde',
    icon: 'droplets',
    shortDesc: 'Elaboración de jabones artesanales mediante saponificación de aceites de cocina usados recolectados en locales gastronómicos.',
    fullDesc: 'Transformación de un residuo altamente contaminante del agua (aceite usado de fritura proveniente de locales gastronómicos de Tocopilla) en productos de higiene de alto valor agregado mediante procesos seguros de saponificación. El proyecto contempla dos líneas: Línea Herbal (ruda, menta, romero, lavanda) y Línea Nutritiva (miel, canela y borra de café para exfoliación).',
    impact: 'Protección del borde costero y red de alcantarillado de Tocopilla al evitar que miles de litros de aceite terminen en el mar, generando a la vez un modelo de negocio escolar autosustentable.',
    tags: ['Saponificación', 'Aceite Reciclado', 'Cosmética Natural', 'ODS 6 & 14']
  },
  {
    id: 'bloompods',
    title: 'BloomPods',
    school: 'Escuela Carlos Condell de la Haza',
    category: 'bio',
    categoryLabel: 'Biotecnología & Reforestación',
    icon: 'flower-2',
    shortDesc: 'Cápsulas de vida y lápices plantables que convierten espacios desérticos vacíos en áreas verdes biodiversas.',
    fullDesc: '¿Qué pasaría si un lápiz no terminara en la basura, transformándose en vida? ¿Y si una pequeña cápsula pudiera convertir espacios vacíos en lugares llenos de biodiversidad? BloomPods desarrolla lápices ecológicos y cápsulas con semillas nativas y sustrato nutritivo diseñadas para brotar con facilidad en el clima árido de Tocopilla.',
    impact: 'Revegetación escolar y comunitaria en el desierto costero, generando microclimas y conciencia ambiental en las nuevas generaciones.',
    tags: ['Lápices Plantables', 'Biodiversidad', 'Áreas Verdes', 'ODS 15']
  },
  {
    id: 'pablo-neruda',
    title: 'Innovación Sustentable Nerudiana',
    school: 'Escuela Pablo Neruda',
    category: 'circular',
    categoryLabel: 'En Desarrollo Activo',
    icon: 'lightbulb',
    shortDesc: 'Propuesta medioambiental escolar enfocada en soluciones para la comunidad tocopillana.',
    fullDesc: 'El equipo de la Escuela Pablo Neruda ha participado rigurosamente en las mentorías de oratoria, modelo de negocios y experimentación, afinando los detalles técnicos y narrativos de su propuesta para la gran final en Usqai UCN.',
    impact: 'Empoderamiento estudiantil y resolución de problemas del entorno escolar.',
    tags: ['En Preparación', 'Pitch Final', 'Tocopilla']
  },
  {
    id: 'domingo-latrille',
    title: 'Proyecto Científico-Tecnológico',
    school: 'Liceo Polivalente Domingo Latrille',
    category: 'tech',
    categoryLabel: 'En Desarrollo Activo',
    icon: 'compass',
    shortDesc: 'Iniciativa ecoemprendedora desarrollada por jóvenes de enseñanza media técnico-profesional.',
    fullDesc: 'Estudiantes del emblemático Liceo Polivalente Domingo Latrille presentarán su propuesta final construida a lo largo de las mentorías de Speakers en Verde, demostrando la capacidad innovadora de la juventud tocopillana.',
    impact: 'Aporte al desarrollo tecnológico y ambiental del puerto de Tocopilla.',
    tags: ['En Preparación', 'Innovación Juvenil', 'Tocopilla']
  }
];

// 2. Render Projects Grid
function renderProjects(items) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = items.map(p => `
    <div class="project-card bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
      <div class="space-y-3">
        
        <!-- Header badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="badge-${p.category} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            ${p.categoryLabel}
          </span>
          <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
            <i data-lucide="${p.icon}" class="w-4 h-4"></i>
          </div>
        </div>

        <!-- Title & School -->
        <div>
          <h3 class="text-xl font-bold font-display text-white group-hover:text-emerald-400 transition">
            ${p.title}
          </h3>
          <div class="text-xs font-semibold text-emerald-400/90 mt-1 flex items-center gap-1.5">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
            <span>${p.school}</span>
          </div>
        </div>

        <!-- Short Description -->
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          ${p.shortDesc}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${p.tags.map(t => `<span class="text-[10px] font-semibold bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700/50">${t}</span>`).join('')}
        </div>

      </div>

      <!-- Action Footer -->
      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button onclick="openProjectModal('${p.id}')" 
                class="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 border border-slate-700 hover:border-emerald-400 transition flex items-center justify-center gap-2 group">
          <span>Ver Ficha del Proyecto</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Re-run Lucide icons
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
    <span class="badge-${p.category} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      ${p.categoryLabel}
    </span>
  `;

  modalBody.innerHTML = `
    <p class="text-sm leading-relaxed">${p.fullDesc}</p>
    <div class="flex flex-wrap gap-1.5 pt-2">
      ${p.tags.map(t => `<span class="text-xs font-semibold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700">${t}</span>`).join('')}
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

// 6. Navigation and Header Behaviors
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

  // Scroll header styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-slate-900/95', 'shadow-xl');
      header.classList.remove('bg-slate-900/80');
    } else {
      header.classList.add('bg-slate-900/80');
      header.classList.remove('bg-slate-900/95', 'shadow-xl');
    }
  });

  // Close modals on Escape key
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

