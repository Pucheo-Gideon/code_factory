let count = 0;

let value = document.querySelector('#value')

let btns = document.querySelectorAll('.btn')

btns.forEach((btn)=> {
    btn.addEventListener('click', function(e){
        let targetButtons = e.currentTarget.classList
        // console.log(e.currentTarget.classList)
        if(targetButtons.contains('increase')){
            count++;
        } else if (targetButtons.contains('decrease')){
            count--;
        } if (targetButtons.contains('reset')){
            count = 0;
        }
        if(count > 0){
            value.style.color = "Green";
        } else if (count < 0){
            value.style.color = "Red";
        } else {
            value.style.color = "#ccc";
        }
        value.textContent = count;
    })
})