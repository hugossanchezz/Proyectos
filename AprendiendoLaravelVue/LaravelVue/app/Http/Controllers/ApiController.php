<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index()
    {
        $libros = Book::with('author')->get();
        // dd($libros); 
        return response()->json($libros);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string',
                'published_year' => 'required|integer',
                'author_id' => 'required|integer',
            ]);

            $book = new Book();
            $book->title = $request->input('title');
            $book->published_year = $request->input('published_year');
            $book->author_id = $request->input('author_id');
            $book->save();

            return response()->json($book, 201);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        if (!$book) {
            return response()->json(['message' => 'Libro no encontrado'], 404);
        }else {
            $book->delete();
            return response()->json(['message' => 'Libro eliminado correctamente'], 200);
        }
    }

}
