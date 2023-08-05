// Splice : Swiss army knife method that inserts, deletes and replaces

let arrs = ["Grow", "Emic", "Emi sokan"];
arrs.push("I", "Just", "Love", "To", "See", "You", "Grow");

// console.log(arrs);

let arris = [1, 2, 3, 4, 5];

// arris.splice(4, 0, 56)

freshNew = arris.concat([6, 7, 8, 9, 10]);

// console.log(freshNew);

// let lets = [1, 2, 3];

// let arrayLike = {
//     0:'something',
//     1:'length',
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// }
// console.log(lets.concat(arrayLike));

let multiples = ["CIA", "FBI", "Notoriety"].forEach((index, item, array) => {
  // console.log(`${item} is at index ${index} in ${array}`)
});

let numbre = [1, 2, 3, 4, 5, 6, 7, false].forEach((item, index, array) => {
  // console.log(`${index} is an index of item ${item} which you can find in this array => ${array}`);
});

let numbre2 = [1, 2, 3, 4, 5, 6, NaN, 7].find(function (item, index, array) {
  if (item % 2 === 0) {
    // console.log(`Yes. ${item} is divisible by 2`)
  }
});
// let numbre3 = ["Pumpkin", "Sugarcane", "Papaya", "Cream sauce"]
// console.log(numbre2.indexOf(NaN));

let users = [
  { id: 1, name: "john" },
  { id: 2, name: "shedrach" },
  { id: 3, name: "sandra" },
];

let use = users.find((item) => item.name === "shedrach");

// console.log(use.id);

let arrayList = [
  {
    name: "Naanvin",
    phoneNo: 08053545,
    age: 15,
    height: "5'5in",
    language: "Arabic",
  },
  {
    name: "Grace",
    phoneNo: 08013445,
    age: 32,
    height: "5'6in",
    language: "Ibibio",
  },
  {
    name: "margeret",
    phoneNo: 08013365,
    age: 12,
    height: "3'6in",
    language: "etere",
  },
];
// console.log(fullName);

// let get = arrayList.find((item) => item.name === "margeret");
// console.log(get.phoneNo);

// console.log(get["name"]);

let school = [
  { ident: "AkwaPoly", id: 1 },
  { ident: "Metropoly", id: 2 },
  { ident: "UyoCity", id: 3 },
  { ident: "Foster", id: 4 },
];

// console.log(school.findIndex((item) => item.ident === "AkwaPoly"));
// console.log(findSchool.id);
let returnFilter = school.filter((index) => index.id > 2);

//  console.log(returnFilter);

let squareRoot = freshNew.map(Math.sqrt);

let sqaured = [4, 9, 25, 49].map(Math.pow);
//  console.log(sqaured)
//  console.log(squareRoot)

// function makeSquare(){
//     let number = [];
//     while (true){
//         let getvalue = prompt("please enter your base", 0)
//         if((getvalue ==="" || getvalue == null || getvalue==!isFinite))break;
//             number.push(+getvalue)
//     }
//         let getPower;
//         for(let each of number){
//         getPower = each.map(Math.pow);
//     }
//     return getPower;
// }
// alert(makeSquare());

let arrayMap = [3, 4, 5, 6];
// let newArrayMap= arrayMap.map(myfunction)

// function myfunction(num){
//     return num * 5;
// }

// console.log(newArrayMap);

let arrayLength = ["Affoing", "Eteka", "Promise", "Fatherland"];

let come = arrayLength.map((item) => item.length);

// console.log(come);

// let iniTials = [
//   { firstname: "Gregory", lastname: "Shedrech" },
//   { firstname: "O'Neil", lastname: "Farouq" },
//   {firstname: "Constantine", lastname: "Thomas"}
// ];

// iniTials.map(getFullName);

// function getFullName(item){
//     return [firstname.item, lastname.item].join(" ");
// }

// console.log(getFullName());

// let arrSort = [3, 2, 1, 5, 10, 8, 9, 19, 15, 14];

// arrSort.sort(a, b => a - b);
// console.log(arrSort);

arrName = ["Gideon", "Arits", "Dallas", "Bassey", "Zeus", "Viera"];

