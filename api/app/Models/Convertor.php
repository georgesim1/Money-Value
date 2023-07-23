<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Convertor extends Model
{
    use HasFactory;

    public function pair() : BelongsTo {
        return $this->belongsTo(Pair::class, 'id');
    }
}
