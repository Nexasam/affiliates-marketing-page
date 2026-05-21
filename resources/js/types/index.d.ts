export interface AffiliateColors {
    primary: string;
    secondary: string;
    accent: string;
}

export interface AffiliateHero {
    headline: string;
    subheadline: string;
    cta_primary: string;
    cta_secondary: string;
}

export interface AffiliateContact {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
}

export interface AffiliateSocial {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    telegram?: string;
}

export interface Testimonial {
    name: string;
    company: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
}

export interface AffiliateConfig {
    name: string;
    tagline: string;
    logo: string;
    favicon: string;
    colors: AffiliateColors;
    hero: AffiliateHero;
    contact: AffiliateContact;
    social: AffiliateSocial;
    testimonials: Testimonial[];
}

export interface Stat {
    label: string;
    value: string;
    icon: string;
}

export interface PricingFeature {
    text: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    badge: string | null;
    features: string[];
    excluded: string[];
    cta: string;
    highlighted: boolean;
}

export interface PageProps {
    affiliate: AffiliateConfig;
    stats: Stat[];
    plans: PricingPlan[];
    flash: {
        success?: string;
        error?: string;
    };
    auth: {
        user: null | { id: number; name: string; email: string };
    };
}
