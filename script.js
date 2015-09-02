
//asks user winning score
var inputMaxScore = prompt("What is the winning score?");
var maxScore = parseInt(inputMaxScore);

//prompts user to input a score, converts it to an integer, and adds it to total score
var score = 0;
while (score < maxScore) {
  var input = prompt("How many points did you score?");
  var points = parseInt(input);
  var totalScore = score += points;
}

//displays score if greater than 0. alerts user if a number was not entered 
if (points > 0) {
document.write(totalScore);
} else if (points < 0) {
  alert("You did not enter a valid number.");
} else {
  alert("You did not enter a valid number.");
}


