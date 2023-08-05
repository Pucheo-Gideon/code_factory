//   Athletes Infos
 let reviews = [
   {
     id: 1,
     name: "Lebron James",
     img: "lebronJames.jpg",
     job: "Basketballer",
     text: "Ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
   },
   {
     id: 2,
     name: "Serena Williams",
     img: "http://serena.jpg",
     job: "Table Tennis Player",
     text: "Dolor sit, amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
   },
   {
     id: 3,
     name: "Christiano Ronaldo",
     img: "http://ronaldo.jpg",
     job: "Footballer",
     text: "Olor sit, amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
   },
   {
     id: 4,
     name: "Tom Brady",
     img: "http://tombrady.jpg",
     job: "American Football Player",
     text: "Or sit, amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
   },
 ];


//  Colour Variation

let colors = ["#f79915", "#7D3C4D", "#d5ebda", "#56514F", "#94a1b4"];

function getColors() {
  return Math.floor(Math.random() * colors.length);
}
 
 //  Select Items
 let image = document.getElementById('person-image')
 
 let author = document.getElementById('author')
 let job = document.getElementById('job')
 let post = document.getElementById('post')
 
 let prevBtn = document.querySelector('.prev-btn');
 let nextBtn = document.querySelector('.next-btn');
 
 let randomBtn = document.querySelector ('.random-btn');

 let container = document.querySelector('.container')
 
 
//  set starting Item
 let currentItem = 0;

 window.addEventListener('DOMContentLoaded', function(){
  showPerson[currentItem]
 })

//  show person function
 function showPerson(){
      let items = reviews[currentItem];
    //   image.src = items.img
      author.textContent = items.name;
      job.textContent = items.job;
      post.textContent = items.text;
 }

//  Show next Person

nextBtn.addEventListener('click', function(){
    currentItem++
    if (currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson();
})
 
// Show Previous Person
prevBtn.addEventListener('click', function(){
    currentItem++
    if (currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})

// function for random selection button 
function getRandom(){
    return Math.floor(Math.random() * reviews.length)
}

randomBtn.addEventListener('click', function(){
    currentItem[getRandom()]
    let appendColor = getColors();
    container.style.backgroundColor = colors[appendColor]
    showPerson()
    currentItem = Math.floor(Math.random() * reviews.length)
  })
  
  // showPerson()

// let colorHolder = document.querySelector("#holder");

// let indicator = document.querySelector(".color");

// let colorChanger = document.querySelector("#btn");

// let colorIndex = 1;

// colorChanger.addEventListener("click", function () {
//   let appendColor = getColors();

//   indicator.textContent = colors[appendColor];

//   colorHolder.style.backgroundColor = colors[appendColor];
// });
