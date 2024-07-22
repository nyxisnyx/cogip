<?php

namespace App\Controllers;

use App\config\Database;
use App\Core\Controller;

class FacturesController extends Controller
{

    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function getInvoices()
    {
        try {
            $datas = $this->database->query("SELECT * FROM invoices");
            echo createJson($datas);
        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }
    }

    public function createInvoice()
    {

        $json_str = file_get_contents('php://input');

        $json_obj = json_decode($json_str);

        $company_id_form_invoice = securityInput($json_obj->company_id) ;
        $price_form_invoice = securityInput($json_obj->price) ;
        $company_name_form_invoice = securityInput($json_obj->company_name);
           

        try {
            $datas = $this->database->query(
                "INSERT INTO 
                `invoices`( `company_id`,
                `price`,
                `company_name` 
                `created_at`, 
                `updated_at`)

            

                 VALUES (
                 {$company_id_form_invoice},
                 {$price_form_invoice},
                 {$company_name_form_invoice},
                 NOW(),
                 NOW()
                 )"
            );
            $response = [
                'status' => 202,
                'message' => 'OK',
                'params' => $datas
            ];
            echo createJson($response);
        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }
    }

    public function getInvoice($id)
    {
        try {
            $datas = $this->database->query("SELECT * FROM invoices WHERE invoice_id =" . $id);
            echo createJson($datas);
        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }
    }

    public function deleteInvoice($id)
    {

        try {

            $invoiceIsExist = $this->invoiceIsExist($id);

            if ($invoiceIsExist) {
                $params = [
                    ':id' => securityInput(intval($id))
                ];

                $deleteInvoice = $this->database->query(
                    'DELETE 
                    FROM invoices
                    WHERE invoice_id = :id',
                    $params
                );

                $response = [
                    'status' => 202,
                    'message' => 'OK',
                    'params' => $params
                ];

                echo createJson($response);
            } else {
                $response = [
                    'status' => 404,
                    'message' => 'Invoice no Found',
                ];
                echo createJson($response);
            }
        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }
    }


    public function invoiceIsExist($id)
    {

        $params = [
            ':id' => intval($id)
        ];

        $datas = $this->database->query(
            'SELECT * 
            FROM invoices
             Where invoice_id = :id',
            $params
        );

        return $datas;

    }

    public function patchInvoice($id)
    {

        try {

            $json_str = file_get_contents('php://input');

            $json_obj = json_decode($json_str);

            $contactData = $this->database->query(
                "UPDATE `invoices` 
                    SET 
                    `company_id`='{$json_obj->company_id}',
                    `updated_at`=NOW() 
                    WHERE `invoice_id`= '{$id}'"
            );

            echo createJson($contactData);

        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
            echo $th;
        }

    }
    public function getInvoicesDashbord($limit)
    {

        try {

            $params = [

                ':limit' => intval($limit)
            ];

            $invoicesDatas = $this->database->queryBindParam(
                'SELECT invoices.*, companies.name
                FROM invoices
                JOIN companies 
                ON invoices.company_id = companies.company_id
                ORDER BY created_at  DESC 
                LIMIT :limit',
                $params
            );


            return $invoicesDatas;
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
