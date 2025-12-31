"use client";

type Props = {
    active: string;
    setActive: (v: string) => void;
};

export default function Sidebar({ active, setActive }: Props) {
    const items = ["Buttons", "Cards", "Tooltips"];

    return (
        <div className="w-60">
            <h1 className="text-left font-bold text-shadow-md text-neutral-500">Components</h1>
            <aside className="p-4 space-y-1 h-screen overflow-y-auto">
                {items.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`
    group w-full text-left px-4 py-2.5 text-sm rounded-md
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50
    ${active === item
                                ? "bg-neutral-900/5 text-neutral-900 font-medium"
                                : "text-neutral-500 hover:bg-neutral-900/5 hover:text-neutral-800"
                            }
  `}
                    >
                        <span className="relative flex items-center">
                            {/* Active indicator */}
                            <span
                                className={`
        absolute left-0 h-4 w-[2px] rounded-full bg-blue-500
        transition-opacity duration-200
        ${active === item ? "opacity-100" : "opacity-0 group-hover:opacity-40"}
      `}
                            />
                            <span className="pl-3">{item}</span>
                        </span>
                    </button>

                ))}
            </aside>
        </div>
    );
}