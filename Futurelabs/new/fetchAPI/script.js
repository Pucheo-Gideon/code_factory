const formElement = document.forms[0]

formElement.addEventListener('submit', function(e){
    e.preventDefault()
    let form = e.currentTarget
    let formData = new FormData(form)

    let plainFormData = Object.fromEntries(formData.entries())

    console.log(plainFormData)

    form.reset()
})