"use client";

import Link from "next/link";
import { useState } from "react";
import { BiShoppingBag, BiUser, BiHeart, BiMenu, BiSearch, BiX } from "react-icons/bi";

export default function HeaderEcommerce() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-4 lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <BiX className="h-6 w-6 text-neutral-900 dark:text-white" /> : <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />}
                    </button>
                    <Link href="#" className="text-lg font-bold text-neutral-900 dark:text-white">STORE</Link>
                </div>

                <Link href="#" className="hidden text-xl font-bold tracking-tight text-neutral-900 lg:block dark:text-white">
                    STOREFRONT
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 lg:flex">
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">New Arrivals</Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Men</Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Women</Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Accessories</Link>
                    <Link href="#" className="text-sm font-medium text-red-500 hover:text-red-600">Sale</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        <BiSearch className="h-6 w-6" />
                    </button>
                    <button className="hidden text-neutral-600 hover:text-neutral-900 md:block dark:text-neutral-400 dark:hover:text-white">
                        <BiUser className="h-6 w-6" />
                    </button>
                    <button className="hidden text-neutral-600 hover:text-neutral-900 md:block dark:text-neutral-400 dark:hover:text-white">
                        <BiHeart className="h-6 w-6" />
                    </button>
                    <button className="relative text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                        <BiShoppingBag className="h-6 w-6" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white dark:bg-white dark:text-black">2</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-16 w-full h-[calc(100vh-64px)] bg-white dark:bg-neutral-950 p-6 lg:hidden overflow-y-auto border-t border-neutral-200 dark:border-neutral-800">
                    <nav className="space-y-6 text-lg font-medium">
                        <Link href="#" className="block py-2 border-b border-neutral-100 dark:border-neutral-800">New Arrivals</Link>
                        <Link href="#" className="block py-2 border-b border-neutral-100 dark:border-neutral-800">Men</Link>
                        <Link href="#" className="block py-2 border-b border-neutral-100 dark:border-neutral-800">Women</Link>
                        <Link href="#" className="block py-2 border-b border-neutral-100 dark:border-neutral-800">Accessories</Link>
                        <Link href="#" className="block py-2 text-red-500">Sale</Link>
                    </nav>
                    <div className="mt-8 space-y-4">
                        <button className="w-full flex items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 text-sm font-bold dark:border-neutral-800">
                            <BiUser /> My Account
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 text-sm font-bold dark:border-neutral-800">
                            <BiHeart /> Wishlist
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
