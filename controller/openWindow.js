const { ipcMain,BrowserWindow} = require("electron");
const WinState = require('electron-win-state').default
const path = require('path')
const saveas = require('./saveas.js')
const cssText = `width: 60px;height: 30px;cursor:pointer;background-color: red;border-radius: 5px;position:fixed;bottom:30px;right:30px;z-index:999;color:#fff;line-height:30px;text-align:center;`
const js = `
const div = document.createElement('div')
div.innerHTML = '关闭窗口'
div.style.cssText = '${cssText}'
div.addEventListener('click', () => {
  console.log('关闭')
  myWinApi.close()
})
document.body.appendChild(div)
`
let win = null
ipcMain.handle("on-open-event", (e, url) => {
  const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800,
    electronStoreOptions: {
      name: 'window-state-open'// 与其他进程的窗口状态隔离,不然会在关闭后重新打开混淆了
    }
  })
  win = new BrowserWindow({
    width: 600,
    height: 400,
    ...winState.winOptions,
    show: false,
    webPreferences: {
      preload: path.resolve(__dirname,'../preload/open.js')
    }
  })
  win.on('ready-to-show', () => {
    win.show()
  })
  win.loadURL(url)
  win.webContents.openDevTools()
  winState.manage(win)
  win.webContents.executeJavaScript(js).catch(() => {})
  win.webContents.on('context-menu', (e, args) => {
    // console.log('args',args)
    saveas(args.srcURL)
  })
  
});
ipcMain.handle('on-close-event', (e) => {
  win.close()
})
