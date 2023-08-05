const main = document.getElementsByTagName("main")[0];
let intervalId;
main.style.backgroundColor = "green";

let duration = 10;

function countDown(){
    duration--;
    main.innerText = duration;
    main.style.backgroundColor = "green";

    indicators();
}

function indicators(){
    if(duration < 5){
        main.style.backgroundColor = "red";
    }

    if(duration < 1){
        clearInterval(intervalId);
        main.style.backgroundColor = "yellow";
        duration = 10;
        loop()
    }
}

function loop(){
    intervalId = setInterval(countDown, 1000);
}

loop();