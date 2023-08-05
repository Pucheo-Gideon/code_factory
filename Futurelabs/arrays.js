// let arr = ["I", "Groom", "Them", "And", "They Studied", "Javascript", "Right Here"];

// arr.splice(0, 4, "They", "are", "that good", "because")

// for (i =0; i<=arr.length; i++){
//     console.log(arr[i])
// }

// arr.map((item, list)=>{

//     console.log(list +'.\t'+ item)
// })

// arr.forEach((item, listing) => {
//     return item, listing;
// });
// console.log(`${item +'.' +listing}`)

// console.log(arrResult)

// SPLICE 

let scores = [ 56, 78, 89, 64, 68, 12,]

scores.splice(4, 6, 56, 56);
// console.log(scores)

let remove = scores.splice(0,2)

// console.log(remove)

scores.splice(3, 0, 45, 45, 35)
// console.log(scores)

scores.splice(-1, 0, 87, 45);
// console.log(scores)

scores.forEach((items, lists)=>{
    // console.log(lists +'.\t'+ items, )
})


// SLICE 

let arrSlice = ['a', 'b', 'c', 'd', 'e', 'd', 'f']

// console.log(arrSlice)
arrSlice.slice(1, 3);

// console.log(arrSlice)


// CONCATENATION FUCNTION 

let arrConc = [1, 2];
newArr = arrConc.concat([3,4]);
// create an array from: arr and [3,4]
newArr2 = newArr.concat([34, 45, 46, 90])

// console.log(newArr2)

arrOf = ["Bilboa", "Gandalf", "Nazgul"]. forEach((item, index, array)=>{
    // console.log(`${index} is at index ${item} in ${array}`)
})

// let arr= [1, 0, false];
// console.log(arr.indexOf(0));

// IndexOF

let indeX = ["Apple", "Avocado", "Bananna", "Pear", "Tantarin"];
// console.log (indeX.lastIndexOf("Bananna"));

let num = [ 12, 'what do you want', 'have you found her', NaN]
// console.log(num.indexOf(NaN))
// console.log(num.indexOf('what do you want'))

// FIND, findIndex/ findLastIndex


// let num2 = num.find(item => {
//     if (item === 12);
//     return true;
// });

// console.log(num2)

let users = [
    {id: 1, name:"Dave"},
    {id: 2, name: "Pontius"},
    {id: 3, name: "Magdalene"},
    {id: 3, name: "Maggoh"}
];

let user = users.findIndex(item => item.name == "Maggoh");
let someUsers = users.filter(item => item.id <3);
// console.log(someUsers);
    
// console.log(user);

// MAP

let car =[
    {brand: 'Mercedes Benz', Engine: '112eE55', color: 'Black'},
    {brand: 'Toyota', Engine: 'E13r4', color: 'Tint'},
    {brand: 'Mitsubishi', Engine: 'ee4567', color: 'beef brown'}
]
let carLength = car.map(index => car.length);
// console.log(carLength);
// let searchCar = car.find(index=> index.brand == "Toyota");

// console.log(searchCar);

// let filterCar = car.filter(item => item.brand <2);
// console.log(filterCar.length);

// let lengths = ["Bilboa, Gandalf", 'Nazgul'].map(item => item.length);
// console.log(lengths);

// SORT 

// Ask for explanation from tutor
let sortNum = [ 4, 1, 16, 12, 5, 7]

sortNum.sort(function(a,b){
    return a-b;
})
// sortNum.sort((a,b)=>{
//     return a-b;
// })

console.log(sortNum);

// Number II - Example on Sort
let number5 = [1003, 3498, 4839, 45, 567, 24, 56]

// number5.sort((a,b) => a-b);
number5.sort((a,b) => {
    return a -b;
})

// console.log(number5)

// Using The localCompare

let countries = ['Osterreich', 'Andorra', 'Vietnam'];

// console.log(countries.sort((a,b) => a.localeCompare(b)));

// REVERSE

number5.reverse();
// console.log(number5);


// SPLIT AND JOIN

let initials = "Billow, Gandalf, Nazgul";

initialsName = initials.split(', ',);

// console.log(initialsName)
for (let name of initialsName){
    console.log(`A message to ${initials}.`);
}

let initials2 = "Bilboa, Goxxam, Chikinu, Avvallow".split((''));
console.log(initials2);


let men = 'short, tall, slim, chubby, average'

let message = men.split(',', 2);
for(let name of message){
    console.log(`A message to the ${men} students`);
}



console.log(men.split(('')));


// JOIN 

let joinInitials = initials2.join(';');
console.log(joinInitials)

let seasons = ['autumn', 'spring', 'summer', 'winter']. join(';')
console.log(seasons);

//  REDUCE/ reduceRight

let arrNumbs  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arrNumbs.reduce((sum, current) => sum + current, 0);

// result.reverse()
console.log(result);
