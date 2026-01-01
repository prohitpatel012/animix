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
    preview,
    onClick,
}: {
    name: string;
    code: string;
    preview: React.ReactNode;
    onClick: () => void;
}) {



    const [view, setView] = useState<'preview' | 'code'>('preview');
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);

        // reset after 2 seconds
        setTimeout(() => setCopied(false), 2000);
    };



    return (
        <div className="">

            <div className="flex gap-2 mb-4 px-2 lg:px-0">
                <div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setView('preview')
                        }}
                        className={`
        flex items-center gap-2
        px-3 py-2 lg:px-6 lg:py-3
        rounded-md
        text-sm font-medium
        transition-all duration-200
        ${view === 'preview'
                                ? 'bg-neutral-900 text-white shadow-sm'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }
      `}
                    >
                        <MdOutlinePreview className="size-5" />
                        <span>Preview</span>
                    </button>
                </div>

                <div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setView('code')
                        }}
                        className={`
        flex items-center gap-2
        px-3 py-2 lg:px-6 lg:py-3
        rounded-md
        text-sm font-medium
        transition-all duration-200
        ${view === 'code'
                                ? 'bg-neutral-900 text-white shadow-sm'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }
      `}
                    >
                        <IoLogoCodepen className="size-5" />
                        <span>Code</span>
                    </button>
                </div>
            </div>


            <div className="border border-gray-200 shadow rounded-md p-4 flex flex-col items-center mb-10">

                {view === 'preview' ? preview : <pre className="w-full">



                    <code className="block p-6 bg-zinc-950 text-zinc-300 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed border border-zinc-800 shadow-inner selection:bg-indigo-500/30">

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-1">
                                <div className="p-2 bg-red-500 rounded-full" />
                                <div className="p-2 bg-green-500 rounded-full" />
                                <div className="p-2 bg-blue-500 rounded-full" />
                            </div>

                            <div>
                                <button
                                    onClick={handleCopy}
                                    className="
        flex items-center gap-2 rounded-md bg-black px-4 py-2
        text-white text-sm transition
        hover:bg-neutral-800
      "
                                >
                                    {copied ? <BiCheck /> : <BiCopy />}
                                    <span>{copied ? "Copied!" : "Copy"}</span>
                                </button>
                            </div>

                        </div>




                        <CodeEditor
                            code={code}
                        />
                    </code>
                </pre>}
            </div>
        </div>
    );


}
