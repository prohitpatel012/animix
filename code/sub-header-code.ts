export const headerWithSubHeaderCode = `"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX, BiPhone, BiEnvelope, BiLogoTwitter, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

export default function HeaderWithSubHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full relative z-50 flex flex-col">
            {/* Sub Header / Top Bar */}
            <div className="bg-neutral-900 text-white text-xs py-2 dark:bg-neutral-950 border-b border-neutral-800">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-6">
                        <span className="hidden sm:flex items-center gap-2">
                            <BiPhone className="text-neutral-400" /> +1 (800) 123-4567
                        </span>
                        <span className="flex items-center gap-2">
                            <BiEnvelope className="text-neutral-400" /> support@company.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 border-r border-neutral-700 pr-4">
                            <a href="#" className="text-neutral-400 hover:text-white transition"><BiLogoTwitter /></a>
                            <a href="#" className="text-neutral-400 hover:text-white transition"><BiLogoFacebook /></a>
                            <a href="#" className="text-neutral-400 hover:text-white transition"><BiLogoInstagram /></a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link href="#" className="hover:underline">Help</Link>
                            <span>/</span>
                            <Link href="#" className="hover:underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-12">
                        <Link href="#" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            BRAND
                        </Link>

                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                Products
                            </Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                Solutions
                            </Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                Pricing
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:block rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                            Get Started
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
                    <div className="absolute left-0 w-full border-b border-neutral-200 bg-white px-6 py-4 shadow-xl md:hidden dark:border-neutral-800 dark:bg-neutral-950 z-50">
                        <nav className="flex flex-col gap-4">
                            <Link href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Products</Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Solutions</Link>
                            <Link href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Pricing</Link>
                            <hr className="border-neutral-200 dark:border-neutral-800" />
                            <div className="flex flex-col gap-2 text-xs text-neutral-500">
                                <span className="flex items-center gap-2"><BiPhone /> +1 (800) 123-4567</span>
                                <span className="flex items-center gap-2"><BiEnvelope /> support@company.com</span>
                            </div>
                            <button className="w-full rounded-full bg-blue-600 py-3 text-center text-sm font-medium text-white">
                                Get Started
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
}
`;

export const subHeaderSimpleCode = `"use client";

import { BiX, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

export default function SubHeaderSimple() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-indigo-600 px-4 py-3 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between text-center sm:text-left">
                <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-2 justify-center sm:justify-start">
                    <span className="font-medium">New Feature!</span>
                    <span className="hidden sm:inline text-indigo-200">|</span>
                    <p className="text-sm text-indigo-100">
                        Check out our new dashboard analytics view.
                    </p>
                    <a href="#" className="mt-2 sm:mt-0 flex items-center justify-center gap-1 text-sm font-bold text-white hover:underline sm:ml-4">
                        Learn more <BiRightArrowAlt />
                    </a>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-2 top-2 p-1 text-indigo-200 hover:text-white sm:static sm:p-0"
                >
                    <span className="sr-only">Dismiss</span>
                    <BiX className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
`;
