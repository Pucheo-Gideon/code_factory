let counter = 0;

let value = document.getElementById('value');

btns = document.querySelectorAll('.btn');

// console.log(btns);
btns.forEach(btn => {
    // console.log(btn)
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList)
        let styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            counter--;
        }
        else if (styles.contains('increase')){
            counter++;
        }
        else{
            counter = 0;
        }

        if(counter > 0){
            value.style.color = "green";
        }
        if (counter < 0){
            value.style.color = "red";
        }
        if(counter == 0){
            value.style.color = "#222";
        }
        value.textContent = counter;
    })
});