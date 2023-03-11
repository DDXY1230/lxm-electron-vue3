const { app, BrowserWindow } = require('electron')
const WinState = require('electron-win-state').default
const path = require('path')
require('./controller/getSource')
require('./controller/alert')
 const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800
  })
const createWindow = () => {
 
  const win = new BrowserWindow({
    width:1000,
    height: 800,
    ...winState.winOptions,
    show: false,
    webPreferences: {
    preload: path.resolve(__dirname, 'preload/index.js')
    }
  })
  win.loadURL('http://localhost:5173/')
  win.webContents.openDevTools()
  winState.manage(win)
  win.on('ready-to-show', () => {
    win.show()
  })
}
app.whenReady().then(() => {
  createWindow()
  app.on('active', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})