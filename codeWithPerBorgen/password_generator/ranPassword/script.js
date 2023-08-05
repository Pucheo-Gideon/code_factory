const characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

const showPassword4 = document.getElementById("showPassword4")
const showPassword8 = document.getElementById("showPassword8")
const showPassword10 = document.getElementById("showPassword10")
const showPassword12 = document.getElementById("showPassword12")

const password_generator_btn = document.querySelector(".password-generator-btn")
const passwordLength4 = 4
const passwordLength = 8
const passwordLength10 = 10
const passwordLength12 = 12


let password8 = ""
let password4 = ""
let password10 = ""
let password12 = ""

const charLength = characters.length
console.log("characters length", charLength)
// console.log(random)
password_generator_btn.addEventListener("click", function(){
  // Generate 8 random character password
  for (let a = 0; a < passwordLength; a++) {
    let random = Math.floor(Math.random() * characters.length);
    console.log("Random", random);
    password8 += characters[random];
    console.log("8 random characters", password8);
    showPassword8.textContent = password8;
  }

  if (password8.length > 8) {
    //   return btn_generator.disable=true
  }

  // Generate 4 random character password
  for (let four = 0; four < passwordLength4; four++) {
    let random4 = Math.floor(Math.random() * characters.length);
    password4 += characters[random4];
    console.log("4 random characters", password4);
    showPassword4.textContent = password4;
  }

  // Generate 10 random character password
  for (let ten = 0; ten < passwordLength10; ten++) {
    let random10 = Math.floor(Math.random() * characters.length);
    password10 = password10 + characters[random10];
    showPassword10.textContent = password10;
  }

  // Generate 12 random character password
  for (let twelve = 0; twelve < passwordLength12; twelve++) {
    let random12 = Math.floor(Math.random() * characters.length);
    password12 += characters[random12];
    showPassword12.innerHTML = password12;
  }
  generateColor();
})

// password_generator_btn.removeEventListener("click", (event)=>{
//   if(event.click ==2)
//   showPassword4.textContent = ""
// })
function generateColor(){
    password_generator_btn.style.backgroundColor = "white"
    password_generator_btn.style.color = " rgb(25, 122, 12)";
    showPassword4.style.background = "#383737"
    showPassword8.style.background = "#383737"
    showPassword10.style.background = "#383737"
    showPassword12.style.background = "#383737"
    
}


function copyTextToClipboard(){
  let getParagraphs = document.getElementsByClassName("row_One")
    for(let i =0; i<getParagraphs.length; i++){
      navigator.clipboard.writeText(getParagraphs[i].textContent).then(()=>{
        alert("Text copied to clipboard")
      })
    }
    console.log(getParagraphs);
}

