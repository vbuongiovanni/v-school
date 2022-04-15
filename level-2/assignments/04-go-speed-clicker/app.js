

let totalClicks = 0;
let clicksThisSession = 0;

if (isFinite(sessionStorage.getItem("totalClicks"))) {
    totalClicks = sessionStorage.getItem("totalClicks");
}
document.getElementById("click-count").textContent = "Total Clicks: " + totalClicks;

let timeRemaining = 10.00;

const clickCount = () => {
    if (clicksThisSession === 0){
        totalClicks = 1;
    } else {
        totalClicks++;
    }
    clicksThisSession++;
    
    document.getElementById("click-count").textContent = "Total Clicks: " + totalClicks;
} 

document.getElementById("count-down").textContent = timeRemaining + " Seconds Remaining";

document.getElementById("click-target").addEventListener("click", clickCount)
document.getElementById("click-target").addEventListener("dblclick", clickCount)


let intervalId = setInterval(countDown, 10);

setTimeout(stopCountDown, 10000)

// Func declarations:

function stopCountDown(){
    clearInterval(intervalId);
    document.getElementById("click-target").removeEventListener("click", clickCount);
    document.getElementById("click-target").removeEventListener("dblclick", clickCount);
    sessionStorage.setItem("totalClicks", totalClicks);
}

function countDown(){
    timeRemaining -= .01;
    document.getElementById("count-down").textContent = Math.round(timeRemaining*10)/10 + " Seconds Remaining";
}




