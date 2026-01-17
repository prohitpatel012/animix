"use client";

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
