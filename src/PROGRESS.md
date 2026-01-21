# Journal de Progression - Projet Portfolio

Ce document retrace les étapes de création du site, les prompts utilisés (simulés ou réels) et les résultats obtenus.

## Phase 1 : Structure et Design de base

### Étape 1.1 : Structure HTML
**Prompt :**
> "Génère une structure HTML5 sémantique pour un portfolio personnel. Inclure les sections : Header (avec nav), À propos, Compétences, Projets, Contact et Footer. Utilise des IDs appropriés pour la navigation."

**Résultat :**
*Création du fichier `index.html` avec la structure demandée.*

### Étape 1.2 : CSS Moderne
**Prompt :**
> "Crée une feuille de style CSS moderne. Utilise des variables CSS pour les couleurs (palette sombre/clair), Flexbox et Grid pour la mise en page. Ajoute une typographie propre (Inter ou Roboto via Google Fonts)."

**Résultat :**
*Création du fichier `style.css`.*

## Phase 2 : Interactivité

### Étape 2.1 : Mode Sombre/Clair
**Prompt :**
> "Ajoute une fonctionnalité de bascule (toggle) pour le mode sombre/clair en JavaScript. Le choix de l'utilisateur doit être sauvegardé dans le localStorage. Change l'attribut data-theme sur le body ou html."

**Résultat :**
*Implémentation dans `script.js` et ajout du bouton dans le HTML.*

### Étape 2.2 : Carrousel de Projets
**Prompt :**
> "Transforme la grille de projets en un carrousel simple. Ajoute des boutons 'Précédent' et 'Suivant' pour faire défiler les cartes horizontalement. Gère le défilement fluide."

**Résultat :**
*Modification du HTML pour inclure les boutons et script JS pour le défilement.*

### Étape 2.3 : Formulaire de Contact
**Prompt :**
> "Rends le formulaire de contact fonctionnel : empêche l'envoi par défaut, affiche un message de succès (alert) et vide les champs après soumission."

**Résultat :**
*Ajout de l'écouteur d'événement 'submit' dans `script.js`.*

## Phase 3 : Fonctionnalités Avancées

### Étape 3.1 : Filtrage des Projets
**Prompt :**
> "Ajoute un système de filtrage des projets par catégorie. Lorsque l'utilisateur clique sur un bouton de filtre (Tous, Web, Design), seuls les projets correspondants doivent s'afficher (display: block/none). Gère la classe 'active' sur les boutons."

**Résultat :**
*Implémentation de la logique de filtrage dans `script.js`.*

### Étape 3.2 : Compteur de Visites
**Prompt :**
> "Implémente un compteur de visites simple qui s'incrémente à chaque chargement de la page et stocke la valeur dans le localStorage. Affiche le nombre de visites dans le footer."

**Résultat :**
*Ajout du script et d'un élément HTML dans le footer.*

### Étape 3.3 : Validation de Formulaire
**Prompt :**
> "Ajoute une validation en temps réel pour le formulaire de contact. Si un champ est vide ou invalide (email), affiche un message d'erreur rouge sous le champ et colore la bordure en rouge. Le bouton d'envoi doit être désactivé tant que le formulaire n'est pas valide."

**Résultat :**
*Implémentation de la validation JS et styles CSS associés.*

### Étape 3.4 : Menu Responsive
**Prompt :**
> "Rends le menu de navigation responsive. Sur mobile, le menu doit être caché par défaut et s'ouvrir/se fermer lors du clic sur le bouton hamburger. Ajoute une animation de transition."

**Résultat :**
*Ajout de la logique JS pour le menu burger et styles CSS pour l'affichage mobile.*

## Phase 4 : Optimisation et Livraison

### Étape 4.1 : Optimisation et Nettoyage
**Prompt :**
> "Optimise le code CSS et JS en supprimant les commentaires inutiles et en organisant les règles. Ajoute des commentaires explicatifs pour les parties complexes."

**Résultat :**
*Revue du code, ajout de commentaires et vérification de la structure.*

## Phase 5 : Améliorations Visuelles (Bonus)

