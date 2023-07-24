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
                "code" => "USD" ,
                "currency_rate" => "0.4"
                
            ], 
            [
                "name" => "Euro",
                "code" => "EUR" ,
                "currency_rate" => "0.6"
            ], 
            [
                "name" => "Ukrainian hryvnia",
                "code" => "UAH" ,
                "currency_rate" => "0.9"
            ], 
            [
                "name" => "Etherium",
                "code" => "ETH" ,
                "currency_rate" => "0.7"
            ],
            [
                "name" => "Bitcoin",
                "code" => "BTC",
                "currency_rate" => "0.2"
            ]
        ];

        foreach ($currencies as $currency) {
            Currency::factory()->create([
                'name' => $currency['name'],
                'code' => $currency['code'],
                'currency_rate' => $currency['currency_rate'],
            ]);
        }

       
    }
}
