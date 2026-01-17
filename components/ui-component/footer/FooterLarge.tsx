"use client";

import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoGithub } from "react-icons/bi";

export default function FooterLarge() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold text-neutral-900 dark:text-white">Logo</span>
                        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className="flex space-x-6">
                            {[BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoGithub].map((Icon, i) => (
                                <a key={i} href="#" className="text-neutral-400 hover:text-neutral-500">
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Marketing', 'Analytics', 'Commerce', 'Insights'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Claim', 'Privacy', 'Terms'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-neutral-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-neutral-500">&copy; 2024 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
