"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HiChevronDown, HiChevronRight } from 'react-icons/hi'

export function Sidebar({ categories }: { categories: string[] }) {
    const searchParams = useSearchParams()
    const activeCategory = searchParams.get('category')
    const activeSubcategory = searchParams.get('subcategory')
    const [isOpen, setIsOpen] = useState(false)
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['Authentication', 'Navigation']);

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const componentCollections = [
        {
            name: "Authentication",
            subItems: [
                "Login",
                "Signup",
                "Logout",
                "Forgot Password",
                "Account Locked",
                "Magic Link",
                "Two Factor"
            ]
        },
        {
            name: "Navigation",
            subItems: [
                "Headers",
                "Sidebars",
                "Breadcrumbs",
                "Footer",
                "Nav Menus"
            ]
        },
        {
            name: "Dashboard",
            subItems: [
                "SaaS Dashboard",
                "Dashboard Sections"
            ]
        },
        {
            name: "User Profile",
            subItems: [
                "User Dashboard",
                "Profile",
                "Edit Profile",
                "Avatar Upload",
                "Account Settings",
                "Security Settings",
                "Notification Settings",
                "Privacy Settings",
                "Connected Accounts",
                "Session Management",
                "Activity Log",
                "Delete Account",
                "Deactivate Account",
                "Subscription",
                "Billing",
                "Invoices",
                "Payment Methods",
                "Usage / Quota",
                "Upgrade Plan"
            ]
        },
        { name: "Tabs" }
    ];

    return (
        <>
            <button
                className="lg:hidden fixed bottom-4 right-4 z-50 bg-neutral-900 text-white p-3 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <aside className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="h-full overflow-y-auto p-6 pb-20">
                    <h2 className="text-lg font-bold mb-6 px-2 text-neutral-900 dark:text-white">Templates</h2>

                    <nav className="space-y-1">
                        <Link
                            href="/templates"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mb-4 ${!activeCategory
                                ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                }`}
                        >
                            All Templates
                        </Link>

                        {/* Component Collections */}
                        <div className="mb-6">
                            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-3">
                                Collections
                            </h3>
                            {componentCollections.map((item) => {
                                const isExpanded = expandedCategories.includes(item.name);
                                const isActive = activeCategory === item.name;

                                if (item.subItems) {
                                    return (
                                        <div key={item.name} className="space-y-1 mb-1">
                                            <button
                                                onClick={() => toggleCategory(item.name)}
                                                className={`
                                                    group flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                                    ${isActive && !activeSubcategory
                                                        ? "text-neutral-900 dark:text-white bg-neutral-200 dark:bg-neutral-800"
                                                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
                                                                    href={`/templates?category=${item.name}&subcategory=${subItem}`}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className={`
                                                                        block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200
                                                                        ${isSubActive
                                                                            ? "text-neutral-900 dark:text-white font-medium bg-neutral-200 dark:bg-neutral-800"
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
                                        href={`/templates?category=${item.name}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`
                                            group relative w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block mb-1
                                            ${activeCategory === item.name
                                                ? "text-neutral-900 dark:text-white bg-neutral-200 dark:bg-neutral-800"
                                                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Standard Categories */}
                        <div>
                            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-3">
                                Page Templates
                            </h3>
                            {categories.map((category) => (
                                <Link
                                    key={category}
                                    href={`/templates?category=${encodeURIComponent(category)}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                                        block px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1
                                        ${activeCategory === category
                                            ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                                            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }
                                    `}
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
