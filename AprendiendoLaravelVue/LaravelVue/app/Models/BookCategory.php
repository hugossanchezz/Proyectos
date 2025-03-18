<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookCategory extends Model
{
    protected $table = 'book_category';

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
