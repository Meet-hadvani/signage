const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openPreview: (imageUrls) => ipcRenderer.invoke('open-preview', imageUrls),
});
