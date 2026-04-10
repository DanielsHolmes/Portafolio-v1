// Window Management
let zIndexCounter = 101;
let draggedWindow = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

// Resize Management
let resizedWindow = null;
let resizeDirection = '';
let startX = 0;
let startY = 0;
let startWidth = 0;
let startHeight = 0;
let startLeft = 0;
let startTop = 0;

// Project Data
const projectData = {
    corsox: {
        id: 'corsox',
        title: "Corsox Farmatodo",
        year: "2025",
        category: "UX/UI Design • SAS Design • Dashboard",
        services: ["SAS Design", "UI Design", "UX Design"],
        tags: "UX/UI Design, SAS Design, Dashboard, Enterprise Software, Usability",
        description: "Plataforma administrativa enterprise desarrollada por Corsox para la cadena farmacéutica Farmatodo. El proyecto se centró en la optimización de la interfaz para soportar operaciones de alta complejidad y gran volumen de datos.",
        reto: "El crecimiento acelerado del software generó una saturación de funcionalidades. La interfaz presentaba graves problemas de usabilidad, aumentando la carga cognitiva y dificultando que los usuarios operaran las herramientas críticas eficientemente.",
        solucion: "Implementé una interfaz limpia enfocada en la claridad de intenciones. Organicé la jerarquía visual para que cada elemento comunique su función naturalmente, logrando que el usuario navegue de forma intuitiva y reduzca la fricción en sus tareas diarias.",
        banner: "Img Proyectos/Corsox/Corsox Gallery Banner.png",
        images: [
            "Img Proyectos/Corsox/Corsox gallery/01.png",
            "Img Proyectos/Corsox/Corsox gallery/02.png",
            "Img Proyectos/Corsox/Corsox gallery/03.png"
        ]
    },
    saldo: {
        id: 'saldo',
        title: "Saldo App",
        year: "2025",
        category: "UX/UI Design • Branding • Mobile App",
        services: ["App Design", "UI Design", "UX Design"],
        tags: "UX/UI Design, Branding, Mobile App, Illustration",
        description: "Saldo App es una plataforma móvil enfocada en el control integral de finanzas personales. Mi intervención se centró en el rediseño de la identidad visual y la experiencia de usuario para transformar una herramienta funcional en un producto con valor emocional.",
        reto: "El diseño original carecía de diferenciación, presentando una estética genérica común en el sector fintech. El desafío era inyectar personalidad y cercanía en un entorno usualmente frío, sin comprometer la usabilidad ni la confianza que requiere el manejo de dinero.",
        solucion: "Desarrollé un sistema de diseño propietario basado en una mascota única que actúa como guía dentro de la interfaz. Esta estrategia humanizó la interacción y distinguió la app de la competencia, resultando en una experiencia más memorable y emocionalmente conectiva para el usuario.",
        banner: "Img Proyectos/Saldo/Saldo gallery Banner.png",
        images: [
            "Img Proyectos/Saldo/Saldo gallery/01.png",
            "Img Proyectos/Saldo/Saldo gallery/02.png",
            "Img Proyectos/Saldo/Saldo gallery/03.png",
            "Img Proyectos/Saldo/Saldo gallery/04.png"
        ]
    },
    dulcegracia: {
        id: 'dulcegracia',
        title: "Dulce Gracia",
        year: "2025",
        category: "Branding • Visual Identity • Strategy",
        services: ["UI Design", "UX Design", "Branding Design"],
        tags: "Branding, Visual Identity, Illustration, Strategy",
        description: "Desarrollo de identidad visual para Dulce Gracia, un servicio de comida a domicilio que opera exclusivamente bajo modelo delivery. El proyecto abarcó la creación de un sistema de marca capaz de transmitir confianza y cercanía sin contar con presencia física.",
        reto: "El principal obstáculo era generar conexión emocional en un modelo sin tiendas físicas, donde la competencia suele percibirse como impersonal. Era necesario diferenciar la marca en un mercado saturado mediante atributos humanos que suplieran la falta de un espacio tangible.",
        solucion: "Diseñé una identidad centrada en una mascota protagonista que personifica los valores de la marca. Este activo funciona como el rostro humano del servicio, facilitando el reconocimiento inmediato y estableciendo un vínculo cercano con el cliente desde el primer punto de contacto digital.",
        banner: "Img Proyectos/Dulce Gracia/Dulce Gracia Banner.png",
        images: [
            "Img Proyectos/Dulce Gracia/Dulce Gracia gallery/01.png",
            "Img Proyectos/Dulce Gracia/Dulce Gracia gallery/02.png",
            "Img Proyectos/Dulce Gracia/Dulce Gracia gallery/03.png",
            "Img Proyectos/Dulce Gracia/Dulce Gracia gallery/04.png"
        ]
    },
    conalpe: {
        id: 'conalpe',
        title: "Conalpe",
        year: "2024",
        category: "UX Research • Information Architecture • Web Design",
        services: ["Web Design", "UI Design", "UX Design", "Auditoria de Usabilidad"],
        tags: "UX Research, Information Architecture, Web Design, Usability",
        description: "Rediseño integral del portal web institucional de Conalpe, una entidad de alcance nacional en Colombia. El objetivo fue optimizar la gestión de su amplio catálogo de servicios e información para mejorar la accesibilidad pública.",
        reto: "La saturación de contenido generaba una arquitectura de información compleja y poco intuitiva. Los usuarios se perdían fácilmente en la navegación, lo que dificultaba el acceso a los servicios clave y reducía la eficacia del portal.",
        solucion: "Lideré una investigación UX mediante mapas de usuario y grabaciones de sesiones reales para identificar puntos de fricción. Definí una nueva jerarquía visual y una estética limpia, decidiendo estratégicamente qué elementos rediseñar desde cero y cuáles actualizar para garantizar una navegación orgánica y reconocible.",
        banner: "Img Proyectos/Conalpe/Conalpe Gallery Banner.png",
        images: [
            "Img Proyectos/Conalpe/Conalpe gallery/01.png",
            "Img Proyectos/Conalpe/Conalpe gallery/02.png",
            "Img Proyectos/Conalpe/Conalpe gallery/03.png",
            "Img Proyectos/Conalpe/Conalpe gallery/04.png",
            "Img Proyectos/Conalpe/Conalpe gallery/05.png"
        ]
    },
    habitta: {
        id: 'habitta',
        title: "Habitta",
        year: "2025",
        category: "UX/UI Design • SAS Design • Dashboard • Enterprise Software",
        services: ["SAS Design", "UX Design", "UI Design", "Design System"],
        tags: "UX/UI Design, SAS Design, Dashboard, Enterprise Software, Usability, Property Management",
        description: "Rediseño integral de la plataforma de administración vertical de propiedades de Habitta. El sistema backend gestionaba eficientemente propiedades complejas, pero la interfaz estaba sobrecargada debido a la constante incorporación de nuevas funciones.",
        reto: "Los usuarios sufrían sobrecarga cognitiva, los administradores tenían dificultades con la navegación entre roles y los equipos de ventas enfrentaban objeciones recurrentes por un diseño 'amateur'. Un intento previo de rediseño basado en IA generó una interfaz genérica que no resolvió la falta de jerarquía, contexto basado en roles y coherencia con la marca.",
        solucion: "Asumí responsabilidad integral de UX/UI desde auditoría hasta entrega final. Organicé la jerarquía visual para roles específicos, eliminé fricciones de navegación y establecí un sistema de diseño coherente. El resultado fue ciclos de venta más rápidos, mayor adopción y retención de usuarios, y un reposicionamiento del producto como estándar de calidad en su nicho.",
        impacto: [
            "Ciclos de venta más rápidos: reducción de objeciones en demostraciones",
            "Mayor adopción y retención: incorporación más rápida de nuevos usuarios",
            "Menos tickets de soporte por confusión en navegación",
            "Reposicionamiento en el mercado: de competir por funciones a estándar de calidad"
        ],
        banner: "Img Proyectos/habitta/habitta Banner.png",
        images: [
            "Img Proyectos/habitta/habitta gallery/01.png",
            "Img Proyectos/habitta/habitta gallery/02.png",
            "Img Proyectos/habitta/habitta gallery/03.png"
        ]
    }
};

