<?php

namespace App\Models;

class Companies
{

    public int $id;
    public ?string $name;
    public ?string $created_at;
    public ?string $updated_at;

    public function __construct(int $id, ?string $name,?string $created_at,?string $updated_at)
    {
        $this->id = $id;
        $this->name = $name;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }

    public static function loadData($postsData)
    {
        $datas = [];

        foreach ($postsData as $post) {
            $datas[] = new self(
                $post['company_id'],
                $post['name'],
                $post['created_at'],
                $post['updated_at']
            );
        }
        return $datas ;
    }
}
