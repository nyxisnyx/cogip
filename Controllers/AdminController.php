<?php

namespace App\Controllers;

use App\config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\ContactsController;

class AdminController{

    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function index($limit){

        try {
            $datasCompanies = (new CompaniesController($this->database))->getCompaniesDashbord($limit);
            $dataContacts =(new ContactsController($this->database))->getContactsDashbord($limit);
            $response = [
                'status' => 202,
                'message' => 'OK',
                'Companies' => $datasCompanies,
                'Contacts' => $dataContacts
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
