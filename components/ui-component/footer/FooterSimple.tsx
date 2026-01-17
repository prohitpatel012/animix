"use client";

export default function FooterSimple() {
    return (
        <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'].map((item) => (
                        <a key={item} href="#" className="text-neutral-400 hover:text-neutral-500 text-sm">
                            {item}
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-neutral-500">
                        &copy; 2024 Company Name, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
