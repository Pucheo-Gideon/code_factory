let count = 0;

let value = document.querySelector('.value');

manyButtons = document.querySelectorAll('.btn')

manyButtons.forEach(eachButton => {
    eachButton.addEventListener('click', function(e){
        buttonTarget = e.currentTarget.classList
       if(buttonTarget.contains('decrease')){
        count--;
       } else if (buttonTarget.contains('increase')){
        count++;
       }if (buttonTarget.contains('reset')){
        count = 0;
       }
    value.textContent = count;

    if(count> 0){
    value.style.color ='green'
    } if(count < 0 ){
        value.style.color = 'red'
    } if(count == 0){
        value.style.color = "#222";
        // console.log(color)
    }
    })
});