const {ipcMain} = require('electron')
const fs = require('fs')
const path = require('path')
const {readdir} = require('fs/promises')
ipcMain.handle('on-getfiles-event', async (e, msg) => {
  // const files = fs.readdirSync(path.resolve(__dirname,'../public/uploads'))//方法一
  const files = await readdir(path.resolve(__dirname,'../public/uploads'))//方法二
  return files
})