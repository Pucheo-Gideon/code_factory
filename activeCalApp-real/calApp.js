let display = document.getElementById("display");

function handleClick(number) {
  display.value += number;
}

function equalTo() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("invalid");
  }
}
function del() {
  display.value = display.value.slice(0, -1);
}
function reset() {
  display.value = "";
}

let monitor = document.getElementById("display");

let keypads = document.getElementsByClassName("items");

let toggleBox = document.getElementsByClassName("toggle-btn");
let arr = [...toggleBox];

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
      monitor.style.backgroundColor = "hsl(224, 36%, 15%)";
      monitor.style.color ="white";
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      document.getElementsByClassName("bigContainer")[0].style.backgroundColor="hsl(222, 26%, 31%)";
      document.getElementsByClassName("digitContainer")[0].style.backgroundColor =" hsl(223, 31%, 20%)";
      document.getElementsByClassName("toggle-btn")[0].style.backgroundColor = " hsl(6, 63%, 50%)";
      document.getElementsByClassName("calcTheme")[0].style.color = "hsl(0, 0, 100%)";
      document.getElementsByClassName("toggle-box")[0].style.backgroundColor = "hsl(224, 36%, 15%)";
      document.getElementsByClassName("delet")[0].style.backgroundColor ="hsl(225, 21%, 49%"
      document.getElementsByClassName("delet")[0].style.boxShadow ="hsl(224, 28%, 35%)";
      document.getElementsByClassName("reset")[0].style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementsByClassName("reset")[0].style.boxShadow = "inset -1px -1px 2px hsl(224, 28%, 35%), 2px 0px 1px hsl(224, 28%, 35%) ";
      document.getElementsByClassName("reset")[0].style.color =  "hsl(0, 0, 100%)";
      document.getElementsByClassName("equalto")[0].style.backgroundColor =" hsl(6, 63%, 50%)";
      document.getElementsByClassName("equalto")[0].style.boxShadow = "inset -1px -1px 2px hsl(6, 70%, 34%), 2px 0px 1px hsl(6, 70%, 34%) ";
      document.getElementsByClassName("equalto")[0].style.color = "hsl(0, 0, 100%)";
      for(i=0; i < keypads.length; i++){
        keypads[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        keypads[i].style.color = "hsl(221, 14%, 31%)";
        keypads[i].style.boxShadow = "-1px -1px 2px hsl(224, 28%, 35%), 2px 0px 1px hsl(224, 28%, 35%)";
}

  } else if (index == 1) {
    monitor.style.backgroundColor = "hsl(0, 0%, 93%)";
    monitor.style.color = "hsl(60, 10%, 19%)";
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementsByClassName("bigContainer")[0].style.backgroundColor="hsl(0, 0%, 90%)";
    document.getElementsByClassName("digitContainer")[0].style.backgroundColor=" hsl(0, 5%, 81%)"
    document.getElementsByClassName("toggle-btn")[1].style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementsByClassName("calcTheme")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementsByClassName("toggle-box")[0].style.backgroundColor = " hsl(0, 5%, 81%)";
    document.getElementsByClassName("delet")[0].style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementsByClassName("delet")[0].style.boxShadow = "inset -1px -1px 2px hsl(185, 58%, 25%), 2px 0px 1px hsl(185, 58%, 25%)";
    document.getElementsByClassName("reset")[0].style.backgroundColor ="hsl(185, 42%, 37%)";
    document.getElementsByClassName("reset")[0].style.boxShadow = "inset -1px -1px 2px hsl(185, 58%, 25%), 2px 0px 1px hsl(185, 58%, 25%)";
    document.getElementsByClassName("reset")[0].style.color = "hsl(0, 0, 100%)";
    document.getElementsByClassName("equalto")[0].style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementsByClassName("equalto")[0].style.boxShadow = "inset -1px -1px 2px hsl(25, 99%, 27%), 2px 0px 1px hsl(25, 99%, 27%) ";
    document.getElementsByClassName("equalto")[0].style.color ="hsl(0, 0, 100%)";
    // document.getElementById("items4").style.boxShadow ="-1px -1px 2px hsl(185, 58%, 25%), 2px 0px 1px hsl(185, 58%, 25%)"};
  for (i = 0; i < keypads.length; i++) {
    keypads[i].style.backgroundColor = "hsl(0, 5%, 81%)";
    keypads[i].style.color = "hsl(60, 10%, 19%)";
    keypads[i].style.boxShadow ="-1px -1px 2px hsl(224, 28%, 35%), 2px 0px 1px hsl(224, 28%, 35%)";;
    // keypads[i].style.boxShadow = "-1px -1px 2px hsl(185, 58%, 25%), 2px 0px 1px hsl(185, 58%, 25%)";
  }
  
 } else {
    document.getElementsByTagName("body")[0].style.backgroundColor ="hsl(268, 75%, 9%)";
    monitor.style.backgroundColor = "hsl(268, 71%, 12%)";
    monitor.style.color = "hsl(52, 100%, 62%)";
    document.getElementsByClassName("bigContainer")[0].style.backgroundColor=" hsl(268, 75%, 9%)";
    document.getElementsByClassName("digitContainer")[0].style.backgroundColor=" hsl(268, 71%, 12%)"
    document.getElementsByClassName("toggle-btn")[2].style.backgroundColor = " hsl(176, 100%, 44%)";
    document.getElementsByClassName("calcTheme")[0].style.color = "hsl(52, 100%, 62%)"
    document.getElementsByClassName("toggle-box")[0].style.backgroundColor = " hsl(268, 71%, 12%)"
    document.getElementsByClassName("delet")[0].style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementsByClassName("delet")[0].style.boxShadow = "-1px -1px 2px hsl(290, 70%, 36%), 2px 0px 1px hsl(290, 70%, 36%)";
    document.getElementsByClassName("reset")[0].style.backgroundColor = "hsl(268, 47%, 21%)";
    document.getElementsByClassName("reset")[0].style.boxShadow = "inset -1px -1px 2px hsl(290, 70%, 36%), 2px 0px 1px hsl(290, 70%, 36%)";
    document.getElementsByClassName("equalto")[0].style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementsByClassName("equalto")[0].style.color = "hsl(198, 20%, 13%)";
    document.getElementsByClassName("equalto")[0].style.boxShadow = "inset -1px -1px 2px hsl(177, 92%, 70%), 2px 0px 1px hsl(177, 92%, 70%)";
  for (i = 0; i < keypads.length; i++) {
  keypads[i].style.backgroundColor = "hsl(268, 47%, 21%)";
  keypads[i].style.color = "hsl(52, 100%, 62%)";
  keypads[i].style.boxShadow = "-1px -1px 2px hsl(290, 70%, 36%), 2px 0px 1px hsl(290, 70%, 36%)";
}


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
