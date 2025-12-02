# Tableau de Bord ATQSG

Ce projet est une application web de tableau de bord destinée à la gestion et au suivi des activités du **Tennis Club Quincieux Saint-Germain (ATQSG)**. Il permet de visualiser les indicateurs clés de performance (KPI), de suivre les adhérents, le budget, et de gérer les projets et tâches du club.

## 🚀 Fonctionnalités

L'application propose plusieurs onglets pour une gestion complète :

*   **📊 Dashboard** : Vue d'ensemble avec les KPI principaux (nombre d'adhérents, école de tennis) et progression vers les objectifs pluriannuels.
*   **👥 Adhérents** : Tableaux détaillés de l'évolution du nombre d'adhérents par saison, par commune et par catégorie (adultes, enfants, cours, etc.).
*   **💰 Budget** : Suivi visuel des recettes (adhésions, locations, stages, tournois) par rapport aux objectifs budgétaires.
*   **🚀 Projets** : Planification pluriannuelle des projets du club (2026-2028) avec échéances, budgets et statuts.
*   **✅ To Do** : Liste de tâches interactive classée par mois.
    *   Cocher les tâches réalisées (sauvegarde locale).
    *   Détails des actions via des fenêtres modales.
*   **🎨 Personnalisation** : Bouton de changement de thème (Clair / Sombre) persistant.
*   **🔒 Authentification** : Système de login simple pour sécuriser l'accès au tableau de bord.

## 🛠️ Technologies Utilisées

*   **HTML5** : Structure sémantique de l'application.
*   **CSS3** : Mise en page et styles (Grid, Flexbox), avec gestion de thèmes (`style.css`, `style2.css`).
*   **JavaScript (Vanilla)** : Logique de l'application, gestion du DOM, et persistance des données via `localStorage` et `sessionStorage`.

## 📂 Structure du Projet

*   `Index.html` : Page principale contenant le tableau de bord et tous les onglets.
*   `login.html` : Page de connexion.
*   `script.js` : Contient la logique principale (gestion des onglets, modales, tâches, thème).
*   `login.js` : Gestion de l'authentification.
*   `credentials.js` : Fichier de configuration des identifiants (non inclus ou à configurer).
*   `style.css` : Feuille de style principale (Thème par défaut).
*   `style2.css` : Feuille de style alternative (Thème secondaire).

## 📦 Installation et Utilisation

1.  Clonez ce dépôt sur votre machine locale.
2.  Assurez-vous d'avoir le fichier `credentials.js` avec les bons identifiants (ou créez-en un avec un objet `CREDENTIALS`).
3.  Ouvrez le fichier `Index.html` dans votre navigateur web moderne préféré.
4.  Connectez-vous pour accéder au tableau de bord.

## 💾 Persistance des Données

*   L'état de connexion est conservé pour la session (`sessionStorage`).
*   Le choix du thème et l'état des tâches (To Do) sont sauvegardés dans le navigateur (`localStorage`), permettant de retrouver sa configuration lors de la prochaine visite.
