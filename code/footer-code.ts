export const footerSimpleCode = `"use client";

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
`;

export const footerLargeCode = `"use client";

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
`;

export const footerDarkCode = `"use client";

export default function FooterDark() {
    return (
        <footer className="bg-neutral-950 text-white" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Stay connected</h3>
                        <p className="text-neutral-400 mb-6 max-w-sm">
                            Join our newsletter to get the latest news and updates delivered straight to your inbox.
                        </p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="Enter your email" className="bg-neutral-800 border-none text-white px-4 py-2 rounded-md w-full max-w-xs focus:ring-2 focus:ring-indigo-500" />
                            <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-indigo-500 transition-colors">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-neutral-400">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Changelog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-neutral-400">
                            <li><a href="#" className="hover:text-white">Documentation</a></li>
                            <li><a href="#" className="hover:text-white">API Reference</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>&copy; 2024 DarkTheme Inc.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
`;

export const footerCenteredCode = `"use client";

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
`;

export const footerSocialCode = `"use client";

import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagramAlt, BiLogoYoutube, BiLogoPinterest } from "react-icons/bi";

export default function FooterSocial() {
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#1877F2] transition-colors">
                                <BiLogoFacebookSquare className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Facebook</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#1DA1F2] transition-colors">
                                <BiLogoTwitter className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Twitter</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#E4405F] transition-colors">
                                <BiLogoInstagramAlt className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Instagram</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#FF0000] transition-colors">
                                <BiLogoYoutube className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">YouTube</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#BD081C] transition-colors">
                                <BiLogoPinterest className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Pinterest</span>
                        </a>
                    </div>
                    <div className="text-center border-t border-neutral-800 pt-8 w-full max-w-2xl">
                        <p className="text-neutral-500 text-sm">
                            We are social. Connect with us on your favorite platforms to stay updated with our latest news, offers, and events.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
`;

export const footerNewsletterCode = `"use client";

export default function FooterNewsletter() {
    return (
        <footer className="bg-indigo-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="bg-indigo-800 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                        <p className="text-indigo-200 text-lg">
                            Get weekly insights, tips, and exclusive offers sent directly to your inbox. No spam, unsubscribe at any time.
                        </p>
                    </div>
                    <div className="w-full max-w-md">
                        <form className="flex flex-col sm:flex-row gap-4">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-indigo-200 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 backdrop-blur-sm"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-white px-8 py-3 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-indigo-300">
                            By subscribing, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
                <div className="mt-16 flex justify-between items-center text-indigo-300 text-sm border-t border-indigo-800 pt-8">
                    <p>&copy; 2024 Newsletter Inc.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
`;

export const footerSitemapCode = `"use client";

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
`;

export const footerMinimalCode = `"use client";

export default function FooterMinimal() {
    return (
        <footer className="bg-white dark:bg-neutral-950">
            <div className="mx-auto max-w-3xl px-6 py-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-bold text-lg tracking-tighter">min.</span>
                <p className="text-sm text-neutral-500">
                    &copy; {new Date().getFullYear()} Minimalist.
                </p>
                <a href="mailto:hello@example.com" className="text-sm font-medium hover:text-indigo-600">hello@example.com</a>
            </div>
        </footer>
    )
}
`;

export const footerAppCode = `"use client";

import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

export default function FooterApp() {
    return (
        <footer className="bg-neutral-950 text-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Experience the app on mobile</h2>
                <p className="text-neutral-400 mb-10 max-w-2xl mx-auto">
                    Download our top-rated app for iOS and Android to manage your workflow on the go. Sync across all devices seamlessly.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                        <BiLogoApple className="w-8 h-8" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-medium">Download on the</div>
                            <div className="text-lg font-bold">App Store</div>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                        <BiLogoPlayStore className="w-8 h-8" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-medium">Get it on</div>
                            <div className="text-lg font-bold">Google Play</div>
                        </div>
                    </button>
                </div>
                <div className="mt-16 pt-8 border-t border-neutral-800 flex justify-center gap-8 text-neutral-500 text-sm">
                    <a href="#" className="hover:text-white">Support</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                </div>
            </div>
        </footer>
    )
}
`;

export const footerLegalCode = `"use client";

export default function FooterLegal() {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div className="font-bold text-neutral-900 dark:text-white text-lg">LegalCorp</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About Us</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>
                <div className="space-y-4 mb-8">
                    <p>
                        Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
                    </p>
                    <p>
                        Information on this website may not constitute the most up-to-date legal or other information. This website contains links to other third-party websites. Such links are only for the convenience of the reader, user or browser; the ABA and its members do not recommend or endorse the contents of the third-party sites.
                    </p>
                </div>
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between gap-4">
                    <p>&copy; 2024 LegalCorp LLC.</p>
                    <div className="flex gap-4">
                        <a href="#" className="underline">Privacy Policy</a>
                        <a href="#" className="underline">Terms of Use</a>
                        <a href="#" className="underline">Cookie Policy</a>
                        <a href="#" className="underline">Accessibility Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
`;
