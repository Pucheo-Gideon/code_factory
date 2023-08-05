let counter = 0;

let value = document.getElementById('value');

let multiButtons = document.querySelectorAll('.btn')

multiButtons.forEach((eachBtn)=> {
    eachBtn.addEventListener('click', function(e){
        // console.log(e);
        let buttonTarget = e.currentTarget.classList;

        if(buttonTarget.contains('increase')){
            counter++;
        }else if(buttonTarget.contains('decrease')){
            counter--
        }else{
            counter = 0;
        }

        value.textContent = counter;
// console.log(value);
        if(counter > 0){
            value.style.color = "green";
        } if(counter<0){
            value.style.color = "red";
        } if (counter = 0){
            value.style.color = "black";
        }
    });
})