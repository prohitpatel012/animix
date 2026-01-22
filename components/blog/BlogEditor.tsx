"use client";

import { useState, useEffect } from 'react';
import { BiImageAdd, BiSave, BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import Link from 'next/link';
import RichTextEditor from './RichTextEditor';


export default function BlogEditor({ postId }: { postId?: string }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [coverImage, setCoverImage] = useState<string | null>(null);

    const [isSaving, setIsSaving] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const role = useAuthStore((state) => state.user?.role);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Auth redirection
    useEffect(() => {
        if (mounted) {
            if (role !== 'admin') {
                router.push('/');
            }
        }
    }, [mounted, role, router]);

    // Fetch post data
    useEffect(() => {
        if (mounted && role === 'admin') {
            if (postId) {
                setIsLoading(true);
                const fetchPost = async () => {
                    try {
                        const res = await fetch(`/api/blog?id=${postId}`);
                        const data = await res.json();
                        if (data.success) {
                            const post = data.data;
                            setTitle(post.title);
                            setDescription(post.description || '');
                            setContent(post.content);
                            setCoverImage(post.coverImage || null);
                        } else {
                            alert('Failed to load post: ' + (data.error || 'Unknown error'));
                        }
                    } catch (error) {
                        console.error('Error loading post:', error);
                        alert('Error loading post');
                    } finally {
                        setIsLoading(false);
                    }
                };
                fetchPost();
            } else {
                // If creating new post, just stop loading
                setIsLoading(false);
            }
        }
    }, [postId, mounted, role]);


    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });
                const data = await res.json();

                if (data.success) {
                    setCoverImage(data.url);
                } else {
                    alert('Upload failed: ' + data.error);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Upload failed');
            }
        }
    };

    const handleSave = async () => {
        if (!title || !content) {
            alert('Please fill in at least the title and content.');
            return;
        }

        setIsSaving(true);
        try {
            const method = postId ? 'PUT' : 'POST';
            const body = {
                title,
                description,
                content,
                coverImage,
                status: 'Published',
                ...(postId && { _id: postId }),
            };

            const res = await fetch('/api/blog', {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (data.success) {
                alert(`Blog post ${postId ? 'updated' : 'published'} successfully!`);
                if (!postId) {
                    // Optionally clear form or redirect
                }
            } else {
                alert('Failed to save: ' + data.error);
            }
        } catch (error) {
            console.error('Error saving post:', error);
            alert('An error occurred while saving.');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }


    const handleGenerate = async (type: 'title' | 'content' = 'content') => {
        if (!title && type === 'content') {
            alert('Please enter a title first to generate content.');
            return;
        }
        if (!title && type === 'title') {
            alert('Please enter at least a draft title to improve.');
            return;
        }

        setIsGenerating(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: title, type }), // Pass type to API
            });

            const data = await res.json();

            if (data.success) {
                if (type === 'title') {
                    setTitle(data.content.replace(/^"|"$/g, '')); // Remove quotes if any
                } else {
                    setContent(data.content);
                }
            } else {
                alert('Generation failed: ' + data.error);
            }
        } catch (error) {
            console.error('Error generating content:', error);
            alert('An error occurred while generating content.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 pb-20">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/blog"
                            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
                        >
                            <BiArrowBack className="text-xl" />
                        </Link>
                        <span className="text-sm font-medium text-neutral-500">
                            {postId ? 'Editing Post' : 'New Post'}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden sm:block px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                            Preview
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex items-center gap-2 px-6 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        >
                            <BiSave />
                            {isSaving ? 'Publishing...' : 'Publish'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Main Editor Area (Wider) */}
                <div className="lg:col-span-9 space-y-8">

                    {/* Title Input - Huge & Clean */}
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post Title..."
                        className="w-full text-4xl sm:text-5xl font-extrabold bg-transparent border-none outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-700 text-neutral-900 dark:text-white"
                        style={{ lineHeight: 1.2 }}
                    />

                    {/* Rich Text Editor */}
                    <div className="min-h-[500px] prose prose-lg dark:prose-invert max-w-none">
                        <RichTextEditor content={content} onChange={setContent} />
                    </div>
                </div>

                {/* Sidebar Settings (Right Side) */}
                <div className="lg:col-span-3 space-y-8">

                    {/* Cover Image Card */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                            <BiImageAdd className="text-lg" /> Cover Image
                        </h3>
                        {coverImage ? (
                            <div className="relative rounded-xl overflow-hidden group shadow-sm">
                                <img src={coverImage} alt="Cover" className="w-full h-48 object-cover" />
                                <button
                                    onClick={() => setCoverImage(null)}
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium backdrop-blur-sm"
                                >
                                    Remove Image
                                </button>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-neutral-800 transition-all cursor-pointer relative group">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                    <BiImageAdd className="text-2xl text-neutral-400" />
                                </div>
                                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                    Upload cover
                                </p>
                            </div>
                        )}
                    </div>

                    {/* SEO / Description Card */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">SEO Description</h3>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="A short summary for search engines and social previews..."
                            rows={4}
                            className="w-full px-4 py-3 text-sm rounded-xl border-none bg-white dark:bg-neutral-900 shadow-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none placeholder:text-neutral-400"
                        />
                        <div className="flex justify-end mt-2">
                            <span className={`text-xs ${description.length > 160 ? 'text-red-500' : 'text-neutral-400'}`}>
                                {description.length}/160
                            </span>
                        </div>
                    </div>

                    {/* Publishing Card */}
                    <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Settings</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm p-3 bg-white dark:bg-neutral-900 rounded-xl shadow-sm">
                                <span className="text-neutral-600 dark:text-neutral-400">Visibility</span>
                                <select className="bg-transparent text-right outline-none text-neutral-900 dark:text-white font-medium cursor-pointer">
                                    <option>Public</option>
                                    <option>Private</option>
                                    <option>Members</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
