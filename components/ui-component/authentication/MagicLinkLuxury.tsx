"use client";

export default function MagicLinkLuxury() {
    return (
        <div className="min-h-screen bg-[#111] flex items-center justify-center p-6">
            <div className="relative max-w-lg w-full p-12 text-center border-y border-[#c5a059] bg-[#111]">
                <div className="absolute inset-0 border-x border-[#c5a059] opacity-30 transform scale-95 pointer-events-none" />

                <h2 className="text-3xl font-serif text-[#c5a059] mb-4 tracking-widest uppercase">The Club</h2>
                <div className="w-20 h-[1px] bg-[#c5a059] mx-auto mb-10" />

                <p className="text-[#eee] font-serif italic text-lg mb-8">
                    "Simplicity is the ultimate sophistication."
                </p>

                <form className="relative z-10 max-w-xs mx-auto space-y-8">
                    <input
                        className="w-full bg-transparent border-b border-[#333] text-center text-[#c5a059] placeholder-[#555] py-3 focus:border-[#c5a059] outline-none transition-colors font-serif tracking-wide"
                        placeholder="MEMBER EMAIL"
                        type="email"
                    />

                    <button className="w-full border border-[#c5a059] text-[#c5a059] py-3 uppercase tracking-[0.2em] text-xs hover:bg-[#c5a059] hover:text-[#111] transition-all duration-500">
                        Request Access
                    </button>
                </form>

                <div className="mt-12 opacity-40">
                    <span className="text-[#c5a059] text-xs uppercase tracking-widest">Est. 2024</span>
                </div>
            </div>
        </div>
    )
}