// Project order for navigation
const projectOrder = ['corsox', 'saldo', 'dulcegracia', 'conalpe', 'habitta'];

// Slider state
let currentSliderIndex = 0;
let currentProjectId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
    initWindows();
});

// Time Update
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const displayHours = now.getHours() % 12 || 12;
    const timeString = `${displayHours}:${minutes} ${ampm}`;
    const timeElement = document.getElementById('menu-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Window Management
function initWindows() {
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => {
        win.addEventListener('mousedown', () => {
            bringToFront(win);
            updateDockIndicators();
        });
    });
}

function bringToFront(element) {
    zIndexCounter++;
    element.style.zIndex = zIndexCounter;

    // Remove active class from all windows
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
    element.classList.add('active');
}

// Track active windows
const activeWindows = new Set();

function updateDockIndicators() {
    const dockItems = document.querySelectorAll('.dock-item');
    dockItems.forEach(item => {
        const onclick = item.getAttribute('onclick');
        if (!onclick) return;

        // Extract window type from onclick attribute
        const match = onclick.match(/openWindow\('([^']+)'\)/);
        if (match) {
            const windowType = match[1];
            const windowId = windowType + '-window';
            const win = document.getElementById(windowId);

            if (win && activeWindows.has(windowId)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        }
    });

    // Hide desktop icons on mobile when windows are open
    if (window.innerWidth <= 768) {
        const desktopIcons = document.querySelector('.desktop-icons');
        if (desktopIcons) {
            if (activeWindows.size > 0) {
                desktopIcons.style.opacity = '0';
                desktopIcons.style.pointerEvents = 'none';
            } else {
                desktopIcons.style.opacity = '1';
                desktopIcons.style.pointerEvents = 'auto';
            }
        }
    }
}

function openWindow(type) {
    const windowId = type + '-window';
    const win = document.getElementById(windowId);

    if (!win) return;

    // Check if window is currently visible
    const isVisible = win.style.display !== 'none' && !win.classList.contains('closed');

    if (isVisible) {
        // Close the window
        closeWindow(windowId);
    } else {
        // Open the window
        win.classList.remove('closed', 'minimized');
        win.style.display = 'block';

        // Animate in
        requestAnimationFrame(() => {
            win.style.opacity = '1';
            win.style.transform = 'scale(1) translateY(0)';
        });

        bringToFront(win);
        activeWindows.add(windowId);
        updateDockIndicators();
    }
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        // Animate out
        win.style.opacity = '0';
        win.style.transform = 'scale(0.9) translateY(20px)';

        setTimeout(() => {
            win.classList.add('closed');
            win.style.display = 'none';
        }, 200);

        // Remove from active windows
        activeWindows.delete(windowId);
        updateDockIndicators();
    }
}

function minimizeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        win.classList.add('minimized');
    }
}

// Drag Functionality
function startDrag(e, windowId) {
    e.preventDefault();
    draggedWindow = document.getElementById(windowId);

    if (!draggedWindow) return;

    bringToFront(draggedWindow);

    // Get the window's current position
    const rect = draggedWindow.getBoundingClientRect();

    // Calculate offset
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;

    draggedWindow.classList.add('dragging');

    // Add global event listeners
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

function onDrag(e) {
    if (!draggedWindow) return;

    e.preventDefault();

    // Calculate new position
    let newX = e.clientX - dragOffsetX;
    let newY = e.clientY - dragOffsetY;

    // Keep within viewport bounds
    const maxX = window.innerWidth - draggedWindow.offsetWidth;
    const maxY = window.innerHeight - draggedWindow.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(28, Math.min(newY, maxY)); // 28 is menu bar height

    // Apply position
    draggedWindow.style.left = newX + 'px';
    draggedWindow.style.top = newY + 'px';
}

function stopDrag() {
    if (draggedWindow) {
        draggedWindow.classList.remove('dragging');
        draggedWindow = null;
    }

    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
}

// Resize Functionality
function startResize(e, windowId, direction) {
    e.preventDefault();
    e.stopPropagation();

    resizedWindow = document.getElementById(windowId);
    if (!resizedWindow) return;

    resizeDirection = direction;
    startX = e.clientX;
    startY = e.clientY;

    const rect = resizedWindow.getBoundingClientRect();
    startWidth = rect.width;
    startHeight = rect.height;
    startLeft = rect.left;
    startTop = rect.top;

    resizedWindow.classList.add('resizing');
    bringToFront(resizedWindow);

    document.addEventListener('mousemove', onResize);
    document.addEventListener('mouseup', stopResize);
}

function onResize(e) {
    if (!resizedWindow) return;

    e.preventDefault();

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    const minWidth = 300;
    const minHeight = 200;

    let newWidth = startWidth;
    let newHeight = startHeight;
    let newLeft = startLeft;
    let newTop = startTop;

    // Handle East (right) resize - only width changes
    if (resizeDirection === 'e') {
        newWidth = Math.max(minWidth, startWidth + deltaX);
    }
    // Handle West (left) resize - width and left position change
    else if (resizeDirection === 'w') {
        const proposedWidth = startWidth - deltaX;
        if (proposedWidth >= minWidth) {
            newWidth = proposedWidth;
            newLeft = startLeft + deltaX;
        }
    }
    // Handle South (bottom) resize - only height changes
    else if (resizeDirection === 's') {
        newHeight = Math.max(minHeight, startHeight + deltaY);
    }
    // Handle North (top) resize - height and top position change
    else if (resizeDirection === 'n') {
        const proposedHeight = startHeight - deltaY;
        if (proposedHeight >= minHeight) {
            newHeight = proposedHeight;
            newTop = startTop + deltaY;
        }
    }
    // Handle corners (existing logic)
    else {
        // Handle horizontal resizing for corners
        if (resizeDirection.includes('e')) {
            newWidth = Math.max(minWidth, startWidth + deltaX);
        }
        if (resizeDirection.includes('w')) {
            const proposedWidth = startWidth - deltaX;
            if (proposedWidth >= minWidth) {
                newWidth = proposedWidth;
                newLeft = startLeft + deltaX;
            }
        }

        // Handle vertical resizing for corners
        if (resizeDirection.includes('s')) {
            newHeight = Math.max(minHeight, startHeight + deltaY);
        }
        if (resizeDirection.includes('n')) {
            const proposedHeight = startHeight - deltaY;
            if (proposedHeight >= minHeight) {
                newHeight = proposedHeight;
                newTop = startTop + deltaY;
            }
        }
    }

    // Apply new dimensions
    resizedWindow.style.width = newWidth + 'px';
    resizedWindow.style.height = newHeight + 'px';
    resizedWindow.style.left = newLeft + 'px';
    resizedWindow.style.top = newTop + 'px';
}

function stopResize() {
    if (resizedWindow) {
        resizedWindow.classList.remove('resizing');
        resizedWindow = null;
    }

    document.removeEventListener('mousemove', onResize);
    document.removeEventListener('mouseup', stopResize);
}

function minimizeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        win.classList.add('minimized');
    }
}

