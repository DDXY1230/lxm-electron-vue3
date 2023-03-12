const { contextBridge, ipcRenderer } = require('electron')
const sendUrl = async (url) => {
  let result = await ipcRenderer.invoke('on-url-event', url)
  // console.log('result', result)
  return result
}
const alert = (msg) => {
  ipcRenderer.invoke('on-alert-event', msg)
}
const open = (url) => {
  ipcRenderer.invoke('on-open-event', url)
}
const close = () => {
  ipcRenderer.invoke('on-close-event')
}
const getFileList = async () => {
  const filelist = await ipcRenderer.invoke('on-getfiles-event')
  console.log(filelist)
  return filelist
}
const openDialog = () => {
  console.log('openDialog')
  ipcRenderer.send('on-opendialog-event')
}
const onRendererEvent = (cb) => { // 主进程发过来的,与以上的不同,以上都是触发主进程
  return new Promise((resolve, reject) => {
    ipcRenderer.on('on-renderer-event',(e,msg) => {
      console.log('onRendererEvent', msg)
      if(msg == 'add') cb()
      resolve(msg)
    })
  })
}
contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  open, // 打开子窗口
  close,// 关闭子窗口
  getFileList,
  openDialog,
  onRendererEvent
})