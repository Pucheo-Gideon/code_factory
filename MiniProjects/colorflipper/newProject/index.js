 let color = ['purple', 'orange', 'yellow', 'brown', 'pink'];

 let btn = document.getElementById('btn')
 let indicator = document.querySelector('#initial')

  btn.addEventListener('click', function(){
    let colorPigment = getColors();
    indicator.textContent = color[colorPigment]
    document.body.style.backgroundColor = color[colorPigment]

 })

    function getColors() {
    return Math.floor(Math.random() * color.length)
 }