// let colour = prompt("Please enter the appropraiet traffic colour", "");

// function trafficLight (colour){
//     let value;
//     if (colour.toLowerCase() == "red"){
//         value = "STOP"
//     } else if (colour.toLowerCase() == "yellow"){
//         value = "READY!"
//     }else if (colour.toLowerCase() == "green"){
//         value = "GO!"
//     } else{
//         value = "invalid inputs"
//     }
//     return value;
// }

// console.log(trafficLight("red"))

// WHILE LOOP

// let i = 0;

// while (i < 5 ){
//     console.log("Hello You!")
//     i++
// }

// console.log(i)

// DOW HHILE LOOP

// do{
//     console.log ("I love JavaScript")
//     i++
// }while(false)
// <
// for (let i=1; i <= 10; i++){
//     if( i % 2 == 0 ){
//         continue;
//     }
//     console.log(i +"\n");
// }

// for (let i = 1; i <= 10; i++) {
//   for (let a =0; a <= 10; a++ )
//     console.log(i + "\n");
//   }

// Using any loop of your choice, write a program that prints out
// the multiplication time table from one(1) to five(5)

// Note that this will require you to nest series of statements. You can use
// the escape "\t" to space the table appropriately

console.log("\n");
console.log("Multipl of 1");
console.log("\n");

for (let a = 1; a <= 12; a++) {
  if (a > 1) {
  }
  console.log(a + "\n");
}

console.log("\n");
console.log("Multipl of 2");
console.log("\n");

for (let b = 1; b <= 12; b++) {
  if (b >= 1) console.log(b * 2 + "\n");
}

console.log("\n");
console.log("Multipl of 3");
console.log("\n");

for (let c = 1; c <= 12; c++) {
  if (c >= 1) console.log(c * 3 + "\n");
}

console.log("\n");
console.log("Multipl of 4");
console.log("\n");

for (let d = 1; d <= 12; d++) {
  if (d >= 1) console.log(d * 4 + "\n");
}

console.log("\n");
console.log("Multipl of 5");
console.log("\n");

for (let e = 1; e <= 12; e++) {
  if (e >= 1) console.log(e * 5 + "\n");
}

console.log("The End!");
