let screen = document.getElementById('screens');

function handleClick(number){
    screen.value += number;  
}

function equalTo(){
    try{
        screen.value = eval(screen.value)
    }
    catch(err)
    {
        alert("invalid");
    }
}
function del(){
   
    screen.value = screen.value.slice(0, -1);   
}
function reset(){
    screen.value = "";
}

let toggle = document.getElementsByClassName("toggle-btn");
let arr = [...toggle];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// Background Colour switching!

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "teal";
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "rgb(92, 204, 125)";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});



