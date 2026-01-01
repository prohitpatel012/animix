"use client";

import { motion } from "framer-motion";

type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
};

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Designing motion-first UI with Framer Motion",
    description:
      "How I approach motion in production apps and avoid over-animating interfaces.",
    date: "Aug 12, 2025",
    tag: "Motion",
  },
  {
    id: "2",
    title: "Building scalable components in Next.js",
    description:
      "Patterns I use to keep components clean, reusable, and production-ready.",
    date: "Aug 02, 2025",
    tag: "Next.js",
  },
  {
    id: "3",
    title: "From idea to shipped product",
    description:
      "Lessons learned while building and shipping products in public.",
    date: "Jul 21, 2025",
    tag: "Build in Public",
  },
  {
    id: "4",
    title: "Why good UI feels invisible",
    description:
      "Thoughts on minimal interfaces, micro-interactions, and usability.",
    date: "Jul 10, 2025",
    tag: "UI/UX",
  },
];

export default function BlogSectionRow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Latest writing & updates
          </h2>
          <p className="mt-2 text-neutral-600">
            Frontend, motion design, and building products in public.
          </p>
        </div>

        <a
          href="/blog"
          className="hidden md:inline text-sm font-medium text-neutral-700 hover:text-neutral-900"
        >
          View all →
        </a>
      </div>

      {/* SCROLLABLE FEED */}
      <div className="relative">
        <div className="flex max-h-[420px] flex-col gap-6 overflow-y-auto pr-2">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 hover:shadow-sm"
            >
              {/* Tag */}
              <span className="inline-block rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-medium text-neutral-700">
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {post.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {post.description}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between text-xs text-neutral-400">
                <span>{post.date}</span>
                <span className="opacity-0 transition group-hover:opacity-100">
                  Read →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Mobile View All */}
      <div className="mt-6 md:hidden">
        <a
          href="/blog"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
        >
          View all →
        </a>
      </div>
    </section>
  );
}
