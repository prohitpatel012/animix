import { getAllPosts } from '@/lib/mdx'
import BlogList from '@/components/blog/BlogList'

export const metadata = {
  title: 'Blog - Component Library',
  description: 'Latest updates versus design patterns and component documentation.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <BlogList posts={posts} />
    </div>
  )
}
