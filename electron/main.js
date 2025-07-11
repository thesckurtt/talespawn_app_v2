import { app, BrowserWindow, ipcMain, Menu } from 'electron'
import dotenv from 'dotenv';
import path from 'path'
import { User } from './model/User.js';
import { Auth } from './model/Auth.js';
import IPCMiddleware from './middleware/IPCMiddleware.cjs';
import { Game } from './model/Game.js';
dotenv.config()

let mainWindow = null

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    // fullscreen: true,
    width: 800,
    height: 900,
    simpleFullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.resolve('electron/preload.js')
    }
  })
  mainWindow.setMenu(null)
  // mainWindow.webContents.openDevTools()
  // mainWindow.fullScreen = true
  if (process.env.APP_DEBUG === "true") {
    const template = [
      {
        label: 'React',
        submenu: [
          { role: 'reload', label: 'Recarregar' },
          { role: 'forcereload', label: 'Forçar Recarregamento' },
          { type: 'separator' },
          { role: 'back', label: 'Voltar' },
          { role: 'forward', label: 'Avançar' },
          { type: 'separator' },
          { role: 'quit', label: 'Sair' },
        ]
      }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
  mainWindow.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
  createMainWindow();

  // User.getAllUsers().then(result => console.log(result))

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

ipcMain.on('actions-fullscreen', () => {
  mainWindow.fullScreen = !mainWindow.fullScreen
})

// Autenticação via IPC
ipcMain.handle('auth:login', async (event, data) => {
  const response = await Auth.login(data)
  // console.log("ipc: ", response)
  return response
})

ipcMain.handle('auth:register', async (event, data) => {
  const response = await Auth.register(data)
  console.log("ipc: ", response)
  return response
})

// User API
ipcMain.handle('user:isNewUser', IPCMiddleware(async (event, args) => {
  try {
    if (!args.error && args.jwt) {
      const response = await User.isNewUser(args.jwt.user_id)
      return { error: false, isNewUser: response.isNewUser }
    }
    return { error: true }
  } catch (error) {
    return { error: true, message: `[IPC user:isNewUser]: ${error.message || "Unexpected error"}` }
  }
}))

// Game API
ipcMain.handle('game:initialGame', IPCMiddleware(async (event, args) => {
  try {
    if (!args.error && args.jwt) {
      const response = await Game.initialGame(args.jwt.user_id)
      return { error: false, contexts: response }
    }
    return { error: true }
  } catch (error) {
    return { error: true, message: `[IPC game:getAllContexts]: ${error.message || "Unexpected error"}` }
  }
}))

if (process.env.APP_DEBUG === "true") {
  ipcMain.on("actions-devtools", () => {
    console.log('ativar o devtools')
    if (mainWindow) mainWindow.webContents.openDevTools();
  })
}

// Sair do app quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

