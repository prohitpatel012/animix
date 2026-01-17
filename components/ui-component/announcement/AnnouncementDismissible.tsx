"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiX } from "react-icons/bi";

export default function AnnouncementDismissible() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="relative items-center gap-x-6 overflow-hidden bg-white dark:bg-neutral-950 px-6 py-2.5 sm:px-3.5 border-b border-neutral-200 dark:border-neutral-800"
                >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <p className="text-sm leading-6 text-neutral-900 dark:text-white">
                            <strong className="font-semibold">GeneriCon 2024</strong>
                            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx={1} cy={1} r={1} /></svg>
                            Join us in Denver from June 7 – 9 to see what&apos;s coming next.
                        </p>
                        <a
                            href="#"
                            className="flex-none rounded-full bg-neutral-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                        >
                            Register now <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div className="absolute right-0 top-0 sm:right-2 sm:top-2 flex flex-1 justify-end p-2">
                        <button
                            type="button"
                            onClick={() => setIsVisible(false)}
                            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                        >
                            <span className="sr-only">Dismiss</span>
                            <BiX className="h-5 w-5 text-neutral-900 dark:text-white" aria-hidden="true" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
