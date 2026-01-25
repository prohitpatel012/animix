"use client";

import { BiX, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

export default function SubHeaderSimple() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-indigo-600 px-4 py-3 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between text-center sm:text-left">
                <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-2 justify-center sm:justify-start">
                    <span className="font-medium">New Feature!</span>
                    <span className="hidden sm:inline text-indigo-200">|</span>
                    <p className="text-sm text-indigo-100">
                        Check out our new dashboard analytics view.
                    </p>
                    <a href="#" className="mt-2 sm:mt-0 flex items-center justify-center gap-1 text-sm font-bold text-white hover:underline sm:ml-4">
                        Learn more <BiRightArrowAlt />
                    </a>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-2 top-2 p-1 text-indigo-200 hover:text-white sm:static sm:p-0"
                >
                    <span className="sr-only">Dismiss</span>
                    <BiX className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
