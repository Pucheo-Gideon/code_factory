const forms = document.forms[0];
const submitForm = document.getElementById("signup");

// let form = forms[0]
console.log("FORMS ==> ", submitForm)

// console.log(submitForm.elements["firstname"])
// console.log(submitForm.elements[1])

submitForm.addEventListener("submit", function(event){
    event.preventDefault();

    let firstname = forms["firstname"];

    console.log("firstname ", firstname.value)
    console.log("lastname ",forms["lastname"].value)
    console.log("email ",forms["email"].value)
    console.log("password ",forms["password"].value)

    submitForm.reset()
})