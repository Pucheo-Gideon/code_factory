var arrOfObj = [
  {
    name: "eve",
  },
  {
    name: "john",
  },
  {
    name: "jane",
  },
];

var result = arrOfObj.map(function (el) {
  var o = Object.assign({}, el);
  o.isActive = true;
  return o;
});

// console.log(arrOfObj);
// console.log(result);

const addIsDone  = arrOfObj.map(data => ({...data, isDone: false}))

console.log(addIsDone)

const newResult = []

for(let i=0; i<=addIsDone.length; i++){
  for(let b=0; b<addIsDone[i].length; b++ ){
      newResult.push(`${[b]}.${addIsDone[b]}`);
  }
}

console.log(newResult)


