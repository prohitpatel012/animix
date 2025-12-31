import ComponentCard from "./ComponentCard";



export default function MainComponentArea({
    components,
    onSelect,
}: {
    components: any[];
    onSelect: (id: string) => void;
}) {
    return (
        <div className="py-20">
            {components.map((comp) => (
                <ComponentCard
                    key={comp.id}
                    name={comp.name}
                    preview={comp.preview}
                    code={comp.code}
                    onClick={() => onSelect(comp.id)}

                />
            ))}
        </div>
    );
}
