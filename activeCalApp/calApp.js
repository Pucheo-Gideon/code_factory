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

// display.addEventListener('onclick', handleDisplay)

// function handleDisplay(){
//   display.value = "Welcome";
// }

