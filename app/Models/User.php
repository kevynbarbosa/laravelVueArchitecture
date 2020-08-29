<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use DB;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['permissions'];

    public function getPermissionsAttribute()
    {
        if(!$this->profile_id) {
            return [];
        } else {
            $queryResult = DB::table('accesses')
            ->join('access_profile', 'access_profile.access_id', 'accesses.id')
            ->where('access_profile.profile_id', $this->profile_id)
            ->where('accesses.active', true)
            ->select('accesses.ref', 'accesses.feature', 'access_profile.read', 'access_profile.create', 'access_profile.update', 'access_profile.delete')
            ->get();

            $permissions = [];
            foreach ($queryResult as $row) {
                $ref = $row->ref;
                unset($row->ref);
                $permissions[$ref] = $row;
            }

            return $permissions;
        }
    }
}
