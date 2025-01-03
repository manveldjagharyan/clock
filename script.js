function showTime() {
    let clock = document.getElementById('clock');
    const time = new Date();
    const hours = String(time.getHours());
    const minutes = String(time.getMinutes());

    clock.innerHTML = `<span style="color:black; font-size:50px;">${hours}:${minutes}</span>`;
}
setInterval(showTime, 1000);
document.body.innerHTML = `<div id="clock"></div>`;
showTime();