<?php

namespace App\Controllers;

use App\config\Database;
use App\Core\Controller;

class CompaniesController extends Controller {


    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }


    public function getCompanies(){

        try {
            
            $datas = $this->database->query('SELECT * FROM companies');           
            return $this->view('companies',$datas);

        } catch (\Throwable $th) {
            //throw $th;
        }

    }
}