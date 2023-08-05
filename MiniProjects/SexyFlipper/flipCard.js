console.log("What are you doing");

let database = [
  {
    image: "",
    name: "Jayden Classic",
    job: "Head Teacher",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quae!",
  },
  {
    image: "",
    name: "Malvin Taylor",
    job: "Software Engineer",
    info: "AgdfklLorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quae!",
  },
  {
    image: "",
    name: "Padon Blubon",
    job: "Civil Engineer",
    info: "Easel Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quae!",
  },
  {
    image: "",
    name: "Victoria Mergers ",
    job: "Head Teacher",
    info: "Comp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quae!",
  },
];

let image = document.getElementById("image");

let initials = document.getElementById("name");

let jobTitle = document.getElementById("job");

let message = document.querySelector(".text");

function selectAtRandom() {
  showCard;
  activeCard = Math.floor(Math.random() * database.length);
}

// let btnLeft = document.getElementById('btn-left');

// let btnRight = document.getElementById('btn-right');

let randomBtn = document.querySelector("#randomBtn");

let activeCard = 0;

function showCard() {
  items = database[activeCard];
  items.src = database.image;
  initials.textContent = items.name;
  jobTitle.textContent = items.job;
  message.textContent = items.info;
}

window.addEventListener("DOMContentLoaded", function () {
  showCard();
});

function selectRandomly() {
  return Math.floor(Math.random() * database.length);
}

// randomBtn.addEventListener('click', function(){
//     showCard()

// })

// activeCard[selectRandomly()]
