"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function BreadcrumbMinimal() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-xs uppercase tracking-widest text-neutral-500">
                    <li><a href="#" className="hover:text-black dark:hover:text-white">Portfolio</a></li>
                    <li><BiRightArrowAlt /></li>
                    <li><a href="#" className="hover:text-black dark:hover:text-white">Photography</a></li>
                    <li><BiRightArrowAlt /></li>
                    <li className="text-black dark:text-white font-bold">Nature</li>
                </ol>
            </nav>
        </div>
    )
}
