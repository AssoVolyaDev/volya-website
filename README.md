Deux projets Github : 
- volya-website pour le code du site internet
- volya-firebase pour tout ce qui touche aux serveurs Firebase (dev et prod) : VolyaDev et Volya.

volya-website :
Le code du site internet
- Utiliser yarn et pas npm
- Le "framework" : reactjs
- Le design : bootstrap
- Les icônes : flaticon (utilisation de l'abonnement de shoesnotincluded)
- Les traductions (i18n : fichiers à traduire dans public/locales/<langage>
- L'hébergement : netlify (celui de shoesnotincluded - pas de possibilité d'ajouter d'autres membres sur la version gratuite - TODO : créer un compte Netlify propre à Volya)
- Les commandes : cf scripts de package.json
- Pour lancer le site en local : "yarn start:local" (utilisation du Firebase de dev VolyaDev) ou "yarn start" (utilisation du Firebase de prod Volya)
ATTENTION un push sur master met à jour le site en prod, d'où l'intérêt de la branche dev

volya-firebase :
Tout ce qui touche aux serveurs Firebase (dev et prod) : VolyaDev et Volya.
- Utiliser yarn et pas npm
- firestore.rules : les règles d'accès aux données des serveurs (pour l'instant identique en dev et prod)
- pas de règles pour les documents (pour l'instant open bar en lecture mais pas d'accès en écriture)
- Firestore : sous-projet à part pour les scripts Firestore - écriture de données comme import-teamMembers.js ou des scripts d'extraction des données de contact (TODO)
- functions : les webservices que le site peut avoir besoin d'appeler comme une fonction d'insertion des données de contact dans firestore (pas d'écriture directe : une fonction protège mieux les données)
ATTENTION : utiliser yarn:useDev ou yarn:useProd avant d'exporter une fonction pour impacter le bon serveur.
AUSSI : il faut utiliser la version 14.16.0 de node pour les functions mais c'est mieux d'utiliser une version récente pour le reste (j'utilise la 16.14.0 perso) donc l'installation de nvm (pour pouvoir changer facilement de version) est nécessaire
IMPORTANT : pas de modification à la main dans Firebase sans répercuter les modifs sur Github ;)
