"use client";

import { BiHome } from "react-icons/bi";

export default function BreadcrumbHomeIcon() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li>
                        <a href="#" className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-white transition-colors">
                            <BiHome className="w-4 h-4" />
                            <span className="sr-only">Home</span>
                        </a>
                    </li>
                    <li className="opacity-50">/</li>
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">Library</a></li>
                    <li className="opacity-50">/</li>
                    <li><span className="font-semibold text-neutral-900 dark:text-white">Data</span></li>
                </ol>
            </nav>
        </div>
    )
}
