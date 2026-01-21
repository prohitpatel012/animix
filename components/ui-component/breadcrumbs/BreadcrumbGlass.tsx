"use client";

export default function BreadcrumbGlass() {
    return (
        <div className="bg-linear-to-r from-pink-500 to-violet-600 p-12">
            <nav className="inline-flex px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-3">
                    <li><a href="#" className="hover:text-pink-100 transition-colors font-medium">Explore</a></li>
                    <li className="opacity-50">/</li>
                    <li><a href="#" className="hover:text-pink-100 transition-colors font-medium">Music</a></li>
                    <li className="opacity-50">/</li>
                    <li className="font-bold">Jazz</li>
                </ol>
            </nav>
        </div>
    )
}
