/**Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

function nameFunc(name){
  if( (name[0] === "R" || name[0] =="r")){
    console.log(name + " plays banjo")
  }else{
    console.log(name + " does not play banjo")
  }
}

// nameFunc("rarit");

function nameFunc(name){
  if(name.startsWith("R") || name.startsWith("r")){
    console.log(name + " plays banjo")
  }else{
    console.log(name + " does not play banjo")
  }
}

// nameFunc("rarit");

function nameFunc(name){
    return name[0] == "R" || name[0] =="r"? name + " plays banjo": name + " does not play banjo"
}
// console.log(nameFunc("Rarit"))


function nameFunc(name){
    return name.split('').shift() == "R" || name.split('').shift() == "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}
console.log(nameFunc("rarit"))
