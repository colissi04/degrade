<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validação da imagem
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        // Salvar imagem na pasta storage/app/public/uploads
        $path = $request->file('image')->store('uploads', 'public');

        // Retornar a URL pública da imagem
        return response()->json([
            'url' => asset("storage/{$path}")
        ]);
    }
}
