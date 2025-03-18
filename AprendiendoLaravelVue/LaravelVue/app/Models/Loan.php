<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $table = 'loans';

    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}
