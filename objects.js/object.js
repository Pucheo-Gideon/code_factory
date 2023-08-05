let user = { 0: "Zenas", age: 15, country: "Nigeria", phone_No: 90485 };
for (key in user) {
  console.log(user[key]);
}

// console.log(user in user);

function makeUser(name, age) {
  return { names: name, age: age };
}

let aUser = makeUser("Gideon", 56);
// console.log(`name = ${aUser.names},  = ${aUser.age}`);
// console.log(user.name)

let codes = {
  1: "Zenas",
  2: "Jerry",
  5: "George",
  4: "Joshua",
  3: "Dickson",
};

// console.log(codes);

for (let code in codes) {
  console.log(`${code}. ${codes[code]}`);
  // console.log(codes[code])
}
console.log(`\n`);

// console.log(Math.trunc(Number("48.56") * "58.56"));

let det = { first: "Crowbow", second: "Delange" };

det.age = 27;

for (let details in det) {
  //   console.log(`${details}: ${det[details]}`);
}

let student = [
  { name: "Sir Manasseh", sex: "Male", Origin: "Ikot Ekpene" },
  { name: "Mendy", sex: "Male", Origin: "Oruk Anan" },
  { name: "Bright", sex: "Male", Origin: "Osisioma" },
  { name: "Grace", sex: "Male", Origin: "Ikot Abasi" },
];

for (let stud in student) {
  console.log(`Name: ${student[stud].name}\nSex: ${student[stud].sex} \n`);
}

let used = { name: "John", Surname: "Smith" };

used.Surname = "Pete";

delete used.name;
console.log(used);

let schedule = {name: "Mfonobong"};

function isEmpty() {
  console.log(user.name === undefined);
}

// console.log(isEmpty(""));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

totalSal = (salaries.John + salaries.Ann + salaries.Pete);
// console.log(totalSal);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};


// function multiplyNumeric({menu}){
//     for (let n in menu){
//         if(typeof menu[n] =='number'){
//             menu[key] *= 2;
//         }
//     }
// }

// console.log(multiplyNumeric());


// Not giving me what I want
function multiply({menu}){
    for(let key in menu){
        if (typeof menu[key] == 'number'){
            menu[key] *=2
        }
    }
}

console.log(multiply({menu}));

function isEmpty(schedule){
    for(let key in schedule){
        if(key in schedule){
            return true
        }
    }
    return false
}

console.log(isEmpty(schedule))


let that = {
    name: " Woow",
    age: 78,
    country: "Belgium"
}
let clone ={};

for (let t in that){
    clone[t] = that[t]
}

clone.name = "Jethro"
// console.log(clone);d

let admin = that;
admin.name = "Sugar"
// console.log(admin)

Object.assign= {user, clone, that}

// console.log(user);

let person = {name: "Kenis", age: 45, sex: "Male", State: "Akwa Ibom"}

let newPerson = {};
for(let key in person){
    newPerson[key] = person[key];
}

// console.log(newPerson)

let person2 = person;

person2.name = "Columbus";

// console.log(person2);

// Object.assign(person, name, State);

// console.log(details);

const felix = {Surname: "Kemi", hair: "Milky", complexion: "Body Colour"}

felix.Surname = "Donalds"
// console.log(felix);

let grey = {};
// grey = Object.assign(clone, person, person2);

// console.log(grey);

let defect = {
    name: "John",
    age: 25,
    
    others:{
      Surname: "Kwakwaso",
      Education: "B.Sc"  
    }
}

// console.log(defect.others.Education);

let clone2 = {}
for (let def in defect){
    clone2[def] = defect[def]
}
// let clone2 = Object.assign({}, defect);
// console.log(clone2)

console.log(defect.others === clone2.others);

clone2.name = "Zack";

// console.log(clone2);

console.log(Number(Math.trunc(("+45")*("45.678"))));

let name ={
    height: 45
}

let name2 = name.height;

for (let key in name){
    // console.log(`${key}: ${name[key]}`)
}

let dets ={
    name: "Gideon",
    Occupation: "Software Engineer",
    School: "AkwaPoly", 
    Laptop: "Dell Latitude",
    languages: "JavaScript, React Js, PHP, MySQL, Laravel"
}

console.log(dets[key])

for(let key in dets){
    console.log(`${key}: ${dets[key]}`);
}

function Multi(dets){
    let newDets ={};
    for(let key in dets){
        newDets[key] = det[key]
    }
}



person = null;
console.log(person);

let person3 ={
  name: "Frederick",
  age: 56
}

person3.sayHi = function(){
  console.log(`"Hello, Mr. ${this.name} How are you doing?"`);
}

person3.sayHi();


let staff = {
  name: "Denzel",
  age: 25,
  salary: "$1,567"
}

// let staff.salary = ()
staff.staffSalary = function(a){
  // staff.salary * a
  console.log(`Mr. ${this.name}'s annual salary is ${(String(Math.trunc(Number(this.salary))))*a}`);
}

staff.staffSalary(5);

used = null;
ad = null;
// console.log(used, staff)

let oz = {
  name: "Bernard",
  sayHi(){
    let arrow = ()=>
      console.log(this.name)
      arrow();
    
  }
}

oz.sayHi()

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let us = makeUser();

// console(us.ref.name);

let calculator = {
  
}