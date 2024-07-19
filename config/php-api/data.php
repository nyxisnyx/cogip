<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$data = array("name" => "John", "age" => 30);
echo json_encode($data);
?>
