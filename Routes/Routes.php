<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\AdminController;
use App\Controllers\LoginController;

$router = new Router();

$router->get('/dashboard/{limit}', function ($limit) {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new HomeController($db))->index($limit);
});

$router->post('/login', function () {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new LoginController($db))->login();
});
$router->post('/logout', function () {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    (new LoginController($db))->logout();
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
$router->before('GET|POST|PUT|PATCH|DELETE', '/admin/.*/{key}', function ($key) {
    if (!isset($_SESSION['user'][$key]) ) {
        echo 'The user must be logged in to access this page';
        exit();
    }elseif(intval($_SESSION['user'][$key]['permissions']) < 2){
        echo 'The user is not allowed.';
        exit(); 
    }
});

$router->mount('/admin', function () use ($router) {

    $router->get('/{limit}', function ($limit) {
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        (new AdminController($db))->index($limit);
    });

    // Middleware //
    $router->before('DELETE', '/companie/.*/{key}', function ($key) {
        if (!isset($_SESSION['user'][$key]) ) {
            echo 'The user must be logged in to access this page';
            exit();
        }elseif(intval($_SESSION['user'][$key]['permissions']) < 2){
            echo 'The user is not allowed.';
            exit(); 
        }
    });



    $router->mount('/companie', function () use ($router) {

        $router->post('/new/{key}', function () {
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
