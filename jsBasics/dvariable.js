
// There two categories of Datatypes in JavaScript
// Primitive and Reference Variable 
//Reference Variable: Objects, Arrays,

/* An object is representation of an entity, e.g a
person with properties such as names, age, height, 
complexion, BG, etc. Declaring a variable using the
reference type objects makes our work more neat.
*/

let studentNames = {
    Name: 'Gideon',
    Gender: 'Male', 
    Complexion: 'Dark',
    City:       'Uyo'
}

// console.log(studentNames)

// let newname = (studentNames.Name = 'Felix')
// console.log(newname)

let studentDetails = [
   { firstName: 'Ben',
    lastName:  'Gregory',
    sex:'male',
    county:'West Sulxins'
   },

    {firstName: 'Danielle',
    lastName:   'Pete',
    sex:        'Female',
    county:     'South Phoenix'
    },

{   firstName:  'Michael',
    lastName:   'Phelps',
    sex:        'male',
    county:     'Greyhouse'
}
]

// console.log[studentDetails.firstName];


let name ='Gregory';
let age = undefined;
let height = 5.6;
let gender = undefined;
let complexion = 'dark';

// console.log(name, age, height, gender, complexion)

let human = {
    name: 'Glen Johnson',
    gender: 'Male',
    occupation: 'Athlete',
    club: 'Liverpool'
};

// console.log(human);


// Changing a an object key value using the dot.notation

human.name = 'Jerry';
// console.log(human);

// Changing a an object key value using bracket notation

human[name] = 'Axel';
// console.log(human[name]);

// let selectedcolours = ['red', 'blue', 'black', 'dove-white', 'fish-gray', 'orange-green'];
// selectedcolours[3,8] = 'Purple', 'chocoloate-brown';
// console.log(selectedcolours.length);

// console.log(typeof selectedcolours);

// Performing a task via a function: to display a greeting
function greet(name)
 {
    // console.log ('Hello ' + name)
}

greet('Gideon')

// Performing calculations

function square(number){
    return number*number
}
// console.log(square(2))


// Declaring an Objects in a different courtesy @ amigoscode tutorials

var person = {
    name: 'Maria Jones',
    age: 21,
    hasDriverLicence: true,
    dateOfBirth: '01/01,2000',
    address: {
        firstLine: 123,
        postalCode: 'SE123',
        country: 'England'

    }
};

  console.log(person.address);

// syntax to return a declared object as an array
// console.log(Object.values(objectName));

console.log(Object.values(person.address));

// Working on Arrays
/* It's best practice to keep the datatype within an array the same. You are free to also 
declare an objects and other variables of different datatypes. However, it's just to nice 
to stick to the best practice.*/

var names = ['Jake', 'Jackson', 'Jacobson', 'Jayden', 'Jone'];
console.log(names[3]);

/*A loop is a block of code that allows you to step through an array elements by elements*/

//1
for (var n of names){
   console.log(n)
};

//2

names.forEach(function(n, index){
    console.log(index + " - " + n);
});