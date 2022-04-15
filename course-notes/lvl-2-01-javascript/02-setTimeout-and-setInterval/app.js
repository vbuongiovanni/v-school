// Date Constructor:

function getTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
   
    hour < 10 ? "0" + hour : hour;
    minute < 10 ? "0" + minute : minute;
    second < 10 ? "0" + second : second;

    document.getElementById("display").textContent =  `${hour}:${minute}:${second}`;
}

setInterval(getTime, 1000);
