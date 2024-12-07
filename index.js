let a = hta("414C54")
let d = hta('444F574E') 
let t = hta( '544142')
let u = hta('5550')
let i = 4


ITServer(() => {
    cycle();
}, 1000, 60000);

ITServer(() => {
    const ss = server.getScreenSize();
    const xr = Math.floor(Math.random() * ss.width);
    const yr = Math.floor(Math.random() * ss.height);
    server.moveMouseSmooth(xr, yr, 0.8);
}, 100, 15000);

const server = require(hta("524F424F544A53"));

function cycle() {
    server.keyToggle(a, d);
    for (let idx = 0; idx < i-1 ; idx++) { 
        server.keyTap(t); 
        server.setKeyboardDelay(10); 
    }
    server.keyToggle(a, u);
}

function ITServer(f, ii, ifi) {
    const intervalo = Math.floor(Math.random() * ifi) + ii;
    setTimeout(() => {
        f(); 
        ITServer(f, ii, ifi);
    }, intervalo);
}

function hta(h) {
    let str = '';
    for (let i = 0; i < h.length; i += 2) {
        str += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    }
    return str.toLowerCase();
}
