"use client";

import { eventStore } from "@/store/eventStore";
import { useEffect, useState } from "react";

export default function PersonalStatus() {
    const [role, setRole] = useState(eventStore.getRole());
    const [phase, setPhase] = useState(eventStore.getPhase());

    useEffect(() => {
        return eventStore.subscribe(() => {
            setRole(eventStore.getRole());
            setPhase(eventStore.getPhase());
        });
    }, []);

    return (
        <div className="border rounded p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2">Personal Status</h3>
            <div>Role: {role}</div>
            <div>Phase: {phase}</div>

            {eventStore.canSubmit() && (
                <div className="text-green-600 mt-2">You can submit!</div>
            )}

            {eventStore.canJudge() && (
                <div className="text-blue-600 mt-2">Judging active</div>
            )}
        </div>
    );
}
