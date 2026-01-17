"use client";

export default function BreadcrumbCollapsed() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-neutral-500">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><span>&gt;</span></li>
                    <li><a href="#" className="hover:underline">Docs</a></li>
                    <li><span>&gt;</span></li>
                    <li className="flex items-center justify-center w-6 h-4 text-xs bg-neutral-100 dark:bg-neutral-800 rounded cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700">...</li>
                    <li><span>&gt;</span></li>
                    <li><a href="#" className="hover:underline">Component API</a></li>
                    <li><span>&gt;</span></li>
                    <li className="text-neutral-900 dark:text-white font-semibold">Props</li>
                </ol>
            </nav>
        </div>
    )
}
