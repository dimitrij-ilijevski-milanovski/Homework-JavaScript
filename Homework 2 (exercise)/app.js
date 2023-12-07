console.log("ALIVE!");
let userInput = prompt("How much money do you have?");
let numberResult = Number(userInput);
console.log(userInput, numberResult);
if (Number.isNaN(numberResult)) {
  console.log("Invalid input, Enter NUMBERS ONLY!");
} else if (numberResult >= 35) {
  console.log("Go to the CLUB!!!  ");
} else if (numberResult >= 25) {
  console.log("Go to a restaurant!");
} else if (numberResult >= 15) {
  console.log("Buy PLASET!");
} else console.log("Go study to earn money!!!!");
