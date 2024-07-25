# Cogip API Documentation

## Introduction
Welcome to our awesome project! This documentation provides an overview of the project, its components, and how to use it.

## Table of Contents
- Usage
- Configuration
- API Endpoints
- Common Errors
- Contributor
- License

## Usage
Use the http request bellow and don't forget to add a body/json to it if needed.

## Configuration
Explain any configuration settings, environment variables, or options users need to set up.

## API Endpoints
### User/Login API
* NB : seul les admins de niveaux 3 pourrons enregitsrer de nouvaux USER !!!
- `GET /users`: Get a list of users.
- `POST /users`: Create a new user.
- `GET /users/:id`: Get user details by ID.
- `POST/DELETE /users/`: to LogIn/logout

### Companies API
- `GET /companies`: Get a list of products.
- `POST /companies`: Create a new product.
- `PUT /companies/:id`: Update product details.

### Contacts API
- `GET /contacts`: Get a list of products.
- `POST /contacts`: Create a new product.
- `PUT /contacts/:id`: Update product details.

### Invoices API
- `GET /invoices`: Get a list of products.
- `POST /invoices`: Create a new product.
- `PUT /invoices/:id`: Update product details.

## Api table :
### Companies URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- | ------------------- |
|  Dashboard : GET  | { http/debut de l'url ou localhost }/all/dashboard/:limit  |  /  | http://localhost:5000/dashboard/5   | renvoie une liste avec la limite imposer <br> si vous remplacer : limite par 5 vous aurez :<br> 5 compagnies, 5 contacts, 5 factures. |
|   GET   | { http/debut de l'url ou localhost }/companies/all  |  /  |  /  | ici vous récupérez toutes les compagnies . |
|   GET   | { http/debut de l'url ou localhost }/companies/view/:id  |  /  | http://localhost:5000/companies/view/3 | ici vous récupererz la (une seul) compagnie de votre choix en remplacent :id <br> par le id de la compagnie. |
|   POST  | { http/debut de l'url ou localhost }/admin/companie/add  | {<br>"name": "Varshar(50)",<br>"type_id":INT,<br>"country":"VARSHAR(50)",<br>"tva":"VARSHAR(50)"<br>}   | {<br>"name": "Match Sa",<br>"type_id":1,<br>"country":"Belgique",<br>"tva":"BE8888888888"<br>} | Method POST donc il faut envoyer un ficher json quand<br> vous faite la request voir body requested et exemple pour vous aider. |
|   PUT   | { http/debut de l'url ou localhost }/admin/companie/edit/:id | {<br>"name": "Varshar(50)",<br>"type_id":INT,<br>"country":"Varshar(50)",<br>"tva":"Varshar(50)"<br>}   | {<br>"name": "Match Sa",<br>"type_id":1,<br>"country":"Belgique",<br>"tva":"BE8888888888"<br>} | Même chose que celui d'au-dessus donc il faut bien envoyer un body/json et ne pas oublier de remplacer :id dans l'URL par l'id de la compagnie ou vous remplacez les infos. |
| DELETE  | { http/debut de l'url ou localhost }/admin/companie/delete/:id |  /  |  /  | Requête DELETE donc pas de body mais ne pas oublier de faire remplacer :id par l'id de la compagnie. |

### Contacts URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- | ------------------- |
|  Dashboard : GET  | { http/debut de l'url ou localhost }/all/dashboard/:limit |  /  | http://localhost:5000/dashboard/:limit   | renvoie une liste avec la limite imposer <br> si vous remplacer : limite par 5 vous aurez :<br> 5 compagnies, 5 contacts, 5 factures. |
|   GET   | { http/debut de l'url ou localhost }contacts/all |  /  |  /  | ici vous récupérez tous les contacts . |
|   GET   | { http/debut de l'url ou localhost }/contacts/view/:id  |  /  | http://localhost:5000/companies/view/3 | ici vous récuperez le (un seul) contact de votre choix en remplacent :id <br> par le id du contact. |
|   POST  | { http/debut de l'url ou localhost }/admin/contact/add | {<br>"company_id" : INT (should already exist),<br>"name" : "varshar(20)",<br>"phone": "varshar (10)",<br>"email" : "varshar(50)"<br>}   | {<br>"company_id" : 1,<br>"name" : "iliess",<br>"phone" : "0499999999",<br>"email" : "iliessnani2@gmail.com"<br>} | Method POST donc il faut envoyer un ficher json quand<br> vous faite la request voir body requested et exemple pour vous aider. |
|  PATCH  | { http/debut de l'url ou localhost }/admin/contact/edit/:id | {<br>"company_id": INT,<br>"name":"VARSHAR(20)",<br>"phone": "VARSHAR(10)",<br>"email": "VARSHAR(50)"<br>}   | {<br>"company_id" : 1,<br>"name" : "iliess",<br>"phone" : "0499999999",<br>"email" : "iliessnani2@gmail.com"<br>} | Même chose que celui d'au-dessus donc il faut bien envoyer un body/json et ne pas oublier de remplacer :id dans l'URL par l'id du contact ou vous remplacez les infos. |
| DELETE  | { http/debut de l'url ou localhost }/admin/contact/delete/:id |  /  |  /  | Requête DELETE donc pas de body mais ne pas oublier de faire remplacer :id par l'id du contact. |

### Invoices URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- | ------------------- |
|  Dashboard : GET  | { http/debut de l'url ou localhost }/all/dashboard/:limit |  /  | http://localhost:5000/dashboard/5   | renvoie une liste avec la limite imposer <br> si vous remplacer : limite par 5 vous aurez :<br> 5 compagnies, 5 contacts, 5 factures. |
|   GET   | { http/debut de l'url ou localhost }/invoices/all |  /  |  /  | ici vous récupérez toute les factures . |
|   GET   | { http/debut de l'url ou localhost }/invoices/view/:id  |  /  | http://localhost:5000/companies/view/3 | ici vous récuperez la (une seul) facture de votre choix en remplacent :id <br> par le id de la facture. |
|   POST  | { http/debut de l'url ou localhost }/admin/invoice/add | {<br>"compagny_id" : INT <br>} | {<br>"compagny_id" : INT <br>} | Method POST donc il faut envoyer un ficher json quand<br> vous faite la request voir body requested et exemple pour vous aider. |
|  PATCH  | { http/debut de l'url ou localhost }/admin/invoice/edit/:id | {<br>"compagny_id" : INT <br>}  | {<br>"compagny_id" : INT <br>} | Même chose que celui d'au-dessus donc il faut bien envoyer un body/json et ne pas oublier de remplacer :id dans l'URL par l'id de la facture ou vous remplacez les infos. |
| DELETE  | { http/debut de l'url ou localhost }/admin/invoice/delete/:id |  /  |  /  | Requête DELETE donc pas de body mais ne pas oublier de faire remplacer :id par l'id de la facture. |


### User/login/logout URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| --------------- | --------------- | --------------- | --------------- | ------------------- |
|    POST    |    { http/debut de l'url ou localhost }/admin/api/user/add    |   {<br>"username":"Varshar(20)",<br>"password":"Varshar(20)",<br>"firstname":Varshar(20)",<br>"lastname":"Varshar(20)",<br>"email":"varshar(50)",<br>"role":INT<br>}   |    {<br>"username":"iliess",<br>"password":"password123",<br>"firstname":"iliess",<br>"lastname":"abdelmadjid",<br>"email":"iliess@email.com",<br>"role":3<br>}    |   Pour cette requète vous n'êtes pas obliger d'envoyer un body avec toute les infos,<br> les seul infos importante sont le "username" et "password".<br> NB : respectez l'orthographe des mots entre guillemet "role" = "role" != "Role".   |
|    POST   |    { http/debut de l'url ou localhost }/login    |   {<br>"user":"Varshar(20)",<br>"password":"Varshar(20)"<br>}  |    {<br>"user":"iliess",<br>"password":"password123"<br>}    |   Ici, lorsque vous vous connectez (logIn), si le nom d’utilisateur (username) et le mot de passe (password) sont corrects, vous recevrez en retour un jeton (token). Vous devrez ajouter ce dernier à votre URL. Ce jeton servira à déterminer votre niveau d’administration et si vous avez les droits d’exécuter telle ou telle action.    |
|   GET   |    http://localhost:5000/admin/{key}/user/view    |   /  |    http://localhost:5000/admin/api/user/view    |   ici ça vous retourneras tout les users leurs infos ainsi que leur "niveau d'admin"    |
<!-- |   (methode)     |    (http request)    |   (body requested)  |    (exemple)    |   (explication)    | -->

### Common Errors

| Status Code               | Description                                                           | Response                                                          |
|---------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------|
| 400 Bad Request           | The server could not understand the request due to invalid syntax.    | `json { "status": "error", "message": "Bad Request" }`            |
| 404 Not Found             | The server can not find the requested resource.                       | `json { "status": "error", "message": "Not Found" }`              |
| 500 Internal Server Error | The server has encountered a situation it doesn't know how to handle. | `json { "status": "error", "message": "Internal Server Error" }`  |

## Contributor
- Ludovic /Github : https://github.com/ludoviclacroix82
- Adrien.C /Github : https://github.com/AdCa09
- Iliess /Github : https://github.com/Iliess-A

## License
No license project devloped to improve our backend skills.
