"use client";

import { useEffect, useState } from "react";
import { resolveIntent } from "@/tambo/intentRouter";
import { layouts } from "@/lib/layoutPresets";
import LayoutComposer from "./LayoutComposer";
import { eventStore } from "@/store/eventStore";

export default function GenerativeRoot() {
    const [intent, setIntent] = useState(resolveIntent());

    useEffect(() => {
        return eventStore.subscribe(() => {
            setIntent(resolveIntent());
        });
    }, []);

    const layout =
        intent === "organizer_mode"
            ? layouts.organizer
            : intent === "judge_mode"
                ? layouts.judge
                : layouts.participant;

    return <LayoutComposer layout={layout} />;
}
