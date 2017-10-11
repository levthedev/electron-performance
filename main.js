const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      nodeIntegration: false
    }
  })
  mainWindow.loadURL('https://chat.zulip.org')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.webContents.on('did-finish-load', function() {
 	  mainWindow.webContents.insertCSS('.message_table { transform: translate3d(0,0,0); }')
 	 //  mainWindow.webContents.insertCSS('.message-table { will-change: transform; }')
  })
}

app.on('ready', createWindow)

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
