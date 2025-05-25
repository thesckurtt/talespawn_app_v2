const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAuthAPI', {
  login: (credentials) => ipcRenderer.invoke('auth:login', credentials),
  register: (credentials) => ipcRenderer.invoke('auth:register', credentials),
})

contextBridge.exposeInMainWorld('electronActionsAPI', {
  fullscreen: () => ipcRenderer.send('actions-fullscreen'),
  devTools: () => ipcRenderer.send('actions-devtools')
})