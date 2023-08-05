// let colors = ["green", "red", "rgba(133, 122, 200)", "f15025"];

// let colours = ['green', 'black', 'orange', 'rgba(123, 145, 211)'];

// let colorChangedIndicator = document.querySelector('.color')
// let buttn = document.getElementById('btn')

// buttn.addEventListener('click', function(){
    
//     let selectColor = getrandomColours();
    
//     colorChangedIndicator.textContent = colours[selectColor];
//     document.body.style.backgroundColor = colours[selectColor]
 
    // colorChanged.textContent = colours[getrandomColours()];
    // document.body.style.backgroundColor = colours[getrandomColours()];
// })

function getrandomColours(){
    return Math.floor(Math.random() * colours.length)
} 

// let colors = ["green", "red", "rgba(133, 122, 200)", "f15025"];
// let btn = document.getElementById("btn");
// let color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   // get random number between 0-3 colors[0]
//   let randomNumber = getRandomNumbers();
//   console.log(randomNumber);
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumbers() {
//   return Math.floor(Math.random() * colors.length);
// }

// let pigment  = ['green', 'black', 'orange', 'rgba(123, 145, 211)'];

// let colorflipper = document.getElementById('btn')

// let pigmentChangeIndicator = document.querySelector('.color')

// colorflipper.addEventListener('click', function(){

//    let colourSelector = getPigmentVariants();
   
//    pigmentChangeIndicator.textContent = pigment[colourSelector];

//    document.body.style.backgroundColor = pigment[colourSelector];
// })

// function getPigmentVariants(){
//     return Math.floor(Math.random() * pigment.length)
// }


let color_Palettes = ["gray", 'yellow', 'white', 'pink'];
let color_Palettes2 = []

for(let n in color_Palettes){
    color_Palettes2[n] = color_Palettes[n]
}
color_Palettes2.reverse()

//Container for button 
let Butn = document.getElementById('btn');

// variable container for color flipper indicator
let changeIndicator = document.querySelector('.color')

// variable container for background Heading container
// let titleBackground = document.getElementById("holder")

Butn.addEventListener('click', function(){
    let newColor = getNewColor();

    changeIndicator.textContent = color_Palettes[newColor]
    document.body.style.backgroundColor = color_Palettes[newColor]

    let NewTitleHue = getNewHue();
    titleBackground.textContent = color_Palettes2[NewTitleHue]
})

function getNewColor (){
    return Math.floor(Math.random() * color_Palettes.length)
}

function getNewHue(){
    return Math.floor(Math.random() * color_Palettes2.length)
}
