# My Awesome Project Documentation

## Introduction
Welcome to my awesome project! This documentation provides an overview of the project, its components, and how to use it.

## Table of Contents
- Installation
- Usage
- Configuration
- API Endpoints
- Contributing
- License

## Installation
To get started, follow these steps:
1. Clone the repository: `git clone https://github.com/yourusername/awesome-project.git`
2. Install dependencies: `npm install`
3. Run the project: `npm start`

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

### Api table :
|    Catégorie_&_Méthod    |   http request  | body requested  |     exemple     |     explication     |
| ------------------------ | --------------- | --------------- | --------------- |
|  Dashboard : GET  | http://localhost:5000/dashboard/:limit <br> http://cogipbecode.vulturi.ro/dashboard/5   |  /  | http://localhost:5000/dashboard/:limit   | (explication here) |
| companies : GET   | http://localhost:5000/companies/all <br>  http://cogipbecode.vulturi.ro/companies/all |  /  |  /  | (explication here) |
| Companies : GET <br> recevoir une companie en particulier   | http://localhost:5000/companies/view/:id <br>  http://cogipbecode.vulturi.ro/view/:id  |  /  | http://localhost:5000/companies/view/3 | (explication here) |
| Row 3, Cell 1   | Row 3, Cell 2   | Row 3, Cell 3   | | (explication here) |
| Row 3, Cell 1   | Row 3, Cell 2   | Row 3, Cell 3   | | (explication here) |

## Contributing
We welcome contributions! If you'd like to contribute, follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-awesome-feature`
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See LICENSE for details.
