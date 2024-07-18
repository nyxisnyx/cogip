# My Awesome Project Documentation

## Introduction
Welcome to our awesome project! This documentation provides an overview of the project, its components, and how to use it.

## Table of Contents
- Usage
- Configuration
- API Endpoints
- Common Errors
- Contributing
- License

## Usage
Describe how users can use your project. Include examples, screenshots, or code snippets.

## Configuration
Explain any configuration settings, environment variables, or options users need to set up.

## API Endpoints
### User API
- `GET /users`: Get a list of users.
- `POST /users`: Create a new user.
- `GET /users/:id`: Get user details by ID.
- ...

### Companies API
- `GET /products`: Get a list of products.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update product details.

### Contacts API
- `GET /products`: Get a list of products.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update product details.

### Invoices API
- `GET /products`: Get a list of products.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update product details.

## Api table :
### Companies URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- | ------------------- |
|  Dashboard : GET  | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5 |  /  | http://localhost:5000/dashboard/:limit   | renvoie une liste avec la limite imposer <br> si vous remplacer : limite par 5 vous aurez :<br> 5 compagnies, 5 contacts, 5 factures. |
|   GET   | http://localhost:5000/companies/all <br> http://cogipbecode.vulturi.ro/companies/all |  /  |  /  | ici vous récupérez toutes les compagnies . |
|   GET   | http://localhost:5000/companies/view/:id <br> http://cogipbecode.vulturi.ro/view/:id |  /  | http://localhost:5000/companies/view/3 | ici vous récupererz la (une seul) compagnie de votre choix en remplacent :id <br> par le id de la compagnie. |
|   POST  | http://localhost:5000/admin/companie/add <br> http://cogipbecode.vulturi.ro/admin/companie/add | {<br>"name": "Varshar(50)",<br>"type_id":INT,<br>"country":"VARSHAR(50)",<br>"tva":"VARSHAR(50)"<br>}   | {<br>"name": "Match Sa",<br>"type_id":1,<br>"country":"Belgique",<br>"tva":"BE8888888888"<br>} | Method POST donc il faut envoyer un ficher json quand<br> vous faite la request voir body requested et exemple pour vous aider. |
|   PUT   | http://localhost:5000/admin/companie/edit/:id <br> http://cogipbecode.vulturi.ro/admin/companie/edit/:id | {<br>"name": "Varshar(50)",<br>"type_id":INT,<br>"country":"Varshar(50)",<br>"tva":"Varshar(50)"<br>}   | {<br>"name": "Match Sa",<br>"type_id":1,<br>"country":"Belgique",<br>"tva":"BE8888888888"<br>} | Même chose que celui d'au-dessus donc il faut bien envoyer un body/json et ne pas oublier de remplacer :id dans l'URL par l'id de la compagnie ou vous remplacez les infos. |
| DELETE  | http://localhost:5000/admin/companie/delete/:id <br> http://cogipbecode.vulturi.ro/admin/companie/delete/:id |  /  |  /  | Requête DELETE donc pas de body mais ne pas oublier de faire remplacer :id par l'id de la compagnie. |

