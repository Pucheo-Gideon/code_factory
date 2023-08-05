let selectOption = document.getElementById('select');
let form = document.forms[0];

form.addEventListener('submit', function(e){
    e.preventDefault
    ();
    console.log(selectOption.value);
})