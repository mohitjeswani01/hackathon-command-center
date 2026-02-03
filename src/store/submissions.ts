export type Submission = {
    id: string;
    teamId: string;
    title: string;
    status: "pending" | "reviewed";
    score: number | null;
};

export const submissions: Submission[] = [
    { id: "s1", teamId: "t1", title: "hackathon command center", status: "pending", score: null },
    { id: "s2", teamId: "t2", title: "Smart Campus", status: "reviewed", score: 8.5 },
    // 20 New Submissions
    { id: "s3", teamId: "t3", title: "Blockchain Supply Tracker", status: "reviewed", score: 9.2 },
    { id: "s4", teamId: "t4", title: "Eco-Friendly Routing API", status: "pending", score: null },
    { id: "s5", teamId: "t5", title: "Neural Style Transfer Tool", status: "reviewed", score: 7.8 },
    { id: "s6", teamId: "t6", title: "Real-time Sign Language Translator", status: "pending", score: null },
    { id: "s7", teamId: "t7", title: "Pothole Detection System", status: "reviewed", score: 8.9 },
    { id: "s8", teamId: "t8", title: "Smart Inventory Manager", status: "pending", score: null },
    { id: "s9", teamId: "t9", title: "Deepfake Audio Detector", status: "reviewed", score: 9.5 },
    { id: "s10", teamId: "t10", title: "Augmented Reality Furniture Placer", status: "pending", score: null },
    { id: "s11", teamId: "t11", title: "Automated Crop Disease Monitor", status: "reviewed", score: 8.2 },
    { id: "s12", teamId: "t12", title: "Voice-Controlled Smart Mirror", status: "pending", score: null },
    { id: "s13", teamId: "t13", title: "Local Store Loyalty Engine", status: "reviewed", score: 7.4 },
    { id: "s14", teamId: "t14", title: "Privacy-Focused Messaging App", status: "pending", score: null },
    { id: "s15", teamId: "t15", title: "Decentralized Voting Platform", status: "reviewed", score: 9.0 },
    { id: "s16", teamId: "t16", title: "Smart Traffic Management System", status: "pending", score: null },
    { id: "s17", teamId: "t17", title: "AI-Powered Personal Finance Bot", status: "reviewed", score: 8.7 },
    { id: "s18", teamId: "t18", title: "E-waste Recycling Portal", status: "pending", score: null },
    { id: "s19", teamId: "t19", title: "Health Vitals Dashboard", status: "reviewed", score: 7.9 },
    { id: "s20", teamId: "t20", title: "Community Help Network", status: "pending", score: null },
    { id: "s21", teamId: "t21", title: "Predictive Maintenance for Small Factories", status: "reviewed", score: 8.4 },
    { id: "s22", teamId: "t22", title: "Hyper-Local Delivery Optimizer", status: "pending", score: null },
];