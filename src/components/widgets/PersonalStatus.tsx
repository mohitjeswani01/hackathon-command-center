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
        <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm h-full flex flex-col justify-between group hover:border-zinc-300 transition-colors">

            <div className="flex items-start justify-between">
                <div className="flex gap-3">
                    <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-inner
                        ${isOrganizer ? "bg-black text-white" : isJudge ? "bg-purple-600 text-white" : "bg-zinc-100 text-zinc-500"}
                    `}>
                        {isOrganizer ? "⌘" : isJudge ? "⚖️" : "👤"}
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-900 leading-tight">Current User</h3>
                        <p className="text-xs text-zinc-500 mt-0.5 capitalize">{role} View</p>
                    </div>
                </div>

                <div className={`
                    px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide border
                    ${phase === "results"
                        ? "bg-black border-black text-white"
                        : "bg-zinc-50 border-zinc-200 text-zinc-500"}
                `}>
                    {phase}
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex gap-2">
                {canSubmit() && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-200 rounded text-[11px] font-medium text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Submissions Open
                    </span>
                )}
                {canJudge() && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-purple-50 border border-purple-200 rounded text-[11px] font-medium text-purple-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Judging Active
                    </span>
                )}
                {!canSubmit() && !canJudge() && (
                    <span className="text-xs text-zinc-400 italic">Waiting for next phase...</span>
                )}
            </div>
        </div>
    );
}
