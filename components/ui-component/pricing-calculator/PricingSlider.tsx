"use client";

import { useState } from "react";
import { BiCheck } from "react-icons/bi";

export default function PricingSlider() {
    const [users, setUsers] = useState(10);
    const basePrice = 5; // $5 per user

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Scale with your team</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Pay only for what you use. Simple per-seat pricing.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl bg-white dark:bg-neutral-950 rounded-3xl shadow-lg ring-1 ring-neutral-900/10 dark:ring-white/10 p-8 sm:p-12">
                    <div className="mb-10 text-center">
                        <h3 className="text-5xl font-bold text-neutral-900 dark:text-white">${users * basePrice}</h3>
                        <p className="text-base font-semibold text-neutral-500 mt-2">per month</p>
                    </div>

                    <div className="mb-10">
                        <div className="flex justify-between text-sm font-medium mb-4">
                            <span>Users: <strong className="text-indigo-600 text-lg">{users}</strong></span>
                            <span>Unlimited Storage</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={users}
                            onChange={(e) => setUsers(parseInt(e.target.value))}
                            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="flex justify-between text-xs text-neutral-400 mt-2">
                            <span>1 User</span>
                            <span>100 Users</span>
                        </div>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
                        {['All Premium Features', '24/7 Support', 'SSO Integration', 'Audit Logs'].map(f => (
                            <li key={f} className="flex gap-2 items-center">
                                <BiCheck className="text-indigo-600 text-xl" /> {f}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full rounded-full bg-indigo-600 px-3.5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Start 14-day free trial
                    </button>
                </div>
            </div>
        </div>
    );
}
