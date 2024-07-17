<?php

namespace App\Models;

class User{

    private string $username;
    private string $email;
    private string $password;
    private int  $role;

    public function __construct(string $username, string $email, string $password, int $role) {

        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
        $this->role = $role;

    }

    public function getAll(){

        $datainJson = json_encode(
            [
            'username'=>$this->username,
            'email'=>$this->email,
            'password'=>$this->password,
            'role'=>$this->role
            ]);

        return $datainJson;
    }


    public function register(){

    }

    public function login(){

        // TODO connection a la db 
        // TODO on verifie si le username et password correct
        // TODO si ok start SESSION['user][username]=['role'=$,];
        
    }

    public function logout(){
        
        // TODO retier de la session qd il logout 

    }


}