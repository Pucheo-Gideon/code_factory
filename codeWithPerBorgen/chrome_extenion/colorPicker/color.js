
let toggle_btn = document.getElementById("toggle_btn")

let alphabets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "D", "F"]

let colorHex = "#"
// console.log(randomColor)
let colorHolder = ""
let colorLength = 6

toggle_btn.addEventListener("click", ()=> {
    // colorHolder[0] = colorHex[0]
    for(let a=0; a<alphabets.colorLength; a++){
    let randomColor = Math.floor(Math.random() * alphabets.length)
    console.log(randomColor)
    colorHolder[randomColor] += alphabets[a]
    console.log(colorHolder)
}
ReadACode()
})

const ReadACode = ()=>{
        for (let a = 0; a < alphabets.colorLength; a++) {
          let randomColor = Math.floor(Math.random() * alphabets.length);
          console.log(randomColor);
          colorHolder[randomColor] += alphabets[a];
          console.log(colorHolder);
        }
}