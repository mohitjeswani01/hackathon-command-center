import type { Role } from "@/lib/roles";

export type EventPhase = "registration" | "submission" | "judging" | "results";

type Listener = () => void;

const getInitial = <T extends string>(
    key: string,
    allowed: readonly T[],
    fallback: T
): T => {
    if (typeof window === "undefined") return fallback;
    const value = localStorage.getItem(key);
    return allowed.includes(value as T) ? (value as T) : fallback;
};


class EventStore {
    private role: Role = getInitial<Role>("event_role", ["organizer", "judge", "participant"], "participant");

    private phase: EventPhase = getInitial<EventPhase>(
        "event_phase",
        ["registration", "submission", "judging", "results"],
        "submission"
    );

    private listeners = new Set<Listener>();

    setRole(role: Role) {
        this.role = role;
        if (typeof window !== "undefined") localStorage.setItem("event_role", role);
        this.emit();
    }

    setPhase(phase: EventPhase) {
        this.phase = phase;
        if (typeof window !== "undefined") localStorage.setItem("event_phase", phase);
        this.emit();
    }

    canSubmit() {
        return this.phase === "submission" && this.role === "participant";
    }

    canJudge() {
        return this.phase === "judging" && this.role === "judge";
    }

    getRole(): Role {
        return this.role;
    }

    getPhase(): EventPhase {
        return this.phase;
    }

    subscribe(fn: Listener): () => void {
        this.listeners.add(fn);
        return () => {
            this.listeners.delete(fn);
        };
    }

    private emit() {
        this.listeners.forEach((l) => l());
    }
}

export const eventStore = new EventStore();
