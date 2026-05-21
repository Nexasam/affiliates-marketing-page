import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: UserPlus,
        title: 'Create Your Account',
        description: 'Sign up in under 2 minutes. No paperwork, no waiting. Just your email and you\'re in.',
        color: 'from-blue-500 to-indigo-600',
        details: ['Free registration', 'Instant activation', 'No KYC for basic use'],
    },
    {
        step: '02',
        icon: Wallet,
        title: 'Fund Your Wallet',
        description: 'Add funds via bank transfer, card payment, or USSD. Minimum deposit of ₦100.',
        color: 'from-cyan-500 to-blue-500',
        details: ['Bank transfer', 'Card payment', 'USSD funding'],
    },
    {
        step: '03',
        icon: ShoppingCart,
        title: 'Buy Services or Connect API',
        description: 'Purchase airtime, data, bills directly or integrate our API into your own application.',
        color: 'from-purple-500 to-pink-500',
        details: ['Dashboard purchase', 'REST API access', 'Webhook support'],
    },
    {
        step: '04',
        icon: TrendingUp,
        title: 'Earn Profit Automatically',
        description: 'Set your reseller prices and earn the difference on every transaction. Withdraw anytime.',
        color: 'from-emerald-500 to-teal-500',
        details: ['Automatic profit', 'Daily withdrawals', 'Real-time analytics'],
    },
];

export default function HowItWorks() {
    return (
        <section className="section-padding bg-white dark:bg-gray-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
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
                        How It Works
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Start Earning in{' '}
                        <span className="gradient-text">4 Simple Steps</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Getting started is fast and easy. No technical knowledge required to begin reselling.
                    </p>
                </motion.div>

                {/* Steps — desktop timeline */}
                <div className="hidden lg:block relative">
                    {/* Connecting line */}
                    <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

                    <div className="grid grid-cols-4 gap-8">
                        {steps.map(({ step, icon: Icon, title, description, color, details }, i) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="relative text-center"
                            >
                                {/* Step circle */}
                                <div className="relative inline-flex mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mx-auto`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-950 border-2 flex items-center justify-center"
                                        style={{ borderColor: 'var(--brand-primary)' }}>
                                        <span className="text-xs font-bold" style={{ color: 'var(--brand-primary)' }}>{i + 1}</span>
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-3 text-lg">{title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{description}</p>

                                <ul className="space-y-1.5">
                                    {details.map((d) => (
                                        <li key={d} className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand-accent)' }} />
                                            {d}
                                        </li>
                                    ))}
                                </ul>

                                {/* Arrow between steps */}
                                {i < steps.length - 1 && (
                                    <div className="absolute top-8 -right-4 z-10">
                                        <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Steps — mobile vertical */}
                <div className="lg:hidden space-y-6">
                    {steps.map(({ step, icon: Icon, title, description, color, details }, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex gap-5"
                        >
                            {/* Left: icon + line */}
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent" />
                                )}
                            </div>

                            {/* Right: content */}
                            <div className="pb-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold" style={{ color: 'var(--brand-primary)' }}>Step {i + 1}</span>
                                </div>
                                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {details.map((d) => (
                                        <span key={d} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-14"
                >
                    <button
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary text-base px-8 py-4 group"
                    >
                        Get Started Now — It's Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
