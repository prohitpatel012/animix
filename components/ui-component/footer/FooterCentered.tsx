"use client";

import { BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

export default function FooterCentered() {
    return (
        <footer className="bg-white dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <div className="flex justify-center mb-8">
                    <span className="text-3xl font-bold tracking-tight">BRAND</span>
                </div>
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'].map((item) => (
                        <div key={item} className="pb-6">
                            <a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">{item}</a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    <a href="#" className="text-neutral-400 hover:text-neutral-500">
                        <span className="sr-only">Twitter</span>
                        <BiLogoTwitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-neutral-400 hover:text-neutral-500">
                        <span className="sr-only">LinkedIn</span>
                        <BiLogoLinkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-neutral-400 hover:text-neutral-500">
                        <span className="sr-only">Instagram</span>
                        <BiLogoInstagram className="h-6 w-6" />
                    </a>
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-neutral-500">
                    &copy; 2024 Centered Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
