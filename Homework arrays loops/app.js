console.log("works");

// Homework 1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function tellStory([name, mood, activity]) {
// let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}.
// They are ${activity} all day. The end.`;
// alert(story);
// }

// tellStory(["Dimi", "happy", "coding"]);

// Homework 2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function validateNumber(num) {
//  if (typeof num !== `number` || isNaN(num)) {
//   return console.log(`${num} is not a valid numbers.`);
// }
//  return true;
// }

// function sumArray(numbers) {
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//  if (validateNumber(numbers[i])) {
//   sum += numbers[i];
//  } else {
//    return console.log("invalid number");
//  }
// }
// alert(`the sum is: ${sum}`);
// }

// sumArray([1, 2, 3, 4, 5]);

// function createStringFromArrays(arrayOfStrings) {
// let resultArray = [];
// for (let i = 0; i < arrayOfStrings.length; i++) {
//    resultArray.push(arrayOfStrings[i]);
//  }
//  let resultString = ` `;

//  for (let i = 0; i < resultArray.length; i++) {
//    resultString += resultArray[i];
//   if (i < resultArray.length - 1) {
//    resultString += ` `;
//  }
//  }
//  return resultString;
// }

// let arrayOne = ["Hello", "there", "students", "of", "SEDC", "!"];
// let resultString = createStringFromArrays(arrayOne);
// console.log(resultString);

// Homework 4 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// for (let i = 1; i <= 20; i++) {
//  if (i % 2 === 0) {
// console.log(`${i} is even`);
// } else {
//  console.log(`${i} is odd`);
// }
// }

// Homework 5 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function findMinMaxSum(arr) {
// if (!Array.isArray(arr) || arr.length === 0) {
// console.log("Invalid input. Please provide a non-empty array of numbers.");
// return;
// }

// let max = Math.max.apply(null, arr);
// let min = Math.min.apply(null, arr);

// sum = max + min;
// console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
// return sum;
// }

// let numbersArray = [3, 5, 6, 8, 11];
// findMinMaxSum(numbersArray);

function createFullNames(firstNames, lastNames) {
  let fullNames = [];

  for (let i = 0; i < firstNames.length && i < lastNames.length; i++) {
    let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
    fullNames.push(fullName);
  }

  return fullNames;
}

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let resultFullNames = createFullNames(firstNames, lastNames);
console.log(resultFullNames);
