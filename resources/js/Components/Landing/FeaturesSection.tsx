import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Smartphone, Wifi, ArrowRightLeft, Zap, Tv,
    Wallet, Code2, Globe, History, Bot, Lock, BarChart3
} from 'lucide-react';

const features = [
    {
        icon: Wallet,
        title: 'Dashboard',
        description: 'Real-time balances, transactions and comprehensive user management in one interface.',
        color: 'from-rose-500 to-red-500',
        tag: 'Core',
    },
    {
        icon: Code2,
        title: 'Billing & Wallets',
        description: 'Funding promos, wallet crediting, and manual crediting tools for flexible operations.',
        color: 'from-violet-500 to-purple-600',
        tag: 'Core',
    },
    {
        icon: Smartphone,
        title: 'Products & Plans',
        description: 'Bulk plan upload, unique plan generation, and multiple price tiers in one system.',
        color: 'from-blue-500 to-indigo-600',
        tag: 'Core',
    },
    {
        icon: History,
        title: 'Transactions',
        description: 'Reprocess, refund, lock for manual review with detailed audit logs and full traceability.',
        color: 'from-slate-500 to-gray-600',
        tag: 'Core',
    },
    {
        icon: Lock,
        title: 'Security',
        description: '2FA, transaction PINs, and role-based admin access control for complete protection.',
        color: 'from-red-500 to-rose-600',
        tag: 'Security',
    },
    {
        icon: Globe,
        title: 'Localization',
        description: 'Multi-language support (EN/YO/IG/HA) to serve diverse affiliate audiences.',
        color: 'from-sky-500 to-cyan-500',
        tag: 'Pro',
    },
    {
        icon: Code2,
        title: 'APIs & Webhooks',
        description: 'Developer-ready endpoints with comprehensive webhooks for seamless integrations.',
        color: 'from-purple-500 to-pink-500',
        tag: 'Developer',
    },
    {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        description: 'Real-time insights into sales, revenue, and customer behavior for data-driven decisions.',
        color: 'from-indigo-500 to-blue-600',
        tag: 'Pro',
    },
];

const tagColors: Record<string, string> = {
    Core: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    Developer: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    Security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    Pro: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
};

export default function FeaturesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="features" className="section-padding bg-gray-50 dark:bg-gray-900/30">
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
                        Platform Features
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Everything You Need to{' '}
                        <span className="gradient-text">Scale Your Business</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Dashboard, billing, products, transactions, security, localization, APIs and more — all in one platform.
                    </p>
                </motion.div>

                {/* Feature grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {features.map(({ icon: Icon, title, description, color, tag }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-[var(--brand-primary)]/40 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-default"
                        >
                            {/* Tag */}
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[tag] ?? tagColors.Core}`}>
                                    {tag}
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 text-sm">
                                {title}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                {description}
                            </p>

                            {/* Hover glow */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ boxShadow: '0 0 25px color-mix(in srgb, var(--brand-primary) 12%, transparent)' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
