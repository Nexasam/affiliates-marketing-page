import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Shield, Clock } from 'lucide-react';
import { Stat } from '@/types';

interface TrustSectionProps {
    stats: Stat[];
}

const iconMap: Record<string, React.ElementType> = {
    users: Users,
    zap: Zap,
    shield: Shield,
    clock: Clock,
};

const partnerLogos = [
    { name: 'MTN', abbr: 'MTN', color: '#FFCC00', bg: '#1a1a1a' },
    { name: 'Airtel', abbr: 'AIR', color: '#FF0000', bg: '#fff' },
    { name: 'Glo', abbr: 'GLO', color: '#00A651', bg: '#fff' },
    { name: '9mobile', abbr: '9MB', color: '#006633', bg: '#fff' },
    { name: 'DSTV', abbr: 'DST', color: '#0066CC', bg: '#fff' },
    { name: 'GOTV', abbr: 'GOT', color: '#FF6600', bg: '#fff' },
    { name: 'EKEDC', abbr: 'EKE', color: '#003366', bg: '#fff' },
    { name: 'IKEDC', abbr: 'IKE', color: '#CC0000', bg: '#fff' },
];

export default function TrustSection({ stats }: TrustSectionProps) {
    return (
        <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Partner logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">
                        Trusted by Nigeria's top networks & service providers
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        {partnerLogos.map(({ name, abbr, color }, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                className="flex items-center justify-center w-20 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="font-display font-bold text-sm" style={{ color }}>
                                    {abbr}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map(({ label, value, icon }, i) => {
                        const Icon = iconMap[icon] ?? Zap;
                        return (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="relative group"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                                        style={{ background: 'color-mix(in srgb, var(--brand-primary) 10%, transparent)' }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
                                    </div>

                                    {/* Value */}
                                    <div className="font-display font-extrabold text-3xl lg:text-4xl gradient-text mb-1">
                                        {value}
                                    </div>

                                    {/* Label */}
                                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {label}
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{ boxShadow: '0 0 30px color-mix(in srgb, var(--brand-primary) 15%, transparent)' }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
