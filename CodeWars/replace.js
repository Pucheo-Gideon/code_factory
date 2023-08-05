function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let hold = "";

  for (let a = 0; a < dna.length; a++) {
    if (dna[a] === "T") {
      hold += "U";
    } else {
      hold += dna[a];
    }
  }
  return hold;
}

// console.log(DNAtoRNA("GCATTT"))

function _dnaToRna(_DNA) {
  let result = _DNA
    .split("")
    .map((letters) => (letters === "T" ? "U" : letters))
    .join("");
  return result;
}

// console.log(_dnaToRna("GCATTT"));

function validatePIN(pin) {
  let regex = /^\d{4}$|^\d{6}$/g;
  return regex.test(pin);
}

// console.log(validatePIN("a644"));

let str = "Widget from come"

// console.log(str.indexOf("et"))

// function wordboundary(h){
//     let regex = /\b\d\d\b/
//     return 
// }

function enough(cap, on, wait) {
  //cap: number of passengers it can take
    // on: number of passengers already on the car
    // wait: number of passengers waiting to get on the cap
    let message = `He cannot fit in ${(on + wait )- cap} of the ${wait} passengers`
    // let isAvailable = cap - on
    // console.log(cap - wait + on)

    // if(on + wait === cap ){
    //     return 0
    // }
    //  else if(  cap> on + wait ){
    //     return `He can fit in ${cap - (wait + on)} more passengers`
    // }else if (on===cap){
    //     return wait
    // }
    // else{
    //     return message
    // }

    return on + wait === cap ? 0 : 
    cap> on + wait ? `He can fit in ${cap - (wait + on)} passengers`: 
    on === cap? wait: message
}

// console.log(enough(100, 8, 60));


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return "Did parents allow you?";
//   }
// }

// function checkAge(age) {

//   return age > 18 ? true : "Did parents allow you?";
 
// }
function checkAge(age) {

  // return age > 18 ? true : "Did parents allow you?";
  return age> 18 || "Did parents allow you?"
}
// console.log(checkAge(19));

function minNum (a,n){
  // return a > b? b : a

  return a**n
}

// console.log(minNum(2, 9))

let age = 20

let welcome = (age > 18)? 
function() { console.log("Great")}:
function () {console.log("Nonsense!")}

welcome()