const robot = require("robotjs");

const ventanas = [
    "SSMS",
    "VS",
    "VSCODE",
    "CHROME",
    "FILES",
    "SSMS",
    "VS",
    "VSCODE"
]

const paginas = [
    "https://localhost:8081/",
    "https://localhost:8083/",
    "https://tfsitqs.visualstudio.com/eVista%202024/_git/eVista2024",
    "https://tfsitqs.visualstudio.com/eVista%202024/_git/eVista2024/pullrequests",
    "https://tfsitqs.visualstudio.com/eVista%202024/_build",
    "https://tfsitqs.visualstudio.com/eVista%202024/_release"
]

// Función para recorrer todas las ventanas abiertas
function cycleThroughWindows() {
    // Mantener presionada la tecla Alt
    robot.keyToggle("alt", "down");

    // Recorrer las ventanas con Alt + Tab
    for (let i = 0; i < /*ventanas.length*/5 ; i++) { // Cambia el número de iteraciones según la cantidad de ventanas
        robot.keyTap("tab"); // Simular un Tab mientras se mantiene Alt
        robot.setKeyboardDelay(10); // Esperar 100ms antes de la siguiente iteración
    }

    setTimeout(() => {
        // Hacer clic en el centro de la pantalla
        const screenSize = robot.getScreenSize();
        const centerX = screenSize.width / 2;
        const centerY = screenSize.height / 2;
        robot.moveMouse(centerX, centerY);
        robot.mouseClick();
    }, 30000);

    // Soltar la tecla Alt
    robot.keyToggle("alt", "up");
}

// Repetir cada 5 segundos
setInterval(() => {
    cycleThroughWindows();
}, Math.floor(Math.random() * (60000 - 10000 + 1)) + 10000);
