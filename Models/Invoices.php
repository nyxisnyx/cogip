<?php

namespace App\Models;

class Invoices
{
    public int $invoice_id;
    public ?string $company_id;
    public ?string $created_at;
    public ?string $updated_at;

    public function __construct(int $invoice_id, ?string $company_id, ?string $created_at, ?string $updated_at)
    {
        $this->invoice_id = $invoice_id;
        $this->company_id = $company_id;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }

    public static function loadData($invoicesData)
    {
        $datas = [];

        foreach ($invoicesData as $invoice) {
            $datas[] = new self(
                $invoice['invoice_id'],
                $invoice['company_id'],
                $invoice['created_at'],
                $invoice['updated_at']
            );
        }
        return $datas;
    }

    public static function dataBodyInsert()
    {
        $bodydata = [];
        $bodydata = file_get_contents('php://input');
        $bodyDatas = json_decode($bodydata, true);

        $params = [
            ':company_id' => securityInput($bodyDatas['company_id']),
            ':created_at' => dates('Y-m-d h:i:s'),
            ':updated_at' => dates('Y-m-d h:i:s')
        ];

        return $params;
    }

    public static function dataBodyUpdate($id)
    {
        $bodydata = [];
        $paramsBody = [];
        $paramsSet = '';
        $bodydata = file_get_contents('php://input');
        $bodyDatas = json_decode($bodydata, true);

        foreach ($bodyDatas as $key => $value) {
            $paramsBody[":{$key}"] = securityInput($value);
        }
        foreach ($bodyDatas as $key => $value) {
            $paramsSet .= "{$key} = :{$key}, ";
        }
        $paramsSet .= 'updated_at = :updated_at '; // ajout updated sql SET

        $paramsNoBody = [
            ':invoice_id' => securityInput(intval($id)),
            ':updated_at' => dates('Y-m-d h:i:s')
        ];

        $params = array_merge($paramsBody, $paramsNoBody);

        return [
            "paramsBody" => $params,
            "paramsSet" => $paramsSet
        ];
    }
}
