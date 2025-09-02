<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\ContactMail;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Contact::query();

        if ($request->filled('firstName')) {
            $query->where('first_name', 'like', '%' . $request->input('firstName') . '%');
        }

        if ($request->filled('lastName')) {
            $query->where('last_name', 'like', '%' . $request->input('lastName') . '%');
        }

        if ($request->filled('email')) {
            $query->where('email', 'like', '%' . $request->input('email') . '%');
        }

        return $query->paginate(2);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $contact = Contact::Create([
            "first_name" => $request->firstName,
            "last_name" => $request->lastName,
            "tell" => $request->tell,
            "email" => $request->email,
            "content" => $request->content,
        ]);

        return response()->json($contact, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        return $contact;
    }

    public function send(Request $request)
    {
        $validated = $request->validate([
            'title'    => 'required|string',
            'main' => 'required|string',
        ]);

        $email = Contact::find($request->input('id'))->email;

        Mail::to($email)->send(new ContactMail($validated));

        return response()->json(['message' => 'メール送信成功']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
