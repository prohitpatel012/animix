import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
    h1: (props) => <h1 className="text-4xl font-bold mt-10 mb-6 text-neutral-900 dark:text-neutral-50" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold mt-10 mb-4 text-neutral-800 dark:text-neutral-100" {...props} />,
    h3: (props) => <h3 className="text-xl font-medium mt-8 mb-4 text-neutral-800 dark:text-neutral-100" {...props} />,
    p: (props) => <p className="leading-7 mt-6 text-neutral-800 dark:text-neutral-300" {...props} />,
    a: (props) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
    ul: (props) => <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-800 dark:text-neutral-300" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside mt-4 space-y-2 text-neutral-800 dark:text-neutral-300" {...props} />,
    li: (props) => <li className="ml-4" {...props} />,
    blockquote: (props) => (
        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 my-6 italic text-neutral-600 dark:text-neutral-400" {...props} />
    ),
    code: (props) => (
        <code className="bg-neutral-100 dark:bg-neutral-800 rounded px-1.5 py-0.5 text-sm font-mono text-neutral-900 dark:text-neutral-200" {...props} />
    ),
    pre: (props) => (
        <pre className="bg-neutral-900 dark:bg-neutral-950 text-white p-4 rounded-lg overflow-x-auto mt-6 mb-6" {...props} />
    ),
    Button: ({ children }) => (
        <button className="mt-4 rounded-md bg-neutral-900 dark:bg-neutral-100 px-4 py-2 text-white dark:text-black font-medium hover:opacity-90 transition-opacity">
            {children}
        </button>
    ),
}
