"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function HeaderGradient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-linear-to-r from-violet-600 to-indigo-600 text-white relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="#" className="font-mono text-xl font-bold tracking-tighter">
                    &lt;CODE /&gt;
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-1 bg-white/10 p-1 rounded-full md:flex backdrop-blur-md">
                    <Link href="#" className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
                        Docs
                    </Link>
                    <Link href="#" className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
                        Components
                    </Link>
                    <Link href="#" className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
                        Templates
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden text-sm font-medium text-white/90 hover:text-white md:block">Login</Link>
                    <button className="hidden sm:block rounded-lg bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-sm hover:bg-indigo-50">
                        Get Access
                    </button>
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-16 w-full bg-indigo-900 border-t border-indigo-800 px-6 py-4 shadow-xl md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link href="#" className="text-indigo-100 hover:text-white">Docs</Link>
                        <Link href="#" className="text-indigo-100 hover:text-white">Components</Link>
                        <Link href="#" className="text-indigo-100 hover:text-white">Templates</Link>
                        <hr className="border-indigo-800" />
                        <Link href="#" className="text-indigo-100 hover:text-white">Login</Link>
                        <button className="w-full rounded-lg bg-white py-3 text-center font-bold text-indigo-600">
                            Get Access
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
