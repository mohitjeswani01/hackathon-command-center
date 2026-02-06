"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DEMO_STATES = [
    {
        role: "participant",
        phase: "registration",
        command: "Show my participant status",
        response: "Here is your participant dashboard.",
        widgets: ["status"]
    },
    {
        role: "organizer",
        phase: "registration",
        command: "Switch to organizer mode",
        response: "dashboard updated to Organizer View.",
        widgets: ["status", "timeline", "stats"]
    },
    {
        role: "organizer",
        phase: "judging",
        command: "Start the judging phase",
        response: "Phase updated to Judging. Queue unlocked.",
        widgets: ["status", "timeline", "queue"]
    }
];

export default function LandingDemo() {
    const [step, setStep] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isAiOpen, setIsAiOpen] = useState(true);

    const currentState = DEMO_STATES[step];


    useEffect(() => {
        let cancelled = false;

        const cycle = async () => {
            // Reset text
            setTypedText("");
            setIsTyping(true);

            // Type
            const cmd = DEMO_STATES[step].command;
            for (let i = 0; i <= cmd.length; i++) {
                if (cancelled) return;
                setTypedText(cmd.slice(0, i));
                await new Promise(r => setTimeout(r, 50)); // Typing speed
            }
            setIsTyping(false);

            // Pause before "Execute"
            await new Promise(r => setTimeout(r, 1000));
            if (cancelled) return;

            // "Execute" -> Advance State
            const nextStep = (step + 1) % DEMO_STATES.length;
            setStep(nextStep);

            // Pause before starting next typing to show the "Result"
            await new Promise(r => setTimeout(r, 2000));
        };

        cycle();

        return () => { cancelled = true; };
    }, [step]);


    // Helper to determine if a widget is active in PREVIOUS state (for animation continuity) vs CURRENT
    // Actually, just render based on current state.

    return (
        <div className="w-full max-w-5xl aspect-[16/9] bg-zinc-100 rounded-xl shadow-2xl border border-zinc-200 overflow-hidden relative flex flex-col md:flex-row">

            {/* Left: Dashboard Visualization */}
            <div className="flex-1 p-6 relative bg-zinc-50/50 flex flex-col gap-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <AnimatePresence mode="popLayout" initial={false}>
                    {/* Header Simulation */}
                    <motion.div
                        key="header-sim"
                        layout
                        className="h-12 bg-white rounded-lg border border-zinc-200 shadow-sm flex items-center px-4 justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs">⌘</div>
                            <span className="text-xs font-semibold text-zinc-900">Command Center</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <motion.div
                                key={`phase-${step}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[10px] uppercase tracking-wider font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded"
                            >
                                {DEMO_STATES[step].phase}
                            </motion.div>
                            {!isAiOpen && (
                                <button
                                    onClick={() => setIsAiOpen(true)}
                                    className="p-1.5 hover:bg-zinc-100 rounded-md text-zinc-500 transition-colors"
                                    title="Open AI Assistant"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="9" y1="3" x2="9" y2="21"></line>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </motion.div>

                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {/* PERSONAL STATUS WIDGET */}
                        <motion.div
                            layoutId="status"
                            className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm flex flex-col justify-between col-span-1 row-span-1"
                        >
                            <div className="flex gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${DEMO_STATES[step].role === 'organizer' ? 'bg-black text-white' : 'bg-zinc-100'}`}>
                                    {DEMO_STATES[step].role === 'organizer' ? '⌘' : '👤'}
                                </div>
                                <div>
                                    <div className="h-3 w-20 bg-zinc-900/10 rounded mb-1" />
                                    <div className="h-2 w-12 bg-zinc-900/5 rounded" />
                                </div>
                            </div>
                        </motion.div>

                        {/* TIMELINE WIDGET (Organizer Only) */}
                        {DEMO_STATES[step].widgets.includes("timeline") && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                layoutId="timeline"
                                className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm col-span-2"
                            >
                                <div className="flex items-center justify-between opacity-50">
                                    <div className="h-2 w-full bg-zinc-100 rounded full relative overflow-hidden">
                                        <div className={`absolute left-0 top-0 bottom-0 bg-blue-500 transition-all duration-500 ${DEMO_STATES[step].phase === 'judging' ? 'w-2/3' : 'w-1/3'}`} />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STATS WIDGET (Organizer Only) */}
                        {DEMO_STATES[step].widgets.includes("stats") && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm flex items-center justify-center"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-zinc-900">124</div>
                                    <div className="text-[10px] text-zinc-400 uppercase">Participants</div>
                                </div>
                            </motion.div>
                        )}

                        {/* QUEUE WIDGET (Judging Only) */}
                        {DEMO_STATES[step].widgets.includes("queue") && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm col-span-1 row-span-2 overflow-hidden"
                            >
                                <div className="space-y-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-8 bg-zinc-50 border border-zinc-100 rounded flex items-center px-2">
                                            <div className="w-4 h-4 rounded bg-zinc-200" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                </AnimatePresence>
            </div>

            {/* Right: Chat Simulation */}
            <AnimatePresence mode="popLayout">
                {isAiOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "20rem", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="bg-white border-l border-zinc-200 flex flex-col z-10 overflow-hidden"
                        style={{ width: "20rem" }}
                    >
                        <div className="p-3 border-b border-zinc-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">AI Assistant</span>
                            <button
                                onClick={() => setIsAiOpen(false)}
                                className="text-zinc-400 hover:text-zinc-600 p-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 p-4 space-y-4 overflow-hidden relative min-w-[20rem]">
                            {/* Previous messages history simulation could go here but simpler is better */}
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-zinc-100 text-zinc-600 rounded-lg rounded-tl-none px-3 py-2 text-xs max-w-[85%]">
                                        {DEMO_STATES[step === 0 ? 2 : step - 1].response}
                                    </div>
                                </motion.div>

                                <motion.div
                                    layout
                                    className="mt-auto flex justify-end"
                                >
                                    <div className="bg-black text-white rounded-lg rounded-tr-none px-3 py-2 text-xs shadow-md">
                                        {isTyping ? typedText : DEMO_STATES[step].command}
                                        <span className="animate-pulse">|</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Input Area Fake */}
                        <div className="p-3 border-t border-zinc-100 bg-zinc-50 min-w-[20rem]">
                            <div className="h-8 bg-white border border-zinc-200 rounded-md shadow-sm w-full" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
