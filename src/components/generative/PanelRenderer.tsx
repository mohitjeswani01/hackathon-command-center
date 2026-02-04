import PersonalStatus from "@/components/widgets/PersonalStatus";
import JudgingQueue from "@/components/widgets/JudgingQueue";
import Timeline from "@/components/widgets/Timeline";
import Countdown from "@/components/widgets/Countdown";

export default function PanelRenderer({ type }: { type: string }) {
    switch (type) {
        case "PersonalStatus":
            return <PersonalStatus />;
        case "JudgingQueue":
            return <JudgingQueue />;
        case "Timeline":
            return <Timeline />;
        case "Countdown":
            return <Countdown />;
        default:
            return (
                <div className="border rounded p-4 bg-white shadow-sm">
                    Unknown panel: {type}
                </div>
            );
    }
}
