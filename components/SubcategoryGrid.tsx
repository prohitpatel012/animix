
import React from 'react';
import Link from 'next/link';

type SubcategoryItem = {
    slug: string;
    title: string;
    description: string;
    count?: number;
};

export default function SubcategoryGrid({
    items,
    parentCategory,
    basePath = '/components-hub'
}: {
    items: SubcategoryItem[],
    parentCategory: string,
    basePath?: string
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <Link
                    key={item.slug}
                    href={`${basePath}?category=${parentCategory}&subcategory=${item.slug}`}
                    className="group flex flex-col p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                            {item.title}
                        </h3>
                        {item.count !== undefined && (
                            <span className="text-xs font-medium px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
                                {item.count} items
                            </span>
                        )}
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                    </p>
                </Link>
            ))}
        </div>
    );
}
