import React from 'react';
import { motion } from 'framer-motion';
import {
    Smartphone, Wifi, Tv, Zap, ArrowRightLeft,
    ArrowRight, Play, CheckCircle2, TrendingUp, Shield
} from 'lucide-react';
import { AffiliateConfig } from '@/types';

interface HeroProps {
    affiliate: AffiliateConfig;
}

const floatingCards = [
    { icon: Smartphone, label: 'Airtime', value: '₦500', color: 'from-blue-500 to-indigo-600', delay: 0 },
    { icon: Wifi, label: 'Data', value: '10GB', color: 'from-cyan-500 to-blue-500', delay: 0.3 },
    { icon: Tv, label: 'Cable TV', value: 'DStv', color: 'from-purple-500 to-pink-500', delay: 0.6 },
    { icon: Zap, label: 'Electricity', value: 'EKEDC', color: 'from-amber-500 to-orange-500', delay: 0.9 },
    { icon: ArrowRightLeft, label: 'Airtime→Cash', value: '95%', color: 'from-emerald-500 to-teal-500', delay: 1.2 },
];

const trustBadges = [
    { icon: CheckCircle2, text: 'Instant Delivery' },
    { icon: Shield, text: '99.9% Uptime' },
    { icon: TrendingUp, text: 'Best Rates' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero({ affiliate }: HeroProps) {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 pt-20"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 hero-gradient pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

            {/* Animated blobs */}
            <div
                className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'var(--brand-primary)' }}
            />
            <div
                className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
                style={{ background: 'var(--brand-accent)' }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
                                style={{
                                    background: 'color-mix(in srgb, var(--brand-primary) 8%, transparent)',
                                    borderColor: 'color-mix(in srgb, var(--brand-primary) 25%, transparent)',
                                    color: 'var(--brand-primary)',
                                }}
                            >
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--brand-primary)' }} />
                                Turnkey Affiliate Platform
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6 text-balance"
                        >
                            {affiliate.hero.headline.split(' ').map((word, i) => {
                                const highlight = ['Powerful', 'Smart', 'APIs', 'Automate', 'Fast', 'Premium', 'Fastest'].includes(word.replace(/[^a-zA-Z]/g, ''));
                                return highlight ? (
                                    <span key={i} className="gradient-text">{word} </span>
                                ) : (
                                    <span key={i}>{word} </span>
                                );
                            })}
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            {affiliate.hero.subheadline}
                        </motion.p>

                        {/* Trust badges */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                            {trustBadges.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                    <Icon className="w-4 h-4" style={{ color: 'var(--brand-accent)' }} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => scrollTo('pricing')}
                                className="btn-primary text-base px-8 py-4 group"
                            >
                                {affiliate.hero.cta_primary}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollTo('contact')}
                                className="btn-secondary text-base px-8 py-4 group"
                            >
                                <Play className="w-5 h-5" />
                                {affiliate.hero.cta_secondary}
                            </button>
                        </motion.div>

                        {/* Social proof numbers */}
                        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
                            {[
                                { value: '5k+', label: 'Active Users' },
                                { value: '50k+', label: 'Daily Transactions' },
                                { value: '99.9%', label: 'Uptime' },
                            ].map(({ value, label }) => (
                                <div key={label} className="text-center lg:text-left">
                                    <div className="font-display font-bold text-2xl text-gray-900 dark:text-white gradient-text">{value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-500">{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="relative hidden lg:block"
                    >
                        {/* Main dashboard card */}
                        <div className="relative">
                            <div className="glass-card-dark dark:bg-gray-900/80 bg-gray-900/90 rounded-3xl p-6 shadow-2xl border border-gray-700/50">
                                {/* Dashboard header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-gray-400 text-xs">Wallet Balance</p>
                                        <p className="text-white font-display font-bold text-3xl">₦124,500.00</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Mini chart bars */}
                                <div className="flex items-end gap-1.5 h-16 mb-6">
                                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                                            className="flex-1 rounded-t-sm opacity-80"
                                            style={{
                                                background: i === 11
                                                    ? 'var(--brand-accent)'
                                                    : 'color-mix(in srgb, var(--brand-primary) 60%, transparent)',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Recent transactions */}
                                <div className="space-y-3">
                                    {[
                                        { icon: Smartphone, label: 'Airtime - MTN', amount: '-₦500', time: '2s ago', color: 'text-blue-400' },
                                        { icon: Wifi, label: 'Data - Airtel 10GB', amount: '-₦2,500', time: '1m ago', color: 'text-cyan-400' },
                                        { icon: Zap, label: 'EKEDC Token', amount: '-₦5,000', time: '5m ago', color: 'text-amber-400' },
                                    ].map(({ icon: Icon, label, amount, time, color }) => (
                                        <div key={label} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5">
                                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                                <Icon className={`w-4 h-4 ${color}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white text-xs font-medium truncate">{label}</p>
                                                <p className="text-gray-500 text-xs">{time}</p>
                                            </div>
                                            <span className="text-red-400 text-xs font-semibold">{amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating service cards */}
                            {floatingCards.map(({ icon: Icon, label, value, color, delay }, i) => {
                                const positions = [
                                    '-top-6 -left-10',
                                    '-top-4 right-4',
                                    'top-1/3 -right-12',
                                    'bottom-1/4 -left-12',
                                    '-bottom-6 right-8',
                                ];
                                return (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + delay, duration: 0.4 }}
                                        className={`absolute ${positions[i]} float-animation`}
                                        style={{ animationDelay: `${delay}s` }}
                                    >
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2.5 min-w-max">
                                            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">{value}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-400">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-gray-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
