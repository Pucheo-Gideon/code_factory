// let time = document.getElementById("timer");
// let duration = 10;

// function countDown(){
//     duration--;
//     time.innerHTML = duration;

//     if(duration <1){
//         clearInterval(interval_id);
//     }
// }

// let interval_id = setInterval(countDown, 1000);


// let time2 = document.getElementById("secondTime");
// interval = 20;

// function countTime(){
//     interval -= 1;
//     time2.innerHTML = interval;

//     if(interval == 0){

//         clearInterval(range)
//     }
// }

// let range = setInterval(countTime, 1000);


// let sportClock = document.getElementById("clock");
// time = 30;

// function timer(){
//     time--;
//     sportClock.innerHTML = time;

//     if(time == 0){
//         clearInterval(clockResult);
//     }
// }

// let clockResult = setInterval(timer, 1000);

// let timer = document.getElementById("time_stopper")
// stopper = 50;

// function counter(){
//     stopper--;
//     timer.innerHTML = stopper;
//     if(stopper < 1){
//         clearInterval(saveTime)
//     }
// }

// saveTime = setInterval(counter, 1000);

let change = document.getElementsByClassName("grey")[4];
let count = 0;

if (count > 1){
    change.classList.add("classical");
}else{
    change.classList.remove("classical");
}