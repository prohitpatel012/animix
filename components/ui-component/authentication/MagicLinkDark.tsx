"use client";

import { BiEnvelope } from "react-icons/bi";

export default function MagicLinkDark() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 text-white">
            <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-10 shadow-2xl">
                <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-neutral-700">
                    <BiEnvelope className="w-8 h-8 text-neutral-400" />
                </div>

                <h2 className="text-2xl font-bold text-center mb-8 text-neutral-200">Sign In with Magic Link</h2>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-400">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 outline-none transition-all placeholder-neutral-600"
                            placeholder="you@domain.com"
                        />
                    </div>

                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors">
                        Continue
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-neutral-500 text-sm">
                        No password needed. Just click the link in your inbox.
                    </p>
                </div>
            </div>
        </div>
    )
}
