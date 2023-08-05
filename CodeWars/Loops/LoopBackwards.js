
let countBackwards = [];

for(let a=10; a>0; a-=2){
    countBackwards.push(a)
}

let newest = countBackwards.reduce((a, b) => a * b, 0);
console.log( newest)

let oddBackwards = [];

for (let i=9; i>0; i-=2) {
  oddBackwards.push(i);
}

// console.log(oddBackwards);


const arr = [10, 9, 8, 7, 6];

for (let i=0; i < arr.length; i++) {
//   console.log(arr[i]);
}

// Setup
const myTotal = [2, 3, 4, 5, 6]



// Only change code below this line
let total=0

for (let i=0; i<myTotal.length; i++){
 total += myTotal[i]
 console.log(total)
}

// const arrs = [10, 9, 8, 7, 6];

// for (let i = 0; i < arrs.length; i++) {
//   console.log(arrs[i]);
// }