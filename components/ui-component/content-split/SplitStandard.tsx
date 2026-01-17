"use client";

import { BiCheck } from "react-icons/bi";

export default function SplitStandard() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-neutral-100 dark:bg-neutral-900">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Collaboration" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-6">
                        Collaborate without constraints
                    </h2>
                    <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400 mb-8">
                        Bring your team together in a shared workspace that feels as natural as sitting in the same room. Real-time updates, comment threads, and more.
                    </p>
                    <ul className="space-y-4">
                        {['Real-time sync', 'Unlimited history', 'Secure permissions'].map((item) => (
                            <li key={item} className="flex gap-3">
                                <BiCheck className="flex-none text-indigo-600 w-6 h-6" />
                                <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
