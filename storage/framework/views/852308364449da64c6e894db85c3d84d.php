<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        
        <?php
            $affiliate = \Inertia\Inertia::getShared('affiliate') ?? config('affiliate.default');
        ?>

        <title inertia><?php echo e($affiliate['name'] ?? config('app.name')); ?></title>
        <meta name="description" content="<?php echo e($affiliate['hero']['subheadline'] ?? 'Premium VTU & Digital Services Platform'); ?>">
        <meta name="keywords" content="VTU, airtime, data, electricity, cable TV, reseller, API, Nigeria">

        
        <meta property="og:title" content="<?php echo e($affiliate['name'] ?? config('app.name')); ?>">
        <meta property="og:description" content="<?php echo e($affiliate['hero']['subheadline'] ?? ''); ?>">
        <meta property="og:type" content="website">

        
        <link rel="icon" href="<?php echo e($affiliate['favicon'] ?? '/favicon.ico'); ?>">

        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

        
        <style>
            :root {
                --brand-primary:   <?php echo e($affiliate['colors']['primary']   ?? '#4F46E5'); ?>;
                --brand-secondary: <?php echo e($affiliate['colors']['secondary'] ?? '#7C3AED'); ?>;
                --brand-accent:    <?php echo e($affiliate['colors']['accent']    ?? '#06B6D4'); ?>;

                /* Generate CSS custom properties for Tailwind brand colors */
                --brand-50:  color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 10%, white);
                --brand-100: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 20%, white);
                --brand-200: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 35%, white);
                --brand-300: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 50%, white);
                --brand-400: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 70%, white);
                --brand-500: <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?>;
                --brand-600: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 85%, black);
                --brand-700: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 70%, black);
                --brand-800: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 55%, black);
                --brand-900: color-mix(in srgb, <?php echo e($affiliate['colors']['primary'] ?? '#4F46E5'); ?> 40%, black);

                --accent-50:  color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 10%, white);
                --accent-100: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 20%, white);
                --accent-200: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 35%, white);
                --accent-300: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 50%, white);
                --accent-400: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 70%, white);
                --accent-500: <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?>;
                --accent-600: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 85%, black);
                --accent-700: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 70%, black);
                --accent-800: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 55%, black);
                --accent-900: color-mix(in srgb, <?php echo e($affiliate['colors']['accent'] ?? '#06B6D4'); ?> 40%, black);
            }
        </style>

        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.tsx']); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body class="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } elseif (config('inertia.use_script_element_for_initial_page')) { ?><script data-page="app" type="application/json"><?php echo json_encode($page); ?></script><div id="app"></div><?php } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
</html>
<?php /**PATH C:\Users\USER\afil\resources\views/app.blade.php ENDPATH**/ ?>