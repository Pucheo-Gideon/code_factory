let ourLoop = []
let i=0;

while(i<6){
    ourLoop.push(i)
    ourLoop.sort((a,b)=> b-a)
    // ourLoop.reverse()
    i++
}

// console.log(ourLoop)

let arrays = [1, 5, 7, 2, 19, 10]

// Using the spread operator syntax
let newarr = [...arrays].sort((a,b)=> a-b);
console.log(newarr)

// using Object.assign Method
let newest = Object.assign([], newarr).sort((a,b)=>b-a)
console.log(newest)


const myArray = [];

// Only change code below this line.
let v = 5;
while (v >= 0) {
  myArray.push(v);
  v--;
}

console.log(v)