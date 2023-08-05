// let red = document.getElementById("red");
// let yellow = document.getElementById("yellow");
// let green = document.getElementById("green");
// let counter = 15;


// function countDown(){
//     counter--;
//     if(counter < 13){
//         red.style.opacity = 1;
//         yellow.style.opacity = 0.2;
//         green.style.opacity = 0.2;
    
//         displayer();
//     }
// }

// function displayer(){
//     if(counter < 10){
//         yellow.style.opacity = 1;
//         red.style.opacity = 0.2;
//         green.style.opacity = 0.2;
//     }

//     if(counter <5){
//         clearInterval(interval);
//         green.style.opacity = 1;
//         yellow.style.opacity = 0.2;
//         red.style.opacity = 0.2;
//         counter =15;
//         loop();
//     }
// }

// function loop(){
//     interval = setInterval(countDown, 1000);
// }
// loop();


// function startTrafficSignal (){
//   let red = document.getElementById("red");
//   let yellow = document.getElementById("yellow");
//   let green = document.getElementById("green");

  
//     setTimeout(function(){
//         red.style.opacity =1;
//         green.style.opacity = 0.3;
//         yellow.style.opacity = 0.3;
//     },5000);

//     setTimeout(function(){
//         yellow.style.opacity = 1;
//         green.style.opacity = 0.3;
//         red.style.opacity = 0.3;
//     },7000);

//     setTimeout(function(){
//         green.style.opacity = 1; 
//         red.style.opacity = 0.3;
//         yellow.style.opacity = 0.3;
        
//     }, 12000);
// }

// let timer = setInterval(function(){
//     startTrafficSignal();
// },12000);

// startTrafficSignal();



function trafficLight() {
    let colour1 = document.getElementById("red");
    let colour2 = document.getElementById("yellow");
    let colour3 = document.getElementById("green");

    setTimeout(function(){
        colour1.style.opacity = 1;
        colour2.style.opacity = 0.2;
        colour3.style.opacity = 0.2;
    }, 5000);
    
    setTimeout(function(){
        colour2.style.opacity = 1;
        colour1.style.opacity = 0.2;
        colour3.style.opacity = 0.2;
    }, 7000);

    setTimeout(function(){
        colour3.styles.opacity = 1;
        colour1.styles.opacity = 0.2;
        colour2.styles.opacity = 0.2;
    }, 10000);
}

let counter = setInterval(function(){
    trafficLight();
}, 10000);

trafficLight();