<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Rodrigo Colissi',
                'email' => 'rcolissi@gmail.com',
                'password' => Hash::make('031194'),
                'role' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'João Silva',
                'email' => 'joao.silva@gmail.com',
                'password' => Hash::make('senha123'),
                'role' => 'cliente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Maria Souza',
                'email' => 'maria.souza@gmail.com',
                'password' => Hash::make('senha123'),
                'role' => 'cliente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('admin123'),
                'role' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
