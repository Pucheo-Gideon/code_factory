let hexxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let clickMe = document.getElementById('btn')
let indicator = document.getElementById('initial')

clickMe.addEventListener('click', function(){

    hexColors = "#"
    
    for(let startEnd=0; startEnd <6; startEnd++ )[
        hexColors += hexxes[randomNumbers()]
    ]
    
    indicator.textContent = hexColors
    document.body.style.backgroundColor = hexColors
})

function randomNumbers(){
    return Math.floor(Math.random() * hexxes.length)
}