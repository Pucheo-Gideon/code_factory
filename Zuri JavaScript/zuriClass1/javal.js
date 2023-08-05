let theRealGoat = "Ronaldo";

console.log(theRealGoat[0]);
console.log(theRealGoat.length);

let goatCap = theRealGoat.toUpperCase();
console.log(goatCap);

let goatee = theRealGoat.slice(0, 6) 
console.log(goatee);

let results = `${goatCap} ${goatee}`;

// let results = goatCap + goatee;
console.log(results)

/* When you want to make adjustment or changes,
declare a variable to store that change and then
apply the change(s) you want*/

let church = "church of life"  
let churchCap = church.slice(2, 8)
console.log(churchCap)
console.log(church.length)
console.log(church[8])

let churchConca = `${church} ${churchCap}`
console.log(churchConca)
console.log(churchConca[7])

// get string
let initial = "gideon"

// Caplock first letter when user enters with smallcaps
let initialCap = initial[0].toUpperCase()
console.log(initialCap)

console.log(initial.length)

// Print remaining letters smallcaps
let InitRemain = initial.slice(1,6) 
console.log(InitRemain)

// Add Caplocked first letter to remaining smallcaps

let capSmall = `${initialCap}${InitRemain}`
console.log(capSmall)
  
// REPLACE 
// Example I
let message = 'kola is a girl'

let resultReplace = message.replace("kola", "Gideon")
console.log(resultReplace)

// Example II

let report = "I have a problem"
let reportChange = report.replace("a problem", "an issue")

console.log(reportChange)

//let try and concatenate the stuffs up there
let reportResult = `${report} and an  ${reportChange}`
console.log(reportResult)

// Example III

let question = "Why are you crying"
let questionChange = question.replace("crying", "weeping")
console.log(questionChange)

// THE TRIM METHOD

// Example I
 let city = "    lagos  ";
 console.log(city.trim())

//  Example II
let city2 = "    Off Badagry   Junction, Beside Pompus Station"
console.log(city2.trim())

// Example III

let city3 = "This is the air I breathe    "
console.log(city3.trim())

//  NULL DATATYPE

let loggedIn = null; 

// UNDEFINED DATATYPE

let x = undefined   
