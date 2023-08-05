

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

let command = (trafficLight("RED"))
console.log(command)
