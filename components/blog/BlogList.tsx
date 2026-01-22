"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { BiSearch, BiEdit } from "react-icons/bi";

type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date?: string;
    content: string;
    meta?: any;
};

import { useAuthStore } from "@/lib/store/authStore";
import { useEffect } from "react";

// ... (previous imports)

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const role = useAuthStore((state) => state.user?.role);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isAdmin = mounted && role === 'admin';

    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            (post.meta?.tag && post.meta.tag.toLowerCase().includes(query))
        );
    });

    const handleDelete = async (e: React.MouseEvent, id: string) => {
        e.preventDefault(); // Prevent link navigation
        e.stopPropagation();

        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            const res = await fetch(`/api/blog?id=${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                // Refresh the page to show updated list
                window.location.reload();
            } else {
                alert('Failed to delete: ' + data.error);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Error deleting post');
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            {/* Header & Search */}
            <div className="mb-16 flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
                {/* ... (Header Text) */}
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Blog & Updates
                    </h1>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Design patterns, tutorials, and component updates.
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="relative w-full">
                        {/* Search Input... */}
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

                    {isAdmin && (
                        <Link
                            href="/blog/create"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
                        >
                            <BiEdit className="text-lg" />
                            Write New Post
                        </Link>
                    )}
                </div>
            </div>

            {/* Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <div key={post.slug} className="relative group">
                            <BlogCard post={post} />
                            {/* Admin Actions for DB Posts */}
                            {post.meta?.isDbPost && isAdmin && (
                                <div className="absolute top-4 right-4 flex gap-2 transition-opacity z-10">
                                    <Link
                                        href={`/blog/edit/${post.slug}`}
                                        className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow-md text-blue-600 hover:text-blue-700 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-transform"
                                        title="Edit"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <BiEdit />
                                    </Link>
                                    <button
                                        onClick={(e) => handleDelete(e, post.slug)}
                                        className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow-md text-red-600 hover:text-red-700 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-transform"
                                        title="Delete"
                                    >
                                        <div className="w-4 h-4 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                // ... empty state logic
                null
            )}
            {/* Re-attach empty state part since I cut it off above or handle logically */}
            {filteredPosts.length === 0 && (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 bg-neutral-50 py-12 text-center dark:border-neutral-800 dark:bg-neutral-900/50">
                    {/* ... (rest of empty state) */}
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
