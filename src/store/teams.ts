export type Team = {
    id: string;
    name: string;
    members: string[]; // Array of User IDs
};

export const teams: Team[] = [
    { id: "t1", name: "CodeStorm", members: ["u8"] },
    { id: "t2", name: "HackSquad", members: ["u44", "u45"] },
    { id: "t3", name: "CyberSentinels", members: ["u46", "u47"] },
    { id: "t4", name: "DataDrifters", members: ["u48", "u49"] },
    { id: "t5", name: "LogicLords", members: ["u50", "u51"] },
    { id: "t6", name: "PixelPioneers", members: ["u52", "u53"] },
    { id: "t7", name: "BinaryBeasts", members: ["u54", "u55"] },
    { id: "t8", name: "CloudCrushers", members: ["u56", "u57"] },
    { id: "t9", name: "NeuralKnights", members: ["u58", "u59"] },
    { id: "t10", name: "ScriptSorcerers", members: ["u60", "u61"] },
    { id: "t11", name: "DevDynasty", members: ["u62", "u63"] },
    { id: "t12", name: "AgileAliens", members: ["u64", "u65"] },
    { id: "t13", name: "ByteBusters", members: ["u66", "u67"] },
    { id: "t14", name: "QuantumQuests", members: ["u68", "u69"] },
    { id: "t15", name: "SyntaxSlayers", members: ["u70", "u71"] },
    { id: "t16", name: "VectorVanguards", members: ["u72", "u73"] },
    { id: "t17", name: "KernelKings", members: ["u74", "u75"] },
    { id: "t18", name: "FrontierFixers", members: ["u76", "u77"] },
    { id: "t19", name: "MatrixMinds", members: ["u78", "u79"] },
    { id: "t20", name: "InfinityIterators", members: ["u80", "u81"] },
    { id: "t21", name: "LegacyLifters", members: ["u82", "u83"] },
    { id: "t22", name: "AlphaArchitects", members: [] },
];