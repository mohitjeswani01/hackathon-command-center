"use client";

import { useEventStore } from "@/lib/useEventStore";
import { useEffect, useState } from "react";
import type { EventPhase } from "@/store/eventStore";


const phases: EventPhase[] = ["registration", "submission", "judging", "results"];

export default function Timeline() {
    const { phase, setPhase, role } = useEventStore();
    const isOrganizer = role === 'organizer';

    return (
        <div className="border border-zinc-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-center">
            <h3 className="font-semibold text-zinc-400 uppercase tracking-wider text-[10px] mb-6">Program Flow</h3>

            <div className="relative">
                {/* Connector Line */}
                <div className="absolute top-[14px] left-2 right-2 h-[2px] bg-zinc-100 z-0" />

                <div className="flex justify-between relative z-10 w-full">
                    {phases.map((p, i) => {
                        const isActive = phase === p;
                        const isPast = phases.indexOf(p) < phases.indexOf(phase);
                        const isClickable = isOrganizer;

                        return (
                            <button
                                key={p}
                                onClick={() => isClickable && setPhase(p)}
                                disabled={!isClickable}
                                className={`group flex flex-col items-center gap-3 relative focus:outline-none ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <div className={`
                                    w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-10
                                    ${isActive
                                        ? "bg-zinc-900 border-white ring-2 ring-zinc-900 shadow-lg scale-110"
                                        : isPast
                                            ? "bg-zinc-200 border-white ring-2 ring-zinc-200 text-zinc-500"
                                            : "bg-white border-zinc-200 ring-0"}
                                    ${isClickable && !isActive && !isPast ? "hover:border-zinc-300" : ""}
                                `}>
                                    {isPast ? (
                                        <div className="w-2 h-2 bg-zinc-400 rounded-full" />
                                    ) : isActive ? (
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    ) : (
                                        <div className={`w-2 h-2 bg-zinc-200 rounded-full ${isClickable ? "group-hover:bg-zinc-300" : ""}`} />
                                    )}
                                </div>

                                <span className={`
                                    text-[10px] mobile-label uppercase tracking-widest font-semibold transition-colors duration-200 absolute -bottom-6 w-20 text-center
                                    ${isActive ? "text-zinc-900" : "text-zinc-400"}
                                    ${isClickable && !isActive ? "group-hover:text-zinc-500" : ""}
                                `}>
                                    {p}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Spacer for labels */}
            <div className="h-6" />
        </div>
    );
}
