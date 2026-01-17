"use client";

import { BiChevronRight } from "react-icons/bi";

export default function BreadcrumbChevron() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                    <li>
                        <a href="#" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">Dashboard</a>
                    </li>
                    <li><BiChevronRight className="text-neutral-400" /></li>
                    <li>
                        <a href="#" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">Team</a>
                    </li>
                    <li><BiChevronRight className="text-neutral-400" /></li>
                    <li className="font-medium text-neutral-900 dark:text-white">Settings</li>
                </ol>
            </nav>
        </div>
    )
}
