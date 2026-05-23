import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Code2, Wallet, CheckCircle2, ArrowRight } from 'lucide-react';
import { AffiliateConfig } from '@/types';

interface AboutSectionProps {
    affiliate: AffiliateConfig;
}

const capabilities = [
    {
        icon: Zap,
        title: 'Turnkey Affiliate System',
        description: 'Launch reseller programs and track commissions instantly. Everything you need to scale.',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        icon: Globe,
        title: 'Multi-Product Commerce',
        description: 'Data, airtime, cable, electricity, and virtual accounts in one unified platform.',
        color: 'from-cyan-500 to-blue-500',
    },
    {
        icon: Code2,
        title: 'Flexible Pricing Engine',
        description: 'Auto-generate product plans, profit rules, and custom pricing in seconds.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Wallet,
        title: 'Secure Payments & Wallets',
        description: 'PIN-protected transactions, virtual accounts, and complete admin controls.',
        color: 'from-emerald-500 to-teal-500',
    },
];

const highlights = [
    'Instant delivery for all services',
    'Competitive profit margins for resellers',
    'White-label affiliate branding',
    'Real-time transaction monitoring',
    'Automated webhook notifications',
    'Multi-network support (MTN, Airtel, Glo, 9mobile)',
];

export default function AboutSection({ affiliate }: AboutSectionProps) {
    return (
        <section id="about" className="section-padding bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                        style={{
                            background: 'color-mix(in srgb, var(--brand-primary) 8%, transparent)',
                            color: 'var(--brand-primary)',
                        }}
                    >
                        About {affiliate.name}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        A Powerful Platform{' '}
                        <span className="gradient-text">Built for Affiliates</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Sell airtime, data, cable & utilities — manage wallets, virtual accounts, and commissions with one comprehensive dashboard.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Capability cards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {capabilities.map(({ icon: Icon, title, description, color }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 hover:border-[var(--brand-primary)]/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                            Why thousands of resellers choose {affiliate.name}
                        </h3>

                        <div className="space-y-3 mb-8">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--brand-accent)' }} />
                                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary group"
                            >
                                Start for Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-secondary"
                            >
                                Explore Features
                            </button>
                        </div>

                        {/* Tagline card */}
                        <div
                            className="mt-8 p-5 rounded-2xl border"
                            style={{
                                background: 'color-mix(in srgb, var(--brand-primary) 5%, transparent)',
                                borderColor: 'color-mix(in srgb, var(--brand-primary) 20%, transparent)',
                            }}
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                "We built {affiliate.name} to give every Nigerian entrepreneur access to the same powerful VTU infrastructure that big telecoms use — at a fraction of the cost."
                            </p>
                            <p className="text-sm font-semibold mt-2" style={{ color: 'var(--brand-primary)' }}>
                                — {affiliate.name} Team
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
