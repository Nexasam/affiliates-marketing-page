import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
    brandName: string;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={cn('w-4 h-4', i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-600')}
                />
            ))}
        </div>
    );
}

// Fallback testimonials if none provided
const defaultTestimonials: Testimonial[] = [
    {
        name: 'Adebayo Okafor',
        company: 'TechResell NG',
        role: 'VTU Reseller',
        quote: 'This platform has completely transformed my reselling business. The API is rock-solid and delivery is instant. I make over ₦200k monthly!',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=adebayo',
    },
    {
        name: 'Chioma Nwosu',
        company: 'DataHub Nigeria',
        role: 'Business Owner',
        quote: 'The cheapest SME data rates I have found anywhere. My customers love the instant delivery and I love the profit margins.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chioma',
    },
    {
        name: 'Emeka Eze',
        company: 'QuickBills Pro',
        role: 'Developer',
        quote: 'Integrated the API in under 2 hours. Documentation is clear, uptime is 99.9%, and the support team is always available.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emeka',
    },
];

export default function TestimonialsSection({ testimonials, brandName }: TestimonialsSectionProps) {
    const items = testimonials.length > 0 ? testimonials : defaultTestimonials;
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setDirection(1);
            setCurrent((c) => (c + 1) % items.length);
        }, 5000);
    };

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [items.length]);

    const go = (dir: number) => {
        if (timerRef.current) clearInterval(timerRef.current);
        setDirection(dir);
        setCurrent((c) => (c + dir + items.length) % items.length);
        startTimer();
    };

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
    };

    return (
        <section id="testimonials" className="section-padding bg-white dark:bg-gray-950 overflow-hidden">
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
                        Testimonials
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Loved by{' '}
                        <span className="gradient-text">Thousands of Resellers</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't take our word for it. Here's what our customers say about {brandName}.
                    </p>
                </motion.div>

                {/* Featured testimonial carousel */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="relative">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800 relative"
                            >
                                {/* Quote icon */}
                                <div
                                    className="absolute top-6 right-8 opacity-10"
                                    style={{ color: 'var(--brand-primary)' }}
                                >
                                    <Quote className="w-16 h-16" />
                                </div>

                                <StarRating rating={items[current].rating} />

                                <blockquote className="mt-5 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                    "{items[current].quote}"
                                </blockquote>

                                <div className="mt-6 flex items-center gap-4">
                                    <img
                                        src={items[current].avatar}
                                        alt={items[current].name}
                                        className="w-12 h-12 rounded-full border-2"
                                        style={{ borderColor: 'var(--brand-primary)' }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(items[current].name)}&background=4F46E5&color=fff`;
                                        }}
                                    />
                                    <div>
                                        <p className="font-display font-bold text-gray-900 dark:text-white">
                                            {items[current].name}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {items[current].role} · {items[current].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={() => go(-1)}
                                className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {items.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                        className="transition-all duration-300 rounded-full"
                                        style={{
                                            width: i === current ? '24px' : '8px',
                                            height: '8px',
                                            background: i === current ? 'var(--brand-primary)' : 'var(--tw-color-gray-300, #d1d5db)',
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => go(1)}
                                className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
