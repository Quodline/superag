<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $with = ['agent'];

    public function agent(): BelongsTo
    {
        return $this->belongsTo(Agent::class);
    }
}
