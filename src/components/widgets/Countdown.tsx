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
        <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full flex flex-col justify-center items-center">
            <h3 className="font-semibold text-gray-400 uppercase tracking-wider text-xs mb-2">Time Remaining</h3>
            <div className="text-4xl font-mono mobile-nums tracking-tight font-bold text-gray-900 tabular-nums">
                {phase === "results" ? "00:00:00" : formatTime(seconds)}
            </div>
            <div className="text-xs text-gray-400 mt-1 capitalize font-medium">{phase.replace("_", " ")} Phase</div>
        </div>
    );
}
