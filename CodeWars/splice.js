// Splice Method: For deleting and adding elements to an array.

// syntax: array.splice(start[, deleteCount, element1, element2, ...element3])

let array = ["We", "are", "a", "bunch", "of", "lovely", "bees"]

let spreadOperator = [".", "And", "They", "were", "a", "Lodestar", "in", "the", "community"]

// starting from index 0 delete 2 elements and add two elements
let newArray = array.splice(0, 2, spreadOperator)

// console.log(newArray);
// console.log(array);

// To add element to and array

let element1 = [1, 2, 4, 5, 6]

let element2 = element1.splice(2, 0, 12, 26);
console.log(element1)

