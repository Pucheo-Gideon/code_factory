let screen = document.getElementById('screen');

function handleClick(number){
    screen.value += number;  
}

function equalTo(){
    try{
        screen.value = eval(screen.value)
    }
    catch(err)
    {
        alert("invalid")
    }
}
function del(){
    screen.value ="";   
}
function reset(){
    screen.value = screen.value.slice(0, -1);
}

// Below is Code for the toggling feature
var buttons = document.getElementsByClassName("toggle-btn");
var arr = [...buttons];

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
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#ccc";
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "rgb(37, 37, 66)";
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "black";
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


