"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function HeaderCentered() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center px-6 justify-between md:justify-start">
                {/* Left Nav (Desktop) */}
                <nav className="hidden flex-1 items-center gap-6 md:flex">
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Product
                    </Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Resources
                    </Link>
                </nav>

                {/* Centered Logo */}
                <div className="shrink-0 text-xl font-bold text-neutral-900 dark:text-white md:mx-auto">
                    CENTRAL
                </div>

                {/* Right Nav (Desktop) */}
                <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Sign In
                    </Link>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Spacer & Button */}
                <div className="flex md:hidden">
                    <button
                        className="text-2xl text-neutral-900 dark:text-white"
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
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            Product
                        </Link>
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            Resources
                        </Link>
                        <hr className="border-neutral-200 dark:border-neutral-800" />
                        <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            Sign In
                        </Link>
                        <button className="w-full rounded-lg bg-blue-600 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                            Sign Up
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
