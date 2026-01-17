"use client";

import { BiCodeAlt } from "react-icons/bi";

export default function FeatureListMinimal() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="flex justify-center mb-6">
                        <div className="rounded-full bg-indigo-50 dark:bg-indigo-900/20 p-3 ring-1 ring-inset ring-indigo-500/10">
                            <BiCodeAlt className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Simplicity is the ultimate sophistication.
                    </h2>
                    <div className="mt-10 flex flex-col gap-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        <p>
                            Focus on your content. The layout gets out of the way.
                            Clean typography, generous whitespace, and perfect alignment.
                        </p>
                        <p>
                            Designed for modern brands that value clarity.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
