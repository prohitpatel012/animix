"use client";

import { BiCodeAlt } from "react-icons/bi";

export default function SplitCardSide() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="p-8 lg:p-16 lg:w-1/2 flex flex-col justify-center">
                        <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-6 text-white text-2xl">
                            <BiCodeAlt />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Built for Developers</h2>
                        <p className="text-neutral-400 text-lg mb-8">
                            Our API fits right into your workflow. Strong types, comprehensive SDKs, and a CLI that makes you feel like a wizard.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-white text-black px-5 py-2.5 rounded-md font-bold hover:bg-neutral-200">Documentation</button>
                            <button className="text-white border border-white/20 px-5 py-2.5 rounded-md font-bold hover:bg-white/10">API Reference</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-neutral-950 border-l border-white/5 relative">
                        {/* Pseudo Code Block */}
                        <div className="p-8 font-mono text-sm text-neutral-400 overflow-x-auto">
                            <div className="text-green-400">import</div> <div className="text-white">Client</div> <div className="text-green-400">from</div> <div className="text-yellow-300">'@api/sdk'</div>;
                            <br /><br />
                            <div className="text-purple-400">const</div> client = <div className="text-purple-400">new</div> <div className="text-white">Client</div>({'{'} key: <div className="text-yellow-300">'sk_test_...'</div> {'}'});
                            <br /><br />
                            <div className="text-purple-400">await</div> client.users.<div className="text-blue-400">create</div>({'{'}
                            <br />&nbsp;&nbsp;email: <div className="text-yellow-300">'jane@example.com'</div>,
                            <br />&nbsp;&nbsp;role: <div className="text-yellow-300">'admin'</div>
                            <br />{'}'});
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
