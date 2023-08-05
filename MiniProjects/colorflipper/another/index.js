let colors = ['#f79915', '#7D3C4D', '#d5ebda', '56514F', '94a1b4']

let colorHolder = document.querySelector("#holder");

let indicator = document.querySelector(".color");

let colorChanger = document.querySelector("#btn");

let colorIndex = 1;

colorChanger.addEventListener('click', function(){

    let appendColor = getColors();
    
    indicator.textContent = colors[appendColor];

    colorHolder.style.backgroundColor = colors[appendColor]
})

function getColors() {
    return Math.floor(Math.random() * colors.length)
}