// Données des projets
const projectsData = {
    project1: {
        title: "Système de rayonnage automatisé",
        category: "Académique",
        //period: "Octobre 2024 - Janvier 2025",
        description: "Projet de programmation complète d'un système de rayonnage automatisé avec automate Siemens S7-1200. Intégration complète de capteurs, développement d'IHM et mise en place d'un système de supervision SCADA avec Node-RED.",
        images: [
            "images/projets/p1_rack2_face.jpg",
            "images/projets/p1_drawing.png",
            "images/projets/p1_scada_inked.jpg"
        ],
        details: [
            "Programmation complète en Ladder et STL de l'automate Siemens S7-1200",
            "Intégration et configuration de multiples capteurs pour la détection",
            "Conception d'une interface homme-machine (IHM) intuitive",
            "Mise en place d'un système de supervision SCADA avec Node-RED",
            "Tests et validation du système complet"
        ],
        tags: ["Siemens TIA Portal", "S7-1200", "Ladder", "STL", "SCADA", "Node-RED", "IHM"]
    },
    project2: {
        title: "Simulation de chaînes de convoyeurs",
        category: "Personnel",
        //period: "En cours",
        description: "Projet personnel de développement d'une cellule robotisée complète pour brochage industriel avec simulation avancée et supervision en temps réel.",
        images: [      
            "images/projets/brochage_cell_abb.PNG",
            "images/projets/brochage_ihm.PNG",
        ],
        details: [
            "Programmation de chaînes de convoyeurs avec Codesys",
            "Communication Modbus TCP/IP entre automates et RobotStudio",
            "Supervision complète avec RapidScada",
            "Conception et simulation de cellule robotisée",
            "Optimisation des cycles de production"
        ],
        tags: ["Codesys", "RobotStudio", "RoboDK", "Modbus TCP/IP", "RapidScada", "Simulation", "IHM"]
    },
    project3: {
        title: "Automatisation chaîne de convoyeurs",
        category: "Académique",
        //period: "Janvier 2024 - Mars 2024",
        description: "Conception complète d'un système de test automatisé pour chaîne de convoyeurs industriels avec automate Schneider.",
        images: [
            "images/projets/sch_M241.PNG",
            "images/projets/sch_kuka.PNG",
            "images/projets/sch_pivot.PNG",
        ],
        details: [
            "Conception complète du système de test automatisé",
            "Programmation de l'automate Schneider M241",
            "Développement de l'interface homme-machine",
            "Validation des performances du système",
            "Rédaction du dossier technique complet"
        ],
        tags: ["Schneider Electric", "M241", "Control Expert", "IHM", "Documentation technique"]
    },
    project4: {
        title: "Robots Stäubli - Pick & Place",
        category: "Académique",
        //period: "2024 - 2025",
        description: "Programmation de robots Stäubli 6 axes et SCARA pour opérations de manipulation précise et contrôle qualité.",
        images: [
            "images/projets/p3_scara.PNG",
            "images/projets/p3_robotfly.PNG",
            "images/projets/p3_gui.PNG",
        ],
        details: [
            "Programmation en VAL3 de robots TX40, TX2-60, TS2-40",
            "Développement de séquences pick-and-place optimisées",
            "Intégration de systèmes de contrôle qualité",
            "Optimisation des trajectoires robotiques",
            "Tests et validation des performances"
        ],
        tags: ["Stäubli", "VAL3", "Pick & Place", "Robotique", "Contrôle qualité"]
    },
    project5: {
        title: "Lanceur de balles automatique",
        category: "Académique",
        //period: "2024 - 2025",
        description: "Développement complet d'un système mécatronique de lancement automatique de balles avec vision par ordinateur intégrée.",
        images: [
            "images/projets/tourelle_irl.PNG",
            "images/projets/tourelle_eclatee.PNG",
            "images/projets/tourelle_ucalogo.PNG",
        ],
        details: [
            "Conception mécanique optimisée pour l'impression 3D avec CATIA V5",
            "Intégration de capteurs de vision pour le tracking",
            "Développement d'algorithmes de traitement d'images en Python avec OpenCV",
            "Mise au point et calibration du système",
            "Validation expérimentale des performances de lancement"
        ],
        tags: ["CATIA V5", "Python", "OpenCV", "Impression 3D", "Vision par ordinateur", "Mécatronique"]
    }
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Mobile menu toggle
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// Modal pour images
function openModal(imgSrc) {
    document.getElementById('imageModal').classList.add('active');
    document.getElementById('modalImage').src = imgSrc;
}

function closeModal() {
    document.getElementById('imageModal').classList.remove('active');
}

// Modal pour projets
function openProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('projectModalBody');
    
    let imagesHTML = '';
    if (project.images && project.images.length > 0) {
        imagesHTML = `
            <div class="project-modal-gallery">
                ${project.images.map(img => `
                    <img src="${img}" alt="${project.title}" onclick="openModal('${img}')">
                `).join('')}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="project-modal-header">
            <span class="project-category">${project.category}</span>
            <h2>${project.title}</h2>
            
        </div>
        <div class="project-modal-body">
            ${imagesHTML}
            <div class="project-modal-details">
                <h3>Description</h3>
                <p>${project.description}</p>
                
                <h3>Réalisations</h3>
                <ul>
                    ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fermer les modals avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeProjectModal();
    }
});

// Fermer le modal de projet en cliquant en dehors
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-showcase-card, .experience-card, .skill-category, .education-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
