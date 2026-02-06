"use client";

import { useEventStore } from "@/lib/useEventStore";
import { useEffect, useState, useMemo } from "react";

const getDuration = (phase: string) => {
    switch (phase) {
        case "registration": return 30 * 60; // 30m
        case "submission": return 12 * 60 * 60; // 12h
        case "judging": return 2 * 60 * 60; // 2h
        case "results": return 0;
        default: return 3600;
    }
};

export default function Countdown() {
    const { phase } = useEventStore();

    // Reset timer when phase changes
    const initialSeconds = useMemo(() => getDuration(phase), [phase]);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        setSeconds(initialSeconds);
    }, [initialSeconds]);

    useEffect(() => {
        if (seconds <= 0) return;
        const id = setInterval(() => {
            setSeconds((s) => Math.max(0, s - 1));
        }, 1000);

        return () => clearInterval(id);
    }, [seconds, phase]); // Re-run if phase changes or seconds update

    const formatTime = (totalSeconds: number) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="border border-zinc-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-center items-center text-center">

            <div className={`transition-all duration-500 ${seconds < 300 ? "scale-110 text-red-600" : "text-zinc-900"}`}>
                <div className="text-[72px] leading-none font-bold tracking-tighter tabular-nums font-mono">
                    {phase === "results" ? "00:00" : formatTime(seconds).split(":").slice(0, 2).join(":")}
                </div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.2em] mt-2">
                    {phase === "results" ? "Event Completed" : "Hours : Minutes"}
                </div>
            </div>

            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 bg-zinc-50 rounded-full border border-zinc-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide">
                    {phase.replace("_", " ")} Phase Active
                </span>
            </div>
        </div>
    );
}
