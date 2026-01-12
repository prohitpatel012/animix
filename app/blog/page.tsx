import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="mt-6 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-col space-y-2">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium hover:underline"
            >
              {post.title}
            </Link>

            {post.description && (
              <p className="text-sm text-neutral-500">
                {post.description}
              </p>
            )}

            {post.date && (
              <p className="text-xs text-neutral-400">
                {new Date(post.date).toLocaleDateString()}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
