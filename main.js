window.onload = start;

function start() {
    const lastHeardOf = Date.UTC(2019, 4, 6, 23, 0, 0, 0);

    updateTime(lastHeardOf);

    setInterval(function() { updateTime(lastHeardOf) }, 10);
}

function updateTime(lastHeardOf) {
    // Get current time
    const now = new Date().getTime();

    let diff = Math.abs(now - lastHeardOf) / 1000;

    const days = Math.floor(diff / 86400);
    diff -= days * 86400;

    const hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;

    const minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;

    const seconds = Math.floor(diff) % 60;

    // Printing result to id "counter" -- Also converts it to an absolute value since the result is negative
    document.getElementById("counter").innerHTML = "It's been " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds since we last heard from Samsung.";
}