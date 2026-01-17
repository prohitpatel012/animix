"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiSearch, BiBell, BiUser, BiX } from "react-icons/bi";

export default function HeaderWithSearch() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
                {/* Logo */}
                <Link href="#" className="shrink-0 text-xl font-bold text-neutral-900 dark:text-white">
                    SaaS App
                </Link>

                {/* Search Bar - Hidden on small mobile, visible on larger */}
                <div className="hidden max-w-md flex-1 md:block">
                    <div className="relative">
                        <BiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search dashboard..."
                            className="w-full rounded-full border border-neutral-200 bg-neutral-100 py-2 pl-10 pr-4 text-sm outline-none focus:border-neutral-300 focus:bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-neutral-700"
                        />
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden">
                        <BiSearch className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
                    </button>
                    <button className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hidden sm:block">
                        <BiBell className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
                    </button>
                    <button className="rounded-full bg-neutral-200 p-2 dark:bg-neutral-800 hidden sm:block">
                        <BiUser className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-2xl text-neutral-900 dark:text-white ml-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-16 w-full border-b border-neutral-200 bg-white px-6 py-4 shadow-xl md:hidden dark:border-neutral-800 dark:bg-neutral-950">
                    <div className="mb-4 relative">
                        <BiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-lg border border-neutral-200 bg-neutral-100 py-2 pl-10 pr-4 text-sm outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                        />
                    </div>
                    <nav className="flex flex-col gap-4">
                        <Link href="#" className="flex items-center gap-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            <BiBell className="text-lg" /> Notifications
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            <BiUser className="text-lg" /> Profile
                        </Link>
                        <button className="w-full rounded-lg bg-neutral-900 py-2 text-center text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
                            Logout
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
