import React from 'react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';

interface LandingLayoutProps {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    const { affiliate } = usePage<PageProps>().props;

    return (
        <div className="min-h-screen bg-gray-950 text-white transition-colors duration-300">
            <Navbar affiliate={affiliate} />
            <main>{children}</main>
            <Footer affiliate={affiliate} />
        </div>
    );
}
