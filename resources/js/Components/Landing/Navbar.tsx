import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { AffiliateConfig } from '@/types';
import { cn } from '@/lib/utils';

interface NavbarProps {
    affiliate: AffiliateConfig;
}

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar({ affiliate }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'features', 'pricing', 'testimonials', 'contact'];
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                    isScrolled
                        ? 'bg-gray-950/98 backdrop-blur-xl shadow-2xl border-gray-800/60'
                        : 'bg-gradient-to-b from-gray-950/90 to-gray-950/40 backdrop-blur-sm border-gray-800/30'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Brand */}
                        <button 
                            onClick={() => scrollTo('#home')} 
                            className="flex items-center gap-3 group flex-shrink-0"
                        >
                            <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <span className="font-display font-bold text-lg text-white leading-tight">
                                    {affiliate.name}
                                </span>
                                <span className="text-xs text-gray-400 font-medium">
                                    Affiliate Platform
                                </span>
                            </div>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-0.5 mx-auto">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className={cn(
                                        'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 relative group',
                                        activeSection === link.href.replace('#', '')
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                    )}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    {activeSection === link.href.replace('#', '') && (
                                        <div className="absolute inset-0 bg-white/10 rounded-lg" />
                                    )}
                                    <div className={cn(
                                        'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                                        activeSection !== link.href.replace('#', '') && 'bg-white/5'
                                    )} />
                                </button>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-2 lg:gap-3">
                            <button
                                onClick={() => scrollTo('#contact')}
                                className="hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                            >
                                Sales
                            </button>
                            <button
                                onClick={() => scrollTo('#pricing')}
                                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-primary hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-2.5 rounded-lg text-gray-200 hover:bg-white/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-gray-950/99 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl lg:hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
                            {/* Navigation links */}
                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollTo(link.href)}
                                        className={cn(
                                            'w-full text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200',
                                            activeSection === link.href.replace('#', '')
                                                ? 'text-white bg-white/10'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="pt-4 border-t border-gray-800 mt-4 flex flex-col gap-2.5">
                                <button
                                    onClick={() => scrollTo('#contact')}
                                    className="w-full px-5 py-3 rounded-xl text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                                >
                                    Speak with Sales
                                </button>
                                <button
                                    onClick={() => scrollTo('#pricing')}
                                    className="w-full px-5 py-3 rounded-xl text-sm font-semibold text-white btn-primary hover:shadow-xl transition-all duration-200"
                                >
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
