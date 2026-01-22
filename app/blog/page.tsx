import { getAllPosts } from '@/lib/mdx'
import BlogList from '@/components/blog/BlogList'
import dbConnect from '@/lib/db'
import Blog from '@/lib/models/Blog'

export const metadata = {
  title: 'Blog - Component Library',
  description: 'Latest updates versus design patterns and component documentation.',
}

// Force dynamic rendering to fetch fresh data
export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  // 1. Fetch Local Posts
  const localPosts = getAllPosts()

  // 2. Fetch DB Posts
  await dbConnect();
  // Use lean() for better performance and simple POJO objects
  const dbPostsRaw = await Blog.find({}).sort({ createdAt: -1 }).lean();

  // 3. Transform DB posts to match BlogPost interface
  const dbPosts = dbPostsRaw.map((post: any) => ({
    slug: post._id.toString(), // Use ID as slug for editing/routing
    title: post.title,
    description: post.description || '',
    date: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
    content: post.content,
    meta: {
      tag: post.status === 'Published' ? 'Community' : post.status,
      image: post.coverImage,
      isDbPost: true // Flag to identify editable posts
    }
  }));

  // 4. Merge Posts
  const allPosts = [...dbPosts, ...localPosts];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <BlogList posts={allPosts} />
    </div>
  )
}
