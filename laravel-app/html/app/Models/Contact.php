<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'tell',
        'email',
        'content',
    ];

    public function toArray()
    {
        $array = parent::toArray();

        return [
            'id'        => $this->id,
            'firstName' => $this->first_name,
            'lastName'  => $this->last_name,
            'tell'      => $this->tell,
            'email'     => $this->email,
            'content'   => $this->content,
        ];
    }
}
