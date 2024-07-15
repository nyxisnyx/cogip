<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/Core/Helper.php';
require_once __DIR__ . '/Routes/Routes.php';

require_once __DIR__ . '/Config/config.php';
require_once __DIR__ . '/Helpers/request.php';

use Bramus\Router\Router;
use App\Config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\HomeController;

$router = new Router;

$router->get('/', function() {
    $db = new Database(DB_NAME, DB_USER, DB_PASS, DB_HOST);
    return (new HomeController($db))->index();
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

$router->run();