### Étape 5.1 : Animation "Machine à écrire"
**Prompt :**
> "Ajoute un effet de machine à écrire sur le texte 'Développeur Web' dans le Hero. Utilise CSS keyframes pour l'animation de frappe et le curseur clignotant."

**Résultat :**
*Ajout des styles CSS pour l'effet typing.*

### Étape 5.2 : Navbar Glassmorphism
**Prompt :**
> "Applique un effet de glassmorphism à la barre de navigation : fond semi-transparent avec flou d'arrière-plan (backdrop-filter)."

**Résultat :**
*Mise à jour du CSS du header.*

### Étape 5.3 : Effet Tilt 3D
**Prompt :**
> "Ajoute un effet de basculement 3D (tilt) sur les cartes de projets au survol de la souris. Utilise JavaScript pour calculer la rotation en fonction de la position de la souris."

**Résultat :**
*Ajout du script JS pour le tilt et CSS pour la perspective.*

### Étape 5.4 : Apparition en Cascade
**Prompt :**
> "Anime l'apparition des compétences (skill-cards) avec un effet de cascade (staggered). Chaque carte doit apparaître avec un léger délai par rapport à la précédente."

**Résultat :**
*Modification du JS pour ajouter des délais dynamiques.*

### Étape 5.5 : Arrière-plan Étoilé
**Prompt :**
> "Crée un arrière-plan animé avec des étoiles (particules) en utilisant un Canvas HTML5. Les étoiles doivent scintiller et se déplacer lentement. L'effet doit être subtil et s'adapter au thème (plus visible en sombre)."

**Résultat :**
*Implémentation d'un système de particules dans `script.js` et ajout du canvas dans le HTML.*

### Étape 5.6 : Étoiles Filantes et Jupiter
**Prompt :**
> "Ajoute des étoiles filantes qui traversent l'écran aléatoirement et une planète Jupiter stylisée qui flotte lentement en arrière-plan. Utilise le même Canvas."

**Résultat :**
*Ajout des classes `ShootingStar` et `Planet` dans `script.js`.*

### Étape 5.7 : Jupiter Réaliste
**Prompt :**
> "Améliore le rendu de Jupiter pour le rendre plus réaliste. Utilise des dégradés radiaux pour l'effet sphérique, des courbes pour les bandes gazeuses au lieu de rectangles, et ajoute la Grande Tache Rouge."

**Résultat :**
*Refonte de la méthode `draw()` de la classe `Planet`.*

### Étape 5.8 : Texte Réfléchissant
**Prompt :**
> "Ajoute une animation de reflet brillant (shine) sur les titres principaux (h1, h2). Utilise un dégradé linéaire qui se déplace horizontalement avec `background-clip: text` pour simuler une lumière qui passe sur le texte."

**Résultat :**
*Ajout de la classe `.shine` et des keyframes CSS associés.*

### Étape 6 : Contenu Projets & Modales
**Prompt :**
> "Intègre 4 projets spécifiques (E-commerce Go, Power'4, Landing Page, Projet RED) et crée un système de fenêtre modale (pop-up) pour afficher les détails complets de chaque projet au clic."

**Résultat :**
*Mise à jour du HTML avec les nouveaux projets, ajout du CSS pour la modale, et JS pour la gestion de l'ouverture/fermeture.*

### Étape 7 : Refonte Premium & Détails
**Prompt :**
> "Améliore le design des cartes projets et des modales pour un rendu 'Premium'. Ajoute TOUS les détails techniques fournis (Règles, Challenges, Fonctionnalités) dans les descriptions."

**Résultat :**
*Expansion massive du contenu dans `script.js` et refonte CSS complète de la section projets.*

### Étape 8 : Migration vers Pages Dédiées
**Prompt :**
> "Remplace le système de modales par des pages HTML distinctes pour chaque projet. Quand on clique sur un projet, on doit être redirigé vers sa page dédiée."

**Résultat :**
*Création de 4 fichiers HTML (`ecommerce.html`, `power4.html`, `landing.html`, `red.html`) et mise à jour des liens dans `index.html`.*

### Étape 9 : Améliorations UX
**Prompt :**
> "C'est galère d'appuyer sur le bouton, rends toute la carte cliquable. Et sur les pages projets, le texte est caché par le header en haut."

