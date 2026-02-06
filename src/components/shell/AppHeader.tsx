"use client";

import RoleSwitcher from "./RoleSwitcher";
import { useEventStore } from "@/lib/useEventStore";
import { useEffect, useState } from "react";

export interface AppHeaderProps {
    onToggleAi?: () => void;
    isAiOpen?: boolean;
}

export default function AppHeader({ onToggleAi, isAiOpen = true }: AppHeaderProps) {
    const { phase } = useEventStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="flex justify-between items-center h-16 px-6 border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    ⌘
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-sm tracking-tight text-gray-900 leading-none">
                        Hackathon Command Center
                    </h1>
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">
                        {mounted ? phase.replace("_", " ") : "Loading..."} Phase
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <RoleSwitcher />

                <div className="flex items-center gap-2">
                    <button
                        onClick={onToggleAi}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-semibold transition-colors cursor-pointer ${isAiOpen
                            ? 'bg-zinc-900 text-white border-zinc-900'
                            : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                            }`}
                    >
                        AI
                    </button>
                </div>
            </div>
        </header>
    );
}
