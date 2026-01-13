import React from 'react';

export const MDXTable = (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <table className="min-w-full text-left text-sm whitespace-nowrap" {...props} />
    </div>
);

export const MDXThead = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800" {...props} />
);

export const MDXTr = (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-colors" {...props} />
);

export const MDXTh = (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white" {...props} />
);

export const MDXTd = (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400" {...props} />
);
