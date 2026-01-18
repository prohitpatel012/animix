'use client';

import ComponentCard from "./ComponentCard";



export default function MainComponentArea({
    components,
}: {
    components: any[];
}) {
    return (
        <div className="space-y-4">
            {components.map((comp) => (
                <ComponentCard
                    key={comp.id}
                    name={comp.name}
                    preview={comp.preview}
                    code={comp.code}
                    docs={comp.docs}
                    onClick={() => { }}
                />
            ))}
        </div>
    );
}
