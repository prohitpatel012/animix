import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="mt-6 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium hover:underline"
            >
              {post.title}
            </Link>

            {post.description && (
              <p className="text-sm text-neutral-500 mt-1">
                {post.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
