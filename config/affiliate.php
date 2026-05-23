<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Affiliate Domain Configurations
    |--------------------------------------------------------------------------
    |
    | Each affiliate domain can have its own branding, colors, hero text,
    | testimonials, and contact details while sharing the same backend.
    |
    */

    'domains' => [
        'jamessub.com' => [
            'name'        => 'JamesSub',
            'tagline'     => 'Your Trusted VTU Partner',
            'logo'        => '/images/affiliates/jamessub-logo.svg',
            'favicon'     => '/images/affiliates/jamessub-favicon.ico',
            'colors' => [
                'primary'   => '#4F46E5', // indigo-600
                'secondary' => '#7C3AED', // violet-600
                'accent'    => '#06B6D4', // cyan-500
            ],
            'hero' => [
                'headline'    => 'Automate Your VTU Business with Powerful APIs & Smart Reselling',
                'subheadline' => 'Buy airtime, data, pay bills and earn profit automatically. Join thousands of resellers making money daily with JamesSub.',
                'cta_primary' => 'Get Started Free',
                'cta_secondary' => 'Speak with Sales',
            ],
            'contact' => [
                'email'     => 'support@jamessub.com',
                'phone'     => '+234 800 000 0001',
                'whatsapp'  => '+2348000000001',
                'address'   => 'Lagos, Nigeria',
            ],
            'social' => [
                'twitter'   => 'https://twitter.com/jamessub',
                'instagram' => 'https://instagram.com/jamessub',
                'facebook'  => 'https://facebook.com/jamessub',
                'telegram'  => 'https://t.me/jamessub',
            ],
            'testimonials' => [
                [
                    'name'    => 'Adebayo Okafor',
                    'company' => 'TechResell NG',
                    'role'    => 'VTU Reseller',
                    'quote'   => 'JamesSub has completely transformed my reselling business. The API is rock-solid and delivery is instant. I make over ₦200k monthly!',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=adebayo',
                ],
                [
                    'name'    => 'Chioma Nwosu',
                    'company' => 'DataHub Nigeria',
                    'role'    => 'Business Owner',
                    'quote'   => 'The cheapest SME data rates I have found anywhere. My customers love the instant delivery and I love the profit margins.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=chioma',
                ],
                [
                    'name'    => 'Emeka Eze',
                    'company' => 'QuickBills Pro',
                    'role'    => 'Developer',
                    'quote'   => 'Integrated the API in under 2 hours. Documentation is clear, uptime is 99.9%, and the support team is always available.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=emeka',
                ],
            ],
        ],

        'kunledata.com' => [
            'name'        => 'KunleData',
            'tagline'     => 'Fast, Cheap & Reliable Data Services',
            'logo'        => '/images/affiliates/kunledata-logo.svg',
            'favicon'     => '/images/affiliates/kunledata-favicon.ico',
            'colors' => [
                'primary'   => '#0EA5E9', // sky-500
                'secondary' => '#6366F1', // indigo-500
                'accent'    => '#10B981', // emerald-500
            ],
            'hero' => [
                'headline'    => 'Nigeria\'s Fastest Data & Airtime Reselling Platform',
                'subheadline' => 'Get the cheapest SME data bundles, instant airtime topup, and automated bill payments. Start earning today with KunleData.',
                'cta_primary' => 'Start Reselling',
                'cta_secondary' => 'Talk to Us',
            ],
            'contact' => [
                'email'     => 'hello@kunledata.com',
                'phone'     => '+234 800 000 0002',
                'whatsapp'  => '+2348000000002',
                'address'   => 'Abuja, Nigeria',
            ],
            'social' => [
                'twitter'   => 'https://twitter.com/kunledata',
                'instagram' => 'https://instagram.com/kunledata',
                'facebook'  => 'https://facebook.com/kunledata',
                'telegram'  => 'https://t.me/kunledata',
            ],
            'testimonials' => [
                [
                    'name'    => 'Fatima Aliyu',
                    'company' => 'Fatima Ventures',
                    'role'    => 'Data Reseller',
                    'quote'   => 'KunleData gives me the best rates in the market. My business has grown 3x since I switched. Highly recommended!',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatima',
                ],
                [
                    'name'    => 'Tunde Bakare',
                    'company' => 'SwiftConnect',
                    'role'    => 'Telecom Reseller',
                    'quote'   => 'The wallet system is seamless and the transaction history helps me track every kobo. Best platform for serious resellers.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=tunde',
                ],
                [
                    'name'    => 'Ngozi Obi',
                    'company' => 'DataQueen NG',
                    'role'    => 'Entrepreneur',
                    'quote'   => 'I started with ₦5,000 and now I process over ₦50k daily. KunleData made it possible with their amazing platform.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=ngozi',
                ],
            ],
        ],

        'abbeydata.com' => [
            'name'        => 'AbbeyData',
            'tagline'     => 'Premium VTU Services for Smart Entrepreneurs',
            'logo'        => '/images/affiliates/abbeydata-logo.svg',
            'favicon'     => '/images/affiliates/abbeydata-favicon.ico',
            'colors' => [
                'primary'   => '#7C3AED', // violet-600
                'secondary' => '#EC4899', // pink-500
                'accent'    => '#F59E0B', // amber-500
            ],
            'hero' => [
                'headline'    => 'Power Your Business with Premium VTU & API Solutions',
                'subheadline' => 'From airtime to electricity bills, AbbeyData delivers instant, reliable digital services with the best profit margins for resellers.',
                'cta_primary' => 'Join AbbeyData',
                'cta_secondary' => 'Book a Demo',
            ],
            'contact' => [
                'email'     => 'info@abbeydata.com',
                'phone'     => '+234 800 000 0003',
                'whatsapp'  => '+2348000000003',
                'address'   => 'Port Harcourt, Nigeria',
            ],
            'social' => [
                'twitter'   => 'https://twitter.com/abbeydata',
                'instagram' => 'https://instagram.com/abbeydata',
                'facebook'  => 'https://facebook.com/abbeydata',
                'telegram'  => 'https://t.me/abbeydata',
            ],
            'testimonials' => [
                [
                    'name'    => 'Samuel Okonkwo',
                    'company' => 'SamTech Solutions',
                    'role'    => 'API Developer',
                    'quote'   => 'AbbeyData\'s API documentation is the best I have worked with. Integration was smooth and the uptime is phenomenal.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=samuel',
                ],
                [
                    'name'    => 'Blessing Udo',
                    'company' => 'BlessedData Hub',
                    'role'    => 'Reseller',
                    'quote'   => 'The affiliate branding feature is amazing. I have my own branded platform powered by AbbeyData. My customers trust my brand.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=blessing',
                ],
                [
                    'name'    => 'Chukwudi Nnamdi',
                    'company' => 'ChuData Express',
                    'role'    => 'Business Owner',
                    'quote'   => 'Airtime to cash conversion is instant and the rates are unbeatable. AbbeyData is my go-to platform for everything VTU.',
                    'rating'  => 5,
                    'avatar'  => 'https://api.dicebear.com/7.x/avataaars/svg?seed=chukwudi',
                ],
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Default / Fallback Configuration
    |--------------------------------------------------------------------------
    */
    'default' => [
        'name'        => 'Nexasam Technologies',
        'tagline'     => 'Powering Nigeria\'s Digital Economy',
        'logo'        => '/images/nexasam-logo.svg',
        'favicon'     => '/images/nexasam-favicon.ico',
        'colors' => [
            'primary'   => '#4F46E5',
            'secondary' => '#7C3AED',
            'accent'    => '#06B6D4',
        ],
        'hero' => [
            'headline'    => 'Automate Your VTU Business with Powerful APIs & Smart Reselling',
            'subheadline' => 'Buy airtime, data, pay bills and earn profit automatically. The most reliable VTU platform in Nigeria.',
            'cta_primary' => 'Get Started Free',
            'cta_secondary' => 'Speak with Sales',
        ],
        'contact' => [
            'email'     => 'support@nexasam.com',
            'phone'     => '+234 800 000 0000',
            'whatsapp'  => '+2348000000000',
            'address'   => 'Lagos, Nigeria',
        ],
        'social' => [
            'twitter'   => 'https://twitter.com/nexasam',
            'instagram' => 'https://instagram.com/nexasam',
            'facebook'  => 'https://facebook.com/nexasam',
            'telegram'  => 'https://t.me/nexasam',
        ],
        'testimonials' => [],
    ],

    /*
    |--------------------------------------------------------------------------
    | Global Statistics (shared across all affiliates)
    |--------------------------------------------------------------------------
    */
    'stats' => [
        ['label' => 'Active Users',          'value' => '5,000+',  'icon' => 'users'],
        ['label' => 'Transactions Daily',    'value' => '50k+',    'icon' => 'zap'],
        ['label' => 'API Uptime',            'value' => '99.9%',    'icon' => 'shield'],
        ['label' => 'Avg Delivery Time',     'value' => '< 3 Sec',  'icon' => 'clock'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Pricing Plans (shared across all affiliates)
    |--------------------------------------------------------------------------
    */
    'plans' => [
        [
            'name'        => 'Starter',
            'price'       => '0',
            'period'      => 'Free Forever',
            'description' => 'Perfect for individuals getting started with VTU reselling.',
            'badge'       => null,
            'features' => [
                'Airtime & Data Purchase',
                'Electricity & Cable Bills',
                'Basic Wallet System',
                'Transaction History',
                'Email Support',
                'Up to ₦100k/month volume',
            ],
            'excluded' => [
                'API Access',
                'Affiliate Branding',
                'Priority Support',
                'Analytics Dashboard',
            ],
            'cta'         => 'Get Started Free',
            'highlighted' => false,
        ],
        [
            'name'        => 'Professional',
            'price'       => '5,000',
            'period'      => 'per month',
            'description' => 'For serious resellers who want API access and better margins.',
            'badge'       => 'Most Popular',
            'features' => [
                'Everything in Starter',
                'Full API Access',
                'Better Profit Margins',
                'Airtime to Cash',
                'Analytics Dashboard',
                'Priority Email & Chat Support',
                'Up to ₦5M/month volume',
                'Webhook Notifications',
            ],
            'excluded' => [
                'Affiliate Branding',
                'Dedicated Account Manager',
            ],
            'cta'         => 'Start Free Trial',
            'highlighted' => true,
        ],
        [
            'name'        => 'Enterprise',
            'price'       => 'Custom',
            'period'      => 'contact us',
            'description' => 'For businesses that need white-label branding and maximum volume.',
            'badge'       => 'Best Value',
            'features' => [
                'Everything in Professional',
                'Affiliate / White-label Branding',
                'Custom Domain Support',
                'Dedicated Account Manager',
                'SLA Guarantee',
                'Unlimited Volume',
                'Custom API Rate Limits',
                'Onboarding & Training',
                'Phone & WhatsApp Support',
            ],
            'excluded' => [],
            'cta'         => 'Contact Sales',
            'highlighted' => false,
        ],
    ],
];
