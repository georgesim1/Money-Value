
# Cahier des Charges
Projet : API de conversion de devises pour MoneyValue

# 1. Analyse client
MoneyValue est une entreprise qui a besoin d'une API publique pour la conversion des devises et d'une administration privée pour gérer les données de cette API. Ces outils permettront une gestion facile des conversions de devises et un suivi des requêtes effectuées pour chaque paire de conversion.

# 2. Choix technologiques
Back-end : Nous utiliserons Laravel, un framework PHP robuste et fiable qui intègre des fonctionnalités de validation de formulaire, de migration de base de données et d'ORM Eloquent.
Front-end : Vue.js sera utilisé pour l'interface utilisateur de l'administration. Il s'agit d'un framework front-end réactif qui offre une excellente intégration avec Laravel.

# 3. Evaluation du temps de travail

Configuration du projet | 0.5
Authentification | 1
Administration (visualisation des paires) | 1
Administration (gestion des paires) | 1
Administration (statistiques) | 1
API (vérification de la disponibilité) | 1
API (récupération des paires) | 1
API (conversion de devises) | 1
Documentation | 0.5
Total | 7

# 4. Liste fonctionnelle
Administration privée :
Authentification des administrateurs
Affichage de la liste des paires de conversion
Ajout, modification et suppression d'une paire de conversion
Affichage du nombre de requêtes effectuées pour chaque paire
API REST :
Vérification de l'état du service
Récupération de la liste des paires de conversion
Conversion d'une quantité de devise suivant une paire existante

#  5. Recettage
Le recettage sera effectué à la fin de chaque tâche et comprendra des tests manuels et automatiques pour vérifier le bon fonctionnement de chaque fonctionnalité. Tout problème ou limitation sera noté et abordé.

# 6. Diagramme de la base de données
Une représentation schématique de la base de données sera fournie, montrant toutes les tables, leurs relations et les champs clés.

# 7. Documentation de l’API
GET /api/status : Vérifie si le service est fonctionnel. Retourne un message de statut.
GET /api/pairs : Retourne la liste des paires de conversion.
POST /api/convert : Convertit une quantité d'une devise en une autre. Les données retournées comprennent la quantité d'origine, la devise d'origine, la devise cible et la quantité convertie.

#  8. Adresse Github
Le projet sera hébergé à l'adresse suivante : https://github.com/georgesim1/Projet-3

# 9. Livrables
L'archive finale du projet contiendra le code source complet (à l'exception des dossiers vendor et node_modules), le diagramme de la base de données, la documentation de l'API et le cahier des charges.