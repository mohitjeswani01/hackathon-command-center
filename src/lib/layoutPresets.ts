export type PanelConfig = {
    type: string;
    colSpan?: { md?: number; lg?: number; xl?: number };
};

export type LayoutConfig = {
    panels: PanelConfig[];
};

export const layouts: Record<string, LayoutConfig> = {
    participant: {
        panels: [
            { type: "PersonalStatus", colSpan: { md: 1, lg: 3 } },
            { type: "Timeline", colSpan: { md: 1, lg: 9 } },
        ],
    },
    judge: {
        panels: [
            { type: "PersonalStatus", colSpan: { md: 1, lg: 3 } },
            { type: "JudgingQueue", colSpan: { md: 1, lg: 9 } },
            { type: "Timeline", colSpan: { md: 2, lg: 12 } },
        ],
    },
    organizer: {
        panels: [
            { type: "PersonalStatus", colSpan: { md: 1, lg: 3 } },
            { type: "JudgingQueue", colSpan: { md: 1, lg: 6 } }, // Center stage
            { type: "Countdown", colSpan: { md: 1, lg: 3 } },
            { type: "Timeline", colSpan: { md: 2, lg: 12 } }, // Full width flow
        ],
    },
    results: {
        panels: [
            { type: "Timeline", colSpan: { md: 2, lg: 12 } },
            { type: "JudgingQueue", colSpan: { md: 2, lg: 12 } } // Full width for results
        ]
    },
};
