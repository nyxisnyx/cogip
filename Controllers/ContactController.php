<?php

namespace App\Controllers;

use App\config\Database;
use App\Core\Controller;
use PDOException;

class ContactController extends Controller{
    
    private Database $data;

    public function __construct(Database $data){
        $this->data = $data;
    }

    public function getContact(){

        try{

            $this->data->query("SELECT * FROM `contacts`");
            return $this->view("les utilisateur",$this->data);

        } catch(PDOException $e){

            echo "Error: " . $e->getMessage();

        }

    }

}

