"use client";

import { highlightCode } from "./highlightCode";

type Props = {
    code: string;
};

export default function CodeEditor({ code }: Props) {
    const html = highlightCode(code);

    return (
        <div className="w-full rounded-xl  overflow-hidden">

            {/* Editor */}
            <div className="code-editor flex max-h-[500px] overflow-auto text-sm">
                {/* Line numbers */}
                {/* <div className="select-none px-4 py-4 text-right text-slate-500">
                    {code.split("\n").map((_, i) => (
                        <div key={i} >{i + 1}</div>
                    ))}
                </div> */}

                {/* Code */}
                <pre
                    className="py-4 pr-6 whitespace-pre"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}
