


//beginning score
var score = 0;
while (score < 10) {
  var input = prompt("How many points did you score?");
  var points = parseInt(input);
  var totalScore = score += points;
}

//displays score 
if (points > 0) {
document.write(totalScore);
} else if (points < 0) {
  alert("You did not enter a valid number.");
} else {
  alert("You did not enter a valid number.");
}


