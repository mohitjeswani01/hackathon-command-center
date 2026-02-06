"use client";

import { useEventStore } from "@/lib/useEventStore";
import { useEffect, useState } from "react";

export default function PersonalStatus() {
    const { role, phase, canSubmit, canJudge } = useEventStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const isOrganizer = role === "organizer";
    const isJudge = role === "judge";

    return (
        <div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm h-full flex flex-col justify-between group hover:border-zinc-300 transition-colors">

            <div className="flex items-start justify-between">
                <div className="flex gap-3 items-center">
                    <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-inner
                        ${isOrganizer ? "bg-black text-white" : isJudge ? "bg-purple-600 text-white" : "bg-zinc-100 text-zinc-500"}
                    `}>
                        {isOrganizer ? "⌘" : isJudge ? "⚖️" : "👤"}
                    </div>
                    <div>
                        <h3 className="font-medium text-sm text-zinc-900 leading-tight">Current User</h3>
                        <p className="text-[10px] text-zinc-500 capitalize">{role}</p>
                    </div>
                </div>

                <div className={`
                    px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide border
                    ${phase === "results"
                        ? "bg-black border-black text-white"
                        : "bg-zinc-50 border-zinc-200 text-zinc-500"}
                `}>
                    {phase}
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-zinc-100 flex flex-wrap gap-2">
                {canSubmit() && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-200 rounded text-[10px] font-medium text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Submissions Open
                    </span>
                )}
                {canJudge() && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-purple-50 border border-purple-200 rounded text-[10px] font-medium text-purple-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Judging Active
                    </span>
                )}
                {!canSubmit() && !canJudge() && (
                    <span className="text-[10px] text-zinc-400 italic">Waiting for next phase...</span>
                )}
            </div>
        </div>
    );
}
