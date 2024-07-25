<?php

namespace App\Models;

class Companies
{

    public int $id;
    public ?string $name;
    public ?string $typeName;
    public ?string $country;
    public ?string $tva;
    public ?string $created_at;
    public ?string $updated_at;

    public function __construct(int $id, ?string $name, ?string $typeName,?string $country,?string $tva, ?string $created_at, ?string $updated_at)
    {
        $this->id = $id;
        $this->name = $name;
        $this->typeName = $typeName;
        $this->country = $country;
        $this->tva = $tva;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }

    public static function loadData($companiesData)
    {
        $datas = [];

        foreach ($companiesData as $companie) {
            $datas[] = new self(
                $companie['company_id'],
                $companie['name'],
                $companie['typeName'],
                $companie['country'],
                $companie['tva'],
                $companie['created_at'],
                $companie['updated_at']
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
            ':name' => securityInput($bodyDatas['name']),
            ':type_id' => securityInput(intval($bodyDatas['type_id'])),
            ':country' => securityInput($bodyDatas['country']),
            ':tva' => securityInput($bodyDatas['tva']),
            ':created_at' => dates('Y-m-d h:i:s'),
            ':updated_at' => dates('Y-m-d h:i:s'),
            ':payment_deadline'=>securityInput($bodyDatas['payment_deadline'])
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
            $paramsSet .=  "{$key} = :{$key}, ";
        }
        $paramsSet .= 'updated_at = :updated_at '; // ajout updated sql SET

        $paramsNoBody =  [
            ':id' => securityInput(securityInput(intval($id))),
            ':updated_at' => dates('Y-m-d h:i:s')
        ];

        $params = array_merge($paramsBody, $paramsNoBody);

        return [
            "paramsBody" => $params,
            "paramsSet" => $paramsSet
        ];
    }    
}
