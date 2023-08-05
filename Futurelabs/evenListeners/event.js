let btn = document.getElementById('btn');
let linnk = document.getElementById('linnk');
let txt = document.getElementById('txt');

txt.addEventListener('input', ev=>)

 btn.addEventListener('click', buttonClicked);
 function buttonClicked(ev){
    console.log(ev.type, ev.target, ev.currentTarget);
 }

//  linnk.addEventListener('click', linnkClick);
//     function linnkClick(ev){
//         ev.preventDefault()
//         console.log(ev.type, ev.target, ev.currentTarget);
//     }
 
 linnk.addEventListener('click', ev=>{
        ev.preventDefault()
        console.log(ev.type, ev.target, ev.currentTarget);
    })