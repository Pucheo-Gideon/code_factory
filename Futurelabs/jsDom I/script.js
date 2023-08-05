let content = document.getElementById("h")
let content2 = document.getElementById("g")
let image = document.getElementsByTagName("img")[0]

console.log(content.textContent)
console.log(content2.textContent)

content.innerText = "Bye Bye"
content.style.fontSize = "30px"

image.style.backgroundImage = ""

image.setAttribute("src", "./II9A0904~2.JPG");
image.style.width = "50px"
