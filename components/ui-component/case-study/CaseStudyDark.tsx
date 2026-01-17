"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function CaseStudyDark() {
    return (
        <div className="bg-black py-24 sm:py-32 border-y border-neutral-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-xl">
                    <h2 className="text-5xl font-bold text-white tracking-tighter mb-6">Made for the future.</h2>
                    <p className="text-neutral-400 text-xl">
                        See how next-gen startups are using our components to build products 10x faster than the competition.
                    </p>
                </div>
                <div>
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-neutral-200 transition-colors">
                        Explore Stories <BiRightArrowAlt className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}
