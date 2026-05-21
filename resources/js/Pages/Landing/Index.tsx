import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import LandingLayout from '@/Layouts/LandingLayout';
import Hero from '@/Components/Landing/Hero';
import TrustSection from '@/Components/Landing/TrustSection';
import AboutSection from '@/Components/Landing/AboutSection';
import FeaturesSection from '@/Components/Landing/FeaturesSection';
import HowItWorks from '@/Components/Landing/HowItWorks';
import PricingSection from '@/Components/Landing/PricingSection';
import TestimonialsSection from '@/Components/Landing/TestimonialsSection';
import ContactSection from '@/Components/Landing/ContactSection';

export default function LandingIndex() {
    const { affiliate, stats, flash } = usePage<PageProps>().props;

    return (
        <LandingLayout>
            <Head title={`${affiliate.name} — ${affiliate.tagline}`}>
                <meta name="description" content={affiliate.hero.subheadline} />
                <meta property="og:title" content={affiliate.name} />
                <meta property="og:description" content={affiliate.hero.subheadline} />
            </Head>

            <Hero affiliate={affiliate} />
            <TrustSection stats={stats} />
            <AboutSection affiliate={affiliate} />
            <FeaturesSection />
            <HowItWorks />
            <PricingSection />
            <TestimonialsSection testimonials={affiliate.testimonials} brandName={affiliate.name} />
            <ContactSection affiliate={affiliate} flash={flash} />
        </LandingLayout>
    );
}
