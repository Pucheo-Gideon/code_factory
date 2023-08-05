const formEle = document.forms[0]


formEle.addEventListener('submit', function(e){
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form)

    let plainData = Object.fromEntries(formData.entries())

    localStorage.details = JSON.stringify(plainData)

    // let storage = localStorage.getItem("details")
    // console.log(JSON.parse(storage))
    formEle.reset();
})

