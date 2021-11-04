const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 450,
        maxWidth: 450,
        height: 650,
        maxHeight: 650,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        backgroundColor: '#007fff',
        autoHideMenuBar: true
    })

    mainWindow.loadFile('../pages/index.html')

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})