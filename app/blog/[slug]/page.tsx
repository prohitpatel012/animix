import { getPost } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/MDXComponents'

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

    return (
        <article className="mx-auto max-w-3xl p-6">
            <header className="mb-8 border-b pb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                {post.description && (
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-4">
                        {post.description}
                    </p>
                )}
                {post.date && (
                    <time className="text-sm text-neutral-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                )}
            </header>

            <div className="prose dark:prose-invert max-w-none">
                <MDXRemote source={post.content} components={mdxComponents} />
            </div>
        </article>
    )
}
