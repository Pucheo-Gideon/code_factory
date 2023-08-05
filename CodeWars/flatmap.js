
// function calcNumb(){
//     const numbers = [0, 2, 3, 6, 9]

//     numbers.filter(numb =>{
//         numb === 0? numb *3: 0
//     })

// }
/**
 Using flatMap() method and map() method double the numbers of an array
but skip zero(0) from mapping
 */
const numbers = [0, 3, 6]

const newValue =  numbers.filter(numb => numb!==0).map(numb => numb *2);

console.log(newValue);

const digit = [0, 2, 3, 6, 9];

const doubleDigits = digit.flatMap(number, index=>{
    return index !== 0?number *2 : 0;
});

console.log(doubleDigits)