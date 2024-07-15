<?php

namespace App\Controller;

use App\config\Database;

class facturesController{

    private Database $database;

    public function __construct(Database $database){
        $this->database = $database;
    }

    public function getData(){

        $query = "SELECT * FROM invoices";
        return $this->database->query($query);
    }
    
}