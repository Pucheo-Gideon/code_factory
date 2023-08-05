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
    // console.log(ends.slice(-2)===string.slice(-2))
    // return string.slice(-2)===ends.slice(0,2)? true: false
    return string.endsWith(ends)? true: false
}

// console.log(stringEnds("Samurai", "ai"))

function boolToWord(bool) {
  return bool === true || false ? "Yes" : "No";
}

// console.log(boolToWord(false))


function booleanToString(b) {
    if(typeof b==="boolean"){
        return b.toString("True")
    }else{
        return b.toString("False")
    }
}

// console.log(booleanToString(true))

function longest(s1, s2) {
  const concat = [...s1,...s2 ]
  concat.sort()
  if(concat.filter(item=> {
    
  }))
  console.log(concat.sort())
//   let newConcat = concat.sort((a,b)=> a.localCompare(b))
}

longest("uyihjk", "ghjklasdf")