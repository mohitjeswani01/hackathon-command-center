export default function PanelRenderer({ type }: { type: string }) {
    return (
        <div className="border rounded p-4 bg-white shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Panel</div>
            <div className="font-semibold">{type}</div>
        </div>
    );
}
