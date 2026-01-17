"use client";

import { BiCheck } from "react-icons/bi";

export default function PricingHighlight() {
    return (
        <div className="bg-indigo-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl text-center text-white mb-16">
                    <h2 className="text-3xl font-bold sm:text-4xl">Summer Sale</h2>
                    <p className="mt-4 text-indigo-200">Get 50% off our Pro plan for the first year.</p>
                </div>

                <div className="mx-auto max-w-lg bg-white rounded-3xl p-10 shadow-2xl relative">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-lg transform rotate-6 shadow-md">
                        SAVE 50%
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Pro Bundle</h3>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-neutral-900">$29</span>
                        <span className="text-lg text-neutral-500 line-through">$59</span>
                        <span className="text-neutral-500">/mo</span>
                    </div>
                    <p className="mt-6 text-neutral-600">Everything you need to launch and scale your project features.</p>
                    <ul className="mt-6 space-y-3">
                        {['Unlimited projects', 'Analytics dashboard', 'Priority support'].map(f => (
                            <li key={f} className="flex gap-3 text-neutral-700">
                                <BiCheck className="text-green-600 text-xl" /> {f}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700">Claim Offer</button>
                </div>
            </div>
        </div>
    )
}
