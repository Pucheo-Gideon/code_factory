let arrOfNames = ["Unwana", "Uyai", "Bright", "Cyril", "Cyril", "Magdalene", "flavour"];

// for(let i = 0; i<= arrOfNames.length; i++){
//     console.log(arrOfNames[i])
// }


// let arrayDog = ['Black Posh', 'Zondeyya', 'Conqka', 'Billows', 'Floki', 'Zondeyya', 'Consnanse', 'Caucasian', 'Plog' ];

// arrayDog = arrayDog.unshift('Pollack');



// console.log(arrayDog);

// for(i = 0; i <= arrayDog.length; i++){
//     console.log(arrayDog[i]);
// }



// arrayDog.map((items, index) =>{
//     console.log(`${index} ${items}`)
// })

// let solution = arrayDog.filter(item => {
//     return item =='Zondeyya'
// })

// console.log(solution)

let classStudent = ['Gregory', 'Pelly', 'Matthias','Gregory', 'Esther', 'Shadrach']

// let filterStudent = classStudent.filter(item =>{
//     return item == 'Gregory';
// })

// console.log(filterStudent);

// for (i = 0; i <= arrayDog.length; i++){
//     console.log(arrayDog[i]);
// }

let filterStudent = classStudent.filter(item => {
    return item === 'Cyril'
})

console.log(filterStudent)

let filler = arrOfNames.filter((index, item) =>{
    console.log(`${item}. ${index} `);
    console.log("\n")
})


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

alphabet.map((item, index) =>{
    console.log(index +'.\t'+ item)
})

console.log('\n')

alphabet.forEach((item, index) => {
    console.log(index +'.\t'+ item)
});

let addition = [24, 23, 24, 45, 12, 45, 38, 1, 5, 8]
let sum = addition.reduce((a,b)=> a-b)
console.log(sum)

// for(i=0; i<=addition.length; i++){
//    sum = addition[i];
// }

// console.log(sum)
// for (i = 0; i<=alphabet.length; i++){
//     console.log(alphabet + "." + [i]);
// }



// USING MAPS
// arrOfNames.map(items =>{
//     console.log(`${items}`)
// })

// CALL BACK FUNCTION
// let i = () => console.log("")

//  FILTERING AN ARRAY
// let result = arrOfNames.filter(item => item == "Cyril")

let result = arrOfNames.filter(item =>{
    if(item =='Cyril')
    return item 
})

console.log(result);

// arrOfNames.forEach(item =>{
//     console.log("student =>", item)
// })

// 

// REDUCE METHOD
let num = [1, 2, 3, 4, 5, 6]
// for(let i = 0; i < num.length; i++){
//     sum = sum + num[i]
// }

// console.log(sum)

// REDUCE
// let sum = num.reduce((a,b) => a * b)
// console.log(sum)


// Using the array below, use any method of your choice to filter 
// out all duplicate items and return a new array with no duplicates.
// Using a function, write a program that checks through the array 
// above and returns true or false if there are any duplicates.

const emojis = [
"💘","💘","🌞","🧡","🍇",
"🧁","⚡️","💝","🐱","💘",
"🧡","💫","🍓","💜","⚡️",
"⚡️","🐶","💘","🍇","🐱",
"💘","💫","🍓","💜","💕",
"⚡️","💘","🌞","🐱","💘",
"💫","🍓","💜","⚡️","🧡",
"💕","🍇","💘"
]