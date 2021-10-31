# OpenClassRoom Projet 7
> Projet de formation développeur web chez OpenClassroom :

## Contexte du projet :

Projet pour le compte de **_Groupomania_**
Le projet consiste en la création du MVP d'un réseau social d'entreprise interne.  

Le projet est composé d'un front-end développé avec le framework VueJs, ainsi
que d'un back-end développé avec NodeJS et Express.  

---
## Stack technique :

Le projet étant composé de deux sous-projets, ici seront détaillés la stack de chaque composant  

### Frontend
L'application web a été développée en Javascript avec le framework VueJs.  
Les différents packages utilisés sont :
- fontawesome
- tinymce/tinymce-vue
- axios
- core-js
- tinymce-vuee
- vue
- vue-router
- vuex

---
### Backend
L'API créée a été dévelopée en Javascript avec Node en varsion `14.17.1`  
Elle utilise une base de données MySQL tournant avec Docker  
les différents packages utilisés sont :
- bcrypt
- body-parser
- dotenv
- express
- express-validator
- helmet
- jsonwebtoken
- Sequelize

---

## Lancer le projet :

Pour lancer et démarrer le projet :
- Dans le dossier Backend :
  - se déplacer dans le dossier avec `cd backend`
  - copier le fichier `.env.example` vers `.env`
  - renseigner les différentes valeurs dans le fichier `.env` créé
  - installer les dépendances avec : `npm install`
  - lancer la base de données avec : `docker-compose up`
  - lancer le serveur avec : `nodemon server`

- Dans le dossier Frontend :
  - se déplacer dans le dossier avec : `cd ../frontend`
  - installer les dépendances avec : `npm install`
  - lancer le serveur avec : `npm run serve`


## Création d'un compte administrateur

La création d'un administrateur doit se faire manuellement en base de données après la création d'un utilisateur standard, en modifiant sa valeur `isAdmin` à `1`  
Des commandes d'administration sont à prévoir dans un futur proche.  

## Enregistrer un modérateur

Seul un compte administrateur peut enregistrer des modérateurs.  
Pour cela une requête `PUT` doit être effectuée sur `/api/auth/admin/<userId>/setMod`  
Avec `<userId>` l'id de l'utilisateur devant recevoir les droits de modération  