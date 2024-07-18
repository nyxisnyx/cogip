<?php

namespace App\Controllers;

use App\Config\Database;
use App\Models\User;

class LoginController
{

    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function login()
    {
        // TODO connection a la db 
        // TODO on verifie si le username et password correct
        // TODO si ok start SESSION['user][username]=['role'=$,];

        try {


            $dataBody = User::dataBodyInsert();
            $params = [
                'userName' => $dataBody['user']
            ];

            $userIsExist = $this->database->query(
                'SELECT users.user,users.password_hash,users.first_name,users.last_name, roles.name,role_permissions.permission_id 
                FROM users 
                JOIN roles 
                    ON users.role_id = roles.role_id 
                JOIN role_permissions 
                    ON roles.role_id = role_permissions.permission_id 
                WHERE users.user = :userName',
                $params
            );


            if ($userIsExist) {

                if ($dataBody['password'] === $userIsExist[0]['password_hash']) {

                    $key = generateApiKey();

                    $_SESSION['user'][$key] = [
                        'roles' => $userIsExist[0]['name'],
                        'permissions' => $userIsExist[0]['permission_id'],
                    ];


                    $response = [
                        'status' => 200,
                        'message' => 'Connection successful',
                        'first_name'=>$userIsExist[0]['first_name'],
                        'last_name'=>$userIsExist[0]['last_name'],
                        'key' => $key,

                    ];
                    echo createJson($response);
                }
            } else {
                $response = [
                    'status' => 404,
                    'message' => 'Connection Failed',
                ];
                echo createJson($response);
            }
        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }
    }

    public function logout($key)
    {

        // TODO retier de la session qd il logout 

        unset($_SESSION['user'][$key]);

        echo 'session destroy';
    }
}
