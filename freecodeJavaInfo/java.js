let john = {
  name: "john",
  sayHi: () => {
    // console.log("Hi " + this);
  },
};

// john.sayHi();

let namer = "Come Here";

let namerCaps = namer.toUpperCase();
// console.log(namerCaps);

let floated = 1.123467899;

// console.log(floated.toFixed());

let str = "Hello";
str.test = 5;
// console.log(str)

let figure = 125

// Converting a number in base 10 to binary, octal, hexadecimal
let figureString = figure.toString(32)
// console.log(figureString)


let d = 133.321

// console.log(d.toFixed(1));

sum = 0.1 + .5

// console.log(sum.toFixed(9));

let l = 99999999999999;
// console.log(l.toString(32));

let currency = parseInt("345$");
let total = currency - parseInt("567$");

// console.log(total); 

let arrNum = (12, 3, 4, 5, 6, 7, 7,9)
// console.log(Math.min(12, 3, 4, 5, 0, -0, 6, 7, 7, 9));

// console.log(Math.pow(6,8));

function calculate (){
// Number(sec)
// Number(ist)
// Number(answered)
let operator = prompt("Which arithmetic do want to do?. E.g \"+\"")
let ist = +prompt("Enter your first number", "")
let sec = +prompt("Enter your second number", "")
let answered = ist + sec;
if( operator === "+"){
    alert(`Your answer is ${answered}`)
}
else{
    alert("Invalid Operation!")
}
}

// calculate()


// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//   } while (!isFinite(num));

//   if (num === null || num === "") return null;

//   return +num;
// }

// alert(`Read: ${readNumber()}`);
let guestList = "Guests:\n * John\n * Pete\n * Mary";
// console.log(guestList)
// console.log("\u{1F60D}");
// console.log("\u{20331}"); 

// console.log(guestList[-1]);

for(let char of 'Hello'){
    // console.log(char[char.length-1])
}

let charsoal = "Granada is a boy";

// let jey =charsoal.includes('a');

// console.log(charsoal.endsWith('Granada'));

let str1 = "stringify"
let str2 = str1.slice(0, 5);
console.log(str2)

console.log(str1.substring(1, -5))

// if(charsoal.indexOf("is") !=-1){
//     let newChar = charsoal.indexOf("is") != -1;
//     return true
// }
// console.log(newChar);

// Creating a new variable and using it to mutate a string
// let charsoal1 = "S" + charsoal.

// console.log(charsoal[0]);
// console.log(charsoal.indexOf("G"))

// WORKING WITH ARRAYS

let newArray = new Array("Banana", "Orange", "Mango", "Pear", "Fruitcrose");
newArray.push("Coconut", "Cashew")
newArray.unshift("PawPaw", "Star apple");

newArray[2] = "Cocoa";

// console.log(newArray[4].length);

// let arrayMix = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// arrayMix[3]();

let lastArr = newArray[newArray.length-1]
// console.log(lastArr);
// console.log(newArray.at(-1))
// console.log(newArray);

// let newRay = lastArr

newRay = ["Pepper", "Pumpkin", "onion", "Carrot"];
// console.log(newRay);

let fruit = ["pawpaw"];

let arr3 = fruit;

// console.log(arr3 == fruit);

arr3.push("Carica-Papaya","Pepper", "Pumpkin", "onion", "Carrot");

// console.log(fruit);

for(i=0; i<arr3.length; i++ ){
    // console.log(arr3[i]);
}

for(let arrs of arr3){
    // console.log(arrs);
}

let magazines = ["The Punch", "DailyTrust", "The Nation", ""]

// for(let i=0; i<magazines.length; i++){
//     console.log(magazines[i]);
// }

for(let a of magazines){
    // console.log(magazines);
}

// MULTIDIMENSIONAL STRING 
let matrix = [
    [1, "What do you want", 2],
    [5, 5, 6, 7, 9],
    ["What do you have", 90, "", 45 ],
    [12, 45, 1, 3, 6]
]

// matrix.length = 2;
// console.log(matrix[3][3])

// mcGrow = [1, 2, 3, 4, 5, 6]
// mcGrow.length = 2;
// console.log(mcGrow);
// mcGrow.length = 5;
// console.log(mcGrow[3]);

let isString = [1, 2, 3]
// console.log(String[isString] === '1, 2, 3');

let obj = {
    name: "Frederick",
    complexion: "Dark",
    height: '5\'5in'
};

for(key=0; key<obj.length; key++){
    console.log(`${key} : ${obj[key]}`)
}
// 

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

console.log(fruits);

let styles = ['jams', 'blues']


    styles.push("Rock-n-Roll");
    styles[1] = "Classic"
    styles[Math.floor((styles.length-1)/2)]
    console.log(styles.shift());
    styles.unshift("Rap", "Reggae");

    // for(i=0; i<styles.length; i++){
    //     if(i*2 ==!0){
    //         console.log("That is Odd")
    //     }
    // }

    arrThis = ["a", "b"]

    arrThis.push(function(){
        console.log(this)
    })

    let resultee =arrThis[2]();
    console.log(resultee);

console.log(styles);

// let result = arrayStyles()

// for(let i =0; i<styles.length; i++){
//     let result = arrayStyles();
//     return result;
// }



function sumInput(){
    let enter1 = +prompt("Please enter any digits");
    let enter2 = +prompt("please enter another digits of again");
    let enteredArray = [enter1, enter2]
    if(enter1, enter2  ==null ||(enter1, enter2 =="")||(enter1, enter2 >= ~~"") ){
        enteredArray = enter1 + enter2;
    }
    return enteredArray
}

sumInput()