"use client";

import { useEffect, useState } from "react";
import { resolveIntent } from "@/tambo/intentRouter";
import { layouts } from "@/lib/layoutPresets";
import LayoutComposer from "./LayoutComposer";
import { eventStore } from "@/store/eventStore";

export default function GenerativeRoot() {
    const [mounted, setMounted] = useState(false);
    const [intent, setIntent] = useState(resolveIntent());

    useEffect(() => {
        setMounted(true);

        return eventStore.subscribe(() => {
            setIntent(resolveIntent());
        });
    }, []);

    if (!mounted) return null;

    const layoutMap = {
        organizer_mode: layouts.organizer,
        judge_mode: layouts.judge,
        participant_mode: layouts.participant,
        results_mode: layouts.results,
    } as const;

    const layout = layoutMap[intent];

    return <LayoutComposer layout={layout} />;
}
