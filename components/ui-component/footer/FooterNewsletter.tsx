"use client";

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
                                className="flex-none rounded-md bg-white px-8 py-3 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