**Résultat :**
*Ajout du pattern 'Stretched Link' CSS pour rendre les cartes entièrement cliquables. Augmentation du padding-top sur les pages projets.*

### Étape 10 : Amélioration Visuelle du Header
**Prompt :**
> "Rends la barre en haut plus belle avec des visuels stp."

**Résultat :**
*Intégration de FontAwesome pour ajouter des icônes à la navigation. Redesign du logo et ajout d'effets de survol modernes.*

### Étape 11 : Exemple Visuel E-commerce
**Prompt :**
> "Pour le projet Site E-commerce Dynamique, ajoutes un exemple visuel."

**Résultat :**
*Génération d'une image de mockup e-commerce et intégration dans la page dédiée.*

### Étape 12 : Correction Affichage Image
**Prompt :**
> "L'image est mal mise, on ne voit pas tout. Modifie ça pour qu'elle soit bien intégrée."

**Résultat :**
*Ajustement CSS pour que l'image s'affiche en entier (hauteur automatique) et s'intègre harmonieusement.*

### Étape 13 : Redesign Mise en Page
**Prompt :**
> "Je veux que l'image soit intégrée à côté du texte, que ce soit beau visuellement."

**Résultat :**
*Refonte de la page `ecommerce.html` avec une mise en page "Split" (Image à gauche, Texte à droite) pour un rendu plus moderne.*

### Étape 14 : Mise à jour Power'4 Web
**Prompt :**
> "Parfait, tu peux me recréer une image et me faire exactement la même chose pour Power'4 Web."

**Résultat :**
*Génération d'un mockup pour le jeu Puissance 4 et application du layout "Split" sur la page `power4.html`.*

### Étape 15 : Mise à jour Landing Page
**Prompt :**
> "Parfait, tu peux me recréer une image et me faire exactement la même chose pour Landing Page Produit."

**Résultat :**
*Génération d'un mockup de landing page produit et application du layout "Split" sur la page `landing.html`.*

### Étape 16 : Mise à jour Projet RED
**Prompt :**
> "Parfait, tu peux me recréer une image et me faire exactement la même chose pour Projet RED."

**Résultat :**
*Génération d'un mockup pour le RPG CLI et application du layout "Split" sur la page `red.html`.*

### Étape 17 : Modernisation Typographie
**Prompt :**
> "Tu peux changer la police de 'Bonjour, je suis Développeur Web' pour quelque chose de plus moderne."

**Résultat :**
*Adoption de la police 'Outfit' pour le titre principal, apportant une touche géométrique et tech plus affirmée.*

### Étape 18 : Effet Contour (Outline)
**Prompt :**
> "J'aime pas trop, tu peux refaire mais avec le style 𝕡𝕠𝕝𝕚𝕔𝕖 𝕕𝕖𝕔𝕣𝕚𝕥𝕦𝕣𝕖."

**Résultat :**
*Application d'un effet "Outline" (texte transparent avec contour) sur le titre principal pour correspondre au style "Double-Struck" demandé.*

### Étape 19 : Effet Shine Global
**Prompt :**
> "Tu peux faire l'effet réfléchissant sur toutes les écritures."

**Résultat :**
*Extension de l'animation de reflet (Shine) à tous les titres, liens de navigation et boutons du site pour une esthétique uniforme et dynamique.*

### Étape 20 : Unification des Polices
**Prompt :**
> "Est-ce que le 'Bonjour, je suis' peut être de la même police que 'Développeur Web' ?"

**Résultat :**
*Harmonisation de l'espacement des lettres (letter-spacing) entre le texte statique et le texte animé pour assurer une cohérence visuelle parfaite, donnant l'impression d'une police unique.*

### Étape 21 : Correction Unification Polices
**Prompt :**
> "Rien n'a changé."

**Résultat :**
*Suppression des règles CSS en doublon et définition explicite de la famille et de la graisse de la police sur l'animation de frappe pour forcer le navigateur à un rendu identique.*

### Étape 22 : Étoiles Filantes "Brûlantes"
**Prompt :**
> "Tu peux mettre les étoiles filantes plus grosses avec un dégradé du bleu au rouge comme si l'étoile filante était brûlante."

