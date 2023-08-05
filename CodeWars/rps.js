function rps(p1, p2) {
  if (p1 === p2) {
    return "The result is tie";
  } else if (p1 === "rock") {
    if (p2 === "scissors") {
      return "rocks";
    } else {
      return "paper wins";
    }
  } else if (p1 === "paper") {
    if (p2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  } else if (p1 === "scissors") {
    if (p2 === "rock") {
      return "rock wins";
    } else {
      return "scissors win";
    }
  }
}

// rps("rock", "rock");
