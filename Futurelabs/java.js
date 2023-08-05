// window.alert("How arr you doing?")
// document.write("How are you foing?")

function showMessage(){
    window.alert("Are you Okay?")
}

window.alert("What were you doing when I left you?")
window.alert("Didn't you use the plate I ask you?")
showMessage()

function declareWill(){
    window.alert("Your father's will as a clause")
}

function openWill(){
    declareWill()
}
openWill()

function loveMessage(){
    window.alert("I love you Honey!")
}
function loveReply(){
    window.alert("I love you too dearly!")
}
function hangOut(){
    window.alert("I feel we should hang out this evening. What do you think?")
}
function getMessages(){
    loveMessage();
    loveReply();
    hangOut();
}

getMessages()

var myCar = "Honda"
var payCheck = 1200;
function newCar (){
    myCar = "Ferrari"
    payCheck = 32000;
    window.alert ("You need $" +payCheck+" to purchase "+myCar);
}

newCar()