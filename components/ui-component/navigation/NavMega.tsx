"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function NavMega() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 relative z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="font-bold text-2xl tracking-tighter">MEGACORP</div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-sm font-medium text-neutral-900 dark:text-white">Home</a>

                        <div className="relative">
                            <button
                                className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                onMouseEnter={() => setOpen(true)}
                                onClick={() => setOpen(!open)}
                            >
                                Products <BiChevronDown />
                            </button>
                        </div>

                        <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Pricing</a>
                        <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Resources</a>
                    </nav>
                    <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm font-bold">Get Started</button>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <div
                className={`absolute left-0 w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-xl transition-all duration-200 ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                onMouseLeave={() => setOpen(false)}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Analytics</h3>
                        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><a href="#" className="hover:text-indigo-600">Real-time reports</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Funnel analysis</a></li>
                            <li><a href="#" className="hover:text-indigo-600">User retention</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Automation</h3>
                        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><a href="#" className="hover:text-indigo-600">Workflows</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Integrations</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Email Marketing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Security</h3>
                        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                            <li><a href="#" className="hover:text-indigo-600">SSO & 2FA</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Audit Logs</a></li>
                        </ul>
                    </div>
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6">
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-2">New Feature</h3>
                        <p className="text-xs text-neutral-500 mb-4">Check out our new AI assistant.</p>
                        <a href="#" className="text-sm font-bold text-indigo-600">Learn more &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
