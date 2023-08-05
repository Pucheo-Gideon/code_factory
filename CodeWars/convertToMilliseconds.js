//  function past(h, m, s) {
//     if(h>0 || m >0  || s>0){
//         return h * 3600000 +  m * 60000  + s * 1000 
//     } else{
//         return 0
//     }
// }


function clock(h, m, s){
    return h>0 || m>0 || s>0 ? h * 3600000 +  m * 60000  + s * 1000 : 0
}
const past = (h, m, s)=> {
    return h>0 || m>0 || s>0 ? h * 3600000 +  m * 60000  + s * 1000 : 0
}

console.log(past(0, 5, -1))  
console.log(clock(1, 1, 1));