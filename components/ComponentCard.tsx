'use client'

import { useState } from "react";

import { MdOutlinePreview } from "react-icons/md";
import { IoLogoCodepen } from "react-icons/io";
import { BiCheck, BiCopy } from "react-icons/bi";

import CodeEditor from "./vscodeblock";


// app/components/ComponentCard.tsx
export default function ComponentCard({
    name,
    code,
    docs,
    preview,

    layout = 'default',
}: {
    name: string;
    code?: string;
    docs?: React.ReactNode;
    preview: React.ReactNode;

    layout?: 'default' | 'vertical';
}) {

    const [view, setView] = useState<'preview' | 'code'>('preview');
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code || '');
        setCopied(true);

        // reset after 2 seconds
        setTimeout(() => setCopied(false), 2000);
    };

    if (layout === 'vertical') {
        return (
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>
                </div>

                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-black mb-6">
                    <div className="p-8 lg:p-12 min-h-[300px] flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[16px_16px]">
                        {preview}
                    </div>
                </div>

                <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
                    {docs ? (
                        <div className="p-6 prose dark:prose-invert max-w-none">
                            {docs}
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-end p-2 border-b border-neutral-800 bg-neutral-950 rounded-t-lg">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                                >
                                    {copied ? <BiCheck className="size-4" /> : <BiCopy className="size-4" />}
                                    <span>{copied ? "Copied" : "Copy Code"}</span>
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <CodeEditor code={code || ''} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }



    return (
        <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>

                <div className="flex bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setView('preview')
                        }}
                        className={`
                            flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                            ${view === 'preview'
                                ? 'bg-white dark:bg-black text-neutral-900 dark:text-white shadow-sm'
                                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                            }
                        `}
                    >
                        <MdOutlinePreview className="size-4" />
                        <span>Preview</span>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setView('code')
                        }}
                        className={`
                            flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                            ${view === 'code'
                                ? 'bg-white dark:bg-black text-neutral-900 dark:text-white shadow-sm'
                                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                            }
                        `}
                    >
                        <IoLogoCodepen className="size-4" />
                        <span>{docs ? 'Docs' : 'Code'}</span>
                    </button>
                </div>
            </div>

            <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-black">
                {view === 'preview' ? (
                    <div className="p-8 lg:p-12 min-h-[300px] flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[16px_16px]">
                        {preview}
                    </div>
                ) : (
                    <div className="bg-white dark:bg-black p-6 prose dark:prose-invert max-w-none">
                        {docs ? docs : (
                            <div>
                                <div className="flex justify-end p-2 border-b border-neutral-800 bg-neutral-950 rounded-t-lg">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                                    >
                                        {copied ? <BiCheck className="size-4" /> : <BiCopy className="size-4" />}
                                        <span>{copied ? "Copied" : "Copy Code"}</span>
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <CodeEditor code={code || ''} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );


}
