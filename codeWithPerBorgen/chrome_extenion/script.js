
let arraysList = []

let inputElement = document.getElementById("inputElement")
let saveBtn = document.getElementById("saveBtn")
let chrome_wrapper = document.getElementsByClassName("chrome_wrapper")
let ulElement = document.getElementById("ulElement");
ulElement.className = "unordered_list"



// let displayItems = document.createElement("div")
// displayItems.className = "item_wrapper"
let persistInput
saveBtn.addEventListener("click", ()=> {
    arraysList.push(inputElement.value)
    persistInput = localStorage.setItem("input", JSON.stringify(arraysList))
    inputElement.value = "";
   renderList()
})

console.log(persistInput)
let getInput = JSON.parse(localStorage.getItem("input"));
console.log(getInput)

// chrome_wrapper.append(displayItems)

// function renderList(){
//     for(a=0; a<arraysList.length; a++){
//         let li = document.createElement("li")
//         let anchorTag = document.createElement("a")
//         anchorTag.textContent += arraysList[a] + " "
//         anchorTag.setAttribute("target","-blank")
//         anchorTag.setAttribute("href", `${arraysList[a]}`)
//         li.appendChild(anchorTag)
//         ulElement.append(li)
//     }
// }

function renderList(){
    let listItems = ""
    for(a=0; a<arraysList.length; a++){
        listItems += `
        <li>
        <a target="_blank" href=${arraysList[a]}>${arraysList[a]}</a>
        </li>`
    }
    ulElement.innerHTML = listItems
}