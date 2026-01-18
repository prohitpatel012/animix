"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

type SidebarItem = {
    name: string;
    subItems?: string[];
};

export default function Sidebar() {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');
    const activeSubcategory = searchParams.get('subcategory');

    const [expandedCategories, setExpandedCategories] = useState<string[]>(['Authentication', 'Navigation']);

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const items: SidebarItem[] = [
        { name: "Heading" },
        { name: "Text" },
        { name: "Logo" },
        { name: "Badge" },
        { name: "Avatar" },
        { name: "Link" },
        { name: "Image" },
        { name: "Divider" },
        { name: "Chip" },
        { name: "Buttons" },
        { name: "Cards" },
        { name: "Modal" },
        // "Sidebar" removed as it's now under Navigation > Sidebars
    ];

    return (
        <div className="w-full lg:w-64 h-full lg:border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
            <div className="p-4 lg:p-6 pb-20 overflow-y-auto h-full">
                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 px-3">
                    Components
                </h2>
                <nav className="space-y-1">
                    {items.map((item) => {
                        const isExpanded = expandedCategories.includes(item.name);
                        const isActive = activeCategory === item.name;

                        if (item.subItems) {
                            return (
                                <div key={item.name} className="space-y-1">
                                    <button
                                        onClick={() => toggleCategory(item.name)}
                                        className={`
                                            group flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                            ${isActive && !activeSubcategory
                                                ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                            }
                                        `}
                                    >
                                        <span>{item.name}</span>
                                        {isExpanded ? (
                                            <HiChevronDown className="size-4 text-neutral-400" />
                                        ) : (
                                            <HiChevronRight className="size-4 text-neutral-400" />
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden pl-4"
                                            >
                                                {item.subItems.map(subItem => {
                                                    const isSubActive = activeCategory === item.name && activeSubcategory === subItem;
                                                    return (
                                                        <Link
                                                            key={subItem}
                                                            href={`/components-hub?category=${item.name}&subcategory=${subItem}`}
                                                            className={`
                                                                block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200
                                                                ${isSubActive
                                                                    ? "text-neutral-900 dark:text-white font-medium bg-neutral-100 dark:bg-neutral-800"
                                                                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                                                                }
                                                            `}
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.name}
                                href={`/components-hub?category=${item.name}`}
                                className={`
                                    group relative w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block
                                    ${activeCategory === item.name
                                        ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                        : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}