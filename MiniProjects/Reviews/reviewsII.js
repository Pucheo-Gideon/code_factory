let staffData = [
  {
    id: 1,
    name: "Waje Ejiofor",
    post: "Decorator",
    origin: "Zambia",
    info: "Ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
  },
  {
    id: 2,
    name: "Kanshishi Shitna",
    post: "Radio Programmer",
    origin: "India",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad iure ipsa minus minima similique natus"
  },
  
    {
    id: 3,
    name: "Ndmanungo Kwengipe",
    post: "Field Researcher",
    origin: "Uganda",
    info: "amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
  },
  {
    id: 3,
    name: "Abdullahi Yusuf",
    post: "Dir., Social",
    origin: "Nigeria",
    info: "Ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eum modi reiciendis voluptatum sit quae, quia officia praesentium. Velit, ad?",
  },
  
];

let color = []

let container = document.querySelector('.container');

let image = document.getElementById('image');
let name = document.querySelector('#name')
let post = document.querySelector('#post')
let origin = document.querySelector('#origin')
let info = document.querySelector('#info')

let prevBtn = document.querySelector('.prevBtn');

let nextBtn = document.querySelector('.nextBtn')

let randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

function showStaff(){
    item = staffData[currentItem];
    // console.log(staffData)
    name.textContent = item.name;
    post.textContent = item.post;
    info.textContent = item.info;
    origin.textContent = item.origin;
}

window.addEventListener('DOMContentLoaded', function(){
   showStaff(currentItem)
    // item = staffData[currentItem];
    // console.log(staffData)
    // name.textContent = item.name;
    // post.textContent = item.post;
    // info.textContent = item.info;
    // origin.textContent = item.origin;
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = staffData.length-1
    }
    showStaff(currentItem)
})

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > staffData.length-1){
        currentItem = 0
    }
    showStaff(currentItem)

})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * staffData.length)
    showStaff()
})
    

