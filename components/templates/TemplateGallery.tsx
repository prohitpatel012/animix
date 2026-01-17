"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { BiSearch, BiRightArrowAlt } from 'react-icons/bi';
import { Template } from '@/lib/templates';

// Map slugs to high-quality Unsplash images
const TEMPLATE_IMAGES: Record<string, string> = {
    'modern-landing-page': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'saas-dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'pricing-collection': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    'testimonial-collection': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    'about-collection': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'contact-collection': 'https://images.unsplash.com/photo-1423666639041-f1408816f3ce?auto=format&fit=crop&w=800&q=80',
    'faq-collection': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    'header-collection': 'https://images.unsplash.com/photo-1481487484168-9b97b91219f5?auto=format&fit=crop&w=800&q=80',
    'hero-collection': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    'sidebar-collection': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'announcement-collection': 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80',
};

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80';

import { useSearchParams } from 'next/navigation';

export default function TemplateGallery({ templates }: { templates: Template[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const filteredTemplates = templates.filter(template => {
        const query = searchQuery.toLowerCase();
        const matchesSearch = (
            template.title.toLowerCase().includes(query) ||
            template.description.toLowerCase().includes(query) ||
            template.category.toLowerCase().includes(query)
        );

        const matchesCategory = categoryParam
            ? template.category === categoryParam
            : true;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-12">
            {/* Header & Search */}
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        All Templates
                    </h1>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                        Explore our curated collection of production-ready components and page layouts.
                        Beautifully designed, fully responsive, and easy to integrate.
                    </p>
                </div>

                <div className="relative w-full md:w-80">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BiSearch className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg leading-5 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                    />
                </div>
            </div>

            {/* Gallery Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredTemplates.map((template) => (
                        <motion.div
                            layout
                            key={template.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href={`/templates/${template.slug}`}
                                className="group flex flex-col h-full bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Image Area */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={TEMPLATE_IMAGES[template.slug] || DEFAULT_IMAGE}
                                        alt={template.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-sm font-medium flex items-center gap-1">
                                            View details <BiRightArrowAlt />
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-col flex-grow p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">
                                            {template.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {template.title}
                                    </h3>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4 flex-grow">
                                        {template.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Explore Template &rarr;
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredTemplates.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-32"
                >
                    <div className="mx-auto h-24 w-24 text-neutral-300 mb-4">
                        <BiSearch className="w-full h-full" />
                    </div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white">No templates found</h3>
                    <p className="mt-2 text-neutral-500 max-w-sm mx-auto">
                        We couldn&apos;t find any templates matching &quot;{searchQuery}&quot;. Try adjusting your search or browse our categories.
                    </p>
                    <button
                        onClick={() => setSearchQuery('')}
                        className="mt-6 text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                        Clear search
                    </button>
                </motion.div>
            )}
        </div>
    );
}