**Résultat :**
*Modification du rendu Canvas pour créer des étoiles filantes plus larges avec un dégradé de couleur (Bleu -> Jaune -> Rouge) simulant une rentrée atmosphérique intense.*

### Étape 23 : Effet Glow sur les Bords
**Prompt :**
> "Est-ce que tu peux faire en sorte que quand le curseur s'approche du bord de la page, les bords de la page soient réfléchissants que à l'endroit où il y a le curseur ?"

**Résultat :**
*Implémentation de bordures lumineuses dynamiques qui apparaissent et suivent le curseur lorsque celui-ci s'approche des extrémités de l'écran, créant un effet de réflexion localisé.*

### Étape 24 : Correction Finale Police
**Prompt :**
> "C'est bien mais je ne comprends pas pourquoi le 'Bonjour, je suis' n'est pas de la même police que 'Développeur Web'."

**Résultat :**
*Application de l'effet de contour (outline) manquant sur le texte animé et forçage de toutes les propriétés de police pour garantir une identité visuelle stricte entre les deux parties du titre.*

### Étape 25 : Harmonisation Totale
**Prompt :**
> "Rien n'a changé."

**Résultat :**
*Restructuration du HTML pour traiter le texte statique et le texte animé exactement de la même manière (via des spans et des classes partagées), éliminant toute différence de rendu par le navigateur.*

### Étape 26 : Dégradé Bleu
**Prompt :**
> "Bon ça marche pas mais à la place fais un dégradé bleu que sur le 'Bonjour, je suis'."

**Résultat :**
*Application d'un dégradé linéaire bleu sur le texte statique, en supprimant l'effet de contour pour créer un contraste marqué avec le texte animé.*

### Étape 27 : Suppression Twitter
**Prompt :**
> "Tout en bas de la page tu pourrais enlever le bouton twitter."

**Résultat :**
*Suppression du lien vers Twitter dans le pied de page (footer) de la page d'accueil et vérification de son absence sur les autres pages.*

### Étape 28 : Lien GitHub
**Prompt :**
> "Tu peux faire en sorte que quand on clique sur le bouton github ça me dirige vers mon github qui est gabpr278."

**Résultat :**
*Mise à jour du lien GitHub dans le pied de page pour pointer vers le profil utilisateur `https://github.com/gabpr278`.*

### Étape 29 : Plus de Planètes
**Prompt :**
> "Tu peux faire plus de planètes en arrière-plan stp."

**Résultat :**
*Ajout de deux nouvelles planètes (une géante de glace bleue et une planète rouge lointaine) en plus de la planète existante, enrichissant l'arrière-plan spatial.*

### Étape 30 : Refonte Layout
**Prompt :**
> "Tu peux mettre le bouton mode sombre sur le côté de la page et mettre les projets sous forme de carte."

**Résultat :**
*Déplacement du bouton de thème en position fixe sur le côté droit et transformation du carrousel de projets en une grille responsive de cartes pour une meilleure visibilité.*

### Étape 31 : Liens Sociaux Contact
**Prompt :**
> "Tu peux monter le bouton github et linkedin au dessus nom email message et mettre leur logo."

**Résultat :**
*Déplacement des liens GitHub et LinkedIn (avec ajout de leurs logos FontAwesome) juste au-dessus du formulaire de contact, sous forme de boutons stylisés.*

### Étape 32 : Storytelling
**Prompt :**
> "Dans la catégorie à propos tu peux rajouter du story telling une histoire courte comme quoi je suis passionné d'informatique depuis le collège pas plus long que 4 lignes."

**Résultat :**
*Ajout d'un paragraphe narratif dans la section "À propos" évoquant la passion pour l'informatique née au collège et l'évolution vers le développement web.*

### Étape 33 : Portfolio Unique
**Prompt :**
> "Fais moi un seul fichier portfolio."

**Résultat :**
*Fusion de tout le code (HTML, CSS, JS) en un seul fichier `portfolio.html`. Les pages de projets séparées ont été réintégrées sous forme de fenêtres modales (pop-ups) pour que tout soit accessible depuis une seule page, sans rechargement.*

---
*Projet terminé.*
