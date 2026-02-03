import PanelRenderer from "./PanelRenderer";

type Layout = {
    panels: string[];
};

export default function LayoutComposer({ layout }: { layout: Layout }) {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            {layout.panels.map((panel) => (
                <PanelRenderer key={panel} type={panel} />
            ))}
        </div>
    );
}
