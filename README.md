SocialMediaReact -- React app consuming Express API.
=====================================

Installation
============

```
install and run Express API.
```
```
install and run React app.
```

Your server is now running on http://localhost:3000/
Your app is now running on http://localhost:8080/

Please visit :

Documentation
============

* Utilisation du CLI d'ExpressJS pour créer la base et la structure de notre API Node.JS (see: http://expressjs.com/fr/starter/installing.html)
* Je me suis inspiré des premières routes créées par Express pour ajouter les miennes.
* Ajout dans /bin d'un fichier utilitaire db.js permettant la connexion à la bdd MySQL.
* Utilisation de l'utilitaire dans le fichier app.js (Connexion à la base)
* Création des routes pour la table `users` en utilisant des requêtes préparées et en récupèrant la connexion à la bdd grâce à db.js
* Création des routes pour la table `posts`
* Ajout de notre fichier de route posts.js à notre point d'entré app.js
* Pour l'explication suivante, nous prendrons `users` comme exemple sachant que la base de nos route est identique pour `users` comme pour `posts`, les diffèrences seront expliquées par la suite. Chaque route dispose de deux methodes GET (La première permettant de récupèrer une liste des users, la seconde un user grâce à l'id passé en paramètres de la route), d'une methode POST afin de créer un user, d'une méthode PUT afin de modifier un user grâce à son id et d'une methode delete afin de supprimer un user grâce à son id.

* Utilisation du CLI de React pour créer la base et la structure de notre projet (see: https://github.com/facebook/create-react-app)
* Modification de l'architecture et de la configuration Webpack afin d'utiliser SASS.
* Installation et importation de la librairie graphique Semantic UI pour React (see: https://react.semantic-ui.com)

