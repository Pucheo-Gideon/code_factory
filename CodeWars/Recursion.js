// function multiplyFirstNum(arr, n){

//     let product = 1;

//     for(let i=0; i<n; i++){
//         product *=arr[i]
//     }
//     return product
// }

// console.log(multiplyFirstNum([12, 13, 15, 17, 9, 10]))

// RECURSION

// Recursion is a programming technique were the solution to ONE big problem
// is depending on the solutions to the smaller problems inside it.

// It's a condition that calls it self over and over until it reaches some stopping
// condition.

// Base Case: Stopping Condition
//  The recursive call to that same function usually with diff. 
// argument than what was passed the first time


function factorial(n){
    if(n===1 || n===0){
        return n
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(10))

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
// console.log(fibonacci(10));

const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
// console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));



function countDown(n){
   if(n<=0){
    console.log(n)
    return;
   }

    console.log(n)
    n--;
    countDown(n)
}
// countDown(190)

// Collartz Conjecture

/*
The Collartz Conjecture applies to positive integers and speculates that it is
always possible to get "back to 1" if you follow this steps 
1. if n is 1, stop.
2. Otherwise if n is even, repeat this process n/2.
3. Otherwise, if n is odd, repeat this process on 3n + 1

write a function Collartz(n) to calculates how many steps it takes to get to 1
if you start from n and recurse as indicated above  
*/

function collartz(n) {
  if (n === 1) {
    return 0;
  } else if (n%2 === 0) {
    return 1 + collartz(n / 2);
  } else {
    return 1 + collartz(3 * n + 1);
  }
}

// console.log(collartz(17));

// Write a recursive function, sum(arr, n), that returns 
// the sum of the first n elements of an array arr.


const fib =(n)=> {
    if (n<=2){
        return 1
    }else{
        return fib(n-1) + fib(n-2)
    }
}

// console.log(`this ${fib(13)} is the fibonacci sequence using recursion`)


// Write a recursive function, sum(arr, n), that returns 
// the sum of the first n elements of an array arr.
const sum =(arr, n) => {
    if(n<=0){
        return 0
    }else{
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));
