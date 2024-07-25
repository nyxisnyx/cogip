<?php

namespace App\Models;

class User
{
    private string $username;
    private string $firstname;
    private string $lastname;
    private string $email;
    private string $password;
    private int  $role;

    public function __construct(string $username,  string $password, int $role=1, ?string $email ='', ?string $firstname='', ?string $lastname='')
    {

        $this->username = securityInput($username);
        $this->firstname = securityInput($firstname);
        $this->lastname = securityInput($lastname);
        $this->email = securityInput($email);
        $this->password = securityInput($password);
        $this->role = $role;
        
    }

    public function getUserInfo()
    {

        $datainJson = json_encode(
            [
                'username' => $this->username,
                'firstname'=> $this->firstname,
                'lastname'=>$this->lastname,
                'email' => $this->email,
                'password' => $this->password,
                'role' => $this->role
            ]
        );

        return $datainJson;
    }


    public function register($database)
    {   
        
        try{
            $newUserDatas=$database->query("INSERT INTO `users`( `user`, `first_name`, `last_name`, `email`, `password_hash`, `role_id`, `created_at`, `updated_at`)
            VALUES (
                    '{$this->username}',
                    '{$this->firstname}',
                    '{$this->lastname}',
                    '{$this->email}',
                    '{$this->hashpassword($this->password)}',
                    '{$this->role}',
                    NOW(),
                    NOW()
                    )");
    
            echo createJson($newUserDatas);

        } catch (\Throwable $th) {

            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }

    }

    public static function dataBodyInsert()
    {

        $bodydata = [];
        $bodydata = file_get_contents('php://input');
        $bodyDatas = json_decode($bodydata, true);

        $params = [
            'user' => securityInput($bodyDatas['user']),
            'password' => securityInput($bodyDatas['password'])
        ];

        return $params;
    }

    private function hashpassword($pwd){

        $hash = password_hash($pwd, PASSWORD_DEFAULT);
        return $hash;

    }
    
}
