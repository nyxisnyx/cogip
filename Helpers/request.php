<?php

function createJson($data)
{

    try {
        $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        header('Content-Type: application/json');

        return $json;
    } catch (\Throwable $th) {
        //echo $th;
    }
}

function securityInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function dates($format)
{

    $timezone = date_default_timezone_get();
    date_default_timezone_set($timezone);

    $date = date($format);
    return $date;
}

function timesTamp()
{

    $date = date_create();
    return date_timestamp_get($date);
}

function generateApiKey($length = 32)
{
    return bin2hex(random_bytes($length / 2));
}

function sessionTimeOut(int $deadline)
{

    $currentDateTimeStamp = timesTamp();
    $currentDate = new DateTime();
    $currentDate->setTimestamp($currentDateTimeStamp );

    $deadline = intval($deadline);

    foreach ($_SESSION['user'] as $key => $session) {

        $sessionDate = new DateTime();
        $sessionDate->setTimestamp($session['date']);

        $interval = $sessionDate->diff($currentDate);

        $minutes = $interval->h * 60 + $interval->i;

        if (intval($minutes) >= intval($deadline))
            unset($_SESSION['user'][$key]);
    }
}
