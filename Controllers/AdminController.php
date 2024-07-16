<?php

namespace App\Controllers;

use App\config\Database;
use App\Controllers\CompaniesController;

class AdminController{

    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function index(){

        try {
            $datasCompanies = (new CompaniesController($this->database))->getCompaniesDashbord();
            
            $response = [
                'status' => 202,
                'message' => 'OK',
                'Companies' => $datasCompanies
            ];

            echo createJson($response);
            

        } catch (\Throwable $th) {
            //throw $th;
            $response = [
                'status' => 404,
                'message' => 'No found',
            ];
            echo createJson($response);
        }


    }
}
