"use client"

import { useState } from 'react'
import { BiCheck, BiCopy } from "react-icons/bi";
import CodeEditor from "./vscodeblock";

export default function MDXCodeBlock({ children, className }: { children: any, className?: string }) {
    // Ensure children is a string
    const code = typeof children === 'string' ? children : String(children);

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
            <div className="flex justify-between items-center px-4 py-2 bg-neutral-900/50 border-b border-neutral-800">
                <span className="text-xs text-neutral-400 font-mono">Example</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-800/50 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors text-xs font-medium"
                >
                    {copied ? <BiCheck className="size-3.5" /> : <BiCopy className="size-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
            </div>
            <div className="">
                <CodeEditor code={code} />
            </div>
        </div>
    )
}
