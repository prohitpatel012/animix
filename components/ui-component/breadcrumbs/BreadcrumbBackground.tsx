"use client";

export default function BreadcrumbBackground() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav className="flex px-5 py-3 text-neutral-700 border border-neutral-200 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="text-sm font-medium text-neutral-700 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-neutral-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" className="ml-1 text-sm font-medium text-neutral-700 hover:text-indigo-600 md:ml-2 dark:text-neutral-400 dark:hover:text-white">Templates</a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    )
}
