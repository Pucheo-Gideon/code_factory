const myArray = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i)
  myArray.sort((a, b) => b - a);
}
// console.log(myArray)

let n = [];
let i = 1
do{
    n.push(i+=2)
    console.log(n)

}while(n<10)


