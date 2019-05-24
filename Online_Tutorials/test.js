/*
 * Intro to JavaScript
 */

alert("BOOM!"); // pop-up box

var someBooleanVar = "not a Boolean";
var setVar = 1;

if (someBooleanVar == true) {
  document.write("someBooleanVar is true");
} else if (someBooleanVar == false) {
  document.write("someBooleanVar is false");
} else {
  document.write("someBooleanVar is not a Boolean" + "<br>");
  document.write("someBooleanVar = \"" + someBooleanVar + "\"<br>");
}

if (someBooleanVar && setVar == 1) {
  document.write("someBooleanVar is initialized and setVar=1")
}
