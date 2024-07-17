<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\AdminController;

$router = new Router();

$router->get('/', function () {
    (new HomeController)->index();
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

// Middleware //
$router->before('GET|POST|PUT|PATCH|DELETE', '/admin/.*', function () {
    if (!isset($_SESSION['user'])) {
        //header('Location: /login');
        echo 'The user must be logged in to access this page.';
        exit();
    }
});

$router->mount('/admin', function () use ($router) {

    $router->get('/{limit}', function ($limit) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new AdminController($db))->index($limit);
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
});

$router->run();
