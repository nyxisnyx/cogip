<?php

namespace App\Controllers;

use App\config\Database;
use App\Core\Controller;
use PDOException;

class ContactsController extends Controller{
    
    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function getContact(){

        try{

            $contactData =$this->database->query("SELECT * FROM `contacts`");
            return $this->view("contacts",$contactData);

        } catch(PDOException $e){

            echo "Error: " . $e->getMessage();

        }

    }

}

