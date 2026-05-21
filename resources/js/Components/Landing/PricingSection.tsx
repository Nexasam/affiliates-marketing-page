import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Zap, Tv, Smartphone, ShoppingCart, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServicePlan {
    id: string;
    name: string;
    size?: string;
    validity: string;
    price: number;
    discount?: number;
    network?: string;
    type?: string;
}

// ─── Sample Data ──────────────────────────────────────────────────────────────

const dataPlans: ServicePlan[] = [
    // MTN
    { id: 'd1',  network: 'MTN', name: '500MB MTN SME (WEEKLY)',       size: '500MB',  validity: '7 days',  price: 650  },
    { id: 'd2',  network: 'MTN', name: '1GB MTN DASHMB (WEEKLY)',      size: '1GB',    validity: '7 days',  price: 600  },
    { id: 'd3',  network: 'MTN', name: '1GB MTN DASHMB (MONTHLY)',     size: '1GB',    validity: '30 days', price: 710  },
    { id: 'd4',  network: 'MTN', name: '2GB MTN DASHMB (30 DAYS)',     size: '2GB',    validity: '30 days', price: 1550 },
    { id: 'd5',  network: 'MTN', name: '3GB MTN DASHMB (30 DAYS)',     size: '3GB',    validity: '30 days', price: 2070 },
    { id: 'd6',  network: 'MTN', name: '5GB MTN DASHMB (30 DAYS)',     size: '5GB',    validity: '30 days', price: 2350 },
    { id: 'd7',  network: 'MTN', name: '10GB MTN DASHMB (MONTHLY)',    size: '10GB',   validity: '30 days', price: 4750 },
    { id: 'd8',  network: 'MTN', name: '2GB MTN GIFTING (MONTHLY)',    size: '2GB',    validity: '30 days', price: 1350 },
    { id: 'd9',  network: 'MTN', name: '5GB MTN GIFTING (30 DAYS)',    size: '5GB',    validity: '30 days', price: 2950 },
    { id: 'd10', network: 'MTN', name: '10GB MTN GIFTING (30 DAYS)',   size: '10GB',   validity: '30 days', price: 4660 },
    // Airtel
    { id: 'd11', network: 'AIRTEL', name: '500MB AIRTEL CG (MONTHLY)',    size: '500MB',  validity: '30 days', price: 650  },
    { id: 'd12', network: 'AIRTEL', name: '1GB AIRTEL CG (WEEKLY)',       size: '1GB',    validity: '7 days',  price: 950  },
    { id: 'd13', network: 'AIRTEL', name: '2GB AIRTEL CG (30 DAYS)',      size: '2GB',    validity: '30 days', price: 2050 },
    { id: 'd14', network: 'AIRTEL', name: '5GB AIRTEL CG (30 DAYS)',      size: '5GB',    validity: '30 days', price: 4900 },
    { id: 'd15', network: 'AIRTEL', name: '7GB AIRTEL AWOOF (7DAYS)',     size: '7GB',    validity: '7 days',  price: 2300 },
    { id: 'd16', network: 'AIRTEL', name: '10GB AIRTEL AWOOF (30 DAYS)',  size: '10GB',   validity: '30 days', price: 3550 },
    { id: 'd17', network: 'AIRTEL', name: '13GB AIRTEL AWOOF (30DAYS)',   size: '13GB',   validity: '30 days', price: 5300 },
    { id: 'd18', network: 'AIRTEL', name: '2GB AIRTEL GIFTING (MONTHLY)', size: '2GB',    validity: '30 days', price: 1650 },
    // Glo
    { id: 'd19', network: 'GLO', name: '500MB GLO CG (30 DAYS)',      size: '500MB',  validity: '30 days', price: 318  },
    { id: 'd20', network: 'GLO', name: '1GB GLO CG (MONTHLY)',        size: '1GB',    validity: '30 days', price: 515  },
    { id: 'd21', network: 'GLO', name: '2GB GLO CG (MONTHLY)',        size: '2GB',    validity: '30 days', price: 910  },
    { id: 'd22', network: 'GLO', name: '3GB GLO CG (30 DAYS)',        size: '3GB',    validity: '30 days', price: 1325 },
    { id: 'd23', network: 'GLO', name: '5GB GLO CG (30 DAYS)',        size: '5GB',    validity: '30 days', price: 2125 },
    { id: 'd24', network: 'GLO', name: '10GB GLO CG (30 DAYS)',       size: '10GB',   validity: '30 days', price: 6000 },
    { id: 'd25', network: 'GLO', name: '1GB GLO AWOOF (7 DAYS)',      size: '1GB',    validity: '7 days',  price: 430  },
    { id: 'd26', network: 'GLO', name: '3GB GLO AWOOF (7 DAYS)',      size: '3GB',    validity: '7 days',  price: 1120 },
    { id: 'd27', network: 'GLO', name: '5GB GLO AWOOF (7 DAYS)',      size: '5GB',    validity: '7 days',  price: 1750 },
    // 9mobile
    { id: 'd28', network: '9MOBILE', name: '1GB 9MOBILE (MONTHLY)',   size: '1GB',    validity: '30 days', price: 600  },
    { id: 'd29', network: '9MOBILE', name: '2GB 9MOBILE (MONTHLY)',   size: '2GB',    validity: '30 days', price: 1100 },
    { id: 'd30', network: '9MOBILE', name: '5GB 9MOBILE (MONTHLY)',   size: '5GB',    validity: '30 days', price: 2500 },
];

