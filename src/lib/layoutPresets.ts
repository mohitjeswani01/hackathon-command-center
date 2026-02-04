export const layouts = {
    participant: {
        panels: ["PersonalStatus", "Timeline"],
    },
    judge: {
        panels: ["JudgingQueue", "Timeline"],
    },
    organizer: {
        panels: ["PersonalStatus", "JudgingQueue", "Timeline", "Countdown"],
    },
    results: {
        panels: ["Timeline", "JudgingQueue"]
    },
};
