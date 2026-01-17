"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function HeaderTransparent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative h-64 w-full bg-neutral-900 overflow-hidden">
            {/* Background Image Placeholder */}
            <img
                src="https://images.unsplash.com/photo-1620641788421-7f1c91ade633?auto=format&fit=crop&w=1600&q=80"
                alt="Hero Background"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50 w-full">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    <Link href="#" className="text-2xl font-bold text-white">
                        AESTHETIC
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
                            Studio
                        </Link>
                        <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
                            Work
                        </Link>
                        <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="hidden rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 md:block">
                            Launch
                        </button>
                        <button
                            className="md:hidden text-white text-3xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <BiX /> : <BiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute left-0 top-20 w-full bg-black/95 px-6 py-6 md:hidden backdrop-blur-xl border-t border-white/10">
                        <nav className="flex flex-col gap-6 text-center">
                            <Link href="#" className="text-lg font-medium text-white/80 hover:text-white">
                                Studio
                            </Link>
                            <Link href="#" className="text-lg font-medium text-white/80 hover:text-white">
                                Work
                            </Link>
                            <Link href="#" className="text-lg font-medium text-white/80 hover:text-white">
                                Contact
                            </Link>
                            <button className="mx-auto w-full max-w-xs rounded-full bg-white text-black px-6 py-3 font-bold">
                                Launch Project
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Demo Content */}
            <div className="relative flex h-full items-center justify-center text-white z-0">
                <p className="font-mono text-xs opacity-60">Hero Content Area</p>
            </div>
        </div>
    );
}
