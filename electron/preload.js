const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAuthAPI', {
  login: (credentials) => ipcRenderer.invoke('login', credentials),
  register: (credentials) => ipcRenderer.invoke('register', credentials),
})

contextBridge.exposeInMainWorld('electronActionsAPI', {
  fullscreen: () => ipcRenderer.invoke('actions-fullscreen')
})