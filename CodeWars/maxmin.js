
// function max(integer){
//    let result = integer.reduce((accumulator, current)=> accumulator + current, 0)
//     return result
// }

// console.log(max([2, 4, 5]));

/*Your task is to make two functions ( max and min, or maximum and minimum, etc., 
depending on the language ) that receive a list of integers as input, and return
the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors. */

// function max(integer){
//    let result = integer.sort((a, b)=> a-b)
//     return result
// }

// console.log(max([4, 1, 2, - 234]));



// let arr = [345, 12, 234, 56, -8, 78, 23, 59, 1000, 12354, 7834, 7995]



// console.log(result)
// list.forEach((element)=>{
//    if(temp<element){
//       temp = element
//    }
// })

// console.log(temp)

// let results = list.reduce((a,b)=> Math.max(a,b), 0)

// console.log(results)


// let max = (list)=> {
//    sort(list).reverse()[0]
//    return list[0]
// }

// console.log(max([12, 14, 15, 17, 19]))
// temp = 0
// let max = (list)=> list.forEach(element => {
//    if (temp< element){
//       temp = element
//    }
// });

// console.log()

// console.log(largestNums([12, 34, 5]))

// function testForPrimality(n){
//    for (let a=2; a<n; n+=1){
//       if(n%a ===0){
//          return false
//       }
//       else{
//         return true
//       }
//    }
// }
// console.log(testForPrimality(2));

function least(a,b){
   // return Math.min(a,b)
   if (a<b){
      return a
   }else{
      return b
   }
}

// console.log(least(8, 12))


// function Least(list){
//    for(let i=0; i<list.length; i++){
//       if(list[i]<list.length){
//          return list[i]
//       } else{
//          return list.length
//       }
//    }
// }

// console.log(Least([1, 2, 3, 4]))

// Biggest
let biggest = function (list) {

  return Math.max(...list)
};

console.log(biggest([23, 56, 700]));

// Least 
let Least = function (list) {

  return Math.min(...list)
};


console.log(Least([23, 56, 7, -1, -1234]));



// Took me four Days to solve those questions



function big(list){
list.sort((a,b)=> a-b)
return list[0]
}

console.log(big([78, 89, -90, 878]))

function least(list){
// list.sort((a,b)=> b-a)
// return list[0]

return Math.max.apply(null, list)
}

console.log(least([78, 89, -90, 878]))



