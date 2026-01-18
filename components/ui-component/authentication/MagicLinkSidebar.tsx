"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkSidebar() {
    return (
        <div className="min-h-screen flex flex-row-reverse bg-white dark:bg-neutral-950">
            {/* Sidebar Form */}
            <div className="w-full md:w-[480px] flex flex-col justify-center bg-white dark:bg-neutral-900 shadow-2xl z-20 p-8 md:p-16 border-l border-neutral-100 dark:border-neutral-800">
                <div className="w-full max-w-sm mx-auto">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-8 text-white shadow-lg shadow-emerald-200 dark:shadow-none">
                        <BiEnvelope className="w-7 h-7" />
                    </div>

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Welcome to Nexus</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                        Access your workspace securely without a password. We'll verify you via email.
                    </p>

                    <form className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Work Email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full border-b-2 border-neutral-200 dark:border-neutral-700 bg-transparent py-3 text-lg focus:border-emerald-500 outline-none transition-colors dark:text-white placeholder-neutral-300 dark:placeholder-neutral-600"
                            />
                        </div>

                        <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-4 rounded-lg font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors mt-4">
                            Send Magic Link
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800">
                        <p className="text-xs text-neutral-400 leading-normal">
                            By clicking "Send Magic Link", you acknowledge that you have read and understood, and agree to Nexus's <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Area */}
            <div className="hidden md:block flex-1 relative bg-neutral-50 dark:bg-neutral-950">
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Cybersecurity"
                />
                <div className="absolute inset-0 bg-neutral-900/40" />
            </div>
        </div>
    )
}
