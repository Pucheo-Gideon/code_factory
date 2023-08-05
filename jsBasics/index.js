let name = 'Gideon';
// console.log(name);

/*Rules for naming variables
-   They mustn't be reserved keywords
-   They should be meaningful
-   They cannot start with a number
-   They cannot have space or hyphen
-   Use carmel-notations for naming variables that are a combination
    of two words
-   They are case-sensitive
   */


let departments = ['Computer Science', 'Architecture', 'Civil Engineering', 'SLC'];

departments.forEach(function(n, index){
    // console.log(index + " - " + n);
})


let cars = ['Mercedez_Benz', 'Toyota Corola', 'Kia', 'Nissan', 'Chevrolet', 'Sequoia'];

cars.forEach(function(n, index){
    // console.log(index, + " - " + n);
})


/* Arithmetic operations in JavaScript
- + * / %
*/

var addition = 2 + 2;
var subtraction = 2 - 94;
var division = 10/5;
var multiplication = 3 * 8;
var remainder = 5%2;

// console.log (addition)
// console.log (subtraction)
// console.log (division)
// console.log (remainder)

// FUNCTIONS
/*
A set or a block of statement that allows me to perform a task or calculate a value
*/


    //function/method body
    // Define Logic
    // 3+2
    // console/log (10,20)
    
    //End of function/method body

    //  Please don't blame my too many fucntions codes,
    //  it a newbie trying grapple with a new concept

function addNumbers (n1,n2) {
    let addition = n1 + n2;
    return addition;
   }

  let result1 = (10, 10);
  let  result2 = (1, 9);

//   console.log(result1);
//   console.log(result2);

// let luigisdebt = 105
// let luigisdebt = luigisdebt - 35
// console.log (balance);

// let a = ' jack', b = 'hello'
// console.log (b + a);

// To get all even number numbers within the range of 1000
let number = 0;
    while (number < 1000){
        number = number + 2
    // console.log (number)
   
};

function getNumbers (a, v, b){
    let numbers = (a+v*b);
    // console.log(numbers)
} ;

let firstN = getNumbers (1, 2,)
let secondN = getNumbers (12, -2, 7)
let thirdN = getNumbers ("Mary's own score is ", 4, 5)
 

function getfractions (a, b, c, d){
let listOfFraactions = (a/b*c+d)
    // console.log(listOfFraactions)
   
};

let results = getfractions (12, 13, 12, 1)
let calcIncome = results * 12000;

function sayHello(message){
    let alert = ('Hello there! and ')
    // console.log(alert)
}

sayHello = ('Good day every one')
sayHello = ('how many of us can recap what we learn the last')

// LOOPING

// Traditional looping in JavaScript
for (var i = 0; i <= 10; i++){
    // console.log(i)
}

let perSon = [
    {name: 'Gideon', Age: 22},
    {name: 'Mark', Age: 12}
];

for (var i = 0; i < perSon.length; i++ ){
    // console.log(perSon[i].name);
    // console.log(perSon[i].Age);
    // console.log("------------")
}

let nblStars =['Breklein', 'Falpins', 'Jugsix', 'Flaiems', 
            'Cooper', 'Grandle', 'Phellix', 'Plustre', 'Zivchensky', 'Prompzy'];

for (var I= 0;I < nblStars.length; I++ ){
// console.log(nblStars[I]);
}

//Types of Loops
// 1. While Loops

var numbs = 0;

while(numbs < 5){
    // console.log(numbs);
    numbs = numbs + 1
}

// 2. do while

// var i = 0
// do {
// i = i+1;
// console.log(i)
// }while(i <5)


var numbs = 0;

while(numbs < 5){
    // console.log(numbs);
    numbs +=1
}

var count =10;
while (count <1100){
    // console.log(count)
    count +=10
}

var count =10;
do {
    count +=3*2/2
    //console.log(count)
} while (count <100)


/*Break & Continue
Break: allows you to break out of the loop before it finishes
Continue: allows your code to go back 
*/


var count =10;
while (count <1100){
    // console.log(count)
    count +=10
}

var count =10;
while (count <100){
    //  console.log(count);
    if (count ==50){
        break;
    } 
    count = count + 2
}

var count =10;
while (count <20){
    count++
     
    if (count <20){
        continue;
    } 
    // console.log(count)
}

/* IF STATEMENT
The if statement allows the executing of a block of code if the specified condition is true
*/

// var man = {
//     name1: "Solomon",
//     age: 19
// }
// if(man.age <19){
// console.log(man.name1 +" is an adult" );
// }else {
//     console.log(man.name1 +" is yet to be an adult ")
// }

var male = {
    name1: "Armanda",
    age: 17
}
if(male.age >=18){
    // console.log(male.name1 +" is an adult" );
}   else if (male.age >=16 ){
//   console.log(name1 +" is about to be an adult")
}    else  {
    // console.log(male.name1 +" is yet to be an adult ")
}

// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION

// let real = 12
// real *= 15
// console.log(real)

// let a = 15
// a *=6
// console.log(a)

