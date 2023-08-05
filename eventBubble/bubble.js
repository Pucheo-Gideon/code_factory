// let html = document.getElementsByTagName('html')[0]
let body = document.getElementsByTagName('body')[0]
let div =  document.getElementsByTagName('div')[0]
let span = document.getElementsByTagName('span')[0];
let button = document.getElementsByTagName('button')[0]

body.addEventListener('click', function (){
    console.log("You have click body")
})
div.addEventListener('click', function (){
    console.log("You have click div")
})
span.addEventListener('click',function (event){
        event.stopPropagation();
    console.log("You have click span")
})
button.addEventListener('click', function (event){

    console.log("You have click button")
})
