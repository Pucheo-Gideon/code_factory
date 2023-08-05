// classList - shows/get all classes
// contains = checks if a class

let navToggle = document.querySelector('.nav-toggle')
let linkks = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    if(linkks.classList.contains('links')){
        linkks.classList.remove('links')
    }else{
        linkks.classList.add('links')
    }
    // console.log(linkks.classList.contains('links'))
})