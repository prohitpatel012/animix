"use client";

import { BiMap, BiLink } from "react-icons/bi";

export default function DashboardUserCard() {
    return (
        <div className="w-full max-w-sm bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="h-24 bg-linear-to-r from-blue-500 to-purple-600"></div>
            <div className="px-6 pb-6 relative">
                <div className="absolute -top-12 left-6 p-1 bg-white dark:bg-neutral-900 rounded-full">
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                </div>
                <div className="pt-16">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Sarah Connor</h2>
                    <p className="text-sm text-neutral-500 font-medium">Product Designer</p>

                    <div className="flex items-center gap-4 mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                            <BiMap /> San Francisco, CA
                        </div>
                        <div className="flex items-center gap-1">
                            <BiLink /> sarah.design
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6 border-t border-neutral-200 dark:border-neutral-800 pt-6">
                        <div className="text-center">
                            <span className="block text-xl font-bold text-neutral-900 dark:text-white">1.2k</span>
                            <span className="text-xs text-neutral-500">Followers</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-neutral-900 dark:text-white">54</span>
                            <span className="text-xs text-neutral-500">Projects</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-neutral-900 dark:text-white">85</span>
                            <span className="text-xs text-neutral-500">Reviews</span>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                        <button className="flex-1 py-2 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                            Follow
                        </button>
                        <button className="flex-1 py-2 px-4 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
