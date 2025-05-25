import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

let mainWindow = undefined

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    // fullscreen: true,
    width: 800,
    height: 900,
    simpleFullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve('electron/preload.js')
    }
  })
  mainWindow.webContents.openDevTools()
  mainWindow.setMenu(null)
  // mainWindow.fullScreen = true
  mainWindow.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

ipcMain.handle('actions-fullscreen', () => {
  mainWindow.fullScreen = !mainWindow.fullScreen
})

// Sair do app quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});