<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
            [
                'title' => 'The Lord of the Rings',
                'published_year' => 1954
            ],
            [
                'title' => 'The Hobbit',
                'published_year' => 1937
            ],
            [
                'title' => 'The Silmarillion',
                'published_year' => 1977
            ],
            [
                'title' => 'The Fellowship of the Ring',
                'published_year' => 1954
            ],
            [
                'title' => 'The Two Towers',
                'published_year' => 1954
            ],
            [
                'title' => 'The Return of the King',
                'published_year' => 1955
            ],
            [
                'title' => 'The Final Empire',
                'published_year' => 2006
            ],
            [
                'title' => 'The Well of Ascension',
                'published_year' => 2007
            ],
            [
                'title' => 'The Hero of Ages',
                'published_year' => 2008
            ],
        ]);
    }
}
