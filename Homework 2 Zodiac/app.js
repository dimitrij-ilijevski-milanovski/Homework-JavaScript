let userInput = prompt("Enter your year!");
let numberResult = Number(userInput);
let parseIntResult = parseInt(userInput);

console.log(userInput, parseIntResult, numberResult);

if (Number.isNaN(numberResult)) {
  console.log("Invalid input, Enter NUMBERS ONLY!");
} else {
  let chinaYear = (numberResult - 4) % 12;
  console.log(chinaYear);
  if (chinaYear === 11) {
    console.log("PIG!");
  } else if (chinaYear === 10) {
    console.log("Dog!");
  } else if (chinaYear === 9) {
    console.log("Rooster");
  } else if (chinaYear === 8) {
    console.log("Monkey");
  } else if (chinaYear === 7) {
    console.log("Goat");
  } else if (chinaYear === 6) {
    console.log("Horse");
  } else if (chinaYear === 5) {
    console.log("Snake");
  } else if (chinaYear === 4) {
    console.log("Dragon");
  } else if (chinaYear === 3) {
    console.log("Rabbit");
  } else if (chinaYear === 2) {
    console.log("Tiger");
  } else if (chinaYear === 1) {
    console.log("Ox");
  } else {
    console.log("Rat");
  }
}
