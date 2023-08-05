// Array.prototype.attitude = "Cool";
// let newArray = new Array();
// console.log(`This is a new ` + newArray.attitude)

// let fish = new Array();
// fish.attitude = "wide-eye";
// console.log(`This fish as a ` + fish.attitude);

// Array.prototype.schoolType = "'Average!'";
// let schools = new Array();
// console.log(`This school you have chosen is just about an ${schools.schoolType}`)

// let department = new Array();
// department.schoolType = "Computer Science";
// console.log(`This block is ${department.schoolType} block`);


Array.prototype.names = "Serena";
let iniTials = new Array();
// console.log(`This is lady, ${iniTials.names} is a slam dunkin' colossus of a woman!`);

let surname = new Array();
surname.names = " Williams";
// console.log(`This slam dunkin' behemoth of a woman called ${iniTials.names.concat(surname.names)}`);

Array.prototype.houses = "Duplex";
let houseTypes = new Array();
// console.log(houseTypes.houses)

let added = new Array();
added.houses = ", SkyScrapper";
// console.log("This are my two dream edifices: a " + houseTypes.houses.concat(added.houses));
// let ageImpact = [20, 21, 22, 23, 25, 26, 27, 28, 29, 30, ""].map((item)=> item>=20 && item<=29? 
// console.log("Keep flourishing and Impacting"):console.log("You need to get serious with your life"))

Array.prototype.old = "Abram";
let older = new Array();
// console.log('This is in the pass now ' + older.old);

let newer = new Array()
newer.old = "Abraham"
// console.log(`${older.old} was his initial name. ${newer.old} his is current initials.`)

let n = new Array(1, 2, 4, 5, "How are you , girl?")
let callN = n.join(': ');
// console.log(callN);

let removed = n.slice(2,4)
// console.log(`Removed are: `+ removed.join(' : '));

n.splice(2, 0, 2, 5, "This girl is La hot!")

// console.log(n)

deleted = n.splice(5,4);
// console.log(deleted);
// console.log(n);

let fruit = ["Orange", "Banana", "Mango", "Pear"];
// console.log(fruit)

// let list = [4];
// for(let i=0; i<4; i++){
//     let answer;
//     list[i] = prompt('Enter your names', "");
//    if(list[i]==4){
//     answer.push(list)
//     alert(answer);
// }}

// alert(list);
// console.log(list[i]);

// An array of ten even numbers,
// let even_numb = [10];
// let index = 0;
// for(let count=0; count<20; count+=2){
    // even_numb[index] = count+2;
    // even_numb.push(count + 2);
    // index++;
// }

// console.log(even_numb);

let s_list = [4];
s_list[0] = "Thomas";
s_list[1] = "Roger";
s_list[2] = "Amber";
s_list[3] = "Jennifer";
for(let i=0; i<4; i +=2){
    // console.log(s_list[i])
}

let = [1, 2, 3, 4, 5,]


/* Write a program that returns an array list of odd numbers between 0 and 50
 */
let oddNum = [];
let getOdd = 0;
for(count=1; count<50-1; count+=2){
    oddNum[getOdd] = count + 2;
    getOdd +=1;
}

// console.log(oddNum);

/*Write a program that returns numbers divisible by 5, b/w 0 and 50 */

let divBy5 = [];
let five = 0;
for(loop=1; loop<50; loop++){
    divBy5[five] = loop +=4;
    five++;
}

for(let i=0; i<divBy5.length; i++){
    // console.log(divBy5[i]);
}
// console.log(divBy5.length);

let computerParts = ["MONITOR","MOTHERBOARD","CHIP","HARD"];
computerParts.push("CD-DRIVE", "POWER");

for(let parts=0; parts<computerParts.length; parts++){
    console.log(computerParts[parts]);
}

console.log(computerParts.sort());

let studTraits = new Array();
studTraits["Handsome"] = "Jerry";
studTraits["Beautiful"] = "Joy";
studTraits["Dark"] = "Zenas";
studTraits["Grey"] = "Grandpa";

console.log(studTraits["Beautiful"]);

