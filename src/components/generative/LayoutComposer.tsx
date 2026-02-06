import PanelRenderer from "./PanelRenderer";
import type { LayoutConfig } from "@/lib/layoutPresets";

const MD_SPANS: Record<number, string> = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12",
};

const LG_SPANS: Record<number, string> = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12",
};

export default function LayoutComposer({ layout }: { layout: LayoutConfig }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-6 transition-all duration-500 ease-in-out">
            {layout.panels.map((panel, index) => {
                const mdClass = panel.colSpan?.md ? MD_SPANS[panel.colSpan.md] : "md:col-span-1";
                const lgClass = panel.colSpan?.lg ? LG_SPANS[panel.colSpan.lg] : "lg:col-span-4";

                return (
                    <div
                        key={panel.type + index}
                        className={`
                            ${mdClass} ${lgClass}
                            transition-all duration-500 ease-spring animate-in fade-in zoom-in-95
                        `}
                    >
                        <PanelRenderer type={panel.type} />
                    </div>
                );
            })}
        </div>
    );
}
