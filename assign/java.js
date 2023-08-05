// A function that reverses the following words "world" and "word"

function backwards(str) {
  return str.split("").reverse().join("");
}
let reversal = backwards("world");
// console.log(reversal);


// Write a function that takes an array of numbers 
// and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then 
// you should return 0.

// let arr = [1, 2, 3, 4, 5, 6];

// let sum = arr.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);

// // console.log(sum);
// function calculateNumbs (a, operator, b){
//   if (operator == '+'){
//     answer = a + b;
//   }
//   else if (operator == "-"){
//     answer =  b-a;
//   }
//   else if (operator == "*"){
//     answer = a * b;
//   }
//   else if (operator == "/"){
//     answer = b/a;
//   }
//   else {
//     answer = "Invalid operation"
//   }
//  return answer
// }

// solution=calculateNumbs(5,"*",6);
// console.log(solution);

function greeting(name){
  answer = `Hello ${name}, How are you?`
  return answer
}
// greeting("Mr. Bright")
// console.log(answer);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].map(
  Number
);

const positive = arr.filter(posDigit => posDigit >0);
const negative = arr.filter(negDigits => negDigits <0);
const positiveInt = positive.reduce((accumulator, current) => accumulator + current, 0);
const negativeInt = negative.reduce((accumulator, current)=> accumulator + current, 0);

// console.log(positiveInt);
// console.log(negativeInt);


function backtrack(array){
   return array.split("").reverse().join("");
}
let answer = backtrack("world");

// console.log(answer)

let numberArray = [1, 0, 0, 45, 47, 8, 9, 2, 12]
 function flip (){
  let flipArray = numberArray;
  return flipArray.reverse();
 }

// flip()
let resulte = flip()
// console.log(resulte);

let sum = resulte.reduce((accumulator, value) =>{
  return accumulator + value 
}, 0)

console.log(sum);

let classNums = [24, 34, 2, -1, -100, -34, 1, 2, 4, 5, 90];

function palindrome(){
  return classNums.reverse().reduce((accumulator, value)=>{
    return accumulator + value
  }, 0)
}


// resultant = palindrome();
// console.log(resultant)

let fillPos = classNums.filter(posNumbs => posNumbs > 0)
let fillNeg = classNums.filter(negNumbs => negNumbs <0)
let totalPos = fillPos.reduce((accumulator, value) => accumulator + value,0)

let totalNeg = fillNeg.reduce((accumulator, value) => accumulator + value
,0)

console.log(totalNeg);
console.log(totalPos);


let count = [12, 45, 28, -1, -4, -4, 12, 45, -78]

let minuses = count.filter(minusNum => minusNum <0);
let pluses = count.filter(plusses => plusses>0);

let newMinus = minuses.reduce((accumulator, value)=> accumulator + value, 0);
let newPluses = pluses.reduce((accumulator, value)=> accumulator + value, 0);

console.log(newMinus);
console.log(newPluses);

function reverseOrder(){
  return count.reverse()
}

let resulted = reverseOrder()
console.log(resulted)

let reverrsa = 'word';

function reverseWord(){
  return reverrsa.split("").reverse().join("");
}

let reverseResult = reverseWord()
console.log(reverseResult)

let uyaiName = "Uyai Isidore Beautiful"

function reverseUyai (){
  return uyaiName.split('').reverse().join("");
}

let nameResults = reverseUyai()
console.log(nameResults);

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function returnArray(){
  return arrayNumber.reduce((accumulator, value)=> accumulator+value, 0)
}

let resultArray = returnArray()
console.log(resultArray);

function mathArithmetic(a, operator, b){
  if (operator == "+"){
    answer = a + b;
  }
  else if (operator == "-"){
    answer = a - b;
  }
  else if (operator == "/"){
    answer = a/b;
  }
  else if (operator == "*"){
    answer = a * b;
  }
  else if (operator == "%"){
    answer = a%b;
  }
  else{
    answer = "Invalid operation"
  }
  return answer
}

mathArithmetic(6, "+", 9);
console.log(answer);

function SayHello(name){
  return asked = "Hello " +name+ ", How are you doing today?"
}

SayHello("Mr. Usenmfon");
console.log(asked)


let countSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

let posCount = countSum.filter(posiTives => posiTives >0)
let realCount = posCount.length

console.log(realCount);

let NegaTives = countSum.filter(negates => negates <0)
let totalnegeTives = NegaTives.reduce((accumulator, current) => accumulator + current,0)
console.log(totalnegeTives);