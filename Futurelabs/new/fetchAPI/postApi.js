//This is the form element form html
const formEle = document.forms[0]

//Add an event listener of type submit to the form
formEle.addEventListener('submit', function(event){
    //Stop the form form reloading after submit
    event.preventDefault();

    //Get all the elements from the form tag
    const form = event.currentTarget;
    //Format the form by extracting the input tags and attributes
    const formData = new FormData(form)
    //Change the format of the form to an object
    let data = Object.fromEntries(formData.entries())

    //Get the form attribute called action
    let action = form.action
    //Get the form attribute called method
    let method_name = form.method

    //Perform a POST request to the server
    fetch(action, {
    method: method_name,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //clear out the data on the form after submission
    formEle.reset();
})