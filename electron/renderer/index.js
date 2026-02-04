import { initRecorderUI } from "./recorderUI.js";

window.addEventListener("DOMContentLoaded", () => {
    initRecorderUI();
});

console.log("renderer entry loaded");

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready, wiring UI");
    initRecorderUI();
});
