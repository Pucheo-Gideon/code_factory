/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

// function sumInput() {
//     let number = [];
//     while (true){
//         let value = prompt("Please, enter your number, 0");
//         // should we cancel
//         if (value === null || value ==="" || !isFinite(value))break;
//         number.push(+value)
//     }
//     let sum = 0;
//     for (let add of number){
//         sum += add;
//     }
//     return sum
// }

// alert(sumInput());

// function getSum(){
//     let digit = [];
//     while (true){
//         let enteredNum = prompt("Please, enter numbers, 0");
//         if (enteredNum ==="" || enteredNum ===null || !isFinite(enteredNum))break;
//         digit.push(+enteredNum);
//     }
//     let addAll = 0;
//     for (let addity of digit){
//         addAll += addity; 
//     }
//     return addAll;
// }

// alert(getSum());

function calculate (){
    let arrValue = [];

    while (true){
        values = prompt("Enter digits please, 0");
        if (values ==="" || values ===null || !isFinite(values))break
        arrValue.push(+values)
    }
    let summed = 0;
    for (let each of arrValue){
        summed += each
    }
    return summed
}
// alert(calculate());

/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

*/

function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum =0;
    for(let item of arr){/* for each item in arr*/
      partialSum += item; /* add it to partialNumber*/
      maxSum = Math.max(maxSum, partialSum); /*remember the maximum */
      if (partialSum<0) partialSum =0; /*zero if negative*/
    }
    return maxSum;
}


console.log (getMaxSubSum([-1, 2, 3, -9])) /*(the sum of highlighted items)*/
console.log (getMaxSubSum([2, -1, 2, 3, -9])) == 6
console.log (getMaxSubSum([-1, 2, 3, -9, 11])) == 11
console.log (getMaxSubSum([-2, -1, 1, 2])) == 3
console.log (getMaxSubSum([100, -9, 2, -3, 5])) == 100
console.log (getMaxSubSum([1, 2, 3])) == 6 /*(take all)*/