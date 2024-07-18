<?php

namespace App\Models;

class User
{

    private string $username;
    private string $email;
    private string $password;
    private int  $role;

    public function __construct(string $username,  string $password, ?string $email, ?int $role)
    {

        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
        $this->role = $role;
    }

    public function getAll()
    {

        $datainJson = json_encode(
            [
                'username' => $this->username,
                'email' => $this->email,
                'password' => $this->password,
                'role' => $this->role
            ]
        );

        return $datainJson;
    }


<<<<<<< HEAD
    public function register(){

    }

    public function login(){

        // TODO connection a la db 
        // TODO on verifie si le username et password correct
        // TODO si ok start SESSION['user][username]=['role'=$,];
        
    }

    public function logout(){
        
        // TODO retier de la session qd il logout 
        // Dylan est le meilleur
    }


}
=======
    public function register()
    {
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
    
}
>>>>>>> ludovic
