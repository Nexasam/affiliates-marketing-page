<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    /**
     * Render the main landing page.
     * Affiliate branding is already injected via AffiliateBranding middleware.
     */
    public function index(): Response
    {
        return Inertia::render('Landing/Index');
    }

    /**
     * Handle the "Speak with Sales" contact form submission.
     */
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name'          => ['required', 'string', 'max:100'],
            'email'         => ['required', 'email', 'max:150'],
            'phone'         => ['required', 'string', 'max:20'],
            'business_type' => ['required', 'string', 'max:100'],
            'message'       => ['required', 'string', 'max:2000'],
        ]);

        // TODO: Send email notification, store in DB, or push to CRM
        // Mail::to(config('affiliate.default.contact.email'))->send(new ContactInquiry($validated));

        return back()->with('success', 'Thank you! We will get back to you within 24 hours.');
    }
}
