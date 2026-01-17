"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function HeaderDark() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-neutral-900 text-white relative z-50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-12">
                    <Link href="#" className="text-2xl font-bold tracking-tight">
                        NIGHT
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="#" className="text-sm text-neutral-300 hover:text-white">Dashboard</Link>
                        <Link href="#" className="text-sm text-neutral-300 hover:text-white">Team</Link>
                        <Link href="#" className="text-sm text-neutral-300 hover:text-white">Projects</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-700 hover:text-white">
                        View Source
                    </button>
                    <button
                        className="md:hidden text-2xl text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-16 w-full border-b border-neutral-800 bg-neutral-900 px-6 py-4 shadow-xl md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link href="#" className="text-sm font-medium text-neutral-300 hover:text-white">
                            Dashboard
                        </Link>
                        <Link href="#" className="text-sm font-medium text-neutral-300 hover:text-white">
                            Team
                        </Link>
                        <Link href="#" className="text-sm font-medium text-neutral-300 hover:text-white">
                            Projects
                        </Link>
                        <button className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-700">
                            View Source
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
