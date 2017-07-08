const electron = require('electron')
const {app, BrowserWindow} = electron
const {Menu, MenuItem} = electron
const ipcMain = electron.ipcMain
const notifier = require('node-notifier')
const Token = require('./app/js/ebay_api/authorization/token.js')

var userToken = new Token()
var appToken = new Token()
var loginWindow = null

app.on('ready', () => {

	// Load login window
	loginWindow = new BrowserWindow({
			width:800,
			height:600,
			webPreferences: {
				disablewebsecurity: true,
	      allowRunningInsecureContent: true,
	      allowDisplayingInsecureContent: true,
	      webSecurity: false
			}
	})

//	loginWindow.loadURL('file://' + __dirname + '/app/html/login.html')
	loginWindow.loadURL('file://' + __dirname + '/app/html/mainPage.html')
	loginWindow.openDevTools()
})

// Ebay grant access page gives certificate error
app.commandLine.appendSwitch('ignore-certificate-errors')

notifier.notify({
	 title: 'Ebay Bulk Lister',
	 message: 'Application has started.',
	 sound: true, // Only Notification Center or Windows Toasters
	 wait: true // Wait with callback, until user action is taken against notification
}, function (err, response) {
	 // Response is response from notification
});

ipcMain.on('login-succeded', (loginEvent, token) => {
	try {
		userToken.clone(token)

		console.log("MyToken: " + userToken.getToken())

		loginWindow.loadURL('file://' + __dirname + '/app/html/mainPage.html')

		loginWindow.webContents.on('dom-ready', (event, arg) => {
			event.sender.send('main-process-data')
		})
	} catch (ex) {
		console.log("Exception Thrown: " + ex);
	}
})

ipcMain.on('login-failed', (loginEvent, err) => {
	loginWindow.loadURL('file://' + __dirname + '/app/html/loginFailure.html')

	loginWindow.webContents.on('dom-ready', (event, arg) => {
		event.sender.send('main-process-data', err)
	})
})

ipcMain.on('request-user-token', (event, arg) => {
	event.sender.send('valid-user-token', userToken)
})
