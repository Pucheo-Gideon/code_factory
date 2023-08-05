const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
  "I love my" +
  myNoun +
  ". " +
  "She is " +
  myAdjective +
  "." +
  " She " +
  myVerb +
  " a race last year. " +
  "She is so lovely and " +
  myAdverb +
  " takes a strong liking to fellow specie.";

//    console.log(wordBlanks);

   let wordBlanks2 = myNoun + ". " + myAdjective + ". " + myVerb + ". "+ myAdverb;
//    console.log(wordBlanks2);

   let first = 'sandra';
//    console.log(first);

   let nameInitials = first[3];
//    console.log(nameInitials);

   let myArray = [23, 'You\'re special!', 24]
   let myData = myArray[1];
//    console.log(myData[9]);

//    console.log(myArray);
   //    myArray[1] = 'C\'mon girl. You\re such a genius!'

   let disArray = [[23, 45, 67,0], [45, 78, 10], [12, 78, 90], [23, 1, 9], 90, 56];

  disArray.push([34, 56, 78]);
  disArray.push(['how', 44, 'Keep Coming', '45']);

console.log(disArray);
console.log(disArray[4]);

let disArray2 = disArray[7][3];

// console.log(disArray2)

let shoppingList = [['Bag of rice', 50], ['Body spray', 20], ['Footwears', 14], ['Handbag', 11], ['Comb', 10], ['Soap dish', 90]]

console.log(shoppingList[3][0].length);