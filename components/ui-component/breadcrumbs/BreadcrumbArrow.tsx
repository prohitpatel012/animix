"use client";

export default function BreadcrumbArrow() {
    return (
        <div className="bg-white dark:bg-neutral-950 p-8">
            <nav aria-label="Breadcrumb">
                <ol className="flex text-sm font-medium text-white">
                    <li className="flex items-center bg-indigo-600 px-4 py-2 clip-path-arrow">
                        <a href="#">Step 1</a>
                    </li>
                    <li className="flex items-center bg-indigo-500 px-4 pl-8 py-2 -ml-4 clip-path-arrow">
                        <a href="#">Step 2</a>
                    </li>
                    <li className="flex items-center bg-indigo-400 px-4 pl-8 py-2 -ml-4 clip-path-arrow">
                        <a href="#">Step 3</a>
                    </li>
                    <li className="flex items-center bg-neutral-200 text-neutral-600 px-4 pl-8 py-2 -ml-4 clip-path-arrow-end">
                        <span>Step 4</span>
                    </li>
                </ol>
            </nav>
            <style jsx>{`
            .clip-path-arrow {
                clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 15px 50%);
            }
            .clip-path-arrow:first-child {
                clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%);
            }
            .clip-path-arrow-end {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%);
            }
        `}</style>
        </div>
    )
}