// console.log(arrName.sort((a, b) => a.localeCompare(b)));

let mixName = ["Zoology", "Paleontology", "Orthodoxoly", "Medicine"];

// console.log(mixName.sort((a,b) => a.localeCompare(b)))

let anums = [23, 1, 7, 2, 9, 79, 100, 90];

// console.log((anums.sort((a,b)=> a-b)));

let alphabets = [
  "Z",
  "Y",
  "X",
  "W",
  "V",
  "U",
  "T",
  "S",
  "R",
  "Q",
  "P",
  "O",
  "N",
];
let reverseLetters = alphabets.sort((a, b) => a.localeCompare(b));
// console.log(reverseLetters);

let alphabets1 = [
  "M",
  "L",
  "K",
  "J",
  "I",
  "H",
  "G",
  "F",
  "E",
  "D",
  "C",
  "B",
  "A",
];
let reverseLettersII = alphabets1.sort((a, b) => a.localeCompare(b));
// console.log(reverseLettersII);

let addUp = reverseLettersII.concat(reverseLetters);
// console.log(addUp);

console.log(addUp.reverse());

let recipients = "Jerry, Uyai, Bright, Derric, Francis";

let messages = recipients.split(", ", 2);
for (each = 0; each < messages.length; each++) {
  //   console.log(`This message is for ${each}`);
}
// messageOffice.split(", ").forEach(item => item({
//     console.log(`A message to you ${}`)
// }))

let flipper = "odugnowkO noediG";

function makeNormal() {
  return flipper.split("").reverse("").join(" ");
}

// console.log(makeNormal())

let arrCalc = [-1, -2, 3, 4, 5, 0, 8, 9, -58, -100];

negativeNums = arrCalc.filter((item) => item < 0);
// console.log(negativeNums);
sumNeg = negativeNums.reduce((accumulator, value) => accumulator + value, 0);
// console.log(sumNeg)

posiTives = arrCalc.filter((item) => item >= 0);

posiTives.map(mulTiply);

function mulTiply(item) {
  return item * 2;
}

// for(element=0; element<posiTives.length; element++){
//    console.log(posiTives[element] *2);
// }

let film = "haroB fo \n esuoH";
function rearrange() {
  return film.split("").reverse().join("");
}

// console.log(rearrange());

// film.isArray([]);
// console.log(film);

function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("border-left-width"));

function camelCase(item) {
  return item
    .split("_")
    .map((item, index) =>
      index === 0 ? item : item[0].toLowerCase() + item.slice(1)
    )
    .join("");
}

// Write a function filterRange(arr, a, b) that gets
//  an array arr, looks for elements with values higher
// or equal to a and lower or equal to b and return a result as an array

let arr = [5, 3, 8, 1];
// function filterRange(){
//     let newArray = arr.filter((item, a, b) => item>=a? a: item<=b? b:a );
//     return newArray;
// }
// // console.log(filterRange(5,0));

function filterRange(arr, a, b) {
  let newArray = [];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] <= b && arr[i] >= a) {
      newArray.push(i);
    }
  }
  return newArray.sort((a, b) => b - a);
}

// console.log(filterRange(arr, 1, 4));

/*
Write a function filterRangeInPlace(arr, a, b) that gets 
an array arr and removes from it all values except those
that are between a and b. The test is: a ≤ arr[i] ≤ b.
*/

let arr2 = [4, 1, 5, 6, 0, 8];

function filterRangeInPlace(arr2, a, b) {
  arr2 = arr2.filter((item)=>item <= b && item >= a)
//   for (i = 0; i < arr2.length; i++) {
//     if (!(a >= arr2[i] && b <= arr2[i])) {
//       // arr2.shift().pop();
//       const itemIndex = arr2.indexOf(arr2[i]);
//       arr2.splice(itemIndex, 1);
//     }
//   }
  //  return arr2;
}
filterRangeInPlace(arr2, 1, 6);
// console.log(arr2);
// console.log(filterRangeInPlace(arr2, 1,6));

// console.log(filterRangeInPlace(arr2, 5, 8));
