var home = 0;
document.write(home);
var pointsScored = prompt("How many points did you score?");
if (parseInt(pointsScored) >= 1) {
  document.write(home += parseInt(pointsScored));
} else {
  alert("That is not a valid number.")
}