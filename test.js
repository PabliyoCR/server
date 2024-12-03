const { exec } = require("child_process");

exec('powershell -Command "(Get-Process | Where-Object { $_.MainWindowTitle -match \'Microsoft Visual Studio\' }).MainWindowHandle | ForEach-Object { [void][System.Windows.Forms.SendKeys]::SendWait(\'^%{TAB}\') }"', (err, stdout, stderr) => {
    if (err) {
        console.error('Error al ejecutar PowerShell', err);
        return;
    }
    console.log('Ventana activada');
});