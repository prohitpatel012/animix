'use client'

import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm font-medium text-neutral-500"
          >
            Build faster. Ship smarter.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Production-ready UI components
            <span className="block text-neutral-500">
              for modern developers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600"
          >
            A growing library of clean, animated, and customizable components
            to help developers build faster, ship confidently, and earn more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex justify-center gap-4"
          >
            <button className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800">
              Browse Components
            </button>
            <button className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
              View Docs
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-neutral-500">Built for</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-700">
            <span>Next.js</span>
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-3xl font-semibold">
          Why developers choose us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-200 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMPONENT PREVIEW ================= */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Beautiful components out of the box
          </h2>
          <p className="mt-4 text-neutral-600">
            Buttons, cards, pricing tables, modals, navbars, and more.
          </p>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-10">
            <p className="text-sm text-neutral-500">
              🔧 Live component preview goes here
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 py-24 text-center text-white">
        <h2 className="text-3xl font-semibold">
          Save time. Ship faster. Earn more.
        </h2>

        <p className="mt-4 text-neutral-300">
          Stop rebuilding UI — focus on products that make money.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-md bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
            Get Access
          </button>
          <button className="rounded-md border border-neutral-700 px-6 py-3 text-sm hover:bg-neutral-800">
            View Pricing
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-900">Docs</a>
            <a href="#" className="hover:text-neutral-900">Components</a>
            <a href="#" className="hover:text-neutral-900">Twitter</a>
          </div>
        </div>
      </footer>

    </main>
  )
}

/* ================= DATA ================= */

const FEATURES = [
  {
    title: 'Production Ready',
    desc: 'Clean code, best practices, scalable patterns.',
  },
  {
    title: 'Copy & Paste',
    desc: 'No setup. No config. Just ship.',
  },
  {
    title: 'Motion-First',
    desc: 'Subtle animations using Framer Motion.',
  },
  {
    title: 'Customizable',
    desc: 'Built with Tailwind — easy to tweak.',
  },
  {
    title: 'Developer Focused',
    desc: 'Designed by developers, for developers.',
  },
  {
    title: 'Save Time, Earn More',
    desc: 'Ship faster and focus on revenue.',
  },
]
