"use client";

import { useEventStore } from "@/lib/useEventStore";

type ProjectStatusCardProps = {
    title: string;
    description: string;
    status: "pending" | "reviewed" | "approved" | "rejected";
    isSolo: boolean;
    participant?: string;
    teamName?: string;
    members?: string[];
    score?: number;
};

export default function ProjectStatusCard({ title, description, status, isSolo, participant, teamName, members = [], score }: ProjectStatusCardProps) {

    const getStatusConfig = () => {
        switch (status) {
            case "approved": return { color: "bg-green-500", text: "text-green-700", bg: "bg-green-50", label: "Approved" };
            case "rejected": return { color: "bg-red-500", text: "text-red-700", bg: "bg-red-50", label: "Needs Revision" };
            case "reviewed": return { color: "bg-purple-500", text: "text-purple-700", bg: "bg-purple-50", label: "Reviewed" };
            default: return { color: "bg-yellow-500", text: "text-yellow-700", bg: "bg-yellow-50", label: "Pending Review" };
        }
    };

    const config = getStatusConfig();

    return (
        <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header: Project & Team/Solo */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 leading-tight">{title}</h2>
                    {isSolo ? (
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                                {participant?.charAt(0)}
                            </div>
                            <p className="text-xs text-zinc-500 font-medium">{participant} <span className="opacity-50 mx-1">•</span> Solo</p>
                        </div>
                    ) : (
                        <p className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-wide">{teamName}</p>
                    )}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${config.bg} ${config.text} border border-current opacity-90`}>
                    {config.label}
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {description}
            </p>

            {/* Team Members (Only if NOT solo) */}
            {!isSolo && members.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-[10px] uppercase font-semibold text-zinc-400 mb-2">Team Members</h3>
                    <div className="flex flex-wrap gap-2">
                        {members.map((member) => (
                            <div key={member} className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-100 px-2 py-1 rounded-md">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 flex items-center justify-center text-[8px] font-bold text-zinc-600">
                                    {member.charAt(0)}
                                </div>
                                <span className="text-xs text-zinc-700">{member}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* AI Insight / Footer */}
            <div className="border-t border-zinc-100 pt-4 mt-2">
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center shrink-0">
                        <span className="text-white text-xs">AI</span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-zinc-900">System Insight</p>
                        <p className="text-xs text-zinc-500 leading-normal">
                            {status === 'pending' && `Submission received${isSolo ? '' : ' from the team'}. Judges will review it shortly. Good luck!`}
                            {status === 'reviewed' && `Judges have reviewed your${isSolo ? '' : ' team'} project. Current preliminary score: ${score}/10.`}
                            {status === 'approved' && "Congratulations! Your project has moved to the final round."}
                            {status === 'rejected' && "Unfortunately, the submission did not meet one or more criteria. Check feedback."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
