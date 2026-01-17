"use client";

import { BiCheck } from "react-icons/bi";

export default function PricingSplit() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                            Ready for Enterprise scale?
                        </h2>
                        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                            Get the robust security, compliance and control you need.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {['SSO & SAML', 'Audit Logs', 'Dedicated Account Manager', 'Custom SLAs'].map(f => (
                                <li key={f} className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300">
                                    <div className="bg-indigo-100 p-1 rounded-full text-indigo-600"><BiCheck /></div>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">Contact Sales &rarr;</a>
                        </div>
                    </div>

                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 lg:p-12 shadow-sm ring-1 ring-neutral-900/10 dark:ring-white/10">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Pro Plan</h3>
                        <p className="text-neutral-500 mt-2">For growing teams.</p>
                        <div className="mt-6 flex items-baseline gap-1">
                            <span className="text-5xl font-bold text-neutral-900 dark:text-white">$49</span>
                            <span className="text-neutral-500">/user/mo</span>
                        </div>
                        <button className="w-full mt-8 bg-indigo-600 text-white rounded-lg py-3 font-semibold shadow hover:bg-indigo-500 transition-colors">Start Free Trial</button>
                        <p className="text-xs text-center text-neutral-500 mt-4">No credit card required</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
