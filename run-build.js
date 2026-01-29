const { spawn } = require("child_process");

console.log("started recording..");

const record = spawn("node", ["sound-recorder/record.js"], {
    stdio: ["inherit", "inherit", "inherit"]
});

record.on("close", () => {
    console.log("Recording finished");
    console.log("Starting transcription...");

    const transcribe = spawn("python", ["transcribe.py"], {
        stdio: ["inherit", "inherit", "inherit"]
    });

    transcribe.on("close", () => {
        console.log("Pipeline complete");
    });
});
