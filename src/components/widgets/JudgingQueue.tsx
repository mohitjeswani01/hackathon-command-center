import { submissions } from "@/store/submissions";
import { useEventStore } from "@/lib/useEventStore";

export default function JudgingQueue() {
    const { canJudge } = useEventStore();

    if (!canJudge()) {
        return (
            <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                    <p className="text-2xl mb-2 opacity-20 hidden md:block">⚖️</p>
                    <p className="text-sm italic">Judging queue unavailable</p>
                </div>
            </div>
        );
    }

    return (
        <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider text-xs">Judging Queue</h3>
                <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                    {submissions.length} Pending
                </span>
            </div>

            <ul className="space-y-3">
                {submissions.map((s) => (
                    <li key={s.id} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-gray-50/50">
                        <span className="font-medium text-sm text-gray-900">{s.title}</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded font-medium">{s.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
