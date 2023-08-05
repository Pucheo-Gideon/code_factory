// function getSubstring(str, a, b){
//     let substring = substring(str)
//     a = 0
//     b = n
//     return substring
// }

// console.log(getSubstring())/

// let string = "Gideon"

// let substring = string.substring(2, 4)

// console.log(substring)

function str(strings, a, b){
    let substrings
    if (strings ==='' ){
    substrings =  strings.substring(a,b)
    } 

    return substrings
}

console.log(str("Gideon", 2, 4))
 

let myNUm= 234.99

console.log(Math.ceil(myNUm))

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle('P!t'))