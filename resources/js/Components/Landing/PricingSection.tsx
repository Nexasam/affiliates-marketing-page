import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '₦0',
        description: 'Launch your reseller platform with no setup fees and access to core VTU services.',
        features: ['Instant airtime & data topup', 'Basic wallet management', '24/7 email support', 'Affordable reseller margins'],
        badge: 'Best for new resellers',
    },
    {
        name: 'Growth',
        price: '₦49,000',
        description: 'Scale with premium features, branded storefronts, and API access for developers.',
        features: ['API integration', 'Branded reseller dashboard', 'Priority support', 'Automated webhooks'],
        badge: 'Most popular',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored plans for businesses that need advanced controls and dedicated onboarding.',
        features: ['Custom domain setup', 'Dedicated account manager', 'White-label branding', 'Custom pricing & reporting'],
        badge: 'For serious businesses',
    },
];

const highlights = [
    'Market-ready VTU platform',
    'Reliable delivery across MTN, Airtel, Glo, 9mobile',
    'Simple onboarding in under 5 minutes',
    'Transparent pricing and no hidden fees',
];

export default function PricingSection() {
    return (
        <section id="pricing" className="section-padding bg-gray-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_15%,transparent)] px-4 py-1.5 text-sm font-semibold text-[var(--brand-primary)] mb-4">
                        Pricing Plans
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                        Simple pricing built for fast growth.
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Choose the package that fits your reseller business. No confusing tiers — just the tools you need to win.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`rounded-[2rem] border p-8 shadow-sm ${plan.name === 'Growth' ? 'border-[var(--brand-primary)] bg-gray-900' : 'border-gray-800 bg-gray-950/95'}`}
                        >
                            <div className="mb-6 flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">{plan.name}</p>
                                    <p className="mt-2 text-xs text-gray-500">{plan.badge}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-display font-extrabold text-white">{plan.price}</p>
                                    <p className="text-sm text-gray-400">per month</p>
                                </div>
                            </div>
                            <p className="mb-8 text-gray-300 leading-relaxed">{plan.description}</p>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="mt-1 w-5 h-5 text-[var(--brand-primary)]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-full bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:shadow-lg">
                                Start Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-14 rounded-[2rem] border border-gray-800 bg-gray-950/95 p-8"
                >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-primary)]">Why choose us</p>
                            <h3 className="mt-4 text-2xl font-display font-bold text-white">Everything you need to launch and scale your digital services business.</h3>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-3xl bg-gray-900 p-4">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-primary)] mt-1" />
                                    <p className="text-sm text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                        >
                            Speak with Sales
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
