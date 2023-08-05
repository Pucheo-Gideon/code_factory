let count = document.getElementById("count-el")
let itemsPicked = document.getElementById("itemsPicked")
let incrementCount = 0

function increment(){
  incrementCount = incrementCount + 1
  count.textContent = incrementCount
}

function save(){
  itemsPicked.textContent += incrementCount + " - "
  incrementCount = 0
  count.textContent = 0
  
}

function decrement(){
  incrementCount = incrementCount - 1
  count.textContent =incrementCount
}