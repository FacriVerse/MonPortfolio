'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });







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
    link => (link.getAttribute('data-nav-link') || link.innerHTML.toLowerCase()) === targetPageName
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
    const target = navLink.getAttribute('data-nav-link') || navLink.innerHTML.toLowerCase();
    changePage(target);
  }
});


// ---------------------------------------------------
// --- CODE AJOUTÉ POUR LE PORTFOLIO DÉTAILLÉ ---
// ---------------------------------------------------

// 1. Base de données (fictive) des projets
//    Remplie avec vos données
const projectData = {
  
  "IA et armement": {
    pageTitle: "Projet: IA et armement",
    banner: "./assets/images/projet_IA_ARMEMENT.png",
    category: "Développement Web",
    client: "Projet de groupe (TP)",
    date: "2024-2025",
    type: "TP – BTS SIO 1re année",
    objectif: "Créer un site web responsive en HTML/CSS sur un thème lié à l’informatique, afin de développer les compétences en intégration web et en travail collaboratif.",
    description: "En équipe, nous avons conçu un site web présentant le rôle et les impacts de l’intelligence artificielle dans le domaine de l’armement. Chaque membre du groupe était responsable d’une page afin de garantir la cohérence et la qualité globale du site. J’ai personnellement développé deux pages HTML expliquant les enjeux technologiques et éthiques liés à l’utilisation de l’IA dans les systèmes d’armement, tout en respectant les principes de responsive design.",
    outils: `
      <li class="deliverable-item"><span>HTML5</span></li>
      <li class="deliverable-item"><span>CSS3</span></li>
      <li class="deliverable-item"><span>Bootstrap</span></li>
      <li class="deliverable-item"><span>Figma (maquette)</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Intégration web et design responsive</span></li>
      <li class="deliverable-item"><span>Collaboration et répartition des tâches</span></li>
      <li class="deliverable-item"><span>Recherche documentaire sur les enjeux technologiques et éthiques de l’IA</span></li>
      <li class="deliverable-item"><span>Structuration et cohérence d’un site web multi-pages</span></li>`,
    gallery: [
      { src: "./assets/images/Gallery_IA_ARMEMENT1.png", alt: "Image Site 1" },
      { src: "./assets/images/Gallery_IA_ARMEMENT2.png", alt: "Image Site 2" },
      { src: "./assets/images/Gallery_IA_ARMEMENT3.png", alt: "Image Site 3" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-figma"></ion-icon>
        <span>Maquette Figma</span>
      </a>`
  },

  "Gestion de réservations": {
    pageTitle: "Projet: Gestion de réservations",
    banner: "./assets/images/projet_Reservation_Materiel.png",
    category: "Développement Web",
    client: "Projet d'équipe (TP)",
    date: "2024-2025",
    type: "TP – BTS SIO 1re année",
    objectif: "Concevoir et développer un système numérique centralisé pour gérer efficacement la réservation de ressources (salles et matériel), permettre la consultation des disponibilités et le suivi de l'état du parc.",
    description: "Ce projet visait à créer une application web complète répondant à un besoin organisationnel de gestion de ressources. L'application gère deux types d'utilisateurs (utilisateurs finaux et administrateurs) avec des droits distincts, notamment un système d'authentification et des fonctionnalités CRUD. Mon rôle s'est concentré sur le back-end. J'ai conçu et implémenté la base de données relationnelle (MPD) sous phpMyAdmin (MySQL). De plus, j'ai programmé les scripts PHP nécessaires pour connecter l'application à la base de données.",
    outils: `
      <li class="deliverable-item"><span>PHP</span></li>
      <li class="deliverable-item"><span>MySQL (phpMyAdmin)</span></li>
      <li class="deliverable-item"><span>HTML5 / CSS3</span></li>
      <li class="deliverable-item"><span>JavaScript</span></li>
      <li class="deliverable-item"><span>Bootstrap</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Développement back-end (PHP)</span></li>
      <li class="deliverable-item"><span>Modélisation et conception de base de données (MPD)</span></li>
      <li class="deliverable-item"><span>Administration de SGBD (MySQL / phpMyAdmin)</span></li>
      <li class="deliverable-item"><span>Implémentation de logique métier (authentification, CRUD)</span></li>
      <li class="deliverable-item"><span>Travail en équipe et gestion de projet</span></li>`,
    gallery: [
      { src: "./assets/images/Gallery_GestionMateriel1.png", alt: "Page d'accueil" },
      { src: "./assets/images/Gallery_GestionMateriel2.png", alt: "Page de Contact" },
      { src: "./assets/images/Gallery_GestionMateriel3.png", alt: "Page de Réservation" },
       { src: "./assets/images/Gallery_GestionMateriel4.png", alt: "Page de Connexion" },
        { src: "./assets/images/Gallery_GestionMateriel6.png", alt: "Base de données" }

    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source (à lier)</span>
      </a>`
  },
  
  "FreedomMoney (Gestion bancaire)": {
    pageTitle: "Projet: FreedomMoney",
    banner: "./assets/images/projet_FreedomMoney.png", // Image du code Java
    category: "Développement Logiciel",
    client: "Projet Individuel (TP)",
    date: "2024-2025",
    type: "TP – BTS SIO 1re année",
    objectif: "Développer une application graphique (GUI) Java fonctionnelle simulant un système de gestion bancaire, en implémentant une logique métier et une gestion sécurisée des accès.",
    description: "J'ai conçu et développé l'intégralité de cette application en adoptant une architecture MVC (Modèle-Vue-Contrôleur). L'interface utilisateur a été réalisée avec Java Swing (via JOptionPane). Le système gère trois niveaux d'utilisateurs (ADMIN, CONSEILLER, CLIENT) avec des interfaces et des droits d'accès distincts. J'ai implémenté l'ensemble des fonctionnalités bancaires de base (gestion des profils, création de comptes, dépôts, retraits, virements) et des mesures de sécurité.",
    outils: `
      <li class="deliverable-item"><span>Java</span></li>
      <li class="deliverable-item"><span>Java Swing (pour la GUI)</span></li>
      <li class="deliverable-item"><span>IDE Eclipse</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Programmation Orientée Objet (POO) en Java</span></li>
      <li class="deliverable-item"><span>Mise en œuvre de l'architecture logicielle (MVC)</span></li>
      <li class="deliverable-item"><span>Développement d'interface graphique (GUI) avec Swing</span></li>
      <li class="deliverable-item"><span>Conception algorithmique (rédaction de pseudo-code)</span></li>
      <li class="deliverable-item"><span>Autonomie, résolution de problèmes</span></li>`,
    gallery: [
      { src: "./assets/images/Gallery_FreedomMoney1.png", alt: "Capture du code Java Swing1" },
      { src: "./assets/images/Gallery_FreedomMoney2.png", alt: "Capture du code Java Swing2" },
      { src: "./assets/images/Gallery_FreedomMoney3.png", alt: "Capture du code Java Swing3" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source (à lier)</span>
      </a>`
  },

  "Gestion multi-services (Java)": {
    pageTitle: "Projet: Gestion multi-services",
    banner: "./assets/images/projet_Gestion _Multi_Services.png", // Image placeholder
    category: "Développement Logiciel",
    client: "Projet Individuel (TP)",
    date: "2024-2025",
    type: "TP – BTS SIO 1re année",
    objectif: "Développer une application de bureau (GUI) en Java Swing simulant un système de gestion d'entreprise. L'objectif était d'intégrer plusieurs modules distincts (RH, banque, inventaire, RDV) en respectant une architecture logicielle MVC.",
    description: "J'ai développé l'intégralité de cette application en adoptant une architecture MVC. L'application gère des rôles utilisateurs (ADMIN, CLIENT, MEDECIN) avec des interfaces (Vues) et des permissions spécifiques. J'ai implémenté la logique métier (Contrôleur) pour les opérations bancaires, la gestion d'inventaire et un module de prise de rendez-vous. Les données (Modèles) sont gérées en mémoire via des collections (ArrayList).",
    outils: `
      <li class="deliverable-item"><span>Java</span></li>
      <li class="deliverable-item"><span>Java Swing (pour la GUI)</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Programmation Orientée Objet (POO) en Java</span></li>
      <li class="deliverable-item"><span>Mise en œuvre de l'architecture logicielle (MVC)</span></li>
      <li class="deliverable-item"><span>Développement d'interface graphique (Java Swing)</span></li>
      <li class="deliverable-item"><span>Conception de logique métier multi-modules</span></li>
      <li class="deliverable-item"><span>Gestion des permissions et des rôles utilisateurs</span></li>`,
    gallery: [
      { src: "./assets/images/Gallery_MultiService1.png", alt: "Capture code java" },
      { src: "./assets/images/Gallery_MultiService2.png", alt: "Capture code java 2" },
      { src: "./assets/images/Gallery_MultiService3.png", alt: "Capture code java 3" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source (à lier)</span>
      </a>`
  },

  "Maquettes UX/UI (Figma)": {
    pageTitle: "Projet: Maquettes UX/UI",
    banner: "./assets/images/projet_Maquettes.png",
    category: "Design & Conception",
    client: "Projet Individuel (TP)",
    date: "2024-2025",
    type: "TP – BTS SIO 1re année",
    objectif: "Appliquer les compétences en conception (UX, design visuel, fonctionnalité) pour créer deux maquettes haute-fidélité sur Figma, basées sur deux études de cas distinctes.",
    description: "J'ai réalisé l'intégralité du processus de maquettage en solo. J'ai analysé les besoins de chaque cible pour définir la hiérarchie visuelle, les palettes de couleurs et la disposition des composants afin de produire des maquettes visuelles statiques (non-prototypées) : Étude de cas 1 (B2B SaaS) : Conception de l'interface pour 'Futbolia'. Étude de cas 2 (B2C) : Conception d'un site vitrine pour 'L'entrecôte Royale'.",
    outils: `
      <li class="deliverable-item"><span>Figma</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Maquettage et conception d'interface (UI)</span></li>
      <li class="deliverable-item"><span>Analyse de l'expérience utilisateur (UX)</span></li>
      <li class="deliverable-item"><span>Analyse des besoins et traduction d'un cahier des charges</span></li>
      <li class="deliverable-item"><span>Conception de composants (boutons, formulaires, menus)</span></li>
      <li class="deliverable-item"><span>Autonomie et gestion de projet de design</span></li>`,
    gallery: [
      { src: "./assets/images/CaptureFigma.png", alt: "Maquette Futbolia" },
      { src: "./assets/images/CaptureFigma2.png", alt: "Maquette L'entrecôte Royale" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-figma"></ion-icon>
        <span>Lien vers la maquette Figma (à lier)</span>
      </a>`
  },

  "GameHub (Collection de jeux)": {
    pageTitle: "Projet: GameHub",
    banner: "./assets/images/projet_GameHub.png", // Image placeholder
    category: "Développement Web",
    client: "Projet Individuel (TP)",
    date: "2025-2026",
    type: "TP – BTS SIO 2e année",
    objectif: "Développer une application web (MVP) en PHP/MySQL permettant aux joueurs de s'inscrire, se connecter, parcourir un catalogue de jeux et gérer une collection personnelle de favoris.",
    description: "J'ai développé l'intégralité de cette application en suivant le cahier des charges MVP et en respectant une architecture MVC simplifiée. Ma contribution inclut la conception des diagrammes UML (Cas d'utilisation et Séquence), la modélisation et création de la base de données (MySQL), le développement back-end (PHP) de l'authentification (sessions, hachage) et du CRUD des favoris, ainsi que l'intégration front-end (CSS).",
    outils: `
      <li class="deliverable-item"><span>PHP</span></li>
      <li class="deliverable-item"><span>MySQL (phpMyAdmin)</span></li>
      <li class="deliverable-item"><span>HTML5 / CSS3</span></li>
      <li class="deliverable-item"><span>UML</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Développement back-end (PHP)</span></li>
      <li class="deliverable-item"><span>Modélisation de base de données (MySQL)</span></li>
      <li class="deliverable-item"><span>Modélisation conceptuelle (UML)</span></li>
      <li class="deliverable-item"><span>Intégration front-end (CSS)</span></li>
      <li class="deliverable-item"><span>Mise en œuvre d'une architecture MVC</span></li>
      <li class="deliverable-item"><span>Gestion de l'authentification (Sessions, password_hash)</span></li>`,
    gallery: [
      { src: "./assets/images/Gallery_Gamehub1.png", alt: "Aperçu GameHub" },
      { src: "./assets/images/Gallery_Gamehub2.png", alt: "Aperçu GameHub 2" }
    ],
    deliverables: `
      <a href="#" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Code source (à lier)</span>
      </a>`
  },

  "CoreFlow — Module de Gestion Documentaire": {
    pageTitle: "Projet: CoreFlow — Module de Gestion Documentaire",
    banner: "./assets/images/coreflowCover.jpg",
    category: "Développement WEB",
    client: "Projet scolaire — ESIC Malkoff",
    date: "Décembre 2025 – Avril 2026",
    type: "Projet d'équipe — BTS SIO SLAM (E6)",
    objectif: "Concevoir et développer le module de gestion documentaire sécurisé de CoreFlow, une plateforme intranet d'entreprise visant à centraliser la gestion interne des ressources humaines, des congés, des tickets et de la communication organisationnelle. L'objectif de ce module était de permettre aux collaborateurs autorisés d'uploader, de stocker, de consulter et de supprimer des fichiers internes (PDF, images) de manière sécurisée, en conditionnant chaque action au rôle de l'utilisateur connecté.",
    description: "CoreFlow est une plateforme intranet d'entreprise développée en équipe pour centraliser la gestion des congés, tickets, événements et documents internes. J'ai assuré le rôle de développeur full-stack sur le module de gestion documentaire, en binôme, en charge de l'intégralité du pipeline d'ajout et de suppression de fichiers. J'ai maquetté les interfaces sur Figma, développé le formulaire d'upload en Vue.js, construit les routes API REST avec Node.js/Express et intégré Multer pour le stockage physique sécurisé. Le défi principal était la synchronisation BDD/fichiers et la gestion des droits par rôle (Admin/RH), validées par des tests Postman et Jest.",
    outils: `
      <li class="deliverable-item"><span>Node.js / Express.js</span></li>
      <li class="deliverable-item"><span>Vue.js 3</span></li>
      <li class="deliverable-item"><span>Tailwind CSS</span></li>
      <li class="deliverable-item"><span>MySQL / phpMyAdmin</span></li>
      <li class="deliverable-item"><span>Multer</span></li>
      <li class="deliverable-item"><span>Figma</span></li>
      <li class="deliverable-item"><span>Postman</span></li>
      <li class="deliverable-item"><span>Jest</span></li>
      <li class="deliverable-item"><span>Git / GitHub</span></li>
      <li class="deliverable-item"><span>Draw.io / PlantUML</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Conception et modélisation de base de données relationnelle</span></li>
      <li class="deliverable-item"><span>Développement d'une API REST sécurisée</span></li>
      <li class="deliverable-item"><span>Gestion d'uploads de fichiers binaires</span></li>
      <li class="deliverable-item"><span>Développement front-end réactif</span></li>
      <li class="deliverable-item"><span>Contrôle d'accès basé sur les rôles (RBAC)</span></li>
      <li class="deliverable-item"><span>Architecture logicielle MVC</span></li>
      <li class="deliverable-item"><span>Tests d'intégration et unitaires automatisés</span></li>
      <li class="deliverable-item"><span>Maquettage UX/UI et prototypage interactif</span></li>
      <li class="deliverable-item"><span>Modélisation UML</span></li>
      <li class="deliverable-item"><span>Travail en équipe et coordination technique</span></li>`,
    gallery: [
      { src: "./assets/images/CaptureCoreflowFront.png", alt: "CoreFlow — image du front-end formulaire" },
      { src: "./assets/images/Copie de Diagramme de classe gestion doc.drawio.png", alt: "CoreFlow — Aperçu 2" },
      { src: "./assets/images/CaptureCoreflowTest.png", alt: "CoreFlow — Aperçu 3" },
      { src: "./assets/images/CaptureCoreflowScreen2.png", alt: "CoreFlow — Aperçu 4" },
      { src: "./assets/images/diagramme de sequence partie gestion doc.png", alt: "CoreFlow — Aperçu 5" }
    ],
    deliverables: `
      <a href="https://www.figma.com/make/ywKTOn9ssC9PoTfDNT7KYP/CoreFlowGestionDocFrames?fullscreen=1&t=AH3lDJuH4mCRGpbs-1" class="deliverable-item">
        <ion-icon name="logo-figma"></ion-icon>
        <span>Voir la maquette Figma</span>
      </a>
      <a href="https://github.com/2026-BTS-SIO2-ESIC/CoreFlow" class="deliverable-item">
        <ion-icon name="logo-github"></ion-icon>
        <span>Voir le code source</span>
      </a>`
  },

  "XBORDER (Conversion MT103)": {
    pageTitle: "Projet: XBORDER (Stage)",
    banner: "./assets/images/projet_Xborder.png", // Image placeholder
    category: "Développement Logiciel",
    client: "CACIB (Stage)",
    date: "2024-2025",
    type: "Stage Équipe Crossborder – CMS IT",
    objectif: "Développer un module d'automatisation pour transformer des fichiers Excel (.xlsx) contenant des données de paiement en fichiers texte conformes à la norme bancaire internationale SWIFT MT103.",
    description: "Cette mission visait à automatiser la génération de messages de virement internationaux. J'ai suivi un cycle de développement complet : analyse des spécifications, proposition d'un algorithme de mapping, validation, puis développement. J'ai développé en Java le module spécifique à la conversion MT103, en suivant une architecture claire (Modèle, Services, Contrôleur). Ce module a ensuite été intégré à une application globale.",
    outils: `
      <li class="deliverable-item"><span>Java</span></li>
      <li class="deliverable-item"><span>Apache POI</span></li>
      <li class="deliverable-item"><span>Prowide Core (SWIFT)</span></li>
      <li class="deliverable-item"><span>Jackson (JSON)</span></li>
      <li class="deliverable-item"><span>Git / JIRA</span></li>`,
    competences: `
      <li class="deliverable-item"><span>Développement Java (POO)</span></li>
      <li class="deliverable-item"><span>Manipulation de librairies externes</span></li>
      <li class="deliverable-item"><span>Conception d'architecture logicielle</span></li>
      <li class="deliverable-item"><span>Analyse de spécifications techniques (Norme SWIFT)</span></li>
      <li class="deliverable-item"><span>Versionnement (Git) et méthodologie Agile (JIRA)</span></li>`,
    gallery: [
      { src: "./assets/images/CaptureGENERATE.PNG", alt: "Résultat de la génération" },
      { src: "./assets/images/CaptureCode1.PNG", alt: "Extrait de code Java (ExcelReader)" },
      { src: "./assets/images/ScreenCodeRun.PNG", alt: "Terminal d'exécution" }
    ],
    deliverables: `
      <a href="./assets/docs/rapportStage1.pdf" class="deliverable-item" target="_blank">
        <ion-icon name="document-text-outline"></ion-icon>
        <span>Rapport de stage</span>
      </a>`
  }
};

// 2. Sélection des éléments de la page de projet
const projectDetailPage = document.querySelector("[data-page='projet-detail']");
const portfolioPage = document.querySelector("[data-page='portfolio']");
const projectItems = document.querySelectorAll("[data-page='portfolio'] .project-item > a");
const backToPortfolioBtn = document.querySelector("[data-back-btn]");

// Éléments de contenu à mettre à jour (NOUVEAUX IDs)
const detailTitle = document.getElementById("project-detail-title");
const detailBanner = document.getElementById("project-detail-banner");
const detailCategory = document.getElementById("project-detail-category");
const detailClient = document.getElementById("project-detail-client");
const detailDate = document.getElementById("project-detail-date");
const detailType = document.getElementById("project-detail-type"); // J'ai renommé "designer" en "type"

// NOUVELLES SECTIONS
const detailObjectif = document.getElementById("project-detail-objectif");
const detailDescription = document.getElementById("project-detail-description");
const detailOutils = document.getElementById("project-detail-outils");
const detailCompetences = document.getElementById("project-detail-competences");

const detailGallery = document.getElementById("project-detail-gallery");
const detailDeliverables = document.getElementById("project-detail-deliverables");


// 3. Fonction pour mettre à jour la page de détail (MISE À JOUR)
function updateProjectDetails(projectName) {
  
  // Utilise le premier projet comme défaut si non trouvé
  const data = projectData[projectName] || projectData["IA et armement"]; 

  // Remplissage des champs meta
  detailTitle.innerHTML = data.pageTitle;
  detailBanner.src = data.banner;
  detailBanner.alt = data.pageTitle;
  detailCategory.innerHTML = data.category;
  detailClient.innerHTML = data.client;
  detailDate.innerHTML = data.date;
  detailType.innerHTML = data.type; 
  
  // Remplissage des nouvelles sections
  detailObjectif.innerHTML = data.objectif;
  detailDescription.innerHTML = data.description;
  detailOutils.innerHTML = data.outils;
  detailCompetences.innerHTML = data.competences;
  
  // Remplissage des sections complexes (listes)
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
      if ((nav.getAttribute('data-nav-link') || nav.innerHTML.toLowerCase()) === "portfolio") {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});




// 6. Gestion de la Lightbox (Modale Galerie)
// (Cette partie ne change pas)
const galleryModal = document.querySelector("[data-gallery-modal-container]");
const galleryModalCloseBtn = document.querySelector("[data-gallery-modal-close-btn]");
const galleryOverlay = document.querySelector("[data-gallery-overlay]");
const galleryModalImg = document.querySelector("[data-gallery-modal-img]");

if (!galleryModal) console.error("La modale de galerie n'a pas été trouvée");
if (!galleryModalCloseBtn) console.error("Le bouton de fermeture de la galerie n'a pas été trouvé");
if (!galleryOverlay) console.error("L'overlay de la galerie n'a pas été trouvé");
if (!galleryModalImg) console.error("L'image de la modale n'a pas été trouvée");

function openGalleryModal() {
  galleryModal.classList.add("active");
  galleryOverlay.classList.add("active");
}

function closeGalleryModal() {
  galleryModal.classList.remove("active");
  galleryOverlay.classList.remove("active");
}

function addGalleryEventListeners() {
  if (!detailGallery) {
    console.error("La galerie n'a pas été trouvée dans le DOM");
    return;
  }
  
  const galleryImages = detailGallery.querySelectorAll("img");
  
  galleryImages.forEach(img => {
    img.addEventListener("click", function() {
      if (!galleryModalImg) {
        console.error("L'élément modal pour l'image n'a pas été trouvé");
        return;
      }
      galleryModalImg.src = this.src;
      galleryModalImg.alt = this.alt;
      openGalleryModal();
    });
  });
}

galleryModalCloseBtn.addEventListener("click", closeGalleryModal);
galleryOverlay.addEventListener("click", closeGalleryModal);
addGalleryEventListeners();