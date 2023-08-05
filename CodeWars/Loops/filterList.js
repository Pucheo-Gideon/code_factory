function filter_list(l) {
  let filteredList = []
     for (i=0; i<l.length; i++){
         if ( typeof (l[i]) == 'number' && typeof l[i] !== 'string'){
           filteredList.push(l[i]);
         }
      }
      return filteredList
}

console.log(filter_list([12, 14, "a", "b", '123', '1', 'gshdfhjs', -9, -1, '-1', '0', 14, 0]));

let select = (filter)=> {
  filter.filter(item => {
    return item > -1
  })
}

// console.log(select([12, 14, 'a','b',14]))


let mixed = [12, 'a', '56', 56, 'das', 89, 0]


// VARIATION I
let newarray = mixed.filter(item => {
    return item > -1
})

console.log(newarray)

function selected(filtered){
    filtered.filter(item => {
        return item > -1
    })
}

console.log(selected([12, "a", "56", 56, "das", 89, 0]));

// VARIATION II
function filter_lists(l) {
  return l.filter(Number.isInteger);
}

console.log(filter_lists([12, 14, "a", "b", '123', '1', 'gshdfhjs', -9, -1, '-1', '0', 14, 0]));
// VARIATION


function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}
console.log(filter_list([12, 14, "a", "b", '123', '1', 'gshdfhjs', -9, -1, '-1', '0', 14, 0]));

// VARIATIONS
function filt(f){
   return f.filter(item=> {
        return typeof item === 'number' 
    })
}

console.log(filt([12, 14, "a", "b", '123', '1', 'gshdfhjs', -9, -1, '-1', '0', 14, 0]));

// VARIATION
function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}
