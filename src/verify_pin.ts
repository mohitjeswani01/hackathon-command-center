
import { tools } from "./lib/tambo";
import { eventStore } from "./store/eventStore";

async function runTest() {
    console.log("Starting PIN Authorization Test...");

    const setRoleTool = tools.find(t => t.name === "set-role")?.tool;
    const verifyPinTool = tools.find(t => t.name === "verify-pin")?.tool;

    if (!setRoleTool || !verifyPinTool) {
        console.error("Tools not found!");
        process.exit(1);
    }

    // 1. Initial State
    console.log("Initial Role:", eventStore.getRole());
    if (eventStore.getRole() !== "participant") {
        console.log("Resetting role to participant for test...");
        eventStore.setRole("participant"); // Direct reset
    }

    // 2. Attempt unauthorized switch
    console.log("\n--- Test 1: Attempt switch to Organizer (Expecting Challenge) ---");
    const result1 = await setRoleTool({ role: "organizer" });
    console.log("Result:", result1);
    if (result1.success === false && result1.message?.includes("PIN")) {
        console.log("PASS: Challenge received.");
    } else {
        console.error("FAIL: Did not receive PIN challenge.");
    }

    // 3. Enter WRONG PIN
    console.log("\n--- Test 2: Enter Wrong PIN (Expecting Failure) ---");
    const result2 = await verifyPinTool({ pin: "1234" });
    console.log("Result:", result2);
    if (result2.success === false && result2.message?.includes("Incorrect")) {
        console.log("PASS: Wrong PIN rejected.");
    } else {
        console.error("FAIL: Wrong PIN was not rejected properly.");
    }

    // 4. Retry unauthorized switch (to set pending state again, as failure clears it)
    console.log("\n--- Test 3: Re-initiate switch and Enter Correct PIN (Expecting Success) ---");
    await setRoleTool({ role: "organizer" }); // Set pending again
    const result3 = await verifyPinTool({ pin: "9999" });
    console.log("Result:", result3);

    if (result3.success === true && result3.message?.includes("Access granted")) {
        console.log("PASS: Correct PIN accepted.");
    } else {
        console.error("FAIL: Correct PIN rejected.");
    }

    // 5. Verify Role Change
    if (eventStore.getRole() === "organizer") {
        console.log("PASS: Role is now Organizer.");
    } else {
        console.error("FAIL: Role did not update.");
    }

    // 6. Test Privileged Switch (Organizer -> Judge)
    console.log("\n--- Test 4: Privileged Switch (Organizer -> Judge) (Expecting No PIN) ---");
    const result4 = await setRoleTool({ role: "judge" });
    console.log("Result:", result4);
    if (result4.success === true && result4.message?.includes("privileged override")) {
        console.log("PASS: Privileged switch allowed.");
        if (eventStore.getRole() === "judge") {
            console.log("PASS: Role updated to Judge.");
        }
    } else {
        console.error("FAIL: Privileged switch failed or asked for PIN.");
    }
}

runTest().catch(console.error);
