const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};


function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    value !== "" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  return records;
}

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// Setup
const myArray = [];
let i = 1
// Only change code below this line
// let i = 0
// while (i<6){
//   myArray.unshift(i)
//   i++;
// }


// for(i=0; i<5; i++){
//   myArray.unshift(i)
// }

while(i<11){
  myArray.unshift(i)
  i += 2
}
// console.log(myArray)

let arrays = [[23, 5], [1, 4, 5], [90, 5], [12,7]]
let answer = []
for(a=0; a<arrays.length; a++){
  for(b=0; b<arrays[a].length; b++){
    answer.push(arrays[a][b])
  }
}


