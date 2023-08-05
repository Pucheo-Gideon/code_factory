//JAVASCRIPT OBJECT

// 1. Creating Objects
// let emptyObj = {

// }
// console.log(emptyObj);

let person = {
  firstname: "Timo Werner",
};
//  console.log(person)

const user = {
  firstname: "sunshine",
  lastname: "zuri",
  age: 25,
  getName: function (first, lastname) {
    return this.firstname + " " + this.lastname;
  },
};
// 2. Accessing Objects

// TWO WAYS OF ACCESSING OBJECTS
//a. Using Dot  Notation
console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);

//Using Bracket notation
console.log(user["lastname"]);
user.firstname = "Ekweremadu";
console.log(user);
// Example II
const car = {
  name: "Peugeot 379",
  colour: "coffe-brown",
  model: "classic 1995",
  engineNo: "c1212K-3478",
  getImpDetail: function (name, model, engineNo) {
    return this.name + " " + this.model + " " + this.engineNo;
  },
};

console.log(car);
console.log(car.name);
console.log(car.colour);
console.log(car.engineNo);
console.log(car["model"]);

// 3. Modifying the value of a property

car.name = "Mazda 12pkx";
console.log(car.name);

// 4. Adding a new property to an property

car.isSold = true;
console.log(car);

// 5. Deleting a property in object

delete car.isSold;
console.log(car);

// 6. How to check if a property exist in the object

console.log("name" in car);
console.log("address" in car);

// 7. The "for ...in" loop

// for(let key in car){
//    console.log(key);
//    console.log(car[key])
// }

/*8. Example: Write a code to 
 sum all salaries and store in the variables sum*/

let salaries = {
  Akpan: 340,
  Gregory: 500,
  Anthoney: 1230,
};
let sum = 0;
for (let sal in salaries) {
  sum += salaries[sal];
}

console.log(sum);

// Example II

let debtOwed = {
  sampson: 1000,
  victor: 5000,
  phillips: 350,
};
let sumOwed = 0;
for (let owed in debtOwed) {
  sumOwed += debtOwed[owed];
}

console.log(sumOwed);

// Example III
let count = {
  bag1: 3450,
  bag2: 4589,
  bag3: 3456,
  bag4: 4536,
};


count.bag1 = 12346;


count.bag5=600

let totalCount = 0;
for (let total in count) {
  totalCount += count[total];
}
console.log(totalCount)


// Example IV

let collections ={
   service1: 23000,
   service2: 24000,
   service3: 25090,
   service4: 45345,
   service5: 45050,
   service6: 45456,
}

// delete collections.service6


collections.service20 = 73000;
console.log(collections);
let collectedSum = 0;
for (let col in collections){
   collectedSum += collections[col]
}

console.log(collectedSum)

// Example v

let tariffs = {
   tariff1:30000,
   tariff2: -600,
   tariff3: 7089,
   tariff: 5000,
}

tariffs.tariffs5 = 5000
tariffs.tariff6 = 60000
let sumTariffs = 0
   for (let sum in tariffs)
   sumTariffs += tariffs[sum]
console.log(sumTariffs)

console.log( 'tariff7' in tariffs)
console.log( 'tariff' in tariffs)