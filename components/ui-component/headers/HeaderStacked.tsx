"use client";

import Link from "next/link";
import { useState } from "react";
import { BiPhone, BiEnvelope, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiMenu, BiX } from "react-icons/bi";

export default function HeaderStacked() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-neutral-900 py-2 text-xs text-neutral-400 hidden sm:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><BiPhone /> +1 (555) 123-4567</span>
                        <span className="flex items-center gap-1"><BiEnvelope /> contact@agency.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="hover:text-white"><BiLogoTwitter /></a>
                        <a href="#" className="hover:text-white"><BiLogoFacebook /></a>
                        <a href="#" className="hover:text-white"><BiLogoInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <Link href="#" className="text-xl font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                        AGENCY
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        <Link href="#" className="font-medium text-neutral-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Home</Link>
                        <Link href="#" className="font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400">Services</Link>
                        <Link href="#" className="font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400">Portfolio</Link>
                        <Link href="#" className="font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400">Blog</Link>
                    </nav>

                    <button className="hidden rounded bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 md:block">
                        Consultation
                    </button>

                    <button
                        className="md:hidden text-2xl text-neutral-900 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute left-0 w-full border-b border-neutral-200 bg-white px-6 py-4 shadow-xl md:hidden dark:border-neutral-800 dark:bg-neutral-950 z-50">
                        <nav className="flex flex-col gap-4">
                            <Link href="#" className="text-sm font-medium text-neutral-900 dark:text-white">Home</Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Services</Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Portfolio</Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Blog</Link>
                            <button className="w-full rounded bg-blue-600 py-3 text-center text-sm font-medium text-white">
                                Book Consultation
                            </button>
                            {/* Mobile Contact Info */}
                            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2 text-xs text-neutral-500">
                                <span className="flex items-center gap-2"><BiPhone /> +1 (555) 123-4567</span>
                                <span className="flex items-center gap-2"><BiEnvelope /> contact@agency.com</span>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
}
