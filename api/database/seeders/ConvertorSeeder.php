<?php

namespace Database\Seeders;

use App\Models\Convertor;
use App\Models\Pair;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConvertorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pairs = Pair::all()->toArray();

        foreach ($pairs as $key => $pair) {
            Convertor::factory()->create([
                'pair_id' => $pair['id'],
                'count' => 0,
            ]);
        }
    }
}
