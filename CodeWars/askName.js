// let confirm = confirm("You gotta be 18+ to view this content!")
// let nickName = prompt("What Your Name?", "Denis")
// alert(`Your name is ${nickName}`)

// let v = prompt("First number?", 1);
// let h = prompt("Second number?", 2);

// alert(Number(v) + Number(h)); // 12

//OR

// alert(+v + +h); // 12

// TYPE CONVERSION
// let value = "1233"
// let number = Number(value)
// console.log(typeof value);

// console.log("22" + 1)
// console.log("2" + 2 + 1)
// console.log(2 + 2 + '1')
// console.log(4 + 4 + '-1')
// console.log("4" - 4 + '1')

// let counter = 4
// console.log(2* counter++ );

// let a = 1, b = 1;

// let c = ++a; // answer ==> 2
// let d = b++; // answer ==> 1

// console.log(c)

// What's the value of a and x after running the code below

let a = 2;

let x = 1 + (a *= 2);

//  a = 4, x = 5

// console.log(5)

"" + 1 + 0; // Answer ==> 10
"" - 1 + 0; // Answer ==> -10
true + false; // Answer ==> 1
6 / "3"; // Answer ==> 2
"2" * "3"; // Answer ==> 6
4 + 5 + "px"; // Answer ==> 9px
"$" + 4 + 5; // Answer ==> $45
"4" - 2; // Answer ==> 2
"4px" - 2; // Answer ==> NaN
"  -9  " + 5; // - 9 5
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // Nan
" \t \n" - 2; // a tap, next line, then -2

// console.log( " \n \n" - 2)

// let user   = {
//     name: "Bassey",
//     age: 45,
// }

// key = "Likes Bread"

// user[key] = true
// console.log(user)

let user = {
  name: "Bassey",
  age: 45,
  // [fruit]: 5
};

function makeUser(name, age) {
  return {
    name,
    name,
    age: age,
  };
}

let client = makeUser("Josh", 45);
console.log(client.name);

let objectRes = {
  for: 1,
  let: 3,
  function: 4,
  "figuratively good": 5,
};

userAvailable = {
  country: undefined,
};

// console.log("country" in userAvailable);

// Returns from bottom up: descending order
// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// for (let code in codes) {
//   console.log(code);
// }

//  Return in ordered format. ascending order
// let dials = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA",
// };

// for (let dialer in dials) {
//   console.log(dialer);
// }

/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/

// let userr = {
//     name: "John",
//     surname: "Smith"
// }

// delete userr.name
// console.log(userr)

/*
Write the function isEmpty(obj) which returns 
true if the object has no properties, false otherwise
*/

let schedule = {};

// isEmpty(schedule); // true

// schedule["8:30"] = "get up";

// isEmpty(schedule); // false

// function isEmpty(obj) {
//   let schedule = {};

//   if (schedule.noProperty === undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty("grey"));
// console.log(isEmpty(schedule.hasNoProperty === undefined))

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

for(let props in menu){
    console.log(menu[props])
}


function multiplyNumeric(menu) {
  for (let props in menu) {
    if (typeof menu[props] === "number") {
    menu[props] *=2;
    }
  }
  return menu
}


// console.log(multiplyNumeric(menu))
/*
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum.
Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/ 


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let total = salaries.John + salaries.Ann + salaries.Pete 

    let sum = 0
    for(let salary in salaries){
        sum += salary[salaries];
    }
     

console.log(sum)

//  Objects don't duplicate: as in copying both the variable and the object into another variable.
//  During copying of an object into another variable, it is actually the address of that object that
// is referenced. Example below; 
let used = {
    "How are you": true
}

let greeting = used;

greeting["How are you"] = false;

console.log(greeting)

// Object Cloning: Copying object from one variable to the next

let newUsed =  {}

for(let key in used){
    newUsed[key] = used[key]
}

console.log(newUsed)

 let view1 = {permissions: true}
 let view2 = {permission: false}

let views = {name: "Gordon"}

let clone = Object.assign({}, views, view1, view2)

console.log(clone);


let data = {
    name: "Offong",
    age: 30,
    size: {
        weight: 40,
        height: "5'nch"
    }
}

data.sayHi = function(){
    console.log("Hello")
}

data.sayHi()

let cloneData = Object.assign({}, data)

// console.log(data.size === cloneData.size)

cloneData.size.height = "6'7inch"


// let userData = structuredClone(data);

userData = null



let doSomething = {
    name: "Derrick",
    post: "Prefect",
    duty: "Direct"
}

function report (){
    console.log(this.name)
}

doSomething.Func = report

doSomething.Func()




