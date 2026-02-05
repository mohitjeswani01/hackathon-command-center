"use client";

import { submissions } from "@/store/submissions";
import { useEventStore } from "@/lib/useEventStore";

export default function JudgingQueue() {
    const { role } = useEventStore();
    const canView = role === 'judge' || role === 'organizer';

    if (!canView) {
        return (
            <div className="border border-zinc-200 rounded-xl p-6 bg-white shadow-sm h-full flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl opacity-20 text-zinc-400">🚫</span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">Access Denied</h3>
                <p className="text-xs text-zinc-400 max-w-[200px]">
                    Only Judges and Organizers can view the submission queue.
                </p>
            </div>
        );
    }

    return (
        <div className="border border-zinc-200 rounded-xl bg-white shadow-sm h-full flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-50 flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="font-semibold text-zinc-400 uppercase tracking-wider text-[10px]">Review Queue</h3>
                <span className="bg-zinc-900 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                    {submissions.length} Total
                </span>
            </div>

            <div className="p-4 overflow-y-auto space-y-2.5">
                {submissions.map((s) => (
                    <div key={s.id} className="flex justify-between items-center p-4 rounded-lg border border-zinc-100 bg-zinc-50 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-sm text-zinc-900 group-hover:text-black">{s.title}</span>
                            <span className="text-[10px] text-zinc-400 font-mono">ID: #{s.id.slice(0, 6)}</span>
                        </div>
                        <span className={`
                            text-[10px] px-2 py-1 rounded font-semibold uppercase tracking-wide
                            ${s.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                            ${s.status === 'approved' ? 'bg-green-100 text-green-700' : ''}
                            ${s.status === 'rejected' ? 'bg-red-100 text-red-700' : ''}
                        `}>
                            {s.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
