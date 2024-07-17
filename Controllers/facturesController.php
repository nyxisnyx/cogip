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
            return $this->jsonResponse($datas);
        } catch (\Throwable $th) {
            return $this->jsonResponse(['error' => $th->getMessage()], 500);
        }
    }

    public function postInvoice()
    {
        try {
            $params = invoices::dataBodyInsert();
            $datas = $this->database->query('INSERT INTO invoices(company_id,
             created_at, 
             updated_at)
                VALUES (
                    :company_id,
                    :created_at,
                    :updated_at)',
                $params
            );
            $response = [
                'status' => 202,
                'message' => 'OK',
                'params' => $params
            ];
            echo createJson($response);

        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
        }

    }

    public function getInvoice($id)
    {

        try {
            $params = [':id' => $id];
            $datas = $this->database->query("SELECT * FROM invoices WHERE");
            if ($datas) {
                $response = [
                    'status' => 202,
                    'message' => 'OK',
                    'params' => $datas
                ];
            } else {
                $response = [
                    'status' => 404,
                    'message' => 'No found Companie',
                ];
            }
            echo createJson($response);
        } catch (\Throwable $th) {
            $response = [
                'status' => 404,
                'message' => 'No found Companies',
            ];

            echo createJson($response);
        }

    }
}
