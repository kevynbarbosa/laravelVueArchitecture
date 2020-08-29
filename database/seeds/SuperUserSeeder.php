<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class SuperUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {       
        DB::table('modules')->insert([
            'name' => "TestModule",
            'ref' => "TME",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('accesses')->insert([
            'feature' => "TestAccess",
            'ref' => "TAC",
            'module_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('profiles')->insert([
            'name' => "SuperProfile",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('access_profile')->insert([
            'access_id' => 1,
            'profile_id' => 1,
            'read' => true,
            'create' => true,
            'update' => true,
            'delete' => true,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('users')->insert([
            'name' => "SuperUser",
            'email' => "super@semplice.net.br",
            'password' => Hash::make('password'),
            'profile_id' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
