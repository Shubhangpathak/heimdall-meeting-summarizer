import { startBtn, stopBtn } from "./dom.js";



export function initRecorderUI() {
    startBtn.addEventListener("click", onStart);
    stopBtn.addEventListener("click", onStop);
}

async function onStart() {
    try {
        startBtn.disabled = true;

        const res = await window.recorder.start();
        console.log(res);
    } catch (err) {
        console.error("Failed to start recording", err);
        startBtn.disabled = false;
    }
}

async function onStop() {
    try {
        const res = await window.recorder.stop();
        console.log(res);
    } finally {
        startBtn.disabled = false;
    }
}
