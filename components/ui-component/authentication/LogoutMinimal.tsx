"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function LogoutMinimal() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tighter">
                    logged
                    <span className="text-neutral-400 dark:text-neutral-600">_</span>
                    out
                </h1>

                <p className="text-neutral-500 dark:text-neutral-400 mb-12 font-mono text-sm max-w-sm mx-auto">
                    /session/terminated <br />
                    start_time: 09:41:22 <br />
                    end_time: 14:20:05
                </p>

                <a href="#" className="inline-flex items-center text-lg font-bold text-neutral-900 dark:text-white border-b-2 border-black dark:border-white pb-1 hover:opacity-75 transition-opacity">
                    Return to Login <BiRightArrowAlt className="ml-2 w-6 h-6" />
                </a>
            </div>
        </div>
    )
}
