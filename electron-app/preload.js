const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openPreview: (imageUrls) => ipcRenderer.invoke('open-preview', imageUrls),
  onPreviewImages: (callback) => ipcRenderer.on('preview-images', (_, images) => callback(images)),
});
