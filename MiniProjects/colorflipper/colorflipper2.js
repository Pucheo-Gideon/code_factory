// let hexed = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]

// let butn = document.getElementById('btn');

// let colored = document.querySelector('.color');

// butn.addEventListener('click', function(){
//     hexedColor = "#";
//     for(let v=0; v<6; v++){
//     hexedColor +=hexed[getRandomNumbers()];
// }
// colored.textContent = hexedColor
// document.body.style.backgroundColor = hexedColor;
// })

// function getRandomNumbers(){
//     return Math.floor(Math.random() * hexed.length)
// }

// const hex = [0, 1, 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getColourVariants()];
//     console.log(hexColor);
//   }
//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getColourVariants(){
//  return Math.floor(Math.random() * hex.length)
// }


let hexxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colored = document.querySelector('.color');

let btnClicked = document.getElementById('btn')
btnClicked.addEventListener('click',function(){
   
    hexVariants = '#';
    for(let n=0; n<6; n++){
        hexVariants += hexxes[getVariants()];
    }
colored.textContent = hexVariants;
document.body.style.backgroundColor = hexVariants;
})

function getVariants(){
    return Math.floor(Math.random() * hexxes.length)
}