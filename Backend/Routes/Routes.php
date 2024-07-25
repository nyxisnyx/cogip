<?php

namespace App\Routes;

use App\Controllers\FacturesController;
use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\ContactsController;
use App\Controllers\AdminController;
use App\Controllers\LoginController;


$router = new Router();

$router->get('/dashboard/{limit}', function ($limit) {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new HomeController($db))->index($limit);
});

// Companies

$router->post('/login', function () {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new LoginController($db))->login();
});
$router->post('/logout/{key}', function ($key) {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new LoginController($db))->logout($key);
});

$router->mount('/companies', function () use ($router) {

    $router->get('/all/{limit}/{page}', function ($limit,$page) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new CompaniesController($db))->getCompanies($limit,$page);
    });

    $router->get('/view/{id}', function ($id) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new CompaniesController($db))->getCompanie($id);
    });
});

//Invoices

$router->mount('/invoices', function () use ($router) {

    $router->get('/all', function () {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new FacturesController($db))->getInvoices();
    });

    $router->get('/view/{id}', function ($id) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new FacturesController($db))->getInvoice($id);
    });
});

//Contacts


$router->mount('/contacts', function () use ($router) {

    $router->get('/all', function () {

        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new ContactsController($db))->getContacts();
    });
    $router->get('/view/{id}', function ($id) {

        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new ContactsController($db))->getContact($id);
    });
});

// Middleware //
$router->before('GET|POST|PUT|PATCH', '/admin/{key}/.*', function ($key) {
    if (!isset($_SESSION['user'][$key])) {
        $response = [
            'status' => 401,
            'message' => 'Unauthorized',
        ];
        echo createJson($response);
        exit();
    } elseif (intval($_SESSION['user'][$key]['permissions']) < 1) {
        $response = [
            'status' => 403,
            'message' => 'Forbidden',
        ];
        echo createJson($response);
        exit();
    }
});
// Middleware //
$router->before('DELETE', '/admin/{key}/.*', function ($key) {
    if (!isset($_SESSION['user'][$key])) {
        $response = [
            'status' => 401,
            'message' => 'Unauthorized',
        ];
        echo createJson($response);
        exit();
    } elseif (intval($_SESSION['user'][$key]['permissions']) <= 2) {
        $response = [
            'status' => 403,
            'message' => 'Forbidden',
        ];
        echo createJson($response);
        exit();
    }
});

//Admin


$router->mount('/admin/{key}', function () use ($router) {

    $router->get('/all/{limit}', function ($key, $limit) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        (new AdminController($db))->index($limit);
    });

    


    $router->mount('/user', function () use ($router) {

        $router->post('/add', function () {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new AdminController($db))->createUser();
        });
        $router->get('/view',function () {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new AdminController($db))->getAllUsers();
        });
    });


    $router->mount('/companie', function () use ($router) {

        $router->post('/add', function () {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new CompaniesController($db))->postCompanie();
        });

        $router->put('/edit/{id}', function ($key, $id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new CompaniesController($db))->putCompanie($id);
        });



        $router->delete('/delete/{id}', function ($key, $id) {
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

        $router->patch('/edit/{id}', function ($key,$id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new ContactsController($db))->updateContact($id);
        });

        $router->delete('/delete/{id}', function ($key,$id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new ContactsController($db))->deletContact($id);
        });
    });



    $router->mount('/invoice', function () use ($router) {

        $router->post('/add', function ($key) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new FacturesController($db))->createInvoice();
        });
        
        $router->patch('/edit/{id}', function ($key,$id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new FacturesController($db))->patchInvoice($id);
        });

        $router->delete('/delete/{id}', function ($id) {
            $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
            return (new FacturesController($db))->patchInvoice($id);
        });

    });
});

$router->run();
