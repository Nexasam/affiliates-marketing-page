<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class AffiliateBranding
{
    /**
     * Handle an incoming request.
     * Detects the current domain and injects affiliate branding into Inertia shared data.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $host    = $request->getHost();
        $domains = config('affiliate.domains', []);

        // Strip www. prefix for matching
        $cleanHost = preg_replace('/^www\./', '', $host);

        // Find matching affiliate config or fall back to default
        $affiliate = $domains[$cleanHost] ?? config('affiliate.default');

        // Inject branding into all Inertia responses
        Inertia::share([
            'affiliate' => $affiliate,
            'stats'     => config('affiliate.stats'),
            'plans'     => config('affiliate.plans'),
        ]);

        return $next($request);
    }
}
