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
contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  open, // 打开子窗口
  close,// 关闭子窗口
  getFileList
})