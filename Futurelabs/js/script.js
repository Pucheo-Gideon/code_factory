// let time = document.getElementById("timer");
// let duration = 10;

// function countDown() {
//   duration--;
//   time.innerHTML = duration;

//   if (duration < 1) {
//     clearInterval(intervalId);
//   }
// }

// let intervalId = setInterval(countDown, 1000);

// let name = document.getElementsByClassName("name")[0];
// let number = -1;

// if (number > 1) {
//   name.classList.add("newName");
// }else
// {
//   name.classList.remove("newName");
// }

let button = document.getElementsByTagName("button")[0];
let number = document.getElementsByClassName("number")[0];
let count = 0;

// button.addEventListener("click", function(){
//     number.innerText = ++count;
// });

function handleClick() {
  number.innerText = (++count) * 2 ;
}

let body = document.getElementsByTagName("body")[0]

for(let i = 0; i < 10; i++){
    let e = document.createElement("div");
    body.append(e)
    e.innerText = "I love Javascript";
}