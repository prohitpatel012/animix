"use client";

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export default function NavSimple() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold bg-indigo-600 text-white p-1 rounded">Logo</span>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {['Home', 'Team', 'Projects', 'Calendar'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-500 hover:text-neutral-700 hover:border-neutral-300 dark:hover:text-neutral-200 dark:hover:border-neutral-700"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                            Sign In
                        </button>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden border-t border-neutral-200 dark:border-neutral-700">
                    <div className="pt-2 pb-3 space-y-1">
                        {['Home', 'Team', 'Projects', 'Calendar'].map((item) => (
                            <a key={item} href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 hover:border-neutral-300 dark:hover:bg-neutral-800">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
