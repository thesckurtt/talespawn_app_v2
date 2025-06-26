const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAuthAPI', {
  login: (credentials) => ipcRenderer.invoke('auth:login', credentials),
  register: (credentials) => ipcRenderer.invoke('auth:register', credentials),
})

contextBridge.exposeInMainWorld('electronUserAPI', {
  isNewUser: (args) => ipcRenderer.invoke('user:isNewUser', args)
})

contextBridge.exposeInMainWorld('electronActionsAPI', {
  fullscreen: () => ipcRenderer.send('actions-fullscreen'),
  devTools: () => ipcRenderer.send('actions-devtools')
})

contextBridge.exposeInMainWorld('electronGameActions', {

  initialGame: (args) => ipcRenderer.invoke('game:initialGame', args), // Usado para iniciar o jogo e gerar o primeiro prompt
  sendOption: (args) => ipcRenderer.invoke('game:sendOption', args), // Usado para enviar a opção escolhida pelo jogador
  getUserOptions: () => ipcRenderer.invoke('game:getUserOptions'), // Usado para obter as opções do jogador para montar o histórico
})