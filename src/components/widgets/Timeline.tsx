"use client";

import { useEventStore } from "@/lib/useEventStore";
import { useEffect, useState } from "react";
import type { EventPhase } from "@/store/eventStore";


const phases: EventPhase[] = ["registration", "submission", "judging", "results"];

export default function Timeline() {
    const { phase, setPhase } = useEventStore();

    return (
        <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full flex flex-col justify-center">
            <h3 className="font-semibold text-gray-400 uppercase tracking-wider text-xs mb-4">Event Timeline</h3>

            <div className="relative">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                <div className="flex justify-between relative z-10">
                    {phases.map((p) => {
                        const isActive = phase === p;
                        const isPast = phases.indexOf(p) < phases.indexOf(phase);

                        return (
                            <button
                                key={p}
                                onClick={() => setPhase(p)}
                                className={`
                                    flex flex-col items-center gap-2 group transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                            >
                                <div className={`
                                    w-3 h-3 rounded-full border-2 transition-colors duration-300
                                    ${isActive
                                        ? "bg-black border-black ring-4 ring-black/5"
                                        : isPast
                                            ? "bg-gray-300 border-gray-300"
                                            : "bg-white border-gray-200 group-hover:border-gray-300"}
                                `} />
                                <span className={`
                                    text-[10px] font-medium uppercase tracking-wide transition-colors duration-300
                                    ${isActive ? "text-black" : "text-gray-400 group-hover:text-gray-600"}
                                `}>
                                    {p}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
