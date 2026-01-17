"use client";

export default function BreadcrumbSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Home</a></li>
                    <li><span className="text-neutral-300 dark:text-neutral-600">/</span></li>
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Products</a></li>
                    <li><span className="text-neutral-300 dark:text-neutral-600">/</span></li>
                    <li><a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Shoes</a></li>
                    <li><span className="text-neutral-300 dark:text-neutral-600">/</span></li>
                    <li className="font-semibold text-neutral-900 dark:text-white" aria-current="page">Running</li>
                </ol>
            </nav>
        </div>
    )
}
