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
      const currentRole = eventStore.getRole();
      if (currentRole !== 'organizer') {
        return { success: false, message: "Permission denied: Only organizers can change the event phase." };
      }
      eventStore.setPhase(phase);
      return { success: true };
    },
    inputSchema: z.object({
      phase: z.enum(["registration", "submission", "judging", "results"]),
    }),
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string().optional(),
    }),
  },
  {
    name: "advance-to-results",
    description: "Immediately end judging and show final results",
    tool: () => {
      const currentRole = eventStore.getRole();
      if (currentRole !== 'organizer') {
        return { success: false, message: "Permission denied: Only organizers can end the event." };
      }
      eventStore.setPhase("results");
      return { success: true };
    },
    inputSchema: z.object({}),
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string().optional(),
    }),
  },
  {
    name: "check-project-status",
    description: "Look up a project status by participant name or team name",
    tool: ({ query }) => {
      const { submissions } = require("@/store/submissions");
      const lowerQuery = query.toLowerCase();

      const match = submissions.find((s: any) => {
        if (s.isSolo) {
          return s.participant?.toLowerCase().includes(lowerQuery);
        } else {
          return s.team?.name.toLowerCase().includes(lowerQuery) ||
            s.team?.members.some((m: string) => m.toLowerCase().includes(lowerQuery));
        }
      });

      if (!match) {
        return {
          success: false,
          message: `No project found for "${query}". Please check the name and try again.`
        };
      }

      return {
        success: true,
        project: match
      };
    },
    inputSchema: z.object({
      query: z.string().describe("Name of the participant or team to look up"),
    }),
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string().optional(),
      project: z.object({
        title: z.string(),
        description: z.string(),
        status: z.enum(["pending", "reviewed", "approved", "rejected"]),
        isSolo: z.boolean(),
        participant: z.string().optional(),
        team: z.object({
          name: z.string(),
          members: z.array(z.string())
        }).optional(),
        score: z.number().nullable()
      }).optional()
    }),
  },
];

/**
 * =========================
 * Tambo Components
 * =========================
 */

import ProjectStatusCard from "@/components/widgets/ProjectStatusCard";

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
  {
    name: "ProjectStatusCard",
    description: "A detailed status card for a specific project submission",
    component: ProjectStatusCard,
    propsSchema: z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(["pending", "reviewed", "approved", "rejected"]),
      isSolo: z.boolean(),
      participant: z.string().optional(),
      teamName: z.string().optional(),
      members: z.array(z.string()).optional(),
      score: z.number().optional()
    })
  }
];
