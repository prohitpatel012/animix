"use client";

export default function FooterSitemap() {
    return (
        <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    {[1, 2, 3, 4, 5, 6].map((col) => (
                        <div key={col}>
                            <h3 className="font-bold text-sm text-neutral-900 dark:text-white mb-4">Category {col}</h3>
                            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                                <li><a href="#" className="hover:underline">Link Item One</a></li>
                                <li><a href="#" className="hover:underline">Link Item Two</a></li>
                                <li><a href="#" className="hover:underline">Link Item Three</a></li>
                                <li><a href="#" className="hover:underline">Link Item Four</a></li>
                                <li><a href="#" className="hover:underline">Link Item Five</a></li>
                                <li><a href="#" className="hover:underline">Link Item Six</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                    <p className="text-xs text-neutral-400">All content copyright &copy; 2024 Sitemap Heavy Inc.</p>
                </div>
            </div>
        </footer>
    )
}
