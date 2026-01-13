"use client";

import { motion } from "motion/react";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {};

export default function Sidebar({ }: Props) {
    const searchParams = useSearchParams();
    const active = searchParams.get('category') || 'Buttons';

    const items = [
        "Heading",
        "Text",
        "Logo",
        "Badge",
        "Avatar",
        "Link",
        "Image",
        "Divider",
        "Chip",
        // "Primary Button", // Deliberately excluded to prefer 'Buttons' category
        "Buttons",
        "Cards",
        "Modal",
        "Sidebar"
    ];

    return (
        <div className="w-full lg:w-64 h-full  lg:border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
            <div className="p-4 lg:p-6">
                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 px-3">
                    Components
                </h2>
                <nav className="space-y-1">
                    {items.map((item) => (
                        <Link
                            key={item}
                            href={`/components-hub?category=${item}`}
                            className={`
                                group relative w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block
                                ${active === item
                                    ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                }
                            `}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}