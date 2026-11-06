# Speakers en Verde Tocopilla 2026 🌱✨
> Landing page oficial, moderna y responsiva para la gran final comunal de **Speakers en Verde Tocopilla 2026** en dependencias de USQAI UCN (Antofagasta).

---

## 📋 Descripción del Proyecto
Esta plataforma web ha sido diseñada para presentar de manera interactiva, ágil y visual:
- **Trayectoria Histórica (2019 - 2026):** El recorrido regional del programa, el hito de 2022 junto a Corfo y la participación de **Fundación Minera Escondida (FME)** con Jenny en el jurado, y la actual edición centrada en Tocopilla.
- **Ruta Formativa (Las 9 Etapas):** La rigurosa metodología de ecoemprendimiento, oratoria, modelo de negocios y expresión escénica, respaldada en evidencia de la Fundación Kauffman, el informe GEM y la ERI regional.
- **Catálogo de los 10 Proyectos Escolares:** Fichas interactivas con filtros por categoría (Economía circular, robótica 3D, biotecnología, inclusión NEE), buscador en tiempo real y modal detallado.
- **Cronograma Oficial de la Final (13 de Noviembre):** Horarios detallados desde las 10:30 hrs hasta el cierre a las 16:30 hrs, destacando la **Ronda de Pitch a las 14:20 hrs** en Usqai UCN (Av. Angamos 0610, Antofagasta).
- **Alianzas Estratégicas:** SQM (Impulsa), Fundación En Verde (Ejecuta), Verdical (Diseña), Usqai UCN (Colabora) y el reconocimiento/invitación especial a FME.
- **Acceso directo a las Bases Oficiales del Concurso.**

---

## 🚀 Estructura de Archivos
```
Speakers en Verde Tocopilla/
├── index.html                     # Archivo HTML principal con arquitectura moderna y Tailwind CDN
├── styles.css                     # Estilos personalizados, gradientes y animaciones suaves
├── app.js                         # Datos dinámicos de los 10 proyectos, filtros, búsqueda y modales
├── assets/
│   ├── afiche-invitacion.jpg      # Gráfica oficial de la convocatoria y logos
│   └── afiche-cronograma.jpg      # Gráfica oficial con el programa de la jornada
├── Fotos proceso de los equipos/  # Carpeta lista para recibir fotos de talleres y ensayos
└── README.md                      # Instrucciones de uso y despliegue
```

---

## 🌐 Cómo publicar en GitHub Pages (en 3 pasos)

Para tener la página online de inmediato con una URL pública gratuita (ej: `https://tu-usuario.github.io/speakers-en-verde`):

### 1. Inicializar y confirmar los cambios en Git (si no lo has hecho)
En esta misma carpeta abre una terminal y ejecuta:
```bash
git init
git add .
git commit -m "feat: landing page completa Speakers en Verde Tocopilla 2026"
```

### 2. Crear un repositorio en GitHub y vincularlo
1. Ve a [GitHub](https://github.com/new) y crea un nuevo repositorio (por ejemplo: `speakers-en-verde-tocopilla`).
2. Copia la URL del repositorio y ejecuta:
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/speakers-en-verde-tocopilla.git
git push -u origin main
```

### 3. Activar GitHub Pages
1. En tu repositorio de GitHub, haz clic en **Settings** (Configuración) en la pestaña superior.
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/(root)`.
4. Haz clic en **Save** (Guardar).
5. ¡Listo! En 1 o 2 minutos tu landing page estará disponible en:
   `https://TU_USUARIO.github.io/speakers-en-verde-tocopilla/`

---

## 💡 Próximas Actualizaciones Sugeridas
- **Fotos del Proceso:** Puedes añadir fotografías de los talleres en `Fotos proceso de los equipos/` para activar un carrusel dinámico en la sección de preparación.
- **Detalle de Proyectos Pendientes:** Apenas se definan los proyectos de la *Escuela Pablo Neruda* y el *Liceo Polivalente Domingo Latrille*, se actualizan en `app.js` en solo 3 líneas.

