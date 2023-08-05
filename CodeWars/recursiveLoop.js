function recursiveLoop(n){

   if(n<1){
    return []
   }else{
    const countdown = recursiveLoop(n-1)
    countdown.unshift(n);
    return countdown;
   }
}


// console.log(recursiveLoop(45))

/* Answer: Starting from the provided number to the stated base case.
[
  45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35,
  34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24,
  23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13,
  12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,
   1
]

*/

function recursiveLoop(n) {
  if (n < 1) {
    return [];
  } else {
    const countdown = recursiveLoop(n - 1);
    countdown.push(n);
    return countdown;
  }
}

// console.log(recursiveLoop(45));

  /*
  Answer: Starting from the  base case upward
  [
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45
]
  */


/*
The function should return an array of integers which begins with a number 
represented by the startNum parameter and ends with a number represented by
the endNum parameter. The starting number will always be less than or equal
to the ending number. Your function must use recursion by calling itself and
not use loops of any kind. It should also work for cases where both startNum 
and endNum are the same.
*/ 
 function rangeOfNumbers(startNum, endNum) {

  if(startNum > endNum){
  return [];
  } else{
    const arrNum =  rangeOfNumbers(startNum, endNum-1)
    arrNum.push(endNum--);
    return arrNum
  }
};

// console.log(rangeOfNumbers(455, 677))


function countUp (n, p){
    if(n>p){
        return []
    } else{
        const store = countUp(n, p-1)
        store.push(p--)
        return store
    }
}

// console.log(countUp(4, 9))

function countDown(n){
    if(n<1){
        return []
    }else{
        const values = countDown(n-1)
        values.unshift(n)
        return values
    }
}

// console.log(countDown(15))
function letsCountDown(number){
    // let countdown = 1
    // for(let i=1; i<n.length; n--){
    //     countdown = [i]
    // }
    // return countdown

    // console.log(number)
    const newNumber = number - 1
    if(newNumber>1){
       letsCountDown(newNumber)
    }
}

console.log(letsCountDown(5))