<?php

require_once __DIR__ . '/../index.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/stylefooter.css"> 
    <link rel="stylesheet" href="/assets/css/darkmode.css">
    <script src="/public/assets/scripts/main.js" defer></script>
    <title>Document</title>
</head>

<body>

<div class="toggle-dark-mode" id="darkModeToggle">
    
        <img src="assets/img/icons/sun-moon.svg" alt="Light Mode" id="modeIcon">
    </div>
<script src="/assets/scripts/darkmode.js"></script>
    <div id="root"></div>
    
</body>
<footer>
    <script src="/assets/scripts/footer.js"></script>
</footer>
</html>


