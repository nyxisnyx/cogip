<?php

namespace App\Routes;

use App\Controllers\FacturesController;
use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Config\Database;
use App\Controllers\CompaniesController;


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

$router->mount('/invoices', function() use ($router){

    $router->get('/', function(){
        $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
        return (new FacturesController($db))->getInvoices();
    });
});

$router->run();