"use client";

import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date?: string;
    meta?: any;
};

export default function BlogCard({ post }: { post: BlogPost }) {
    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "";

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
        >
            {post.meta?.image && (
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <img
                        src={post.meta.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="p-6">
                {post.meta?.tag && (
                    <span className="mb-4 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                        {post.meta.tag}
                    </span>
                )}

                <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400">
                    {post.title}
                </h3>

                <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {post.description}
                </p>
            </div>


            <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-4 dark:border-neutral-800">
                <span className="text-xs text-neutral-500">{formattedDate}</span>
                <span className="flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400">
                    Read Post <BiRightArrowAlt className="ml-1" />
                </span>
            </div>
        </Link >
    );
}
