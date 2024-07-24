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
                    ON roles.role_id = role_permissions.role_id
                WHERE users.user = :userName',
                $params
            );

            if ($userIsExist) {

                if (password_verify($dataBody['password'], $userIsExist[0]['password_hash'])) {

                    $key = generateApiKey();

                    $_SESSION['user'][$key] = [
                        'roles' => $userIsExist[0]['name'],
                        'permissions' => $userIsExist[0]['permission_id'],
                        'date'=> timesTamp()
                    ];


                    $response = [
                        'status' => 201,
                        'message' => 'Successful Login ',
                        'first_name' => $userIsExist[0]['first_name'],
                        'last_name' => $userIsExist[0]['last_name'],
                        'key' => $key,
                        'permission' => intval( $userIsExist[0]['permission_id'])
                    ];
                    echo createJson($response);
                } else {
                    $response = [
                        'status' => 401,
                        'message' => 'Unauthorized',
                    ];
                    echo createJson($response);
                }
            } else {

                $response = [
                    'status' => 401,
                    'message' => 'Unauthorized',
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

        unset($_SESSION['user'][$key]);

        $response = [
            'status' => 200,
            'message' => 'Successful Logout'
        ];
        echo createJson($response);
    }
}
