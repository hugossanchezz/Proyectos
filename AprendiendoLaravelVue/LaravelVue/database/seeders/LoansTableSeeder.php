<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LoansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('loans')->insert([
            [
                'loan_date' => '2023-03-17',
                'return_date' => '2023-03-17',
            ],
            [
                'loan_date' => '2023-03-16',
                'return_date' => '2023-03-16',
            ],
            [
                'loan_date' => '2023-03-15',
                'return_date' => '2023-03-15',
            ],
        ]);
    }
}
