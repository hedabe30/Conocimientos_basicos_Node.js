const { app, browserWindow, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana() {
    ventanaPrincipal = new BrowserWindow({
        width: 800,
        heigth: 600
    });

    ventanaPrincipal.loadFile('index.html');
}