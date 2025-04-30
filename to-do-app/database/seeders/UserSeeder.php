<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            ['name' => 'robert.gubat', 'email' => 'robert.gubat@example.com', 'password' => 'robert.gubat123'],
            ['name' => 'joseph.molinas', 'email' => 'joseph.molinas@example.com', 'password' => 'joseph.molinas123'],
            ['name' => 'troy.sanpedro', 'email' => 'troy.sanpedro@example.com', 'password' => 'troy.sanpedro123'],
            ['name' => 'patrick.concepcion', 'email' => 'patrick.concepcion@example.com', 'password' => 'patrick.concepcion123'],
            ['name' => 'gerald.salapati', 'email' => 'gerald.salapati@example.com', 'password' => 'gerald.salapati123'],
        ];

        foreach ($users as $user) {
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => Hash::make($user['password']),
            ]);
        }
    }
}
