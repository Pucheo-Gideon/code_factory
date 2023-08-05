let temperatures = [23, 45, 66, 7, 7, 9, 12]

// For array, spread operator takes the content and spread them as individual as
// arguments into the function
// console.log(Math.min(temperatures)) // This will show NaN

console.log(Math.min(...temperatures)) //This is correct and the one below it
// console.log(Math.min.apply(null, temperatures)) 



// Ex 2

let TvShows = ["Tinsel", "Hotel Majestic", " Six Under Feet", "Chernobyl", "Black Mirror", "FleaBag"]
console.log(...TvShows)
// answer ===> Tinsel Hotel Majestic  Six Under Feet Chernobyl Black Mirror FleaBag

// console.log( "This is is not", ..."BANANNA")

// for an arrays. We can take take data from an existing array or arrays and spread
// into a new array. for Example;

let parents = [ "Eyo", "Roseline"]
let children = ["Gideon", "Jerry", "Zenas", "Joy", "Destiny"]

let parentChildren = [...parents, ...children]
let fullFamily = [parents, children]

// console.log(parentChildren, fullFamily)

// When an array is copied, the new array references the old array.
// So when changes are made in any of the two, they both are updated with same.
// But you can change this phenomenom using the ...spread operator.
// Although the new array is copied, with spread operator, the javascript engine 
// treats it as an entirely new array, distinct and separate from the original. 
// So changes made in one of the two will not affect or reflect in the other.
let originals = ["Mona Lisa", "American Gothic", "The School of Athens"]
let copies = originals
copies.push("SeaHawks")
console.log(originals)
console.log(copies)

let old = ["Gregory", "Shantel", "Gerstrom", "Frapapa"]
let New = [...old]
New.push("Alright")

console.log(New)
console.log(old)

let games = [["soccer", "football"], ["Table tennis", "Lawn tennis", ["mud court", "hard court"]], ["volleyball", "Handball"], "The musketeers" ]

let sports = ["American Football", games[0][1]]

console.log(sports)

let tennis;
tennis.push( [...games[1][2][0]]) 
console.log(tennis)

