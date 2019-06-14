const lastHeardOf = new Date("May 06, 2019 23:00:00").getTime();

function start() {
    updateTime();

    setInterval(updateTime, 10);
}

function updateTime() {
    // Get current time
    const now = new Date().getTime();

    // Calculate time difference
    const timeSince = lastHeardOf - now;
    // Converting to days, hours, minutes and seconds
    const days = Math.floor(timeSince / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeSince % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeSince % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeSince % (1000 * 60)) / 1000);

    // Printing result to id "counter" -- Also converts it to an absolute value since the result is negative
    document.getElementById("counter").innerHTML = `It's been ${Math.abs(days)} days, ${Math.abs(hours)} hours, ${Math.abs(minutes)} minutes, and ${Math.abs(seconds)} seconds since we last heard from Samsung.`;
}