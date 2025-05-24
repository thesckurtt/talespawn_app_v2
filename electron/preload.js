import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAuthAPI', {
  login: (credentials) => ipcRenderer.invoke('login', credentials),
  register: (credentials) => ipcRenderer.invoke('register', credentials),
})