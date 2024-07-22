<?php

namespace App\Controllers;

use App\config\Database;
use App\Controllers\CompaniesController;
use App\Controllers\ContactsController;
use App\Models\User;

class AdminController {

    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function index($limit){
        try {
            $datasCompanies = (new CompaniesController($this->database))->getCompaniesDashbord($limit);
            $dataContacts =(new ContactsController($this->database))->getContactsDashbord($limit);
            $invoicesDatas =(new FacturesController($this->database))->getInvoicesDashbord($limit);
            $response = [
                'status' => 202,
                'message' => 'OK',
                'Companies' => $datasCompanies,
                'Contacts'=>$dataContacts,
                'Invoices'=> $invoicesDatas
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

    public function createUser(){

        $json_str = file_get_contents('php://input');
            // Get as an object
        $json_obj = json_decode($json_str);
            
        $newUser = new User($json_obj->username,$json_obj->password);
        $newUser->register($this->database);

    }
}
