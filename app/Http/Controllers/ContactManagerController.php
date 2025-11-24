<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactManagerController extends Controller
{
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return Inertia::render('contact/contact-management', [
            "contacts" => $contacts,
        ]);
    }

    public function addContact(Request $request)
    {
        $contact = new Contact;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->description = $request->description;
        $contact->address = $request->address;
        $contact->save();
    }

    public function editContact(Request $request)
    {
        $contact = Contact::findOrFail($request->id);
        $contact->update($request->all());
    }

    public function deleteContact(Request $request)
    {
        Contact::destroy($request->id);
    }
}
