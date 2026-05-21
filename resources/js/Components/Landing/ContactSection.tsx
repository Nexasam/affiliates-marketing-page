import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@inertiajs/react';
import {
    Mail, Phone, MapPin, MessageCircle, Send,
    CheckCircle2, AlertCircle, PhoneCall
} from 'lucide-react';
import { AffiliateConfig } from '@/types';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
    affiliate: AffiliateConfig;
    flash: { success?: string; error?: string };
}

const businessTypes = [
    'Individual Reseller',
    'Small Business',
    'Developer / Tech Company',
    'Enterprise / Corporate',
    'Startup',
    'Other',
];

export default function ContactSection({ affiliate, flash }: ContactSectionProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        business_type: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/30 overflow-hidden">
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
                        Speak with Sales
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Let's Talk About{' '}
                        <span className="gradient-text">Your Business</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have questions about our platform? Our sales team is ready to help you find the right plan.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Left: Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div>
                            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                                Get in Touch
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Our team typically responds within 2 hours during business hours (Mon–Sat, 8am–8pm WAT).
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: 'Email', value: affiliate.contact.email, href: `mailto:${affiliate.contact.email}` },
                                { icon: Phone, label: 'Phone', value: affiliate.contact.phone, href: `tel:${affiliate.contact.phone}` },
                                { icon: MapPin, label: 'Location', value: affiliate.contact.address, href: null },
                            ].map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'color-mix(in srgb, var(--brand-primary) 10%, transparent)' }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-gray-900 dark:text-white font-medium hover:underline text-sm">
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-900 dark:text-white font-medium text-sm">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick action buttons */}
                        <div className="space-y-3 pt-2">
                            <a
                                href={`https://wa.me/${affiliate.contact.whatsapp.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                                style={{ background: '#25D366' }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>
                            <a
                                href={`tel:${affiliate.contact.phone}`}
                                className="flex items-center gap-3 w-full px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 border-2"
                                style={{ borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' }}
                            >
                                <PhoneCall className="w-5 h-5" />
                                Call Support
                            </a>
                        </div>

                        {/* Social links */}
                        {affiliate.social && (
                            <div className="pt-2">
                                <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide mb-3">Follow Us</p>
                                <div className="flex gap-3">
                                    {Object.entries(affiliate.social).map(([platform, url]) => url && (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 capitalize text-xs font-bold"
                                        >
                                            {platform.charAt(0).toUpperCase()}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-7 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-card">
                            {/* Flash messages */}
                            {flash.success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-6"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                    <p className="text-sm text-emerald-700 dark:text-emerald-300">{flash.success}</p>
                                </motion.div>
                            )}
                            {flash.error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-6"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                                    <p className="text-sm text-red-700 dark:text-red-300">{flash.error}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="John Doe"
                                            className={cn(
                                                'w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2',
                                                errors.name
                                                    ? 'border-red-400 focus:ring-red-400/30'
                                                    : 'border-gray-200 dark:border-gray-700 focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/20'
                                            )}
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="john@example.com"
                                            className={cn(
                                                'w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2',
                                                errors.email
                                                    ? 'border-red-400 focus:ring-red-400/30'
                                                    : 'border-gray-200 dark:border-gray-700 focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/20'
                                            )}
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            placeholder="+234 800 000 0000"
                                            className={cn(
                                                'w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2',
                                                errors.phone
                                                    ? 'border-red-400 focus:ring-red-400/30'
                                                    : 'border-gray-200 dark:border-gray-700 focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/20'
                                            )}
                                        />
                                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                                    </div>

                                    {/* Business type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                            Business Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={data.business_type}
                                            onChange={(e) => setData('business_type', e.target.value)}
                                            className={cn(
                                                'w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm transition-colors focus:outline-none focus:ring-2',
                                                errors.business_type
                                                    ? 'border-red-400 focus:ring-red-400/30'
                                                    : 'border-gray-200 dark:border-gray-700 focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/20'
                                            )}
                                        >
                                            <option value="">Select type...</option>
                                            {businessTypes.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                        {errors.business_type && <p className="mt-1 text-xs text-red-500">{errors.business_type}</p>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        rows={4}
                                        placeholder="Tell us about your business and what you're looking for..."
                                        className={cn(
                                            'w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2 resize-none',
                                            errors.message
                                                ? 'border-red-400 focus:ring-red-400/30'
                                                : 'border-gray-200 dark:border-gray-700 focus:border-[var(--brand-primary)] focus:ring-[var(--brand-primary)]/20'
                                        )}
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed group"
                                >
                                    {processing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                            <span className="ml-auto text-xs opacity-70 group-hover:opacity-100">We reply in &lt;2hrs</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
