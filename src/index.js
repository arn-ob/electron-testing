const { app, BrowserWindow } = require('electron')
const path = require('path')

if (require('electron-squirrel-startup')) return app.quit();

let mainWindow;
const createWindow = () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegrationInWorker: true,
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            nativeWindowOpen: true,
            preload: path.join(__dirname, 'preload.js'),
        },
        title: "ThriveDesk",
        icon: __dirname + `/img/favicon.png`,
        show: false,
    });

    // Dev Tools
    // mainWindow.webContents.openDevTools();

    mainWindow.setTitle("ThriveDesk");
    mainWindow.maximize();
    mainWindow.loadURL("https://app.thrivedesk.com")
    mainWindow.on('closed', () => mainWindow = null);

    mainWindow.webContents.reloadIgnoringCache()

    mainWindow.on('page-title-updated', function (e) {
        e.preventDefault();
    });

    mainWindow.removeMenu();

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.setName("ThriveDesk")