import { eventStore } from "@/store/eventStore";

export type Intent =
    | "participant_mode"
    | "judge_mode"
    | "organizer_mode"
    | "default";

export function resolveIntent(): Intent {
    const role = eventStore.getRole();

    if (role === "judge") return "judge_mode";
    if (role === "organizer") return "organizer_mode";
    if (role === "participant") return "participant_mode";

    return "default";
}
