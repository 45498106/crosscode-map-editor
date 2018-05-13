import {app, BrowserWindow} from 'electron';

let win: BrowserWindow = null;

function createWindow() {
	// Initialize the window to our specified dimensions
	win = new BrowserWindow({width: 1000, height: 600, backgroundColor: '#616161', titleBarStyle: 'hidden'});
	
	win.setMenu(null);
	
	// Specify entry point
	win.loadURL('http://localhost:4200');
	
	// Show dev tools
	// Remove this line before distributing
	win.webContents.openDevTools();
	
	// Remove window once app is closed
	win.on('closed', function () {
		win = null;
	});
}

app.on('ready', function () {
	createWindow();
});
app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
