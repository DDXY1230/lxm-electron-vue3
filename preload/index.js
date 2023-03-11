const { contextBridge, ipcRenderer } = require('electron')
const sendUrl = async (url) => {
  let result = await ipcRenderer.invoke('on-url-event', url)
  // console.log('result', result)
  return result
}
const alert = (msg) => {
  ipcRenderer.invoke('on-alert-event', msg)
}
contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert
})