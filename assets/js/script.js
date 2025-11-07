'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Fonction pour changer de page
function changePage(targetPageName) {
  // Désactiver toutes les pages
  pages.forEach(page => page.classList.remove("active"));
  
  // Désactiver tous les liens de navigation
  navigationLinks.forEach(link => link.classList.remove("active"));
  
  // Activer la page cible
  const targetPage = Array.from(pages).find(page => page.dataset.page === targetPageName);
  if (targetPage) {
    targetPage.classList.add("active");
  }
  
  // Activer le lien de navigation correspondant
  const targetLink = Array.from(navigationLinks).find(
    link => link.innerHTML.toLowerCase() === targetPageName
  );
  if (targetLink) {
    targetLink.classList.add("active");
  }
  
  // Remonter en haut de la page
  window.scrollTo(0, 0);
}

// Gestionnaire d'événements global pour la navigation
document.addEventListener('click', function(event) {
  // Gestion du bouton retour
  if (event.target.closest('[data-back-btn]')) {
    event.preventDefault();
    changePage('portfolio');
    return;
  }
  
  // Gestion des liens de navigation
  const navLink = event.target.closest('[data-nav-link]');
  if (navLink) {
    const clickedPage = navLink.innerHTML.toLowerCase();
    changePage(clickedPage);
  }
});


// ---------------------------------------------------
// --- CODE AJOUTÉ POUR LE PORTFOLIO DÉTAILLÉ ---
// ---------------------------------------------------

