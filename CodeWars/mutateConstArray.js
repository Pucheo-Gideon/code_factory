const s = [45, 67, 9];

let a = [67, 89, 0];

s[4] = 90;

// console.log(s)

// for(let a = 0; a < s.length; a++){
//     for(let b = 0; b < s[a].length; b++){
//         console.log(s[a][b])
//     }
// }

function calc(number, ...args) {
  let sum;
  const arr = args.map((element) => number * element);
  console.log(arr);

  // for (let a in arr){
  //     sum =+ arr[a]
  // }
  // console.log(sum)
}

// calc(5, 6, 7, 8, 9, 10)

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

const changeName = {
  name: "Mahogany",
  setName(newName) {
    this.name = newName;
  },
};

changeName.setName("Dogoyaro");

// console.log(changeName.name)

const multiply = {
  number1: 10,
  answer: 0,
  setNumber(newNum) {
    this.answer = this.number1 * newNum;
  },
};

multiply.setNumber(25);

console.log(multiply.answer);

let { number1, answer } = multiply;

// console.log(answer)

function removeFirstThree(arrays, arrays2) {
  let answer = [];
  for (i = 0; i < arrays.length; a++) {
    for (j = 0; j < arrays2[i].length; j++){
        answer = arrays[i] * arrays2[j];
    } 
  }

  console.log(answer)
}

let source = [1, 2, 3, 4, 5];
let source2 = [6, 7, 8, 9, 10];

removeFirstThree(source, source2);
