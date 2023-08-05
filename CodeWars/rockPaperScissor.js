// function rps(p1, p2) {
//   if (
//     (p1 === "rock" || "scissors" || "paper") &&
//     (p2 === "scissors" || "paper" || "rock")
//   ) {
//     console.log("Player 1 Wins");
//   }
//   else if (
//     (p1 === "scissors" || "paper" || "rock") &&
//     (p2 === "rock" || "scissors" || "paper")
//   ) {
//     console.log("Player 2 Wins");
//   } if (p1 === p2) {
//     console.log("Draw");
//   }
// }
// rps("rock", "paper");

function rps(p1, p2) {
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    console.log("Player 1 Wins");
  } else if (
    (p1 === "scissors" && p2 === "rock")|| (p1 === "paper" && p2 === "scissors") ||
    (p1 === "rock" && p2=== "paper")
  ) {
    console.log("Player 2 Wins");
  }
  else {
    console.log("Draw");
  }
}
rps("rock", "rock");


function rps(p1, p2) {
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 Wins";
  } else if (
    (p1 === "scissors" && p2 === "rock")|| (p1 === "paper" && p2 === "scissors") ||
    (p1 === "rock" && p2=== "paper")
  ) {
    return "Player 2 Wins";
  }
  else {
    return "Draw";
  }
}
rps("rock", "rock");

// function rps(p1, p2) {
//   return p1 == "scissor" && p2 == "paper"
//     ? "Player 1 won"
//     : p1 == "scissor" && p2 == "rock"
//     ? "Player 2 won"
//     : (p1 == "scissor" && p2 == "scissor") ||
//       (p1 == "rock" && p2 == "rock") ||
//       (p1 == "paper" && p2 == "paper")
//     ? "Draw"
//     : "No game";
// }
// rps("paper", "paper");
