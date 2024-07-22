# Cogip API Documentation

## Introduction
Welcome to our awesome project! This documentation provides an overview of the project, its components, and how to use it.

## Table of Contents
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Common Errors](#common-errors)
- [Contributor](#contributor)
- [License](#license)
- [Cogip Project](#cogip-project)

## Usage
Use the HTTP requests below and don't forget to add a body/JSON to it if needed.

## Configuration
Explain any configuration settings, environment variables, or options users need to set up.

## API Endpoints

### User API
- `GET /users`: Get a list of users.
- `POST /users`: Create a new user.
- `GET /users/:id`: Get user details by ID.

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

### API Table

#### Companies URL

| Method  | HTTP Request  | Body Requested  | Example | Explanation |
| ------- | ------------- | --------------- | ------- | ----------- |
| Dashboard: GET | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5 | / | http://localhost:5000/dashboard/:limit | Returns a list with the imposed limit.<br> Replace :limit with 5 to get:<br> 5 companies, 5 contacts, 5 invoices. |
| GET | http://localhost:5000/companies/all <br> http://cogipbecode.vulturi.ro/companies/all | / | / | Retrieve all companies. |
| GET | http://localhost:5000/companies/view/:id <br> http://cogipbecode.vulturi.ro/view/:id | / | http://localhost:5000/companies/view/3 | Retrieve the company of your choice by replacing :id<br> with the company ID. |
| POST | http://localhost:5000/admin/companie/add <br> http://cogipbecode.vulturi.ro/admin/companie/add | {<br>"name": "Varshar(50)",<br>"type_id":INT,<br>"country":"VARSHAR(50)",<br>"tva":"VARSHAR(50)"<br>} | {<br>"name": "Match Sa",<br>"type_id":1,<br>"country":"Belgique",<br>"tva":"BE8888888888"<br>} | POST method, so you need to send a JSON file.<br> Refer to body requested and example to help you. |
| PUT | http://localhost:5000/admin/companie/edit/:id <br> http://cogipbecode.vulturi.ro/admin/companie/edit/:id | {<br>"name": "Varshar(50)",<br>"type_id":INT,<br>"country":"Varshar(50)",<br>"tva":"Varshar(50)"<br>} | {<br>"name": "Match Sa",<br>"type_id":1,<br>"country":"Belgique",<br>"tva":"BE8888888888"<br>} | Same as above, send a body/JSON and replace :id in the URL<br> with the company ID where you replace the info. |
| DELETE | http://localhost:5000/admin/companie/delete/:id <br> http://cogipbecode.vulturi.ro/admin/companie/delete/:id | / | / | DELETE request, no body needed, but don't forget to replace :id with the company ID. |

#### Contacts URL

| Method  | HTTP Request  | Body Requested  | Example | Explanation |
| ------- | ------------- | --------------- | ------- | ----------- |
| Dashboard: GET | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5 | / | http://localhost:5000/dashboard/:limit | Returns a list with the imposed limit.<br> Replace :limit with 5 to get:<br> 5 companies, 5 contacts, 5 invoices. |
| GET | http://localhost:5000/contacts/all <br> http://cogipbecode.vulturi.ro/contacts/all | / | / | Retrieve all contacts. |
| GET | http://localhost:5000/contacts/view/:id <br> http://cogipbecode.vulturi.ro/contacts/view/:id | / | http://localhost:5000/companies/view/3 | Retrieve the contact of your choice by replacing :id<br> with the contact ID. |
| POST | http://localhost:5000/admin/contact/add <br> http://cogipbecode.vulturi.ro/admin/contact/add | {<br>"company_id" : INT (should already exist),<br>"name" : "varshar(20)",<br>"phone": "varshar (10)",<br>"email" : "varshar(50)"<br>} | {<br>"company_id" : 1,<br>"name" : "iliess",<br>"phone" : "0499999999",<br>"email" : "iliessnani2@gmail.com"<br>} | POST method, so you need to send a JSON file.<br> Refer to body requested and example to help you. |
| PATCH | http://localhost:5000/admin/contact/edit/:id <br> http://cogipbecode.vulturi.ro/admin/contact/edit/:id | {<br>"company_id": INT,<br>"name":"VARSHAR(20)",<br>"phone": "VARSHAR(10)",<br>"email": "VARSHAR(50)"<br>} | {<br>"company_id" : 1,<br>"name" : "iliess",<br>"phone" : "0499999999",<br>"email" : "iliessnani2@gmail.com"<br>} | Same as above, send a body/JSON and replace :id in the URL<br> with the contact ID where you replace the info. |
| DELETE | http://localhost:5000/admin/contact/delete/:id <br> http://cogipbecode.vulturi.ro/admin/contact/delete/:id | / | / | DELETE request, no body needed, but don't forget to replace :id with the contact ID. |

#### Invoices URL

| Method  | HTTP Request  | Body Requested  | Example | Explanation |
| ------- | ------------- | --------------- | ------- | ----------- |
| Dashboard: GET | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5 | / | http://localhost:5000/dashboard/:limit | Returns a list with the imposed limit.<br> Replace :limit with 5 to get:<br> 5 companies, 5 contacts, 5 invoices. |
| GET | http://localhost:5000/invoices/all <br> http://cogipbecode.vulturi.ro/invoices/all | / | / | Retrieve all invoices. |
| GET | http://localhost:5000/invoices/view/:id <br> http://cogipbecode.vulturi.ro/invoices/view/:id | / | http://localhost:5000/companies/view/3 | Retrieve the invoice of your choice by replacing :id<br> with the invoice ID. |
| POST | http://localhost:5000/admin/invoice/add <br> http://cogipbecode.vulturi.ro/admin/invoice/add | {<br>"compagny_id" : INT <br>} | {<br>"compagny_id" : INT <br>} | POST method, so you need to send a JSON file.<br> Refer to body requested and example to help you. |
| PATCH | http://localhost:5000/admin/invoice/edit/:id <br> http://cogipbecode.vulturi.ro/admin/invoice/edit/:id | {<br>"compagny_id" : INT <br>} | {<br>"compagny_id" : INT <br>} | Same as above, send a body/JSON and replace :id in the URL<br> with the invoice ID where you replace the info. |
| DELETE | http://localhost:5000/admin/invoice/delete/:id <br> http://cogipbecode.vulturi.ro/admin/invoice/delete/:id | / | / | DELETE request, no body needed, but don't forget to replace :id with the invoice ID. |

## Common Errors

| Status Code | Description | Response |
|-------------|-------------|----------|
| 400 Bad Request | The server could not understand the request due to invalid syntax. | `json { "status": "error", "message": "Bad Request" }` |
| 404 Not Found | The server can not find the requested resource. | `json { "status": "error", "message": "Not Found" }` |
| 500 Internal Server Error | The server has encountered a situation it

 doesn't know how to handle. | `json { "status": "error", "message": "Internal Server Error" }` |

## Contributor

| Contributor | Name | Email |
|-------------|------|-------|
| Student | Your Name | your.email@example.com |

## License
The license of this project is MIT.

## Cogip Project
Here you can find all the information related to the Cogip project. Visit [Cogip Becode](http://cogipbecode.vulturi.ro) for more details.

---

The table provided covers the structure for the Companies, Contacts, and Invoices URLs with the associated HTTP methods, request bodies, examples, and explanations. The error handling and contributor sections are also detailed to ensure clarity for users of the API.