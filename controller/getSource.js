const {
  ipcMain,
  BrowserWindow
} = require('electron')
const getSource = (url) => {
  return new Promise((resolve, reject) => {
    // 根据url抓取进行操作
    const win = new BrowserWindow({ // 创建一个不显示的窗口
      width: 500,
      height: 500,
      show: false,
      webPreferences: {
        offscreen: true // 这个窗口只是在内存里做事情,不是真正的显示
      }
    })
    win.loadURL(url)
    win.webContents.on('did-finish-load', async () => {
      // 页面加载完毕
      const title = win.getTitle() // 获取窗口的title
      console.log('抓取到的网页的title', title)
      try {

        const image = await win.webContents.capturePage() // 截取网页的图片 nativeImage
        const screenshot = image.toDataURL() // 把抓取的图片转成一个base64的图片
        if(image.isEmpty()) {
          resolve({
            msg: '无法访问该站点'
          })
          return
        }
        resolve({
          title,
          screenshot,
          url
        })

      } catch (e) {
        console.error('截取图片出错了', e)
        reject(e)
      }

    })
    // return '主进程收到了url'
  })
}
// 获取网站的截图
ipcMain.handle('on-url-event', async (event, url) => {
  const result = await getSource(url)
  return result
})