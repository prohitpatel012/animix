"use client";

import { useState, useEffect } from "react";

export default function NavTransparent() {
    const [scrolled, setScrolled] = useState(false);

    // Simulate scroll effect for demo (or use real scroll listener)
    useEffect(() => {
        // Just for demo, toggle every few seconds to show effect
        const interval = setInterval(() => {
            setScrolled(s => !s);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 bg-indigo-900 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="" />

            <nav className={`absolute top-0 w-full z-10 transition-all duration-500 ${scrolled ? 'bg-white text-neutral-900 shadow-md py-2' : 'bg-transparent text-white py-6'}`}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between items-center">
                    <div className="font-bold text-xl">SaaSify</div>
                    <div className="flex space-x-6">
                        <a href="#" className={`font-medium hover:opacity-75`}>Features</a>
                        <a href="#" className={`font-medium hover:opacity-75`}>Pricing</a>
                        <a href="#" className={`font-medium hover:opacity-75`}>Contact</a>
                    </div>
                    <button className={`px-4 py-2 rounded-full font-bold transition-colors ${scrolled ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-900'}`}>
                        Get Started
                    </button>
                </div>
            </nav>

            <div className="relative z-0 flex items-center justify-center h-full text-white">
                <p className="animate-pulse">Scroll effect demo (auto-toggles every 3s)</p>
            </div>
        </div>
    )
}
