

function trafficLight(colour) {
  let message;
  if (colour == "Red" || colour == "red" || colour == "RED") {
    message = "STOP!"
  } else if (colour == "Yellow" || colour == "yellow" || colour == "YELLOW") {
    message = "READY!";
  } else if (colour == "Green" || colour == "green"|| colour == "RED") {
    message = "GO!";
  } else {
    message = "Please try again!";
  }
  return message
}

let command = (trafficLight("yellow"))
console.log(command)


// STEP I
// Declare function, with a function name "trafficLight" and a single parameter(colour)

// STEP II
// Declare a variable "Message" locally to output the result

// STEP III
// Use "if" and "elsee if" Condititional statements to compare user's inputs 
// and output the proper message if "true"

// STEP IV
// use return statement to return and store the value

// STEP V
// Call or invoke the function "trafficLight" with the arguments

// STEP VI
// Stor the returned value in declared variable "command"


