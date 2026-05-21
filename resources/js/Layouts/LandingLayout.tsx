import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

interface LandingLayoutProps {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    const { affiliate } = usePage<PageProps>().props;
    const [isDark, setIsDark] = useState(false);

    // Persist dark mode preference
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const dark = saved === 'dark' || (!saved && prefersDark);
        setIsDark(dark);
        document.documentElement.classList.toggle('dark', dark);
    }, []);

    const toggleDark = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar affiliate={affiliate} isDark={isDark} onToggleDark={toggleDark} />
            <main>{children}</main>
            <Footer affiliate={affiliate} />
        </div>
    );
}
