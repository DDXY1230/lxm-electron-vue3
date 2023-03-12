const {Menu, dialog} = require('electron')
const got = require('got').default
const path = require('path')
const imageType = require('image-type') // 拿到文件的扩展名
const randomstring = require('randomstring')
const fs = require('fs')
const saveas = (srcUrl) => {
  if(srcUrl) {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '图片另存为...',
        click: async () => {
          console.log('got')
         got.get(srcUrl).then(async (response) => {
          const chunk = Buffer.from(response.rawBody) // 文件
          const imgType = imageType(chunk)// 文件类型扩展名
          const result = await dialog.showSaveDialog({
            title: '图片另存为',
            defaultPath: path.resolve(__dirname, '../public/uploads/'+randomstring.generate(10)+'.'+imgType.ext)
          })
          const {filePath, canceled} = result
          if(!canceled) {
            fs.writeFileSync(filePath, chunk)
          }
         }).catch(e=> {}) 
         //------------另一种书写形式--------------
        // const result = await got.get(srcUrl)
        // const chunk = Buffer.from(result.rawBody)
        // console.log(chunk)

        },
        accelerator: 'CommandOrControl+S'
      }
    ])
    contextMenu.popup()
  }
}
module.exports = saveas