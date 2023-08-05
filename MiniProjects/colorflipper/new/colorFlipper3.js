
let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

let colorHolder = document.querySelector('#holder')

let indicator = document.querySelector('.color');

let colorChanger = document.querySelector('#btn');

colorChanger.addEventListener('click', function(){
    let hexColors = '#';

    for(let e=0; e<6;  e++){
        hexColors += colors[getColors()]
    }

    indicator.textContent = hexColors;
    colorHolder.style.backgroundColor = hexColors;
})

function getColors(){
    return Math.floor(Math.random() * colors.length)
}