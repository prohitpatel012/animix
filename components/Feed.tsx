"use client";

import { motion } from "framer-motion";

type FeedItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: "feature" | "update" | "release";
};





export default function Feed() {

  const FEED_DATA: FeedItem[] = [
  {
    id: "1",
    title: "New UI components released",
    description: "Added motion-first buttons and animated cards.",
    time: "2 hours ago",
    type: "release",
  },
  {
    id: "2",
    title: "Performance improvements",
    description: "Reduced bundle size by 35% using code-splitting.",
    time: "Yesterday",
    type: "update",
  },
  {
    id: "3",
    title: "Dark mode support",
    description: "System-based theme switching is now available.",
    time: "3 days ago",
    type: "feature",
  },
];


  return (
    <section className="w-full max-w-lg rounded-xl border border-neutral-200 bg-white">
      {/* Header */}
      <div className="border-b border-neutral-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-neutral-900">Latest updates</h3>
      </div>

      {/* Feed list */}
      <ul className="divide-y divide-neutral-200">
        {FEED_DATA.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="flex gap-3 px-4 py-4 transition hover:bg-neutral-50"
          >
            {/* Icon */}
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/5 text-xs font-medium text-neutral-900">
              {item.title[0]}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-900">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                {item.description}
              </p>
              <p className="mt-2 text-xs text-neutral-400">{item.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
