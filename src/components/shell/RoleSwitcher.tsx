"use client";

import { ROLES, type Role } from "@/lib/roles";
import { eventStore } from "@/store/eventStore";
import { useEffect, useState } from "react";

export default function RoleSwitcher() {
    const [role, setRole] = useState<Role>(eventStore.getRole());

    useEffect(() => {
        return eventStore.subscribe(() => {
            setRole(eventStore.getRole());
        });
    }, []);

    return (
        <div className="flex gap-2 mb-4">
            {ROLES.map((r) => (
                <button
                    key={r}
                    onClick={() => eventStore.setRole(r)}
                    className={`px-3 py-1 rounded ${role === r ? "bg-black text-white" : "bg-gray-200"
                        }`}
                >
                    {r}
                </button>
            ))}
        </div>
    );
}
