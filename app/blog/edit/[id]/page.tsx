
import BlogEditor from '@/components/blog/BlogEditor';

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <BlogEditor postId={id} />
        </div>
    );
}
