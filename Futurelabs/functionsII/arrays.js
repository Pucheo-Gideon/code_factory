// let students = ["Cyril", "Unwana", "Gideon", "Loveday", "Uyai", "Abas"];
// console.log(students)

// console.log("Array Length lists =>", students.length)
// console.log("Third students =>", students[2])
// console.log[6] = "Usemfon";
// delete students[6];
// console.table(students)

let fruits = ["apple", "pineaaple", "straw-berry", "avocado", ""];

// Inserts New Items to the last index of an array
fruits.push = ("bluemon", "brown choc")

// Removes the last item in an array

fruits.pop("")

// removes the first item in an array
fruits.shift("apple")

// Inserts a new Item to the first index of an array
console.log(fruits)

let numbers = [1, 2, 3, 4, 5]
// chsngrd thr itrm order of san arrar
numbers.reverse()
console.log(numbers)

let statement = [1,2,4,5];
statement.splice(2,0,3)
console.log(statement)

let num = [1, 15, 7, 2, 8];
num.sort((a,b) => a- b)
console.log(num)

let alphabets = ["a", "a","a", "b", "c"]
let index = alphabets.lastIndexOf("a")
console.log(index)

let value = alphabets.at(1-2)
console.log(value)


let isInclude = alphabets.includes("2")
console.log(isInclude)

/* A bookseller needs to store the following books in an array called shelf;
    half of a yellow sun, my husband people, Lagos bar beach, Harry Potter, 
    - Write a program to store the books items
    - Add a new book called "Purple Hibiscus" to start of the array 
    - Remove the last book from the array
    - Print out the number of items in an array
    -   WWrite a function that checks if the first book is currently in the shelf
*/

//
//   half of a yellow sun, my husband people, Lagos bar beach, Harry Potter, 

let bookShelf = ["half of a yellow Sun", "my Husband people", "Lagos bar beach", "Harry Potter"]


console.table(bookShelf)

bookShelf.unshift  ("Purple Hibiscus")

bookShelf.pop  ()

console.log("The number of array =>", bookShelf.length)


console.log(bookShelf)

let bookPresent = bookShelf.includes("half of a yellow Sun")
console.log(bookPresent)




function callBook(bookName){
    let message;
    if (bookShelf.includes (bookName)){
        message = `${bookName} is available`
    } else{
        message = `${bookName} is not available`
    }
    return message
}
let result = callBook(bookShelf[0])
console.log(result)