// Project Functions
function openProject(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const windowEl = document.getElementById('project-detail-window');
    const titleEl = document.getElementById('project-detail-title');
    const bodyEl = document.getElementById('project-detail-body');
    const currentTitle = titleEl ? titleEl.textContent : '';

    // Check if any project window is already open and visible
    const isProjectWindowOpen = windowEl &&
                                windowEl.style.display !== 'none' &&
                                !windowEl.classList.contains('closed');

    // If a project window is open
    if (isProjectWindowOpen) {
        // If it's the same project, close it (toggle)
        if (currentTitle === project.title) {
            closeWindow('project-detail-window');
            return;
        }
        // If it's a different project, just update the content (don't add to active set again)
    }

    // Update current project tracking
    currentProjectId = projectId;
    currentSliderIndex = 0;

    if (windowEl && titleEl && bodyEl) {
        titleEl.textContent = project.title;

        // Generate slider HTML
        const sliderHtml = generateSliderHtml(project.images, projectId);

        // Generate services tags
        const servicesHtml = project.services.map(service =>
            `<span class="service-tag">${service}</span>`
        ).join('');

        // Get current project index for navigation
        const currentIndex = projectOrder.indexOf(projectId);
        const prevProject = currentIndex > 0 ? projectData[projectOrder[currentIndex - 1]] : null;
        const nextProject = currentIndex < projectOrder.length - 1 ? projectData[projectOrder[currentIndex + 1]] : null;

        // Generate impact HTML for projects that have it
        const impactHtml = project.impact ? `
            <div class="project-section impact-section">
                <h4>Impacto en el negocio</h4>
                <ul class="impact-list">
                    ${project.impact.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        bodyEl.innerHTML = `
            <!-- Banner Image -->
            <div class="project-banner">
                <img src="${project.banner}" alt="${project.title} Banner" class="banner-img" onclick="openImageModal('${project.banner}', '${projectId}')">
            </div>

            <!-- Project Info -->
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="project-meta">
                    <span>${project.category}</span>
                    <span>${project.year}</span>
                </div>
                <div class="project-services">
                    ${servicesHtml}
                </div>
                <div class="project-section">
                    <h4>Resumen</h4>
                    <p class="project-description">${project.description}</p>
                </div>
                <div class="project-section">
                    <h4>El Reto</h4>
                    <p class="project-description">${project.reto}</p>
                </div>
                <div class="project-section">
                    <h4>La Solución</h4>
                    <p class="project-description">${project.solucion}</p>
                </div>
                ${impactHtml}
                <div class="project-tags">
                    <span class="tags-label">Tags: </span>${project.tags}
                </div>
            </div>

            <!-- Gallery Slider -->
            <div class="project-gallery">
                ${sliderHtml}
            </div>
        `;

        // Initialize slider after DOM update
        setTimeout(() => initSlider(), 0);

        windowEl.style.display = 'block';
        windowEl.classList.remove('closed', 'minimized');

        // Animate in
        requestAnimationFrame(() => {
            windowEl.style.opacity = '1';
            windowEl.style.transform = 'scale(1) translateY(0)';
        });

        bringToFront(windowEl);

        // Update header navigation
        updateHeaderNavigation(currentIndex);

        // Only add to active set if it wasn't already open
        if (!isProjectWindowOpen) {
            activeWindows.add('project-detail-window');
        }
        updateDockIndicators();
    }
}

// Update header navigation state
function updateHeaderNavigation(currentIndex) {
    const prevBtn = document.getElementById('nav-prev-btn');
    const nextBtn = document.getElementById('nav-next-btn');
    const counterEl = document.getElementById('project-counter-header');

    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '0.6';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    }

    if (nextBtn) {
        nextBtn.disabled = currentIndex === projectOrder.length - 1;
        nextBtn.style.opacity = currentIndex === projectOrder.length - 1 ? '0.3' : '0.6';
        nextBtn.style.cursor = currentIndex === projectOrder.length - 1 ? 'not-allowed' : 'pointer';
    }

    if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${projectOrder.length}`;
    }
}

