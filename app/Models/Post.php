<?php

namespace App\Models;

use App\Models\User;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    public function topic(){
        return $this->belongsTo(Topic::class);
    }

    public function author(){
        return $this->belongsTo(User::class, 'author_id');
    }
}
