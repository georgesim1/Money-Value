<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $currencies = [
            [
                "name" => "United States Dollar",
                "code" => "USD"
            ], 
            [
                "name" => "Euro",
                "code" => "EUR"
            ], 
            [
                "name" => "Ukrainian hryvnia",
                "code" => "UAH"
            ], 
            [
                "name" => "Etherium",
                "code" => "ETH"
            ], 
        ];

        foreach ($currencies as $currency) {
            Currency::factory()->create([
                'name' => $currency['name'],
                'code' => $currency['code'],
            ]);
        }

       
    }
}
