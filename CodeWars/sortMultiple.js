function longest(s1, s2) {
  const newArray = [...s1, ...s2];
  let result = newArray.filter((element, index) => {
    return newArray.indexOf(element) === index;
  });
  return result.sort().join("");
}

// console.log(
//   longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
// );

const string = (str) => {
  return str.split("").reverse().join("");
};

// console.log(string("donaldo"))

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  //   return `${ +inputString} years old`
  // return inputString.length
  //   return `${Number(inputString.slice(0,1)) + inputString.slice(1)}`
  return Number(inputString.slice(0, 1));
}

// console.log(getAge("4 years old"))

function returnNumber(num) {
  return `${parseInt(num) * 500}`;
}

// console.log(returnNumber("500$"));

function mathFunc(num) {
  return Math.round(num);
}

// console.log(mathFunc(-3.55632));

function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  } else if (employed === false && vacation === true) {
    return false;
  } else {
    return false;
  }
}

// console.log(setAlarm(true, false))

// function getGrade(s1, s2, s3) {
//   let scores = (s1 + s2 + s3) / 3;

//   if (scores >= 90 || scores === 100) {
//     return "A";
//   } else if (scores >= 80 || scores === 90) {
//     return "B";
//   } else if (scores >= 70 || scores === 80) {
//     return "C";
//   } else if (scores >= 60 || scores === 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

const getGrade = (...s) =>{
    const average = s.reduce((a,b)=> a + b)/s.length
    
    if(average >= 90) return "A"
    else if(average >= 80) return "B"
    else if(average >= 70) return "C"
    else if(average >= 60) return "D"
    else return "F"
}
// console.log(getGrade(95, 50, 93, 90));

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

// console.log(getRandomCard())



const transport = (d) => {

  let sum = 40 * d
  // let fifty_Percent = (sum)/100 *50
  // let twenty_Percent = (sum)/100 * 20
  let fifty_Percent = sum - 50
  let twenty_Percent = sum - 20

  return d >= 7 ? fifty_Percent: d >= 3 ? twenty_Percent : sum
  // Using If Else Blocks 
  // if(d>=7){
  //   return total_Amount = sum - fifty_Percent
  //   return fifty_Percent
  // } else if(d >=3){
  //   return total_Amount = sum - twenty_Percent
  //   return twenty_Percent
  // } else{
  //  return sum
  // }

  //  using ternary Operators
};

console.log(transport(7))