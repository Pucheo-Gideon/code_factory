//    1. Declaring function
// function sayHello() {
//   console.log("hello world");
// }

// 2. Calling function
// sayHello();

// function getName(name) {
//   console.log(name);
// }
//3. The return statement
// getName("Gideon");

// function getFullName(firstName, lastName) {
//   let fullName;
//   fullName = firstName + " " + lastName;
//   return fullName;
// }

// let FullName = getFullName('Gideon', 'Thrivery');

// console.log(FullName)

// 1. function // Example I
function sayHello() {
  console.log("Hello World!");
}

//  This is to call the function
sayHello();

// Example II.

function getName(name) {
  console.log(name);
}

console.log(getName("Gideon"));

// To return statemen

// UNCOMMENT THIS ONE LETTER!
// function getFullName(firstName, surName) {
//   let FullName;
//   FullName = firstName + " " + surName;
//   return FullName;
//   console.log("Hello World!");
// }

// let fullName = getFullName("Gideon", "Pucheo");
// console.log(fullName);

// 4. To have a Default value in an argument

function getFullName(firstName = "Hello Mr", surName = "Nice") {
  let FullName;
  FullName = firstName + " " + surName;
  return FullName;
  console.log("Hello World!");
}

let fullName = getFullName();
console.log(fullName); 

// 5. Write a function min(a,b) that returns 
// the least of two numbers a and b
function getMin(a, b) {
 if (a>b){
  return  b;
 } else {
  return a;
 }
  
}

console.log(getMin(56, 0)
)

// 6. Another Example: Write a function to return the name with longest string

// function longestString(first, second){

// }

// longestString(Gideon, Okwongudo)


// ************************************************ //


   


