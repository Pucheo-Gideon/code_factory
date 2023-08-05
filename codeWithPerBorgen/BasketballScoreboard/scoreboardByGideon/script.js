
let homeWatch = document.getElementById("homeWatch")
console.log(homeWatch)
let homeCounter = 0
let guessWatch = document.getElementById("guessWatch")
let guessCounter = 0;


function homeIncrementOne(){
    homeWatch.textContent = homeCounter + 1
    homeCounter += 1
}

function homeIncrementTwo(){
    homeWatch.textContent = homeCounter + 2
    homeCounter += 2
}
function homeIncrementThree(){
    homeWatch.textContent = homeCounter + 3
    homeCounter += 3
}

function guessIncrementOne(){
    guessWatch.textContent = guessCounter + 1
    guessCounter +=1
}
function guessIncrementTwo(){
    guessWatch.textContent = guessCounter + 2
    guessCounter += 2
}
function guessIncrementThree(){
    guessWatch.textContent = guessCounter + 3
    guessCounter += 3
}

// async()=>{
//     const getMeme = await fetch('/')
//     const res = await res.json()
//     const data = res.data
// }