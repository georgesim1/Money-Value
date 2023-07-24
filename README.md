# MoneyValue - Conversion de monnaie
Bienvenue sur le projet MoneyValue - une plateforme de conversion de devises développée pour les développeurs.

# Description du projet
MoneyValue est une plateforme de conversion de devises conçue pour fournir un service public et gratuit qui fournit des données sur les conversions de devises les plus demandées. L'objectif du projet est de développer une API REST qui peut être utilisée par des développeurs externes pour convertir une devise en une autre.

En plus de l'API, une interface d'administration sera également développée pour gérer les devises disponibles pour la conversion.

# Prérequis
PHP >= 7.3
MySQL >= 5.7
Composer
Node.js et npm
Laravel Framework
Vue.js
Développement
L'API sera développée en utilisant le framework Laravel et la base de données MySQL. L'administration sera développée côté client en utilisant le framework Vue.js.

# Contraintes de développement
L'anglais doit être utilisé pour les champs et les variables.
Utilisez le nommage en camelCase / PascalCase pour le nommage des fonctions, des variables et des noms de classes.
Les méthodes et les propriétés doivent toujours être commentées.
Utilisez le contrôleur de ressources de Laravel pour le CRUD de ressource.
Utilisez le service de validation de Laravel pour la gestion des formulaires.
Les données doivent être récupérées/traitées dans le code à l'aide du composant Eloquent de Laravel.
Utilisez github pour versionner votre code.
Mettez en place des migrations et des seeders pour la base de données.
Installation
Clonez le dépôt dans votre espace de travail local et naviguez jusqu'au dossier du projet.

<code>git clone https://github.com/your_username/MoneyValue.git </code>
<code>cd MoneyValue </code>
Installez les dépendances avec Composer et npm.

<code>composer install</code>
<code>npm install </code>
Copiez le fichier .env.example en .env et modifiez-le pour correspondre à votre configuration de base de données.

<code>cp .env.example .env</code>
Générez une nouvelle clé d'application.

<code>php artisan key:generate</code>
Exécutez les migrations pour créer les tables dans votre base de données.

<code>php artisan migrate</code>
Exécutez les seeders pour remplir les tables avec des données initiales.

<code>php artisan db:seed</code>
Utilisation
Pour lancer le serveur de développement, exécutez :

<code>php artisan serve</code>
Ouvrez votre navigateur et accédez à http://localhost:8000.

Pour lancer le serveur Vue.js, exécutez :

<code>npm run serve</code>
Ouvrez votre navigateur et accédez à http://localhost:8080.

# Documentation API
La documentation pour l'API est disponible à /api/documentation.

# Contribution
Les contributions sont les bienvenues ! Veuillez consulter le fichier CONTRIBUTING.md pour plus de détails.

# Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE.md pour plus de détails.