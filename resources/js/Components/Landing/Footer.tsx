import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Twitter, Instagram, Facebook, Send, ArrowRight } from 'lucide-react';
import { AffiliateConfig } from '@/types';

interface FooterProps {
    affiliate: AffiliateConfig;
}

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

const services = [
    'Airtime Topup',
    'SME Data Bundles',
    'Airtime to Cash',
    'Electricity Bills',
    'Cable TV',
    'API Integration',
];

const socialIcons: Record<string, React.ElementType> = {
    twitter: Twitter,
    instagram: Instagram,
    facebook: Facebook,
    telegram: Send,
};

export default function Footer({ affiliate }: FooterProps) {
    const scrollTo = (href: string) => {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
            {/* CTA Banner */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
                        style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))' }}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                        <div className="relative">
                            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                                Ready to Start Your VTU Business?
                            </h3>
                            <p className="text-white/80 mb-6 max-w-xl mx-auto">
                                Join 50,000+ resellers already making money with {affiliate.name}. Start free today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={() => scrollTo('#pricing')}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white text-gray-900 hover:bg-gray-100 transition-colors group"
                                >
                                    Get Started Free
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollTo('#contact')}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
                                >
                                    Speak with Sales
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display font-bold text-xl text-white">{affiliate.name}</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-5">{affiliate.tagline}</p>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {Object.entries(affiliate.social ?? {}).map(([platform, url]) => {
                                if (!url) return null;
                                const Icon = socialIcons[platform] ?? Zap;
                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200"
                                        aria-label={platform}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <button
                                        onClick={() => scrollTo(href)}
                                        className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-4">Services</h4>
                        <ul className="space-y-2.5">
                            {services.map((s) => (
                                <li key={s}>
                                    <span className="text-sm">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-4">Contact</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a href={`mailto:${affiliate.contact.email}`} className="hover:text-white transition-colors">
                                    {affiliate.contact.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${affiliate.contact.phone}`} className="hover:text-white transition-colors">
                                    {affiliate.contact.phone}
                                </a>
                            </li>
                            <li>{affiliate.contact.address}</li>
                            <li className="pt-1">
                                <a
                                    href={`https://wa.me/${affiliate.contact.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium text-white transition-colors"
                                    style={{ background: '#25D366' }}
                                >
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-500">
                        © {year} {affiliate.name}. All rights reserved. Powered by Nexasam Technologies.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span>·</span>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <span>·</span>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
