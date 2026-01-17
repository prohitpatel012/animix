"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiChevronDown, BiX } from "react-icons/bi";

export default function HeaderMegaMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);

    return (
        <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="#" className="text-xl font-bold text-neutral-900 dark:text-white">
                    Mega
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            Products <BiChevronDown />
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute left-1/2 top-full mt-2 hidden w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg group-hover:block dark:border-neutral-800 dark:bg-neutral-900">
                            <div className="space-y-3">
                                <a href="#" className="block">
                                    <div className="font-semibold text-neutral-900 dark:text-white">Analytics</div>
                                    <div className="text-xs text-neutral-500">Track your performance</div>
                                </a>
                                <a href="#" className="block">
                                    <div className="font-semibold text-neutral-900 dark:text-white">Engagement</div>
                                    <div className="text-xs text-neutral-500">Connect with customers</div>
                                </a>
                                <a href="#" className="block">
                                    <div className="font-semibold text-neutral-900 dark:text-white">Security</div>
                                    <div className="text-xs text-neutral-500">Protect your data</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Enterprise
                    </Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Developers
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden text-sm font-medium text-neutral-900 md:block dark:text-white">Log in</Link>
                    <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
                        Sign up
                    </button>
                    <button
                        className="md:hidden text-2xl text-neutral-900 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-16 w-full border-b border-neutral-200 bg-white px-6 py-4 shadow-xl md:hidden dark:border-neutral-800 dark:bg-neutral-950">
                    <nav className="flex flex-col gap-4">
                        {/* Mobile Accordion */}
                        <div>
                            <button
                                className="flex w-full items-center justify-between text-sm font-medium text-neutral-600 dark:text-neutral-400"
                                onClick={() => setIsProductOpen(!isProductOpen)}
                            >
                                Products <BiChevronDown className={`transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isProductOpen && (
                                <div className="mt-2 space-y-3 pl-4">
                                    <a href="#" className="block">
                                        <div className="font-semibold text-sm text-neutral-900 dark:text-white">Analytics</div>
                                    </a>
                                    <a href="#" className="block">
                                        <div className="font-semibold text-sm text-neutral-900 dark:text-white">Engagement</div>
                                    </a>
                                    <a href="#" className="block">
                                        <div className="font-semibold text-sm text-neutral-900 dark:text-white">Security</div>
                                    </a>
                                </div>
                            )}
                        </div>

                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            Enterprise
                        </Link>
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            Developers
                        </Link>
                        <hr className="border-neutral-200 dark:border-neutral-800" />
                        <Link href="#" className="text-sm font-medium text-neutral-900 dark:text-white">Log in</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