// Generate Slider HTML
function generateSliderHtml(images, projectId) {
    const slidesHtml = images.map((img, index) =>
        `<div class="slider-slide">
            <img src="${img}" alt="Image ${index + 1}" onclick="openImageModal('${img}', '${projectId}')">
        </div>`
    ).join('');

    const dotsHtml = images.map((_, index) =>
        `<button class="slider-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>`
    ).join('');

    return `
        <div class="slider-container">
            <div class="slider-track" id="slider-track">
                ${slidesHtml}
            </div>
            <button class="slider-nav prev" onclick="moveSlider(-1)">&#8249;</button>
            <button class="slider-nav next" onclick="moveSlider(1)">&#8250;</button>
        </div>
        <div class="slider-dots" id="slider-dots">
            ${dotsHtml}
        </div>
    `;
}

// Initialize Slider
function initSlider() {
    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('.slider-dot');

    if (track) {
        track.style.transform = `translateX(-${currentSliderIndex * 100}%)`;
    }

    updateSliderDots();
}

// Move Slider
function moveSlider(direction) {
    const project = projectData[currentProjectId];
    if (!project) return;

    const totalSlides = project.images.length;
    currentSliderIndex += direction;

    if (currentSliderIndex < 0) currentSliderIndex = 0;
    if (currentSliderIndex >= totalSlides) currentSliderIndex = totalSlides - 1;

    const track = document.getElementById('slider-track');
    if (track) {
        track.style.transform = `translateX(-${currentSliderIndex * 100}%)`;
    }

    updateSliderDots();
}

