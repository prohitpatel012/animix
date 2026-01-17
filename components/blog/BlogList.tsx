"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { BiSearch } from "react-icons/bi";

type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date?: string;
    content: string;
    meta?: any;
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            (post.meta?.tag && post.meta.tag.toLowerCase().includes(query))
        );
    });

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            {/* Header & Search */}
            <div className="mb-16 flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Blog & Updates
                    </h1>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Design patterns, tutorials, and component updates.
                    </p>
                </div>

                <div className="relative w-full max-w-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <BiSearch className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm leading-6 placeholder-neutral-500 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:focus:border-blue-500 dark:focus:ring-blue-900"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 bg-neutral-50 py-12 text-center dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
                        <BiSearch className="h-8 w-8 text-neutral-400" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                        No posts found
                    </h3>
                    <p className="mt-2 text-neutral-500">
                        We couldn't find any posts matching "{searchQuery}".
                    </p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="mt-6 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </div>
    );
}
