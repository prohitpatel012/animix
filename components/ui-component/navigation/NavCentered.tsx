"use client";

import { BiMenu } from "react-icons/bi";

export default function NavCentered() {
    return (
        <div className="bg-white dark:bg-neutral-950 shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 flex items-center justify-start sm:hidden">
                        <BiMenu size={24} className="text-neutral-500" />
                    </div>
                    <div className="flex-1 flex justify-center sm:justify-start">
                        {/* Left Links */}
                        <nav className="hidden sm:flex space-x-8">
                            <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Women</a>
                            <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Men</a>
                            <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Company</a>
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <span className="font-serif text-2xl font-bold tracking-wider text-neutral-900 dark:text-white">BRAND</span>
                    </div>
                    <div className="flex-1 flex justify-center sm:justify-end">
                        {/* Right Links */}
                        <nav className="hidden sm:flex space-x-8">
                            <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Search</a>
                            <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Help</a>
                            <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Cart (0)</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
