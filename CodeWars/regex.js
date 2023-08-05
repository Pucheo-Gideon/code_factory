// let regex = /[JKVBSJ]/
// console.log(regex)

// let sentence ="James has a bulldog"

let testRegex = (sentence, regex) => {
  //   const regex = /dog|cat|dolphins|monkey/;
  return regex.test(sentence);
};

// console.log(testRegex("Fash yames a Fish", /james/i));

let matchRegex = (str, match) => {
  const result = str.match(match); // checks if the string contains a match and returns the result
  //    const result =  match.test(str) //checks for at least a single match. Returns true or false if it matches
  return result.input;
};

// returns a null if there are no matches. Returns an array if it is provided incase of a null
// console.log(
//   matchRegex("HTML is a the skeletal structure of the web", /HTML/) || []
// );

const replaceRegex = (regex, replace) => {
  // str.replace(regex, replacement)
  let str = "I Love Html"
  return str.replace(regex, replace)
};

// console.log(
//   replaceRegex(
//     /html/i,
//     "$& and Javascript"
//   )
// );

const getPhoneDigits = (phone) => {
    let regex = /\D/g
   return phone.replace(regex, "")
}

// console.log(getPhoneDigits("+7(903)-123-45-67"));

// Character Classes

const characterClass = (classes) =>{

  let regex = /\d - \d/

  return classes.match(regex)
}

// console.log(characterClass("1 - 5"));

function match_Number_Alphabet(range){
  let regex = /[a-z0-9]/ig
  return range.match(regex).join("-")
}

console.log(match_Number_Alphabet("abcdefg123490ijkelnmrtyk"))