import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
    h1: (props) => <h1 className="text-3xl font-bold mt-8" {...props} />,
    p: (props) => <p className="text-neutral-600 mt-4" {...props} />,
    Button: ({ children }) => (
        <button className="mt-4 rounded-md bg-black px-4 py-2 text-white">
            {children}
        </button>
    ),
}
