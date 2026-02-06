"use client";

import { ROLES, type Role } from "@/lib/roles";
import { eventStore } from "@/store/eventStore";
import { useEffect, useState } from "react";

export default function RoleSwitcher() {
    const [mounted, setMounted] = useState(false);
    const [role, setRole] = useState<Role>("participant");

    useEffect(() => {
        setMounted(true);
        setRole(eventStore.getRole());

        return eventStore.subscribe(() => {
            setRole(eventStore.getRole());
        });
    }, []);

    const handleRoleSwitch = (target: Role) => {
        // 1. If already privileged, allow free switching
        if (role === "organizer" || role === "judge") {
            eventStore.setRole(target);
            return;
        }

        // 2. If participant wants to switch to privileged role -> Challenge
        if (role === "participant") {
            if (target === "organizer") {
                const pin = window.prompt("Enter Organizer PIN:");
                if (pin === "9999") {
                    eventStore.setRole(target);
                    // alert("Access Granted");
                } else if (pin !== null) {
                    alert("Incorrect PIN");
                }
                return;
            }

            if (target === "judge") {
                const pin = window.prompt("Enter Judge PIN:");
                if (pin === "5555") {
                    eventStore.setRole(target);
                    // alert("Access Granted");
                } else if (pin !== null) {
                    alert("Incorrect PIN");
                }
                return;
            }
        }

        // 3. Fallback (participant -> participant)
        eventStore.setRole(target);
    };

    if (!mounted) return null;

    return (
        <div className="flex gap-2 mb-4">
            {ROLES.map((r) => (
                <button
                    key={r}
                    onClick={() => handleRoleSwitch(r)}
                    className={`px-3 py-1 rounded ${role === r ? "bg-black text-white" : "bg-gray-200"
                        }`}
                >
                    {r}
                </button>
            ))}
        </div>
    );
}
