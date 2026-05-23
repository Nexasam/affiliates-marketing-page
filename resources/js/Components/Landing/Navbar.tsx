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
                        ? 'bg-gray-950/95 backdrop-blur-xl shadow-sm border-gray-800/50'
                        : 'bg-transparent border-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <button onClick={() => scrollTo('#home')} className="flex items-center gap-2.5 group">
                            <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display font-bold text-xl text-white">
                                {affiliate.name}
                            </span>
                        </button>

                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className={cn(
                                        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                        activeSection === link.href.replace('#', '')
                                            ? 'text-white bg-white/10 shadow-sm'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    )}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => scrollTo('#contact')}
                                className="hidden sm:inline-flex btn-secondary text-sm px-4 py-2 text-white border-white/20 hover:bg-white/10"
                            >
                                Speak with Sales
                            </button>
                            <button
                                onClick={() => scrollTo('#pricing')}
                                className="btn-primary text-sm px-4 py-2"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-gray-950/98 border-b border-gray-800 shadow-2xl lg:hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="pt-2 border-t border-gray-800 mt-2 flex flex-col gap-2">
                                <button
                                    onClick={() => scrollTo('#contact')}
                                    className="btn-secondary text-sm w-full text-white border-white/20 hover:bg-white/10"
                                >
                                    Speak with Sales
                                </button>
                                <button
                                    onClick={() => scrollTo('#pricing')}
                                    className="btn-primary text-sm w-full"
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
