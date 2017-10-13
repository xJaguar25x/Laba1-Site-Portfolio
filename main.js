/**
 * Created by Jaguar25 on 12.10.2017.
 */
 
const {app, BrowserWindow} = require('electron')

let win

app.on('ready', function () {
    win = new BrowserWindow({width: 1200, height: 900, resizable: true})
    win.setMenu(null)
    win.loadURL('file://' + __dirname + '/index.html')
    //win.webContents.openDevTools()
})
/*
'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        resizable: true
    });

    mainWindow.loadUrl('file://' + __dirname + 'app/index.html');
});*/