"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiMenu, BiX } from "react-icons/bi";

export default function HeaderSimple() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="#" className="text-xl font-bold text-neutral-900 dark:text-white">
                    Brand.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Features
                    </Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        About
                    </Link>
                    <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                        Get Started
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-neutral-900 dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <BiX /> : <BiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute left-0 top-16 w-full overflow-hidden border-b border-neutral-200 bg-white shadow-xl md:hidden dark:border-neutral-800 dark:bg-neutral-950"
                    >
                        <nav className="flex flex-col gap-4 px-6 py-4">
                            <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                Features
                            </Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                Pricing
                            </Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                About
                            </Link>
                            <button className="w-full rounded-full bg-neutral-900 py-2 text-center text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                                Get Started
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
