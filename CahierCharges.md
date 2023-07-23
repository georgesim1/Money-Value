# Analyse client :

MoneyValue est une startup dans le domaine de la finance qui souhaite développer une plateforme de conversion monétaire. L'objectif est de fournir un service public et gratuit permettant d'acquérir des données sur les conversions les plus demandées.

# Choix technologiques :

Administration (frontend) : Utilisation de Vue.js pour créer une interface utilisateur réactive et conviviale.
API (backend) : Utilisation de Laravel pour la création de l'API REST, la gestion des requêtes et des données.

# Fonctionnalité | Nombre de jours

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

# Liste fonctionnelle :

Administration :
Authentification de l'administrateur
Visualisation des paires de conversion
Ajout, modification et suppression de paires de conversion
Visualisation des statistiques de chaque paire

API :
Vérification de la disponibilité du service
Récupération de la liste des paires de conversion
Conversion de devises en utilisant une paire de conversion existante

# Fonctionnalité | Opérationnelle

Authentification | Oui
Visualisation des paires de conversion | Oui
Gestion des paires de conversion | Oui
Statistiques des paires | Oui
Vérification de la disponibilité de l'API | Oui
Récupération des paires de conversion | Oui
Conversion de devises | Oui

# Documentation de l'API :

URL de l'API REST :
GET /api/status : Vérifie si le service est fonctionnel.
GET /api/pairs : Récupère la liste des paires de conversion supportées.
POST /api/convert : Convertit une quantité de devise en utilisant une paire de conversion existante.

# Fonctionnalités :

/api/status : Retourne un message "Service is up and running" si le service est opérationnel.
/api/pairs : Retourne un tableau des paires de conversion prises en charge avec leurs taux de conversion.
/api/convert : Effectue la conversion de devise en utilisant les paramètres de la paire de conversion et renvoie le montant converti. En cas d'erreur, un message approprié est renvoyé.