const electricityPlans: ServicePlan[] = [
    { id: 'e1', type: 'PREPAID', name: 'PREPAID IBADAN',       validity: 'Instant', price: 0, discount: 1 },
    { id: 'e2', type: 'PREPAID', name: 'PREPAID PORT HARCOURT',validity: 'Instant', price: 0, discount: 1 },
    { id: 'e3', type: 'PREPAID', name: 'PREPAID KADUNA',       validity: 'Instant', price: 0, discount: 1 },
    { id: 'e4', type: 'PREPAID', name: 'PREPAID EKO',          validity: 'Instant', price: 0, discount: 1 },
    { id: 'e5', type: 'PREPAID', name: 'PREPAID ENUGU',        validity: 'Instant', price: 0, discount: 1 },
    { id: 'e6', type: 'PREPAID', name: 'PREPAID ABUJA',        validity: 'Instant', price: 0, discount: 1 },
    { id: 'e7', type: 'PREPAID', name: 'PREPAID KANO',         validity: 'Instant', price: 0, discount: 1 },
    { id: 'e8', type: 'PREPAID', name: 'PREPAID IKEJA',        validity: 'Instant', price: 0, discount: 1 },
    { id: 'e9', type: 'POSTPAID', name: 'POSTPAID IBADAN',     validity: 'Instant', price: 0, discount: 1 },
    { id: 'e10', type: 'POSTPAID', name: 'POSTPAID EKO',       validity: 'Instant', price: 0, discount: 1 },
    { id: 'e11', type: 'POSTPAID', name: 'POSTPAID ABUJA',     validity: 'Instant', price: 0, discount: 1 },
    { id: 'e12', type: 'POSTPAID', name: 'POSTPAID IKEJA',     validity: 'Instant', price: 0, discount: 1 },
];

