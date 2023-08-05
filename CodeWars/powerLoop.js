function multiplyPower(a, b){
    let product =[]
    return product = `power(${a},${b}) = ${(a**b)}` 
}

console.log(multiplyPower(2,16))
console.log(multiplyPower(2,4))
console.log(multiplyPower(2,5))
console.log(multiplyPower(2,6))
console.log(multiplyPower(2,2))

function power(x,n){
    let result =1
    for(let i=0; i<n; i++){
       result *=x
    }
      return result
}

console.log(power(2,3))