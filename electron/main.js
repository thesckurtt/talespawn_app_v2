import {app, BrowserWindow, ipcMain} from 'electron'
import path from 'path'

let mainWindow = undefined

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // preload: path.resolve('preload.js')
    }
  })
  mainWindow.setMenu(null)
  mainWindow.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

// Sair do app quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});