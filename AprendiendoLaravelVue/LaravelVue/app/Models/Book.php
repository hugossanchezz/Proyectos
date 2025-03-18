<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \App\Models\Author;

class Book extends Model
{
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
