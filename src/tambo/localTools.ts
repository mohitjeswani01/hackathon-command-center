import { z } from "zod";
import { eventStore } from "@/store/eventStore";

export const localTools = [
    {
        name: "set_event_phase",
        description: "Advance or change the hackathon phase",
        tool: ({ phase }: { phase: string }) => {
            eventStore.setPhase(phase as any);
            return { success: true, phase };
        },
        inputSchema: z.object({
            phase: z.enum(["registration", "submission", "judging", "results"]),
        }),
        outputSchema: z.object({
            success: z.boolean(),
            phase: z.string(),
        }),
    },
];
