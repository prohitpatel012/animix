
import BlogEditor from '@/components/blog/BlogEditor';

export const metadata = {
    title: 'Write New Post - Component Library',
    description: 'Create and publish a new blog post.',
}

export default function CreateBlogPage() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            <BlogEditor />
        </div>
    );
}
