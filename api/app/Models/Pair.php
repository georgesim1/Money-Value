<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pair extends Model
{
    use HasFactory;

    public function from_currency() {
        return $this->belongsTo(Currency::class, 'from_id');
    }

    public function to_currency()  {
        return $this->belongsTo(Currency::class, 'to_id');
    }
}
