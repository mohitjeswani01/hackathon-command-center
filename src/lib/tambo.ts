import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";

import { eventStore } from "@/store/eventStore";
import PersonalStatus from "@/components/widgets/PersonalStatus";
import JudgingQueue from "@/components/widgets/JudgingQueue";
import Timeline from "@/components/widgets/Timeline";
import Countdown from "@/components/widgets/Countdown";

/**
 * =========================
 * Tambo Tools
 * =========================
 */

export const tools: TamboTool[] = [
  {
    name: "set-role",
    description: "Change the active user role in the hackathon",
    tool: ({ role }) => {
      eventStore.setRole(role);
      return { success: true };
    },
    inputSchema: z.object({
      role: z.enum(["organizer", "judge", "participant"]),
    }),
    outputSchema: z.object({
      success: z.boolean(),
    }),
  },

  {
    name: "set-phase",
    description: "Advance or change the hackathon phase",
    tool: ({ phase }) => {
      eventStore.setPhase(phase);
      return { success: true };
    },
    inputSchema: z.object({
      phase: z.enum(["registration", "submission", "judging", "results"]),
    }),
    outputSchema: z.object({
      success: z.boolean(),
    }),
  },
  {
    name: "advance-to-results",
    description: "Immediately end judging and show final results",
    tool: () => {
      eventStore.setPhase("results");
      return { success: true };
    },
    inputSchema: z.object({}),
    outputSchema: z.object({
      success: z.boolean(),
    }),
  },
];

/**
 * =========================
 * Tambo Components
 * =========================
 */

export const components: TamboComponent[] = [
  {
    name: "PersonalStatus",
    description: "Shows current role and phase",
    component: PersonalStatus,
    propsSchema: z.object({}),
  },
  {
    name: "JudgingQueue",
    description: "List of submissions waiting for review",
    component: JudgingQueue,
    propsSchema: z.object({}),
  },
  {
    name: "Timeline",
    description: "Hackathon phase timeline",
    component: Timeline,
    propsSchema: z.object({}),
  },
  {
    name: "Countdown",
    description: "Countdown timer to next phase",
    component: Countdown,
    propsSchema: z.object({}),
  },
];
