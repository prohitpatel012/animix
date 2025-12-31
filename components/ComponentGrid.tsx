import ComponentCard from "./ComponentCard";



export default function ComponentGrid({
    components,
    onSelect,
}: {
    components: any[];
    onSelect: (id: string) => void;
}) {
    return (
        <div className="">
            {components.map((comp) => (
                <ComponentCard
                    key={comp.id}
                    name={comp.name}
                    code={comp.code}
                    preview={comp.preview}
                    onClick={() => onSelect(comp.id)}

                />
            ))}
        </div>
    );
}
