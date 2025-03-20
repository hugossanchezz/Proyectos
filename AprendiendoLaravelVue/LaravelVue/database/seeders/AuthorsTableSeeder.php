<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('authors')->insert([
            [
                'name' => 'Cervantes',
                'country' => 'Spain',
            ],
            [
                'name' => 'J. R. R. Tolkien',
                'country' => 'United Kingdom',
            ],
            [
                'name' => 'Brandon Sanderson',
                'country' => 'United States',
            ],
        ]);
    }
}
