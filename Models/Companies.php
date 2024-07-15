<?php

namespace App\Models;

class Companies
{

    public int $id;
    public ?string $name;

    public function __construct(int $id, ?string $name)
    {
        $this->id = $id;
        $this->name = $name;
    }

    public static function loadData($postsData)
    {
        $datas = [];

        foreach ($postsData as $post) {
            $datas[] = new self(
                $post['id'],
                $post['name'],
                $post['created_at'],
                $post['updated_at']
            );
        }
        return $datas ;
    }
}
