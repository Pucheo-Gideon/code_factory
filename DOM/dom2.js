// Body background color
document.body.style.background = "black";

setTimeout(() => document.body.style.background = '', 3000);

// Big card
let card = document.getElementsByTagName("div")[0];
// BigContainer.style.box-sizing = "border-box";
card.style.width = "300px";
card.style.height = "auto";
card.style.margin = "100px auto";
card.style.border = "white solid 2px";
card.style.padding = "10px";
card.style.background ="black";
card.style.color = "white";

// card.style.textAlign = "center";
// card.style.color 

let image = document.getElementsByTagName("img")[0];
image.setAttribute("src", "./gideon.JPG");
image.style.width = "250px";
image.style.height = "auto";
image.style.position = "relative";
image.style.left = "25px"
// image.style.position = "relative"

// setTimeout(() => image.style)


let p1 = document.getElementsByTagName("p")[0];
p1.innerHTML = "Hello. I'm Gideon Okwongudo";
console.log(p1);
p1.style.background = "red";
p1.style.textAlign = "center";

let p2 = document.getElementsByTagName("p")[1];
p2.innerHTML = "Occupation: I write JavaScript for a living.";

let p3 = document.getElementsByTagName("p")[2];
p3.innerHTML = 
  "My other Proficiencies includes writing, clear verbal Communictaion, leadership.";

let p4 = document.getElementsByTagName("p")[3];
p4.innerHTML = "Hobbies: Footballing, Baskaetballing, senisble discourse"

let p5 = document.getElementsByTagName("p")[4];
p5.innerHTML = "I'm at your service. Please, How may I be of help?"

for(let i =0; i<= document. body.childNodes.length; i++){
    window.alert(document.body.childNodes[i]);
}