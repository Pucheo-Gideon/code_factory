function getMiddle(s) {
  // let totalLength = s.length
  let totalLength;
  if (s.length % 2 == 0) {
    totalLength = s.length / 2;
    length = 2;
  } else {
    totalLength = s.length / 2 - 1;
    length = 1;
  }
  return totalLength;
}

console.log(getMiddle("Hellon"));
// console.log(getMiddle("Gideon"))

function extractMiddle(str) {
  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

console.log(extractMiddle("handbanann"));

function mid(str) {
  let position;
  let length;
  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1
    console.log(position)
  } else {
    position= str.length / 2 - 1;
    length = 2
    console.log(position)
  }
  // return str.substring(position, position + length);
}

// mid("Jerrin")
// console.log(mid("jack"))

function extract(str){
  let position 
  let length

  if(str.length % 2 == 1){
    position = str.length / 2
    length = 1
  } else {
    position =str.length / 2-1
    length = 2
  }
  return str.substring(position, position + length)
}

// console.log(extract("juliet"))

function collectMid(str){
  let position
  let length
  if(str.length % 2 == 1){
    position = str.length / 2
    length =1
  }else{
    position = str.length / 2 -1
    length= 2
  }
  return str.substring(position, position + length)
}

// console.log(collectMid("Gladys"))


function median(str){
  let position
  let length
  if (str.length %2 ==1){
    position = str.length / 2
    length = 1
  } else {
    position = str.length / 2-1
    length = 2
  }
  return str.substring(position, position + length)
}

// console.log(median("ChachaCaChaCha"))

function med(str){
  let position
  let length

  if(str.length % 2 ===1){
    position = str.length / 2
    length = 1
  } else{
    position = str.length / 2 -1
    length = 2
  }
  return str.substring(position, position + length)
}

// console.log(med("Gr----"))



function midst(str){
  let index
  let length

  if(str.length%2 ==1){
    index = str.length /2
    length = 1
  } else{
    index = str.length /2 -1
    length =2
  }
  return str.substring(index, index + length)
}

console.log(med('Henderrson'))

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle("P!t"));