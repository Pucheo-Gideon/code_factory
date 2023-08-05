const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i]*arr[j]);
//   }
// }


// 

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++)
    product *= arr[i][j]
}
  // Only change code above this line
  return product;
}

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))
// console.log(multiplyAll([[1], [2], [3]]))
// console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]))



// Multiplication Table
let multiOne = [1, 2, 3, 5, 7]
let multiTwo = Object.assign([], multiOne)

// console.log(multiTwo)


for(let a=0; a<=multiOne.length-1; a++){
    for(let b=0; b<=multiTwo.length-1; b++){
        // console.log(`${multiOne[a]} * ${multiTwo[b]} = ${multiOne[a] * multiTwo[b]}`);
    }
}



// function timeTable(arr1, arr2){

//     for(let a=0; a<arr1.length; a++){
//         for(let b=0; b<arr2.length; b++){
//             console.log(`${arr1[a]} * ${arr2[b]} = ${arr1[a] * arr2[b]}`)
//         }
//     }
// }

// timeTable([[12, 5, 6], [14, 6, 7]])

// let week1=3
// let  week2=7
//     for(let a=1; a<week1.length-1; a++){
//        console.log(`week ${week1[a]}`)
//        for(let b=1; b<week2.length-1; b++){
//         console.log(`week ${week2}`)
//        }
//     }
// }


let num = [1,2,3,4,5,6,7];
let num2 = [1, 2, 3, 4, 5, 6, 7];


for(let i=1; i<num.length-3; i++){
  for (let l=1; l<num2.length-3; l++){
    // console.log(`${num[i]} * ${num2[l]} = ${num[i] * num2[l]}`)
  }
}

let data = {
  name: "Kerry",
  sex: "Female",
  maritalStatus: true
}


  for(let info in data){
    console.log(`${[i]}.${info}`)
  }

// for(let info in data){
//   console.log(info)
// }

console.log(data)