let a = 200;
let b = 20;

var answer = a > 100? 'Correct:' : 'Incorrect'
console.log(answer +` answer is ${a}`)

// &&
// ||
// !

// Example I
let result = !(a == b)? `${a} is not greater than or equal to ${b}`: `${a} is greater than ${b}`
// console.log(result);

// Example II
let firstValue = true 
let secondValue = false

// console.log("first value ==>", !firstValue)
// console.log("second value ==>", !secondValue)

// CLASS WORK

let number = 25;
let name = "Mrs. Uyai-abasi Unwana";

if ((number >= 1) && (number <= 10)){
    console.log(`Hey There! ${name} it's Morning`);
}else if ((number >=10 ) && (number <=20)){
    console.log(`Hey There! ${name} it's Afternoon`);
}else if ((number >= 20) || (number <=50)){
    console.log(`Hey There! ${name} it's Evening`);
} else{
    console.log("Try again!")
}





