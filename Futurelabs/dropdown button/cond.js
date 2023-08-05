

// let red = document.getElementById("red")
// let yellow = document.getElementById("yellow")
// let green = document.getElementById("green")
// let time = 5;
// let timeYellow = 10;




// red.style.opacity = 0.0
// yellow.style.opacity = 0.0
// green.style.opacity = 0.0



// function trafficRed() {
//     red.style.opacity = 1;
//     time--;
//     if (time < 1) {
//         red.style.opacity = 0;
//         clearInterval(intervalId)
//     }
// }

// let intervalId = setInterval(trafficRed, 1000)




// function trafficYellow() {
//     yellow.style.opacity = 1;
   
// }
// setTimeout(trafficYellow, 5000);




// function trafficGreen() {
//     yellow.style.opacity = 0;

//     green.style.opacity = 1;
//     if(timeYellow < 1){
//     }
// }
// setTimeout(trafficGreen, 10000)



let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let time = 5;
let timeYellow = 10;




red.style.opacity = 0.0
yellow.style.opacity = 0.0
green.style.opacity = 0.0



function trafficRed() {
    red.style.opacity = 1;
    time--;
    if (time < 1) {
        red.style.opacity = 0;
        clearInterval(intervalId)
    }
}

let intervalId = setInterval(trafficRed, 1000)




function trafficYellow() {
    yellow.style.opacity = 1;
   
}
setTimeout(trafficYellow, 5000);




function trafficGreen() {
    yellow.style.opacity = 0;

    green.style.opacity = 1;
    if(timeYellow < 1){
    }
}
setTimeout(trafficGreen, 10000)