// 1. Base de données (fictive) des projets
//    Vous pouvez remplacer le "lorem ipsum" par votre propre contenu
const projectData = {
  "Finance": {
    title: "Projet: Finance Dashboard",
    banner: "./assets/images/project-1.jpg",
    category: "Web Development",
    client: "Client Fictif A",
    date: "Janvier 2025",
    designer: "Richard Hanrick",
    descTitle: "Description du Dashboard Finance",
    descText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: `
      <div class="feature-item">
        <h4 class="h4 feature-title">1. Suivi en Temps Réel</h4>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam...</p>
      </div>
      <div class="feature-item">
        <h4 class="h4 feature-title">2. Rapports Détaillés</h4>
        <p class="about-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>`,
    gallery: [
      { src: "./assets/images/project-1.jpg", alt: "Dashboard vue 1" },
      { src: "./assets/images/project-2.png", alt: "Dashboard vue 2" },
      { src: "./assets/images/project-9.png", alt: "Dashboard vue 3" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-figma"></ion-icon>
        <span>Maquette Figma</span>
      </a>
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source (Privé)</span>
      </a>`
  },
  "Orizon": {
    title: "Projet: Orizon",
    banner: "./assets/images/project-2.png",
    category: "Web Development",
    client: "Client Fictif B",
    date: "Février 2025",
    designer: "Richard Hanrick",
    descTitle: "Description du Projet Orizon",
    descText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: `
      <div class="feature-item">
        <h4 class="h4 feature-title">1. Intégration Crypto</h4>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam...</p>
      </div>`,
    gallery: [
      { src: "./assets/images/project-2.png", alt: "Orizon vue 1" },
      { src: "./assets/images/project-7.png", alt: "Orizon vue 2" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-figma"></ion-icon>
        <span>Maquette Figma</span>
      </a>`
  },
  "Fundo": {
    title: "Projet: Fundo",
    banner: "./assets/images/project-3.jpg",
    category: "Web Design",
    client: "Client Fictif C",
    date: "Mars 2025",
    designer: "Richard Hanrick",
    descTitle: "Description du Projet Fundo",
    descText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    features: `
      <div class="feature-item">
        <h4 class="h4 feature-title">1. Recherche Immobilière</h4>
        <p class="about-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      </div>
      <div class="feature-item">
        <h4 class="h4 feature-title">2. Visites Virtuelles</h4>
        <p class="about-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
      </div>`,
    gallery: [
      { src: "./assets/images/project-3.jpg", alt: "Fundo vue 1" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="document-text-outline"></ion-icon>
        <span>Etude de cas</span>
      </a>`
  },
  
  // --- Modèle pour votre "Projet Ecole" ---
  // J'ai lié celui-ci au projet "Arrival" (le dernier de votre liste)
  // Vous pouvez le lier à n'importe quel projet en changeant le nom "Arrival"
  "Arrival": { 
    title: "Projet Ecole",
    banner: "./assets/images/CaptureFigma.png", // J'ai mis une de vos images
    category: "Projet Ecole",
    client: "Ecole Esic",
    date: "May 10, 2025",
    designer: "FENZI Melissa",
    descTitle: "Description du Projet : Mastering",
    descText: "Mastering est une application (WEB/MOBILE) innovante conçue pour automatiser et optimiser la gestion des soutenances au sein d'une école spécifique. Elle couvre l'intégralité du processus, depuis la création des formations jusqu'à la délivrance des attestations de réussite...",
    features: `
      <div class="feature-item">
        <h4 class="h4 feature-title">1. Gestion des Connexions...</h4>
        <p class="about-text">Ce processus couvre l'authentification des utilisateurs...</p>
      </div>
      <div class="feature-item">
        <h4 class="h4 feature-title">2. Édition des Formations</h4>
        <p class="about-text">Permet de créer et de modifier les formations...</p>
      </div>
      <div class="feature-item">
        <h4 class="h4 feature-title">3. Édition des Sessions de Formation</h4>
        <p class="about-text">Gère la création et la modification des sessions...</p>
      </div>
      <div class="feature-item">
        <h4 class="h4 feature-title">4. Création des Sessions de Soutenance</h4>
        <p class="about-text">Définit les sessions de soutenance liées à une session...</p>
      </div>
      <div class="feature-item">
        <h4 class="h4 feature-title">5. Inscription des Apprenants</h4>
        <p class="about-text">Permet d'ajouter les apprenants à la session...</p>
      </div>`,
    gallery: [
      { src: "./assets/images/CaptureFigma.png", alt: "Maquette Figma" },
      { src: "./assets/images/CaptureSiteWeb.png", alt: "Aperçu site web" },
      { src: "./assets/images/CaptureReservation.png", alt: "Aperçu réservation" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="document-text-outline"></ion-icon>
        <span>Cahier de charge</span>
      </a>
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-figma"></ion-icon>
        <span>Maquette Figma individuel...</span>
      </a>
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source FRONTEND WEB</span>
      </a>
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source FRONTEND MOBILE</span>
      </a>
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source BACKEND GENERAL</span>
      </a>
      <a href="#" class="deliverable-item">
        <ion-icon name="document-text-outline"></ion-icon>
        <span>Fiche E6 du projet mastering</span>
      </a>`
  }
};

// 2. Sélection des éléments de la page de projet
const projectDetailPage = document.querySelector("[data-page='projet-detail']");
const portfolioPage = document.querySelector("[data-page='portfolio']");
const projectItems = document.querySelectorAll(".project-item > a");
const backToPortfolioBtn = document.querySelector("[data-back-btn]");

// Éléments de contenu à mettre à jour
const detailTitle = document.getElementById("project-detail-title");
const detailBanner = document.getElementById("project-detail-banner");
const detailCategory = document.getElementById("project-detail-category");
const detailClient = document.getElementById("project-detail-client");
const detailDate = document.getElementById("project-detail-date");
const detailDesigner = document.getElementById("project-detail-designer");
const detailDescTitle = document.getElementById("project-detail-desc-title");
const detailDescText = document.getElementById("project-detail-desc-text");
const detailFeatures = document.getElementById("project-detail-features");
const detailGallery = document.getElementById("project-detail-gallery");
const detailDeliverables = document.getElementById("project-detail-deliverables");


// 3. Fonction pour mettre à jour la page de détail
function updateProjectDetails(projectName) {
  // On utilise "Finance" comme projet par défaut si on ne trouve pas le nom
  const data = projectData[projectName] || projectData["Finance"]; 

  // Remplissage des champs
  detailTitle.innerHTML = data.title;
  detailBanner.src = data.banner;
  detailBanner.alt = data.title;
  detailCategory.innerHTML = data.category;
  detailClient.innerHTML = data.client;
  detailDate.innerHTML = data.date;
  detailDesigner.innerHTML = data.designer;
  detailDescTitle.innerHTML = data.descTitle;
  detailDescText.innerHTML = data.descText;
  
  // Remplissage des sections complexes (listes)
  detailFeatures.innerHTML = data.features;
  detailDeliverables.innerHTML = data.deliverables;

  // Remplissage de la galerie
  detailGallery.innerHTML = ""; // On vide la galerie
  data.gallery.forEach(image => {
    detailGallery.innerHTML += `<img src="${image.src}" alt="${image.alt}">`;
  });

  // Après avoir rempli la galerie, on ré-active les écouteurs pour la lightbox
  addGalleryEventListeners();
}

// 4. Ajout de l'événement de clic sur les projets de la grille
projectItems.forEach(item => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le lien de recharger la page

    // On récupère le nom du projet depuis le h3
    const projectName = item.querySelector(".project-title").innerHTML;

    // On met à jour la page de détail avec les bonnes infos
    updateProjectDetails(projectName);

    // On cache la page "Portfolio" (la grille)
    portfolioPage.classList.remove("active");
    
    // On affiche la page "projet-detail"
    projectDetailPage.classList.add("active");
    
    // On s'assure que le lien "Portfolio" dans la nav reste bien actif
    navigationLinks.forEach(nav => {
      if (nav.innerHTML.toLowerCase() === "portfolio") {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});

// 5. Ajout de l'événement pour le bouton "Retour"
document.addEventListener('DOMContentLoaded', function() {
  const backToPortfolioBtn = document.querySelector("[data-back-btn]");
  
  if (backToPortfolioBtn) {
    backToPortfolioBtn.addEventListener("click", function() {
      const projectDetailPage = document.querySelector("[data-page='projet-detail']");
      const portfolioPage = document.querySelector("[data-page='portfolio']");
      
      if (projectDetailPage && portfolioPage) {
        // On cache la page "projet-detail"
        projectDetailPage.classList.remove("active");
        // On affiche la page "Portfolio" (la grille)
        portfolioPage.classList.add("active");
        // On met à jour la navigation
        const portfolioLink = document.querySelector("[data-nav-link='portfolio']");
        if (portfolioLink) {
          portfolioLink.classList.add("active");
        }
        // On remonte en haut
        window.scrollTo(0, 0);
      } else {
        console.error("Pages non trouvées:", {
          detail: projectDetailPage ? "trouvée" : "non trouvée",
          portfolio: portfolioPage ? "trouvée" : "non trouvée"
        });
      }
    });
  } else {
    console.error("Le bouton 'Retour' n'a pas été trouvé dans le DOM");
  }
});


// 6. Gestion de la Lightbox (Modale Galerie)
const galleryModal = document.querySelector("[data-gallery-modal-container]");
const galleryModalCloseBtn = document.querySelector("[data-gallery-modal-close-btn]");
const galleryOverlay = document.querySelector("[data-gallery-overlay]");
const galleryModalImg = document.querySelector("[data-gallery-modal-img]");

// Vérification de l'existence des éléments
if (!galleryModal) console.error("La modale de galerie n'a pas été trouvée");
if (!galleryModalCloseBtn) console.error("Le bouton de fermeture de la galerie n'a pas été trouvé");
if (!galleryOverlay) console.error("L'overlay de la galerie n'a pas été trouvé");
if (!galleryModalImg) console.error("L'image de la modale n'a pas été trouvée");

// Fonction pour ouvrir la modale
function openGalleryModal() {
  galleryModal.classList.add("active");
  galleryOverlay.classList.add("active");
}

// Fonction pour fermer la modale
function closeGalleryModal() {
  galleryModal.classList.remove("active");
  galleryOverlay.classList.remove("active");
}

// Fonction pour attacher les écouteurs aux images de la galerie
// On doit l'appeler à chaque fois qu'on change de projet
function addGalleryEventListeners() {
  if (!detailGallery) {
    console.error("La galerie n'a pas été trouvée dans le DOM");
    return;
  }
  
  const galleryImages = detailGallery.querySelectorAll("img");
  
  if (galleryImages.length === 0) {
    console.error("Aucune image n'a été trouvée dans la galerie");
    return;
  }
  
  galleryImages.forEach(img => {
    img.addEventListener("click", function() {
      if (!galleryModalImg) {
        console.error("L'élément modal pour l'image n'a pas été trouvé");
        return;
      }
      // Met la source de l'image cliquée dans la modale
      galleryModalImg.src = this.src;
      galleryModalImg.alt = this.alt;
      // Ouvre la modale
      openGalleryModal();
    });
  });
}

// Ajout des événements de fermeture
galleryModalCloseBtn.addEventListener("click", closeGalleryModal);
galleryOverlay.addEventListener("click", closeGalleryModal);

// Initialise les écouteurs de la galerie au premier chargement
// (important si la page de détail est chargée par défaut)
addGalleryEventListeners();