const input = document.getElementsByTagName("input")[0];
const form = document.getElementsByTagName("form")[0];
const div = document.getElementsByName("div")[0];

form.addEventListener("submit", function(e){
    e.preventDefault();

    console.log(e.target.input)
})

input.addEventListener("change", function(event){
    console.log(event.target.value)
})