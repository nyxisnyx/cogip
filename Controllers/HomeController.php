<?php

namespace App\Controllers;

use App\Config\Database;
use App\Core\Controller;

class HomeController extends Controller
{

    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }
    /*
    * return view
    */
    public function index($limit)    
    {
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
}