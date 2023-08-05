const checkBox = document.getElementsByTagName('input')
// console.log(checkBox)
// checkBox1.addEventListener('click', function(){
//     console.log(checkBox1.value)
//     console.log(checkBox1.checked)
// })

for(let i = 0; i < checkBox.length; i++){
    checkBox[i].addEventListener('click', function(){
        if(checkBox[i].checked == true){
            if(checkBox[i].value === "female"){
                console.log("This will be sent to the backend: ", checkBox[i].value)
            }
            // console.log(checkBox[i].checked)
        }
    })
}