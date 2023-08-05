const  repeatStr =(n, s) =>{
   
  let repeatedString = ""

  for (let i=0; i<n; i++){
    repeatedString += s
  }

  return repeatedString
}
console.log(repeatStr(5, "You are great! "))


let multiplyString = "David"
let multiply = 5
let answer = ""
for (let i=1; i<multiply; i++){
   answer += multiplyString
  //  console.log(answer)
}

function rep(n, s){

 return s.repeat(n)
}

console.log(rep(4, "you "))