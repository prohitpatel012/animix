"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function HeaderFloating() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative mb-24 w-full bg-neutral-100 p-8 dark:bg-neutral-900">
            {/* Floating pill header */}
            <header className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border border-neutral-200/50 bg-white/80 px-6 shadow-xl backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-950/80 relative z-50">

                <div className="flex items-center gap-8">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-linear-to-tr from-orange-400 to-rose-500"></div>
                        <span className="font-bold text-neutral-900 dark:text-white">Float</span>
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Work</Link>
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Services</Link>
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">About</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                        Let's Talk
                    </button>
                    <button
                        className="md:hidden text-2xl text-neutral-900 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown (Pill Style) */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-6 right-6 rounded-2xl bg-white p-6 shadow-2xl md:hidden dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                        <nav className="flex flex-col gap-4 text-center">
                            <Link href="#" className="text-neutral-600 dark:text-neutral-400">Work</Link>
                            <Link href="#" className="text-neutral-600 dark:text-neutral-400">Services</Link>
                            <Link href="#" className="text-neutral-600 dark:text-neutral-400">About</Link>
                            <button className="w-full rounded-full bg-black py-3 font-medium text-white dark:bg-white dark:text-black">
                                Let's Talk
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            <div className="mt-8 text-center text-sm text-neutral-400">
                (Pill styles content below...)
            </div>
        </div>
    );
}
