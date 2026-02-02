import type { Role } from "@/lib/roles";

type Listener = () => void;

class EventStore {
    private role: Role = "participant";
    private listeners = new Set<Listener>();

    setRole(role: Role) {
        this.role = role;
        this.emit();
    }

    getRole(): Role {
        return this.role;
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
