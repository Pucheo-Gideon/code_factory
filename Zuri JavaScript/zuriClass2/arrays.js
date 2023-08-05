// Create an Arrays

let arr = []
console.log(arr)

// Another way of creating an array

let arrr = new Array();
console.log(arrr)

// 2. Accessing Javascript arrays

let topThreeEver = ['ronaldo', 'Roy Keane','kaka']
// console.log(topThreeEver[0 ])

// 3. Modifying Arrays

topThreeEver[2] ='Ronaldhino'


let nested_Arr = [
    [1, 3, 4, 5]
    [2, 6, 9, 0 ]
] 

console.log(nested_Arr[0])

// Objects in Arrays

let users = [
    {name: 'tolu', id: 1234},
    {name: 'jide', id: 2345},
    {name: 'Fiona', id: 2341}
]

// console.log(users);

// Array Properties and Method
// console.log(topThreeEver.length)

//PUSH-ADDS ON ELEMENT TO THE END: 
// Pushing an Object to the end of an Array
topThreeEver.push('Arose')
topThreeEver.push('Ballack')
topThreeEver.push('Mundi')
topThreeEver.push('Peterson', 'Cleveroy', 'Declan')
// console.log(topThreeEver)

// POP - REMOVES AN ELEMENT FROM THE END
topThreeEver.pop
// console.log(topThreeEver)

// SHIFT-REMOVES AN ELEMENT FROM THE BEGINNING

topThreeEver.shift()
// console.log(topThreeEver)

// UNSHIFT - ADDS ELEMENT TO THE BEGINNING

topThreeEver.unshift('Kobe Bryant', 'Shaquille O neal')
// console.log(topThreeEver)

// topThreeEver.find(fn) 


// 'FIND' element, index IN AN ARRAY
topThreeEver.find(function(elem){
    // console.log(elem)
})

let isExist = topThreeEver.find(function(elem){
    return elem ==="Shaquille O neal"
})
// console.log(isExist);

// FILTER  

const ages = [54, 45, 12, 45, 78]

let agesArr = ages.filter(function(ages){
    return ages >= 18
})

// console.log(agesArr)
// console.log(ages)

// INCLUDE
//checks if certain elements is in the array 
// and returns true or false

// console.log(ages.includes(6))

// MAP: USe to transform array and return it as the new element

let newMap = ages.map(function(age){
     return ages * 2;
})

console.log(newMap)

