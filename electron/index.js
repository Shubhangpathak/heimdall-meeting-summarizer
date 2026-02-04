const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");

const { startRecording, stopRecording } = require("../sound-recorder/record")

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("./index.html");
}
ipcMain.handle("record:start", () => {
    return startRecording();
})
ipcMain.handle("record:stop", () => {
    return stopRecording();

})

app.whenReady().then(() => {
    createWindow()
}) 
