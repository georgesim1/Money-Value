<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pair extends Model
{
    use HasFactory;

    public function currency() : BelongsTo {
        return $this->belongsTo(Currency::class, 'id');
    }

    public function convertor() : HasOne {
        return $this->hasOne(Convertor::class, 'pair_id');
    }
}
