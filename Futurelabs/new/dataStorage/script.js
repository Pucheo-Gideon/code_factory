const form = document.forms[0];
// const labels = document.getElementsByTagName('label')

// console.log(labels[1].getAttribute('for'))
// labels.pop()
// let newLabels = [...labels]
// // newLabels.pop()
// console.log(newLabels)

let data = {};
let storage = [];


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let saveData = [];
    for(let i = 0; i < form.elements.length - 1; i++){
        let key_property = form.elements[i].getAttribute('name')
        let value = form.elements[i].value
        // console.log(`${key_property} : ${value}`)
        // form.elements[i].setAttribute('disabled', true)
        data = {[key_property]: value}
        saveData.push({...data})
    }
console.log(saveData)

    let newObject = Object.assign(
      {},
      saveData[0],
      saveData[1],
      saveData[2],
      saveData[3],
      saveData[4],
    );
    storage.push(newObject)

    localStorage.profile = JSON.stringify(storage)
    // localStorage.setItem("profile",  JSON.stringify(storage))

    form.reset()
})