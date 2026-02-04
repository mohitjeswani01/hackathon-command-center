"use client";

import { useState, useEffect } from "react";
import { eventStore } from "@/store/eventStore";
import type { Role } from "@/lib/roles";
import type { EventPhase } from "@/store/eventStore";

export function useEventStore() {
    const [role, setRole] = useState<Role>(eventStore.getRole());
    const [phase, setPhase] = useState<EventPhase>(eventStore.getPhase());

    useEffect(() => {
        return eventStore.subscribe(() => {
            setRole(eventStore.getRole());
            setPhase(eventStore.getPhase());
        });
    }, []);

    return {
        role,
        phase,
        setRole: (r: Role) => eventStore.setRole(r),
        setPhase: (p: EventPhase) => eventStore.setPhase(p),
        canJudge: eventStore.canJudge.bind(eventStore),
        canSubmit: eventStore.canSubmit.bind(eventStore),
    };
}
