<?php

namespace App\Routes;

use App\Controllers\FacturesController;
use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\ContactsController;
use App\Controllers\AdminController;

$router = new Router();

$router->get('/dashboard/{limit}', function ($limit) {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new HomeController($db))->index($limit);
});

$router->mount('/companies', function () use ($router) {

    $router->get('/', function () {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new CompaniesController($db))->getCompanies();
    });

    $router->get('/view/{id}', function ($id) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new CompaniesController($db))->getCompanie($id);
    });
});

$router->mount('/invoices', function () use ($router) {

    $router->get('/', function () {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new FacturesController($db))->getInvoices();
    });

    $router->get('/view/{id}', function ($id) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new getInvoice($db))->getInvoice($id);
    });
});
$router->mount('/contacts', function () use ($router) {

    $router->get('/', function () {

        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new ContactsController($db))->getContacts();
    });
});

// Middleware //
$router->before('GET|POST|PUT|PATCH|DELETE', '/admin/.*', function () {
    if (isset($_SESSION['user'])) {
        //header('Location: /login');
        echo 'The user must be logged in to access this page.';
        exit();
    }
});

$router->mount('/admin', function () use ($router) {

    $router->get('/{limit}', function ($limit) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        (new AdminController($db))->index($limit);
    });


    $router->mount('/companie', function () use ($router) {

        $router->post('/add', function () {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new CompaniesController($db))->postCompanie();
        });

        $router->put('/edit/{id}', function ($id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new CompaniesController($db))->putCompanie($id);
        });

        $router->delete('/delete/{id}', function ($id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new CompaniesController($db))->deleteCompanie($id);
        });
    });

    // ajouter votre code en mode admin ici.
    $router->mount('/contact', function () use ($router) {

        $router->post('/add', function () {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new ContactsController($db))->setNewContact();
        });

        $router->patch('/upd/{id}', function ($id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new ContactsController($db))->updateContact($id);
        });

        $router->delete('/delete/{id}', function ($id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new ContactsController($db))->deletContact($id);
        });
    });
});

$router->run();
