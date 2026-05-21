<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Dynamic SEO from affiliate config --}}
        @php
            $affiliate = \Inertia\Inertia::getShared('affiliate') ?? config('affiliate.default');
        @endphp

        <title inertia>{{ $affiliate['name'] ?? config('app.name') }}</title>
        <meta name="description" content="{{ $affiliate['hero']['subheadline'] ?? 'Premium VTU & Digital Services Platform' }}">
        <meta name="keywords" content="VTU, airtime, data, electricity, cable TV, reseller, API, Nigeria">

        {{-- Open Graph --}}
        <meta property="og:title" content="{{ $affiliate['name'] ?? config('app.name') }}">
        <meta property="og:description" content="{{ $affiliate['hero']['subheadline'] ?? '' }}">
        <meta property="og:type" content="website">

        {{-- Favicon --}}
        <link rel="icon" href="{{ $affiliate['favicon'] ?? '/favicon.ico' }}">

        {{-- Google Fonts --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

        {{-- Dynamic CSS Variables for affiliate branding --}}
        <style>
            :root {
                --brand-primary:   {{ $affiliate['colors']['primary']   ?? '#4F46E5' }};
                --brand-secondary: {{ $affiliate['colors']['secondary'] ?? '#7C3AED' }};
                --brand-accent:    {{ $affiliate['colors']['accent']    ?? '#06B6D4' }};

                /* Generate CSS custom properties for Tailwind brand colors */
                --brand-50:  color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 10%, white);
                --brand-100: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 20%, white);
                --brand-200: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 35%, white);
                --brand-300: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 50%, white);
                --brand-400: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 70%, white);
                --brand-500: {{ $affiliate['colors']['primary'] ?? '#4F46E5' }};
                --brand-600: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 85%, black);
                --brand-700: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 70%, black);
                --brand-800: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 55%, black);
                --brand-900: color-mix(in srgb, {{ $affiliate['colors']['primary'] ?? '#4F46E5' }} 40%, black);

                --accent-50:  color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 10%, white);
                --accent-100: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 20%, white);
                --accent-200: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 35%, white);
                --accent-300: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 50%, white);
                --accent-400: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 70%, white);
                --accent-500: {{ $affiliate['colors']['accent'] ?? '#06B6D4' }};
                --accent-600: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 85%, black);
                --accent-700: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 70%, black);
                --accent-800: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 55%, black);
                --accent-900: color-mix(in srgb, {{ $affiliate['colors']['accent'] ?? '#06B6D4' }} 40%, black);
            }
        </style>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        @inertia
    </body>
</html>
