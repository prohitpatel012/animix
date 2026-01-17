import { getPost } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPost(slug)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPost(slug)

    if (!post) {
        return notFound()
    }

    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : null

    return (
        <article className="min-h-screen bg-white pb-24 dark:bg-neutral-950">
            {/* Header / Hero */}
            <div className="bg-neutral-50 border-b border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-800">
                <div className="mx-auto max-w-3xl px-6 py-16">
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                        <BiArrowBack className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>

                    {post.meta?.tag && (
                        <div className="mb-4">
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                {post.meta.tag}
                            </span>
                        </div>
                    )}

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        {post.title}
                    </h1>

                    <p className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
                        {post.description}
                    </p>

                    {formattedDate && (
                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <time dateTime={post.date}>{formattedDate}</time>
                            {/* You could add reading time here if calculated */}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl px-6 py-12">
                <div className="prose prose-neutral prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-img:rounded-xl prose-img:border prose-img:border-neutral-200 dark:prose-img:border-neutral-800">
                    <MDXRemote source={post.content} components={mdxComponents} />
                </div>
            </div>
        </article>
    )
}
