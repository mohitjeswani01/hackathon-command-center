import PanelRenderer from "./PanelRenderer";

type Layout = {
    panels: string[];
};

export default function LayoutComposer({ layout }: { layout: Layout }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6 transition-all duration-500 ease-in-out">
            {layout.panels.map((panel, index) => {
                // Simple heuristic for spanning: first item often full width or half, etc.
                // But for now, we'll keep it simple or auto-span based on count.
                // Let's make the first panel span 2 cols if it's a 3-panel layout to look uneven/organic.
                const isWide = layout.panels.length === 3 && index === 0;

                return (
                    <div
                        key={panel}
                        className={`
                            ${isWide ? "md:col-span-2 lg:col-span-8" : "md:col-span-1 lg:col-span-4"}
                            transition-all duration-500 ease-spring animate-in fade-in zoom-in-95
                        `}
                    >
                        <PanelRenderer type={panel} />
                    </div>
                );
            })}
        </div>
    );
}
