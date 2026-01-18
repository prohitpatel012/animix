"use client";

import { BiError } from "react-icons/bi";

export default function SuspendedAccountSplit() {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24">
                <div className="max-w-md w-full mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <BiError className="w-10 h-10 text-red-600" />
                        <span className="text-xl font-bold text-red-600 uppercase tracking-wider">Restriction</span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-6">
                        Access Revoked
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                        Your account access has been revoked by an administrator. This action is usually permanent unless appealed successfully.
                    </p>

                    <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg mb-8">
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Why did this happen?</h3>
                        <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                            <li>Suspicious payment activity</li>
                            <li>Terms of use violation</li>
                            <li>Security compromised</li>
                        </ul>
                    </div>

                    <button className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg hover:opacity-90 transition-opacity">
                        File an Appeal
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block w-1/2 relative bg-neutral-200">
                <img
                    src="https://images.unsplash.com/photo-1590059390047-6058a06c284b?q=80&w=2576&auto=format&fit=crop"
                    alt="Suspended"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply" />
            </div>
        </div>
    )
}
