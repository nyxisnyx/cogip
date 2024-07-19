<?php

namespace App\Controllers;

use App\config\Database;
use App\Core\Controller;
use App\Models\Companies;


class CompaniesController extends Controller
{


    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }


    public function getCompanies()
    {

        try {

            $compagniesDatas = $this->database->query(
                'SELECT companies.*, types.name AS typeName
                FROM companies
                JOIN types 
                ON types.type_id = companies.type_id 
                ORDER BY name  ASC'
            );

            $datas = Companies::loadData($compagniesDatas);
            $response = [
                'status' => 202,
                'message' => 'OK',
                'params' => $datas
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

    public function getCompaniesDashbord($limit)
    {
        try {

            $params = [

                ':limit' => intval($limit)
            ];

            $compagniesDatas = $this->database->queryBindParam(
                'SELECT companies.*, types.name AS typeName
                FROM companies
                JOIN types 
                ON types.type_id = companies.type_id 
                ORDER BY created_at  DESC 
                LIMIT :limit',
                $params
            );

            $datas = Companies::loadData($compagniesDatas);
            return $datas;
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

    public function getCompanie($id)
    {

        try {

            $params = [
                ':id' => $id
            ];

            $datas = $this->database->query(
                'SELECT companies.*, types.name AS typeName
                FROM companies
                JOIN types 
                ON types.type_id = companies.type_id
                Where company_id = :id',
                $params
            );

            $datasConatcts = $this->database->query(
                'SELECT email 
                FROM contacts 
                WHERE company_id= :id',
                $params
            );

            $dataInvoices = $this->database->query(
                'SELECT invoices.invoice_id,invoices.created_at,invoices.updated_at ,companies.name 
                FROM invoices 
                JOIN companies 
                ON invoices.company_id = companies.company_id
                 WHERE invoices.company_id=:id',
                $params
            );

            if ($datas) {
                $response = [
                    'status' => 202,
                    'message' => 'OK',
                    'infos' => $datas,
                    'contatct' => $datasConatcts,
                    'invoices' => $dataInvoices
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

    public function postCompanie()
    {

        try {
            $params = Companies::dataBodyInsert();
            $companieInsert = $this->database->query(
                'INSERT INTO companies(
                    name, 
                    type_id,
                    country,
                    tva,
                    created_at, 
                    updated_at) 
                VALUES (
                    :name,
                    :type_id,
                    :country,
                    :tva,
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

    public function putCompanie($id)
    {
        try {
            $companieIsExist = $this->companieIsExist($id);

            if ($companieIsExist) {
                $params = Companies::dataBodyUpdate($id);
                $companieUpadta = $this->database->query(
                    'UPDATE companies 
                    SET ' .  $params['paramsSet'] . '
                    WHERE company_id = :id',
                    $params['paramsBody']
                );

                $response = [
                    'status' => 202,
                    'message' => 'OK',
                    'params' => $params['paramsBody']
                ];

                echo createJson($response);
            } else {
                $response = [
                    'status' => 404,
                    'message' => 'Companie no Found',
                ];
                echo createJson($response);
            }
        } catch (\Throwable $th) {
            $response = [
                'status' => 400,
                'message' => 'Bad Request',
            ];
            echo createJson($response);
        }
    }

    public function deleteCompanie($id)
    {
        try {

            $companieIsExist = $this->companieIsExist($id);

            if ($companieIsExist) {
                $params = [
                    ':id' => securityInput(intval($id))
                ];

                $deleteCompanie = $this->database->query(
                    'DELETE 
                    FROM companies 
                    WHERE company_id = :id',
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
                    'message' => 'Companie no Found',
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

    public function companieIsExist($id)
    {

        $params = [
            ':id' => intval($id)
        ];

        $datas = $this->database->query(
            'SELECT * 
            FROM companies
             Where company_id = :id',
            $params
        );

        return $datas;
    }
}
