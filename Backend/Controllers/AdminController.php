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

        $username = isset($json_obj->username) ? $json_obj->username : null;
        $password = isset($json_obj->password) ? $json_obj->password : null;
        $email = isset($json_obj->email) ? securityInput($json_obj->email) : '';
        $firstname = isset($json_obj->firstname) ? securityInput($json_obj->firstname) : '';
        $lastname = isset($json_obj->lastname) ? securityInput($json_obj->lastname) : '';
        $role = isset($json_obj->role) ? securityInput($json_obj->role) : 1;
        
            
        $newUser = new User($username,$password,$role,$email,$firstname,$lastname);
        $newUser->register($this->database);

    }

    public function getAllUsers(){

        try{

            $contactData =$this->database->query(
                "SELECT users.user,users.email,users.first_name,users.last_name,roles.name 
                FROM users
                JOIN roles 
                    ON users.role_id = roles.role_id 
                JOIN role_permissions 
                    ON roles.role_id = role_permissions.role_id
                ");
            echo createJson($contactData);

        } catch (\Throwable $th) {
            //throw $th;
            $response = [
                'status' => 404,
                'message' => 'No found',
            ];
            echo createJson($response);
            echo $th;
        }
    }
}
