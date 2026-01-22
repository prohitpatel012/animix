"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import ImageExtension from '@tiptap/extension-image';
import {
    BiBold, BiItalic, BiUnderline, BiStrikethrough, BiCode,
    BiListUl, BiListOl, BiAlignLeft, BiAlignRight,
    BiLink, BiHeading, BiUndo, BiRedo, BiImage
} from 'react-icons/bi';
import { useCallback, useEffect } from 'react';

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) {
            return;
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    return (
        <div className="border-b border-neutral-200 dark:border-neutral-800 p-2 flex flex-wrap gap-1 bg-neutral-50 dark:bg-neutral-900 rounded-t-xl sticky top-0 z-10">
            {/* History */}
            <div className="flex items-center gap-1 border-r border-neutral-300 dark:border-neutral-700 pr-2 mr-1">
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 disabled:opacity-30 transition-colors"
                    title="Undo"
                >
                    <BiUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 disabled:opacity-30 transition-colors"
                    title="Redo"
                >
                    <BiRedo />
                </button>
            </div>

            {/* Text Style */}
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('bold') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Bold"
            >
                <BiBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('italic') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Italic"
            >
                <BiItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('underline') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Underline"
            >
                <BiUnderline />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('strike') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Strikethrough"
            >
                <BiStrikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('code') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Code"
            >
                <BiCode />
            </button>

            {/* Alignment */}
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Align Left"
            >
                <BiAlignLeft />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Align Right"
            >
                <BiAlignRight />
            </button>

            {/* Structure */}
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Heading 2"
            >
                <BiHeading />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('bulletList') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Bullet List"
            >
                <BiListUl />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('orderedList') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Ordered List"
            >
                <BiListOl />
            </button>

            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-1 self-center" />

            <button
                onClick={setLink}
                className={`p-2 rounded-lg transition-colors ${editor.isActive('link') ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}
                title="Link"
            >
                <BiLink />
            </button>
            <button
                onClick={() => {
                    const url = window.prompt('Enter Image URL');
                    if (url) {
                        editor.chain().focus().setImage({ src: url }).run();
                    }
                }}
                className={`p-2 rounded-lg transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400`}
                title="Insert Image (or Drag & Drop)"
            >
                <BiImage />
            </button>
        </div>
    );
};

export default function RichTextEditor({ content, onChange }: { content: string, onChange: (html: string) => void }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Write something amazing...',
            }),
            Underline,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-500 underline cursor-pointer',
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            ImageExtension,
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base focus:outline-none min-h-[300px] px-6 py-4 max-w-none',
            },
            handleDrop: (view, event, slice, moved) => {
                if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
                    const file = event.dataTransfer.files[0];
                    if (file.type.startsWith('image/')) {
                        uploadImage(file, view);
                        return true; // handled
                    }
                }
                return false;
            },
            handlePaste: (view, event, slice) => {
                const items = event.clipboardData?.items;
                if (items) {
                    for (const item of items) {
                        if (item.type.startsWith('image/')) {
                            const file = item.getAsFile();
                            if (file) {
                                uploadImage(file, view);
                                return true;
                            }
                        }
                    }
                }
                return false;
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false,
    });

    const uploadImage = async (file: File, view: any) => {
        // Optimistic UI could be added here (placeholder)
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success && data.url) {
                const { schema } = view.state;
                const node = schema.nodes.image.create({ src: data.url });
                const transaction = view.state.tr.replaceSelectionWith(node);
                view.dispatch(transaction);
            } else {
                alert('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image upload failed');
        }
    };

    useEffect(() => {
        if (editor && content) {
            if (editor.getHTML() !== content) {
                editor.commands.setContent(content);
            }
        }
    }, [content, editor]);

    return (
        <div className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className="flex-1" />
        </div>
    );
}

// Add some custom styles for the editor content in your global css if needed,
// though Tailwind Typography (prose) handles most of it.
