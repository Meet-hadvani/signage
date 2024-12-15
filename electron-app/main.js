const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow, previewWindow;

app.on('ready', () => {
  // Main React window
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });
  mainWindow.loadURL('http://localhost:3000');

  // Preview Electron window
  previewWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const previewPath = path.resolve(__dirname, 'preview.html');
  if (!fs.existsSync(previewPath)) {
    console.error('Preview file does not exist at:', previewPath);
  } else {
    console.log('Loading preview file:', previewPath);
    previewWindow.loadFile(previewPath);
  }

  ipcMain.handle('open-preview', (event, imageUrls) => {
    if (previewWindow && !previewWindow.isDestroyed()) {
      previewWindow.webContents.send('preview-images', imageUrls);
      previewWindow.show();
      previewWindow.focus();
    } else {
      console.error('Preview window is not available.');
    }
  });
  
  
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
