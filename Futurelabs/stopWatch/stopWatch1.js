// global variables
let stopwatch = document.getElementById('stopwatch');
let mainButton = document.getElementById('main-btn');
let startTime = 0;
let elapsedTime =0;
let timeoutId = null;

// method to operate start and stop function

function main(){
    if(mainButton.innerHTML ==='Start'){
        startTime = Date.now();
        startStopwatch();
        mainButton.innerHTML = 'Stop';
    }else{
        elapsedTime += Date.now() - startTime;
        clearTimeout(timeoutId);
        mainButton.innerHTML = 'Start'
    }
}

// method to reset the stopwatch
function reset(){
    elapsedTime = 0;
    startTime = Date.now();
    clearTimeout(timeoutId);
    mainButton.innerHTML = 'Start';
    displayTime(0, 0, 0, 0);
}

// method to start the stopwatch
function startStopwatch(){

    // run setTimeout() and save id
    timeoutId = setTimeout(function(){
        // calculate elapsed time
        let time = Date.now() - startTime + elapsedTime;

        // calculate different time measurements based on elapsed time
        let milliseconds = parseInt((time%1000)/10)
        let seconds = parseInt((time/1000)%60)
        let minutes = parseInt((time(1000*60))%60)
        let hour = parseInt((time/(1000*60*60))%24);

        // display time
        displayTime(hour, minutes, seconds, milliseconds);

        // calling same method again recursively 
        startStopwatch();
    }, 100);
}

// method to display time in '00:00:00:00' format
function displayTime(hour, minutes, seconds, milliseconds){
    hour = hour < 10? '0'+hour : hour;
    minutes = minutes <10? '0'+minutes : minutes;
    seconds = seconds < 10? '0'+ seconds : seconds;
    milliseconds = milliseconds < 10? '0'+milliseconds : milliseconds;
    stopwatch.innerHTML = hour+ ':' +minutes+ ':' +seconds+ ':' +milliseconds;}
