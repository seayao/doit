const { app } = require('electron')
const { creatTray } = require('./tray')
const { createWindow } = require('./window')
let ipcMain = require('electron').ipcMain

const { NODE_ENV } = process.env

global.$api = require('./api')
global.$service= require('./service')

if (NODE_ENV === 'development') {
  // react-developer-tools
  require('electron-debug')({ showDevTools: false })
  app.on('ready', () => {
    let installExtension = require('electron-devtools-installer')
    installExtension.default(installExtension.REACT_DEVELOPER_TOOLS).then(() => {
    }).catch(err => {
      console.log('Unable to install `react-developer-tools`: \n', err)
    })
  })
}

let mainWindow = null

app.on('ready', () => {
  tray = creatTray()
    mainWindow = createWindow('home')

    // 接收置顶窗体命令
    ipcMain.on('window-top', function(event, msg) {
        mainWindow.setAlwaysOnTop(msg)
    })

    // 接收最小化窗体命令
    ipcMain.on('window-min', function() {
        mainWindow.minimize()
    })

    // 接收最大化命令
    ipcMain.on('window-max', function() {
        if (mainWindow.isMaximized()) {
            mainWindow.restore()
        } else {
            mainWindow.maximize()
        }
    })

    // 接收关闭窗体命令
    ipcMain.on('window-close', function() {
        mainWindow.close()
    })

    // 主窗体监听是否置顶
    mainWindow.on('always-on-top-changed', (event, isAlwaysOnTop) => {
        mainWindow.webContents.send('main-window-is-top', isAlwaysOnTop)
    })

    // 主窗体监听最大化及取消
    mainWindow.on('maximize', function () {
        mainWindow.webContents.send('main-window-max')
    })

    mainWindow.on('unmaximize', function () {
        mainWindow.webContents.send('main-window-unmax')
    })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('before-quit', () => {
  if (process.platform === 'win32') {
    tray.destroy()
  }
})


