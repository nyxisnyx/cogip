<?php

session_start();


$_SESSION['user']['api'] = [
    'roles' => 'jcRanu',
    'permissions' => 3,
];
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/Core/Helper.php';
require_once __DIR__ . '/Config/config.php';
require_once __DIR__ . '/Helpers/request.php';
require_once __DIR__ . '/Routes/Routes.php';


// supression des Session param => minutes
//sessionTimeOut(240);
