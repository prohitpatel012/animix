"use client";

export default function BreadcrumbDark() {
    return (
        <div className="bg-neutral-900 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Home</a></li>
                    <li className="text-neutral-600">/</li>
                    <li><a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Account</a></li>
                    <li className="text-neutral-600">/</li>
                    <li className="text-white">Security</li>
                </ol>
            </nav>
        </div>
    )
}