// let b = -7
// b *=10
// console.log(b)

// let c = 9
// c *=10
// console.log(c)



// function gideonChildrenAge(a, p){
//     let children = p-a;
//     // console.log(children)
//     children +=5
// };
    
// gideonChildrenAge (12, 20)
// gideonChildrenAge (15, 25)
// gideonChildrenAge (30, 45)

// ESCAPING A DOUBLE QUOTED STRING

// let escapeString = "I'm just one of those kind \"fellas\" you should look forward to emulating.";
// console.log(escapeString)

// let warnIng = "To grow up and catch up here you gotta learn real \"fast\"."
// console.log(warnIng);

// let health = "To be in a state of \"Comatose\", isn't something you should wish even your worst enemies."
// console.log(health)

// let love = "I \"Love\" You."
// console.log(love);

// let mystring = "I'm a \"double quoted\" string inside \"double quotes\"."
// console.log(mystring);

// let goodString = 'Jay asked Fin, \"Hey, let\'s go on an adventure\".'
// console.log(goodString)

// let conversation = 'Fin exclaimed at George \"Algebraic!!\"'
// console.log(conversation)

// let badString = 'Finn responds, \"Let\'s go\"'
// console.log(badString)

// let out = "This is the start." + " This is the end."
// console.log(out)
// let out1 = 'I\'m a pro-terrorist!. I \"bring, breed and birth\" nothing than terror!'
// console.log(out1)

// let longStr = 'This is the first sentence.';
// longStr +=" This the second sentence."
// console.log(longStr)



// let hisFirstName = "John";
// let hisSurnameName = "Shedrach";
// let fullName = hisFirstName + hisSurnameName;
// if (hisName = "John")
// {
//     console.log("Hello "+hisName+"");

// }else if (hisName != John){
//     // console.log("Hello! UNKNOWN SURFER")
// }  

// {
//   console.log(fullName.length);
// }

// var schoolStudents =[{fN: "Jake", sN: "Brooklyn", sex: "M", Age: 45}, {fN: "Van-Dyke", sN: "Vander Vum", sex: "M",  Age: 39}, 
// {fN: "Margeret", sN: "Follough", sex: "F", Age: 35}];

// schoolStudents.forEach(function(n, index){
//     // console.log(index +" - "+n)
// });
   

//  var persons = {title: "Armanda", age: 18 }

// switch (true){
//     case (persons.age == 17):
//     console.log(persons.title + " is about to be an adult");
//     break;
//     case (persons.age >= 18):
//     console.log(persons.title + " is an adult");
//     break;
//     default:
//     console.log(persons.title + " is not an adult");
// }

// switch (new Date ().getDate()) {
//     case 16:
//         console.log("Saturday")
//         break;
//     default:
//         console.log("I don't know")
//         break;
// }

// console.log("Comparison Operators!")
// console.log(10 == 10);
// console.log(10 == 20 );
// console.log(10 >= 20 );
// console.log(10 != 11 );
// console.log(10 < 10 );
// console.log("Alice" === "Alice" );
// console.log("Alice" !== "Effiong" );

// console.log("Logical Operators!")
// console.log(10 == 10 && 4 == 5)
// console.log(10 == 10 || 4 == 5)
// console.log(!(10 == 10 && 4 == 4))
// console.log(!(10 == 10))
// console.log(!(10 == 20))

// if (!(10 == 20)) {
//     console.log ("if statement was executed");
// }



// console.log("                                                       ");
// console.log("----------------------------");
// console.log("Equality with type Coercion");

// /* type coercion is simply the conversion of type from one form to another */

// console.log (typeof 1 +" "+ typeof "1");
// console.log (0 == false);

// console.log(typeof "0" +" "+ typeof false);
// console.log("0" == false);

// console.log(typeof 0 +" "+ typeof false);
// console.log(1 == "1");

// console.log("                                                       ");
// console.log("----------------------------");
// console.log("Equality without type Coercion and 3 Equals Sign");
// console.log("                                                       ");

// console.log (typeof 1 +" "+ typeof "1");
// console.log (0 === false);

// console.log(typeof "0" +" "+ typeof false);
// console.log("0" === false);

// console.log(typeof 0 +" "+ typeof false);
// console.log(1 === "1");

// Map || Filter || Reduce function 

// console.log("Map || Filter || Reduce function ");
// console.log("                                           ");

// console.log("Map: function transforms transforms value")
//  var map = [1, 2, 3, 4, 5].map(function(n){
//      return n + 2;
//  })

//  console.log([].map);

//  console.log("                                           ");
//  console.log("Filter: Filters and returns specified values from the array")
//  var filter = [1, 2, 3, 4, 5].filter(function(n){
//      return n % 3;
//  })

// //  console.log([].filter);

//  console.log("                                           ");
//  console.log("Reduce: Filters and returns specified values from the array")
//  var reduce = [1, 2, 3, 4, 5].reduce(function(accumulator, current){
//      return accumulator + current;
//      })
     
//  console.log(reduce);

