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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link
                        href="/blog"
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
                    >
                        <BiArrowBack className="text-xl" />
                    </Link>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{postId ? 'Edit Post' : 'Write New Post'}</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        Preview
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <BiSave />
                        {isSaving ? 'Publishing...' : 'Publish'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Title Input */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Post Title
                            </label>
                            <button
                                onClick={() => handleGenerate('content')}
                                disabled={isGenerating || !title}
                                className="text-xs flex items-center gap-1 text-purple-600 font-medium hover:text-purple-700 disabled:opacity-50"
                            >
                                {isGenerating ? 'Generating...' : '✨ Generate Content with AI'}
                            </button>
                        </div>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a descriptive title..."
                            className="w-full px-4 py-3 text-lg font-semibold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:font-normal"
                        />
                        {title && (
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleGenerate('title')}
                                    disabled={isGenerating}
                                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    ✨ Improve Title
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Rich Text Editor */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Content
                        </label>
                        <RichTextEditor content={content} onChange={setContent} />
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    {/* Cover Image */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Cover Image</h3>

                        {coverImage ? (
                            <div className="relative rounded-lg overflow-hidden group">
                                <img src={coverImage} alt="Cover" className="w-full h-40 object-cover" />
                                <button
                                    onClick={() => setCoverImage(null)}
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium"
                                >
                                    Remove Image
                                </button>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <BiImageAdd className="text-3xl text-neutral-400 mb-2" />
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-neutral-500 mt-1">SVG, PNG, JPG or GIF</p>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Short Description</h3>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write a brief summary for SEO and cards..."
                            rows={4}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        />
                        <p className="text-xs text-neutral-500 mt-2 text-right">
                            {description.length}/160 characters
                        </p>
                    </div>

                    {/* Meta Info */}
                    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Publishing</h3>

                        <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-600 dark:text-neutral-400">Status</span>
                            <span className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium">
                                Draft
                            </span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-600 dark:text-neutral-400">Visibility</span>
                            <select className="bg-transparent text-right outline-none text-neutral-900 dark:text-white cursor-pointer">
                                <option>Public</option>
                                <option>Private</option>
                                <option>Members Only</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