const cablePlans: ServicePlan[] = [
    { id: 'c1',  type: 'DSTV',     name: 'DSTV PADI',          validity: '1 month', price: 2950  },
    { id: 'c2',  type: 'DSTV',     name: 'DSTV YANGA',         validity: '1 month', price: 4615  },
    { id: 'c3',  type: 'DSTV',     name: 'DSTV CONFAM',        validity: '1 month', price: 9325  },
    { id: 'c4',  type: 'DSTV',     name: 'DSTV COMPACT',       validity: '1 month', price: 15700 },
    { id: 'c5',  type: 'DSTV',     name: 'DSTV COMPACT PLUS',  validity: '1 month', price: 25000 },
    { id: 'c6',  type: 'DSTV',     name: 'DSTV PREMIUM',       validity: '1 month', price: 37000 },
    { id: 'c7',  type: 'GOTV',     name: 'GOTV SMALLIE',       validity: '1 month', price: 1575  },
    { id: 'c8',  type: 'GOTV',     name: 'GOTV JINJA',         validity: '1 month', price: 2715  },
    { id: 'c9',  type: 'GOTV',     name: 'GOTV JOLLI',         validity: '1 month', price: 4115  },
    { id: 'c10', type: 'GOTV',     name: 'GOTV MAX',           validity: '1 month', price: 7600  },
    { id: 'c11', type: 'GOTV',     name: 'GOTV SUPA',          validity: '1 month', price: 9600  },
    { id: 'c12', type: 'STARTIMES', name: 'STARTIMES NOVA',    validity: '1 month', price: 1900  },
    { id: 'c13', type: 'STARTIMES', name: 'STARTIMES BASIC',   validity: '1 month', price: 2600  },
    { id: 'c14', type: 'STARTIMES', name: 'STARTIMES SMART',   validity: '1 month', price: 4200  },
    { id: 'c15', type: 'STARTIMES', name: 'STARTIMES CLASSIC', validity: '1 month', price: 6200  },
    { id: 'c16', type: 'STARTIMES', name: 'STARTIMES SUPER',   validity: '1 month', price: 9900  },
];

const airtimePlans: ServicePlan[] = [
    { id: 'a1', network: 'MTN',    name: 'MTN Airtime',    validity: 'Instant', price: 0 },
    { id: 'a2', network: 'AIRTEL', name: 'Airtel Airtime', validity: 'Instant', price: 0 },
    { id: 'a3', network: 'GLO',    name: 'Glo Airtime',    validity: 'Instant', price: 0 },
    { id: 'a4', network: '9MOBILE',name: '9mobile Airtime',validity: 'Instant', price: 0 },
];

// ─── Network colours ──────────────────────────────────────────────────────────

const networkColors: Record<string, { bg: string; text: string; border: string }> = {
    MTN:     { bg: 'bg-yellow-400',  text: 'text-yellow-900', border: 'border-yellow-400' },
    AIRTEL:  { bg: 'bg-red-500',     text: 'text-white',      border: 'border-red-500'    },
    GLO:     { bg: 'bg-green-500',   text: 'text-white',      border: 'border-green-500'  },
    '9MOBILE':{ bg: 'bg-teal-500',   text: 'text-white',      border: 'border-teal-500'   },
    DSTV:    { bg: 'bg-blue-600',    text: 'text-white',      border: 'border-blue-600'   },
    GOTV:    { bg: 'bg-orange-500',  text: 'text-white',      border: 'border-orange-500' },
    STARTIMES:{ bg: 'bg-red-700',    text: 'text-white',      border: 'border-red-700'    },
    PREPAID: { bg: 'bg-indigo-500',  text: 'text-white',      border: 'border-indigo-500' },
    POSTPAID:{ bg: 'bg-purple-500',  text: 'text-white',      border: 'border-purple-500' },
};

// ─── Tabs config ──────────────────────────────────────────────────────────────

const tabs = [
    { id: 'data',      label: 'Data',             icon: Wifi,       plans: dataPlans,        filters: ['ALL', 'MTN', 'AIRTEL', 'GLO', '9MOBILE'] },
    { id: 'utility',   label: 'Utility Bills',    icon: Zap,        plans: electricityPlans, filters: ['ALL', 'PREPAID', 'POSTPAID'] },
    { id: 'cable',     label: 'Cable Subscription', icon: Tv,       plans: cablePlans,       filters: ['ALL', 'DSTV', 'GOTV', 'STARTIMES'] },
    { id: 'airtime',   label: 'Airtime',           icon: Smartphone, plans: airtimePlans,    filters: ['ALL', 'MTN', 'AIRTEL', 'GLO', '9MOBILE'] },
];

// ─── Plan Card ────────────────────────────────────────────────────────────────

