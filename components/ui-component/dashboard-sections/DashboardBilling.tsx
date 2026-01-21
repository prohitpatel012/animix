"use client";

import { BiCheck } from "react-icons/bi";

export default function DashboardBilling() {
    return (
        <div className="w-full max-w-sm bg-neutral-900 text-white rounded-xl p-6 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full blur-[50px] opacity-20 transform translate-x-10 -translate-y-10"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-neutral-400 text-sm font-medium">Current Plan</p>
                        <h3 className="text-2xl font-bold mt-1">Pro Plan</h3>
                    </div>
                    <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">Active</span>
                </div>

                <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2 text-neutral-300">
                        <span>Storage Used</span>
                        <span>78%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-purple-500 to-pink-500 w-[78%]"></div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-2">156 GB of 200 GB</p>
                </div>

                <div className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-neutral-300"><BiCheck className="text-green-400" /> Unlimited members</li>
                    <li className="flex items-center gap-2 text-sm text-neutral-300"><BiCheck className="text-green-400" /> Advanced analytics</li>
                    <li className="flex items-center gap-2 text-sm text-neutral-300"><BiCheck className="text-green-400" /> 24/7 Support</li>
                </div>

                <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors">
                    Upgrade to Enterprise
                </button>
            </div>
        </div>
    );
}
