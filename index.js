let count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count = count + 1;
  } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count = count - 1;
  }
  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold"
  }

  return "Change Me";
  // Only change code above this line
}

console.log(cc("A"))