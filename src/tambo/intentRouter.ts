import { eventStore } from "@/store/eventStore";

export type Intent =
    | "organizer_mode"
    | "judge_mode"
    | "participant_mode"
    | "results_mode";

export function resolveIntent(): Intent {
    const role = eventStore.getRole();
    const phase = eventStore.getPhase();

    if (phase === "results") return "results_mode";
    if (role === "organizer") return "organizer_mode";
    if (role === "judge") return "judge_mode";

    return "participant_mode";
}
