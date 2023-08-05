let greeting = { 
    1: "Hi!",
    2: "Hello",
    3: "How are you doing",
    4: "It's been long I saw you",
    "5": "It's True!"
}

// Get or return an array of the enumerated values of the objects 
let array = Object.values(greeting)
console.log(array)

// Get or return an array of the enumerated keys of the objects 
let array2 = Object.keys(greeting)
console.log(array2)

// Get or return an array each for the enumerated key and value properties of the objects 
let array3 = Object.entries(greeting)
console.log(array3)
