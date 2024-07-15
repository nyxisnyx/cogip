<?php

namespace App\Controllers;

use App\config\Database;
use App\Core\Controller;

class FacturesController extends Controller {

    private Database $database;

    public function __construct(Database $database) {
        $this->database = $database;
    }

    public function getInvoices() {
        try {
            $datas = $this->database->query("SELECT * FROM invoices ORDER BY created_at DESC");
            return $this->jsonResponse($datas);
        } catch (\Throwable $th) {
            return $this->jsonResponse(['error' => $th->getMessage()], 500);
        }
    }

    private function jsonResponse(array $data, int $statusCode = 200) {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }
}