// Go to specific slide
function goToSlide(index) {
    const project = projectData[currentProjectId];
    if (!project) return;

    currentSliderIndex = index;
    if (currentSliderIndex < 0) currentSliderIndex = 0;
    if (currentSliderIndex >= project.images.length) currentSliderIndex = project.images.length - 1;

    const track = document.getElementById('slider-track');
    if (track) {
        track.style.transform = `translateX(-${currentSliderIndex * 100}%)`;
    }

    updateSliderDots();
}

// Update slider dots
function updateSliderDots() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSliderIndex);
    });
}

// Navigate between projects
function navigateProject(direction) {
    const currentIndex = projectOrder.indexOf(currentProjectId);
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < projectOrder.length) {
        const newProjectId = projectOrder[newIndex];
        openProject(newProjectId);
    }
}

// Image Modal Navigation
let currentModalImages = [];
let currentModalIndex = 0;

function openImageModal(src, projectId) {
    // Get current project's images
    const project = projectData[projectId];
    if (project) {
        currentModalImages = project.images;
        currentModalIndex = currentModalImages.indexOf(src);
        if (currentModalIndex === -1) currentModalIndex = 0;
    }

    createModal(currentModalImages[currentModalIndex], projectId);
}

function createModal(src, projectId) {
    // Remove existing modal
    const existingModal = document.querySelector('.image-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.id = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeImageModal()"></div>
        <button class="modal-nav modal-prev" onclick="navigateImage(-1, '${projectId}')" ${currentModalIndex === 0 ? 'style="opacity: 0.3; pointer-events: none;"' : ''}>&#8249;</button>
        <img src="${src}" alt="Project Image" class="modal-image">
        <button class="modal-nav modal-next" onclick="navigateImage(1, '${projectId}')" ${currentModalIndex === currentModalImages.length - 1 ? 'style="opacity: 0.3; pointer-events: none;"' : ''}>&#8250;</button>
        <button class="modal-close" onclick="closeImageModal()">&times;</button>
        <div class="modal-counter">${currentModalIndex + 1} / ${currentModalImages.length}</div>
    `;
    document.body.appendChild(modal);

    // Add keyboard navigation
    document.addEventListener('keydown', handleModalKeydown);
}

function navigateImage(direction, projectId) {
    currentModalIndex += direction;

    if (currentModalIndex < 0) currentModalIndex = 0;
    if (currentModalIndex >= currentModalImages.length) currentModalIndex = currentModalImages.length - 1;

    createModal(currentModalImages[currentModalIndex], projectId);
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) modal.remove();
    document.removeEventListener('keydown', handleModalKeydown);
    currentModalImages = [];
    currentModalIndex = 0;
}

function handleModalKeydown(e) {
    if (currentModalImages.length === 0) return;

    const project = Object.keys(projectData).find(key =>
        projectData[key].images === currentModalImages
    );

    if (e.key === 'ArrowLeft') {
        navigateImage(-1, project);
    } else if (e.key === 'ArrowRight') {
        navigateImage(1, project);
    } else if (e.key === 'Escape') {
        closeImageModal();
    }
}

// Note Data - HTML Content for macOS Notes Style
const notesData = [
    {
        title: "Oferta de valor",
        html: `<h1>Experiencias web de alto impacto</h1>
            <h2>Inteligencia Artificial & Flujos de Trabajo Híbridos</h2>
            <ul class="checklist yellow-checks">
                <li><span class="checkbox">&#10003;</span> Desarrollo de assets visuales con IA (ComfyUI, Midjourney)</li>
                <li><span class="checkbox">&#10003;</span> Optimización de flujos creativos con automatización</li>
                <li><span class="checkbox">&#10003;</span> Aceleración de producción de interfaces con IA</li>
                <li><span class="checkbox">&#10003;</span> Integración de modelos LLM en experiencias web</li>
                <li><span class="checkbox">&#10003;</span> Diseño assistivo: Prototipado acelerado 50% más rápido</li>
                <li><span class="checkbox">&#10003;</span> Reducción de costos de producción manteniendo calidad premium</li>
                <li><span class="checkbox">&#10003;</span> Prompt Engineering para assets web</li>
                <li><span class="checkbox">&#10003;</span> Optimización de workflows de diseño con IA</li>
            </ul>
            <h2>Animación & Interacción de Alto Nivel</h2>
            <ul class="checklist yellow-checks">
                <li><span class="checkbox">&#10003;</span> Implementación de Three.js para experiencias inmersivas</li>
                <li><span class="checkbox">&#10003;</span> Microinteracciones con GSAP que aumentan engagement +35%</li>
                <li><span class="checkbox">&#10003;</span> Optimización de rendimiento (Lighthouse 90+)</li>
                <li><span class="checkbox">&#10003;</span> Transiciones de scroll con ScrollTrigger</li>
                <li><span class="checkbox">&#10003;</span> Performance-first: Carga sub-1s incluso con animaciones complejas</li>
            </ul>
            <h2>Tech Stack Especializado</h2>
            <p><strong>Frontend:</strong> Three.js, GSAP</p>
            <p><strong>CMS:</strong> WordPress, Elementor Pro, Shopify, framer</p>
            <p><strong>IA:</strong> ComfyUI, Claude Code, Flow</p>
            <p><strong>Diseño:</strong> Figma, Adobe Suite</p>
            <p><strong>Performance UX:</strong> attentioninsight</p>`
    },
    {
        title: "Mis herramientas de trabajo",
        html: `<h1>Mis herramientas de trabajo</h1>
            <p><strong>Frontend:</strong> Three.js, GSAP</p>
            <p><strong>CMS:</strong> WordPress, Elementor Pro, Shopify, framer</p>
            <p><strong>IA:</strong> ComfyUI, Claude Code, Flow</p>
            <p><strong>Diseño:</strong> Figma, Adobe Suite</p>
            <p><strong>Performance UX:</strong> attentioninsight</p>`
    },
    {
        title: "Mi Trayectoria - Donde He Trabajado",
        html: `<h1>Mi Trayectoria - Donde He Trabajado</h1>
            <h2>Lil horse Inc.</h2>
            <p>Lead Designer - Experiencia Digital</p>
            <p>2024 - 2025</p>
            <br>
            <h2>Digital Arkitechs</h2>
            <p>Consultor Estratégico en Diseño Digital</p>
            <p>2024</p>
            <br>
            <h2>Draketech</h2>
            <p>Lead Designer UI / UX</p>
            <p>2022 - 2023</p>
            <br>
            <h2>G lab</h2>
            <p>Designer Web</p>
            <p>2018 - 2022</p>`
    }
];

// Project Filtering
function filterProjects(category) {
    const projectItems = document.querySelectorAll('.project-item');
    const sidebarItems = document.querySelectorAll('.finder-sidebar .sidebar-item');
    const noProjectsMsg = document.getElementById('no-projects');
    let visibleCount = 0;

    // Update active state in sidebar
    sidebarItems.forEach(item => {
        const itemText = item.querySelector('span:last-child')?.textContent;
        if (category === 'all' && itemText === 'All Projects') {
            item.classList.add('active');
        } else if (itemText === category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Filter projects
    projectItems.forEach(item => {
        const tags = item.getAttribute('data-tags');
        if (category === 'all') {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            if (tags && tags.includes(category)) {
                item.style.display = 'flex';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        }
    });

    // Show/hide "no projects" message
    if (noProjectsMsg) {
        noProjectsMsg.style.display = visibleCount === 0 ? 'flex' : 'none';
    }
}

// Note Selection
function selectNote(index) {
    const noteItems = document.querySelectorAll('.note-item');
    const editorContent = document.getElementById('note-editor-content');

    noteItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    if (editorContent && notesData[index]) {
        editorContent.innerHTML = notesData[index].html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const noteItems = document.querySelectorAll('.note-item');
    noteItems.forEach((item, index) => {
        item.addEventListener('click', () => selectNote(index));
    });
});

// Sidebar Item Selection
document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(s => s.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + W to close active window
    if ((e.metaKey || e.ctrlKey) && e.key === 'w') {
        e.preventDefault();
        const activeWindow = document.querySelector('.window.active');
        if (activeWindow) {
            closeWindow(activeWindow.id);
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => {
        const rect = win.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            win.style.left = Math.max(0, window.innerWidth - rect.width) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            win.style.top = Math.max(28, window.innerHeight - rect.height - 100) + 'px';
        }
    });

    // Restore desktop icons visibility on desktop
    if (window.innerWidth > 768) {
        const desktopIcons = document.querySelector('.desktop-icons');
        if (desktopIcons) {
            desktopIcons.style.opacity = '1';
            desktopIcons.style.pointerEvents = 'auto';
        }
    } else {
        // Update based on active windows
        updateDockIndicators();
    }
});

// Touch support for mobile
let touchStartX = 0;
let touchStartY = 0;
let touchCurrentWindow = null;

document.addEventListener('touchstart', (e) => {
    const header = e.target.closest('.window-header');
    if (header) {
        const windowId = header.parentElement.id;
        touchCurrentWindow = document.getElementById(windowId);
        if (touchCurrentWindow) {
            bringToFront(touchCurrentWindow);
            const touch = e.touches[0];
            const rect = touchCurrentWindow.getBoundingClientRect();
            touchStartX = touch.clientX - rect.left;
            touchStartY = touch.clientY - rect.top;
        }
    }
}, { passive: false });

document.addEventListener('touchmove', (e) => {
    if (touchCurrentWindow) {
        e.preventDefault();
        const touch = e.touches[0];
        let newX = touch.clientX - touchStartX;
        let newY = touch.clientY - touchStartY;

        const maxX = window.innerWidth - touchCurrentWindow.offsetWidth;
        const maxY = window.innerHeight - touchCurrentWindow.offsetHeight;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(28, Math.min(newY, maxY));

        touchCurrentWindow.style.left = newX + 'px';
        touchCurrentWindow.style.top = newY + 'px';
    }
}, { passive: false });

document.addEventListener('touchend', () => {
    touchCurrentWindow = null;
});

// Smooth animations for dock items
document.addEventListener('DOMContentLoaded', () => {
    const dockItems = document.querySelectorAll('.dock-item');
    dockItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
});

// Prevent text selection on window header
const style = document.createElement('style');
style.textContent = `
    .window-header {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;
document.head.appendChild(style);
