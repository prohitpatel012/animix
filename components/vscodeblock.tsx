"use client";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

type Props = {
    code: string;
};

export default function CodeEditor({ code }: Props) {
    return (
        <div className="w-full text-sm rounded-md overflow-hidden bg-black">
            <CodeMirror
                value={code}
                height="auto"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                editable={false}
                basicSetup={{
                    lineNumbers: false,
                    foldGutter: false,
                    highlightActiveLine: false,
                    highlightActiveLineGutter: false
                }}
            />
        </div>
    );
}
