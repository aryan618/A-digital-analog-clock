const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;
function getPosition(){
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
    secPosition= sec*360/60;
    minPosition= min*360/60+((sec*360)/60)/60;
    hrPosition= hr*360/12+((min*360)/60)/60
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

setInterval(getPosition, 1000);
