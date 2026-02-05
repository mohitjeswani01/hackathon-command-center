export type Submission = {
    id: string;
    title: string;
    description: string;
    status: "pending" | "reviewed";
    score: number | null;
    // Solo vs Team structure
    isSolo: boolean;
    participant?: string; // For solo
    team?: {              // For teams
        id: string;
        name: string;
        members: string[];
    };
};

export const submissions: Submission[] = [
    {
        id: "s1",
        title: "Hackathon Command Center",
        description: "A Generative UI dashboard for managing hackathons with AI.",
        status: "pending",
        score: null,
        isSolo: true,
        participant: "Mohit Jeswani"
    },
    {
        id: "s2",
        title: "Smart Campus",
        description: "IoT solution for monitoring university energy usage.",
        status: "reviewed",
        score: 8.5,
        isSolo: false,
        team: {
            id: "t2",
            name: "DataDrifters",
            members: ["Sarah Chen", "Mike Ross", "Harvey Specter"]
        }
    },
    {
        id: "s3",
        title: "Blockchain Supply Tracker",
        description: "Transparent supply chain management using Ethereum.",
        status: "pending",
        score: 9.2,
        isSolo: false,
        team: {
            id: "t3",
            name: "ChainGang",
            members: ["Alice Wonder", "Bob Builder"]
        }
    },
    {
        id: "s4",
        title: "Eco-Friendly Routing API",
        description: "Maps API that prioritizes lowest carbon footprint routes.",
        status: "pending",
        score: null,
        isSolo: true,
        participant: "Eve Polastri"
    },
    {
        id: "s5",
        title: "Neural Style Transfer Tool",
        description: "Real-time video filter app using GANs.",
        status: "reviewed",
        score: 7.8,
        isSolo: false,
        team: {
            id: "t5",
            name: "Visionaries",
            members: ["Vision Paul", "Wanda Maximoff"]
        }
    },
    {
        id: "s6",
        title: "Real-time Sign Language Translator",
        description: "CV model detecting ASL gestures via webcam.",
        status: "reviewed",
        score: 6.7,
        isSolo: false,
        team: {
            id: "t6",
            name: "Gesturize",
            members: ["Silence Breakers"]
        }
    }
];