function PlanCard({ plan, tabId }: { plan: ServicePlan; tabId: string }) {
    const tag = plan.network ?? plan.type ?? '';
    const colors = networkColors[tag] ?? { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-500' };

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-card-hover transition-shadow overflow-hidden"
        >
            {/* Top colour bar */}
            <div className={`h-1.5 w-full ${colors.bg}`} />

            <div className="p-4">
                {/* Network / type badge */}
                {tag && (
                    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${colors.bg} ${colors.text}`}>
                        {tag}
                    </span>
                )}

                {/* Discount badge */}
                {plan.discount && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full mb-2 ml-1">
                        <Tag className="w-3 h-3" />
                        {plan.discount}% off
                    </span>
                )}

                {/* Plan name */}
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-snug mb-2 line-clamp-2">
                    {plan.name}
                </p>

                {/* Size + validity */}
                {(plan.size || plan.validity) && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                        {plan.size && <span>{plan.size}</span>}
                        {plan.size && plan.validity && <span> • </span>}
                        {plan.validity && <span>{plan.validity}</span>}
                    </p>
                )}

                {/* Price */}
                <div className="mb-3">
                    {plan.price > 0 ? (
                        <span className="font-display font-extrabold text-xl text-gray-900 dark:text-white">
                            ₦{plan.price.toLocaleString()}
                        </span>
                    ) : (
                        <span className="font-display font-extrabold text-xl gradient-text">
                            Any Amount
                        </span>
                    )}
                </div>

                {/* CTA */}
                <button className="w-full py-2 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md flex items-center justify-center gap-1.5 brand-gradient">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Buy Now
                </button>
            </div>
        </motion.div>
    );
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

function PlanGrid({ plans, tabId }: { plans: ServicePlan[]; tabId: string }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {plans.map((plan, i) => (
                <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                >
                    <PlanCard plan={plan} tabId={tabId} />
                </motion.div>
            ))}
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState('data');
    const [activeFilter, setActiveFilter] = useState('ALL');

    const currentTab = tabs.find((t) => t.id === activeTab)!;

    const filteredPlans = activeFilter === 'ALL'
        ? currentTab.plans
        : currentTab.plans.filter((p) => (p.network ?? p.type) === activeFilter);

    // Reset filter when tab changes
    const handleTabChange = (id: string) => {
        setActiveTab(id);
        setActiveFilter('ALL');
    };

    return (
        <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-900/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                        style={{
                            background: 'color-mix(in srgb, var(--brand-primary) 8%, transparent)',
                            color: 'var(--brand-primary)',
                        }}
                    >
                        Our Pricing
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Affordable Plans{' '}
                        <span className="gradient-text">You'll Love</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        The best rates on data, airtime, electricity and cable TV — all in one place.
                    </p>
                </motion.div>

                {/* Tab bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                >
                    {tabs.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => handleTabChange(id)}
                            className={cn(
                                'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                                activeTab === id
                                    ? 'text-white shadow-md'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[var(--brand-primary)]/50'
                            )}
                            style={activeTab === id ? {
                                background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                            } : {}}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </motion.div>

                {/* Filter pills */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab + '-filters'}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap gap-2 mb-6"
                    >
                        {currentTab.filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={cn(
                                    'px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border',
                                    activeFilter === f
                                        ? 'text-white border-transparent'
                                        : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-[var(--brand-primary)]/50'
                                )}
                                style={activeFilter === f ? {
                                    background: networkColors[f]
                                        ? undefined
                                        : 'var(--brand-primary)',
                                    backgroundColor: networkColors[f]
                                        ? (f === 'MTN' ? '#FACC15' : undefined)
                                        : undefined,
                                    ...(networkColors[f] && f !== 'MTN' ? { background: networkColors[f].bg.replace('bg-', '') } : {}),
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                } : {}}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Slider */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab + activeFilter}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredPlans.length > 0 ? (
                            <PlanGrid plans={filteredPlans} tabId={activeTab} />
                        ) : (
                            <div className="text-center py-16 text-gray-400 dark:text-gray-600">
                                <p className="text-lg font-medium">No plans available for this filter.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 flex items-center justify-center gap-2"
                >
                    <Zap className="w-4 h-4" style={{ color: 'var(--brand-accent)' }} />
                    All plans include instant delivery, 24/7 uptime, and free support.
                </motion.p>
            </div>
        </section>
    );
}