### Contacts URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- | ------------------- |
|  Dashboard : GET  | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5 |  /  | http://localhost:5000/dashboard/:limit   | renvoie une liste avec la limite imposer <br> si vous remplacer : limite par 5 vous aurez :<br> 5 compagnies, 5 contacts, 5 factures. |
|   GET   | http://localhost:5000/contacts/all <br> http://cogipbecode.vulturi.ro/contacts/all |  /  |  /  | ici vous récupérez tous les contacts . |
|   GET   | http://localhost:5000/contacts/view/:id <br> http://cogipbecode.vulturi.ro/contacts/view/:id |  /  | http://localhost:5000/companies/view/3 | ici vous récuperez le (un seul) contact de votre choix en remplacent :id <br> par le id du contact. |
|   POST  | http://localhost:5000/admin/contact/add <br> http://cogipbecode.vulturi.ro/admin/contact/add | {<br>"company_id" : INT (should already exist),<br>"name" : "varshar(20)",<br>"phone": "varshar (10)",<br>"email" : "varshar(50)"<br>}   | {<br>"company_id" : 1,<br>"name" : "iliess",<br>"phone" : "0499999999",<br>"email" : "iliessnani2@gmail.com"<br>} | Method POST donc il faut envoyer un ficher json quand<br> vous faite la request voir body requested et exemple pour vous aider. |
|  PATCH  | http://localhost:5000/admin/contact/edit/:id <br> http://cogipbecode.vulturi.ro/admin/contact/edit/:id | {<br>"company_id": INT,<br>"name":"VARSHAR(20)",<br>"phone": "VARSHAR(10)",<br>"email": "VARSHAR(50)"<br>}   | {<br>"company_id" : 1,<br>"name" : "iliess",<br>"phone" : "0499999999",<br>"email" : "iliessnani2@gmail.com"<br>} | Même chose que celui d'au-dessus donc il faut bien envoyer un body/json et ne pas oublier de remplacer :id dans l'URL par l'id du contact ou vous remplacez les infos. |
| DELETE  | http://localhost:5000/admin/contact/delete/:id <br> http://cogipbecode.vulturi.ro/admin/contact/delete/:id |  /  |  /  | Requête DELETE donc pas de body mais ne pas oublier de faire remplacer :id par l'id du contact. |

### Invoices URL :
|    Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- | ------------------- |
|  Dashboard : GET  | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5 |  /  | http://localhost:5000/dashboard/:limit   | renvoie une liste avec la limite imposer <br> si vous remplacer : limite par 5 vous aurez :<br> 5 compagnies, 5 contacts, 5 factures. |
|   GET   | http://localhost:5000/invoices/all <br> http://cogipbecode.vulturi.ro/invoices/all |  /  |  /  | ici vous récupérez toute les factures . |
|   GET   | http://localhost:5000/invoices/view/:id <br> http://cogipbecode.vulturi.ro/invoices/view/:id |  /  | http://localhost:5000/companies/view/3 | ici vous récuperez la (une seul) facture de votre choix en remplacent :id <br> par le id de la facture. |
|   POST  | http://localhost:5000/admin/invoice/add <br> http://cogipbecode.vulturi.ro/admin/invoice/add | {<br>"compagny_id" : INT <br>} | {<br>"compagny_id" : INT <br>} | Method POST donc il faut envoyer un ficher json quand<br> vous faite la request voir body requested et exemple pour vous aider. |
|  PATCH  | http://localhost:5000/admin/invoice/edit/:id <br> http://cogipbecode.vulturi.ro/admin/invoice/edit/:id | {<br>"compagny_id" : INT <br>}  | {<br>"compagny_id" : INT <br>} | Même chose que celui d'au-dessus donc il faut bien envoyer un body/json et ne pas oublier de remplacer :id dans l'URL par l'id de la facture ou vous remplacez les infos. |
| DELETE  | http://localhost:5000/admin/invoice/delete/:id <br> http://cogipbecode.vulturi.ro/admin/invoice/delete/:id |  /  |  /  | Requête DELETE donc pas de body mais ne pas oublier de faire remplacer :id par l'id de la facture. |

### Common Errors

| Status Code               | Description                                                           | Response                                                          |
|---------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------|
| 400 Bad Request           | The server could not understand the request due to invalid syntax.    | `json { "status": "error", "message": "Bad Request" }`            |
| 404 Not Found             | The server can not find the requested resource.                       | `json { "status": "error", "message": "Not Found" }`              |
| 500 Internal Server Error | The server has encountered a situation it doesn't know how to handle. | `json { "status": "error", "message": "Internal Server Error" }`  |

## Contributing
We welcome contributions! If you'd like to contribute, follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-awesome-feature`
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See LICENSE for details.