//  var i;

//  for(i =0; i < 10; i++){
//      console.log(i);
//  }

// const church = "Wesley Chapel"
// const venue = "Vally Road"
// const time = "10:00am"

// console.log(`ChurchName: ${church}, Venue: ${venue}, Time: ${time}`);


// // console.log(Churches);

// // --------------------------------------------------------------------------- I will be back!

// const arrayOne = ['Marian', 'Anna', 'Alex'];
// const arrayTwo = ['Said', 'Jerry', 'Aisha'];

// const concatArray = [...arrayOne, ...arrayTwo];

// concatArray.forEach(function(name){
//     console.log(name);
// });

// const namez = 'Marian';
// const nameToArray = [...name];
// nameToArray.forEach(function (letter) {
//     console.log(letter);
// });

// const addDigit = function(n1, n2, n3) {
//     return n1 + n2 +  n3;
// }

// const numbers = [1,2, 19];

// const adDition = addDigit(...numbers)

// console.log(addition);


// const address = {
  
//     country: "USA",
//     PostCode: "LA44"
// };

// const names = {
//     firstName: "PhiLypps",
//     Suranme: 'Deola',
// }

//  concatBind = {...address, ...names};

//  console.log(JSON.stringify(concatBind, null, 2));

//  const hey = () => {
//      const es6 = 'ES6';
//      return `hello ${es6}`
//  }

//  const powers = [1, 2, 3, 4, 5]. map((number, index) => Math.pow(number, index));

//      const add = (n1, n2) => n1 + n2;
     

//      const milesTokm = miles=> miles = 1.60934;

//      console.log(hey());
//      console.log(powers);
//      console.log(add(200,000));
//      console.log(milesTokm(100));


console.log("LEXICAL THIS")

const person ={
    name: "Alex",
    rides: ['Ferrari', 'Lambo'],
    toString: function() {
        const that = this;
        // console.log (`${this.name} has ${this.rides}`);
        this.rides.forEach((rides) => {
        });
    }
}

person.toString();

const pricePopName = "PRICE";

const calculator = (nAmes, price) =>{
    return {
        nAmes,
        add(n1, n2) {
            return n1 + n2;

        },
        [pricePopName.toLowerCase()] : price
    }
}

const calc = calculator('Casio', 19.99);

// console.log(calc.nAmes);
// console.log(calc.add(20,20));
// console.log(calc.price);


console.log("ARRAY DESTRUCTURING");

const names = ['anna','Mariam', 'Joe', 'Mark', 'Matt'];

// const anna = names [0];
// const mariam = names [1];
// const joe = names [2];

const [anna, matt, joe,...restOfNames] = names;

// console.log(`${anna} ${joe}`);
// console.log(restOfNames.length)


console.log("OBJECT DESTRUCTURING")
console.log("                    ")

const getUser = () => {
    return {
        nams: 'John',
        surname: 'Doe',
        gender: 'Male',
        address: {
            country: 'United States',
            city: 'California',
            postCode: 'CA',
            fullAddress:{
                doorNumber: 22,
                street: 'LA st'
            }
        },
        age: 29
    }
};

const user = getUser ();

// const naims = user.nams;
// const age = user.age;
// const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const { nams: theName, age: theAge, address : {country : theCountry }}  = user;
const { address : { fullAddress: { doorNumber : numbre}}} = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);
// console.log(numbre);

const calculatePay = (yearSalary, bonus ={ 
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

// console.log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 6000}));

class Animal {
    constructor(name, age) {
        console.log(`${name} is an animal and was created`)
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep (){
        console.log(`${this.name} is sleeping`)
    }
    wakeUp (){
        console.log(`${this.name} is waking up`)
    }
    logAge() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed;
    }
    logBreed(){
        console.log(`${this.name} is a ${this.breed}`);
    }
    logAgeFromDog(){
        super.logAge();
    }
}
class Cat extends Animal{
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed;
    }

    logAgeFromCat(){
        super.logAge();
    }
}

const mike = new Dog('Mike', 4, 'Bulldog');
mike.logBreed();
mike.logAgeFromDog();

const Josh = new Cat('Josh', 1);
// Josh.logAgeF0romCat();
// Josh.eat();
// Josh.sleep();
// Josh.wakeUp();
// Josh.logAge();

// const bobby = new Animal("bobby", 2);
// bobby.eat()
// bobby.sleep()
// bobby.wakeUp()
// bobby.logAge()

// console.log("---------------------")

// const marshall = new Animal("marshall", 3);
// marshall.eat()
// marshall.sleep()
// marshall.wakeUp
// marshall.logAge()

const getNumb = function(numbers) {
  for(var i =0; i < numbers.length; i++){
     yield numbers[i]
  }
}
const getNumbersGen = getNumb([1,2,3,4,5]);

const interval = setInterval(() => {
    const next = getNumbersGen.next();
    if(next.done) {
        console.log('this generator is done');
        clearInterval(interval);
    }else{
    const numbers = next.value;
    console.log(numbers);
}

}, 1000)