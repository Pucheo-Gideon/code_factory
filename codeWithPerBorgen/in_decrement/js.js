// function stringEnds(string, ends){
//     if(string[string.length-1] === ends[ends.length-1]){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// console.log(stringEnds("David", "Shadin"))

function stringEnds(string, ends){
    // return string[string.length-2]===ends[ends.length-22]? true: false
    return string.slice(-2)===ends.slice(-2)? true: false
}

console.log(stringEnds("Samurai", "ai"))